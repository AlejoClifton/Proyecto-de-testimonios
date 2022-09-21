import fs from "fs";

const JSON_Testimonios = "./src/data/dataTestimonials.json";

export async function getAll() {
    return fs.promises
        .readFile(JSON_Testimonios)
        .then(function (data) {
            const testimonios = JSON.parse(data.toString());
            return testimonios;
        });
}
export async function getAllFilter() {
    return fs.promises
        .readFile(JSON_Testimonios)
        .then(function (data) {
            const testimonios = JSON.parse(data.toString());
            return testimonios.filter((t) => (t.public == true && t.deleted != true));
        });
}
export async function postOneTestimonials(testimonio) {
    return fs.promises
        .readFile(JSON_Testimonios)
        .then(function (data) {
            const testimonials = JSON.parse(data.toString());
            testimonio.id = testimonials.length + 1;
            testimonials.push(testimonio);

            return fs.promises.writeFile(JSON_Testimonios, JSON.stringify(testimonials))
        })
        .then(function () {
            return testimonio;
        })
        .catch(function(){
            res.status(500).json({err: 500, msg: "No se pudo leer el archivo."})
        })
}

export async function mw_setTestimonials(req, res) {
    return fs.promises
        .readFile(JSON_Testimonios)
        .then(function (data) {
            try {
                const testimonios = JSON.parse(data);
                const testimonio = testimonios.find(t => t.id == req.params.id);

                console.log("testx: " + testimonios)
                console.log(testimonio)
                if (testimonio && (!testimonio.deleted || testimonio.deleted == undefined)) {
                    req.testimonios = testimonios;
                    req.testimonio = testimonio;
                    return req;
                } else {
                    res.status(404).json({ error: 404, msg: `El Testimonio #${req.params.id} no se encuentra en el sistema.` });
                }
            } catch (e) {
                res.status(500).json({ error: 500, msg: e.message });
            }
        })
}
export async function deleteByID(req, res) {
    let testimonio = null;

    for (let i = 0; i < req.testimonios.length; i++) {
        if (req.testimonios[i].id == req.testimonio.id) {
            testimonio = req.testimonios[i];
            testimonio.deleted = true;
            break;
        }
    }
    return fs.promises.writeFile(JSON_Testimonios, JSON.stringify(req.testimonios))
        .then(function () {
            return testimonio;
        })
}
export async function publicByID(req, res) {
    let testimonio = null;

    for (let i = 0; i < req.testimonios.length; i++) {
        if (req.testimonios[i].id == req.testimonio.id) {
            testimonio = req.testimonios[i];
            testimonio.public = true;
            break;
        }
    }
    return fs.promises.writeFile(JSON_Testimonios, JSON.stringify(req.testimonios))
        .then(function () {
            return testimonio;
        })
}

export default {
    getAll,
    getAllFilter,
    postOneTestimonials,
    mw_setTestimonials,
    deleteByID,
    publicByID
};
