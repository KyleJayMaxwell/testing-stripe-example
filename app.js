const Stripe = require('stripe');
const stripe = Stripe(REPLACE_KEY_HERE);

// call to get all products
const getAllProducts = async function() {
    const products = await stripe.products.list();
    console.log('products ', products);
};

// call to get all invoices
const getAllInvoices = async function() {
    const invoices = await stripe.invoices.list();
    console.log('invoices ', invoices);
}

// getAllProducts();
// getAllInvoices();