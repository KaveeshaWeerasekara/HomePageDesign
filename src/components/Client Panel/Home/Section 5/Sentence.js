
import { Box } from "@mui/material";
// import './Sentence.css';



export default function Sentence() {

  return (
    <div>
      <Box
        //border={3} 
        borderColor="gray"
        borderRadius={3}

        padding={3}
        margin='auto'
        marginTop={5}
        display='flex'
        flexDirection={'column'}
        width={"80%"}
      >

        <h1 style={{ color: 'black', fontSize: '2.5rem', fontWeight: 'bold' }}>TransMax &nbsp; Logistics</h1>

        <h2 style={{ color: 'black', fontSize: '2rem', fontWeight: 'bold' }}>Around <span style={{ color: 'orange' }}>the World</span> </h2>
        <br />


        <p style={{ color: 'black', fontSize: '1rem' }}>Transmax is the world’s driving worldwide coordinations supplier — we uphold industry and exchange the worldwide trade of merchandise through land transport.</p>
        <br />
        <p style={{ color: 'gray', fontSize: '0.8rem' }}>Our worth added administrations guarantee the progression of products proceeds consistently and supply chains stay lean and streamlined for progress.</p>
        {/* <div 
        style={{ backgroundColor: 'orange', color: 'white', padding: '10px' }}>
          <span>15,350+</span>
          <span>Clients Worldwide</span>
        </div> */}
        <button style={{
          backgroundColor: 'orange',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          cursor: 'pointer',
          fontSize: '1rem',
          marginTop: '1rem',
          width: '200px'
        }}
        >More About Us</button>

      </Box>
    </div>
  );
}
