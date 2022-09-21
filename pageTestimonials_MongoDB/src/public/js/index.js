function SliderEngine() {
    let next = document.getElementById('nextSlide');
    let previous = document.getElementById('previousSlide');
    let sliders = document.querySelectorAll(".slider");

    function moveSlide(children, index) {
        for (let i = 0; i < children.length; i++) {
            const li = children[i];
            li.style.transform = "translateX(-" + index + "00%)";
        }
    }
    sliders.forEach(function (slider) {
        let cont = 0;
        const next = slider.nextElementSibling;
        const previous = slider.previousElementSibling;

        console.log("proximo: ", next);
        console.log("antes: ", previous);

        previous.onclick = function () {
            cont--;
            if (cont === -1) {
                cont = slider.children.length - 1;
            }
            moveSlide(slider.children, cont)
        }
        next.onclick = function () {
            cont++;
            if (cont === slider.children.length) {
                cont = 0;
            }
            moveSlide(slider.children, cont)
        }
    })
}

window.addEventListener("DOMContentLoaded", (event) => {
    fetch('/products/all')
        .then(response => response.json())
        .then((data) => {
            const $list = document.getElementById('list-Products');
            data.forEach(product => {
                const li = document.createElement('li');
                const nombre = document.createElement('h2');
                const imagen = document.createElement('img');
                const precio = document.createElement('h3');
                const descripcion = document.createElement('p');
                
                nombre.innerHTML = product.txtNombre;
                imagen.src = product.imagen;
                precio.innerHTML = product.txtPrecio;
                descripcion.innerHTML = product.txtDescripcion;

                li.appendChild(nombre);
                li.appendChild(imagen);
                li.appendChild(precio);
                li.appendChild(descripcion);

                $list.appendChild(li);
            });
        })
        .catch(function (data) { console.log(data) })
})

SliderEngine();

