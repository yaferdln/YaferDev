import { useForm, ValidationError } from "@formspree/react";
import { useState, useEffect } from "react";

const Contact = () => {
  const [state, handleSubmit] = useForm("movdvqny"); // <-- Add your Formspree Form ID here
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    if (state.succeeded) {
      // Reset form data when submission is successful
      setFormData({ name: "", email: "", message: "" });
    }
  }, [state.succeeded]); // Trigger when the submission is successful

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center p-6 pt-20"
    >
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="w-full max-w-xl card  rounded-2xl shadow-xl p-8 space-y-6"
        data-aos="zoom-in"
      >
        <h2 className="text-3xl font-bold text-center header">Contact Me</h2>

        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm mb-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm mb-1">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={state.submitting}
          className={`w-full py-2 px-4 rounded-md font-semibold transition duration-300 button ${
            state.submitting
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </button>

        {/* Success Message */}
        {state.succeeded && (
          <p className="text-green-500 text-center font-medium mt-4">
            Thanks for reaching out! I'll get back to you soon 👋
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
