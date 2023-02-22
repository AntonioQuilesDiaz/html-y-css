const crearIcon = document.getElementById('crear');

function darlike(iconName) {
    return '<i class="text-xl fa ' + iconName +'"></i>' 
}

const iconElement = document.getElementById('like');
let isClicked = false;


iconElement.addEventListener('click', function() {
if (isClicked) {
    iconElement.innerHTML = darlike('fa-regular fa-heart text-black text-5xl mt-4 ml-32');
    isClicked = false;
} else {
    iconElement.innerHTML = darlike('fa-solid fa-heart text-red-500 text-5xl mt-4 ml-32');
    isClicked = true;
}
});