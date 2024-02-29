import { InputText } from "../../components/InputText";
import { Container } from "./styles";
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiFruitBowl } from "react-icons/gi";



export function SignIn(){
    return(
        <Container>

            <Header />

            <Section>
                <div>
                    <h1>Não é membro?</h1>

                    <div className="info">
                        <p>Crie sua conta e monte dietas completas.</p>
                        <p>Salve e altere suas refeições.</p>
                        <GiFruitBowl />
                    </div>
                <Link className="register" to="/register">Criar Conta</Link>
                </div>

                <div>
                    <FaUser className="user" />
                    <form action="">
                    
                        <InputText
                        className="input"
                        icon={<TfiEmail />}
                        placeholder="E-mail..."
                        />

                        <InputText
                        className="input"
                        icon={<RiLockPasswordLine />}
                        placeholder="Senha..."
                        />
                    
                    <Button
                    className="login-button"
                    title="Login"
                    />

                    </form>

                    <Link className="forgot">Esqueci minha senha!</Link>

                </div>

            </Section>

            <Footer />
            
        </Container>
    )
}