function notFoundHandler(req, res) {
    res.status(500).render('shared/404');
  }
  
  module.exports = notFoundHandler;