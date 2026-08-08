const lightbox = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightboxContent');

function openLightbox(src, isPdf) {
    lightboxContent.innerHTML = '';

    if (isPdf) {
        const iframe = document.createElement('iframe');
        iframe.src = src;
        iframe.title = 'Full preview';
        lightboxContent.appendChild(iframe);
    } else {
        const image = document.createElement('img');
        image.src = src;
        image.alt = 'Full-size preview';
        lightboxContent.appendChild(image);
    }

    lightbox.classList.add('active');
}

document.querySelectorAll('.project-image').forEach((item) => {
    item.addEventListener('click', () => {
        const fullSrc = item.getAttribute('data-full') || item.src;
        const isPdf = fullSrc.endsWith('.pdf');
        openLightbox(fullSrc, isPdf);
    });
});

lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
    lightboxContent.innerHTML = '';
});
