import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "../AlexWorld/AlexWorld.css";

function AlexWorld( {} ) {
  return (
    <section className="alex">
      <ul className="alex__blog-list">
        <div className="alex__img-block">
          <img src="src/assets/images/Jumping.jpg" alt="jumping pic" className="alex__blog-img" />
          <h2 className="alex__blog-title">Blog Content Coming Soon</h2>
        </div>
      </ul>
    </section>
  );
}


export default AlexWorld;
