import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Project from "./components/Project";

export default function Home() {
  return (
    <>
      <header className="sticky -top-[500px]">
        <Nav />
        <Header />
      </header>
      <main>
        <AboutMe />
        <Skills />
        <Experience />
        <Project />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
