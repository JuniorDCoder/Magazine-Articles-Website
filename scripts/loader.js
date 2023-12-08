window.addEventListener('load', function () {
    const loader = document.querySelector('.loader-container');
    const mainContent = document.querySelector('.main-content');

    setTimeout(function () {
        loader.style.display = 'none';
        mainContent.style.display = 'block';
    }, 5000);
});
