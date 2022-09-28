const express = require('express');
const app = express();

const custRoutes = require('./routes/api/customers.js');
const rentRoutes = require('./routes/api/rental.js');
const auth = require('./routes/api/auth.js');

app.get('/', (req, res) => res.send('API Running'));
app.use(express.json({ extend: false }));
app.use('/customer', custRoutes);
app.use('/auth', auth);
app.use('/rental', rentRoutes);

const PORT = 6000;

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));