var eagle = require('../models/eagle');
// List of all eagles

exports.eagle_list = async function (req, res) {
    try {
        theeagles = await eagle.find();
        res.send(theeagles);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// VIEWS
// Handle a show all view
exports.eagle_view_all_Page = async function (req, res) {
    try {
        theeagles = await eagle.find();
        res.render('eagles', { title: 'eagle Search Results', results: theeagles });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific eagle.
exports.eagle_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: eagle detail: ' + req.params.id);
};
// Handle eagle create on POST.
//Handle eagle create on POST.
exports.eagle_create_post = async function (req, res) {
    console.log(req.body)
    let document = new eagle();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"name":"Thunder", "age":12, "description":"description"}
    document.name = req.body.name;
    document.age = req.body.age;
    document.description = req.body.description;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle eagle delete form on DELETE.
exports.eagle_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: eagle delete DELETE ' + req.params.id);
};
// Handle eagle update form on PUT.
exports.eagle_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: eagle update PUT' + req.params.id);
};
