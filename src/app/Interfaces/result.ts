export interface Results {
    data:string;
    children:Result[];
    title:string;
} 
export interface Result {
    data:any;
    title:string;
    thumbnail:string;
    url:string;
    permalink:string;
}