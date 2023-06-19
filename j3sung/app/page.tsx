import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";

export default function Home() {
  return (
    <>
      <header>
        <Nav />
        <Header />
      </header>
      <main>
        <AboutMe />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
