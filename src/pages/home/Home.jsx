import "./home.css";

function Home() {
  return (
    <div>
      <div className="ground">
        <div className="color">
          <h1>
            Explore
            <br /> The world
          </h1>
        </div>
        <div className="name">
          <img src="image9.webp" className="image" />
        </div>
      </div>
      <div className="main">
        <div className="second">
          <img src="image2.jpg" className="computer" />

          <div className="text">
            <h2>This is a heading</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s,
            </p>
          </div>
        </div>
        <div className="second">
          <img src="image5.jpg" className="computer" />

          <div className="text">
            <h2>This is a heading</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s,
            </p>
          </div>
        </div>
        <div className="second">
          <img src="image4.jpg" className="computer" />

          <div className="text">
            <h2>This is a heading</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
