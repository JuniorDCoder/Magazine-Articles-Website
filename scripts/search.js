
let searchButton = document.querySelector('.search-bar button');
let searchInput = document.querySelector('.search-bar input');

searchButton.addEventListener('click', function() {
    
    let keyword = searchInput.value.toLowerCase();

    
    let filteredArticles = articles.filter(article => 
        article.title.toLowerCase().includes(keyword) || 
        article.description.toLowerCase().includes(keyword)
    );

    
    let heading = document.querySelector('#search-results-heading');
    heading.style.display = 'block';
    heading.innerHTML = `Search results for <span class="search-keyword">"${keyword}"</span>`;

    
    let html = filteredArticles.map(article => generateArticleHTML(article)).join('');

    
    let container = document.querySelector('.articles-container');

    
    container.innerHTML = html;
});

