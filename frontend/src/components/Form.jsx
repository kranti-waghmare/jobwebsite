import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState({});

  const validate = () => {
    let err = {};

    if (!form.email) err.email = "Email is required";
    if (!form.password) err.password = "Password is required";

    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();

    if (Object.keys(errors).length > 0) {
      setError(errors);
    } else {
      console.log("Form Submitted", form);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center py-10">
      <div className="flex gap-4">
        <div className="flex flex-col gap-2">
          <input
            placeholder="Email"
            className="border p-4 "
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <p className="text-red-500">{error.email}</p>
        </div>

        <div className="flex  gap-2 flex-col">
          <input
            type="password"
            placeholder="Password"
            className="border p-4 "
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <p className="text-red-500">{error.password}</p>
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
