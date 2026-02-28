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
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      configuration,
    );
  } else {
    hideInputError(formElement, inputElement, configuration);
  }
};

const hasInvalidInput = (inputList, formElement) => {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, configuration) => {
  if (hasInvalidInput(inputList, formElement)) {
    disableButton(buttonElement, configuration);
  } else {
    buttonElement.classList.remove(configuration.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

const disableButton = (buttonElement, configuration) => {
  buttonElement.classList.add(configuration.inactiveButtonClass);
  buttonElement.disabled = true;
};

const resetValidation = (formElement, inputList, settings) => {
  inputList.forEach((input) => {
    hideInputError(formElement, settings);
  });
};

const setEventListeners = (formElement, configuration) => {
  const inputList = Array.from(
    formElement.querySelectorAll(configuration.inputSelector),
  );
  const buttonElement = formElement.querySelector(
    configuration.submitButtonSelector,
  );
  toggleButtonState(inputList, buttonElement, configuration);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, configuration);
      toggleButtonState(inputList, buttonElement, configuration);
    });
  });
};

const enableValidation = (configuration) => {
  const formList = document.querySelectorAll(configuration.formSelector);
  formList.forEach((formElement) => {
    setEventListeners(formElement, configuration);
  });
};

enableValidation(settings);
