export interface Tag {
  id: number;
  title: string;
}

export interface Image {
  id: number;
  name: string;
  url: string;
  slug: string;
  owner_username: string;
  tags: Tag[];
}

export interface GalleryResponse<T> {
  limit: number;
  offset: number;
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface GalleryState {
  isLoading: boolean;
  error: string;
  data: GalleryResponse<Image> | null;
}
