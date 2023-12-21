class Article{
    constructor() {
     this.articles = [];
    }
     createArticle(title, description, file) {
       const newArticle = {
         id: this.articles.length + 1,
         title: title,
         description: description,
         image: file ? URL.createObjectURL(file) : "public/images/articles/6.jpg",
         authorImage: "public/images/articles/6.jpg",
         authorName: 'Prince Kelly',
         publishDate: "Thursday, 2nd October 2004",
         category: "Nature",
       };
       this.articles.push(newArticle);
       return newArticle;
     }
     readArticle(id) {
        return this.articles.find(article => article.id === id);
     }
     updateArticle(id, title, tag, description, file) {
         let article = this.articles.find(article => article.id === id);
         if(article) {
             article.title = title;
             article.description = description; 
             article.file = file;
         }
     }
     deleteArticle(id){
         this.articles = this.articles.filter(article => article.id !== id)
     }
 }
 


const post_video_image = document.querySelector("#post-image");
post_video_image.addEventListener('change', ()=>{
    const selected_file = post_video_image.files[0];
    if(selected_file.type.endsWith('mp4') || selected_file.type.endsWith('mkv') || selected_file.type.endsWith('gif')) {
        previewVideo();
    }
    else if(selected_file.type.endsWith('jpeg') || selected_file.type.endsWith('png') || selected_file.type.endsWith('jpg')) {
        previewImage();
    }
})

function previewImage() {
    const post_image = document.getElementById('post-image');
    const frame = document.querySelector('.frame');
    
    if(post_image.files.length > 0) {
        const image_file = post_image.files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
            const image = new Image();
            image.src = e.target.result;
            frame.innerHTML = "";
            frame.appendChild(image);
        };
        reader.readAsDataURL(image_file);
    }
    else {
        frame.innerHTML = "";
    }
}

function previewVideo() {
    const post_video = document.getElementById('post-image');
    const frame = document.querySelector('.frame');

    if(post_video.files.length > 0) {
        const video_file = post_video.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const video = document.createElement('video');
            video.src = e.target.result;
            video.controls = true;
    
            frame.innerHTML = "";
            frame.appendChild(video);
        };
        reader.readAsDataURL(video_file);   
    }
    else {
        frame.innerHTML = "";
    }
}

const article = new Article();
const btn_create_post = document.getElementById('btn-create-post');
btn_create_post.addEventListener('click', (event)=> {
    event.preventDefault();
    const uploadForm = document.querySelector('#uploadForm');
    const formData = new FormData(uploadForm);

    let title = formData.get('title');
    // let tag = formData.getAtrribute('tag');
    let description = formData.get('explanantion');
    let file = formData.get('file');

    let newArticle = article.createArticle(title,description, file);
    saveArticleToStorage(newArticle);
    console.log(newArticle);

    window.location.href = 'all-articles.html';
});




function saveArticleToStorage(article) {
    const existingArticles = JSON.parse(localStorage.getItem('articles')) || [];
    existingArticles.push(article);
    localStorage.setItem('articles', JSON.stringify(existingArticles));
}



