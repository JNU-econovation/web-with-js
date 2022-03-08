class ValidationError {
  constructor(message) {
    this.message = message;
    this.name = "에러";
  }
}

module.exports = ValidationError;
