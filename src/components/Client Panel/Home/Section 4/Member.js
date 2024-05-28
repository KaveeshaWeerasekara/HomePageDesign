import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";


export default function Member() {
  return (
    <div className=" container">
      <br></br>

      <div className="text-center  ">
        {" "}
        <p className=" font-nomal text-sm pb-2 text-[#2ECC71]">
          Latest News
        </p>
        <p className=" font-bold text-2xl"> Integer Congue </p>
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
            padding={1}
            margin='auto'
            marginTop={3}
            display='flex'
            flexDirection={'column'}
            width="692px"
            height='280px'
          // position='absolute'
          >
            <Card sx={{ display: 'flex' }}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="300"
                  image="https://media.istockphoto.com/id/1380261731/photo/truck-on-the-road.jpg?s=2048x2048&w=is&k=20&c=IeAr072f7VrsnyjFLaqzlItKoYc0iXXaqTDllrdOmXI="
                  alt="Lorry"
                />
              </Card>

              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" >
                  <h2><b>Lorem Ipsum</b> </h2><br />
                  <p>Lorem Ipsum is simply <br />dummy text of the printing and <br /> typesetting industry.</p>
                </Typography>
              </CardContent>

            </Card>
          </Box>

        </div>
        <div className=" col-start-2">
          <Box
            //border={3} 
            borderColor="gray"
            borderRadius={3}
            backgroundColor='#EAEDED'
            // boxShadow="10px 10px 10px #ccc" 
            padding={1}
            margin='auto'
            marginTop={3}
            display='flex'
            flexDirection={'column'}
            width="692px"
            height='280px'
          // position='absolute'
          >
            <Card sx={{ display: 'flex' }}>
              <br />
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="300"
                  image="https://media.istockphoto.com/id/1431499957/photo/container-port-aerial-look.jpg?s=2048x2048&w=is&k=20&c=u275y013QsaM86VP-tCIYQhiAmefdzL0KwWuiy6m5hk="
                  alt="Paella dish"
                />
              </Card>

              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" >
                  <h2><b>Lorem Ipsum</b> </h2><br />
                  <p>Lorem Ipsum is simply <br />dummy text of the printing and <br /> typesetting industry.</p>
                </Typography>
              </CardContent>

            </Card>
            <br />
            <br />
          </Box>

          <br />


        </div>

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
            marginTop={2}
            display='flex'
            flexDirection={'column'}
            width="692px"
            height='280px'
          // position='absolute'
          >
            <Card sx={{ display: 'flex' }}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="300"
                  image="https://media.istockphoto.com/id/1461043772/photo/jet-wing.jpg?s=2048x2048&w=is&k=20&c=2dC8PBu2Ls5L1hPAhgvR9h7hv2xD0zjAwrbss3N7nII="
                  alt="Paella dish"
                />
              </Card>

              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" >
                  <h2><b>Lorem Ipsum</b> </h2><br />
                  <p>Lorem Ipsum is simply <br />dummy text of the printing and <br /> typesetting industry.</p>
                </Typography>
              </CardContent>

            </Card>
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
            marginTop={2}
            display='flex'
            flexDirection={'column'}
            width="692px"
            height='280px'
          // position='absolute'
          >
            <Card sx={{ display: 'flex' }}>
              <br />
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="300"
                  image="https://media.istockphoto.com/id/1465124899/photo/amtrak-coast-starlight-train-at-sunset-time.jpg?s=2048x2048&w=is&k=20&c=ZhgXFqqtxQJQt3ZOk4L8BRnFwr25DQewcxcVNW3iYYI="
                  alt="Paella dish"
                />
              </Card>

              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" >
                  <h2><b>Lorem Ipsum</b> </h2><br />
                  <p>Lorem Ipsum is simply <br />dummy text of the printing and <br /> typesetting industry.</p>
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
