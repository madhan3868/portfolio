import { Instagram, Linkedin, Mail, Phone, Send, Twitter } from "lucide-react";

const ContactSection = () => {
  const handleSubmit = () => {

    setTimeout(() => {
      alert("Form submitted successfully!");
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get in <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          If you have any questions or inquiries, please don't hesitate to reach
          out to me.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail />
                </div>
                <div>
                  <h4>Email</h4>
                  <a
                    href="mailto:madhank1780@gamil.com"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    madhank1780@gamil.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone />
                </div>
                <div>
                  <h4>Phone</h4>
                  <a
                    href="tel:+91 9014503868"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    +91 9014503868
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href=" www.linkedin.com/in/madhankorra" target="_blank">
                  <Linkedin />
                </a>
                <a href="" target="_blank">
                  <Instagram />
                </a>
                <a href="" target="_blank">
                  <Twitter />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6" action="">
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full h-12 px-4 py3 rounded-md border border-input bg-background focus:outline-hidden"
                placeholder="Your Name"
              />
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full h-12 px-4 py3 rounded-md border border-input bg-background focus:outline-hidden"
                placeholder="Your email"
              />
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Your Message
              </label>
              <textarea
                type="text"
                name="message"
                id="message"
                rows={4}
                required
                className="w-full px-4 py3 rounded-md border border-input bg-background focus:outline-hidden"
                placeholder="Hello, I'd like to talk you about..."
              />
              <button
                type="button"
                onClick={handleSubmit}
                className="consmic-button w-full bg-primary px-5 py-3 rounded-full flex justify-center items-center gap-2"
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
