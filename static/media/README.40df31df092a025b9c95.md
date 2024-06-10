# js-jsonq

**js-jsonq** is a simple, elegant Javascript package to Query over any type of JSON Data. It'll make your life easier by giving the flavour of an ORM-like query on your JSON.

This package is inspired from the awesome [jsonq](https://github.com/nahid/jsonq) package.

## Installation

```
npm install js-jsonq
```

or

```
yarn add js-jsonq
```

## Usage

Just import/require the package before start using it.

As a Node.js Package:

```javascript
const jsonQ = require('js-jsonq');
```

As a ES6 Module:

```javascript
import jsonQ from 'js-jsonq';
```

You can start using this package right away by importing your Json data from a file:

```javascript
new jsonQ('data.json');
```

Or from a Json String:

```javascript
new jsonQ('{"id": 1, "name": "shaon"}');
```

Or from a Json Object:

```javascript
new jsonQ({ id: 1, name: 'shaon' });
```

You can start Query your data using the various query methods such as **find**, **where**, **orWhere**, **whereIn**, **whereStartsWith**, **whereEndsWith**, **whereContains** and so on. Also you can aggregate your data after query using **sum**, **count**, **groupBy**, **max**, **min** etc.

Let's see a quick example:

```javascript
// sample Json data
const JsonObject = {
    products: [
        {
            id: 1,
            city: 'bsl',
            name: 'iPhone',
            cat: 1,
            price: 80000.5
        },
        {
            id: 2,
            city: null,
            name: 'macbook pro',
            cat: 1,
            price: 150000
        },
        {
            id: 3,
            city: 'dhk',
            name: 'Redmi 3S Prime',
            cat: 2,
            price: 12000
        },
        {
            id: 4,
            city: 'bsl',
            name: 'macbook air',
            cat: 2,
            price: 110000
        }
    ]
};

const Q = new jsonQ(JsonObject);
const res = Q.from('products')
    .where('cat', '=', 2)
    .fetch();
console.log(res);

//This will print
/*
[
    {
        id: 3,
        city: 'dhk',
        name: 'Redmi 3S Prime',
        cat: 2,
        price: 12000
    },
    {
        id: 4,
        city: 'bsl',
        name: 'macbook air',
        cat: 2,
        price: 110000
    }
]
*/
```

Let's say we want to get the Summation of _price_ of the Queried result. We can do it easily by calling the **sum()** method instead of **fetch()**:

```Javascript
const res = Q.from('products')
    .where('cat', '=', 2)
    .sum('price');
console.log(res);
//It will print:
/*
122000
*/
```

Pretty neat, huh?

Let's explore the full API to see what else magic this library can do for you.
Shall we?

## API

Following API examples are shown based on the sample JSON data given [here](examples/data.json). To get a better idea of the examples see that JSON data first. Also detailed examples of each API can be found [here](examples/).

**List of API:**

* [fetch](#fetch)
* [find](#findpath)
* [at](#atpath)
* [from](#frompath)
* [where](#wherekey-op-val)
* [orWhere](#orwherekey-op-val)
* [whereIn](#whereinkey-val)
* [whereNotIn](#wherenotinkey-val)
* [whereNull](#wherenullkey)
* [whereNotNull](#wherenotnullkey)
* [whereStartsWith](#wherestartswithkey-val)
* [whereEndsWith](#whereendswithkey-val)
* [whereContains](#wherecontainskey-val)
* [sum](#sumproperty)
* [count](#count)
* [size](#size)
* [max](#maxproperty)
* [min](#minproperty)
* [avg](#avgproperty)
* [first](#first)
* [last](#last)
* [nth](#nthindex)
* [exists](#exists)
* [groupBy](#groupbyproperty)
* [sort](#sortorder)
* [sortBy](#sortbyproperty-order)
* [reset](#resetdata)
* [copy](#copy)

### `fetch()`

This method will execute queries and will return the resulted data. You need to call it finally after using some query methods. Details can be found in other API examples.

### `find(path)`

* `path` -- the path hierarchy of the data you want to find.

You don't need to call `fetch()` method after this. Because this method will fetch and return the data by itself.

**caveat:** You can't chain further query methods after it. If you need that, you should use `at()` or `from()` method.

**example:**

Let's say you want to get the value of _'cities'_ property of your Json Data. You can do it like this:

```Javascript
const Q = new jsonQ(JsonObject).find('cities');
```

If you want to traverse to more deep in hierarchy, you can do it like:

```Javascript
const Q = new jsonQ(JsonObject).find('cities.1.name');
```

See a detail example [here](examples/find.js).

### `at(path)`

* `path` (optional) -- the path hierarchy of the data you want to start query from.

By default, query would be started from the root of the JSON Data you've given. If you want to first move to a nested path hierarchy of the data from where you want to start your query, you would use this method. Skipping the `path` parameter or giving **'.'** as parameter will also start query from the root Data.

Difference between this method and `find()` is that, `find()` method will return the data from the given path hierarchy. On the other hand, this method will return the Object instance, so that you can further chain query methods after it.

**example:**

Let's say you want to start query over the values of _'users'_ property of your Json Data. You can do it like this:

```Javascript
const Q = new jsonQ(JsonObject).at('users').where('id', '=', 1).fetch();
```

If you want to traverse to more deep in hierarchy, you can do it like:

```Javascript
const Q = new jsonQ(JsonObject).at('users.5.visits').where('year', '=', 2011).fetch();
```

See a detail example [here](examples/at.js).

### `from(path)`

This is an alias method of `at()` and will behave exactly like that. See example [here](examples/from.js).

### `where(key, op, val)`

* `key` -- the property name of the data. Or you can pass a Function here to group multiple query inside it. See details in [example](examples/where.js)
* `val` -- value to be matched with. It can be a _int_, _string_, _bool_ or even _Function_ - depending on the `op`.
* `op` -- operand to be used for matching. The following operands are available to use:

    * `=` : For weak equality matching
    * `eq` : Same as `=`
    * `!=` : For weak not equality matching
    * `neq` : Same as `!=`
    * `==` : For strict equality matching
    * `seq` : Same as `==`
    * `!==` : For strict not equality matching
    * `sneq` : Same as `!==`
    * `>` : Check if value of given **key** in data is Greater than **val**
    * `gt` : Same as `>`
    * `<` : Check if value of given **key** in data is Less than **val**
    * `lt` : Same as `<`
    * `>=` : Check if value of given **key** in data is Greater than or Equal of **val**
    * `gte` : Same as `>=`
    * `<=` : Check if value of given **key** in data is Less than or Equal of **val**
    * `lte` : Same as `<=`
    * `null` : Check if the value of given **key** in data is **null** (`val` parameter in `where()` can be omitted for this `op`)
    * `notnull` : Check if the value of given **key** in data is **not null** (`val` parameter in `where()` can be omitted for this `op`)
    * `in` : Check if the value of given **key** in data is exists in given **val**. **val** should be a plain _Array_.
    * `notin` : Check if the value of given **key** in data is not exists in given **val**. **val** should be a plain _Array_.
    * `startswith` : Check if the value of given **key** in data starts with (has a prefix of) the given **val**. This would only works for _String_ type data.
    * `endswith` : Check if the value of given **key** in data ends with (has a suffix of) the given **val**. This would only works for _String_ type data.
    * `contains` : Check if the value of given **key** in data has a substring of given **val**. This would only works for _String_ type data.
    * `match` : Check if the value of given **key** in data has a Regular Expression match with the given **val**. The `val` parameter should be a **RegExp** for this `op`.
    * `macro` : It would try to match the value of given **key** in data executing the given `val`. The `val` parameter should be a **Function** for this `op`. This function should have a matching logic inside it and return **true** or **false** based on that.

**example:**

Let's say you want to find the _'users'_ who has _id_ of `1`. You can do it like this:

```Javascript
const Q = new jsonQ(JsonObject).from('users').where('id', '=', 1).fetch();
```

You can add multiple _where_ conditions. It'll give the result by AND-ing between these multiple where conditions.

```Javascript
const Q = new jsonQ(JsonObject).from('users').where('id', '=', 1).where('location', '=', 'Sylhet').fetch();
```

See a detail example [here](examples/where.js).

### `orWhere(key, op, val)`

Parameters of `orWhere()` are the same as `where()`. The only difference between `where()` and `orWhere()` is: condition given by the `orWhere()` method will OR-ed the result with other conditions.

For example, if you want to find the users with _id_ of `1` or `2`, you can do it like this:

```Javascript
const Q = new jsonQ(JsonObject).from('users').where('id', '=', 1).orWhere('id', '=', 2).fetch();
```

See detail example [here](examples/orWhere.js).

### `whereIn(key, val)`

* `key` -- the property name of the data
* `val` -- it should be an **Array**

This method will behave like `where(key, 'in', val)` method call.

### `whereNotIn(key, val)`

* `key` -- the property name of the data
* `val` -- it should be an **Array**

This method will behave like `where(key, 'notin', val)` method call.

### `whereNull(key)`

* `key` -- the property name of the data

This method will behave like `where(key, 'null')` or `where(key, '=', null)` method call.

### `whereNotNull(key)`

* `key` -- the property name of the data

This method will behave like `where(key, 'notnull')` or `where(key, '!=', null)` method call.

### `whereStartsWith(key, val)`

* `key` -- the property name of the data
* `val` -- it should be a String

This method will behave like `where(key, 'startswith', val)` method call.

### `whereEndsWith(key, val)`

* `key` -- the property name of the data
* `val` -- it should be a String

This method will behave like `where(key, 'endswith', val)` method call.

### `whereContains(key, val)`

* `key` -- the property name of the data
* `val` -- it should be a String

This method will behave like `where(key, 'contains', val)` method call.

### `sum(property)`

* `property` -- the property name of the data

**example:**

Let's say you want to find the sum of the _'price'_ of the _'products'_. You can do it like this:

```Javascript
const Q = new jsonQ(JsonObject).from('products').sum('price').fetch();
```

If the data you are aggregating is plain array, you don't need to pass the 'property' parameter.
See detail example [here](examples/sum.js)

### `count()`

It will return the number of elements in the collection.

**example:**

Let's say you want to find how many elements are in the _'products'_ property. You can do it like:

```Javascript
const Q = new jsonQ(JsonObject).from('products').count();
```

See detail example [here](examples/count.js).

### `size()`

This is an alias method of `count()`.

### `max(property)`

* `property` -- the property name of the data

**example:**

Let's say you want to find the maximum of the _'price'_ of the _'products'_. You can do it like this:

```Javascript
const Q = new jsonQ(JsonObject).from('products').max('price').fetch();
```

If the data you are querying is plain array, you don't need to pass the 'property' parameter.
See detail example [here](examples/max.js)

### `min(property)`

* `property` -- the property name of the data

**example:**

Let's say you want to find the minimum of the _'price'_ of the _'products'_. You can do it like this:

```Javascript
const Q = new jsonQ(JsonObject).from('products').min('price').fetch();
```

If the data you are querying is plain array, you don't need to pass the 'property' parameter.
See detail example [here](examples/min.js)

### `avg(property)`

* `property` -- the property name of the data

**example:**

Let's say you want to find the average of the _'price'_ of the _'products'_. You can do it like this:

```Javascript
const Q = new jsonQ(JsonObject).from('products').avg('price').fetch();
```

If the data you are querying is plain array, you don't need to pass the 'property' parameter.
See detail example [here](examples/avg.js)

### `first()`

It will return the first element of the collection.

**example:**

```Javascript
const Q = new jsonQ(JsonObject).from('products').first();
```

See detail example [here](examples/first.js).

### `last()`

It will return the last element of the collection.

**example:**

```Javascript
const Q = new jsonQ(JsonObject).from('products').last();
```

See detail example [here](examples/last.js).

### `nth(index)`

* `index` -- index of the element to be returned.

It will return the nth element of the collection. If the given index is a **positive** value, it will return the nth element from the beginning. If the given index is a **negative** value, it will return the nth element from the end.

**example:**

```Javascript
const Q = new jsonQ(JsonObject).from('products').nth(2);
```

See detail example [here](examples/nth.js).

### `exists()`

It will return **true** if the element is not **empty** or not **null** or not an **empty array** or not an **empty object**.

**example:**

Let's say you want to find how many elements are in the _'products'_ property. You can do it like:

```Javascript
const Q = new jsonQ(JsonObject).from('products').count();
```

See detail example [here](examples/exists.js).

### `groupBy(property)`

* `property` -- The property by which you want to group the collection.

**example:**

Let's say you want to group the _'users'_ data based on the _'location'_ property. You can do it like:

```Javascript
const Q = new jsonQ(JsonObject).from('users').groupBy('location').fetch();
```

See detail example [here](examples/groupBy.js).

### `sort(order)`

* `order` -- If you skip the _'order'_ property the data will be by default ordered as **ascending**. You need to pass **'desc'** as the _'order'_ parameter to sort the data in **descending** order. Also, you can pass a compare function in _'order'_ parameter to define your own logic to order the data.

**Note:** This method should be used for plain Array. If you want to sort an Array of Objects you should use the **sortBy()** method described later.

**example:**

Let's say you want to sort the _'arr'_ data. You can do it like:

```Javascript
const Q = new jsonQ(JsonObject).from('arr').sort().fetch();
```

See detail example [here](examples/sort.js).

### `sortBy(property, order)`

* `property` -- You need to pass the property name on which the sorting will be done.
* `order` -- If you skip the _'order'_ property the data will be by default ordered as **ascending**. You need to pass **'desc'** as the _'order'_ parameter to sort the data in **descending** order. Also, you can pass a compare function in _'order'_ parameter to define your own logic to order the data.

**Note:** This method should be used for Array of Objects. If you want to sort a plain Array you should use the **sort()** method described earlier.

**example:**

Let's say you want to sort the _'price'_ data of _'products'_. You can do it like:

```Javascript
const Q = new jsonQ(JsonObject).from('products').sortBy('price').fetch();
```

See detail example [here](examples/sortBy.js).

### `reset(data)`

* `data` -- can be a JSON file path, or a JSON string or a JSON Object. If no data passed in the `data` parameter, the `jsonQ` Object instance will be reset to previously initialized data.

At any point, you might want to reset the Object instance to a completely different set of data and then query over it. You can use this method in that case.

See a detail example [here](examples/reset.js).

### `copy()`

It will return a complete clone of the Object instance.

See a detail example [here](examples/copy.js).

## Bugs and Issues

If you encounter any bugs or issues, feel free to [open an issue at
github](https://github.com/me-shaon/js-jsonq/issues).

Also, you can shoot me an email to
<mailto:shaon.cse81@gmail.com> for hugs or bugs.

## Credit

Speical thanks to [Nahid Bin Azhar](https://github.com/nahid) for the inspiration and guidance for the package.
