const profileEditBtn = document.querySelector(".profile__edit-button");
const profileEditModal = document.querySelector("#edit-profile-modal");
const profileCloseBtn = profileEditModal.querySelector(".modal__close-button");
const profileNameInput = profileEditModal.querySelector("#profile-name-input");
const profileEditForm = profileEditModal.querySelector(".modal__form");
const profileDesInput = profileEditModal.querySelector(
  "#profile-description-input"
);
const profileEditSaveBtn = profileEditModal.querySelector(
  ".modal__save-button"
);

const newPost = document.querySelector(".profile__new-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostClose = newPostModal.querySelector(".modal__close-button");
const newPostForm = newPostModal.querySelector(".modal__form");
const newPostImage = newPostModal.querySelector("#image-link");
const newPostCaption = newPostModal.querySelector("#caption-label");
const newPostSavebtn = newPostModal.querySelector(".modal__save-button");

const profileNameElement = document.querySelector(".profile__name");
const profileDesElement = document.querySelector(".profile__description");

profileEditBtn.addEventListener("click", function () {
  profileEditModal.classList.add("modal_is-opened");
  profileNameInput.value = profileNameElement.textContent;
  profileDesInput.value = profileDesElement.textContent;
});
profileCloseBtn.addEventListener("click", function () {
  profileEditModal.classList.remove("modal_is-opened");
});
newPost.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
  console.log(newPostImage);
  console.log(newPostCaption);
});
newPostClose.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameElement.textContent = profileNameInput.value;
  profileDesElement.textContent = profileDesInput.value;
  profileEditModal.classList.remove("modal_is-opened");
}

profileEditForm.addEventListener("submit", handleProfileFormSubmit);

function handleNewPostFormSubmit(evt) {
  evt.preventDefault();
  console.log(newPostImage);
  console.log(newPostCaption);
  newPostModal.classList.remove("modal_is-opened");
}

newPostForm.addEventListener("submit", handleNewPostFormSubmit);
