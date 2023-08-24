const Experiments = () => (
  <section id="experiments">
    <div className="beaker" />
    <div id="bubbles">
      <div className="bubble" />
      <div className="bubble" />
      <div className="bubble" />
      <div className="bubble" />
      <div className="bubble" />
      <div className="bubble" />
      <div className="bubble" />
    </div>
    <div className="container">
      <div className="col-xs-12">
        <h2>Experiments</h2>
        <p>Just for fun projects.</p>
      </div>

      <div className="clearfix" />

      <div className="col-sm-4">
        <div className="experiment">
          <div className="chatio">
            <div>
              <h3>ChatIO</h3>
            </div>
          </div>
          <div className="text">
            <p>
              Simple chat application using Socket.IO, Node.js, and Angular.js.
              Users can chat in the public room as well as private message each
              other.
            </p>
          </div>
          <a href="http://chat.jaden.fun" target="_blank">
            View
          </a>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="experiment">
          <div className="meme">
            <div>
              <h3>Meme Build</h3>
            </div>
          </div>
          <p>
            Meme generation application using PHP, ImageMagick, and Angular.js.
            Users can generate memes and create an account to save their
            generated memes.
          </p>
          <a href="http://memebuild.com" target="_blank">
            View
          </a>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="experiment">
          <div className="rss">
            <div>
              <h3>SnugFeed</h3>
            </div>
          </div>
          <p>
            RSS feed application where you can read all your favorite feeds at
            once. Uses PHP, Laravel, Angular.js, and SocketIO for live article
            stream.
          </p>
          <a href="http://snugfeed.com" target="_blank">
            View
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Experiments;
