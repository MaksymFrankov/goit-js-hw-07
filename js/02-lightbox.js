import { galleryItems } from './gallery-items.js';
const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = addItemCard(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function addItemCard(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li>
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>
    `;
    })
    .join("");
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionsDelay: 250,
});


  
 