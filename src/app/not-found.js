import Link from 'next/link'
import Image from 'next/image';

export default function NotFound() {
  return (
    <section className="not-found">
      <Image
        src="/images/404.png"
        height={144}
        width={144}
        alt="No encontramos lo que buscas"
      />
      <h1 className="text-5xl font-bold">¡Ups! No encontramos lo que buscas</h1>
      <p className="text-lg text-gray-600 mt-4">
        Parece que la página que estás buscando no existe o fue movida. No te preocupes, en Delmar estamos aquí para ayudarte a resolver cualquier problema, ya sea en la web o en tu hogar.
      </p>
      <div className="mt-6">


        <Link href="/works" className="px-6 py-2 m-2 inline-block bg-gradient-to-r from-[#FCA311] to-yellow-500 text-black rounded-lg shadow-lg hover:from-yellow-600 hover:to-[#FCA311] transition-colors duration-300">
          Enalce
        </Link>
        <Link href="/works" className="px-6 py-2 m-2 inline-block bg-gradient-to-r from-[#FCA311] to-yellow-500 text-black rounded-lg shadow-lg hover:from-yellow-600 hover:to-[#FCA311] transition-colors duration-300">
          Enalce
        </Link> <Link href="/works" className="px-6 py-2 m-2 inline-block bg-gradient-to-r from-[#FCA311] to-yellow-500 text-black rounded-lg shadow-lg hover:from-yellow-600 hover:to-[#FCA311] transition-colors duration-300">
          Enalce
        </Link> <Link href="/works" className="px-6 py-2 m-2 inline-block bg-gradient-to-r from-[#FCA311] to-yellow-500 text-black rounded-lg shadow-lg hover:from-yellow-600 hover:to-[#FCA311] transition-colors duration-300">
          Enalce
        </Link> <Link href="/works" className="px-6 py-2 m-2 inline-block bg-gradient-to-r from-[#FCA311] to-yellow-500 text-black rounded-lg shadow-lg hover:from-yellow-600 hover:to-[#FCA311] transition-colors duration-300">
          Enalce
        </Link> <Link href="/works" className="px-6 py-2 m-2 inline-block bg-gradient-to-r from-[#FCA311] to-yellow-500 text-black rounded-lg shadow-lg hover:from-yellow-600 hover:to-[#FCA311] transition-colors duration-300">
          Enalce
        </Link>

      </div>

      <p className="text-lg text-gray-600 mt-6">
        ¿Tienes problemas en casa? ¡No te preocupes! Nuestros técnicos están listos para ayudarte.
        <Link href="/contact" className="px-6 py-2 mx-2 inline-block bg-gradient-to-r from-[#FCA311] to-yellow-500 text-black rounded-lg shadow-lg hover:from-yellow-600 hover:to-[#FCA311] transition-colors duration-300">
          Contacto
        </Link>
        para recibir asistencia inmediata.
      </p>

    </section>
  )
}