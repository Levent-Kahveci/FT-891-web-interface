const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

let data =[
    {name:'a', value: Math.random() *20 },
    {name:'b', value: Math.random() *20 },
    {name:'c', value: Math.random() *20 },
    {name:'d', value: Math.random() *20 },
    {name:'e', value: Math.random() *20 },
    {name:'f', value: Math.random() *20 }
];

//define a JSON

app.get('/api/data', (req, res) => {
    for( let i = 0; i < data.length; i++) {
        data[i].value = Math.round(data[i].value + Math.random() * 5);
    }
    res.json(data);
});

app.listen(PORT, () => {
    console.log('Server is running on http://localhost:',PORT);
});
