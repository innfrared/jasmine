export interface Category {
  id: number;
  name?: string;
  svg?: string;
  url?: string;
  parent_id?: number | null;
}
