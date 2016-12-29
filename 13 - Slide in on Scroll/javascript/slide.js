function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const images = document.querySelectorAll('.slide-in');

function checkSlide() {
  console.clear();
  console.log(window.scrollY + window.innerHeight);
  images.forEach(image => {
    console.log(image);
    console.log(image.offsetTop)
    const slideInAt = (window.scrollY + window.innerHeight) - image.height / 2;
    console.log('slide-in', slideInAt);

    const imageBottom = image.offsetTop + image.height;
    console.log('image Bottom', imageBottom);
    const isHalfShown = slideInAt > image.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;

    if (isHalfShown && isNotScrolledPast) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });

};


window.addEventListener('scroll', debounce(checkSlide));
