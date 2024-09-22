// components/Navbar.js

"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <nav className="shadow shadow sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FCA311" width="30" height="30" viewBox="-1 0 19 19" className="cf-icon-svg">
                            <circle cx="8.5" cy="9.5" r="7.5" fill="#FCA311 " />
                            <path fill="#14213D" d="M16.417 9.579A7.917 7.917 0 1 1 8.5 1.662a7.917 7.917 0 0 1 7.917 7.917zm-3.831-2.295a.396.396 0 0 0 .182-.53 4.697 4.697 0 0 0-4.225-2.642.4.4 0 0 0-.077.008 1.526 1.526 0 0 0-1.16.55h-.001l-.005.007a1.532 1.532 0 0 0-.096.131.846.846 0 0 1-1.327-.084.396.396 0 0 0-.772.123v1.605a.396.396 0 0 0 .768.137.846.846 0 0 1 1.35-.07q.028.042.06.08a.845.845 0 0 1 .137.464v.284h2.416v-.764a.846.846 0 0 1 .846-.846.838.838 0 0 1 .388.094 3.915 3.915 0 0 1 .987 1.27.396.396 0 0 0 .356.223.389.389 0 0 0 .173-.04zm-3.088.945a.318.318 0 0 0-.317-.316H7.938a.318.318 0 0 0-.317.316v6.687a.318.318 0 0 0 .317.317h1.243a.318.318 0 0 0 .317-.317z" />
                        </svg>
                        <strong>DELMAR</strong>
                        <div className="hidden md:flex space-x-4 ml-10">
                            <nav className="space-x-6">
                                <Link href="/">
                                    <span>Inicio</span>
                                </Link>
                                <Link href="/services">
                                    <span>Servicios</span> {/* Detalle de los servicios técnicos que ofreces */}
                                </Link>
                                <Link href="/pricing">
                                    <span>Precios</span> {/* Información sobre precios y planes */}
                                </Link>
                                <Link href="/about">
                                    <span>Sobre Nosotros</span> {/* Información sobre Delmar */}
                                </Link>
                                <Link href="/projects">
                                    <span>Proyectos</span> {/* Ejemplos de trabajos anteriores, casos de estudio */}
                                </Link>
                                <Link href="/testimonials">
                                    <span>Testimonios</span> {/* Opiniones y experiencias de clientes */}
                                </Link>
                                <Link href="/contact">
                                    <span>Contacto</span> {/* Información para que los clientes te contacten */}
                                </Link>
                            </nav>

                        </div>
                    </div>
                    <div className="flex md:hidden">
                        <button onClick={toggleMenu} className="text-gray-900 focus:outline-none">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                    </>
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="flex flex-col space-y-1 p-4 bg-white shadow">
                        <Link href="/" className="block text-gray-900 hover:text-indigo-600">Dashboard</Link>
                        <Link href="/team" className="block text-gray-900 hover:text-indigo-600">Team</Link>
                        <Link href="/projects" className="block text-gray-900 hover:text-indigo-600">Projects</Link>
                        <Link href="/calendar" className="block text-gray-900 hover:text-indigo-600">Calendar</Link>
                    </div>
                </div>
            )}
        </nav>
        </header>
    );
};

export default Navbar;
