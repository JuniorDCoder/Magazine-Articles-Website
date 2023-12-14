let articles = [
    {
        id: 1,
        image: "public/images/articles/1.png",
        title: "Briefing About the cold waters",
        description: "Description of the first article content goes here.",
        authorImage: "public/images/profile.png",
        authorName: "Nyuydine Bill",
        publishDate: "Thursday, 2nd October 2004"
    },
    {
        id: 2,
        image: "public/images/articles/2.png",
        title: "Title of the Second Article",
        description: "Description of the second article content goes here.",
        authorImage: "public/images/profile.png",
        authorName: "Foryoung Junior",
        publishDate: "Thursday, 30th September 2004"
    },
    {
        id: 3,
        image: "public/images/articles/3.png",
        title: "Briefing About the cold waters",
        description: "Description of the first article content goes here.",
        authorImage: "public/images/profile.png",
        authorName: "Nyuydine Bill",
        publishDate: "Publication Date 1"
    },
    {
        id: 4,
        image: "public/images/articles/4.png",
        title: "Title of the Second Article",
        description: "Description of the second article content goes here.",
        authorImage: "public/images/profile.png",
        authorName: "Foryoung Junior",
        publishDate: "Thursday, 30th September 2004"
    },
    
];


function generateArticleHTML(article, includeButtons = false) {
    return `
    <div class="article" onclick="openArticle(${article.id})">
        <div class="article-image">
            <img src="${article.image}" alt="Article Image">
        </div>
        <div class="article-details">
            <h2 class="article-title">${article.title}</h2>
            <p class="article-description">${article.description}</p>
            <div class="author-info">
                <img src="${article.authorImage}" alt="Author's Profile Picture">
                <div class="author-text">
                    <p class="author-name">${article.authorName}</p>
                    <p class="publish-date">${article.publishDate}</p>
                </div>
            </div>
            ${includeButtons ? `<button class="like-button" onclick="like(event)">&#128077;</button>
            <button class="comment-button" onclick="comment(event)">Comment</button>` : ''}
        </div>
    </div>
    `;
}

function openArticle(id) {
    
    let article = articles.find(article => article.id === id);

    
    sessionStorage.setItem('article', JSON.stringify(article));

    
    window.location.href = 'article.html';
}

window.addEventListener('DOMContentLoaded', (event) => {
    let article = JSON.parse(sessionStorage.getItem('article'));
    let html = generateArticleHTML(article, true);
    let container = document.querySelector('.article-container');
    container.innerHTML = html;  
    
    window.like = function(event) {
        event.stopPropagation();
        let likeButton = event.target;
        likeButton.classList.toggle('clicked');
    }

    window.comment = function(event) {
        event.stopPropagation();
        let commentButton = event.target;
        /* 
            Here,the comment is gotten from the user from the user.
            I use the comment to do something else later.
        */
    }
    
});


// I am getting the container where the articles will be appended
let main_container = document.querySelector('.articles-container');

// here, i am generating and append the articles
articles.forEach(article => {
    let html = generateArticleHTML(article);
    main_container.innerHTML += html;
});




