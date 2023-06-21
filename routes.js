const mainRouter = require("express").Router();

const admissionRoutes = require("./routes/admissionsRoutes.js");

mainRouter.use("/admissions", admissionRoutes);

module.exports = mainRouter;