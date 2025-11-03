import * as React from 'react';

export interface BrowserRouterProps {
  basename?: string;
  children?: React.ReactNode;
}

export declare function BrowserRouter(props: BrowserRouterProps): JSX.Element;

export interface RoutesProps {
  children?: React.ReactNode;
}

export declare function Routes(props: RoutesProps): React.ReactElement | null;

export interface RouteProps {
  path?: string;
  element?: React.ReactElement | null;
}

export declare function Route(props: RouteProps): React.ReactElement | null;

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
}

export declare const Link: React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLAnchorElement>>;

export declare function useLocation(): { pathname: string };

export declare function useNavigate(): (to: string, options?: { replace?: boolean }) => void;
