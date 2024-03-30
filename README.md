# BigCommerce B2B Edition Order Integration Reference

This repository is a reference for how to integrate orders into a tracking system external to BigCommerce when using the Invoice Portal with B2B Edition. It provides guidance on how to access an Order Metafield that will identify different types of orders placed. Note that some of this functionality may change once BigCommerce releases the capability to execute Split Payments on Orders, which is projected for H2 2024.

**Please note that this repository should only be used for testing and reference and should not be used without further review**  

<br />


## Background

For additional context, in BigCommerce B2B Edition, as of 3/30/2024, Invoices are paid through the BigCommerce Checkout. When this checkout is completed, an Order is created which will contain a Digital Product whose price is dynamically set to the amount that a Company needs to pay on an Invoice. Within the base functionality of BigCommerce, this means that there will now be an additional set of Orders that only relate to Invoice Payments. The initial Purchase Order and these Invoice Orders are both accessible in the Order View and in the API, but have now been set with a metafield that help to differentiate between them for identification. 

This metafield is called **"orderType"** and can either have the value of: **_"online order"_** which will be set on the initial Purchase Order or on an order that contains actual products in the merchant Catalog, and **_"invoice payment"_** which will be set on the separate orders that are placed to facilitate payments on an Invoice when following the Invoice Portal payment flow. 

In the Orders View within the Control Panel, there isn't anything Out of Box that will highlight an Order as being an Invoice Payment besides the Digital Product being present within the Cart view. If visibility of Orders and clear differentiation between these different order types is needed within the Orders View, there will need to be a process to make this clear for back end users, whether through Order Status updates or other means, since metafields are not displayed within the BigCommerce Control Panel and can only be accessed via API.

This sample project intends to provide a base for solving the added complexity in integrating Orders, when using the B2B Edition Invoice Portal, with other systems. 

A recommended approach to this problem set would be using webhooks to listen for placed orders and make requests to the API with the specific Order ID that is provided by the webhook. For this project, we're going to outline another potential solution which is periodically retrieving Orders from the BigCommerce APIs to detect any new Orders placed, then commit whatever actions necessary upon that detection.

<br />

## Usage

Clone or fork this repository and run ``` npm install ```

Add your .env variables as outlined in the .env.example file:  
_STORE_HASH_  
_ACCESS_TOKEN_  
_CLIENT_ID_  

Run ```node index.js``` to test your requests and see console logs relating to desired data.



