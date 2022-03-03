import "../../styles/GeneralComponents/footer.css";

const Footer = () => {
  return (
    <footer className="container-footer">
      <div className="container-ul">
        <ul className="container-ul__list">
          <h3 className="container-ul__list--title">Otros paises</h3>
          <li className="container-ul__list--items">Ecuador</li>
          <li className="container-ul__list--items">Chile</li>
          <li className="container-ul__list--items">Perú</li>
          <li className="container-ul__list--items">México</li>
        </ul>
      </div>
      <div className="footer__parrafo">
        <p>
          OLX Clasificados © 2006-2021 OLX S.A. CUIT: 30-70964619-9 Miñones
          2177, PB, CP 1428, Belgrano, CABA
        </p>
      </div>
    </footer>
  );
};
export default Footer;
