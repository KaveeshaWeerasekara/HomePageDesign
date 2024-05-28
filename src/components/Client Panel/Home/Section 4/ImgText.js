import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";


export default function ImgText() {
  return (
    <div>
      <div className="  static filter-none">
        <div className=" container">


          <div className=" grid grid-flow-row grid-cols-5 grid-rows-1">
            <div className=" col-start-1">
              <Box
                backgroundColor='#EAEDED'
                // boxShadow="10px 10px 10px #ccc" 
                padding={2}
                margin='auto'
                marginTop={3}
                display='flex'
                flexDirection={'column'}
                width="200"
                height='250px'
              // position='absolute'
              >
                <Card sx={{ display: 'flex' }}>
                  <Card sx={{ maxWidth: 300 }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image="https://media.istockphoto.com/id/1152129584/vector/building-logo-design-in-modern-graphic-style.jpg?s=2048x2048&w=is&k=20&c=kOAU2HIhtAibLhUBG9TDmSIuYpe6_BI_W9Xn366_Blg="
                      alt="Paella dish"
                    />
                  </Card>
                </Card>
              </Box>
            </div>
            <div className=" col-start-2">
              <Box
                backgroundColor='#EAEDED'
                padding={2}
                margin='auto'
                marginTop={3}
                display='flex'
                flexDirection={'column'}
                width="200"
                height='250px'
              >
                <Card sx={{ display: 'flex' }}>
                  <Card sx={{ maxWidth: 300 }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image="https://media.istockphoto.com/id/1141211903/vector/arrow-icon-isolated-on-white-background-vector-illustration-eps.jpg?s=2048x2048&w=is&k=20&c=51mtgeE6Qs9R2IH1JVr7u4VdnVYLDy_9SE4ahUElZhg="
                      alt="Paella dish"
                    />
                  </Card>
                </Card>
              </Box>
            </div>
            <div className=" col-start-3">
              <Box
                backgroundColor='#EAEDED'
                padding={2}
                margin='auto'
                marginTop={3}
                display='flex'
                flexDirection={'column'}
                width="200"
                height='250px'
              >
                <Card sx={{ display: 'flex' }}>
                  <Card sx={{ maxWidth: 300 }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image="https://media.istockphoto.com/id/1049801650/vector/vector-logo-letters-xl-lines.jpg?s=2048x2048&w=is&k=20&c=k58WlFBLmntF_3nt4hCDYaPTWwCi8SrEysVmPxdMn54="
                      alt="Paella dish"
                    />
                  </Card>
                </Card>
              </Box>
            </div>
            <div className=" col-start-4">
              <Box
                backgroundColor='#EAEDED'
                padding={2}
                margin='auto'
                marginTop={3}
                display='flex'
                flexDirection={'column'}
                width="200"
                height='250px'
              >
                <Card sx={{ display: 'flex' }}>
                  <Card sx={{ maxWidth: 300 }}>
                    <CardMedia
                      component="img"
                      height="400"
                      image="https://media.istockphoto.com/id/1141211903/vector/arrow-icon-isolated-on-white-background-vector-illustration-eps.jpg?s=2048x2048&w=is&k=20&c=51mtgeE6Qs9R2IH1JVr7u4VdnVYLDy_9SE4ahUElZhg="
                      alt="Paella dish"
                    />
                  </Card>
                </Card>
              </Box>
            </div>
            <div className=" col-start-5">
              <Box
                backgroundColor='#EAEDED'
                padding={2}
                margin='auto'
                marginTop={3}
                display='flex'
                flexDirection={'column'}
                width="200"
                height='250px'
              // position='absolute'
              >
                <Card sx={{ display: 'flex' }}>
                  <Card sx={{ maxWidth: 300 }}>
                    <CardMedia
                      component="img"
                      height="400"
                      image="https://media.istockphoto.com/id/1410227281/vector/logo-symbol.jpg?s=2048x2048&w=is&k=20&c=C5XBp3Y7MJHq9HwoF1f8ZIhNI-aHe8xlCNnljolbhlA="
                      alt="Paella dish"
                    />
                  </Card>
                </Card>
              </Box>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
