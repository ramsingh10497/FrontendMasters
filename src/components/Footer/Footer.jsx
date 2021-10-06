import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <Box component='div' className={styles.box}>
                <Box component="div" className={styles.imgbox}>
                    <img alt="logo" src="https://static.frontendmasters.com/assets/fm/js/static/frontendmasters.e1e10b58c1.svg" />
                </Box>
                <Box className={styles.front} component="div">
                        <Button color="inherit">Courses</Button>
                        <Button color="inherit">Learn</Button>
                        <Button color="inherit">Teachers</Button>
                        <Button color="inherit">Guides</Button>
                        <Button color="inherit">Pricing</Button>
                    <Button color="inherit">Login</Button>
                    <Button color="inherit">Join Now</Button>
                    <Button color="inherit">FAQ</Button>
                </Box>
            </Box>
        </div>
    )
}

export default Footer
