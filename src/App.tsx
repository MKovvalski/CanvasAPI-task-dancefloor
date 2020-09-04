import React from "react";
import "./styles/main.sass";

import Layout from "./components/layout";
// import Header from "./compsonents/header";
import Content from "./components/content";

const App: React.FC = () => {
    return (
        <div className="App">
            <Layout>
                {/* <Header /> */}
                <Content />
            </Layout>
        </div>
    );
};

export default App;
