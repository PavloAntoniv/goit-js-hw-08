import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainerEl = document.querySelector('.gallery');
const imageEl = createGalleryImg(galleryItems);
galleryContainerEl.insertAdjacentHTML('beforeend', imageEl);

function createGalleryImg(item) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<ul class="gallery">
        <li>
 <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>
</ul>`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionType: 'alt',
});
