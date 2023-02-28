import React from 'react'
import cow from '@imagenes/cow.jpg'
import '../styles/main.scss'

const Main = () => {
    return (
        <main>
            
            <img src={cow} alt="cow" />
            <div className="texto">
                <h1>Lacteos El Granjerito</h1>
                <p>Tradicion familiar</p>
            </div>
        </main>
    );
}

export default Main;