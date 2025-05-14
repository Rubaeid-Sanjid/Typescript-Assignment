{
  function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === true || toUpper === undefined) {
      return input.toUpperCase();
    } else {
      return input.toLowerCase();
    }
  }

  function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    const filteredItems = items.filter((item : {title : String; rating : number}) => item.rating >= 4);
    return filteredItems;
  }

  function concatenateArrays<T>(...arrays: T[][]): T[]{
    const concatedArray = arrays.reduce((newArray : T[], currArray : T[]) => newArray.concat(currArray), []);
    return concatedArray;
  }

  class Vehicle{
    private make : string;
    year : number;

    constructor(make : string, year : number){
      this.make = make;
      this.year = year;
    }

    getInfo(){
      console.log(`Make: ${this.make}, Year: ${this.year}`);
    }
  }
  class Car extends Vehicle{
    private model : string;
    constructor(make: string, year: number, model : string){
      super(make, year)
      this.model = model;
    }
    getModel(){
      console.log(`Model: ${this.model}`);
    }
  }

  function processValue(value: string | number): number{
    if(typeof value === "string"){
      return value.length;      
    }
    else{
      return (value * 2);
    }
  }

  interface Product {
    name: string;
    price: number;
  }

  function getMostExpensiveProduct(products: Product[]): Product | null{
    const productPrices = products.map(product => product.price);
    const maxPrice = Math.max(...productPrices);
    const expensiveProduct = products.find(product => product.price === maxPrice) || null;
    return expensiveProduct;
  }

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }

  function getDayType(day: Day): string{
    switch(day){
      case Day.Saturday:
        return "Weekend";
      case Day.Sunday:
        return "Weekend";
      default:
        return "Weekday"
    }
  }

  async function squareAsync(n: number): Promise<number>{
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        if(n >= 0){
          resolve(n * n);
        }
        else{
          reject("Error: Negative number not allowed");
        }
      }, 1000)
    })
  }
}
