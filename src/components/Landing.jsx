import { useState, useEffect } from "react"

export function Landing () {
    const images = ["/img/shoes1.webp", "/img/shoes2.webp", "/img/shoes3.webp"]; // Agrega las rutas de tus imágenes
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia el intervalo de tiempo (en milisegundos) entre las imágenes

    return () => {
        clearInterval(interval);
    };
    }, [images.length]);

    const handleIndicatorClick = (index) => {
    setCurrentImageIndex(index);
    };

    const whatsappNumber = '75331045';
    const message = `¡Hola! Estoy interesado en el producto Catalogo Digital.`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <section className=" flex items-center bg-gradient-to-br from-white via-red-100 to-white">
            <div className="mx-auto px-3 py-5 lg:py-0 lg:px-0 lg:w-5/6 max-w-screen-xl flex flex-col md:flex-row gap-10 items-center text-center md:text-left justify-between">
                <div className="md:w-2/5 flex items-center md:items-start flex-col">
                    <p className="text-base lg:text-xl font-serif">Toma el camino alto y sube más alto</p>
                    <h1 className="text-3xl lg:text-5xl font-black [text-wrap:balance]">Haz Un Buen Viaje <span className="text-red-600">Con Zapatos</span></h1>
                    <div className="flex">
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-red-600 text-white font-bold py-2 px-10 rounded-full mt-5 flex items-center gap-1">Comprar ahora
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="md:w-3/5 flex justify-center relative">
                    {images.map((image, index) => (
                        <img
                        key={index}
                        className={`w-10/12 ${
                            index === currentImageIndex ? "" : "hidden"
                        }`}
                        src={image}
                        alt=""
                        />
                    ))}
                    <div className="absolute bottom-5 left-0 right-0 flex justify-center">
                        {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleIndicatorClick(index)}
                            className={`w-3 h-3 mx-1 rounded-full ${
                            index === currentImageIndex ? "bg-red-600" : "bg-gray-400"
                            }`}
                        ></button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

