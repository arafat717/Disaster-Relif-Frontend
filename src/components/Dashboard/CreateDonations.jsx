/* eslint-disable no-unused-vars */
import { useState } from "react";
import { toast } from "sonner";
import { setTheme } from "../../redux/toggle/toggleSlice";
import { useSelector } from "react-redux";
import { useCreateDonationMutation } from "../../redux/api/donatinApi";

const DonationForm = () => {
  const [formData, setFormData] = useState({
    image: "",
    category: "",
    title: "",
    amount: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const theme = useSelector((state) => state.toggle.theme);

  const [createDonation, { isLoading }] = useCreateDonationMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const { data } = await createDonation(formData);
        console.log("Donation created successfully:", data);
        // Reset form fields after successful submission
        setFormData({
          image: "",
          category: "",
          title: "",
          amount: "",
          description: "",
        });
        setErrors({});
        toast.success("Donation posted successfuly");
      } catch (error) {
        console.error("Error creating donation:", error.message);
        // Handle error states here
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.image) {
      errors.image = "Image URL is required";
    }
    if (!data.category) {
      errors.category = "Category is required";
    }
    if (!data.title) {
      errors.title = "Title is required";
    }
    if (!data.amount) {
      errors.amount = "Amount is required";
    } else if (isNaN(data.amount) || data.amount <= 0) {
      errors.amount = "Please enter a valid amount";
    }
    if (!data.description) {
      errors.description = "Description is required";
    }
    return errors;
  };

  return (
    <div className="max-w-xl min-h-screen mx-auto mt-10">
      <form
        onSubmit={handleSubmit}
        className={`card ${theme} shadow-md rounded px-8 pt-6 pb-8 mb-4`}
      >
        <div className="mb-6">
          <label className="block  text-sm font-bold mb-2" htmlFor="image">
            Image URL
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline ${
              errors.image && "border-red-500"
            }`}
            id="image"
            type="text"
            placeholder="Image URL"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
          {errors.image && (
            <p className="text-red-500 text-xs italic">{errors.image}</p>
          )}
        </div>
        <div className="mb-6">
          <label className="block  text-sm font-bold mb-2" htmlFor="category">
            Category
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline ${
              errors.category && "border-red-500"
            }`}
            id="category"
            type="text"
            placeholder="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
          {errors.category && (
            <p className="text-red-500 text-xs italic">{errors.category}</p>
          )}
        </div>
        <div className="mb-6">
          <label className="block  text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            className={`shadow appearance-none border  rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline ${
              errors.title && "border-red-500"
            }`}
            id="title"
            type="text"
            placeholder="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          {errors.title && (
            <p className="text-red-500 text-xs italic">{errors.title}</p>
          )}
        </div>
        <div className="mb-6">
          <label className="block  text-sm font-bold mb-2" htmlFor="amount">
            Amount
          </label>
          <input
            className={`shadow appearance-none border  rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline ${
              errors.amount && "border-red-500"
            }`}
            id="amount"
            type="number"
            placeholder="Amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
          {errors.amount && (
            <p className="text-red-500 text-xs italic">{errors.amount}</p>
          )}
        </div>
        <div className="mb-6">
          <label
            className="block  text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className={`shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline ${
              errors.description && "border-red-500"
            }`}
            id="description"
            placeholder="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
          {errors.description && (
            <p className="text-red-500 text-xs italic">{errors.description}</p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-cyan-700 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create Donation Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default DonationForm;
