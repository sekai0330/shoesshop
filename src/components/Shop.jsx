import { Filters } from "./Filters";
import { ShoesList } from "./ShoesList";
import useFilters from "../hooks/useFilters";

export function Shop () {
    const { filteredShoes } = useFilters()

    return (
        <section id="comprar" className="bg-slate-100">
            <div className="mx-auto px-3 lg:px-0 lg:w-5/6 max-w-screen-xl py-20">
                <h2 className="text-center font-bold uppercase text-4xl pb-10">Comprar Ahora</h2>
                <div className="flex flex-col md:flex-row items-start gap-3 md:gap-3 lg:gap-5">
                    <div className="w-full md:w-1/4 bg-white py-5 rounded-lg border">
                        <Filters />
                    </div>
                    <div className="w-full md:w-3/4">
                        <ShoesList shoes = {filteredShoes} />
                    </div>
                </div>
            </div>
        </section>
    )
}