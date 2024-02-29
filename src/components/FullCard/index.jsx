import { Container, Nutrient, ColoredNutrient } from "./styles";

import { calculateWeight } from "../../utils/calculations";
import { replaceKey, verifyWeight } from "../../utils/formatting";

export function FullCard({ food, weight, rank, emphasis}){
    return(
        <Container>
            <p>{`${rank} ${food.nome}`}</p>
                <section>
                {Object.entries(food).map(([key, value]) => {
                    if(key !== 'id' && key !== 'nome')
                    if(key === emphasis){
                        return <ColoredNutrient key={key}>
                            <p>{replaceKey(key)}</p>
                            <p>{calculateWeight(value, weight, verifyWeight(key))}</p>
                            </ColoredNutrient>;
                    }else{
                        return <Nutrient key={key}>
                            <p>{replaceKey(key)}</p>
                            <p>{calculateWeight(value, weight, verifyWeight(key))}</p>
                        </Nutrient>;
                    }
                })}
            </section>
        </Container>
    )
}
