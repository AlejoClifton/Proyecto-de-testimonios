import repository from '../repository/testimonials.js';
import data from '../model/classTestimonials.js';

export function homePage(req, res) {
    repository.getAllFilter()
        .then(function (testimonials) {
            res.status(200).render('home', { testimonials });
        })
        .catch(function (a) {
            console.log(a);
            res.status(500).json({ err: 500, msg: 'No se encuenta el recurso solicitado' });
        })
}

export function viewPageForm(req, res) {
    res.status(200).render('formTestimonials');
}

export function createTestimonial(req, res) {
    let testimonio = new data.class.Testimonials(req.body);

    repository.postOneTestimonials(testimonio)
        .then(function (nuevoTestimonio) {
            res.status(200).render('nuevoTestimonio', { testimonio: nuevoTestimonio });
        })
        .catch(function () {
            res.status(500).json({ error: 500, msg: "no se encuentra el recurso solicitado" });
        })
}

export default {
    homePage,
    viewPageForm,
    createTestimonial
}