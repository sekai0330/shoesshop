
export function ShoesList ({ shoes }) {

    return (
        <section>
            <ul className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-5">
                {shoes.map(shoe => (
                    <li key={shoe.id} className="bg-white py-3 px-5 rounded-lg border shadow-lg space-y-1">
                        <img className="w-full h-40 object-contain object-center" src={`/img/${shoe.image}.webp`} alt={`imagen ${shoe.name}`} />
                        <p className="text-slate-700 uppercase font-semibold">{shoe.name}</p>
                        <p className="text-slate-900 font-semibold">{shoe.category} para {shoe.genre}</p>
                        
                        <div className="flex items-center justify-between">
                            <p className="font-bold text-xl text-red-600">${shoe.price}</p>
                            <div className="flex items-center">
                                <svg className="w-4 h-4 text-yellow-400 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                                <p className="ml-1 text-sm font-bold text-gray-900">{shoe.rating}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}