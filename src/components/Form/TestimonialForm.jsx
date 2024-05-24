import { useState } from "react";
import { toast } from "sonner";
import { useCreateTestominalMutation } from "../../redux/api/testominalApi";

const TestimonialForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    imageUrl: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const [createTestimonial, { loading, error }] = useCreateTestominalMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.description.trim()) {
      errors.description = "Description is required";
    }
    setErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }
    try {
      const res = await createTestimonial({
        name: formData.name,
        email: formData.email,
        imageUrl: formData.imageUrl,
        description: formData.description,
      });
      console.log(res);
      setFormData({
        name: "",
        email: "",
        imageUrl: "",
        description: "",
      });
      toast.success("Testimonial submitted successfully!");
    } catch (error) {
      console.error("Error submitting testimonial:", error);
      toast.errors("Error submitting testimonial. Please try again later.");
    }
  };

  return (
    <div>
      <h1 className="text-center text-2xl my-5 font-semibold">
        Create Testominal
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto mt-8 p-4 bg-gray-100 shadow-md rounded-md"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label
            htmlFor="imageUrl"
            className="block text-gray-700 font-semibold"
          >
            Image URL:
          </label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-semibold"
          >
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md border ${
              errors.description ? "border-red-500" : "border-gray-300"
            } shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
          ></textarea>
          {errors.description && (
            <p className="text-red-500">{errors.description}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          disabled={loading}
        >
          Submit
        </button>
        {error && (
          <p className="text-red-500 mt-2">
            Error: Failed to submit testimonial. Please try again later.
          </p>
        )}
      </form>
    </div>
  );
};

export default TestimonialForm;
