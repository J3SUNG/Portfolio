import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";

export default function Home() {
  return (
    <>
      <Nav />
      <header className="sticky -top-[500px]">
        <Header />
      </header>
      <main>
        <AboutMe />
        <AboutMe />
        <AboutMe />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
