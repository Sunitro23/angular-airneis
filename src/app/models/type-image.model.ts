import { Product } from "./type-product.model";

export interface Image {
    idImage: number;
    path: string;
    alt: string;
    idProduct: Product;
}
export interface ImageFile {
    image : Image;
    file : string;
}