const showPreview = (link) => {
    const previewEl = document.createElement('div')
    previewEl.setAttribute('id', 'preview')

    if (link.endsWith('.webm')) {
        console.log(link)
        const videoEl = document.createElement('video')
        videoEl.setAttribute('src', link)
        videoEl.setAttribute('autoplay', true)
        videoEl.setAttribute('loop', true)
        previewEl.appendChild(videoEl)
    } else {
        const imgEl = document.createElement('img')
        imgEl.setAttribute('src', link)
        previewEl.appendChild(imgEl)
    }

    document.querySelector('body').appendChild(previewEl)
}

const hidePreview = () => {
    const elements = document.querySelectorAll('#preview')
    elements.forEach(element => element.parentNode.removeChild(element))
}

const images = document.querySelectorAll('.fileThumb')

images.forEach((image) => {
    image.addEventListener('mouseover', (e) => {
        const anchor = e.target.closest('a').getAttribute('href')
        const link = anchor.replace(/^/, 'http:')
        showPreview(link)
    })
    image.addEventListener('mouseout', () => hidePreview())
})