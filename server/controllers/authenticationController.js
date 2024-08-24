const CustomError = require("./errorController.js/customError");
const asyncErrorHandler = require("../utils/asyncGlobalHandler");

exports.getData = asyncErrorHandler(async (req, res, next) => {
  try {
    const error = new Error("i dont know");
    error.statusCode = 444;
    throw error;
  } catch (err) {
    next(err);
  }
});

exports.getDay = async (req, res, next) => {
  try {
    const error = new Error("not a valid day");
    error.statusCode = 401;
    throw error;
  } catch (e) {
    next(e);
  }
};
