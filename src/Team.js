import React from "react";
import PlayerSelector from './PlayerSelector';
// import axios from 'axios';
import {Grid} from '@material-ui/core'

  const Team = (props)  => {

    function makePlayerSelectors() {
      if (props.id ==='allies') {
        return (
          <Grid container direction="row" spacing={4} alignItems="center"
          justify="center" >
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <PlayerSelector champNames={props.champNames} callback={props.callbacks[0]}></PlayerSelector>
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <PlayerSelector champNames={props.champNames} callback={props.callbacks[1]}></PlayerSelector>
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <PlayerSelector champNames={props.champNames} callback={props.callbacks[2]}></PlayerSelector>
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <PlayerSelector champNames={props.champNames} callback={props.callbacks[3]}></PlayerSelector>
            </Grid>
          </Grid>
          )
      } else if (props.id === 'enemies') {
        return (<Grid container direction="row" alignItems="center"
        justify="center" spacing={4} >
        <Grid item xs={12} sm={2} md={2} lg={2}>
          <PlayerSelector champNames={props.champNames} callback={props.callbacks[0]}></PlayerSelector>
        </Grid>
        <Grid item xs={12} sm={2} md={2} lg={2}>
          <PlayerSelector champNames={props.champNames} callback={props.callbacks[1]}></PlayerSelector>
        </Grid>
        <Grid item xs={12} sm={2} md={2} lg={2}>
          <PlayerSelector champNames={props.champNames} callback={props.callbacks[2]}></PlayerSelector>
        </Grid>
        <Grid item xs={12} sm={2} md={2} lg={2}>
          <PlayerSelector champNames={props.champNames} callback={props.callbacks[3]}></PlayerSelector>
        </Grid>
        <Grid item xs={12} sm={2} md={2} lg={2}>
          <PlayerSelector champNames={props.champNames} callback={props.callbacks[4]}></PlayerSelector>
        </Grid>
      </Grid>)
      } else {
        return <div></div>
      }
    }

    return (
       <div>

         {makePlayerSelectors()}

      </div>
    )
  }
  
  export default  Team;