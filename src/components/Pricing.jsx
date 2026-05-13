

const Pricing = () => {
    return (
        <section className='pricing-section section' id='precios'>

            <div className='container pricing-container'>

                <section className='pricing-header'>

                    <span className='pricing-badge'>
                        Planes
                    </span>

                    <h2>
                        Elegí el plan ideal para vos.
                    </h2>

                    <p>
                        Entrenamiento flexible, acceso completo y acompañamiento profesional para todos los niveles.
                    </p>

                </section>

                <section className='pricing-grid'>

                    <article className='pricing-card'>

                        <div className='pricing-card-content'>

                            <h3>
                                Mensual
                            </h3>

                            <p className='price'>
                                $18.000
                            </p>

                            <p className='pricing-description'>
                                Ideal para comenzar y entrenar a tu ritmo.
                            </p>

                            <ul>
                                <li>Acceso completo al gym</li>
                                <li>Rutinas personalizadas</li>
                                <li>Vestuario y duchas</li>
                            </ul>

                        </div>

                        <a href='#contacto'>
                            Comenzar
                        </a>

                    </article>

                    <article className='pricing-card featured-card'>

                        <div className='featured-label'>
                            Más elegido
                        </div>

                        <div className='pricing-card-content'>

                            <h3>
                                Trimestral
                            </h3>

                            <p className='price'>
                                $45.000
                            </p>

                            <p className='pricing-description'>
                                Mejor equilibrio entre precio y constancia.
                            </p>

                            <ul>
                                <li>Acceso completo al gym</li>
                                <li>Seguimiento profesional</li>
                                <li>Evaluación física mensual</li>
                            </ul>

                        </div>

                        <a href='#contacto'>
                            Elegir plan
                        </a>

                    </article>

                    <article className='pricing-card'>

                        <div className='pricing-card-content'>

                            <h3>
                                Anual
                            </h3>

                            <p className='price'>
                                $160.000
                            </p>

                            <p className='pricing-description'>
                                Pensado para quienes buscan compromiso total.
                            </p>

                            <ul>
                                <li>Acceso ilimitado</li>
                                <li>Asesoramiento premium</li>
                                <li>Beneficios exclusivos</li>
                            </ul>

                        </div>

                        <a href='#contacto'>
                            Unirme
                        </a>

                    </article>

                </section>

            </div>

        </section>
    )
}

export default Pricing