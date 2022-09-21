class Testimonials {
    constructor(entity) {
        this.txtNombre = entity?.txtNombre || '';
        this.txtApellido = entity?.txtApellido || '';
        this.link = entity?.link || '';
        this.txtTestimonio = entity?.txtTestimonio || '';
    }
}

export default {
    class: {
        Testimonials
    }
}