export interface Results {
  next?: {
    page: number;
    limit: number;
  };
  previous?: {
    page: number;
    limit: number;
  };
  results?: Links[];
}

export interface Links {
  id: number;
  shortLink: string;
  fullLink: string;
}
