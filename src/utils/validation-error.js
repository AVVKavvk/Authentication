const AppError = require("./error-handler");
const { StatusCodes } = require("http-status-codes");
class ValidateError extends AppError {
  constructor(error) {
    let name = error.name;
    let explanation = [];
    error.errors.forEach(err => {
      explanation.push(err.message);
    });
    let message = "Not able to validate the data sent in the request";
    super(name, message, explanation, StatusCodes.BAD_REQUEST);
  }
}

module.exports = ValidateError;
