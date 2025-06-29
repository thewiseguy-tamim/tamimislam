import React, { useState, useRef } from 'react';
import { Twitter, Linkedin, Instagram, Dribbble } from 'lucide-react';
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
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Initialize EmailJS if not already done
      if (typeof window !== 'undefined' && window.emailjs) {
        // EmailJS is loaded via CDN
        const result = await window.emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_name: 'Tamim', // You can customize this
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
        // Fallback: Load EmailJS dynamically
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
        script.onload = async () => {
          window.emailjs.init(EMAILJS_PUBLIC_KEY);
          const result = await window.emailjs.send(
            EMAILJS_TEMPLATE_ID,
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
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      // Clear error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Load EmailJS from CDN */}
      <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
      
      <div className="min-h-screen bg-black text-white flex items-center justify-center pl-90 mt-50">
        <div className="w-full h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-start min-h-screen">
            {/* Left Section - Form */}
            <div className="mt-30 space-y-12 p-6 md:p-16 flex flex-col justify-center min-h-screen">
              <div>
                <h1 className="text-6xl md:text-7xl font-light mb-8 leading-tight">
                  <ShinyText text="Contact Me" disabled={false} speed={3} className='custom-class' />
                </h1>
                <p className="text-gray-300 text-xl leading-relaxed">
                  Please feel free to contact me and I<br />
                  will get back to you as soon as we can.
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

              <div className="space-y-10">
                <div className="space-y-8">
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
                      } focus:border-white outline-none py-4 text-xl placeholder-gray-400 transition-colors duration-300`}
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
                      } focus:border-white outline-none py-4 text-xl placeholder-gray-400 transition-colors duration-300`}
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
                      } focus:border-white outline-none py-4 text-xl placeholder-gray-400 resize-none transition-colors duration-300`}
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
                  className="w-full bg-gray-600 hover:bg-gray-500 disabled:bg-gray-700 text-white font-medium py-5 px-8 text-lg transition-colors duration-300 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send'}
                </button>
              </div>
            </div>

            {/* Right Section - Contact Info */}
            <div className="mt-57 space-y-16 p-6 md:p-16 flex flex-col justify-center min-h-screen ">
              {/* Visit Us */}
              <div>
                <h3 className="text-4xl font-medium mb-6">Location</h3>
                <div className="text-gray-300 text-lg space-y-2">
                  <p>Dhaka, Bangladesh</p>
                  {/* <p>Strathfield South 2136</p> */}
                </div>
              </div>

              {/* Talk to Us */}
              <div>
                <h3 className="text-4xl font-medium mb-6 ">Get in touch</h3>
                <div className="text-gray-300 text-lg space-y-2">
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