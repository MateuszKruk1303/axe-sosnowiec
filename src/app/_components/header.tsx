import Image from 'next/image'

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <Image
            src="/placeholder.svg?height=60&width=200"
            alt="Strona w budowie"
            width={200}
            height={60}
            className="w-auto h-12"
          />
          <nav>
            <ul className="flex space-x-6">
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
          </nav>
        </div>
        <div className="text-center py-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Strona w budowie
          </h1>
          <p className="text-xl md:text-2xl mb-8">Strona w budowie</p>
          <a
            href="#"
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
          >
            Strona w budowie
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
