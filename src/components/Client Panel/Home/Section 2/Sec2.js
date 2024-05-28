import { Box, Card, CardMedia, InputLabel, TextField } from "@mui/material";
import img from '../../../../assets/thinking.png'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const labelStyles = {
  marginBottom: 2,
  marginTop: 2,
  fontSize: '24px',
  fontWeight: 'bold',

};


export default function Sec2() {
  return (
    <div className=" container">
      <br></br>
      <div className=" grid grid-flow-row grid-cols-2 grid-rows-1">
        <div className=" col-start-1">
          <Box
            //border={3} 
            borderColor="gray"
            borderRadius={3}
            backgroundColor='#fff'
            // boxShadow="10px 10px 10px #ccc" 
            padding={3}
            margin='auto'
            marginTop={5}
            display='flex'
            flexDirection={'column'}
            width="550px"
            height='471px'
          // position='absolute'

          >
            <InputLabel sx={labelStyles}>
              Trusted Clients
            </InputLabel>
            <p>Lorem Ipsum Dolor sit amet consectuur  make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently </p>
            <br />
            <Card sx={{ maxWidth: 400 }}>
              <CardMedia
                component="img"
                height="300"
                image={img}
                alt="Paella dish"
              />
            </Card>
            {/* </div> */}



          </Box>
        </div>
        <div className=" col-start-2 ">
          <Box
            //border={3} 
            borderColor="gray"
            borderRadius={3}
            backgroundColor='#fff'
            // boxShadow="10px 10px 10px #ccc" 
            padding={3}
            margin='auto'
            marginTop={5}
            display='flex'
            flexDirection={'column'}
            width="550px"
            height='471px'
          // position='absolute'

          >
            <div className="container2">
              <InputLabel sx={labelStyles}>
                Why Choose Us
              </InputLabel>
              <p>Lorem Ipsum Dolor sit amet consectuur  make a type specimen</p >
              <br />
              <hr />
              <TextField id="standard-basic" label=" dummy text of the printing and typesetting industry." variant="standard" sx={{ width: '400px' }} /> &nbsp; <Fab size="small" color="primary" aria-label="add">
                <AddIcon />
              </Fab>
              <br />
              <hr />
              <TextField id="standard-basic" label=" dummy text of the printing and typesetting industry." variant="standard" sx={{ width: '400px' }} /> &nbsp; <Fab size="small" color="primary" aria-label="add">
                <AddIcon />
              </Fab>
              <br />
              <hr />
              <TextField id="standard-basic" label=" dummy text of the printing and typesetting industry." variant="standard" sx={{ width: '400px' }} /> &nbsp; <Fab size="small" color="primary" aria-label="add">
                <AddIcon />
              </Fab>
              <br />
              <hr />
              <TextField id="standard-basic" label=" dummy text of the printing and typesetting industry." variant="standard" sx={{ width: '400px' }} /> &nbsp; <Fab size="small" color="primary" aria-label="add">
                <AddIcon />
              </Fab>
            </div>


          </Box>
        </div>
      </div>
      <br></br>
    </div>
  );
}
