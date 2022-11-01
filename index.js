const express = require('express');

const request = require('request-promise');


const app = express();
const PORT = process.env.PORT || 4000;


app.use(express.json());

app.get('/',(req,res) => {
    res.send('Welcome to NodeJs Api');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));