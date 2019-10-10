const createElement = (link) => {
    const previewEl = document.createElement('div')
    previewEl.setAttribute('id', 'preview')
    previewEl.style.position = 'fixed'
    previewEl.style.left = '400px'
    previewEl.style.top = '25px'
    previewEl.style['height'] = 'calc(100% - 50px)'
    previewEl.style['width'] = 'calc(100% - 425px)'

    const imageEl = document.createElement('img')
    imageEl.setAttribute('src', link)
    imageEl.style['max-height'] = '100%'
    imageEl.style['max-width'] = '100%'

    previewEl.appendChild(imageEl)
    document.querySelector('body').appendChild(previewEl)
}

const removePreview = () => {
    const elements = document.querySelectorAll('#preview')
    elements.forEach(element => {
        element.parentNode.removeChild(element)
    })
}

const images = document.querySelectorAll('.fileThumb')

images.forEach((image) => {
    image.addEventListener('mouseover', (e) => {
        const anchor = e.target.closest("a").getAttribute('href')
        const link = anchor.replace(/^/, 'http:')
        createElement(link)
    })
    image.addEventListener('mouseout', () => {
        removePreview()
    })
})