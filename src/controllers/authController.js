const authControllers = {
    loginview: (req, res) => res.send('Route for login view'),
    login: (req, res) => res.send('Route for log in'),
    registerview: (req, res) => res.send('Route for register view'),
    register: (req, res) => res.send('Route for create a user')
}

module.exports = authControllers