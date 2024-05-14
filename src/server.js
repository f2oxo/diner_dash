const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const orderRoutes = require('./routes/orderRoutes');
const itemRoutes = require('./routes/itemRoutes');
const cartRoutes = require('./routes/cartRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const app = express();

app.use(express.json());

main().catch(err => console.log(err));
async function main(){
await mongoose.connect('mongodb+srv://ffarrukh38:786Faizi@cluster0.xekgexh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .catch(err => console.error('Could not connect to MongoDB', err));
};

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/categories', categoryRoutes);
    
    
const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));