import { component$, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  // The interactive layer (intro, carousel, demos, scroll rail, canvas line) is the
  // original vanilla script, loaded as a separate chunk once the document is ready.
  // The markup below is server-rendered, so the page reads correctly before it runs.
  // It only touches the DOM and has no Qwik handlers, so running it eagerly is intended.
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(
    async () => {
      const { initSite } = await import("../lib/site");
      initSite();
    },
    { strategy: "document-ready" },
  );

  return (
    <>
      <canvas id="cv"></canvas>
      <div class="glow"></div>
      <div id="amb"></div>
      <div class="w" role="main">
        <svg width="0" height="0" style="position:absolute" aria-hidden="true">
          <defs>
            <symbol id="i-web" viewBox="0 0 24 24">
              <rect x="2.5" y="4" width="19" height="16" rx="2.2" />
              <path d="M2.5 9h19M6 6.5h.01M8.5 6.5h.01" />
            </symbol>
            <symbol id="i-mob" viewBox="0 0 24 24">
              <rect x="7" y="2.5" width="10" height="19" rx="2.2" />
              <path d="M10.5 18.5h3" />
            </symbol>
            <symbol id="i-db" viewBox="0 0 24 24">
              <ellipse cx="12" cy="5.5" rx="7" ry="2.8" />
              <path d="M5 5.5v13c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8v-13M5 12c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8" />
            </symbol>
            <symbol id="i-doc" viewBox="0 0 24 24">
              <path d="M6 2.5h8l4 4v15H6z" />
              <path d="M14 2.5v4h4M9 12h6M9 16h6" />
            </symbol>
            <symbol id="i-srv" viewBox="0 0 24 24">
              <rect x="3" y="3.5" width="18" height="7" rx="1.8" />
              <rect x="3" y="13.5" width="18" height="7" rx="1.8" />
              <path d="M7 7h.01M7 17h.01M11 7h6M11 17h6" />
            </symbol>
            <symbol id="i-cache" viewBox="0 0 24 24">
              <path d="M13 2.5L5 13.5h6l-1 8 8-11h-6z" />
            </symbol>
            <symbol id="i-q" viewBox="0 0 24 24">
              <rect x="2.5" y="8" width="5" height="8" rx="1" />
              <rect x="9.5" y="8" width="5" height="8" rx="1" />
              <rect x="16.5" y="8" width="5" height="8" rx="1" />
            </symbol>
            <symbol id="i-lock" viewBox="0 0 24 24">
              <rect x="5" y="10.5" width="14" height="10" rx="2" />
              <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
            </symbol>
            <symbol id="i-box" viewBox="0 0 24 24">
              <path d="M12 2.5l8.5 4.5v10L12 21.5 3.5 17V7z" />
              <path d="M3.5 7L12 11.5 20.5 7M12 11.5v10" />
            </symbol>
            <symbol id="i-cloud" viewBox="0 0 24 24">
              <path d="M7 18.5a4.5 4.5 0 1 1 1.2-8.8 5.5 5.5 0 0 1 10.6 1.6A3.6 3.6 0 0 1 18 18.5z" />
            </symbol>
            <symbol id="i-gw" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2.5v5M12 16.5v5M2.5 12h5M16.5 12h5" />
            </symbol>
            <symbol id="i-git" viewBox="0 0 24 24">
              <circle cx="6" cy="5" r="2" />
              <circle cx="6" cy="19" r="2" />
              <circle cx="18" cy="9" r="2" />
              <path d="M6 7v10M18 11c0 4-6 3-12 6" />
            </symbol>
            <symbol id="i-test" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9" />
              <path d="M8 12.5l3 3 5-6" />
            </symbol>
            <symbol id="i-tag" viewBox="0 0 24 24">
              <path d="M3 12V4h8l9 9-8 8z" />
              <circle cx="7.5" cy="8.5" r="1" />
            </symbol>
            <symbol id="i-eye" viewBox="0 0 24 24">
              <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
              <circle cx="12" cy="12" r="3" />
            </symbol>
          </defs>
        </svg>

        <header class="s hero" data-n="Inicio">
          <div class="hd">
            <span class="pl">juani@architect ~ $</span>
            <i class="cur h" id="c"></i>
            <span id="t1">init --portfolio</span>
          </div>
          <div class="hm">
            <div class="hc">
              <h1 id="h1">
                Diseño sistemas que escalan, resisten y se explican solos.
              </h1>
              <p id="sub">
                Juani Planes, arquitecto de software e ingeniero backend. Hoy en
                Innen, desde Buenos Aires.
              </p>
            </div>
            <div class="rv hb2">
              <div class="fx">
                <div>
                  <b>+4 años</b>
                  <span>diseñando arquitecturas backend</span>
                </div>
                <div>
                  <b>Clean y DDD</b>
                  <span>lógica de negocio aislada de la infraestructura</span>
                </div>
                <div>
                  <b>Repetible</b>
                  <span>entornos en Docker y pipelines automatizados</span>
                </div>
                <div>
                  <b>IA como herramienta</b>
                  <span>para explorar, documentar y estimar riesgos</span>
                </div>
              </div>
              <div class="cta">
                <a class="bt p" href="#pienso">
                  Ver cómo pienso un sistema
                </a>
                <a class="bt" href="#hice">
                  Probar las demos
                </a>
              </div>
            </div>
          </div>
        </header>

        <section class="s" id="pienso" data-n="Cómo pienso un sistema">
          <h2 class="rv">Cómo pienso un sistema</h2>
          <div class="cols">
            <button class="pc rv" style="--i:1" aria-pressed="true">
              <b>Dominio antes que framework</b>
              <span>
                Empiezo por el modelo de negocio, nunca por la librería de moda.
                Con DDD y arquitectura hexagonal el núcleo queda desacoplado de
                la base de datos y del transporte, y puede evolucionar sin
                reescrituras.
              </span>
              <em>En En Conjunto: APIs en TypeScript guiadas por DDD.</em>
            </button>
            <button class="pc rv" style="--i:2" aria-pressed="false">
              <b>Límites claros y seguridad</b>
              <span>
                Dibujo los límites antes de escribir código: qué componentes
                conversan entre sí y cuáles jamás deben tocarse. Aplico control
                de acceso estricto, tokenización e inspección defensiva en cada
                API.
              </span>
              <em>
                Cada servicio es dueño de sus datos; el resto pasa por su API.
              </em>
            </button>
            <button class="pc rv" style="--i:3" aria-pressed="false">
              <b>Entornos predecibles</b>
              <span>
                Priorizo lo simple y reproducible: infraestructura en
                contenedores, convenciones de código sólidas y releases
                semánticos automatizados, para que cualquier equipo despliegue
                con tranquilidad.
              </span>
              <em>
                En Innen: entornos reproducibles en Docker. En En Conjunto:
                CI/CD y semantic-release.
              </em>
            </button>
          </div>
          <div
            class="stage rv"
            style="--i:2"
            data-p="0"
            tabIndex={0}
            role="region"
            aria-roledescription="carrusel"
            aria-label="Diapositivas de cada principio. Flechas izquierda y derecha para avanzar"
          >
            <div class="pg" aria-hidden="true">
              <i></i>
            </div>
            <div class="vp"></div>
            <p class="hint">Deslizá el diagrama para ver todo</p>
            <div class="caps" aria-live="polite"></div>
            <div class="ctl">
              <button class="pv" aria-label="Paso anterior">
                <svg class="ic" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M15 5l-7 7 7 7" />
                </svg>
              </button>
              <div class="dots"></div>
              <button class="nx" aria-label="Paso siguiente">
                <svg class="ic" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <span class="cn"></span>
              <span class="nxt"></span>
              <button class="pl2" aria-pressed="false">
                Reproducir
              </button>
            </div>
          </div>
          <div class="eco rv" style="--i:3">
            <h3>Ecosistema técnico y herramientas</h3>
            <div>
              <div>
                <h4>Arquitectura</h4>
                <span class="cp">Domain-Driven Design (DDD)</span>
                <span class="cp">Hexagonal / Ports &amp; Adapters</span>
                <span class="cp">Vertical Slicing</span>
                <span class="cp">Event-Driven Basics</span>
                <span class="cp">API Gateways &amp; Auth</span>
                <span class="cp">Patrones de diseño</span>
              </div>
              <div>
                <h4>Backend y datos</h4>
                <span class="cp">TypeScript &amp; Node.js</span>
                <span class="cp">NestJS / Express</span>
                <span class="cp">Go</span>
                <span class="cp">Java + Spring Boot</span>
                <span class="cp">PostgreSQL &amp; MySQL</span>
                <span class="cp">MongoDB</span>
              </div>
              <div>
                <h4>Nube y entrega</h4>
                <span class="cp">AWS (RDS, EC2, ECS)</span>
                <span class="cp">AWS Lambda &amp; IAM</span>
                <span class="cp">CloudWatch</span>
                <span class="cp">Docker &amp; Compose</span>
                <span class="cp">GitHub Actions</span>
                <span class="cp">GitLab CI/CD</span>
                <span class="cp">semantic-release</span>
              </div>
              <div>
                <h4>Calidad y flujo</h4>
                <span class="cp">ESLint &amp; Prettier</span>
                <span class="cp">Husky + Lint-staged</span>
                <span class="cp">Conventional Commits</span>
                <span class="cp">Tailscale VPN</span>
                <span class="cp">AI Workflows</span>
              </div>
            </div>
          </div>
          <a class="br rv" style="--i:5" href="#trayectoria">
            Ese criterio se formó trabajando. Dónde lo apliqué.
          </a>
        </section>

        <section class="s" id="trayectoria" data-n="Dónde lo apliqué">
          <h2 class="rv">Dónde lo apliqué</h2>
          <div class="tr">
            <div class="tl">
              <div class="it rv" style="--i:1">
                <b>
                  Innen<em class="bd">Actual</em>
                </b>
                <span>Arquitecto de software, ene 2024 a hoy, remoto</span>
                <p>
                  Decido la arquitectura y el backend de varias iniciativas
                  internas y de clientes: estructura de servicios, diseño de
                  APIs y modelado de datos. Sumé entornos en contenedores y
                  despliegues repetibles para reducir diferencias entre
                  entornos.
                </p>
              </div>
              <div class="it rv" style="--i:2">
                <b>En Conjunto</b>
                <span>Lead Backend Developer, 2022 a 2023</span>
                <p>
                  Lideré el backend de la plataforma y armé la base técnica del
                  área de IT: GitHub, convenciones y CI/CD. APIs en TypeScript
                  con enfoque DDD, y releases automáticos con semantic-release.
                </p>
              </div>
              <div class="it rv" style="--i:3">
                <b>SoyHenry</b>
                <span>Instructor de JavaScript, ad honorem, 2021</span>
                <p>
                  Mentoría a estudiantes en fundamentos de JavaScript,
                  resolución de problemas y conceptos de backend.
                </p>
              </div>
              <div class="it rv" style="--i:4">
                <b>Técnico y armador de computadoras</b>
                <span>Autodidacta, 2010 a hoy</span>
                <p>
                  Sistemas operativos, BIOS, diagnóstico de hardware y soporte
                  remoto.
                </p>
              </div>
            </div>
            <div class="ed">
              <div class="rv" style="--i:2">
                <h3>
                  <svg class="ic" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M2 9l10-5 10 5-10 5z" />
                    <path d="M6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5" />
                    <path d="M22 9v6" />
                  </svg>
                  Formaciones
                </h3>
                <ul class="bl">
                  <li>
                    <b>Técnico electrónico</b> en la E.E.S.T. N°1 de Pilar, 2015
                    a 2021
                  </li>
                  <li>
                    <b>Bootcamp Full Stack MERN</b> en SoyHenry, 2021
                  </li>
                </ul>
              </div>
              <div class="rv" style="--i:3">
                <h3>
                  <svg class="ic" viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="9" r="6" />
                    <path d="M8.5 13.5L7 21l5-3 5 3-1.5-7.5" />
                  </svg>
                  Certificaciones
                </h3>
                <ul class="bl">
                  <li>
                    <b>
                      <a
                        class="lk"
                        href="https://app.aluracursos.com/user/juaniplanes/fullCertificate/a0d65added7ec299eaa2af45434bb28d"
                        target="_blank"
                        rel="noopener"
                      >
                        Oracle Next Education con Alura LATAM
                      </a>
                    </b>
                    , 2024: Java y Spring Boot, Spring Data JPA, APIs REST y
                    lógica de programación
                  </li>
                </ul>
              </div>
              <div class="rv" style="--i:4">
                <h3>
                  <svg class="ic" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 3l2.6 5.6 6.1.8-4.5 4.2 1.2 6L12 16.7 6.6 19.6l1.2-6L3.3 9.4l6.1-.8z" />
                  </svg>
                  Especialización
                </h3>
                <p>
                  DDD, arquitectura Clean y Hexagonal, patrones de diseño,
                  seguridad de APIs, control de acceso y estimación explícita de
                  riesgos.
                </p>
              </div>
            </div>
          </div>
          <a class="br rv" style="--i:5" href="#hice">
            Esto se entiende mejor con ejemplos que se pueden tocar.
          </a>
        </section>

        <section class="s" id="hice" data-n="Lo que construí">
          <h2 class="rv">Lo que construí, para que lo pruebes</h2>
          <div class="dms rv" style="--i:1">
            <div class="dm" id="dA" data-live="">
              <h3>Comparador GoCuotas</h3>
              <button class="lv" hidden>
                Ver versión real
              </button>
              <p class="d">
                Un mismo producto en distintas tiendas argentinas. Elegí las
                cuotas. Precios de ejemplo.
              </p>
              <div class="sg">
                <button data-c="3" aria-pressed="false">
                  3 cuotas
                </button>
                <button data-c="6" aria-pressed="true">
                  6 cuotas
                </button>
                <button data-c="12" aria-pressed="false">
                  12 cuotas
                </button>
                <button data-o="" aria-pressed="true">
                  Solo GoCuotas
                </button>
              </div>
              <div class="rs"></div>
            </div>
            <div class="dm" id="dB" data-live="">
              <h3>Comparador de supermercados</h3>
              <button class="lv" hidden>
                Ver versión real
              </button>
              <p class="d">
                Armá tu lista y mirá en qué súper conviene cada cosa. Precios de
                ejemplo.
              </p>
              <div class="sg"></div>
              <div class="rs"></div>
            </div>
            <div class="dm" id="dC" data-live="">
              <h3>Plataforma de desarrollo self-hosted</h3>
              <button class="lv" hidden>
                Ver versión real
              </button>
              <p class="d">
                Apagá servicios y mirá qué se rompe en el entorno.
              </p>
              <div class="sg"></div>
              <div class="rs"></div>
            </div>
          </div>
          <a class="br rv" style="--i:2" href="#hablemos">
            Si seguiste hasta acá, ya pensamos parecido.
          </a>
        </section>

        <section class="s" id="hablemos" data-n="Hablemos">
          <h2 class="rv">Hablemos</h2>
          <div class="hb">
            <div>
              <p class="st rv" style="--i:1">
                Contame qué estás por construir. Yo empiezo preguntando qué no
                puede fallar.
              </p>
              <div class="ln rv" style="--i:2">
                <a
                  href="https://github.com/JuanIPlanes"
                  target="_blank"
                  rel="noopener"
                >
                  <svg class="li" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/juaniplanes"
                  target="_blank"
                  rel="noopener"
                >
                  <svg class="li" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  LinkedIn
                </a>
                <a href="mailto:juaniplanes@outlook.com">
                  <svg class="li" viewBox="0 0 24 24" aria-hidden="true">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  Email
                </a>
              </div>
            </div>
            <div class="ab rv" style="--i:3">
              <p>
                <b>Hoy.</b> Arquitecto de software en Innen, trabajando en
                remoto desde Buenos Aires.
              </p>
              <p>
                <b>Método.</b> Uso IA para explorar arquitecturas, documentar,
                depurar y cambiar de contexto entre proyectos activos.
              </p>
              <p>
                <b>Criterio.</b> Estimo los riesgos de forma explícita y mejoro
                de manera continua lo que ya está funcionando.
              </p>
            </div>
          </div>
        </section>
      </div>
      <nav class="sb" aria-label="Secciones">
        <i class="sbt"></i>
      </nav>
      <div id="dot"></div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Juani, arquitecto de software",
  meta: [
    {
      name: "description",
      content: "Arquitecto de software e ingeniero backend.",
    },
  ],
};
