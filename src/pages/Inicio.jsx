import React from 'react'

export default function Inicio() {
  return (
    <>
      <div className="banner">
        <img src="importainer.jpg" alt="" />
        <div className="textosBanner">
          <div className="titularBanner">Asesoramiento externo</div>
          <div className="tituloBanner">Servicio de Higiene y Seguridad</div>
          <div className="subtituloBanner">
            Contamos con más de 10 años de experiencia
          </div>
        </div>
      </div>
      <div className="quienesSomos">
        <h2>Quiénes Somos</h2>
        <p>
          En [Nombre de la Consultora], somos una consultora de higiene y
          seguridad dedicada a proporcionar servicios de alta calidad en el
          ámbito de la seguridad laboral y la higiene industrial. Nuestra
          empresa está conformada por dos licenciados altamente capacitados y
          con una amplia experiencia en el sector.
        </p>
      </div>

      <div className="mision">
        <h2>Nuestra Misión</h2>
        <p>
          Nuestra misión es garantizar entornos de trabajo seguros y saludables
          para todos nuestros clientes, implementando prácticas de seguridad
          efectivas y cumpliendo con las normativas vigentes. Creemos que un
          ambiente laboral seguro no solo protege a los empleados, sino que
          también mejora la eficiencia y productividad de las organizaciones.
        </p>
      </div>

      <div className="nuestrosServicios">
        <h2>Nuestros Servicios</h2>
        <p>
          Ofrecemos una amplia gama de servicios para satisfacer las necesidades
          de nuestros diversos clientes, entre los cuales se incluyen:
        </p>
        <ul>
          <li>
            <strong>Mediciones:</strong> Realizamos mediciones precisas y
            detalladas de agentes físicos, químicos y biológicos en el ambiente
            laboral para identificar posibles riesgos y proponer soluciones
            efectivas.
          </li>
          <li>
            <strong>Auditorías:</strong> Llevamos a cabo auditorías de seguridad
            e higiene para evaluar el cumplimiento de las normativas y
            estándares de seguridad, y ayudamos a las empresas a implementar
            mejoras.
          </li>
          <li>
            <strong>Asesoramiento Externo:</strong> Proveemos asesoramiento
            experto a empresas contratistas de la construcción, colegios,
            supermercados, industrias y otros sectores para desarrollar e
            implementar programas de seguridad y salud laboral.
          </li>
        </ul>
      </div>

      <div className="clientes">
        <h2>Nuestros Clientes</h2>
        <p>Trabajamos con una variedad de clientes, incluyendo:</p>
        <ul>
          <li>Industrias</li>
          <li>Empresas Contratistas de la Construcción</li>
          <li>Colegios</li>
          <li>Comercios</li>
        </ul>
      </div>

      <div className="compromiso">
        <h2>Nuestro Compromiso</h2>
        <p>
          En [Nombre de la Consultora], estamos comprometidos con la excelencia
          y la satisfacción del cliente. Nos enorgullece ofrecer servicios
          personalizados que se adaptan a las necesidades únicas de cada
          cliente. Nuestro objetivo es construir relaciones duraderas basadas en
          la confianza y la efectividad de nuestras soluciones.
        </p>
      </div>

      <div className="contactanos">
        <h2>Contáctanos</h2>
        <p>
          Si deseas conocer más sobre nuestros servicios o necesitas
          asesoramiento en higiene y seguridad, no dudes en ponerte en contacto
          con nosotros. Estamos aquí para ayudarte a crear un entorno de trabajo
          seguro y saludable.
        </p>
        <button>Contacto</button>
      </div>
    </>
  );
}
