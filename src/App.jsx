import { useState } from 'react'

import './App.css'

function App() {
  const [bars, setBars] = useState(false)
  const handleClick = () => {
    setBars(!bars)
  }
  return (
    <div className="App">
      <header className={`header ${bars ? "header__bars" : ""}`}>
        <nav className='header__nav'>
          <div className='header__nav-img'>jejej</div>
          <ul className='header__nav-ul'>
            <li className='header__nav-li'><p><i className="fa-solid fa-user"></i></p> Inicio</li>
            <li className='header__nav-li'><p><i className="fa-solid fa-chart-simple"></i></p> Habilidades</li>
            <li className='header__nav-li'><p><i className="fa-solid fa-briefcase"></i></p> Portafolio</li>
            <li className='header__nav-li'><p><i className="fa-regular fa-envelope"></i></p> Contacto</li>
            <li className='header__nav-li header__nav-li-button-container '><button className='header__nav-li-button'>Download CV</button></li>
          </ul>
        </nav>
      </header>
      <div className='div__button-bars'>
        <button onClick={handleClick} className='header__nav-button-bars'><i className="fa-solid fa-bars"></i></button>
      </div>
      <section className='container-section'>
        <div className='container-section-div'>
          <article className='container-name'>
            <h1 className='name'>Soy Luis</h1>
            <h2 className='job'>Desarrollador web</h2>
            <div className='div__img-name'>
              <img className='name__img' src="https://www.techyon.es/media/news/web-developer-principales-responsabilidades-y-competencias_1650467356_100.jpg" alt="" />
            </div>
            <div className='container-div-links'>
              <a className='link' href=""><i className="fa-brands fa-github"></i></a>
              <a className='link' href=""><i className="fa-brands fa-linkedin"></i></a>
              <a className='link' href="https://www.instagram.com/junior.fls/" target="_black"><i className="fa-brands fa-square-instagram"></i></a>

            </div>
            <div className='container__name-button'>
              <div className='name__buton-div name__button-div-cv '>
                <button className='name__button-p'>Download CV</button>
              </div>
              <div className='name__button-div name__button-div-contact'>
                <button className='button__contact'>CONTACTAME</button>
              </div>
            </div>


          </article>
          <article className='container__sobreMi'>
            <h2 className='sobre-mi'>Sobre Mi</h2>
            <p className='sobre-mi-p'>Hola, soy desarrollador web enfocado en el frontend, amante de los videojuegos y aficionado de las películas. Siempre dispuesto a aprender nuevas tecnologías. Soy una persona autodidacta, proactiva, eficaz, que ama la tecnología. Actualmente, dedico mi tiempo a estudiar y desarrollar aplicaciones web. Me encantan los desafíos.</p>
          </article>
        </div>
        <div className='div-container__datos'>
          <article className='container__datos'>
            <h2 className='datos-title'>Mis datos</h2>
            <div className='container__datos-div'>

              <div>
                <span>Nombre: </span><span>Luis Rojas Yaranga</span>
              </div>
              <div>
                <span>Edad: </span><span>19</span>
              </div>
              <div>
                <span>Telefono: </span><span>+51 922014995</span>
              </div>
              <div>
                <span>Correo: </span><span>feardinner02@gmail.com</span>
              </div>
            </div>
          </article>
          <article className='container__habilidades'>
            <h2 className='title-habilidades'>Mis Habilidades</h2>
            <div className='container__div-habilidades'>
              <div className='div__habilidades-logo'>
                <p><i className="fa-brands fa-html5 html-logo logo"></i></p>
                <h3>HTML5</h3>
              </div>
              <div className='div__habilidades-logo'>
                <p><i className="fa-brands fa-css3-alt css-logo logo"></i></p>
                <h3>CSS</h3>
              </div>
              <div className='div__habilidades-logo'>
                <p><i className="fa-brands fa-git-alt git-logo logo"></i></p>
                <h3>Git</h3>
              </div>
              <div className='div__habilidades-logo'>
                <p><i className="fa-brands fa-js java-logo logo"></i></p>
                <h3>JavaScript</h3>
              </div>
              <div className='div__habilidades-logo'>
                <p><i className="fa-brands fa-react react-logo logo"></i></p>
                <h3>React</h3>
              </div>
              <div className='div__habilidades-logo'>
                <p><i className="fa-brands fa-bootstrap boot-logo logo"></i></p>
                <h3>Bootstrap</h3>
              </div>
            </div>
          </article>
        </div>

        <article className='proyectos-container'>
          <h2 className='title-proyectos'>Mis Proyectos</h2>
          <div className='proyectos-div-container'>
            <div className='proyectos'>
              <img src="https://w10.naukri.com/mailers/2021/naukri-learning/oct/27oct-v2/What-is-Web-Developer.jpg" alt="" />
            </div>
            <div className='proyectos'>
              <img src="https://w10.naukri.com/mailers/2021/naukri-learning/oct/27oct-v2/What-is-Web-Developer.jpg" alt="" />
            </div>
            <div className='proyectos'>
              <img src="https://w10.naukri.com/mailers/2021/naukri-learning/oct/27oct-v2/What-is-Web-Developer.jpg" alt="" />
            </div>
          </div>
          <div className='container-form'>
            <h2 className='form-title-contac'>Contacto</h2>
            <form className='form-container'>
              <div className='form__imput'>
                <h2 className='form__title'>First Name</h2>
                <input placeholder='Luis Rojas' className="form-inputs" type="text" />
              </div>
              <div className='form__imput'>
                <h2 className='form__title' >Email</h2>
                <input placeholder='feardinner02@gmail.com' className="form-inputs" type="text" />
              </div>
              <div className='form__imput'>
                <h2 className='form__title'>Message</h2>
                <textarea className='textarea' name="" id="" cols="23" rows="10"></textarea>
              </div>
            </form>
          </div>
        </article>
        <footer className='footer'>
          <span>Luis Rojas Yaranga </span> <span><i className="fa-solid fa-briefcase"></i></span>
        </footer>
      </section>
    </div >
  )
}
export default App