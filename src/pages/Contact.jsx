import React, { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Logic for form submission would go here
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
            We're here to <span className="text-orange-500">help.</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Have a question about an order, a restaurant, or just want to say hi? 
            Our team is ready to assist you 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Support Cards */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Support</h2>
            
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="bg-orange-100 p-3 rounded-2xl text-2xl">📦</div>
              <div>
                <h3 className="font-bold text-gray-800">Order Issues</h3>
                <p className="text-sm text-gray-500 mt-1">Is your food late or incorrect? Chat with our live support agents for an instant resolution.</p>
                <button className="text-orange-500 font-bold text-sm mt-3 hover:underline">Start Live Chat →</button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="bg-green-100 p-3 rounded-2xl text-2xl">💼</div>
              <div>
                <h3 className="font-bold text-gray-800">Partner with Us</h3>
                <p className="text-sm text-gray-500 mt-1">Want to grow your business with us? Join our network of top-rated restaurants.</p>
                <button className="text-green-600 font-bold text-sm mt-3 hover:underline">Apply Now →</button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-2xl text-2xl">📧</div>
              <div>
                <h3 className="font-bold text-gray-800">General Inquiry</h3>
                <p className="text-sm text-gray-500 mt-1">For anything else, send us an email and we'll get back to you within 24 hours.</p>
                <p className="text-blue-600 font-bold text-sm mt-1">support@foodieapp.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-[2rem] shadow-xl p-8 md:p-12 border border-gray-100">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎉</div>
                <h2 className="text-2xl font-bold text-gray-800">Message Sent!</h2>
                <p className="text-gray-500 mt-2">Thank you for reaching out. We'll get back to you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-orange-500 font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Subject</label>
                  <select className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-orange-500 outline-none transition-all appearance-none cursor-pointer">
                    <option>Order Status</option>
                    <option>Refund Request</option>
                    <option>Technical Issue</option>
                    <option>Feedback</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
                  <textarea 
                    required
                    rows="4" 
                    placeholder="Tell us how we can help..."
                    className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-orange-500 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-orange-500 text-white py-4 rounded-2xl font-black text-lg shadow-lg shadow-orange-100 hover:bg-orange-600 transition-all active:scale-[0.98]"
                >
                  SEND MESSAGE
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;