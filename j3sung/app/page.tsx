import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Archiving from "./components/Archiving";
import Awards from "./components/Awards";

export default function Home() {
  return (
    <>
      <header className="sticky -top-[500px] z-50">
        <Nav />
        <Header />
      </header>
      <main>
        <AboutMe />
        <Archiving />
        <Skills />
        <Awards />
        <Experience />
        <Project />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
