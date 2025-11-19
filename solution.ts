type FormatValue = (value : number|string|boolean)=>
    number|string|boolean;

const formatValue: FormatValue= (value)=>
{
    if(typeof value ==='number')
    {
        return (value*10);
    }
    if(typeof value ==='string')
    {
        return value.toUpperCase();
    }
    if(typeof value ==='boolean')
    {
        return !value;
    }
    throw new Error("invalid type")
    
}



type Getlength = (input: string | any[]) => number;

const getLength: Getlength =(input)  =>
{
    if(typeof input ==='string')
        return input.length;
    if(Array.isArray(input))
        return input.length;
    throw new Error("invalid type")
}




class Person {

    constructor (public name: string , public age: number){

    }
    getDetails(): string{
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}



type Item ={
    title : string;
    rating : number;
}

function filterByRating(items: Item[]): Item[]{
   const filterByArray: Item[]=[];
   for(const item of items)
   {
       if(item.rating >=4)
        filterByArray.push(item);
   }
   return filterByArray;
}



type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
};

function filterActiveUsers(users: User[]): User[]{
   const filterByArray: User[]=[];
   for(const user of users)
   {
       if(user.isActive ===true)
        filterByArray.push(user);
   }
   return filterByArray;
}





interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}
function printBookDetails(book: Book): void {
    const availableText=book.isAvailable ? 'Yes':'No';
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availableText}`);
}



function getUniqueValues(arr1: (number | string)[], arr2: (number | string)[]): (number | string)[] {
    const result: (number | string)[] = [];

    for (let i = 0; i < arr1.length; i++) {
        let found = false;
        for (let j = 0; j < result.length; j++) {
            if (result[j] === arr1[i]) {
                found = true;
                break;
            }
        }
        if (!found) {
            result.push(arr1[i]);
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        let found = false;
        for (let j = 0; j < result.length; j++) {
            if (result[j] === arr2[i]) {
                found = true;
                break;
            }
        }
        if (!found) {
            result.push(arr2[i]);
        }
    }

    return result;
}






type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number; 
};

function calculateTotalPrice(products: Product[]): number {
    let total = 0;
    for (const product of products) {
        let price = product.price * product.quantity;
        if (product.discount) {
            price = price * (1 - product.discount / 100);
        }
        total += price;
    }
    return total;
}



