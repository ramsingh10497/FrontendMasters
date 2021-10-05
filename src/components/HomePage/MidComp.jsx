import { Button, Card, Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import styles from './MidComp.module.css';

const MidComp = () => {
    return (
        <Container className={styles.container}>
            <Box component="div" className={styles.box}>
                <h1>Join Now and Learn Straight from the Experts Who Shape the Modern Web</h1>
                <Box>
                    <button className={styles.btn}  >Join Now</button>
                </Box>
            </Box>
        </Container >
    )
}

export default MidComp
