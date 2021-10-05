import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import styles from './Bootcamp.module.css'

const Bootcamp = () => {
    return (
        <Container className={styles.container}>
            <Box component="div" className={styles.box}>
                <img src="./images/bootcamp.png" alt="bootcamp" />
                <p>Looking to take your first steps in Web Development?
                <br />
                    Try the free Frontend Masters Bootcamp!</p>
                <p>
                    <a href="https://frontendmasters.com/bootcamp/">More Info</a>
                </p>
            </Box>
        </Container>
    )
}

export default Bootcamp
