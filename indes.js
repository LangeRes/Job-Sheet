const name = "Budi";
console.log(`Halo, ${name}`);

function calculateDicsountedPrice(price, discountPercent) {
    return price - (price *discountPercent) / 100;
}

const cart = [
    {title: "Laptop", price: 1000, discountPercent: 10},
    {title: "Mouse", price: 20, discountPercent: 5},
    {title: "Keyboard", price: 50, discountPercent: 0}
];

function applyDiscounts(cart) {
    const result = [];
    for (const item of cart) {
        const diskon = (item.price * item.discountPercent) / 100;
        result[item.title] = item.price - diskon;
    }
    return result;
}
console.log(applyDiscounts(cart));

const products = [
  { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
  { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
  { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 },
  { id: 4, title: "Keyboard", price: 75, category: "accessories", stock: 10 },
  { id: 5, title: "Mouse", price: 50, category: "accessories", stock: 20 },
  { id: 6, title: "Monitor", price: 300, category: "monitors", stock: 8 },
  { id: 7, title: "Tablet", price: 500, category: "tablets", stock: 7 },
  { id: 8, title: "Smartwatch", price: 250, category: "wearables", stock: 12 },
  { id: 9, title: "Webcam", price: 80, category: "accessories", stock: 6 },
  { id: 10, title: "Microphone", price: 150, category: "audio", stock: 9 },
  { id: 11, title: "Printer", price: 200, category: "printers", stock: 4 },
  { id: 12, title: "Router", price: 90, category: "networking", stock: 14 },
  { id: 13, title: "USB Flash Drive", price: 25, category: "storage", stock: 30 },
  { id: 14, title: "External Hard Drive", price: 120, category: "storage", stock: 11 },
  { id: 15, title: "SSD", price: 100, category: "storage", stock: 13 },
  { id: 16, title: "Graphics Card", price: 600, category: "components", stock: 5 },
  { id: 17, title: "RAM 16GB", price: 70, category: "components", stock: 18 },
  { id: 18, title: "CPU", price: 350, category: "components", stock: 7 },
  { id: 19, title: "Power Supply", price: 100, category: "components", stock: 10 },
  { id: 20, title: "Computer Case", price: 90, category: "components", stock: 8 },
  { id: 21, title: "Laptop Stand", price: 45, category: "accessories", stock: 16 },
  { id: 22, title: "Phone Charger", price: 30, category: "accessories", stock: 25 },
  { id: 23, title: "Power Bank", price: 60, category: "accessories", stock: 19 },
  { id: 24, title: "Bluetooth Speaker", price: 110, category: "audio", stock: 10 },
  { id: 25, title: "Earbuds", price: 90, category: "audio", stock: 17 },
  { id: 26, title: "Game Controller", price: 65, category: "gaming", stock: 12 },
  { id: 27, title: "Gaming Chair", price: 250, category: "gaming", stock: 6 },
  { id: 28, title: "Mechanical Keyboard", price: 120, category: "gaming", stock: 9 },
  { id: 29, title: "Gaming Mouse", price: 80, category: "gaming", stock: 14 },
  { id: 30, title: "VR Headset", price: 400, category: "gaming", stock: 4 }
];

function findProductById(products, id) {
  return products.find(product => product.id === id);
}

const product = findProductById(products, 5);
console.log(product);

const lowStock = products.filter(product => product.stock < 10);
console.log(lowStock);