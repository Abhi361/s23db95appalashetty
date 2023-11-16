var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var eagle_controller = require('../controllers/eagleController');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// EAGLE ROUTES ///
// POST request for creating a eagle.
router.post('/eagles', eagle_controller.eagle_create_post);
// DELETE request to delete eagle.
router.delete('/eagles/:id', eagle_controller.eagle_delete);
// PUT request to update eagle.
router.put('/eagles/:id', eagle_controller.eagle_update_put);
// GET request for one eagle.
router.get('/eagles/:id', eagle_controller.eagle_detail);
// GET request for list of all eagle items.
router.get('/eagles', eagle_controller.eagle_list);
module.exports=router;

