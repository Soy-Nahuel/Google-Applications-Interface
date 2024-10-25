const imageMenu = document.getElementById('image-menu');
const menu = document.getElementById('menu');
const magnifyingGlass = document.getElementById('search-icon');
const backgroundChange = document.getElementById('background');
const imageInput = document.getElementById('image');
const searchForm = document.querySelector('form');

imageMenu.addEventListener('click', () => {
    imageMenu.style.opacity = 0;

    setTimeout(() => {
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'block';
            imageMenu.src = '../img/close-menu.png';
        } else {
            menu.style.display = 'none';
            imageMenu.src = '../img/menu.png';
        }

        imageMenu.style.opacity = 1;
    }, 500);
});

backgroundChange.addEventListener('click', () => {
    imageInput.click();
});

imageInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const filePath = file.name;
        const fileExtension = file.name.split('.').pop().toLowerCase();
        const askMosaic = confirm('Do you want the background to be tiled?');
        const reader = new FileReader();

        reader.onload = function (e) {
            if (askMosaic) {
                document.body.style.backgroundImage = `url(${e.target.result})`;
                document.body.style.backgroundRepeat = 'repeat';
                document.body.style.backgroundSize = 'auto';
            } else {
                document.body.style.backgroundImage = `url(${e.target.result})`;
                document.body.style.backgroundSize = 'cover';
                document.body.style.backgroundPosition = 'center';
                document.body.style.backgroundRepeat = 'no-repeat';
            }
        };
        reader.readAsDataURL(file);
    } else {
        console.log('No file was selected.');
    }
});

magnifyingGlass.addEventListener('click', () => {
    searchForm.submit();
});