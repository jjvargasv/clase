import { Category } from "./category.interface";

export interface CategoryResponse{
    ok: boolean;
    path?:string;
    msj?:string;
    categories: Category[]
}