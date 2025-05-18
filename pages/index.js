import React from 'react';

const productos = [
  {
    id: 1,
    nombre: "Reloj TOMI ROSE BLACK",
    descripcion: "Caja oro rosado, correa negra, diseño sobrio y elegante.",
    precio: "120 USD",
    imagen: "https://i.imgur.com/7y0Ox9M.png",
  },
  {
    id: 2,
    nombre: "Reloj VINTAGE BLACK",
    descripcion: "Acero inoxidable, esfera negra clásica, estilo moderno.",
    precio: "95 USD",
    imagen: "https://i.imgur.com/KQch8xm.png",
  },
  {
    id: 3,
    nombre: "Reloj SPORT SILVER",
    descripcion: "Deportivo y resistente, ideal para uso diario.",
    precio: "110 USD",
    imagen: "https://i.imgur.com/XjVjYxj.png",
  },
];

const whatsappNumber = "595981234567"; // Cambia este número por tu WhatsApp real, formato internacional

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6 font-sans">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">BESTORE</h1>
        <p className="text-gray-600 mt-2 max-w-xl">
          Los relojes más facheros, elegantes y modernos para vos.
        </p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {productos.map(({ id, nombre, descripcion, precio, imagen }) => (
          <div key={id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={imagen} alt={nombre} className="w-full h-64 object-contain bg-gray-50"/>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{nombre}</h2>
              <p className="text-gray-600 mt-1">{descripcion}</p>
              <p className="mt-3 font-bold text-lg text-gray-900">{precio}</p>
            </div>
          </div>
        ))}
      </main>

      <footer className="mt-12 w-full max-w-6xl text-center text-gray-600 text-sm">
        <p>Formas de pago aceptadas: Visa, Mastercard, Pago Fácil, efectivo.</p>
        <p>Instagram: <a href="https://instagram.com/bestore" target="_blank" rel="noreferrer" className="text-blue-500">@bestore</a></p>
      </footer>

      {/* Botón flotante WhatsApp */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center"
        aria-label="WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16.88 7.71a5 5 0 00-7.1 0L8 9.5a5 5 0 007.1 7.1l.78-.78a5 5 0 000-7.1z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.07 4.93a9 9 0 11-12.73 12.73 9 9 0 0112.73-12.73z"
          />
        </svg>
      </a>
    </div>
  );
}
