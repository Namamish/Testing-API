const admissionsRouter = require('express').Router();

const majorProgramRouter = require("./admissions/majorProgramRoutes.js");
const minorProgramRouter = require("./admissions/minorProgramRoutes.js");

admissionsRouter.use("/majorProgramme", majorProgramRouter);
admissionsRouter.use("/minorProgramme", minorProgramRouter);

module.exports = admissionsRouter;