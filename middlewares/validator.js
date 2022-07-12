
const inputsValidator = (
  err,
  req,
  res,
  next
) => {
  if (err) {
    const errors = err;
    const updatedErrors = {};

    if (errors.details) {
      (errors?.details)?.forEach((detail) => {
        Object.keys(detail).forEach((item) => {
          updatedErrors[item] = detail[item];
        });
      });
    }
    if (errors.details) {
      delete (errors).details;
    }
    const resObject = {
      ...errors,
      success: false,
      data: null,
      errors: updatedErrors,
    };

    res.status(err.statusCode).json(resObject);
    next();
  }

  res.status(200).json({ ...err, success: false });
  next();
};


module.exports = {
  inputsValidator
}