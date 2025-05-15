Hello everyone, recently I have explored TypeScript and I want to share about some simple topic of typescript that I have learned. We all know that right now TypeScript is a powerful language that helps us to write better JavaScript with types. Today I am going to share about two important topics of Typescript that usually people get asked in interview.

## 1. Differences between Interfaces and Types in TypeScript

Interfaces and types may look like same, but they have some differences. Both helps us define the structure of data.

### What is an Interface?

In Typescript an interface is a syntactical way where we define that what properties and methods an object should have. We use ‘interface’ keyword for declaring an interface. For example:

```bash
interface Person {
  name: string;
  age: number;
}
```

This means any object of type ‘Person’ must have a ‘name’ that is a string and an ‘age’ that is a number. For example:

```bash
const user : Person = {
  name: "Rubaeid",
  age: 24,
}
```

### What is a Type?

A type can also define the shape of an object, but it is more flexible. You can use types for primitives, unions, intersections, and more. We use ‘type’ keyword for declaring a type. For example:

```bash
type Person = {
  name: string;
  age: number;
};
```

Looks very similar to interface, right? Let’s make it more clear by differencing both.

### 1.1. Declaring premitive types:

We know there are built in primitive types in Typescript like number, string, boolean, null, and undefined types. We can use type alias for a primitive type as below:

```bash
type name = string;
```

Sometimes we combine primitive type with union to define a type alias. For example:

```bash
type NullOrUndefined = null | undefined;
```

But, in this case we can not use an interface to alias a primitive type. The interface can only be used for an object type. So, when we define a primitive type alias, we use type.

### 1.2. Extending:

Interfaces can extend other interfaces easily using ‘extends’ keyword.

```bash
interface User {
  name: string;
  age : number
}

interface UserWithRole extends User { role : string}
```

Here ‘UserWithRole’ is a new interface which is extended the ‘User’ interface.

Types can also do this, but it uses intersections ‘&’ operator.

```bash
type User = {
  name: string;
  age: number
}

type UserWithRole = User & { role : string };
```

### 1.3. Declaration Merging:

Interfaces can be declared multiple times and TypeScript merges them automatically.

```bash
interface Person {
  name: string;
}

interface Person {
  age: number;
}

const user : Person = {
  name: ‘Sanjid’,
  age: 24
}
```

Types can’t do this, it will throw an error if we try to define same types.

In conclusion, use interface when you want to describe the structure of an object and expect to extend or merge it. Use type when you want more flexibility like unions or more complex type compositions.

## 2. Use of the keyof keyword in TypeScript

Another keyword is very useful in Typescript which is 'keyof'. It helps us get the property names of a type as a union of string literal types. For example:

```bash
type Person = {
  name: string;
  age: number;
  location: string;
};
```

If we use,

```bash
type PersonKeys = keyof Person;
```

Here TypeScript will create a union type of the keys like below:

```bash
type PersonKeys = "name" | "age" | "location"
```

Now, ‘PersonKeys’ can only be one of these strings.

### Why is this Useful?

Sometimes, we want to create functions that work only with the keys of an object type. 'keyof' helps to restrict or check valid keys. Example:

```bash
type Person = {
  name: string;
  age: number;
  location: string;
};

const getPropertyValue = (obj : Person, key : keyof Person) =>{
  return obj[key];
}

const user = {
  name : "Sanjid",
  age : 24,
  location : "Dhaka"
}

console.log(getPropertyValue(user, "name"));  // Sanjid
console.log(getPropertyValue(user, "email")); // error
```

In this example we can see that 'keyof Person' makes sure that you can only pass valid property names of ‘Person’. If you try "email", TypeScript will give an error because it is not a key of ‘Person’.

In conclusion, we can say that 'keyof' keyword is important for working dynamically with object keys while keeping things type-safe.
##
Hope this things helps you like it helped me. If you are starting with TypeScript, try these in your own projects and you will see the power of static typing.

Thanks for reading.
