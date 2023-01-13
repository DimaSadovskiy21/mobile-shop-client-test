import { ProductType } from "./Product";

export type UserType = {
    id: string;
    username: string;
    email: string;
    password: string;
    secretWord: string;
    avatar: string;
    roles: string[];
    isActivated: boolean;
    activationLink: string;
    favorites: ProductType[];
    cart: ProductType[];
    createdAt: string;
    updatedAt: string;
}