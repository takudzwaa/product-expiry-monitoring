function isAuthenticated(req, res, next) {
  if (req.session && req.session.userId) {
    next();
  } else {
    res.status(401).send('You must be logged in to access this route');
  }
}

export default isAuthenticated;