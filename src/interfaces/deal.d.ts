export interface IDealBase {
    title: string;
    startingPrice: number;
    slogan: string;
    backgroundImage: string;//image src url
    rating: number;
    numberOfNights: number;
    Logos: Array<string>;//logo images
    link: string;
    details: Array<string>;
    expiryDate: number; //should be Data, then calculated by dayjs or similar js tools
}   