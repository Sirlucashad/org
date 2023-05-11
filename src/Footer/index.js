import "./Footer.css"

const Footer = () =>{
    return <footer className="footer" style={{backgroundImage:"url(./img/footer.png)"}}>
         <div className="redes">
            <a href="https://www.facebook.com/mydemoncry/?paipv=0&eav=AfamSQmd-PoBI1_d_L_FQyFmwiNx_pg59hQAsaIDYQzkVqqxchcw4D75laV1QJ4COv4&_rdr">
                <img src="./img/facebook.png" alt="Facebook" />
            </a>
            <a href="https://twitter.com/LucasSa65547037">
                <img src="./img/twitter.png" alt="Twitter" />
            </a>
            <a href="https://www.aluracursos.com/">
                <img src="./img/instagram.png" alt="Instagram" />
            </a>
         </div>
         <img className="footer__logo" src="./img/Logo.png" alt="org" />
         <strong>Desarrollado por: <br/> Lucas Gastón Sanchez</strong>
          </footer>
}





export default Footer