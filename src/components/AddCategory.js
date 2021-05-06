import React, { useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
  const [error, setError] = useState(false);

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((categories) => [inputValue, ...categories]);
      setInputValue("");
      setError(false);
    } else {
      setError(true);
      return;
    }
  };

  return (
    <div>
      {error ? (
        <Error mensaje="Campo vacío o no se han agregado al menos dos caracteres." />
      ) : null}
      <form onSubmit={handleSubmit}>
        <input
          className="form-control p-3 rounded-pill"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Buscar gifs..."
        />
      </form>
    </div>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,

}

export default AddCategory;
