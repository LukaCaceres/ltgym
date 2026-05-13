import '../styles/about.css'

const About = () => {
    return (
        <section className='about-section section' id='nosotros'>

            <div className='container about-container'>

                <section className='about-image'>

                    <img
                        src='https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop'
                        alt='People training at the gym'
                    />

                </section>

                <section className='about-content'>

                    <span className='about-badge'>
                        Nosotros
                    </span>

                    <h2>
                        Un espacio diseñado para progresar.
                    </h2>

                    <p>
                        En LTGym creemos que entrenar no debería sentirse intimidante. Creamos un ambiente donde cualquier persona pueda mejorar su rendimiento, desarrollar disciplina y disfrutar el proceso.
                    </p>

                    <p>
                        Nuestro enfoque combina equipamiento moderno, seguimiento profesional y una comunidad que impulsa el crecimiento constante.
                    </p>

                    <div className='about-stats'>

                        <article className='about-stat'>
                            <span>
                                +500
                            </span>

                            <p>
                                Miembros activos
                            </p>
                        </article>

                        <article className='about-stat'>
                            <span className='años-stat'>
                                5 años
                            </span>

                            <p>
                                Entrenando en Tucumán
                            </p>
                        </article>

                        <article className='about-stat'>
                            <span>
                                +20
                            </span>

                            <p>
                                Planes personalizados por semana
                            </p>
                        </article>

                    </div>

                </section>

            </div>

        </section>
    )
}

export default About