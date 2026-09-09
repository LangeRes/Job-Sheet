function applyDiscounts(cart) {
    const result = [];
    for (const item of cart) {
        const diskon = (item.price * item.diskonPersen) / 100;
        result[item.name] = item.price - diskon;
    }
    return result;
}
console.log(applyDiscounts(cart));