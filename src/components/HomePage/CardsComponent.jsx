import { Card, Container } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react';
import CardItem from './CardItem';
import styles from './CardsComponent.module.css'
import axios from 'axios'

const CardsComponent = () => {
    const [data, setData] = React.useState();
    React.useEffect(() => {
        datafetch()
    },[])

    const datafetch = () => {
        axios.get('http://localhost:8000/profile')
            .then(response => setData(response.data))
        .catch(err => console.log(err))
    }
    // console.log(data);
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
                    <Box component="div" className={styles.items}>
                         {data && data.map((ele,i) => {
                       return <CardItem key={i} ele={ele} />
                        })}
                   </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default CardsComponent
