// app/contact.tsx
export default function Contact() {
    const whatsappNumber = "+19029009432"; // Replace with your WhatsApp number
    const emailAddress = "info@shakscardetailing.com"; // Replace with your email address
    const instagram = "auto_detailing_halifax"; // Replace with your Instagram username
  
    return (
      <section id="contact" className="py-12 bg-gray-900 text-white">
        <h2 className="text-3xl font-bold text-center mb-8 text-teal-400">Contact Us</h2>
        <form className="flex flex-col items-center mb-8">
          
          <button type="submit" className="px-6 py-2 bg-teal-500 text-white rounded hover:bg-teal-700">
            Connect Us
          </button>
        </form>
        <div className="text-center">
          <p className="mb-4">Reach us directly through:</p>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-teal-600 block mb-2"
          >
            WhatsApp
          </a>
          <a
            href={`https://www.instagram.com/${instagram}?ighs=MTB1MmlndDd6aXBiMQ==`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-teal-600 block mb-2"
          >
            Instagram
          </a>
          <a
            href={`mailto:${emailAddress}`}
            className="text-teal-400 hover:text-teal-600 block"
          >
            {emailAddress}
          </a>
        </div>
      </section>
    )
  }
  