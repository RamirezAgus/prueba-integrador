const adminControllers = {
    admin: (req, res) => res.send('Route for admin view'),
    createview: (req, res) => res.send('Route for create view'),
    createitem: (req, res) => res.send('Route for create an item view'),
    edit: (req, res) => res.send('Route for edit an item'),
    edititem: (req, res) => res.send('Route for edit an item'),
    delete: (req, res) => res.send('Route for delete an item')
}

module.exports = adminControllers