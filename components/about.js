import Link from 'next/link';

const About = () => (
  <section id="about">
    <div className="container">
      <div className="col-md-8 col-md-offset-2">
        <h2>A Little Background</h2>
        <p>
          I've spent my life perfecting my craft as a Software
          Engineer/Architect.
        </p>
        <p>
          I've consulted with major brands such as Google, Urban Outfitters,
          GoodRX, Colgate, and more.
        </p>
        <p>
          With a passion for full-stack, it's common for me to work on all parts
          of a project from start to finish. Sometimes you'll find me
          orchestrating a Kubernetes operator or working on the UI of an
          application.
        </p>
        <p>
          With a true passion for Software even when I'm not in the office you
          will find me researching new trends and emerging myself in the latest
          technology to keep my skills at their finest.
        </p>
        <p>
          Want the full story? Well, go <Link href="/about">here</Link>.
        </p>
      </div>
    </div>
  </section>
);

export default About;
