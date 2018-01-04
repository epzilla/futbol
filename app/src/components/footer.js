const Footer = ({ config }) => {
  return (
    <div class="footer">
      <img src={ config.footerImg } />
      <h3 class="footer-text">{ config.teamSlogan }</h3>
    </div>
  );
};

export default Footer;