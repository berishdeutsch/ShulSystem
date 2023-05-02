import React, { Component } from "react";
import { Route } from "react-router";
import Layout from "./Layout";
import Home from "./Pages/Home";

function App() {
  return (
    <Layout>
      <Route exact path="/" component={Home} />
    </Layout>
  );
}
export default App;
