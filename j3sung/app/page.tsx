import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <Nav />
      <header className="sticky -top-[500px]">
        <Header />
      </header>
      <main>
        <AboutMe />
        <Skills />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
