import { createContext, useState } from "react";
import { taco } from "../assets/taco";
import { editDietFood } from "../utils/formatting";
import { MdDeleteForever } from "react-icons/md"

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
    const [colorTheme, setColorTheme] = useState('light')
    const [weight, setWeight] = useState(100)
    const [search, setSearch] = useState([])
    const [input, setInput] = useState('')
    const [addedFood, setAddedFood] = useState([])
    const [total, setTotal] = useState({
        totalWeight: 0,
        totalProtein: 0,
        totalCarbohydrate: 0,
        totalFat: 0,
        totalFiber: 0,
        totalKcal: 0,
      })

    function handleAddFood(e){
        if(e.type === 'button'){
            e.innerText = 'Adicionado'
        }
        
        
        const selectedFood = taco.find(food => {
          return food.id === e.id
        })
        const isFoodAlreadyAdded = addedFood.some(item => item.id === selectedFood.id)
    
        if (!isFoodAlreadyAdded && addedFood.length < 5) {
          setAddedFood((prevFood) => [...prevFood, editDietFood(selectedFood, weight)])
        }
      }

    return(
        <GlobalContext.Provider value={{
            colorTheme,
            setColorTheme,
            weight,
            setWeight,
            search,
            setSearch,
            input,
            setInput,
            addedFood,
            setAddedFood,
            handleAddFood,
            total,
            setTotal
            }}
            >

            {children}
            
        </GlobalContext.Provider>
    )
}