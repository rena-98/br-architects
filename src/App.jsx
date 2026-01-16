import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Projects from "./components/PageContent/Project/Project";
import About from "./components/PageContent/About/About";
import Contact from "./components/PageContent/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App(){
    return(
        <>
        <Navbar />
        <Header />
        <Projects />    
        <About />
        <Contact />
        <Footer />    
        </>

    )
}

export default App;