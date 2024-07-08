import React from 'react'
import "../styles/Footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="padreColumnasFooter">
          <div className="columnaFooter">
            <div className="logoFooter">Importainer</div>
            <div className="d-flex justify-content-start cajaRedesFooter">
              <a
                className="redesFooter"
                href="https://wa.me/5491149141781?text="
                target="_blank"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a
                className="redesFooter"
                href="https://www.facebook.com/rosana.araujo.581?mibextid=ZbWKwL"
                target="_blank"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="redesFooter"
                href="https://www.instagram.com/rosana_araujo07?igsh=MTM0aXhycDJ3ZGFyZw=="
                target="_blank"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="redesFooter"
                href="https://www.linkedin.com/in/rosana-araujo-ab3651a3/"
                target="_blank"
              ></a>
            </div>
          </div>

          <div className="columnaFooter">
            <p className="tituloFooter">CONTACTO</p>
            <p>Lunes a Sábados de 09:00 a 20:00 hs</p>
            <p>
              <i className="faMap-marker-alt"></i> Ing. Adolfo Sourdeaux
            </p>
            <p>
              <i className="fa fa-phone-alt"></i> +54 11 4914 1781
            </p>
            <p>
              <a href="tel:+5491149141781"></a>
              <i className="fa fa-envelope"></i> MAIL ROSI
            </p>
            <p>
              <a href="/contacto">
                <i className="fa-solid fa-paper-plane"></i> Envia un mensaje
              </a>
            </p>
          </div>

          <div class="columnaFooter">
            <p class="tituloFooter">SECCIONES</p>
            <p>
              <a href="/">
                <i className="fa fa-angle-right mr-2"></i> Inicio
              </a>
            </p>
            <p>
              <a href="/paquetes">
                <i className="fa fa-angle-right mr-2"></i> Todos los paquetes
              </a>
            </p>
            <p>
              <a href="/paquetes/micros">
                <i className="fa fa-angle-right mr-2"></i> Paquetes en Micro
              </a>
            </p>
            <p>
              <a href="/paquetes/aereos">
                <i className="fa fa-angle-right mr-2"></i> Paquetes Aereos
              </a>
            </p>
            <p>
              <a href="/preguntas">
                <i className="fa fa-angle-right mr-2"></i> Preguntas frecuentes
              </a>
            </p>
            <p>
              <a href="/contacto">
                <i className="fa fa-angle-right mr-2"></i> Contacto
              </a>
            </p>
          </div>
        </div>

        <div className="cajaDesarrollador">
          <div>
            © <span>Rosi Viajes</span>. Todos los derechos reservados. Diseñado
            por{" "}
            <a href="https://elias-zurita.github.io/" target="_blank">
              <strong>Elias Zurita</strong>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
