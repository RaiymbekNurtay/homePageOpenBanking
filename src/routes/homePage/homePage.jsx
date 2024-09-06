import React from 'react';
import './homePage.css'
import { Anchor, Button, Flex, Grid, GridCol, Text, Title } from '@mantine/core';
import { StatsGridIcons } from './stats';
import '@mantine/carousel/styles.css';
import { Carousel } from '@mantine/carousel';
import creditCard from './credit-card-front.png'
import { FeaturesCards } from './FeaturesCard';
import { FooterSimple } from './footer';

export const HomePage = () => {
    return (
    <>
            
            <div className='firstDiv'>
                <Flex
                justify="center"
                align="center"
                direction="column"
            >
                <h1 style={{
                    color: "#003366"
                }}>
                    Flow Finance
                </h1>
                </Flex>
            </div>

            <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }} bg={"#191c55"} pb={50} pt={50}>
                <Grid.Col span={4}>
                    <Flex direction={'column'}>
                        <h2 style={{
                        color: 'white',
                        marginBottom: 0
                        }}>
                            Intuitive
                        </h2>
                        <h2 style={{
                        color: '#14d3ef',
                        marginTop: 0
                        }}>
                            Open Banking.
                        </h2>
                        <p 
                        style={{
                            color:'#FFFFFF'
                        }}
                        >
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime id eius unde similique aliquam ex sapiente provident explicabo magni minima quam neque corporis, accusamus, odio numquam deserunt eum modi? Hic.
                        </p>
                    <Flex className='buttons'>
                        <Anchor href='src\open-banking-main\index.html'>
                            <Button color='#13e6b5' mr={10} radius={20} w={150}>
                                Sign Up
                            </Button>
                        </Anchor>
                        <Anchor href='src\open-banking-main\index.html'>
                            <Button color='#0abd7f' radius={20} w={150}>
                                Log In
                            </Button>
                        </Anchor>
                    </Flex>
                        
                    </Flex>
                </Grid.Col>
                <Grid.Col span={8}>
                    <Carousel withIndicators style={{
                        textAlign:'center'

                    }}>
                        <Carousel.Slide> 
                            <img src={creditCard} 
                            style={{
                                width: '50%'
                            }}
                            alt="Credit Card Front" />

                            
                            </Carousel.Slide>
                        <Carousel.Slide>2</Carousel.Slide>
                        <Carousel.Slide>3</Carousel.Slide>
                    </Carousel>
                </Grid.Col>
            </Grid>
            
            <Flex
                w="100%"
                bg={"gray"}
                align={'center'}
            >
            <Grid>
                <Grid.Col span={8}>
                    <StatsGridIcons/>
                </Grid.Col>
                <Grid.Col span={3}>
                <Flex direction={'column'} align={'center'} justify={'right'}>
                    <h2 style={{
                        color: 'white'
                    }}>
                        Follow Your Expenses, Master Your Finances!
                    </h2>

                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio cum saepe assumenda adipisci ex blanditiis qui exercitationem reprehenderit voluptates deserunt, id doloribus quibusdam, ullam, perspiciatis repellendus sint nesciunt. Enim, necessitatibus!
                    </p>
                </Flex>
                </Grid.Col>
            </Grid>
            </Flex>
            <Flex justify={'center'} bg={'#191c55'} direction={'column'}>
                <Title className='paddingLeft' c={'white'} size={'1.4em'} pt={50}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor numquam porro ex placeat id corporis laboriosam aliquam sit voluptatem explicabo.
                </Title>
                <FeaturesCards/>
            </Flex>
            <Flex direction={'column'} justify={'center'} align={'center'}>
                <Title className='paddingLeft' p={20}>
                    Contact Us
                </Title>

                <FooterSimple>
                </FooterSimple>
            </Flex>
    </>
    )

}