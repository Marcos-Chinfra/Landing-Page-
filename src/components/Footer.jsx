import React from 'react'
import facebook from "@icons/facebook.png"
import instagram from "@icons/instagram.png"
import whatsapp from "@icons/whatsapp.png"
import "../styles/footer.scss"
const Footer = () => {
    return (
        <div className='footer'>
            <div className='email'>
                <h1>Lacetos El Granjerito</h1>
                <span>lacteos@granjerito.com</span>
            </div>
            <div className='redes'>
                <div className='redes-img'>
                    <img src={facebook} alt="fb-icon"  />
                    <img src={instagram} alt="" />
                    <img src={whatsapp} alt="" />
                </div>
                <div className='contact'>
                    <h1>Contact us</h1>
                    <form>
                    <input type="text" />
                    <button type='button'>send</button>
                    </form>
                </div>
            </div>
            
        </div>
    );
}

export default Footer;