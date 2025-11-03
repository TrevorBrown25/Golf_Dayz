const React = require('react');

const canUseDom = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.history !== 'undefined';

function normalizeBase(base) {
  if (!base) {
    return '/';
  }
  let normalized = base;
  if (/^https?:\/\//i.test(normalized)) {
    try {
      normalized = new URL(normalized).pathname;
    } catch (error) {
      normalized = '/';
    }
  }
  if (!normalized.startsWith('/')) {
    normalized = `/${normalized}`;
  }
  if (normalized.length > 1 && normalized.endsWith('/')) {
    normalized = normalized.slice(0, -1);
  }
  return normalized;
}

function ensureLeadingSlash(path) {
  if (!path) {
    return '/';
  }
  return path.startsWith('/') ? path : `/${path}`;
}

function stripBasename(pathname, basename) {
  if (!basename || basename === '/') {
    return ensureLeadingSlash(pathname || '/');
  }
  if (pathname === basename) {
    return '/';
  }
  if (pathname.startsWith(`${basename}/`)) {
    const remainder = pathname.slice(basename.length);
    return remainder ? ensureLeadingSlash(remainder) : '/';
  }
  return ensureLeadingSlash(pathname || '/');
}

function getCurrentLocation(basename) {
  if (!canUseDom) {
    return { pathname: '/' };
  }
  return { pathname: stripBasename(window.location.pathname, basename) };
}

const RouterContext = React.createContext({
  basename: '/',
  location: { pathname: '/' },
  navigate: () => {}
});

function resolveTo(to, basename) {
  if (typeof to !== 'string') {
    throw new Error('navigate/to must be a string');
  }
  if (/^[a-z]+:\/\//i.test(to)) {
    return { fullPath: to, relativePath: to };
  }
  let relativePath = to;
  if (!relativePath.startsWith('/')) {
    const current = getCurrentLocation(basename).pathname;
    const basePath = current.replace(/\/?[^/]*$/, '/');
    relativePath = normalizePath(`${basePath}${relativePath}`);
  }
  relativePath = ensureLeadingSlash(relativePath);
  let fullPath = relativePath;
  if (basename && basename !== '/') {
    fullPath = basename === '/' ? relativePath : `${basename}${relativePath === '/' ? '' : relativePath}`;
  }
  if (!fullPath.startsWith('/')) {
    fullPath = ensureLeadingSlash(fullPath);
  }
  return { fullPath, relativePath };
}

function normalizePath(path) {
  const segments = path.split('/');
  const stack = [];
  for (const segment of segments) {
    if (!segment || segment === '.') {
      continue;
    }
    if (segment === '..') {
      stack.pop();
    } else {
      stack.push(segment);
    }
  }
  return `/${stack.join('/')}` || '/';
}

function matchPath(path, pathname) {
  if (!path || path === '/') {
    return pathname === '/';
  }
  if (path === '*') {
    return true;
  }
  if (path.endsWith('/*')) {
    const base = ensureLeadingSlash(path.slice(0, -2));
    return pathname === base || pathname.startsWith(`${base}/`);
  }
  return ensureLeadingSlash(path) === pathname;
}

function BrowserRouter(props) {
  if (!canUseDom) {
    throw new Error('BrowserRouter requires a DOM-enabled environment');
  }
  const basename = normalizeBase(props.basename);
  const [location, setLocation] = React.useState(() => getCurrentLocation(basename));

  React.useEffect(() => {
    function handlePop() {
      setLocation(getCurrentLocation(basename));
    }
    window.addEventListener('popstate', handlePop);
    return () => {
      window.removeEventListener('popstate', handlePop);
    };
  }, [basename]);

  const navigate = React.useCallback(
    (to, options) => {
      if (!canUseDom) {
        return;
      }
      if (typeof to === 'number') {
        window.history.go(to);
        return;
      }
      const { fullPath, relativePath } = resolveTo(to, basename);
      if (/^[a-z]+:\/\//i.test(fullPath)) {
        window.location.assign(fullPath);
        return;
      }
      if (options && options.replace) {
        window.history.replaceState(null, '', fullPath);
      } else {
        window.history.pushState(null, '', fullPath);
      }
      setLocation({ pathname: relativePath });
    },
    [basename]
  );

  const value = React.useMemo(
    () => ({
      basename,
      location,
      navigate
    }),
    [basename, location, navigate]
  );

  return React.createElement(RouterContext.Provider, { value }, props.children);
}

function Routes(props) {
  const { location } = React.useContext(RouterContext);
  const children = React.Children.toArray(props.children);
  for (const child of children) {
    if (!React.isValidElement(child)) {
      continue;
    }
    if (child.type !== Route) {
      continue;
    }
    const { path = '*' } = child.props;
    if (matchPath(path, location.pathname)) {
      return child.props.element || null;
    }
  }
  return null;
}

function Route() {
  return null;
}

const Link = React.forwardRef(function Link(props, ref) {
  const { to, onClick, target, children, ...rest } = props;
  const { basename, navigate } = React.useContext(RouterContext);
  const { fullPath } = resolveTo(typeof to === 'string' ? to : String(to), basename);

  function handleClick(event) {
    if (onClick) {
      onClick(event);
    }
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      (target && target !== '_self') ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey
    ) {
      return;
    }
    event.preventDefault();
    navigate(to);
  }

  return React.createElement('a', { ...rest, href: fullPath, onClick: handleClick, ref }, children);
});

function useLocation() {
  const context = React.useContext(RouterContext);
  return context.location;
}

function useNavigate() {
  const context = React.useContext(RouterContext);
  return context.navigate;
}

module.exports = {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate
};
