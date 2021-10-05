import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import styles from './Bootcamp.module.css'

const Bootcamp = () => {
    return (
        <Container className={styles.container}>
            <Box component="div" className={styles.box}>
                Hello
            </Box>
        </Container>
    )
}

export default Bootcamp
