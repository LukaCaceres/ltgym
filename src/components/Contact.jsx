

const Contact = () => {
    return (
        <section className='contact-section section' id='contacto'>

            <div className='container contact-container'>

                <section className='contact-text'>

                    <span className='contact-badge'>
                        Contacto
                    </span>

                    <h2>
                        Comenzá hoy mismo.
                    </h2>

                    <p>
                        Estamos listos para ayudarte a encontrar el plan ideal y acompañarte en cada etapa de tu entrenamiento.
                    </p>

                </section>

                <section className='contact-content'>

                    <article className='contact-card'>

                        <h3>
                            Hablemos
                        </h3>

                        <p>
                            Contactanos directamente por WhatsApp o redes sociales para recibir información sobre planes, horarios y promociones.
                        </p>

                        <div className='contact-links'>

                            <a
                                href='https://wa.me/5493815555555?text=Hola%20quiero%20informacion%20sobre%20los%20planes'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                WhatsApp
                            </a>

                            <a
                                href='https://instagram.com/ltgym'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Instagram
                            </a>

                        </div>

                    </article>

                    <article className='contact-info'>

                        <div className='info-item'>
                            <span>
                                Dirección
                            </span>

                            <p>
                                San Miguel de Tucumán, Tucumán
                            </p>
                        </div>

                        <div className='info-item'>
                            <span>
                                Horarios
                            </span>

                            <p>
                                Lunes a Sábado · 07:00 - 22:00
                            </p>
                        </div>

                        <div className='info-item'>
                            <span>
                                Email
                            </span>

                            <p>
                                contacto@ltgym.com
                            </p>
                        </div>

                    </article>

                </section>

            </div>

        </section>
    )
}

export default Contact