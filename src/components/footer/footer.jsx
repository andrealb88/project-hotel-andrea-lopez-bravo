import "./footer.css"
import React from "react"

export function Footer(){
    return(
        <footer className="footer">
             <div className="text-footer font-roboto-footer">Copyright ©</div>
             <div className="container-icono-footer">
                <a className="icono-footer" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
                </a>
                <a className="icono-footer" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
                </a>
                <a className="icono-footer" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
                </a>
                <a className="icono-footer" href="https://telegram.org/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-telegram"></i>
                </a>
            </div>
        </footer>
    )
}
