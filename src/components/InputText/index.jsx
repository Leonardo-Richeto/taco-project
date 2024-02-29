/* eslint-disable react/prop-types */
import { Container } from "./styles";


export function InputText({ icon: Icon, children, ...rest}){
    return(
        <Container>
            {Icon}
            <input
            {...rest}
            />
            {children}
        </Container>
    )
}
