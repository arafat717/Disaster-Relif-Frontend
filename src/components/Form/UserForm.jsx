import React, { useState } from "react";
import { useCreateVolunteerMutation } from "../../redux/api/baseApi";
import { toast } from "sonner";

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    image: "",
  });

  const [errors, setErrors] = useState({});
  const [formValid, setFormValid] = useState(false);
  const [createVolunteer, { isLoading, isError, error }] =
    useCreateVolunteerMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateInput(name, value);
  };

  const validateInput = (name, value) => {
    let error = "";
    switch (name) {
      case "email":
        error =
          value.trim() === ""
            ? "Email is required"
            : !validateEmail(value)
            ? "Invalid email address"
            : "";
        break;
      case "name":
        error = value.trim() === "" ? "Name is required" : "";
        break;
      case "location":
        error = value.trim() === "" ? "Location is required" : "";
        break;
      case "image":
        error =
          !value.trim() === "" && !validateURL(value)
            ? "Invalid image URL"
            : "";
        break;
      // No validation for phone number
      default:
        break;
    }
    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const validateEmail = (email) => {
    // Basic email validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateURL = (url) => {
    // Basic URL validation
    const re = /^(ftp|http|https):\/\/[^ "]+$/;
    return re.test(url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createVolunteer(formData).unwrap();
      // Clear form fields after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        image: "",
      });
      toast.success("Volunteer Request Sumitted");
    } catch (error) {
      console.error("Error occurred while submitting data:", error);
    }
  };

  // Enable/disable submit button based on form validity
  React.useEffect(() => {
    const isValid = Object.values(errors).every((error) => error === "");
    setFormValid(isValid);
  }, [errors]);

  return (
    <div className="w-full p-10 my-15">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Sign Up For Volunteer
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 ${
              errors.name ? "border-red-500" : ""
            }`}
            required
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 ${
              errors.email ? "border-red-500" : ""
            }`}
            required
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>
        {/* Phone number field */}
        <div className="mb-4">
          <label htmlFor="phone" className="block mb-1">
            Phone Number:
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2`}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block mb-1">
            Location:
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 ${
              errors.location ? "border-red-500" : ""
            }`}
            required
          />
          {errors.location && (
            <p className="text-red-500 text-xs mt-1">{errors.location}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block mb-1">
            Image Link:
          </label>
          <input
            type="url"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 ${
              errors.image ? "border-red-500" : ""
            }`}
          />
          {errors.image && (
            <p className="text-red-500 text-xs mt-1">{errors.image}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={!formValid || isLoading}
          className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${
            (!formValid || isLoading) && "opacity-50 cursor-not-allowed"
          }`}
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
        {isError && <p className="text-red-500 text-sm mt-2">Error: {error}</p>}
      </form>
    </div>
  );
};

export default UserForm;
