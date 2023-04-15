import { Router } from 'express';
var router = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/id/:id', function(req, res, next) {
  res.render('index', { title: req.params.id });
});
router.get('/product/:category/:id', function(req, res, next) {
  res.render('index', { title: req.params.category + ' ' + req.params.id });
});
export default router;
