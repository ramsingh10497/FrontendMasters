import { Card, Container, Icon,Divider } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react';
import styles from './CardItem.module.css'
import TwitterIcon from '@mui/icons-material/Twitter';

const CardItem = ({ ele }) => {
    const { name, twitter, paragraph, imageurl } = ele;
    return (
        <Container>
            <Card className={styles.card}>
                <Box component="div" className={styles.pic} >
                    <img src={imageurl} alt="abc" />
                    <Box component="div" className={styles.name}>
                        <div>{name}</div>
                        <div>{twitter}</div>
                    </Box>
                    <Box component="button" className={styles.btn}>
                        <Icon color="primary.main">
                            <TwitterIcon style={{ color: '#1976d2' }} />

                        </Icon>
                    </Box>
                </Box>

                <Box component="div">
                    <p>{paragraph}</p>
                </Box>
                
                <Divider />

                <Box
                     sx={{
                            color: '#757575'
                         }}
                >
                    <p>2:50pm Oct 21, 2020</p>
                </Box>

            </Card>
        </Container>
    )
}

export default CardItem
