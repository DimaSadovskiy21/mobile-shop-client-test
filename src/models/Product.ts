import { UserType } from "./User";

export type ProductType = {
    products: ProductsType[];
    cursor: string;
    hasNextPage: boolean;
}

type ProductsType = {
    title: string;
    images: string[];
    price: string;
    sizes: string[];
    description: string;
    sex: 'women' | 'men';
    typeOfClothing: string;
    addedBy: UserType[];
    favoriteCount: number;
    favoritedBy: UserType[];
    createdAt: string;
    updatedAt: string;
}