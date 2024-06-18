import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer"
import { Section } from "../../components/Section";
import { DietCard } from "../../components/DietCard";

import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";

import { api } from "../../service/api";

export function MyDiets(){
    const { arrayDiets, setArrayDiets, updatePage } = useContext(GlobalContext)

useEffect(() => {
    async function fetchDiets(){
        try {
            const response = await api.get('/diets')
            const updatedDiet = response.data
            
            setArrayDiets(updatedDiet)
        }catch (error) {
            toast.error("Erro ao carregar dietas!")
            }
        }
        
    fetchDiets()
 },[updatePage])

    return(
        <Container>

            <Header />

            <h1>Minhas Dietas</h1>

                {
                    arrayDiets.length === 0
                    ?
                    <div>
                        <p>Você não possui dietas!</p>
                        <Link to="/">Montar dieta...</Link>
                    </div>
                    :
                    <Section className="section-diets">
                        {
                            arrayDiets.map((diet, index) => (
                                <DietCard
                                key={index}
                                diet={diet}
                                />
                             ))
                        }
                    </Section>
                }
                
            <Footer />
            
        </Container>
    )
}