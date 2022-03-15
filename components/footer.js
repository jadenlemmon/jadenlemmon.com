const Footer = () => (
  <section id="contact">
    <div className="container">
      <div className="social">
        <div className="box col-sm-4 text-center">
          <a
            target="_blank"
            href="http://www.linkedin.com/pub/jaden-lemmon/40/11b/99a"
          >
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
        <div className="box col-sm-4 text-center">
          <a target="_blank" href="https://github.com/jadenlemmon">
            <i className="fa fa-github"></i>
          </a>
        </div>
        <div className="box col-sm-4 text-center">
          <a target="_blank" href="https://twitter.com/jadenlemmon">
            <i className="fa fa-twitter"></i>
          </a>
        </div>
      </div>
      <div className="divider"></div>
      <div className="col-md-12 text-center">
        <div className="emailPhone">
          <p>jaden@jadenlemmon.com</p>
          <p>580.402.5211</p>
        </div>
      </div>
    </div>
  </section>
);

export default Footer;
