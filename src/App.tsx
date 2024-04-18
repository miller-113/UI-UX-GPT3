import { Navbar, Brand, CTA } from "./components";
import {
  Header,
  Blog,
  Features,
  WhatGPT3,
  Possibility,
  Footer,
} from "./containers";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
