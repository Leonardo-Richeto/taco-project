import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";
import { InputWeight } from "../../components/InputWeight";
import { Button } from "../../components/Button";
import { FullCard } from "../../components/FullCard";

import { taco } from '../../assets/taco.js'

import { IoIosArrowDown } from "react-icons/io";

import { editedCalculation } from "../../utils/calculations";

import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export function Ranking(){
  const { weight } = useContext(GlobalContext)

  const [ordenedList, setOrdenedList] = useState([])
  const [emphasis, setEmphasis] = useState('kcal')
  const [currentPage, setCurrentPage] = useState(1)

  function loadNextPage(){
    setCurrentPage(currentPage + 1)
  }

  function handleOrder(key) {
    setEmphasis(key)

    const newTaco = [...taco]

    const ordenedFoods = newTaco.sort((a, b) => {
      const valorA = editedCalculation(a[key])
      const valorB = editedCalculation(b[key])
          
      return valorB - valorA
      })
    setOrdenedList(ordenedFoods)
  }

  useEffect(() => {
    const key = document.querySelector('.select')
    
    handleOrder(key.value)
  },[])

  return(
    <Container>
        <Header />

        <h1>Ranking dos alimentos</h1>

    <Section className="section-select">
      <span>
        <p>Ordenar por</p>
        <select
        name="select"
        className="select"
        defaultValue="kcal"
        onChange={e => handleOrder(e.target.value)}
        >
          <option value="kcal">Valor energético</option>
          <option value="proteina">Proteína</option>
          <option value="carboidrato">Carboidrato</option>
          <option value="gordura">Gordura</option>
          <option value="fibra">Fibras</option>
          <option value="colesterol">Colesterol</option>
          <option value="fosforo">Fósforo</option>
          <option value="ferro">Ferro</option>
          <option value="sodio">Sódio</option>
          <option value="potassio">Potássio</option>
          <option value="calcio">Cálcio</option>
          <option value="vitc">Vitamina C</option>
          <option value="magnesio">Magnésio</option>
          <option value="manganes">Manganês</option>
          <option value="cobre">Cobre</option>
          <option value="zinco">Zinco</option>
          <option value="retinol">Retinol</option>
          <option value="tiamina">Tiamina</option>
          <option value="riboflavina">Riboflavina</option>
          <option value="piridoxina">Piridoxina</option>
          <option value="niacina">Niacina</option>
        </select>
      </span>
      <InputWeight />

    </Section>

    <Section>
        {
            ordenedList.length === 0 ? taco.map((food, index) => {
              if(index < currentPage * 5){
                return <FullCard
                rank={index + 1}
                key={index}
                food={food}
                weight={weight}
                emphasis={emphasis}
                />
              }
            })
            :
            ordenedList.map((food, index) => {
              if (index < currentPage * 5) {
                return <FullCard
                rank={index + 1}
                key={index}
                food={food}
                weight={weight}
                emphasis={emphasis}
                />
              }
            })
        }
        
    </Section>

      <span className="buttons">
        <Button
        onClick={loadNextPage}
        title="Carregar mais..."
        />
        <Button 
        title={<IoIosArrowDown />}
        onClick={loadNextPage}
        />
      </span>
        
    <Footer />

    </Container>
    )
}
