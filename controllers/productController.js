const Product = require('../models/Product');

function index(req,res){
    Product.find({})
           .then(products => {
                if(products.length == 0) return res.status(204).send({message: 'NO CONTENT'});
                return res.status(200).send({products});
           }).catch(error => res.status(500).send(error));
}

function show(req,res){
    let _id = req.params.id;
    Product.findOne({_id})
           .then(product => {
                if(product) return res.status(200).send({product});
                return res.status(404).send({message: 'NOT FOUND'});
           }).catch(error => res.status(500).send(error));
}

function create(req,res){
    let doc = req.body;
    let myProduct = new Product(doc);
    myProduct.save(function(err,product){
        if(err) return res.status(500).send({err});
        return res.status(200).send({product});
    });
}

function update(req,res){
    let _id = req.params.id;
    let update = req.body;
    Product.update({_id},update)
           .then(product => res.status(200).send({message: 'Actualizado Correctamente!'}))
           .catch(error => res.status(500).send({error}));
}

function remove(req,res){
    let _id = req.params.id;
    Product.remove({_id})
           .then(product => res.status(200).send({message: 'Eliminado Correctamente!'}))
           .catch(error => res.status(500).send({error}));
}

module.exports = {
    index,
    show,
    create,
    update,
    remove
}