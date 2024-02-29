import { Container } from "./styles.js"
import { Header } from "../../components/Header"
import { InputWeight } from "../../components/InputWeight"
import { InputText } from "../../components/InputText"
import { Section } from "../../components/Section"
import { DietCard } from "../../components/DietCard"
import { SelectedFood, InitialFood } from "../../components/SelectedFood"
import { FoodCard } from '../../components/FoodCard'
import { Footer } from "../../components/Footer/index"
import { Subtitle } from "../../components/Subtitle/index.jsx"

import { editedCalculation } from "../../utils/calculations"
import { replaceSpecialChars, handleKeyDown, handleVerifyWeight } from '../../utils/formatting'

import { FiSearch } from 'react-icons/fi'

import { useEffect, useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"

import { taco } from '../../assets/taco.js'

export function Home(){
  const { weight, setWeight } = useContext(GlobalContext)
  const { search, setSearch } = useContext(GlobalContext)
  const { input, setInput } = useContext(GlobalContext)
  const { addedFood, setAddedFood } = useContext(GlobalContext)
  const { total, setTotal } = useContext(GlobalContext)

  function handleChangeWeight(e){
    const result = handleVerifyWeight(e)
    
    setWeight(result)
  }

  useEffect(() => {
    const normalizedInput = replaceSpecialChars(input).toLowerCase()
    const terms = normalizedInput.split(' ')

    const searchInput = document.querySelector('.search-input')

    const filteredFoods = taco.filter(food => {
      const foodName = replaceSpecialChars(food.nome).toLowerCase()

      return terms.every((term) => foodName.includes(term));
    })
      setSearch(normalizedInput !== '' ? filteredFoods : [])

      if(searchInput.value === '') searchInput.value = input
  
  },[input])

  useEffect(() => {
    const totalInfo = addedFood.reduce((accumulator, food) => {
  
      accumulator.totalWeight += food.amount
      accumulator.totalProtein += editedCalculation(food.proteina)
      accumulator.totalCarbohydrate += editedCalculation(food.carboidrato)
      accumulator.totalFat += editedCalculation(food.gordura)
      accumulator.totalFiber += editedCalculation(food.fibra)
      accumulator.totalKcal += editedCalculation(food.kcal)
      
      return accumulator;
    }, {
      totalWeight: 0,
      totalProtein: 0,
      totalCarbohydrate: 0,
      totalFat: 0,
      totalFiber: 0,
      totalKcal: 0,
    });
    setTotal(totalInfo)
  },[addedFood])

  return(
    <Container>

      <Header />

      <h1>CONSULTA NUTRICIONAL</h1>

        <Section>
        {
          <DietCard 
            totalWeight={total.totalWeight.toFixed(1).replace('.', ',')}
            totalProtein={total.totalProtein.toFixed(1).replace('.', ',')}
            totalCarbohydrate={total.totalCarbohydrate.toFixed(1).replace('.', ',')}
            totalFat={total.totalFat.toFixed(1).replace('.', ',')}
            totalFiber={total.totalFiber.toFixed(1).replace('.', ',')}
            totalKcal={total.totalKcal.toFixed(1).replace('.', ',')}
          >

            {
            addedFood.length === 0 ? <InitialFood title="Adicione até 5 alimentos e monte uma refeição completa" /> 
              :
            addedFood.map((food, index) => (
              <SelectedFood 
                key={index}
                food={food}
              />
              ))
            }
          
          </DietCard>
        }

          </Section>

          <Section className="section-inputs">
            <div className="search-div">
              <InputText
              maxLength="25"
              icon={<FiSearch />}
              autoFocus
              type="search"
              className="search-input"
              placeholder="Pesquisar alimento..."
              onChange={e => setInput(e.target.value)}
              />
            </div>

            <InputWeight
            onKeyDown={e => handleKeyDown(e)}
            onChange={e => handleChangeWeight(e)}
            />
            
          </Section>

        {
          search.length === 0 ? <Subtitle />
          :
      <Section className="section-cards">
          {
            search.map(food => (
              <FoodCard
              key={String(food.id)}
              nome={food.nome}
              food={food}
              weight={weight}
              />
          ))
          }
      </Section>
        }

      <Footer>
        <p>Developed by <a href="https://github.com/Leonardo-Richeto" target="blank">Leonardo Richeto</a>.</p>
      </Footer>

    </Container>
  )
}