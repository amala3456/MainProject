import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const AdminDash = () => {
  return (

    <div style={{padding:"30px"}}>
          <Box style={{paddingBottom:"30px"}}>
      <Typography sx={{fontWeight:"300",fontSize:"40px",fontFamily:"sora,sans-seriff"}}>BATCHES</Typography>
      </Box>
      <div className="row">
        <div className="col-sm-6">
          <div className="card mb-4" style={{ border: '1.4px solid black' }}>
            <div className="card-body">
              <h5 className="card-title">KKEM March CSA</h5>
              <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, autem.</p>
              <Button style={{ width:"20%", borderRadius:"11px",borderColor:"#009B81",backgroundColor: '#009B81', color: 'white' }}><Link to={'/sCSA'} style={{ textDecoration: "none", color: 'white' }}>Details</Link></Button>
            </div>
          </div>
        </div>
        
        <div className="col-sm-6">
          <div className="card mb-4" style={{ border: '1.4px solid black' }}>
            <div className="card-body">
              <h5 className="card-title">KKEM March DSA</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <Button style={{ width:"20%", borderRadius:"11px",borderColor:"#009B81",backgroundColor: '#009B81', color: 'white' }}><Link to={''} style={{ textDecoration: "none", color: 'white' }}>Details</Link></Button>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6">
          <div className="card mb-4" style={{ border: '1.4px solid black' }}>
            <div className="card-body">
              <h5 className="card-title">KKEM March MLAI</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <Button style={{ width:"20%", borderRadius:"11px",borderColor:"#009B81",backgroundColor: '#009B81', color: 'white' }}><Link to={''} style={{ textDecoration: "none", color: 'white' }}>Details</Link></Button>
            </div>
          </div>
        </div>
        
        <div className="col-sm-6">
          <div className="card mb-4" style={{ border: '1.4px solid black' }}>
            <div className="card-body">
              <h5 className="card-title">KKEM March FSD</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <Button style={{ width:"20%", borderRadius:"11px",borderColor:"#009B81",backgroundColor: '#009B81', color: 'white' }}><Link to={''} style={{ textDecoration: "none", color: 'white' }}>Details</Link></Button>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6">
          <div className="card mb-4" style={{ border: '1.4px solid black' }}>
            <div className="card-body">
              <h5 className="card-title">KKEM March ST</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <Button style={{ width:"20%", borderRadius:"11px",borderColor:"#009B81",backgroundColor: '#009B81', color: 'white' }}><Link to={''} style={{ textDecoration: "none", color: 'white' }}>Details</Link></Button>
            </div>
          </div>
        </div>
        
        <div className="col-sm-6">
          <div className="card mb-4" style={{ border: '1.4px solid black' }}>
            <div className="card-body">
              <h5 className="card-title">KKEM March ST</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <Button style={{ width:"20%", borderRadius:"11px",borderColor:"#009B81",backgroundColor: '#009B81', color: 'white' }}><Link to={''} style={{ textDecoration: "none", color: 'white' }}>Details</Link></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDash;
