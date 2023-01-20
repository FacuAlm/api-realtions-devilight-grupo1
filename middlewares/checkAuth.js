export const checkAuth = (req, res, next) => {
  console.log(`Metodo: ${req.method} - Ruta: ${req.url}`);
  next();
};
