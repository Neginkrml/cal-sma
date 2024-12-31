function calculateDelivery(itemCount, itemPrice) {
    const totalPrice = itemCount * itemPrice
    return `Your order for ${itemCount} items worth  ${itemPrice} credits has been placed. Delivery charge is 10 credits.`
}
console.log(calculateDelivery(4, 30))
console.log(calculateDelivery(8 , 50))
