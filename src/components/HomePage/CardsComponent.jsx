import { Card, Container } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react';
import CardItem from './CardItem';
import styles from './CardsComponent.module.css'

const CardsComponent = () => {
    return (
        <Container className={styles.container}>
            <Box
                component='div'
                sx={{
                    paddingTop:'50px',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Box component='p' sx={{color:'white',fontSize:'27px'}}>
                    What They're Saying About Us (@FrontendMasters)
                </Box>
                <Box
                    component='div'
                    sx={{ display: 'flex',justifyContent:'space-between',alignItems: 'center'}}
                >
                    <CardItem
                        
                    />
                </Box>
            </Box>
        </Container>
    )
}

export default CardsComponent
