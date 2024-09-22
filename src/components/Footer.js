import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <section className='bg-gradient-to-r from-[#FCA311] to-[#FCA311] py-5 mx-auto text-center'>
        <div>Cuéntanos qué necesitas y te recomendaremos a los mejores profesionales de confianza</div>
        <Link href="/contact">
          <span className="mt-5 px-6 py-2 bg-gradient-to-r from-[#14213d] to-[#14213d] text-white rounded-lg shadow-lg hover:from-green-500 hover:to-blue-600">
          Pide tu presupuesto sin compromiso
          </span>
        </Link>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-semibold">
          ¡Contáctanos! Estamos listos para ayudarte con soluciones técnicas de calidad.
        </h2>
        <Link href="/contact">
          <span className="mt-5 px-6 py-2 inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg shadow-lg hover:from-green-500 hover:to-blue-600">
            Get Rareblocks
          </span>
        </Link>
        <nav className="mt-8 space-x-6">
          <Link href="/about">
            <span>Acerca de</span>
          </Link>
          <Link href="/features">
            <span>Soluciones técnicas a tu alcance</span>
          </Link>
          <Link href="/works">
            <span>Proyectos</span>
          </Link>
          <Link href="/support">
            <span>Soporte</span>
          </Link>
        </nav>
        <div className="mt-8">
          <span className="text-sm">© Copyright 2024, Todos los derechos reservados - Delmar</span>

          <div className="mt-2 space-x-4">
            <Link href="/privacy">
              <span>Política de Privacidad</span>
            </Link>
            <Link href="/terms">
              <span>Términos y Condiciones</span>
            </Link>

          </div>
        </div>
        <section className="mt-4 flex justify-center space-x-6 footer-icongroup-media-links">

          <Link href="https://instagram.com">
            <span aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
                <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
              </svg>
            </span>
          </Link>
          <Link href="https://instagram.com">
            <span aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
                <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
              </svg>
            </span>
          </Link>
          <Link href="https://instagram.com">
            <span aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
                <path d="M 6 3 C 4.3550302 3 3 4.3550302 3 6 L 3 18 C 3 19.64497 4.3550302 21 6 21 L 18 21 C 19.64497 21 21 19.64497 21 18 L 21 6 C 21 4.3550302 19.64497 3 18 3 L 6 3 z M 12 7 L 14 7 C 14 8.005 15.471 9 16 9 L 16 11 C 15.395 11 14.668 10.734156 14 10.285156 L 14 14 C 14 15.654 12.654 17 11 17 C 9.346 17 8 15.654 8 14 C 8 12.346 9.346 11 11 11 L 11 13 C 10.448 13 10 13.449 10 14 C 10 14.551 10.448 15 11 15 C 11.552 15 12 14.551 12 14 L 12 7 z"></path>
              </svg>
            </span>
          </Link>
          <Link href="https://instagram.com">
            <span aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
                <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"></path>
              </svg>
            </span>
          </Link>
          <Link href="https://instagram.com">
            <span aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"></path>
              </svg>
            </span>
          </Link>


        </section>
      </div>
    </footer>
  );
};

export default Footer;
