import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Service";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Blog from "./components/blog/Blog";
import Testimonials from "./components/testimonials/Testimonials";
import Pricing from "./components/pricing/Pricing";

function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
    </>
  );
}

export default App;
