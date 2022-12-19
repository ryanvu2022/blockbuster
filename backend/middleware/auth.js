const auth = (req, res, next) => {
   try {
       req.userId = req.headers._id ? req.headers._id : req.headers.sub;
       next();
   } catch (error) {
       console.log(error);
   }
}

export default auth;