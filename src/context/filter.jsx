import { createContext, useState } from "react";
import shoesData from "../mocks/shoes.json"

const FiltersContext = createContext();

const FilterProvider = ({ children }) => {
    const [ shoes, setShoes ] = useState(shoesData)
    const [ filters, setFilters ] = useState({
        category: "all",
        genre: "all",
        minPrice: 0
    })

    const filterShoes = (shoes) => {
        return shoes.shoes.filter( shoes => {
            return (
                (
                    filters.category === "all" ||
                    shoes.category === filters.category
                ) &&
                (
                    filters.genre === "all" || 
                    shoes.genre === filters.genre
                ) && 
                (
                    shoes.price >= filters.minPrice
                )
            )
        })
    }

    const filteredShoes = filterShoes(shoes)

    return (
        <FiltersContext.Provider
            value={{
                shoes,
                setShoes,
                filters,
                setFilters,
                filteredShoes
            }}
        >
            { children }
        </FiltersContext.Provider>
    )
}

export { FilterProvider }
export default FiltersContext