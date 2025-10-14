import "../styles/Herosection.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "../styles/profilepicture.css";
import { Button } from "primereact/button";
import { Image } from "primereact/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faReact, faNode, faHtml5, faCss, faStripe } from "@fortawesome/free-brands-svg-icons";

import proyecto1 from "../assets/Wireframe_Proyecto1.png";
import proyecto2 from "../assets/Wireframe_Proyecto2.png";
import proyecto3 from "../assets/proyecto_example3.jpg";

import fotoperfil from "../assets/profile.jpg";

const projects = [
    { id: 1, title: "Gestor de inventario", desc: "Gestor simple de inventario funcional", img: proyecto1, alt: "Vista previa Proyecto 1", href: "https://github.com/Draktael/Gestion-de-inventario.git" },
    { id: 2, title: "Sho.es", desc: "E-commerce de productos, con carrito de compras y sistema de pago implementado", img: proyecto2, alt: "Vista previa Proyecto 2", href: "https://github.com/Draktael/e-commerce"},
    { id: 3, title: "Calor.IAs (En progreso 🚧)", desc: "Aplicacion Movil de trackeo de macros con camara", img: proyecto3, alt: "Vista previa Proyecto 3" },
];

const SocialButton = ({ label, icon, href, className }) => (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label} style={{ textDecoration: "none" }}>
        <Button label={label} icon={icon} className={className} style={{ margin: "10px" }} />
    </a>
);

const Herosection = () => (
    <div className="container">
        {/* Header / Avatar */}
        <section id="start" className="profilepicture-Header">
            <img src={fotoperfil} alt="Foto de perfil de Alexander Camaño" className="profilepicture" />
        </section>

        {/* Hero */}
        <section id="home" aria-labelledby="hero-title">
            <h1 id="hero-title" className="nombre">&lt;/&gt; Alexander Caamaño</h1>
            <p className="primerparrafo">
                Me presento, soy <span className="resaltado1">desarrollador full stack</span>
            </p>
            <p className="segundoparrafo">
                Apasionado por el <span className="resaltado2">diseño web y la programación</span>.
            </p>
        </section>

        {/* Redes */}
        <section id="redes" aria-labelledby="social-title">
            <h2 id="social-title" className="social"><span>@</span> Social</h2>
            <SocialButton
                label="LinkedIn"
                icon="pi pi-linkedin"
                href="https://www.linkedin.com/in/alexander-benjamin-caamaño-avendaño-38228533a"
                className="p-button-rounded p-button-outlined p-button-linkedin"
            />
            {/* Agrega GitHub si quieres */}
            <SocialButton
                label="GitHub"
                icon="pi pi-github"
                href="https://github.com/Draktael"
                className="p-button-rounded p-button-outlined p-button-github"
            />
        </section>

        {/* Proyectos */}
        <section id="proyectos" aria-labelledby="projects-title">
            <h2 id="projects-title" className="proyectos">Proyectos</h2>

            <div className="project-image-wrapper">
                {projects.map(p => (
                    <article key={p.id} className="project-card">
                        <h3 className="project-title">{p.title}</h3>
                        <p className="project-desc">{p.desc}</p>
                        <div className="project-image-container">
                            {p.href ? (
                                <a
                                    href={p.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Abrir ${p.title} en GitHub`}
                                    className="block"
                                >
                                    <Image src={p.img} alt={p.alt} className="project-image" />
                                </a>
                            ) : (
                                <Image src={p.img} alt={p.alt} className="project-image" preview />
                            )}
                        </div>
                        {p.id === 1 && (
                            <div className="project-skills">
                                <Button className="hability-buttons p-button-outlined">
                                    <FontAwesomeIcon icon={faReact} size="1x" style={{ color: "#61DBFB", marginRight: 10 }} />
                                    React
                                </Button>
                                <Button className="hability-buttons p-button-outlined btn-js">
                                    <FontAwesomeIcon icon={faJs} size="1x" style={{ color: "#F7DF1E", marginRight: 10 }} />
                                    JavaScript
                                </Button>
                                <Button className="hability-buttons p-button-outlined btn-node">
                                    <FontAwesomeIcon icon={faNode} size="1x" style={{ color: "#68A063", marginRight: 10 }} />
                                    Node.js
                                </Button>
                            </div>
                        )}

                        {p.id === 2 && (
                            <div className="project-skills">
                                <Button className="hability-buttons p-button-outlined">
                                    <FontAwesomeIcon icon={faReact} size="1x" style={{ color: "#61DBFB", marginRight: 10 }} />
                                    React
                                </Button>
                                <Button className="hability-buttons p-button-outlined btn-js">
                                    <FontAwesomeIcon icon={faJs} size="1x" style={{ color: "#F7DF1E", marginRight: 10 }} />
                                    JavaScript
                                </Button>
                                <Button className="hability-buttons p-button-outlined btn-node">
                                    <FontAwesomeIcon icon={faNode} size="1x" style={{ color: "#68A063", marginRight: 10 }} />
                                    Node.js
                                </Button>
                                <Button className="hability-buttons p-button-outlined btn-axios">
                                    <FontAwesomeIcon icon="fa-solid fa-network-wired" size="1x" style={{ color: "#5A29E4", marginRight: 10 }} />
                                    Axios
                                </Button>
                                <Button className="hability-buttons p-button-outlined btn-html">
                                    <FontAwesomeIcon icon={faHtml5} size="1x" style={{ color: "#E34F26", marginRight: 10 }} />
                                    Html5
                                </Button>
                                <Button className="hability-buttons p-button-outlined btn-css">
                                    <FontAwesomeIcon icon={faCss} size="1x" style={{ color: "#1572B6", marginRight: 10 }} />
                                    Css
                                </Button>
                                <Button className="hability-buttons p-button-outlined btn-stripe">
                                    <FontAwesomeIcon icon={faStripe} size="1x" style={{ color: "#635BFF", marginRight: 10 }} />
                                    Stripe
                                </Button>
                            </div>
                        )}
                        {/* Opcional: botón ver repo/demos */}
                        {/* <a href="URL" target="_blank" rel="noreferrer"><Button label="Ver más" className="p-button-sm" /></a> */}
                    </article>
                ))}
            </div>
        </section>


    </div>
);

export default Herosection;