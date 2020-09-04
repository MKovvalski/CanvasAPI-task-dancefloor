import React from "react";
import "./styles/main.sass";

import Layout from "./components/layout";
import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";

const App: React.FC = () => {
    return (
        <div className="App">
            <Layout>
                <Header />
                <Content />
                <Footer />
            </Layout>
        </div>
    );
};

export default App;
