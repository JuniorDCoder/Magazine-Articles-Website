// this is event listener to the hamburger icon
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navigation = document.querySelector('.navigation');
  
    // Toggle the 'active' class on click
    hamburger.addEventListener('click', function () {
      navigation.classList.toggle('active');
    });
});

window.addEventListener('DOMContentLoaded', (event) => {
  let categories = [...new Set(articles.map(article => article.category))];
  let dropdownContent = document.getElementById('dropdown-content');
  categories.forEach(category => {
      let a = document.createElement('a');
      a.href = "#";
      a.textContent = category;
      dropdownContent.appendChild(a);
  });
});
