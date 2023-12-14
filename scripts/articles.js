let articles = [
    {
        id: 1,
        image: "public/images/articles/1.png",
        title: "Briefing About the cold waters",
        description: "Description of the first article content goes here.",
        authorImage: "public/images/profile.png",
        authorName: "Nyuydine Bill",
        publishDate: "Thursday, 2nd October 2004",
        category: "Nature",
    },
    {
        id: 2,
        image: "public/images/articles/2.png",
        title: "Title of the Second Article",
        description: "Description of the second article content goes here.",
        authorImage: "public/images/profile.png",
        authorName: "Foryoung Junior",
        publishDate: "Thursday, 30th September 2004",
        category: "Wildlife",
    },
    {
        id: 3,
        image: "public/images/articles/3.png",
        title: "Briefing About the cold waters",
        description: "Description of the first article content goes here.",
        authorImage: "public/images/profile.png",
        authorName: "Nyuydine Bill",
        publishDate: "Publication Date 1",
        category: "Technology",
    },
    {
        id: 4,
        image: "public/images/articles/4.png",
        title: "Title of the Second Article",
        description: "Description of the second article content goes here.",
        authorImage: "public/images/profile.png",
        authorName: "Foryoung Junior",
        publishDate: "Thursday, 30th September 2004",
        category: "Fashion",
    },
    {
        id: 5,
        image: "public/images/articles/5.jpg",
        title: "Exploring the Rainforest",
        description: "Discover the wonders hidden within the rainforest.",
        authorImage: "public/images/profile.png",
        authorName: "Elena Rivers",
        publishDate: "Wednesday, 15th November 2023",
        category: "Travel",
      },
      {
        id: 6,
        image: "public/images/articles/6.jpg",
        title: "The Impact of Renewable Energy",
        description: "Examining the role of renewables in our future.",
        authorImage: "public/images/profile.png",
        authorName: "Alex Green",
        publishDate: "Saturday, 5th December 2023",
        category: "Science",
      },
      {
        id: 7,
        image: "public/images/articles/7.jpg",
        title: "Diving into Marine Biology",
        description: "Unraveling mysteries beneath the ocean's surface.",
        authorImage: "public/images/profile.png",
        authorName: "Marina Fisher",
        publishDate: "Monday, 28th November 2023",
        category: "Biology",
      },
      {
        id: 8,
        image: "public/images/articles/8.png",
        title: "Elegance in Simplicity: Minimalist Fashion",
        description: "Embracing simplicity and style in the fashion world.",
        authorImage: "public/images/profile.png",
        authorName: "Sophie Ward",
        publishDate: "Friday, 2nd December 2023",
        category: "Fashion",
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
            <p class="article-category">${article.category}</p>
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




