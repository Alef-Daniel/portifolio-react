
import './home.css';
import icon from '../../assets/icon-img.jpeg'
import Button from '../../components/Button';


export default function Home() {
    return (
        <div>
            <main>
                <div className='content-home-1'>
                    <span>Olá, eu sou</span>
                    <h1>Alef Sousa Aguiar Daniel</h1>
                    <span>Desenvolvedor Fullstack</span>
                    <Button text="Vamos conversar"/>
                </div>
                <img className='icon'alt='Imagem de perfil' src={icon}>
                </img>

            </main>

        </div>
    )
}