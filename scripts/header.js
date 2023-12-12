// this is event listener to the hamburger icon
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navigation = document.querySelector('.navigation');
  
    // Toggle the 'active' class on click
    hamburger.addEventListener('click', function () {
      navigation.classList.toggle('active');
    });
  });
  