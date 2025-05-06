import { useForm, ValidationError } from "@formspree/react";
import { useState, useEffect } from "react";

const Contact = () => {
  const [state, handleSubmit] = useForm("movdvqny");
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
      setFormData({ name: "", email: "", message: "" });
    }
  }, [state.succeeded]);

  return (
    <section id="contact" className="min-h-screen max-w-6xl mx-auto p-6 pt-25">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="header text-2xl md:text-4xl font-bold uppercase text-center sm:text-left">
          Get In Touch
        </h2>
        <p className="mt-4 text-sm md:text-lg text-center sm:text-left">
          Whether you have a question, an opportunity, or just want to say hi —
          my inbox is always open. I’ll do my best to get back to you as soon as
          possible!
        </p>
      </div>
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
        {/* Left Contact Info */}
        <div className="w-full md:w-1/2 space-y-4" data-aos="fade-right">
          <h3 className=" text-xl md:text-2xl font-semibold md:font-bold mb-2">
            Contact Information
          </h3>
          <p className="text-xs md:text-sm">
            Feel free to reach out to me using the form or through the contact
            details below.
          </p>
          <div className="space-y-2">
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:deleonyafer@gmail.com"
                className="text-blue-500 hover:underline"
              >
                deleonyafer@gmail.com
              </a>
            </p>
            <p>
              <span className="font-semibold">Mobile:</span>{" "}
              <a
                href="tel:+639128023499"
                className="text-blue-500 hover:underline"
              >
                09128023499
              </a>
            </p>
            <p>
              <span className="font-semibold">LinkedIn:</span>{" "}
              <a
                href="https://www.linkedin.com/in/yaferdln/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                https://www.linkedin.com/in/yaferdln/
              </a>
            </p>
          </div>
        </div>

        {/* Right Form */}
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="form w-full md:w-1/2 card shadow-xl p-8 space-y-6"
          data-aos="zoom-in-up"
        >
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
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className={`button w-full py-2 px-4 font-semibold ${
              state.submitting
                ? "cursor-not-allowed"
                : "button hover:cursor-pointer hover:scale-95"
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
      </div>
    </section>
  );
};

export default Contact;
