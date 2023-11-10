var express = require("express");
const eagle_controlers = require("../controllers/eagleController");
var router = express.Router();
// GET eagles
router.get("/", eagle_controlers.eagle_view_all_Page);
module.exports = router;

// GET request for one eagle.
router.get('/eagles/:id', eagle_controlers.eagle_detail);