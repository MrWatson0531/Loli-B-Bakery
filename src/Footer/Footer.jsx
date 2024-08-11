import '../Footer/Footer.css'

function Footer({handleSocialClick, handleTermsClick, handlePrivacyClick}){
    return (
        <section className="footer">
            <h2 className="footer__header">Loli B Bakery</h2>
            <img src="" alt="Instagram" className="footer__social" />
            <div className="footer__legal-section">
            <p className="footer__legal">TERMS & CONDITIONS</p>
            <p className="footer__legal">PRIVACY POLICY</p>
            </div>
            <p className="footer__signature">Website Design and Build by MW digital Solutions ltd.</p>
        </section>
    );
}

export default Footer;