import Header from "./components/Header";
import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";

export default function Home() {
  return (
    <>
      <header>
        <Nav />
        <Header />
      </header>
      <div>
        <main>
          <AboutMe />
        </main>
      </div>
    </>
  );
}
