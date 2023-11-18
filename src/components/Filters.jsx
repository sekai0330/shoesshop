import { useId } from "react"
import useFilters from "../hooks/useFilters"

export function Filters () {
    const { filters, setFilters } = useFilters();
    const categoryFilterId = useId()
    const genreFilterId = useId()
    const minPriceFilterId = useId()

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    const handleChangeGenre = (event) => {
        setFilters(prevState => ({
            ...prevState,
            genre: event.target.value
        }))
    }

    const handleChangeMinPrice = (event) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    return (
        <section className="flex flex-col gap-4 px-3 items-center lg:justify-start">
            <h3 className="uppercase font-bold">Filtrar por:</h3>
            <div className="flex flex-col w-full gap-2 border p-2 rounded-lg shadow-lg">
                <label htmlFor={categoryFilterId} className="font-semibold">Calzado:</label>
                <select id={categoryFilterId} className=" rounded px-1 border p-1 text-center" onChange={handleChangeCategory}>
                    <option value="all">Todos</option>
                    <option value="tenis">Tenis</option>
                    <option value="casual">Casual</option>
                    <option value="formal">Formal</option>
                </select>
            </div>
            <div className="flex flex-col w-full gap-2 border p-2 rounded-lg shadow-lg">
                <label htmlFor={genreFilterId} className="font-semibold">Categoria:</label>
                <select id={genreFilterId} className="rounded px-1 border p-1 text-center" onChange={handleChangeGenre}>
                    <option value="all">Todas</option>
                    <option value="chico">Niños</option>
                    <option value="chica">Niñas</option>
                    <option value="mujer">Damas</option>
                    <option value="hombre">Caballeros</option>
                </select>
            </div>
            <div className="flex flex-col w-full gap-2 border p-2 rounded-lg shadow-lg">
                <label htmlFor={minPriceFilterId} className="font-semibold">Precio a partir de:</label>
                <input 
                    type="range"
                    id={minPriceFilterId}
                    min='0'
                    max='100'
                    onChange={handleChangeMinPrice}
                    value={filters.minPrice}
                    className="accent-red-600"
                />
                <span>${filters.minPrice}</span>
            </div>
        </section>
    )
}