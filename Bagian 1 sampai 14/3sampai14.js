// Bagian 3 Nested Data

const products2 = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        rating: 4.5,
        stock: 10,
        category: "laptops",
        tags: ["computer", "electronics", "office"],
        dimensions: {
            width: 30,
            height: 2,
            depth: 20
        },
        reviews: [
            {
                user: "A",
                rating: 5,
                comment: "Good product"
            },
            {
                user: "B",
                rating: 4,
                comment: "Worth it"
            }
        ]
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800,
        rating: 4.2,
        stock: 15,
        category: "phones",
        tags: ["mobile", "electronics"],
        dimensions: {
            width: 7,
            height: 0.8,
            depth: 15
        },
        reviews: [
            {
                user: "C",
                rating: 4,
                comment: "Nice camera"
            },
            {
                user: "D",
                rating: 5,
                comment: "Fast"
            },
            {
                user: "E",
                rating: 3,
                comment: "Battery so-so"
            }
        ]
    }
];

// Soal nomor 1
const allTags = products2.map(product => product.tags);

console.log(allTags);


// Soal nomor 2
function findProductsByTag(products, tag) {
    return products.filter(product => product.tags.includes(tag));
}

console.log(findProductsByTag(products2, "electronics"));


// Soal nomor 3
const reviewCounts = products2.map(product => ({
    id: product.id,
    title: product.title,
    totalReviews: product.reviews.length
}));

console.log(reviewCounts);


// soal nomor 4
const fiveStarReviews = products2.flatMap(product =>
    product.reviews.filter(review => review.rating === 5)
);

console.log(fiveStarReviews);


// soal nomor 5
const averageRatings = products2.map(product => {
    let totalRating = 0;

    for (const review of product.reviews) {
        totalRating += review.rating;
    }

    const average = totalRating / product.reviews.length;

    return {
        id: product.id,
        title: product.title,
        averageRating: average
    };
});

console.log(averageRatings);

// Soal nomor 6
const productWithMostReviews = products2.reduce((max, product) => {
    if (product.reviews.length > max.reviews.length) {
        return product;
    }

    return max;
});

// Soal nomor 7
console.log(productWithMostReviews);

const allRatings = products2.flatMap(product =>
    product.reviews.map(review => review.rating)
);

console.log(allRatings);


// -------------------------------------------------------------------------------------------------------------------------------------


// Bagian 4 Flattening Data

// 4.1
const flattenedTags = products2.flatMap(product => product.tags);

console.log(flattenedTags);

// 4.2
const allComments = products2.flatMap(product =>
    product.reviews.map(review => review.comment)
);

console.log(allComments);



// -------------------------------------------------------------------------------------------------------------------------------------


// Bagian 5 Map, Filter, Reduce dalam Konteks Nyata


// 5.1
const laptopPrices =
    products2
        .filter(product => product.category === "laptops")
        .map(product => product.price);

const averageLaptopPrice =
    laptopPrices.reduce((total, price) => total + price, 0) / laptopPrices.length;

console.log(averageLaptopPrice);


// 5.2
function getStatistics(products2) {
    const totalProducts = products2.length;

    const totalPrice = products2.reduce(
        (total, product) => total + product.price,
        0
    );

    const averagePrice = totalPrice / totalProducts;

    const highestPrice = Math.max(
        ...products2.map(product => product.price)
    );

    const lowestPrice = Math.min(
        ...products2.map(product => product.price)
    );

    const totalStock = products2.reduce(
        (total, product) => total + product.stock,
        0
    );

    const totalRating = products2.reduce(
        (total, product) => total + product.rating,
        0
    );

    const averageRating = totalRating / totalProducts;

    return {
        totalProducts,
        averagePrice,
        highestPrice,
        lowestPrice,
        totalStock,
        averageRating
    };
}

console.log(getStatistics(products2));


// -------------------------------------------------------------------------------------------------------------------------------------


// Bagian 6 Searching (Linear Search)


// 6.1
function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }

    return -1;
}

console.log(linearSearch([10, 20, 30, 40, 50], 30));
console.log(linearSearch([10, 20, 30, 40, 50], 100));


// 6.2
function linearSearchProduct(products2, targetId) {
    for (let i = 0; i < products2.length; i++) {
        if (products2[i].id === targetId) {
            return i;
        }
    }

    return -1;
}

console.log(linearSearchProduct(products2, 2));
console.log(linearSearchProduct(products2, 10));

// -------------------------------------------------------------------------------------------------------------------------------------


// Bagian 7 Binary Search


// 7.1
function binarySearch(sortedArray, target) {
    let left = 0;
    let right = sortedArray.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (sortedArray[mid] === target) {
            return mid;
        }

        if (sortedArray[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

console.log(binarySearch([10, 20, 30, 40, 50], 30));
console.log(binarySearch([10, 20, 30, 40, 50], 100));


// 7.2
const sortedProducts = products2.slice().sort((a, b) => a.price - b.price);

console.log(sortedProducts);

function binarySearchProduct(sortedProducts, targetPrice) {
    let left = 0;
    let right = sortedProducts.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (sortedProducts[mid].price === targetPrice) {
            return sortedProducts[mid];
        }

        if (sortedProducts[mid].price < targetPrice) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return undefined;
}

console.log(binarySearchProduct(sortedProducts, 800));
console.log(binarySearchProduct(sortedProducts, 1000));

// -------------------------------------------------------------------------------------------------------------------------------------


// Bagian 8 Sorting


// 8.1
function bubbleSort(numbers) {
    const arr = [...numbers];

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

const numbers = [5, 3, 8, 1];

console.log(bubbleSort(numbers));
console.log(numbers);


// 8.2
function sortProducts(products, sortBy) {
    const sortedProducts = products.slice();

    if (sortBy === "price-asc") {
        sortedProducts.sort((a, b) => a.price - b.price);
    } 
    else if (sortBy === "price-desc") {
        sortedProducts.sort((a, b) => b.price - a.price);
    } 
    else if (sortBy === "rating") {
        sortedProducts.sort((a, b) => b.rating - a.rating);
    } 
    else if (sortBy === "title") {
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    }

    return sortedProducts;
}

console.log(sortProducts(products2, "price-asc"));
console.log(sortProducts(products2, "price-desc"));
console.log(sortProducts(products2, "rating"));
console.log(sortProducts(products2, "title"));

// -------------------------------------------------------------------------------------------------------------------------------------


// Bagian 9 Grouping dan Aggregation


// 9.1
function groupByCategory(products) {
    return products.reduce((groups, product) => {
        const key = product.category;

        if (!groups[key]) {
            groups[key] = [];
        }

        groups[key].push(product);

        return groups;
    }, {});
}

const groupedProducts = groupByCategory(products2);

console.log(groupedProducts);


// 9.2
console.table(
    Object.entries(groupedProducts).map(([category, products]) => ({
        category: category,
        totalProducts: products.length
    }))
);



// --------------------------------------------------------------------------------------------------------------------------------------



// Bagian 10 Frequency Counting


// 10.1
function countFrequency(array) {
    return array.reduce((counts, item) => {
        counts[item] = (counts[item] || 0) + 1;
        return counts;
    }, {});
}

const words = [
    "laptop",
    "phone",
    "laptop",
    "tablet",
    "phone",
    "laptop"
];

console.log(countFrequency(words));


// 10.2

const categoryFrequency = countFrequency(
    products2.map(product => product.category)
);

console.log(categoryFrequency);


const tagFrequency = countFrequency(
    products2.flatMap(product => product.tags)
);

console.log(tagFrequency);


const ratingFrequency = countFrequency(
    products2.map(product => Math.round(product.rating))
);

console.log(ratingFrequency);



// --------------------------------------------------------------------------------------------------------------------------------------

// Bagian 11 Set


// 11.1

const uniqueCategories = [
    ...new Set(products2.map(product => product.category))
];

console.log(uniqueCategories);


const uniqueTags = [
    ...new Set(products2.flatMap(product => product.tags))
];

console.log(uniqueTags);


// ----------------------------------------------------------------------------------------------------------------------------------------

// Bagian 12 Map (Struktur Data)


// 12.1

function buildProductLookup(products) {
    const productMap = new Map();

    for (const product of products) {
        productMap.set(product.id, product);
    }

    return productMap;
}

const productLookup = buildProductLookup(products2);

console.log(productLookup);
console.log(productLookup.get(1));
console.log(productLookup.get(2));
console.log(productLookup.get(10));


// ----------------------------------------------------------------------------------------------------------------------------------------


// Bagian 13 Stack (LIFO)


// 13.1
class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}


// Contoh penggunaan Stack
const stack = new Stack();

stack.push("laptop");
stack.push("phone");
stack.push("tablet");

console.log(stack.items);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.items);
console.log(stack.isEmpty());


// 13.2
const searchHistory = new Stack();

searchHistory.push("laptop");
searchHistory.push("phone");
searchHistory.push("tablet");

console.log("Search history:", searchHistory.items);

const previousSearch = searchHistory.pop();

console.log("Undo search:", previousSearch);
console.log("Current search history:", searchHistory.items);

const previousSearch2 = searchHistory.pop();

console.log("Undo search:", previousSearch2);
console.log("Current search history:", searchHistory.items);



// ----------------------------------------------------------------------------------------------------------------------------------------


// Bagian 14 — Queue (FIFO)

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        return this.items.shift();
    }

    peek() {
        return this.items[0];
    }
}


// Contoh penggunaan Queue
const queue = new Queue();

queue.enqueue("Request 1");
queue.enqueue("Request 2");
queue.enqueue("Request 3");

console.log(queue.items);
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.items);
console.log(queue.dequeue());
console.log(queue.items);