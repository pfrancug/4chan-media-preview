const showPreview = (link) => {
    const previewEl = document.createElement('div')
    previewEl.setAttribute('id', 'preview')

    const webm = link.endsWith('.webm')
    const mediaEl = document.createElement(webm ? 'video' : 'img')
    mediaEl.setAttribute('src', link)

    if (webm) {
        mediaEl.setAttribute('autoplay', true)
        mediaEl.setAttribute('loop', true)
    }

    previewEl.appendChild(mediaEl)
    document.querySelector('body').appendChild(previewEl)
}

const hidePreview = () => {
    const elements = document.querySelectorAll('#preview')
    elements.forEach(element => element.parentNode.removeChild(element))
}

const images = document.querySelectorAll('.fileThumb')

images.forEach(image => {
    image.addEventListener('mouseover', (e) => {
        const anchor = e.target.closest('a').getAttribute('href')
        const link = anchor.replace(/^/, 'http:')
        showPreview(link)
    })
    image.addEventListener('mouseout', () => hidePreview())
})