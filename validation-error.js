class ValidationError {
  key;
  message;

  constructor(key, message) {
    this.key = key;
    this.message = message;
  };
}

module.exports = { ValidationError }
