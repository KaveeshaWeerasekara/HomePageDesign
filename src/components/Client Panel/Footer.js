import React from "react";
import { Link } from "react-router-dom";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';

import img from "../../assets/logo.jpeg"
import { Box, Card, CardContent, ImageList, ImageListItem, TextField, Typography } from "@mui/material";

function Footer() {
    return (
        <>
            <div className=" bg-linear-pink-invert pb-12 bg-[#262523]">

                <div className=" grid grid-flow-row grid-cols-2 grid-rows-1">
                    <div className=" col-start-1">
                        <Box
                            //border={3} 
                            borderColor="gray"
                            borderRadius={3}
                            backgroundColor='#262523'
                            // boxShadow="10px 10px 10px #ccc" 
                            padding={1}
                            margin='auto'
                            marginTop={1}
                            display='flex'
                            flexDirection={'column'}
                            width="550px"
                            height='100px'
                        // position='absolute'

                        >

                            <h2 style={{ color: 'orange', fontSize: '2.5rem', fontWeight: 'bold' }}>Weekly Newsletter</h2>
                            <p style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>There are many variations....</p>
                        </Box>
                    </div>
                    <div className=" col-start-2 ">
                        <Box
                            //border={3} 
                            borderColor="gray"
                            borderRadius={3}
                            backgroundColor='#262523'
                            // boxShadow="10px 10px 10px #ccc" 
                            padding={1}
                            margin='auto'
                            marginTop={1}
                            display='flex'
                            flexDirection={'column'}
                            width="550px"
                            height='100px'
                        // position='absolute'

                        >
                            {/* <div className="container2">
                            </div> */}
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <TextField
                                    id="filled-search"
                                    label="E-mail"
                                    type="search"
                                    variant="filled"
                                    style={{ marginRight: '8px', width: '350px', }}
                                    InputProps={{
                                        style: {
                                            backgroundColor: 'white',

                                        }
                                    }} // Add margin to create space between TextField and button
                                /> &nbsp;
                                <button style={{
                                    backgroundColor: '#FFA500',
                                    border: 'none',
                                    padding: '10px 20px',
                                    color: 'white',
                                    cursor: 'pointer',
                                    width: '150px'
                                }}>
                                    Submit
                                </button>
                            </div>
                            <br></br>

                        </Box>
                    </div>
                </div>
                <br />
                {/* <div className="mx-auto container pt-5 flex flex-col items-center justify-center">
                    <div>
                        <Link to="/Home">
                            <img
                                className="hidden lg:block h-24 w-auto"
                                src={img}
                                alt="Company Logo"
                            />
                        </Link>
                    </div>
                    <div className="flex flex-col items-center  pt-3 text-white">
                        <h1 className="text-2xl font-black">CONTACT INFO</h1>
                        <div className=" items-center mt-5  text-base text-color text-center">
                            <p className=" pb-2 cursor-pointer">21 Taltarni Road, TOTTINGTON, Victoria 3478</p>
                            <p className=" pb-3 cursor-pointer font-semibold"> (03) 5333 5036</p>
                            <p className=" pb-2 cursor-pointer text-[#f07335]">Ceyloneproducts@gmail.com</p>
                        </div>
                        <div className="my-6 text-base text-color f-f-l">
                            <ul className="md:flex items-center">
                                <li className=" mr-6 cursor-pointer pt-4 py-0">About</li>
                                <li className=" mr-6 cursor-pointer pt-4 py-0">Features</li>
                                <li className=" mr-6 cursor-pointer pt-4 py-0">Terms & Conditions</li>
                                <li className=" mr-6 cursor-pointer pt-4 py-0">Help</li>
                                <li className="cursor-pointer pt-4 lg:py-0">Privacy Policy</li>
                            </ul>
                        </div>
                        <div className="text-sm text-color mb-10 f-f-l">
                            <p> © 2022 Ceylon Products, LLC. All Rights Reserved</p>
                        </div>
                    </div>
                    <div className="w-9/12  h-0.5 bg-gray-100 rounded-full" />
                    <div className="flex justify-between items-center pt-12 text-white">
                        <div className="mr-4">
                            <h1 className="text-2xl font-black">FOLLOW US</h1>
                        </div>
                        <div className="pb-1 ">
                            <FacebookIcon className="mr-2" />
                            <InstagramIcon className="mr-2" />
                            <TwitterIcon className="mr-2" />
                            <PinterestIcon className="mr-2" />
                            <YouTubeIcon className="mr-2" />
                        </div>
                    </div>
                </div> */}

                <div className=" grid grid-flow-row grid-cols-4 grid-rows-1">
                    <div className=" col-start-1">
                        <Box
                            backgroundColor='#262523'
                            // boxShadow="10px 10px 10px #ccc" 
                            padding={2}
                            margin='auto'
                            marginTop={3}
                            display='flex'
                            flexDirection={'column'}
                            width="200"
                            height='500px'
                        // position='absolute'
                        >
                            <Card sx={{ display: 'flex', backgroundColor: '#262523' }}>

                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" >
                                        <h2 style={{ color: 'white', fontSize: '1.2rem', fontWeight: 'bold', alignItems: 'center' }}><b>About Us</b> </h2>
                                        <p style={{ color: 'orange', fontSize: '1rem', fontWeight: 'bold' }}>----</p>
                                        <div className=" items-center mt-5  text-base text-color text-left">
                                            <p className=" pb-2 cursor-pointer" style={{ color: 'white', fontSize: '1rem' }}>21 Taltarni Road, TOTTINGTON,<br /> Victoria 3478</p>
                                            <p className=" pb-3 cursor-pointer font-semibold" style={{ color: 'white', fontSize: '1rem' }}> (03) 5333 5036</p>
                                            <p className=" pb-2 cursor-pointer" style={{ color: 'white', fontSize: '1rem' }}>Assignment3@gmail.com</p>
                                        </div>
                                    </Typography>
                                </CardContent>

                            </Card>

                        </Box>
                    </div>
                    <div className=" col-start-2">
                        <Box
                            backgroundColor='#262523'
                            padding={2}
                            margin='auto'
                            marginTop={3}
                            display='flex'
                            flexDirection={'column'}
                            width="200"
                            height='500px'
                        >
                            <Card sx={{ display: 'flex', backgroundColor: '#262523' }}>

                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" >
                                        <h2 style={{ color: 'white', fontSize: '1.2rem', fontWeight: 'bold', alignItems: 'center' }}><b>Latest News</b> </h2>
                                        <p style={{ color: 'orange', fontSize: '1rem', fontWeight: 'bold' }}>----</p>
                                        <div className=" items-center mt-5  text-base text-color text-left">
                                            <ul style={{ listStyleType: 'bullets', color: 'white', fontSize: '1rem' }}>
                                                <h5> <li>I have not received goods</li></h5>
                                                <h5> <li>What can I do?	How to check my refund?</li></h5>
                                                <h5> <li>I have not received goods</li></h5>
                                                <h5> <li>What can I do?	How to check my refund?</li></h5>
                                                <h5> <li>I have not received goods</li></h5>
                                                <h5> <li>What can I do?	How to check my refund?</li></h5>
                                            </ul>
                                        </div>
                                    </Typography>
                                </CardContent>

                            </Card>

                        </Box>
                    </div>
                    <div className=" col-start-3">
                        <Box
                            backgroundColor='#262523'
                            padding={2}
                            margin='auto'
                            marginTop={3}
                            display='flex'
                            flexDirection={'column'}
                            width="200"
                            height='500px'
                        >
                            <Card sx={{ display: 'flex', backgroundColor: '#262523' }}>

                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" >
                                        <h2 style={{ color: 'white', fontSize: '1.2rem', fontWeight: 'bold', alignItems: 'center' }}><b>About Us</b> </h2>
                                        <p style={{ color: 'orange', fontSize: '1rem', fontWeight: 'bold' }}>----</p>
                                        <div className=" items-center mt-5  text-base text-color text-left">
                                            <ul style={{ color: 'white', fontSize: '1rem' }} >
                                                <li className=" mr-6 cursor-pointer pt-4 py-0">About</li>
                                                <li className=" mr-6 cursor-pointer pt-4 py-0">Features</li>
                                                <li className=" mr-6 cursor-pointer pt-4 py-0">Terms & Conditions</li>
                                                <li className=" mr-6 cursor-pointer pt-4 py-0">Help</li>
                                                <li className="cursor-pointer pt-4 lg:py-0">Privacy Policy</li>
                                            </ul>
                                        </div>
                                    </Typography>
                                </CardContent>

                            </Card>

                        </Box>
                    </div>
                    <div className=" col-start-4">
                        <Box
                            backgroundColor='#262523'
                            padding={2}
                            margin='auto'
                            marginTop={3}
                            display='flex'
                            flexDirection={'column'}
                            width="200"
                            height='500px'
                        >
                            <Card sx={{ display: 'flex', backgroundColor: '#262523' }}>

                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" >

                                        <h2 style={{ color: 'white', fontSize: '1.2rem', fontWeight: 'bold', alignItems: 'center' }}><b>Customer Service</b> </h2>
                                        <p style={{ color: 'orange', fontSize: '1rem', fontWeight: 'bold' }}>----</p>
                                        <div className=" items-center mt-5  text-base text-color text-left">
                                            <ImageList sx={{ width: 300, height: 300 }} cols={3} rowHeight={164}>
                                                {itemData.map((item) => (
                                                    <ImageListItem key={item.img}>
                                                        <img
                                                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                                            alt={item.title}
                                                            loading="lazy"
                                                        />
                                                    </ImageListItem>
                                                ))}
                                            </ImageList>
                                        </div>
                                    </Typography>
                                </CardContent>

                            </Card>
                        </Box>
                    </div>


                </div>
                <div className=" grid grid-flow-row grid-cols-2 grid-rows-1">
                    <div className=" col-start-1">
                        <Box
                            //border={3} 
                            borderColor="gray"
                            borderRadius={3}
                            backgroundColor='#262523'
                            // boxShadow="10px 10px 10px #ccc" 
                            padding={1}
                            margin='auto'
                            marginTop={1}
                            display='flex'
                            flexDirection={'column'}
                            width="550px"
                            height='100px'
                        // position='absolute'

                        >

                            <h2 style={{ color: 'white', fontSize: '0.8rem', fontWeight: 'bold' }}>Copyright @ 2021 All Rights Reserved</h2>

                        </Box>
                    </div>
                    <div className=" col-start-2 ">
                        <Box
                            //border={3} 
                            borderColor="gray"
                            borderRadius={3}
                            backgroundColor='#262523'
                            // boxShadow="10px 10px 10px #ccc" 
                            padding={1}
                            margin='auto'
                            marginTop={1}
                            display='flex'
                            flexDirection={'column'}
                            width="550px"
                            height='100px'
                        // position='absolute'

                        >
                            {/* <div className="container2">
                            </div> */}
                            <div className="pb-1 " style={{ color: 'white', fontSize: '0.5rem', fontWeight: 'bold', alignItems: 'right' }}>
                                <FacebookIcon className="mr-2" />
                                <InstagramIcon className="mr-2" />
                                <TwitterIcon className="mr-2" />
                                <PinterestIcon className="mr-2" />
                                <YouTubeIcon className="mr-2" />
                            </div>
                            <br></br>

                        </Box>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    }
]
