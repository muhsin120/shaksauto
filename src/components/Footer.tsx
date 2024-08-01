// src/components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-gray-800 text-gray-200 py-4 mt-12">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} MUHASIN THALAKKAL. All rights reserved.</p>
          <div className="mt-4">
            <a href="https://www.whatsapp.com/send?phone=+19029009432" target="_blank" rel="noopener noreferrer" className="text-teal-400 mx-2 hover:underline">
              WhatsApp
            </a>
            <a href="mailto:your-email@example.com" className="text-teal-400 mx-2 hover:underline">
              Email
            </a>
            <a href="https://www.instagram.com/auto_detailing_halifax?ighs=MTB1MmlndDd6aXBiMQ==" target="_blank" rel="noopener noreferrer" className="text-teal-400 mx-2 hover:underline">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    );
  }
  