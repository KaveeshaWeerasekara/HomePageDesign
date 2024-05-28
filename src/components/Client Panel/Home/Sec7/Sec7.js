import { Box, Card, CardContent, Typography } from "@mui/material";

export default function Sec7() {


  return (
    <div className=" container">


      <div className=" grid grid-flow-row grid-cols-4 grid-rows-1">
        <div className=" col-start-1">
          <Box
            backgroundColor='#EAEDED'
            padding={2}
            margin='auto'
            marginTop={3}
            display='flex'
            flexDirection={'column'}
            width="200"
            height='150px'
          // position='absolute'
          >
            <Card sx={{ display: 'flex', backgroundColor: '#EAEDED' }}>
              <Card sx={{ maxWidth: 300, backgroundColor: '#EAEDED' }}>
                <CardContent sx={{ flex: '1 0 auto', backgroundColor: '#EAEDED' }}>
                  <Typography component="div" >
                    <h2 style={{ color: '#3498DB', fontSize: '2rem', fontWeight: 'bold', alignItems: 'center' }}><b>890</b> </h2>

                  </Typography>
                </CardContent>
              </Card>

              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" >
                  <h2 style={{ color: '#3498DB', fontSize: '1rem', fontWeight: 'bold', alignItems: 'center' }}><b>Delivered<br />Packages</b> </h2>

                </Typography>
              </CardContent>

            </Card>
          </Box>
        </div>
        <div className=" col-start-2">
          <Box
            backgroundColor='#EAEDED'
            // boxShadow="10px 10px 10px #ccc" 
            padding={2}
            margin='auto'
            marginTop={3}
            display='flex'
            flexDirection={'column'}
            width="350px"
            height='150px'
          // position='absolute'
          >
            <Card sx={{ display: 'flex', backgroundColor: '#EAEDED' }}>
              <Card sx={{ maxWidth: 220, backgroundColor: '#EAEDED' }}>
                <CardContent sx={{ flex: '1 0 auto', backgroundColor: '#EAEDED' }}>
                  <Typography component="div" >
                    <h2 style={{ color: '#3498DB', fontSize: '2rem', fontWeight: 'bold', alignItems: 'center' }}><b>137</b> </h2>

                  </Typography>
                </CardContent>
              </Card>

              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" >
                  <h2 style={{ color: '#3498DB', fontSize: '1rem', fontWeight: 'bold', alignItems: 'center' }}><b>Countries<br />Covered</b> </h2>

                </Typography>
              </CardContent>

            </Card>
          </Box>

        </div>
        <div className=" col-start-3">
          <Box
            backgroundColor='#EAEDED'
            // boxShadow="10px 10px 10px #ccc" 
            padding={2}
            margin='auto'
            marginTop={3}
            display='flex'
            flexDirection={'column'}
            width="350px"
            height='150px'
          // position='absolute'
          >
            <Card sx={{ display: 'flex', backgroundColor: '#EAEDED' }}>
              <Card sx={{ maxWidth: 200, backgroundColor: '#EAEDED' }}>
                <CardContent sx={{ flex: '1 0 auto', backgroundColor: '#EAEDED' }}>
                  <Typography component="div" >
                    <h2 style={{ color: '#3498DB', fontSize: '2rem', fontWeight: 'bold', alignItems: 'center' }}><b>740</b> </h2>

                  </Typography>
                </CardContent>
              </Card>

              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" >
                  <h2 style={{ color: '#3498DB', fontSize: '1rem', fontWeight: 'bold', alignItems: 'center' }}><b>Tons<br /> of Goods</b> </h2>

                </Typography>
              </CardContent>

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
            width="350px"
            height='150px'
          // position='absolute'
          >
            <Card sx={{ display: 'flex', backgroundColor: '#EAEDED' }}>
              <Card sx={{ maxWidth: 200, backgroundColor: '#EAEDED' }}>
                <CardContent sx={{ flex: '1 0 auto', backgroundColor: '#EAEDED' }}>
                  <Typography component="div" >
                    <h2 style={{ color: '#3498DB', fontSize: '2rem', fontWeight: 'bold', alignItems: 'center' }}><b>600</b> </h2>

                  </Typography>
                </CardContent>
              </Card>

              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" >
                  <h2 style={{ color: '#3498DB', fontSize: '1rem', fontWeight: 'bold', alignItems: 'center' }}><b>Satisfied <br />Clients</b> </h2>

                </Typography>
              </CardContent>

            </Card>
          </Box>
        </div>

      </div>

    </div>
  );
}
