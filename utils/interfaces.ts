import { ParsedUrlQuery } from "querystring";

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

export interface IParams extends ParsedUrlQuery {
  slug: string;
}
