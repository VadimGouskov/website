"use client";
import React, { FormEvent } from "react";

function App() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    const response = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <form className="flex flex-col md:max-w-128" onSubmit={onSubmit}>
        <label>name</label>
        <input type="text" name="name" required />

        <label>email</label>
        <input type="email" name="email" required />

        <label>message</label>
        <textarea name="message" required></textarea>

        <button type="submit">Submit Form</button>
      </form>
      <span>{result}</span>
    </div>
  );
}

export default App;
