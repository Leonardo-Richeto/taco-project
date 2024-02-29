/* eslint-disable react/prop-types */
import { Container } from "./styles";

export function DietCard({ children, totalWeight, totalProtein, totalCarbohydrate, totalFat, totalFiber, totalKcal }){ 
    return(
        <Container>
            <div>
                <p>Peso</p>
                <p>Alimento</p>
                <p>Proteina</p>
                <p>Carboidrato</p>
                <p>Gordura</p>
                <p>Fibra</p>
                <p>Kcal</p>
            </div>

            {children}
           
            <div className="total">
                <p>{totalWeight} g</p>
                <p>Total</p>
                <p>{totalProtein} g</p>
                <p>{totalCarbohydrate} g</p>
                <p>{totalFat} g</p>
                <p>{totalFiber} g</p>
                <p>{totalKcal}</p>
            </div>
            
        </Container>
    )
}