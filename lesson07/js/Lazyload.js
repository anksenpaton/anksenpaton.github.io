let loaded = 0

const config = {
  rootMargin: '0px 0px 50px 0px',
  threshold: 1
}

const images = document.querySelectorAll('[data-src]')

let observer = new IntersectionObserver(function (entries, self) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      preloadImage(entry.target)
      self.unobserve(entry.target)
    }
  })
}, config)

images.forEach(image => {
  observer.observe(image)
})

function preloadImage (img) {
  const src = img.getAttribute('data-src')
  if (!src) {
    return
  }
  img.src = src
}
