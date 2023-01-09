import Header from "./Header";
import React, { useState, createContext } from "react";
import Speakers from "./Speakers";
import Layout from "./Layout";
import { AuthProvider } from "../contexts/AuthContext";

const App = () => {
  return (
    <AuthProvider initialLoogedInUser="Stephen">
      <Layout startingTheme={"light"}>
        <div>
          <Header />
          <Speakers />
        </div>
      </Layout>
    </AuthProvider>
  );
};

export default App;
