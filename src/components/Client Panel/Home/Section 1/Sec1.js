
import './Sec1.css';
import { Box, Card, CardContent, InputLabel, Typography } from "@mui/material";

const labelStyles = {
  marginBottom: 2,
  marginTop: 2,
  fontSize: '24px',
  fontWeight: 'bold',

};



export default function Sec1() {
  return (

    <div className="header-grid-container">
      <div className=" grid grid-flow-row grid-cols-2 grid-rows-1">

        <div className=" col-start-1">
          <Box
            borderColor="gray"
            borderRadius={3}
            backgroundColor='#fff'
            //boxShadow="10px 10px 10px #ccc"
            padding={3}
            margin='auto'
            marginTop={5}
            display='flex'
            flexDirection={'column'}
            width="550px"
            height='471px'
            // position='absolute'
            marginLeft={0}
            marginRight="auto"

          >
            <h5><vr />Logistics</h5>
            <h1 style={{ color: 'black', fontSize: '2.5rem', fontWeight: 'bold' }}>Best &nbsp; Shipping</h1>

            <h2 style={{ color: 'orange', fontSize: '2rem', fontWeight: 'bold' }}>Partner  </h2>
            <p>Amet, tempus egestas facilisis volutpat viverra molestie lobortis posuere maecenas.</p>
            <br />
            <br />
            <br />
            <button style={{
              backgroundColor: '#FFA500',
              border: 'none',
              padding: '10px 20px',
              color: 'white',
              cursor: 'pointer',
              width: '200px'
            }}>
              Discover More
            </button>

          </Box>
        </div>

      </div>
      <div className="image-container">
      </div>
    </div>

  );
}
