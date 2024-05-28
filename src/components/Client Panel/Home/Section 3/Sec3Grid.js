import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";


export default function Sec3Grid() {
  return (
    <div className=" container">
      <br></br>

      <div className="text-center  ">
        {" "}
        <p className=" font-nomal text-sm pb-2 text-[#2ECC71]">
          Real Solution, Real Fast !
        </p>
        <p className=" font-bold text-2xl"> Best Global Logistic Solution </p>
        <p className="">------</p>
      </div>

      <div className=" grid grid-flow-row grid-cols-2 grid-rows-1">
        <div className=" col-start-1">
          <Box
            //border={3} 
            borderColor="gray"
            borderRadius={3}
            backgroundColor='#EAEDED'
            // boxShadow="10px 10px 10px #ccc" 
            padding={2}
            margin='auto'
            marginTop={3}
            display='flex'
            flexDirection={'column'}
            width="692px"
            height='296px'
          // position='absolute'
          >
            <Card sx={{ display: 'flex' }}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="300"
                  image="https://media.istockphoto.com/id/1339057752/photo/a-large-container-cargo-ship-in-motion.jpg?s=1024x1024&w=is&k=20&c=orxd4bJiIEbyQN-Aq3C4bum0IRPbDjpRNCNPd3aFxVQ="
                  alt="Paella dish"
                />
              </Card>

              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" >
                  <h2><b>Air Freight Services</b> </h2>
                  <p>At our Auto Service garage, <br />we are fully appreciate how <br></br>difficult occur it is for<br /> people to find.</p>
                </Typography>
              </CardContent>

            </Card>
            <br />
            <p>Logistic & Transport Solutions Saves Your Time. <span><b>Finds Your Solutions</b></span> </p>
          </Box>

        </div>
        <div className=" col-start-2">
          <Box
            //border={3} 
            borderColor="gray"
            borderRadius={3}
            backgroundColor='#EAEDED'
            // boxShadow="10px 10px 10px #ccc" 
            padding={2}
            margin='auto'
            marginTop={3}
            display='flex'
            flexDirection={'column'}
            width="692px"
            height='320px'
          // position='absolute'
          >
            <Card sx={{ display: 'flex' }}>
              <br />
              <Card sx={{ maxWidth: 490 }}>
                <CardMedia
                  component="img"
                  height="410"
                  image="https://plus.unsplash.com/premium_photo-1678727128617-2d4b6f21226f?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://media.istockphoto.com/id/1339057752/photo/a-large-container-cargo-ship-in-motion.jpg?s=1024x1024&w=is&k=20&c=orxd4bJiIEbyQN-Aq3C4bum0IRPbDjpRNCNPd3aFxVQ="
                  alt="Paella dish"
                />
              </Card>

              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" >
                  <h2><b>Drone Services</b> </h2><br />
                  <p>These are unique and often they differ<br /> from one industry to the other.<br /> Our logistics expertise.</p>
                </Typography>
              </CardContent>

            </Card>
            <br />
            <br />
          </Box>

          <br />


        </div>

      </div>

    </div>
  );
}
