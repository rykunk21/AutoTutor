function addSlideIn(entries, observer)
{
  entries.forEach(entry => {
    // add slideInclass
    if(entry.isIntersecting){
        document.getElementById(entry.target.id).classList.add('slideIn');
    }
  });
}

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  };

let observer = new IntersectionObserver(addSlideIn, options);

observer.observe(document.getElementById('landingContent'));
observer.observe(document.getElementById('aboutContent'));
observer.observe(document.getElementById('guildsContent'));