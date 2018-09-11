import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import Navigator from '../Navigation/Navigator';

const Layout = (props) => {
    return (
        <Grid>
            <Row>
                <Navigator />
            </Row>
            <main>
                {props.children}
            </main>
        </Grid>
    )
}

export default Layout;