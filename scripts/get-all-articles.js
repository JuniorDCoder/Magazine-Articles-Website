window.addEventListener('DOMContentLoaded', () => {
    // Fetch articles from articles.html and append to the articles-container div
    fetch('all-articles.html')
        .then(response => response.text())
        .then(html => {
            document.querySelector('.articles-container').innerHTML = html
        })
        .catch(error => console.error('Error fetching articles:', error))
})