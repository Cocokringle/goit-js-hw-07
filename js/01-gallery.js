import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');  
const cardsMarkup = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
galleryContainer.addEventListener('click',onGalleryContainerClick)

function createGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
            <div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
            </a>
            </div>`;
        }).join('');
    
}


function onGalleryContainerClick(evt) {
    evt.preventDefault();
    const itemClick = evt.target.classList.contains('gallery__image');
    if (!itemClick) {
        return 
        
    }
    const originalImg = evt.target.dataset.source;
    
    modal(originalImg);

}

function modal(originalImg) {
   window.addEventListener('keydown', onEscKeyPress)
   const instance = basicLightbox.create(`
    <img src="${originalImg}" width="800" height="600">
    `)
    instance.show()
    
    function onEscKeyPress(evt) {
        if (evt.code === 'Escape') {
      instance.close()  
    }    

    }

}

