import sp1 from '../assets/products/sp1.jpg'
import sp2 from '../assets/products/sp2.jpg'
import sp3 from '../assets/products/sp3.jpg'
import sp4 from '../assets/products/sp4.jpg'
import sp5 from '../assets/products/sp5.jpg'
import sp6 from '../assets/products/sp6.jpg'
import sp7 from '../assets/products/sp7.jpg'
import sp8 from '../assets/products/sp8.jpg'

export interface Variant {
    memory: string;
    price: number;
    price_sale: number;
}

export interface Product {
    id: number;
    name: string;
    description: string;
    brand: string;
    src: string;
    variants: Variant[];
}

export const productsData: Product[] = [
    {
      id: 1,
      name: 'Samsung Galaxy S24 Ultra 64GB',
      description: 'Description for iPhone 13',
      brand: 'Sam Sung',
      src: sp1,
      variants: [
        { memory: '64GB', price: 30490000, price_sale: 25490000 },
        { memory: '128GB', price: 33490000, price_sale: 28490000 },
        { memory: '256GB', price: 37490000, price_sale: 31490000 },
      ],
    },
    {
      id: 2,
      name: 'iPhone 16 Pro 64GB | Chính hãng VN/A',
      description: 'Description for iPhone 13',
      brand: 'Apple',
      src: sp2,
      variants: [
        { memory: '64GB', price: 25990000, price_sale: 23990000 },
        { memory: '128GB', price: 28990000, price_sale: 26990000 },
        { memory: '256GB', price: 31990000, price_sale: 29990000 },
      ],
    },
    {
      id: 3,
      name: 'OPPO Reno10 Pro+ 5G 12GB 64GB',
      description: 'Description for iPhone 13',
      brand: 'Oppo',
      src: sp3,
      variants: [
        { memory: '64GB', price: 13990000, price_sale: 7990000 },
        { memory: '128GB', price: 16990000, price_sale: 10990000 },
        { memory: '256GB', price: 19990000, price_sale: 13990000 },
      ],
    },
    {
      id: 4,
      name: 'iPhone 15 Pro Max 64GB | Chính hãng VN/A',
      description: 'Description for iPhone 13',
      brand: 'Iphone',
      src: sp4,
      variants: [
        { memory: '64GB', price: 28990000, price_sale: 23390000 },
        { memory: '128GB', price: 31990000, price_sale: 26390000 },
        { memory: '256GB', price: 34990000, price_sale: 29390000 },
      ],
    },
    {
      id: 5,
      name: 'iPhone 13 64GB | Chính hãng VN/A',
      description: 'Description for iPhone 13',
      brand: 'Apple',
      src: sp5,
      variants: [
        { memory: '64GB', price: 14290000, price_sale: 10590000 },
        { memory: '128GB', price: 17290000, price_sale: 13590000 },
        { memory: '256GB', price: 20290000, price_sale: 16590000 },
      ],
    },
    {
      id: 6,
      name: 'Samsung Galaxy Z Fold6 12GB 64GB',
      description: 'Description for iPhone 13',
      brand: 'Sam Sung',
      src: sp6,
      variants: [
        { memory: '64GB', price: 37990000, price_sale: 33490000 },
        { memory: '128GB', price: 40990000, price_sale: 36490000 },
        { memory: '256GB', price: 43990000, price_sale: 39490000 },
      ],
    },
    {
      id: 7,
      name: 'iPhone 14 Pro Max 64GB | Chính hãng VN/A',
      description: 'Description for iPhone 13',
      brand: 'Apple',
      src: sp7,
      variants: [
        { memory: '64GB', price: 26990000, price_sale: 21990000 },
        { memory: '128GB', price: 29990000, price_sale: 24990000 },
        { memory: '256GB', price: 32990000, price_sale: 27990000 },
      ],
    },
    {
      id: 8,
      name: 'iPhone 12 64GB | Chính hãng VN/A ',
      description: 'Description for iPhone 13',
      brand: 'Apple',
      src: sp8,
      variants: [
        { memory: '64GB', price: 15990000, price_sale: 10990000 },
        { memory: '128GB', price: 18990000, price_sale: 13990000 },
        { memory: '256GB', price: 21990000, price_sale: 16990000 },
      ],
    },
];
  