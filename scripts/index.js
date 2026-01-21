const profileEditBtn = document.querySelector(".profile__edit-button");
const profileEditModal = document.querySelector("#edit-profile-modal");
const profileCloseBtn = profileEditModal.querySelector(".modal__close-button");
const profileNameInput = profileEditModal.querySelector("#profile-name-input");
const profileEditForm = profileEditModal.querySelector(".modal__form");
const profileDescriptionInput = profileEditModal.querySelector(
  "#profile-description-input",
);

const newPost = document.querySelector(".profile__new-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostClose = newPostModal.querySelector(".modal__close-button");
const newPostForm = newPostModal.querySelector(".modal__form");
const newPostImage = newPostModal.querySelector("#image-link");
const newPostCaption = newPostModal.querySelector("#caption-label");

const profileNameElement = document.querySelector(".profile__name");
const profileDescriptionElement = document.querySelector(
  ".profile__description",
);

profileEditBtn.addEventListener("click", function () {
  openModal(profileEditModal);
  profileNameInput.value = profileNameElement.textContent;
  profileDescriptionInput.value = profileDescriptionElement.textContent;
});
profileCloseBtn.addEventListener("click", function () {
  closeModal(profileEditModal);
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameElement.textContent = profileNameInput.value;
  profileDescriptionElement.textContent = profileDescriptionInput.value;
}
profileEditForm.addEventListener("submit", handleProfileFormSubmit);

newPost.addEventListener("click", function () {
  openModal(newPostModal);
});
newPostClose.addEventListener("click", function () {
  closeModal(newPostModal);
});
function handleNewPostFormSubmit(evt) {
  evt.preventDefault();
  console.log(newPostImage.value);
  console.log(newPostCaption.value);
}
newPostForm.addEventListener("submit", handleNewPostFormSubmit);
