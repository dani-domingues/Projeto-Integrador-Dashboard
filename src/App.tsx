import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/MainHeader copy";

const App: React.FC = () => {
    return (
        <>
            <GlobalStyles/>
            <Layout/>
        </>
    );
}

export default App;