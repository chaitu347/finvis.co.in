import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const services = [
    "Corporate Law",
    "Litigation", 
    "Family Law",
    "Real Estate",
    "Intellectual Property",
    "Tax Law",
    "Other"
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (formData.name.length > 80) {
      newErrors.name = "Name is too long";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Enter your email";
    } else if (!/^\S+@\S+$/i.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (formData.phone.trim() && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Enter your message";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      
      // Add your Web3Forms access key here
      formDataToSend.append("access_key", "e386d127-8d17-40af-a856-e4df27798f9e");
      
      // Add form data
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone || "Not provided");
      formDataToSend.append("service", formData.service);
      formDataToSend.append("message", formData.message);
      
      // Add additional fields for better organization
      formDataToSend.append("subject", `New Legal Consultation Request - ${formData.service}`);
      formDataToSend.append("from_name", formData.name);
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        setMessage("Success! Your message has been sent. We'll get back to you soon.");
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        throw new Error(data.message || "Submission failed");
      }

    } catch (error) {
      setIsSuccess(false);
      setMessage("Something went wrong. Please try again later.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="bg-gray-900/95 backdrop-blur-sm border-2 border-amber-400/40 rounded-2xl p-8 shadow-2xl transition-all duration-300 hover:shadow-amber-400/30 hover:shadow-2xl hover:-translate-y-1">
        <div className="space-y-6">
          {/* Anti-bot honeypot field */}
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            style={{ display: "none" }}
            tabIndex="-1"
            autoComplete="off"
          />
          
          {/* Web3Forms hidden fields */}
          <input type="hidden" name="subject" value="New Legal Consultation Request" />
          <input type="hidden" name="redirect" value="https://web3forms.com/success" />

          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              autoComplete="name"
              className={`w-full px-4 py-3 bg-gray-800/80 border-2 ${errors.name ? 'border-red-500' : 'border-gray-600'} rounded-lg outline-none text-white placeholder-gray-400 transition-all duration-200 focus:border-amber-400 focus:shadow-lg focus:shadow-amber-400/20`}
            />
            {errors.name && (
              <div className="text-red-400 text-sm mt-1">
                {errors.name}
              </div>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              autoComplete="email"
              className={`w-full px-4 py-3 bg-gray-800/80 border-2 ${errors.email ? 'border-red-500' : 'border-gray-600'} rounded-lg outline-none text-white placeholder-gray-400 transition-all duration-200 focus:border-amber-400 focus:shadow-lg focus:shadow-amber-400/20`}
            />
            {errors.email && (
              <div className="text-red-400 text-sm mt-1">
                {errors.email}
              </div>
            )}
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number (Optional)"
              autoComplete="tel"
              className={`w-full px-4 py-3 bg-gray-800/80 border-2 ${errors.phone ? 'border-red-500' : 'border-gray-600'} rounded-lg outline-none text-white placeholder-gray-400 transition-all duration-200 focus:border-amber-400 focus:shadow-lg focus:shadow-amber-400/20`}
            />
            {errors.phone && (
              <div className="text-red-400 text-sm mt-1">
                {errors.phone}
              </div>
            )}
          </div>

          <div>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-gray-800/90 border-2 ${errors.service ? 'border-red-500' : 'border-gray-600'} rounded-lg outline-none text-white transition-all duration-200 focus:border-amber-400 focus:shadow-lg focus:shadow-amber-400/20`}
            >
              <option value="" className="text-gray-400">Select a Service</option>
              {services.map((service, index) => (
                <option key={index} value={service} className="text-white bg-gray-800">
                  {service}
                </option>
              ))}
            </select>
            {errors.service && (
              <div className="text-red-400 text-sm mt-1">
                {errors.service}
              </div>
            )}
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className={`w-full px-4 py-3 bg-gray-800/80 border-2 ${errors.message ? 'border-red-500' : 'border-gray-600'} rounded-lg outline-none text-white placeholder-gray-400 transition-all duration-200 focus:border-amber-400 focus:shadow-lg focus:shadow-amber-400/20 resize-vertical min-h-[120px] max-h-[200px]`}
            />
            {errors.message && (
              <div className="text-red-400 text-sm mt-1">
                {errors.message}
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            onClick={handleSubmit}
            className="w-full bg-amber-400 hover:bg-amber-500 text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Sending...
              </div>
            ) : (
              "Send Message"
            )}
          </button>
        </div>

        {message && (
          <div className={`mt-6 p-4 rounded-lg text-center font-medium text-sm ${
            isSuccess 
              ? 'bg-green-900/50 text-green-300 border border-green-500/30' 
              : 'bg-red-900/50 text-red-300 border border-red-500/30'
          }`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;