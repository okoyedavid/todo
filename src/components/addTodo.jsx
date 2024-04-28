import React from "react";
import {
  renderButton,
  renderInput,
  renderLabel,
} from "../features/utils/input";

const AddTodo = ({
  handleSubmit,
  handleChange,
  inputValue,
  inputRef,
  handleEditSubmit,
  render,
}) => {
  if (!render)
    return (
      <form onSubmit={handleSubmit}>
        {renderLabel("Todo", "Todo", "form-label")}
        <div className="mb-3 row">
          <div className="col-8">
            {renderInput(
              "text",
              inputValue,
              handleChange,
              "Todo",
              "form-control",
              inputRef
            )}
          </div>
          <div className="col-4">{renderButton("Add Todo", "btn-primary")}</div>
        </div>
      </form>
    );

  return (
    <form onSubmit={handleEditSubmit}>
      {renderLabel("Edit", "Todo", "form-label")}
      <div className="mb-3 row">
        <div className="col-8">
          {renderInput(
            "text",
            inputValue,
            handleChange,
            "Todo",
            "form-control",
            inputRef,
            "Update Todo"
          )}
        </div>
        <div className="col-4">
          {renderButton("Update Todo", "btn-primary")}
        </div>
      </div>
    </form>
  );
};

export default AddTodo;
