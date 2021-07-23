const elements = document.querySelectorAll('.anim');

observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if (entry.intersectionRatio > 0 && entry.target.className.includes('to-top')) {
            entry.target.style.animation = `anim-to-top 1.5s forwards ease-out`;
        }
        else if (entry.intersectionRatio > 0 && entry.target.className.includes('to-right')) {
            entry.target.style.animation = 'anim-to-right 1.5s forwards ease-out';
        }
        else if (entry.intersectionRatio > 0 && entry.target.className.includes('to-left')) {
            entry.target.style.animation = 'anim-to-left 1.5s forwards ease-out';
        }
        else {
            entry.target.style.animation = `none`
        }
    })

})
elements.forEach(element => {
    observer.observe(element)
})