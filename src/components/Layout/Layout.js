import React from 'react';
import { Grid, Row, Panel } from 'react-bootstrap';
import Navigator from '../Navigation/Navigator';

const Layout = (props) => {
    return (
        <Panel>
            <Grid>
                <Row>
                    <Navigator />
                </Row>
                <main>
                    {props.children}
                </main>
                <Panel.Footer> 
                    <p className="small text-muted">©2018 Ben Blackman</p>
                </Panel.Footer>
            </Grid>
        </Panel>
    )
}

export default Layout;