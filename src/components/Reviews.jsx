import '../styles/reviews.css'

const Reviews = () => {
    return (
        <section className='reviews-section section' id='reviews'>

            <div className='container reviews-container'>

                <section className='reviews-header'>

                    <span className='reviews-badge'>
                        Reviews
                    </span>

                    <h2>
                        Esfuerzos reales.
                        <br />
                        Resultados reales.
                    </h2>

                    <p>
                        Miembros que encontraron constancia, progreso y un mejor ambiente para entrenar todos los días.
                    </p>

                </section>

                <section className='reviews-grid'>

                    <article className='review-card'>

                        <p className='review-text'>
                            “El ambiente es excelente y los entrenadores siempre están atentos. Después de varios meses entrenando acá, noté muchísimos cambios.”
                        </p>

                        <div className='review-user'>
                            <span className='review-name'>
                                Lucas Gómez
                            </span>

                            <span className='review-role'>
                                Miembro hace 1 año
                            </span>
                        </div>

                    </article>

                    <article className='review-card featured-review'>

                        <p className='review-text'>
                            “Probé varios gimnasios en Tucumán y este fue el único donde realmente me sentí cómoda entrenando. Muy buen equipamiento y horarios.”
                        </p>

                        <div className='review-user'>
                            <span className='review-name'>
                                Martina Ruiz
                            </span>

                            <span className='review-role'>
                                Plan trimestral
                            </span>
                        </div>

                    </article>

                    <article className='review-card'>

                        <p className='review-text'>
                            “Las rutinas están muy bien organizadas y el seguimiento hace mucha diferencia. Súper recomendado para empezar.”
                        </p>

                        <div className='review-user'>
                            <span className='review-name'>
                                Agustín Díaz
                            </span>

                            <span className='review-role'>
                                Miembro hace 6 meses
                            </span>
                        </div>

                    </article>

                </section>

            </div>

        </section>
    )
}

export default Reviews