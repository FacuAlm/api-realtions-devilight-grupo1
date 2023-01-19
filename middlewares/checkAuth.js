export const checkAuth = (req, res, next) => {
  console.log(`Metoodo: ${req.method} - Ruta: ${req.url}`);
  next();
};
