window.addEventListener('DOMContentLoaded', () => {
    // Fetch articles from articles.html and append to the articles-container div
    fetch('navbar.html')
        .then(response => response.text())
        .then(html => {
            document.querySelector('.navbar').innerHTML = html;
        })
        .catch(error => console.error('Error fetching articles:', error));
});