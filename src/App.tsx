import React from "react";
import Layout from "./components/layouts/Layout";
import { articles } from "./data/articles";
import Section from "./components/common/section/Section";
import Ad from "./components/Ad";

function App() {
  return (
    <Layout>
      <Section articles={articles} />
      <Ad sticky alignment="right" rowStart="1" rowEnd="3"/>
      <Section articles={articles.slice(2)} />
      <Section alignment="full" articles={articles} />
      <Ad alignment="full"/>
      <Section articles={articles} />
      <Ad sticky alignment="right" rowStart="5" rowEnd="7"/>
      <Section articles={articles.slice(3)} />
    </Layout>
  );
}

export default App;
