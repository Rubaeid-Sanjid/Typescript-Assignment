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

  
}
