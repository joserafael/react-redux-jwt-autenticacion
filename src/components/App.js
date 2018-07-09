import React from 'react';
import { Container } from 'reactstrap';

import Header from './Header';

export default ({ children }) => {
    return (
        <div>
        <Header />

        <Container>
           
            {children}
        </Container>
        </div>
    );
}