


import logotipo from '../../assets/logo.svg'
import './footer.css'
import { Phone, Mail, GitHub, Instagram, Linkedin } from "react-feather";
import {FaWhatsapp} from 'react-icons/fa6'




export default function Footer() {
    return (
        <div>

            <footer>

                <div className="row">

                </div>

                <div className='content-footer'>
                    <img alt='Logotipo escrito Alef Daniel' src={logotipo} />
                    
                    <div className='content-contact'>
                        <h2>Contato</h2>
                          <i><Phone size={20}/></i>
                          <span>(11) 9.8633-7043</span>
                        
                          <i><Mail size={20}/></i>
                          <span>alefsa_daniel@hotmail.com</span>
                          
                    </div>
                    
                    <div className='content-social'>
                        <h2>Redes sociais</h2>
                        <div className='icons'>
                            <a target='_blank' href='https://github.com/Alef-Daniel'><GitHub size={20}/></a>
                            <a target='_blank' href='https://www.instagram.com/aguiar_alef?igsh=MTRmdzRxOTM1Y3lmcg%3D%3D&utm_source=qr'><Instagram size={20}/></a>
                            <a target='_blank' href='https://wa.me/5511986337043'><FaWhatsapp size={20}/></a>
                            <a target='_blank' href='https://www.linkedin.com/in/alef-aguiar/'><Linkedin size={20}/></a>
                        </div>
                    </div>
                </div>
                <p>&copy; 2024 - Todos os direitos reservados</p>
            </footer>
        </div>
    );
}