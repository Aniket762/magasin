const express = require('express');
const env = require('dotenv');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');


//routes
const userRoutes = require('./routes/user');


// environment variable 
env.config();

//db connect
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.u8nud.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true
    }
).then(()=> {
   console.log('Database connected')  
});

app.use(bodyParser());
app.use('/api', userRoutes);



app.listen(process.env.PORT, () =>
{
    console.log(`Server is runnning on port ${ process.env.PORT }`);

});