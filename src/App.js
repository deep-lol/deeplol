import React from 'react';
import './App.css';

import Toolbar from '@material-ui/core/Toolbar';
import RecommenderPage from './RecommenderPage'
import Button from '@material-ui/core/Button';
import {Paper, Grid} from '@material-ui/core';

function App() { 

  return (
    <div className="App">
      {/* TODO: Center align */}
      <Toolbar><h1>Deep LoL</h1 >
      
      <Grid container alignItems="flex-start" justify="flex-end" direction="row">
        {/* <Button color="inherit" style={{justifyContent:"space-between"}}>Donate</Button> */}
        <a href="https://www.paypal.me/deeplol">
        <Button variant="contained"style={{backgroundColor:'rgba(0,0,0)', color:"grey", border:"1px solid", borderRadius:"10px", justifyContent:"space-between"}}>
            Donate!
          </Button>
        </a>
        
      </Grid>
      
      </Toolbar>

      
      <RecommenderPage>

      </RecommenderPage>
    </div>
  );
}

export default App;
