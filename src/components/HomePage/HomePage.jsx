import { Button, Card } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react';
import styles from './HomePage.module.css'

const HomePage = () => {
    return (
        <Box className={styles.root}>
            <Card className={styles.fm1}>
                <Box className={styles.fm2} >
                    <h1 >
                        <strong style={{fontSize:'160%'}}>Advance Your Skill</strong><br/>
                        <span style={{ marginLeft: '60px' }}>With in-Depth,Modern</span><br/>
                        <span>Front-end Engineering Courses</span>
                    </h1>
                </Box>
                <Box className={styles.fm3}>
                    <Button variant="contained" style={{backgroundColor:'rgb(213,65,48)'}}>Browse Our Courses</Button>
                    <Button variant="contained" style={{backgroundColor:'rgb(201,80,45)'}}>View Learning Paths</Button>
                </Box>
            </Card>
        </Box>
    )
}

export default HomePage
