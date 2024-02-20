import React, { useState } from "react";

function EmailForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required");
      setSuccess("");
    } else if (!isValidEmail(email)) {
      setError("Please provide a valid email address");
      setSuccess("");
    } else {
      setError("");
      setSuccess("Thank you for subscribing!");
    }
  };

  const isValidEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    return regex.test(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full flex flex-col md:flex-row gap-5">
        <div>
          <input
            type="email"
            value={email}
            onChange={handleInputChange}
            placeholder="Your email address…"
            className={`rounded-full placeholder:opacity-50 px-10 md:px-6 py-3 border-2 border-light-blue ${
              error ? "border-red" : ""
            }`}
          />
          {error && (
            <div className="text-centet text-xs italic mt-3 ml-6 mb-8 text-red">
              {error}
            </div>
          )}
          {success && (
            <div className="text-centet text-xs italic mt-3 ml-12 md:ml-6 text-green-500">
              {success}
            </div>
          )}
        </div>
        <div>
          <button
            className="w-full rounded-full px-24 md:px-10 py-3 bg-blue text-white mb-4 shadow-[0_5px_10px_2px_rgba(76,123,243,0.23)] hover:opacity-80 font-semibold"
            type="submit"
          >
            Notify Me
          </button>
        </div>
      </div>
    </form>
  );
}

export default EmailForm;
