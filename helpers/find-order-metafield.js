// This function will find the metafield with the key provided and return the value of that metafield
export async function findOrderMetafieldWithKey(metafields, key){
    console.log('Finding metafield with key');
    const order_type_array = metafields.data.filter(metafield => metafield.key === key);
    console.log(order_type_array);
    if (order_type_array.length !== 1){
        return null;
    }
    return order_type_array[0].value;
}