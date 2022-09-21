import { ObjectId } from "bson";

import connection from './database.js';


const JSON_Testimonios = "./src/data/dataTestimonials.json";

export async function getAll() {
    return await connection(async function (db) {
        return await db.collection('Testimonios').find().toArray();
    })
}
export async function getAllFilter() {
    return await connection(async function (db) {
        return await db.collection('Testimonios').find({ public: true, deleted: null }).toArray();
    })
}
export async function postOneTestimonials(testimonio) {
    return await connection(async function (db) {
        let testimonioNew = await db.collection('Testimonios').insertOne(testimonio);
        return testimonio;
    })
}

export async function mw_setTestimonials(req, res) {
    return await connection(async function (db) {
        let testimonio = await db.collection('Testimonios').findOne({ _id: ObjectId(req.params.id) });
        return testimonio;
    })
    .then(function (data) {
        try {
            let testimonio = data;
            if (testimonio && (!testimonio.deleted || testimonio.deleted == undefined)) {
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
    return await connection(async function (db) {
        let testimonio = await db.collection('Testimonios').updateOne({ _id: ObjectId(req.params.id)},{$set: {'deleted':'true'}});
        return req.testimonio;
    })
}
export async function publicByID(req, res) {
    return await connection(async function (db) {
        let testimonio = await db.collection('Testimonios').updateOne({ _id: ObjectId(req.params.id)},{$set: {'public':'true'}});
        return req.testimonio;
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
