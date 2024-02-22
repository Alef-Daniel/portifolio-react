import './header.css';
import logotipo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import Burguer from '../Burguer';


export default function Header(){
    return(
       
            <header>
                <div className='logo'>
                    <img alt='Logotipo escrito Alef Daniel' src={logotipo}/>
                </div>
                <nav>
                    <ul>
                        <Link to={'/'}><li>Inicio</li></Link>
                        <Link to={'/about'}><li>Sobre</li></Link>
                        <Link><li>Projetos</li></Link>
                        <Link><li>Contatos</li></Link>
                    </ul>
                </nav>
                <Burguer/>
            </header>
    )
}