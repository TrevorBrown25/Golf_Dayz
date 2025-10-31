export interface RuleSectionData {
  title: string;
  description?: string;
  points: string[];
}

export interface Owner {
  name: string;
  teamName: string;
  division: string;
  hometown: string;
  bio: string;
}

export interface Division {
  name: string;
  summary: string;
  captains: string[];
}

export interface ScheduleEntry {
  week: number;
  date: string;
  course: string;
  format: string;
  featuredEvent?: string;
}

export interface PayoutTier {
  stage: string;
  amount: string;
  notes: string;
}

export interface ResourceLink {
  label: string;
  url: string;
}

export const leagueOverview = {
  title: 'Golf Dayz Fantasy League',
  tagline: 'Build the ultimate golf roster and ride the highs of every tournament week.'
};

export const ruleSections: RuleSectionData[] = [
  {
    title: 'Entry & Rosters',
    points: [
      'Entry fee is set at $150 per owner and due prior to draft night.',
      'Each owner drafts a roster of 6 golfers plus 2 bench spots for rotational strategy.',
      'Waiver claims process opens every Monday at 9am with reverse standings priority.'
    ]
  },
  {
    title: 'Regular Season Format',
    points: [
      'Season runs for 14 weeks spanning the PGA spring swing.',
      'Head-to-head matchups each week with win/loss/tie tracked in division standings.',
      'Top performers from each division plus two wild cards advance to playoffs.'
    ]
  },
  {
    title: 'Weekly Draft & Lineups',
    points: [
      'Live draft hosted every Wednesday evening with snake order within divisions.',
      'Active lineup locks at Thursday 7am ET before the first tee time.',
      'Bench golfers may be swapped in for missed cuts before Saturday 8am ET.'
    ]
  },
  {
    title: 'Scoring System',
    points: [
      'FedEx Cup points scored by active golfers translate directly to fantasy points.',
      'Bonus of +15 points for tournament winners and +5 for top-10 finishes.',
      'Low team round each week earns a 10-point morale boost applied to that matchup.'
    ]
  },
  {
    title: 'Playoffs',
    points: [
      'Four-week playoff culminating at East Lake with double points on Championship Sunday.',
      'Division champions are reseeded 1-4 with wild cards filling seeds 5-8.',
      'Third-place consolation matchup determines final payout positioning.'
    ]
  }
];

export const divisions: Division[] = [
  {
    name: 'Seaside Division',
    summary: 'Links golf aficionados who thrive in windy conditions and clutch putts.',
    captains: ['Mia Watkins', 'Cole Turner']
  },
  {
    name: 'Highland Division',
    summary: 'Ball-strikers that live for high fade approaches on championship layouts.',
    captains: ['Jordan Blake', 'Priya Nair']
  }
];

export const owners: Owner[] = [
  {
    name: 'Mia Watkins',
    teamName: 'Fairway Fireflies',
    division: 'Seaside Division',
    hometown: 'Charleston, SC',
    bio: 'Short-game wizard and reigning champion looking for a repeat run.'
  },
  {
    name: 'Cole Turner',
    teamName: 'Turner & Burners',
    division: 'Seaside Division',
    hometown: 'San Diego, CA',
    bio: 'Analytics guru famous for mid-season waiver steals.'
  },
  {
    name: 'Jordan Blake',
    teamName: 'Blake Bunker Busters',
    division: 'Highland Division',
    hometown: 'Denver, CO',
    bio: 'Altitude training enthusiast who drafts the biggest drivers on tour.'
  },
  {
    name: 'Priya Nair',
    teamName: 'Spin Doctors',
    division: 'Highland Division',
    hometown: 'Boston, MA',
    bio: 'Matchup tactician known for savvy lineup shuffles on Sundays.'
  },
  {
    name: 'Felix Romero',
    teamName: 'Romero Rollers',
    division: 'Seaside Division',
    hometown: 'Miami, FL',
    bio: 'Loves the Florida swing and early-season sleeper picks.'
  },
  {
    name: 'Harper Lee',
    teamName: 'Green Jacket Goals',
    division: 'Highland Division',
    hometown: 'Seattle, WA',
    bio: 'Weatherproof competitor whose teams never miss a cut.'
  }
];

export const schedule: ScheduleEntry[] = [
  {
    week: 1,
    date: 'March 7 - 10',
    course: 'Bay Hill Club',
    format: 'Stroke Play',
    featuredEvent: 'Arnold Palmer Invitational'
  },
  {
    week: 2,
    date: 'March 14 - 17',
    course: 'TPC Sawgrass',
    format: 'Stroke Play',
    featuredEvent: 'THE PLAYERS Championship'
  },
  {
    week: 3,
    date: 'March 21 - 24',
    course: 'Innisbrook Resort',
    format: 'Stroke Play',
    featuredEvent: 'Valspar Championship'
  },
  {
    week: 4,
    date: 'March 28 - 31',
    course: 'Austin Country Club',
    format: 'Match Play',
    featuredEvent: 'Dell Technologies Match Play'
  },
  {
    week: 5,
    date: 'April 4 - 7',
    course: 'Augusta National',
    format: 'Stroke Play',
    featuredEvent: 'The Masters'
  }
];

export const payouts: PayoutTier[] = [
  {
    stage: 'Champion',
    amount: '$1,200',
    notes: 'Trophy, bragging rights, and custom league polo.'
  },
  {
    stage: 'Runner-Up',
    amount: '$600',
    notes: 'Cash prize plus a sleeve of commemorative Pro V1s.'
  },
  {
    stage: 'Third Place',
    amount: '$300',
    notes: 'Keeps the lights on for next season’s entry fee.'
  },
  {
    stage: 'Weekly High Score',
    amount: '$50',
    notes: 'Awarded to the owner with the highest weekly point total.'
  }
];

export const resources: ResourceLink[] = [
  {
    label: 'Official PGA Tour Schedule',
    url: 'https://www.pgatour.com/schedule'
  },
  {
    label: 'Fantasy Golf Strategy Guide',
    url: 'https://www.golfdigest.com/tag/fantasy-golf'
  },
  {
    label: 'Golf Dayz Discord Locker Room',
    url: '#'
  }
];
