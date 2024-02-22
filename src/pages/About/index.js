
import "./about.css"
import Hobbies from "../../assets/hobbies.png"

export default function About() {
    return (
        <div>
            <section className="content-about">
                <div className="title">
                    <h2>Sobre <span style={{ color: "#FF8D00" }}>mim</span></h2>
                    <div className="row"></div>
                </div>
                <div className="about">
                    <img alt="Imagens com hobbies que executo" src={Hobbies}></img>
                    <article>
                        Olá! Sou Alef, um entusiasta da tecnologia desde cedo. Formado em Sistemas de Informação, tenho paixão pela programação e busco constantemente aprender e evoluir na área.

                        Atualmente, trabalho na PicPay e também atuo como freelancer, onde tenho a oportunidade de aplicar meu conhecimento em diversos projetos desafiadores.

                        Além da tecnologia, meus hobbies incluem jogar FIFA e tocar instrumentos como flauta e violão. Estou sempre aberto a novos desafios e oportunidades para contribuir com soluções inovadoras.

                        Vamos conectar e explorar juntos o mundo da tecnologia!
                    </article>
                </div>

            </section>
        </div>
    );
}