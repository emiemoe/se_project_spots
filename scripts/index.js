const initialCards = [
  {
    name: "Golden Gate Bridge",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];
//profileElements
const profileEditBtn = document.querySelector(".profile__edit-button");
const profileEditModal = document.querySelector("#edit-profile-modal");
const profileNameInput = profileEditModal.querySelector("#profile-name-input");
const profileEditForm = profileEditModal.querySelector(".modal__form");
const profileDescriptionInput = profileEditModal.querySelector(
  "#profile-description-input",
);
//editElements
const newPost = document.querySelector(".profile__new-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostForm = newPostModal.querySelector(".modal__form");
const newPostImage = newPostModal.querySelector("#image-link");
const newPostCaption = newPostModal.querySelector("#caption-label");
const newPostSave = newPostModal.querySelector(".modal__save-button");
const profileNameElement = document.querySelector(".profile__name");
const profileDescriptionElement = document.querySelector(
  ".profile__description",
);
//previewElements
const previewModal = document.querySelector("#preview-modal");
const previewCaptionElement = previewModal.querySelector(".modal__caption");
const previewImageElement = previewModal.querySelector(".modal__image");
//config
const formElement = document.querySelector(".modal__form");
const profileInputList = Array.from(
  profileEditForm.querySelectorAll(".modal__input"),
);
//cardElements
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");
const cardsList = document.querySelector(".cards__list");

//closebuttons
const closeButtons = document.querySelectorAll(".modal__close-button");

closeButtons.forEach((button) => {
  const popup = button.closest(".modal");
  button.addEventListener("click", () => closeModal(popup));
});
//card elements
function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitleElement = cardElement.querySelector(".card__title");
  const cardImageElement = cardElement.querySelector(".card__image");

  cardImageElement.src = data.link;
  cardImageElement.alt = data.name;
  cardTitleElement.textContent = data.name;

  const cardHeartElement = cardElement.querySelector(".card__heart-button");
  cardHeartElement.addEventListener("click", function () {
    cardHeartElement.classList.toggle("card__heart-button_active");
  });

  const cardDeleteElement = cardElement.querySelector(".card__delete-button");
  cardDeleteElement.addEventListener("click", function () {
    cardDeleteElement.closest(".card").remove();
  });

  cardImageElement.addEventListener("click", function () {
    previewImageElement.src = data.link;
    previewImageElement.alt = data.name;
    previewCaptionElement.textContent = data.name;
    openModal(previewModal);
  });
  return cardElement;
}
handleOverlayClick(previewModal);

//closeoverlay func
function handleOverlayClick(modal) {
  modal.addEventListener("click", (evt) => {
    if (evt.target === modal) {
      modal.classList.remove("modal_is-opened");
      closeModal(modal);
    }
  });
}

//escape key close
function handleEscape(evt) {
  if (evt.key === "Escape") {
    const openModal = document.querySelector(".modal_is-opened");
    if (openModal) {
      closeModal(openModal);
    }
  }
}
//open modal
function openModal(modal) {
  modal.classList.add("modal_is-opened");
  window.addEventListener("keydown", handleEscape);
}
//close modal
function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
  window.removeEventListener("keydown", handleEscape);
}
//profile
profileEditBtn.addEventListener("click", function () {
  openModal(profileEditModal);
  profileNameInput.value = profileNameElement.textContent;
  profileDescriptionInput.value = profileDescriptionElement.textContent;
  resetValidation(formElement, profileInputList, settings);
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameElement.textContent = profileNameInput.value;
  profileDescriptionElement.textContent = profileDescriptionInput.value;
  closeModal(profileEditModal);
}
handleOverlayClick(profileEditModal);

profileEditForm.addEventListener("submit", handleProfileFormSubmit);
//newpost
newPost.addEventListener("click", function () {
  openModal(newPostModal);
});

handleOverlayClick(newPostModal);

function handleNewPostFormSubmit(evt) {
  evt.preventDefault();

  const inputValues = {
    name: newPostCaption.value,
    link: newPostImage.value,
  };
  const cardElement = getCardElement(inputValues);
  cardsList.prepend(cardElement);
  evt.target.reset();
  disableButton(newPostSave, settings);
  closeModal(newPostModal);
}

newPostForm.addEventListener("submit", handleNewPostFormSubmit);

initialCards.forEach(function (item) {
  const cardElement = getCardElement(item);
  cardsList.append(cardElement);
});
