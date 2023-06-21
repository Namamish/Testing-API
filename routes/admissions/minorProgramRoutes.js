const minorProgramRouter = require("express").Router();

const minorProgramController = require("../../controllers/admissions/minorProgramController.js");

minorProgramRouter.route("/get/:visible").get(minorProgramController.getProgramme);

module.exports = minorProgramRouter;