var express = require("express");
const costume_controlers = require("../controllers/costumeController");
var router = express.Router();
// GET costumes
router.get("/", costume_controlers.costume_view_all_Page);
module.exports = router;