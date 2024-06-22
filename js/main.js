document.addEventListener('DOMContentLoaded', () => {
    console.log('Document is ready');
    const searchButton = document.querySelector('.page_name-n-search .-btn');
    const searchBar = document.querySelector('.page_name-n-search .-searchbar');
    const pageTitle = document.querySelector('.page_name-n-search .-title');

    searchButton.addEventListener('click', function() {
        searchBar.classList.toggle('show'); // Toggle class .show để hiển thị/ẩn input
        pageTitle.classList.toggle('hidden'); // Toggle class .hidden để ẩn/hiển thị tiêu đề
    });

});