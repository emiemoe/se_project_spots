// Declaring a configuration object that contains the
// necessary classes and selectors.
const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save-button",
  inactiveButtonClass: "modal__save_button_inactive",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_active",
};

const showInputError = (
  formElement,
  inputElement,
  ErrorMessage,
  configuration,
) => {
  const errorMessageElement = formElement.querySelector(
    `#${inputElement.id}-error`,
  );
  errorMessageElement.textContent = ErrorMessage;
  inputElement.classList.add(configuration.inputErrorClass);
};

const hideInputError = (formElement, inputElement, configuration) => {
  const errorMessageElement = formElement.querySelector(
    `#${inputElement.id}-error`,
  );
  errorMessageElement.textContent = "";
  inputElement.classList.remove(configuration.inputErrorClass);
};

const checkInputValidity = (formElement, inputElement, configuration) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList, configuration) => {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, configuration) => {
  if (hasInvalidInput(inputList)) {
    disableButton(buttonElement);
  } else {
    buttonElement.classList.remove(configuration.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

const disableButton = (buttonElement, configuration) => {
  buttonElement.classList.add("modal__save_button_inactive");
  buttonElement.disabled = true;
};

const resetValidation = (formElement, inputList) => {
  inputList.forEach((input) => {
    hideInputError(formElement, input);
  });
};

const setEventListeners = (formElement, configuration) => {
  const inputList = Array.from(formElement.querySelectorAll(".modal__input"));
  const buttonElement = formElement.querySelector(".modal__save-button");
  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = (configuration) => {
  const formList = document.querySelectorAll(configuration.formSelector);
  formList.forEach((formElement) => {
    setEventListeners(formElement);
  });
};

enableValidation(settings);
