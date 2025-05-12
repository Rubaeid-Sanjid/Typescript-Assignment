{
  function formatString(input: string, toUpper?: boolean = true): string {
    if (toUpper) {
      console.log(input.toUpperCase());
    } else {
      console.log(input.toLowerCase());
    }
  }

  formatString("Hello"); // Output: "HELLO"
  formatString("Hello", true); // Output: "HELLO"
  formatString("Hello", false); // Output: "hello"
}
