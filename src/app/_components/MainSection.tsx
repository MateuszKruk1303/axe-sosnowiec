import Image from 'next/image'

export const MainSection = () => {
  return (
    <main className="flex-grow">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Strona w budowie"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Strona w budowie</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam,
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Strona w budowie"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Strona w budowie</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam,
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Strona w budowie"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Strona w budowie</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam,
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
