const asyncHandler = (requestHandler) => async (req, res, next) => {
  try {
    return requestHandler(req, res, next);
  } catch (err) {
    return res.status(500).json({
      success: "false",
      message: err.message,
    });
  }
};

export default asyncHandler;
