export interface Results {
  next?: {
    page: number;
    limit: number;
  };
  previous?: {
    page: number;
    limit: number;
  };
  results: Link[];
}

export interface Link {
  id: number;
  shortLink: string;
  fullLink: string;
}


