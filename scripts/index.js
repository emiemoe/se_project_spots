const editProfile = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const profileCloseBtn = editProfileModal.querySelector(".modal__close-button");
const newPost = document.querySelector(".profile__new-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostClose = newPostModal.querySelector(".modal__close-button");

editProfile.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
});
profileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});
newPost.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});
newPostClose.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});
