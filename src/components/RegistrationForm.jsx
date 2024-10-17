import React, { useEffect, useState } from "react";
import "../assets/RegistrationForm.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [timer, setTimer] = useState(3);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.name) validationErrors.name = "Name is required.";
    if (!formData.company) validationErrors.company = "Company is required.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Invalid email.";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSuccess(true);
    }
  };

  useEffect(() => {
    if (success) {
      const countdown = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(countdown);
            setFormData({ name: "", company: "", email: "" });
            setErrors({});
            setSuccess(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(countdown);
    }
  }, [success]);

  return (
    <div className="registration-container">
      <div className="image-container">
        <img src="images/formImg.svg" alt="Illustration" />
      </div>
      <div className="form-container">
        {success ? (
          <div className="card success-card">
            <h2 className="success-message-title">Registration</h2>
            <p className="success-message-body">
              Hi {formData.name}, thanks for registering. Somebody will contact
              you soon.
            </p>
            <div className="timer">Closing in {timer} seconds...</div>
          </div>
        ) : (
          <div className="card">
            <h2>Registration</h2>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in
              tristique senectus dui pharetra sit.
            </p>
            <form className="registration-form" onSubmit={handleSubmit}>
              <label>Name *</label>
              <input
                className={errors.name ? "error" : ""}
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="error">{errors.name}</p>}

              <label>Company</label>
              <input
                className={errors.company ? "error" : ""}
                type="text"
                name="company"
                placeholder="Enter your company name"
                value={formData.company}
                onChange={handleChange}
              />
              {errors.company && <p className="error">{errors.company}</p>}

              <label>Email address *</label>
              <input
                className={errors.email ? "error" : ""}
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}

              <button type="submit">Register</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationForm;
