const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

//middle ware
app.use(cors());
app.use(express());

app.get('/',(req,res)=>{
    res.send("bistro server is running");
})

app.listen(port,()=>{
    console.log(`this server isrunning port on ${port}`);
})
