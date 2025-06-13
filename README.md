# destruct-js

A type-safe utility for dynamically destructuring deeply nested data objects.

## Install

```bash
npm install destruct-js
```

## Usage

```ts
import { destruct } from 'destruct-js';

const item = {
  title: 'Book',
  price: { from: 100, to: 200 },
  category: { title: 'Science' }
};

const data = destruct(item, {
  title: 'title',
  priceFrom: 'price.from',
  categoryTitle: ['category.title', 'Unknown']
});

console.log(data);
// { title: 'Book', priceFrom: 100, categoryTitle: 'Science' }
```
