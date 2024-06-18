import { Container } from "./styles";

export function Total({ total }){
    return(
        <Container>
            <p>{total.totalWeight.toFixed(0)}</p>
            <p title="Total da dieta">Total da dieta</p>
            <p>{total.totalProtein.toFixed(1)}</p>
            <p>{total.totalCarbohydrate.toFixed(1)}</p>
            <p>{total.totalFat.toFixed(1)}</p>
            <p>{total.totalFiber.toFixed(1)}</p>
            <p>{total.totalKcal.toFixed(1)}</p>
        </Container>
    )
}