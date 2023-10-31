const express = require('express');
const cors = require("cors");
const app = express();
const port = 4000;
const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');

app.use(express.static('public'));

app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/admin', authRoutes);

/*app.get('/home', (req, res) => res.sendFile(__dirname + '/public/index.html'))
app.get('/ping', (req, res) => res.send('pong'))*/

app.listen(port, () => console.log(`Servidor corriendo en puerto ${port}`))
