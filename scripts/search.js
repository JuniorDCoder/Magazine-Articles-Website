let searchButton = document.querySelector('.search-bar button')
let searchInput = document.querySelector('.search-bar input')

searchButton.addEventListener('click', function() {
    let keyword = searchInput.value.toLowerCase()

    let filteredArticles = articles.filter(article => {
        let titleMatch = fuzzysort.single(keyword, article.title.toLowerCase())
        let descriptionMatch = fuzzysort.single(keyword, article.description.toLowerCase())
        let categoryMatch = fuzzysort.single(keyword, article.category.toLowerCase())

        return titleMatch || descriptionMatch || categoryMatch
    })

    let heading = document.querySelector('#search-results-heading')
    heading.style.display = 'block'
    heading.innerHTML = `Search results for <span class="search-keyword">"${keyword}"</span>`

    let html = filteredArticles.map(article => generateArticleHTML(article)).join('')

    let container = document.querySelector('.articles-container')

    container.innerHTML = html
})