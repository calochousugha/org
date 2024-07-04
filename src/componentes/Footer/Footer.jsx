import "./Footer.css";

const Footer = () => {
    return <footer className="footer" style={{ backgroundImage: "url(/img/footer.png)"}}>
        <div className="redes">
            <a href="https://www.facebook.com/calocho.usugha">
                <img src="/img/facebook.png" alt="Facebook"/>
            </a>
            <a href="https://www.instagram.com/calocho_usugha">
                <img src="/img/instagram.png" alt="Instagram"/>
            </a>
            <a href="https://www.linkedin.com/in/carlos-andres-usuga-jaramillo-2126371a2/">
                <img src="/img/linkedin.png" alt="Linkedin"/>
            </a>
        </div>
        <img src="/img/Logo.png" alt="org" />
        <strong>Desarrollado por Carlos Usuga</strong>
    </footer>
}

export default Footer;