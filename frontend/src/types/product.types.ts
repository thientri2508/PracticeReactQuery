export interface Product {
    id: number;
    title: string;
    description: string;
    category: number;
    price: number;
    brand: string;
    thumbnail: string;
    images: [string];
}

export interface ProductQueryParams {
    category?: string;
}
