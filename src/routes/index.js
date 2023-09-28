const { Router } = require("express");
const router = Router();
const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
// const { deleteFav, postFav } = require("../controllers/handleFovorites");
const postFav = require('../controllers/postFav.js');
const postUser = require("../controllers/postUser");
const deleteFav = require('../controllers/deleteFav.js');
const getFav = require('../controllers/getFav.js')

router.get("/character/:id", (req, res) => {
  getCharById(req, res);
});
router.get("/login", (req, res) => {
  login(req, res);
});
router.post("/login", (req, res) => {
  login(req, res);
});
router.get("/usuario", (req, res) => {
  // postUser(req, res);
  res.send("hola");
});
router.post("/usuario", (req, res) => {
  postUser(req, res);
  // res.send('hola')
});
router.get("/fav", getFav);
router.post("/fav", (req, res) => {
  postFav(req, res);
});
router.delete("/fav/:id", (req, res) => {
  deleteFav(req, res);
});
module.exports = router;
