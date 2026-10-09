const galleryDialog = document.querySelector(".project-gallery-dialog");

if (galleryDialog) {
  const dialogImage = galleryDialog.querySelector("img");
  const dialogCaption = galleryDialog.querySelector(".dialog-caption");
  const closeButton = galleryDialog.querySelector(".dialog-close");

  document.querySelectorAll(".gallery-item").forEach((button) => {
    button.addEventListener("click", () => {
      const image = button.querySelector("img");
      const caption = button.closest("figure")?.querySelector("figcaption");
      dialogImage.src = image.currentSrc || image.src;
      dialogImage.alt = image.alt;
      dialogCaption.textContent = caption?.innerText || image.alt;
      galleryDialog.showModal();
    });
  });

  closeButton.addEventListener("click", () => galleryDialog.close());
  galleryDialog.addEventListener("click", (event) => {
    if (event.target === galleryDialog) galleryDialog.close();
  });
}
