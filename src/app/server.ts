const express = require('express');
const app = express();

app.use(express.json());

// API giả lập tương tự như Voicenter API
app.post('/UserLogin/SetStatusFromAPI', (req:any, res:any) => {
    const { username, password } = req.body;

    if (username === 'admin' && password === '123456') {
        res.json({
            success: true,
            message: 'Login successful',
            token: 'fake-jwt-token'
        });
    } else {
        res.status(401).json({
            success: false,
            message: 'Invalid credentials'
        });
    }
});

// Khởi động server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
