"use client"

import { useState } from 'react';
const Welcome = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación: al menos uno de los campos debe estar completado
        if (!name && !email && !phone) {
            alert('Por favor, ingresa tu nombre completo, correo electrónico o número de teléfono.');
            return;
        }

        // Aquí puedes manejar el envío de datos (nombre, email o teléfono)
        console.log('Datos enviados:', { name, email, phone });
    };

    return (
        <div className="bg-[#14213D] p-8 rounded-xl shadow-xl text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
                ¡Suscríbete para recibir novedades!
            </h2>
            <p className="text-gray-300 mb-8">
                Recibe notificaciones cuando lancemos nuevos servicios o productos. No te lo pierdas.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input
                    type="text"
                    placeholder="Introduce tu nombre completo"
                    className="px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-700 text-white placeholder-gray-400 w-full"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="tel"
                    placeholder="Introduce tu número de teléfono"
                    className="px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-700 text-white placeholder-gray-400 w-full"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Introduce tu correo"
                    className="px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-700 text-white placeholder-gray-400 w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button
                    type="submit"
                    className="px-6 py-2 bg-[#FCA311] text-white rounded-lg shadow-lg hover:bg-yellow-500 transition-colors duration-300"
                >
                    Notificarme
                </button>
            </form>
        </div>
    );
};

export default Welcome;
