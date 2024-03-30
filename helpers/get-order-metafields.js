import { makeApiCall } from '../util/apiUtil.js';
import { STORE_HASH } from '../util/config.js';

export async function getOrderMetafields(orderId) {
    console.log('Getting order metafields');
    const orderMetafieldsUrl = `https://api.bigcommerce.com/stores/${STORE_HASH}/v3/orders/${orderId}/metafields`;

    try {
        const metafields = await makeApiCall(orderMetafieldsUrl);
        console.log(metafields);
        return metafields;
    } catch (error) {
        console.error('Error:', error);
        throw error; // Rethrowing the error to be handled by the caller
    }
}
