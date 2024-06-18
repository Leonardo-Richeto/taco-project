import { Container } from "./styles";
import { Header } from "../../components/Header";
import { InputWeight } from "../../components/InputWeight";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";
import { Subtitle } from "../../components/Subtitle";
import { FullCard } from "../../components/FullCard";

import { taco } from '../../assets/taco.js'

import { FaArrowLeftLong } from "react-icons/fa6";

import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export function Details(){
    const { weight } = useContext(GlobalContext)
    
    const { id } = useParams()

    function showDetails(id){
        const food = taco.find(food => {
            return food.id === id
          })
          return food
    }

    return(
        <Container>

            <Header />

            <h1>Detalhes</h1>

            <Section className="inputs">

                <Link to={"/"}>
                    <FaArrowLeftLong /> Voltar
                </Link>

                <InputWeight />

            </Section>

            <Section>
                <FullCard 
                rank=''
                food={showDetails(id)}
                weight={weight}
                />

                <Subtitle />
            </Section>

        <Footer />
        </Container>
    )
}