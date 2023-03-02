function cambiarIcono(id) {
    const corazon = document.getElementById(id);

    if (corazon.classList.contains('fa-regular')) {
        corazon.classList.remove('fa-regular');
        corazon.classList.add('fa-solid');
        corazon.classList.add('text-red-500');
    } else {
        corazon.classList.add('fa-regular');
        corazon.classList.remove('fa-solid');
        corazon.classList.remove('text-red-500');
    }
}