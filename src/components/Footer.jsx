import imgGit from '../assets/git.png'
import imgLinkedin from '../assets/linkedin.webp'

function Footer(){
    return(
<footer class="footer">
  <div class="container">
    <div class="row">
      <div class="col-lg-4">
        <h3>Enlaces</h3>
        <ul>
            <li><img src={imgLinkedin} alt="" /></li>
            <a href="https://github.com/Admabaga" target='blank'>
            <li><img src={imgGit} alt="" /></li>
            </a>
        </ul>
      </div>
      <div class="col-lg-4">
        <h3>Contacto</h3>
        <p>Autor: Adrian Barrera Garcia</p>
        <p>Correo electrónico: admabaga@outlook.com</p>
        <p>Teléfono: 321-885-4756</p>
      </div>
      <div class="col-lg-4">
        <h3>Derechos de autor</h3>
        <p>(c) 2024 Mi Sitio Web. Todos los derechos reservados.</p>
      </div>
    </div>
  </div>
</footer>
    )
}

export default Footer