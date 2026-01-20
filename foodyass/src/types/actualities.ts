import { ServiceCardProps } from "./children";

export interface Actualite {
  id: string;
  category:
    | "Innovations Mon Toubib"
    | "Santé & prévention"
    | "Études & données marocaines"
    | "Formations & webinaires"
    | "Vie du projet";
  title: string;
  description: string;
  image: string;
  date: string;
  content: string;
  author?: string;
  tags?: string[];
  readTime?: string;
}

export type Category = Actualite["category"];

export interface ActualityPageParams {
  params: Promise<{ id: string }>;
}

export interface CategoryTabsProps {
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export interface DpspCardProps extends Omit<ServiceCardProps, "icon" | "alt"> {
  centered?: boolean;
  icon?: string;
  alt?: string;
  desc?: string;
}
export interface ActualiteCardProps {
  actualite: Actualite;
  index: number;
}

export interface ActualitesListProps {
  actualites: Actualite[];
}
