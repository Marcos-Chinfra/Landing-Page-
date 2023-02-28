import React from 'react'
import leche from '@imagenes/leche.jpg'
import queso from '@imagenes/quesos.jpg'
import yogurt from '@imagenes/yogurt.jpg'
import '../styles/aboutus.scss'

const AboutUs = () => {
    return (
        <div className='us_container'>
            <h1> About Us</h1>
            <div>
                <div className='imagen'>
                    <img src={leche}/>
                </div>
                <p>¡Bienvenidos a nuestra historia de tradición y pasión por los lácteos! Somos una pequeña empresa que se dedica a elaborar productos lácteos de alta calidad con la receta artesanal de nuestras abuelas. Nuestros productos están hechos a mano con la leche más fresca y natural de nuestras propias vacas.</p>
            </div>
            <div>
                <p>En cada paso de nuestro proceso de producción, cuidamos cada detalle para garantizar que nuestros productos sean los mejores. Nos enorgullece decir que nuestras técnicas artesanales nos han ganado la fidelidad de nuestros clientes durante muchos años.</p>
                <div className='imagen'>
                <img src={queso} />
                </div>
                
            </div>
            <div>
            <div className='imagen'>
            <img src={yogurt} />
                </div>
                <p>Creemos que la calidad es la clave para el éxito, por lo que nos aseguramos de que cada producto que elaboramos sea perfecto. Desde nuestra deliciosa mantequilla hasta nuestros cremosos quesos, todo está hecho con amor y dedicación.</p>
            </div>
            <p className='parrafo'>
            Nos apasiona nuestro trabajo y queremos compartir esa pasión con ustedes. Si aún no han probado nuestros productos, les invitamos a experimentar el sabor único de nuestros lácteos artesanales. ¡Estamos seguros de que les encantará y no podrán resistirse a volver por más!
            </p>
        </div>
    );
}

export default AboutUs;