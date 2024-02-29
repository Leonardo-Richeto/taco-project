import { Container } from "./styles";
import { InputText } from "../../components/InputText";
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiFruitBowl } from "react-icons/gi";

export function SignUp(){
    return(
        <Container>

            <Header />

            <Section>

                <div>
                    <FaUser className="user" />
                    <form action="">
                        <InputText 
                        icon={<MdOutlineAccountCircle />}
                        type=""
                        placeholder="Nome..."
                        />

                        <InputText 
                        icon={<TfiEmail />}
                        type="email"
                        placeholder="E-mail..."
                        />

                        <InputText 
                        icon={<RiLockPasswordLine />}
                        type="password"
                        placeholder="Senha..."
                        />
                    
                    <Button 
                    title="Criar conta"
                    />

                    </form>
                </div>

                <div>
                    <h1>Já faz parte?</h1>

                    <div className="info">
                        <p>Membros podem configurar suas dietas.</p>
                        <p>Veja sua alimentação em numeros.</p>
                        <GiFruitBowl />
                    </div>

                <Link to="/login">Login</Link>

                </div>

            </Section>

            <Footer />
            
        </Container>
    )
}