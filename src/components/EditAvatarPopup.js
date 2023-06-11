import { useRef, useEffect } from "react";
import useFormAndValidation from "../hooks/useFormAndValidation";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, buttonText }) {
  const avatarRef = useRef();
  const { values, handleChange, errors, isValid, resetForm } = useFormAndValidation();

  useEffect(() => { 
    if (isOpen) { 
      avatarRef.current.value = ""; 
      resetForm();
    }
  }, [isOpen, resetForm]);

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value, 
    });
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={buttonText}
      isDisabledSubmitButton={!isValid || !values.avatar}
    >
      <input
        className={`form__input ${errors.avatar && "form__input_type_error"}`}
        type="url"
        name="avatar"
        id="avatar"
        placeholder="Ссылка на картинку"
        ref={avatarRef}
        onChange={handleChange}
        required
      />
      <span className={`form__error ${errors.avatar && "form__error_visible"}`}>
        {errors.avatar}
      </span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;

