import React from "react";
import { Grid } from "./styles";
import MainHeader from "../Aside";
import Content from "../Content";
import Aside from "../MainHeader";

const Layout: React.FC = () => {
    return (
        <Grid>
            <MainHeader/>
            <Aside/>
            <Content/>
        </Grid>
    );
}

export default Layout;