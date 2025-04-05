import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the form data to your backend
    // For now, we'll just show a success message
    toast({
      title: "Message sent",
      description: "Thank you for your message. I'll get back to you soon!",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 relative">
          <span className="relative z-10">Get In Touch</span>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary dark:bg-blue-400"></span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="md:col-span-2 bg-white dark:bg-slate-800 rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-slate-700 text-primary dark:text-blue-400">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">Email</h4>
                    <a href="mailto:roopsai@outlook.in" className="text-slate-800 dark:text-slate-200 hover:text-primary dark:hover:text-blue-400 transition-colors">
                      roopsai@outlook.in
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-slate-700 text-primary dark:text-blue-400">
                    <i className="fab fa-github"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">GitHub</h4>
                    <a href="#" className="text-slate-800 dark:text-slate-200 hover:text-primary dark:hover:text-blue-400 transition-colors">
                      github.com/roopsai
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-slate-700 text-primary dark:text-blue-400">
                    <i className="fab fa-linkedin"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">LinkedIn</h4>
                    <a href="#" className="text-slate-800 dark:text-slate-200 hover:text-primary dark:hover:text-blue-400 transition-colors">
                      linkedin.com/in/roopsaisurampudi
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">Connect with me</h4>
                <div className="flex space-x-4">
                  <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-slate-700 text-primary dark:text-blue-400 hover:bg-primary hover:text-white dark:hover:bg-blue-500 transition-colors">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-slate-700 text-primary dark:text-blue-400 hover:bg-primary hover:text-white dark:hover:bg-blue-500 transition-colors">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-slate-700 text-primary dark:text-blue-400 hover:bg-primary hover:text-white dark:hover:bg-blue-500 transition-colors">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-slate-700 text-primary dark:text-blue-400 hover:bg-primary hover:text-white dark:hover:bg-blue-500 transition-colors">
                    <i className="fab fa-medium-m"></i>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:col-span-3 bg-white dark:bg-slate-800 rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 focus:border-primary dark:focus:border-blue-500 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200" 
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 focus:border-primary dark:focus:border-blue-500 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200" 
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 focus:border-primary dark:focus:border-blue-500 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200" 
                    placeholder="Subject of your message"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 focus:border-primary dark:focus:border-blue-500 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200" 
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-blue-600 transition-colors w-full md:w-auto"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
