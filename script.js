window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav')
    if (window.pageYOffset > 0) { // obsolete?
        nav.classList.add('scrolled')
    } else {
        nav.classList.remove('scrolled')
    }
})

// Adding comment for commit change
