const renderInput = (
  name,
  state,
  change,
  id,
  inputClass,
  ref,
  placeholder = "what would you you like to do today"
) => {
  if (name === "text")
    return (
      <input
        type={name}
        value={state}
        className={inputClass}
        onChange={change}
        id={id}
        ref={ref}
        placeholder={placeholder}
      />
    );

  return (
    <input
      className={inputClass}
      type={name}
      onChange={change}
      checked={state.completed}
      value={state.title}
      id={id}
    />
  );
};

const renderLabel = (label, id, classNew) => {
  return (
    <label htmlFor={id} className={classNew}>
      <span className="label-text">{label}</span>
    </label>
  );
};

const renderButton = (label, color, onclick, type = "submit") => {
  return (
    <button type={type} onClick={onclick} className={` btn ${color}`}>
      {label}
    </button>
  );
};

export { renderInput, renderButton, renderLabel };
