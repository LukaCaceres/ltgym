import React from 'react'
import '../styles/footer.css'

const Footer = () => {
    return (
        <footer className='footer-container'>

            <section className='footer-column social-column'>
                <h3>Redes</h3>

                <ul>
                    <li>
                        <a
                            href="https://wa.me/5493810000000"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            WhatsApp
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Instagram
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer">
                            Facebook
                        </a>
                    </li>
                </ul>
            </section>

            <section className='footer-column navigation-column'>
                <h3>Navegación</h3>

                <ul>
                    <li>
                        <a href="#inicio">
                            Inicio
                        </a>
                    </li>

                    <li>
                        <a href="#precios">
                            Precios
                        </a>
                    </li>

                    <li>
                        <a href="#reviews">
                            Reviews
                        </a>
                    </li>

                    <li>
                        <a href="#nosotros">
                            Nosotros
                        </a>
                    </li>
                    <li>
                        <a href="#contacto">
                            Contacto
                        </a>
                    </li>
                </ul>
            </section>

            <section className='footer-column logo-column'>
                <h3>LTGym</h3>

                <p>
                    LTGym 2026. Todos los derechos reservados.
                </p>
            </section>

        </footer>
    )
}

export default Footer