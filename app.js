const express = require('express')
const connectDB = require('./config/db')

connectDB();

const app = express();



app.get('/', (req, res) => res.send('Hello World, Hi Hi'))

const port = process.env.PORT || 8082

app.listen(port, () => console.log(`Server is running on port ${port}`))