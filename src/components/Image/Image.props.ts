import { Tag } from "../../redux/gallery/types";

export interface ImageProps {
  name: string;
  url: string;
  slug: string;
  isEditable: boolean;
  tags: Tag[];
}
