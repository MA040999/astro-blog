import type { StrapiImageResponse } from "./StrapiResponse";

export type Blog = {
  id: number;
  attributes: {
    title: string;
    content: string;
    visibility: boolean;
    description: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    featured_image: { data: { id: number; attributes: StrapiImageResponse } };
    author: {
      data: {
        id: number;
        attributes: {
          name: string;
          occupation: string;
          createdAt: string;
          updatedAt: string;
          publishedAt: string;
          locale: string;
          display_picture: {
            data: { id: number; attributes: StrapiImageResponse };
          };
        };
      };
    };
    categories: {
      data: {
        id?: number;
        attributes?: {
          name: string;
          slug: string;
          createdAt: string;
          updatedAt: string;
          publishedAt: string;
          locale: string;
        };
      }[];
    };
    tags: { id: number; tag: string }[];
    localizations: { data: [] };
  };
};
