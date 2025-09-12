import React, { useState, useRef } from 'react';
import { Linkedin, Instagram } from 'lucide-react';
import ShinyText from '../../reactbits/ShinyText/ShinyText';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_21eb93i';
const EMAILJS_TEMPLATE_ID = 'template_t35ilql';
const EMAILJS_PUBLIC_KEY = 'ak42YLSsoXJ037J5F';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const formRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      if (typeof window !== 'undefined' && window.emailjs) {
        const result = await window.emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_name: 'Tamim',
          },
          EMAILJS_PUBLIC_KEY
        );
        
        if (result.text === 'OK') {
          setSubmitStatus('success');
          setFormData({ name: '', email: '', message: '' });
        } else {
          throw new Error('Failed to send email');
        }
      } else {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
        script.onload = async () => {
          window.emailjs.init(EMAILJS_PUBLIC_KEY);
          const result = await window.emailjs.send(
            EMAILJS_SERVICE_ID, // FIX: use service ID here
            EMAILJS_TEMPLATE_ID,
            {
              from_name: formData.name,
              from_email: formData.email,
              message: formData.message,
              to_name: 'Tamim',
            }
          );
          
          if (result.text === 'OK') {
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
          } else {
            throw new Error('Failed to send email');
          }
        };
        document.head.appendChild(script);
      }
      
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Load EmailJS from CDN */}
      <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
      
      <div className="min-h-screen bg-black text-white flex items-center justify-center lg:pl-90 lg:mt-50 px-4 sm:px-6">
        <div className="w-full h-full">
          {/* Only apply the negative margin on desktop to avoid mobile overlap */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 items-start lg:min-h-screen mt-0 lg:mt-[-200px]">
            {/* Left Section - Form */}
            <div className="mt-10 lg:mt-30 space-y-10 md:space-y-12 p-4 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 md:mb-8 leading-tight">
                  <ShinyText text="Contact Me" disabled={false} speed={3} className="custom-class" />
                </h1>
                <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
                  Please feel free to contact me and I<br />
                  will get back to you as soon as I can.
                </p>
              </div>

              {/* Success/Error Alert */}
              {submitStatus && (
                <div className={`p-4 rounded-lg ${
                  submitStatus === 'success' 
                    ? 'bg-green-600/20 border border-green-500 text-green-200' 
                    : 'bg-red-600/20 border border-red-500 text-red-200'
                }`}>
                  {submitStatus === 'success' 
                    ? 'Message sent successfully! We\'ll get back to you soon.' 
                    : 'Failed to send message. Please try again.'}
                </div>
              )}

              <div className="space-y-8 md:space-y-10">
                <div className="space-y-6 md:space-y-8">
                  {/* Name Field */}
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                      className={`w-full bg-transparent border-b-2 ${
                        errors.name ? 'border-red-500' : 'border-gray-600'
                      } focus:border-white outline-none py-3 md:py-4 text-base md:text-lg lg:text-xl placeholder-gray-400 transition-colors duration-300`}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-2">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      className={`w-full bg-transparent border-b-2 ${
                        errors.email ? 'border-red-500' : 'border-gray-600'
                      } focus:border-white outline-none py-3 md:py-4 text-base md:text-lg lg:text-xl placeholder-gray-400 transition-colors duration-300`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-2">{errors.email}</p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Message"
                      rows="1"
                      className={`w-full bg-transparent border-b-2 ${
                        errors.message ? 'border-red-500' : 'border-gray-600'
                      } focus:border-white outline-none py-3 md:py-4 text-base md:text-lg lg:text-xl placeholder-gray-400 resize-none transition-colors duration-300`}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-sm mt-2">{errors.message}</p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gray-600 hover:bg-gray-500 disabled:bg-gray-700 text-white font-medium py-4 md:py-5 px-6 md:px-8 text-base md:text-lg transition-colors duration-300 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send'}
                </button>
              </div>
            </div>

            {/* Right Section - Contact Info */}
            <div className="mt-12 lg:mt-57 space-y-10 md:space-y-16 p-4 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              {/* Visit Us */}
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4 md:mb-6">Location</h3>
                <div className="text-gray-300 text-base sm:text-lg space-y-2">
                  <p>Dhaka, Bangladesh</p>
                </div>
              </div>

              {/* Talk to Us */}
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4 md:mb-6">Get in touch</h3>
                <div className="text-gray-300 text-base sm:text-lg space-y-2">
                  <p>+8801823507219</p>
                  <p>nottamimislam@gmail.com</p>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-6 pt-4">
                <a 
                  href="https://www.linkedin.com/in/nottamimislam/"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={28} />
                </a>
                <a 
                  href="https://www.instagram.com/tamim_accidentally_/"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;