import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export function About(){
    return(
        <Container>

            <Header />

            <div className="about">

                <h1>O QUE É A TABELA TACO</h1>

                <p>Todos os dados disponibilizados aqui foram extraidos da tabela TACO e dos sites oficiais dos alimentos.</p>

                <p>A tabela TACO (Tabela Brasileira de Composição de Alimentos), é fruto de um estudo feito pela UNICAMP - Universidade Estadual de Campinas, com o objetivo de identificar o perfil nutricional dos alimentos com sua última versão em 2011.</p>

                <p>A informação nutricional dos alimentos são pilares básicos para a educação nutricional, por meio delas, profissionais de saúde e nutrição conseguem criar guias alimentares com foco em saúde e/ou performance.</p>

                <p><strong>Com o objetivo de disponibilizar estes dados de maneira fácil e dinâmica, criei este projeto para pessoas que, assim como eu, buscam conhecimento gratuito e não tem fácil acesso a um profissional da nutrição.</strong></p>

                <p className="warning"><strong>Ressalto que uma uma alimentação calculada por um profissional sempre será o melhor caminho!</strong></p>

                <p><strong className="warning red">Todas as informações foram analisadas de alimentos crús ou preparados de forma específica, pois o preparo influencia totalmente no resultado final</strong>, <a target="blank" href="https://www.cfn.org.br/wp-content/uploads/2017/03/taco_4_edicao_ampliada_e_revisada.pdf">clique aqui</a> para acessar o documento original da tabela TACO ou visite o site oficial do fabricante do alimento.</p>

                <p>Para ver como este projeto foi feito, acesse meu <a target="blank" href="https://github.com/Leonardo-Richeto">Github</a>.</p>
            </div>

            <Footer />
        </Container>
    )
}