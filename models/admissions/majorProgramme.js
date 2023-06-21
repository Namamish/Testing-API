const mongoose = require("mongoose");
const {commonFieldsForAll, regexForUpdateLogs, logUpdates} = require("../../utils.js");

const categorySchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        enum: ["Undergraduate Programme", "Post Graduate and Research Programme", "PhD Programme", "PG Diploma in Engineering Programme"]
    },
    subCategory: {
        type: String,
        enum: ["CCMT", "Self-Sponsored", "MSc", "MBA", "PG Diploma in Management"]
    }
});

const majorProgrammeSchema = new mongoose.Schema({
    category: {
        type: categorySchema,
        required: true
    },
    nameOfProgrammeOrComment: {
        type: String,
        required: true
    },
    new: {
        type: Boolean,
        default: false
    },
    isComment: {
        type: Boolean,
        default: false
    },
    ...commonFieldsForAll,
},{timestamps: true});

majorProgrammeSchema.pre(regexForUpdateLogs, logUpdates);

const majorProgramme = mongoose.model("MajorProgramme",majorProgrammeSchema);

module.exports=majorProgramme;