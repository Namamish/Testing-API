const express=require("express");
const mongoose =require("mongoose");
const mainRouter = require("./routes.js");
const majorProgramme = require("./models/admissions/majorProgramme.js");
const AdminBro = require('admin-bro');
const AdminBroExpress = require('@admin-bro/express');
const AdminBroMongoose = require('@admin-bro/mongoose');
const minorProgramme = require("./models/admissions/minorProgramme.js");

const app = express();
AdminBro.registerAdapter(AdminBroMongoose);



mongoose.connect('mongodb://127.0.0.1:27017/NITJ')
.then(()=> {
    console.log("CONNECTION STARTED!!")
    app.listen(8080, () => console.log('AdminBro is under localhost:8080/admin'))
})
.catch(err => {
    console.log(err);
});

app.use(express.json());
app.use(mainRouter);

const adminBro = new AdminBro({
    resources: [majorProgramme,minorProgramme],
    rootPath: '/admin',
});
  
const router = AdminBroExpress.buildRouter(adminBro)


app.use(adminBro.options.rootPath, router)