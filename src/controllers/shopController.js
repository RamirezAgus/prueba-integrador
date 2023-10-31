const shopControllers = {
    shop: (req, res) => res.send('Route for shop view'),
    item: (req, res) => res.send(`Route for find and retrieve a product from the id: ${req.params.id}`),
    add: (req, res) => res.send('Route for add the current item to the shop cart'),
    cartview: (req, res) => res.send('Route for cart view'),
    checkout: (req, res) => res.send('Route for got to the checkout page'),
}

module.exports = shopControllers