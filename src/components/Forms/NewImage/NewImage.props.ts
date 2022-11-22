import { Image } from "../../../redux/gallery/types";

export interface NewImageFormInput {
  name: string;
  url: string;
  slug?: string;
  tags?: string;
}

export interface NewImageProps {
  isUpdateImage: boolean;
  imageDetail?: Image;
}
