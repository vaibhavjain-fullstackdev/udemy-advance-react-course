import React, { useRef } from "react";

const UncontrolledForm = () => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("nameInputRef", nameInputRef.current.value);
    console.log("ageInputRef", ageInputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" ref={nameInputRef} />
      <input type="number" placeholder="Age" ref={ageInputRef} />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default UncontrolledForm;
