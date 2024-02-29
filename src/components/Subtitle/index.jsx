import { Container } from "./styles";
import { Link } from "react-router-dom";

export function Subtitle(){
    return(
        <Container>
            <h3>Descrição</h3>
                <p>As informações apresentadas foram extraidas dos sites oficiais dos alimentos e da Tabela Brasileira de Composição de Alimentos – TACO – NEPA/UNICAMP</p>
                <p>Para saber mais <Link to="/about">Clique aqui</Link>, ou acesse a aba Sobre</p>
            <section>
                <div>
                    <p><strong>g:</strong> grama</p>
                </div>
                <div>
                    <p><strong>mg:</strong> miligrama</p>
                </div>
                <div>
                    <p><strong>mcg:</strong> micrograma</p>
                </div>
                <div>
                    <p><strong>kcal:</strong> kilocaloria</p>
                </div>
                <div>
                    <p><strong>kJ:</strong> kilojoule</p>
                </div>
                <div>
                    <p><strong>NA:</strong> não aplicável</p>
                </div>
                <div>
                    <p><strong>Tr:</strong> traços</p>
                </div>
            </section>
        </Container>
    )
}