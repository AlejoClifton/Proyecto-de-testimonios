import repository from '../repository/testimonials.js';

export function getAll(req, res) {
    repository.getAll()
        .then(function (testimonials) {
            res.status(200).json(testimonials);
        })
        .catch(function () {
            res.status(500).json({ error: 500, msg: "no se encuentra el recurso solicitado" });
        })
}
export function mw_setTestimonials(req, res,next){
    repository.mw_setTestimonials(req,res)
        .then(function(testimonials){
            next();
        })
        .catch(function(e) {
            console.log(e)
            res.status(500).json({ error: 500, msg: "No se pudo leer el archivo" });
        })
}
export function deleteByID(req,res){
    repository.deleteByID(req,res)
        .then(function(testimonio){
            res.status(200).json(testimonio);
        })
        .catch(function(data){
            console.log(data);
        })
}
export function publicByID(req,res){
    repository.publicByID(req,res)
        .then(function(testimonio){
            res.status(200).json(testimonio);
        })
}

export default {
    getAll,
    mw_setTestimonials,
    deleteByID,
    publicByID
}