import { Card } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react';
import styles from './HomePage.module.css'

const HomePage = () => {
    return (
        <Box className={styles.root}>
            <Card className={styles.fm1}>
                HomePage
            </Card>
        </Box>
    )
}

export default HomePage
