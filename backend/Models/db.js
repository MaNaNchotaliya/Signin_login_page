const mongoose = require('mongoose');

const mongo_url = process.env.MONGO_CONN;

mongoose.connect(mongo_url)
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => {
        console.error('MongoDB Connection Error:', err);
        process.exit(1); // Exit process on failure
    });
