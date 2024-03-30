import { makeApiCall } from '../util/apiUtil.js';
import { STORE_HASH } from '../util/config.js';

export async function getAllOrders() {
    console.log('Getting all orders');
    const allOrdersUrl = `https://api.bigcommerce.com/stores/${STORE_HASH}/v2/orders`;

    try {
        const data = await makeApiCall(allOrdersUrl);
        console.log(data);
        return data.filter(order => order.status === 'Awaiting Payment');
    } catch (error) {
        console.error('Error:', error);
        throw error; // Rethrowing the error to be handled by the caller
    }
}
