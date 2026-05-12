import '../styles/hero.css'

const Hero = () => {
    return (
        <section className='hero-container' id='inicio'>

            <div className='container hero-content'>

                <section className='hero-text'>

                    <span className='hero-badge'>
                        Entrenamiento de alto rendimiento
                    </span>

                    <h1>
                        Entrena más fuerte.
                        <br />
                        Supera tus límites.
                    </h1>

                    <p>
                        Planes personalizados, equipamiento profesional y un ambiente diseñado para ayudarte a alcanzar tu mejor versión.
                    </p>

                    <div className='hero-buttons'>
                        <a href='#precios' className='primary-btn'>
                            Ver planes
                        </a>

                        <a href='#nosotros' className='secondary-btn'>
                            Conocer más
                        </a>
                    </div>

                </section>

                <section className='hero-image'>
                    <img
                        src='https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop'
                        alt='Gym training'
                    />
                </section>

            </div>

        </section>
    )
}

export default Hero