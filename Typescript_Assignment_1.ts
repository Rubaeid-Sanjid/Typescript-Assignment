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
  const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book B", rating: 4.00 },
  { title: "Book C", rating: 5.0 }
];

const result = filterByRating(books);
console.log(result);

// Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]
}
