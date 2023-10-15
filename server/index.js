const dotenv = require('dotenv')
const express  = require ("express");
const mongoose = require ("mongoose");
const AuthRouter = require("./routes/AuthRouters");
const UserRouter = require("./routes/UserRouters");
const PostRouter = require("./routes/PostRouters");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
dotenv.config();

const app = express();

//Middleware
app.use(cors());
app.use(helmet());
app.use(morgan("common"));
app.use(express.json());
app.use('/user',UserRouter);
app.use('/post',PostRouter)
app.use('/',AuthRouter);


mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("Connected to MongoDB")
    startApp();
})

const startApp = () =>{
    app.listen(process.env.PORT , (req,res)=>{
        console.log(`Server is running.`);
    })
}

