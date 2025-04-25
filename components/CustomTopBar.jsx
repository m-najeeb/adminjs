import React from 'react';
import { Box, H4, Button } from '@adminjs/design-system';
import { useCurrentAdmin } from 'adminjs';

const CustomTopBar = (props) => {
    console.log('Rendering CustomTopBar');
    const [currentAdmin] = useCurrentAdmin();

    return (
        <Box data-css="top-bar" flex flexDirection="row" justifyContent="space-between" alignItems="center" p="lg">
            <H4>Assort Tech Admin</H4>
            <Box flex flexDirection="row" alignItems="center" gap="md">
                <Box>{currentAdmin?.email}</Box>
                <Button variant="text" onClick={props.logout}>Logout</Button>
            </Box>
        </Box>
    );
};

export default CustomTopBar; 