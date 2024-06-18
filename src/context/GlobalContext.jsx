import { createContext, useCallback, useState } from "react";

export const GlobalContext = createContext()

export function GlobalProvider({ children }){
    const [weight, setWeight] = useState(100)
    const [search, setSearch] = useState([])
    const [input, setInput] = useState('')
    const [mealFocus, setMealFocus] = useState(0)
    const [arrayDiets, setArrayDiets] = useState([])
    const [diet, setDiet] = useState({
      diet_id: null,
      dietName: "Nome da dieta",
      meals: [{
        mealName: "Refeição 1",
        foods: []
      }]
    })
    const [updatePage, setUpdatePage] = useState(true)

    return(
        <GlobalContext.Provider value={{
            weight,
            setWeight,
            search,
            setSearch,
            input,
            setInput,
            mealFocus,
            setMealFocus,
            arrayDiets,
            setArrayDiets,
            diet,
            setDiet,
            updatePage,
            setUpdatePage
            }}
            >

            { children }
            
        </GlobalContext.Provider>
    )
}