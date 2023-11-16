var express = require("express");
const eagle_controlers = require("../controllers/eagleController");
var router = express.Router();
// GET eagles
router.get("/", eagle_controlers.eagle_view_all_Page);
module.exports = router;

// GET request for one eagle.
router.get('/eagles/:id', eagle_controlers.eagle_detail);

// PUT request to update a eagle.
router.put('/eagles/:id', eagle_controlers.eagle_update_put);

/* GET detail eagle page */
router.get('/detail', eagle_controlers.eagle_view_one_Page);

/* GET create eagle page */
router.get('/create', eagle_controlers.eagle_create_Page);

/* GET create eagle page */
router.get('/update', eagle_controlers.eagle_update_Page);

/* GET delete eagle page */
router.get('/delete', eagle_controlers.eagle_delete_Page);