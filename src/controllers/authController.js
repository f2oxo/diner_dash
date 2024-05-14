const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'User already exists' });

        
        const hashedPassword = await bcrypt.hash(password, 10);

        
        const user = new User({
            username,
            email,
            password: hashedPassword
        });

        await user.save();

        res.json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid email or password' });

        
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(400).json({ message: 'Invalid email or password' });

        
        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET);

        res.json({ token });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { login, signup }
