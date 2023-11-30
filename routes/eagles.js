var express = require("express");
const eagle_controlers = require("../controllers/eagleController");
const passport = require('passport');

var router = express.Router();

// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    res.redirect("/login");
}

// GET eagles
router.get("/", eagle_controlers.eagle_view_all_Page);

// GET request for one eagle.
router.get('/eagles/:id', eagle_controlers.eagle_detail);

// PUT request to update an eagle.
router.put('/eagles/:id', eagle_controlers.eagle_update_put);

/* GET detail eagle page */
router.get('/detail', eagle_controlers.eagle_view_one_Page);

/* GET create eagle page */
router.get('/create', secured, eagle_controlers.eagle_create_Page);

/* GET delete eagle page */
router.get('/delete', secured, eagle_controlers.eagle_delete_Page);

/* GET update eagle page */
router.get('/update', secured, eagle_controlers.eagle_update_Page);

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});

module.exports = router;
