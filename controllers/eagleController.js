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

// Handle eagle detail on GET.
exports.eagle_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        const foundeagle = await eagle.findById(req.params.id);
        if (foundeagle == null) {
            res.status(404);
            res.send({ "error": "eagle not found" });
        } else {
            res.send(foundeagle);
        }
    } catch (err) {
        res.status(500);
        res.send('{"error": ${err}}');
    }
};

// Handle eagle update form on PUT.
exports.eagle_update_put = async function (req, res) {
    console.log(`Update on id ${req.params.id} with body ${JSON.stringify(req.body)}`);
    try {
        let toUpdate = await eagle.findById(req.params.id);

        // Check if the document exists
        if (!toUpdate) {
            res.status(404).send(`{"error": "Eagle with ID ${req.params.id} not found"}`);
            return;
        }

        // Do updates of properties
        if (req.body.name) toUpdate.name = req.body.name;
        if (req.body.age) toUpdate.age = req.body.age;
        if (req.body.description) toUpdate.description = req.body.description;

        // Handle checkbox (assuming it's named checkboxsale in the body)
        if (req.body.checkboxsale) {
            toUpdate.sale = true;
        } else {
            toUpdate.sale = false;
        }

        let result = await toUpdate.save();

        // Include the sale property in the response
        result = result.toObject(); // Convert Mongoose document to a plain JavaScript object
        result.sale = toUpdate.sale;

        console.log("Success " + result);
        res.send(result);
    } catch (err) {
        res.status(500).send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};


// Handle Eagle delete on DELETE.
exports.eagle_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await eagle.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};


// Handle a show one view with id specified by query
exports.eagle_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await eagle.findById(req.query.id)
        res.render('eagledetail',
            { title: 'Eagle Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send({ 'error': '${err}' });
    }
};

// Handle building the view for creating a brand.
// No body, no in path parameter, no query.
// Does not need to be async
exports.eagle_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('eaglecreate', { title: 'Eagle Create' });
    }
    catch (err) {
        res.status(500)
        res.send({ 'error': '${err}' });
    }
};

// Handle building the view for updating an animal.
// query provides the id
exports.eagle_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        const result = await eagle.findById(req.query.id)
        if (!result) {
            res.status(404)
            res.send('Eagle not found');
            return;
        }
        res.render('eagleupdate', { title: 'Eagle Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send({'error': '${err}'});
    }
};


// Handle a delete one view with id from query
exports.eagle_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await eagle.findById(req.query.id)
        res.render('Eagledelete', {
            title: 'Eagle Delete', toShow:
                result
        });
    }
    catch (err) {
        res.status(500)
        res.send({ 'error': '${err}' });
    }
};
