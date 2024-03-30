import { getAllOrders } from './helpers/get-orders.js';
import { getOrderMetafields } from './helpers/get-order-metafields.js';
import { findOrderMetafieldWithKey } from './helpers/find-order-metafield.js';

async function processAllOrders() {
    try {
        const newPurchaseOrders = await getAllOrders();
        for (const order of newPurchaseOrders) {
            const metafields = await getOrderMetafields(order.id);
            console.log(`Processed metafields for order ${order.id}:`, metafields);
            // Further process each order's metafields or continue with other logic
            const order_type_value = await findOrderMetafieldWithKey(metafields, 'orderType');
            console.log(`Order type for order ${order.id}:`, order_type_value);
            if (order_type_value === 'online order') {
                // Process the order as a purchase order
                console.log('Send product and relevant shipping data to UFS');
            }
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

// Kick off the order processing
processAllOrders();
