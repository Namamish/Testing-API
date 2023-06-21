const express=require("express");
const mongoose =require("mongoose");
const mainRouter = require("./routes.js");
const majorProgramme = require("./models/admissions/majorProgramme.js");
const AdminBro = require('admin-bro');
const AdminBroExpress = require('@admin-bro/express');
const AdminBroMongoose = require('@admin-bro/mongoose');
const minorProgramme = require("./models/admissions/minorProgramme.js");
const cors = require("cors");
const path = require("path");

const app = express();
AdminBro.registerAdapter(AdminBroMongoose);



mongoose.connect('mongodb+srv://Student:Student123@cluster0.qptaqdb.mongodb.net/NITJ?retryWrites=true&w=majority')
.then(()=> {
    console.log("CONNECTION STARTED!!")
    app.listen(8080, () => console.log('AdminBro is under localhost:8080/admin'))
})
.catch(err => {
    console.log(err);
});

app.use(express.json());
app.use(mainRouter);
app.use(
    cors({
        origin: '*',
    })
);

app.use(express.static(path.join(__dirname+ '/public')));

app.get("/",(req,res)=> {
    res.sendFile(path.join(__dirname,"/frontend/index.html"));
})

const adminBro = new AdminBro({
    resources: [majorProgramme,minorProgramme],
    rootPath: '/admin',
});
  
const router = AdminBroExpress.buildRouter(adminBro)


app.use(adminBro.options.rootPath, router)