import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "../AlexWorld/AlexWorld.css";

function AlexWorld ({}){
    return (
        <section className="alex">
            <Header/>
            <ul className="alex__blog-list">
                <div className="alex__img-block">
                    <img src={blog.image} alt="" className="alex__img" />
                    <p className="alex__blog-title">{blog.title}</p>
                </div>
                <div className="alex__img-block">
                    <img src={blog.image} alt="" className="alex__img" />
                    <p className="alex__blog-title">{blog.title}</p>
                </div>
                <div className="alex__img-block">
                    <img src={blog.image} alt="" className="alex__img" />
                    <p className="alex__blog-title">{blog.title}</p>
                </div>
                <div className="alex__img-block">
                    <img src={blog.image} alt="" className="alex__img" />
                    <p className="alex__blog-title">{blog.title}</p>
                </div>
                <div className="alex__img-block">
                    <img src={blog.image} alt="" className="alex__img" />
                    <p className="alex__blog-title">{blog.title}</p>
                </div>
                <div className="alex__img-block">
                    <img src={blog.image} alt="" className="alex__img" />
                    <p className="alex__blog-title">{blog.title}</p>
                </div>
            </ul>
            <Footer/>
        </section>
    );
}


export default AlexWorld;