import React, { useState, useEffect } from "react";

export default function FncComponent() {
  const [name, setName] = useState("");
  const [surName, setsurName] = useState("");
  const onInputChange = (event) => {
    setName(event.target.value);
  };
  const onSurNameChange = (event) => {
    setsurName(event.target.value);
  };
  useEffect(() => {
    console.log("useEffect is called");
    document.title = name;
  }, [name]);
  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={name} onChange={onInputChange} />
      <label htmlFor="surName">Name:</label>
      <input type="text" id="surName" name="surName" value={surName} onChange={onSurNameChange} />
    </div>
  );
}
