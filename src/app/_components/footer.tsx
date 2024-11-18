import { Mail, MapPin, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Strona w budowie</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Strona w budowie
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Strona w budowie
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Strona w budowie
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Strona w budowie
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Strona w budowie</h2>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="mr-2" size={20} />
                <span>Strona w budowie</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2" size={20} />
                <span>Strona w budowie</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2" size={20} />
                <span>Strona w budowie</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2024 Knapczyk Andrzej Firma Handlowa AXE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
