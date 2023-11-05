const enlaces = [
    {
        id:1,
        name: "Tienda",
        link: "tienda"
    },
    {
        id:2,
        name: "Nosotros",
        link: "nosotros"
    },
    {
        id:3,
        name: "Contacto",
        link: "contacto"
    },
    {
        id:3,
        name: "Nuevo",
        link: "nuevo"
    }
]

export function Footer () {
    return (
        <footer className="bg-red-950">
            <section className="max-w-screen-xl mx-auto md:w-5/6 px-3 md:px-0 flex flex-col md:text-left text-center md:flex-row items-center md:items-start md:justify-between py-10 space-y-5 md:space-y-0">
                <div className="flex flex-col w-1/3">
                    <a href='#inicio' className="flex gap-1 items-center pl-0">
                        <img src="/logo.svg" width={35} height={55} alt="Logo EdwinSantos" />
                        <p className='text-white text-lg font-black uppercase'>Shoes<span className="text-xs capitalize">Shop</span></p>
                    </a>
                    <p className="text-white [text-wrap:balance] mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, aliquam!</p>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-white text-lg font-bold uppercase">Navegacion</h3>
                    <ul className="md:flex flex-col gap-2 text-white mt-2">
                        {enlaces.map(links => (
                            <li key={links.id}>
                                <a href={links.link} className="hover:text-red-200">
                                    {links.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-white text-lg font-bold uppercase">contactos</h3>
                    <div className="mt-2">
                        <p className="text-white font-bold">Correo Electronico:</p>
                        <p className="text-white text-sm">edwin98santos@gmail.com</p>
                    </div>
                </div>
            </section>
        </footer>
    )
}