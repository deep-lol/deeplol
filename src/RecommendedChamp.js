import React from "react";
import {Grid} from '@material-ui/core'

  const RecommendedChamp = (props)  => {


    return (
       <div>
         <Grid container>
            <Grid item xs={3}>
              <img src={'http://ddragon.leagueoflegends.com/cdn/10.1.1/img/champion/' + props.champInfo['id'] + '.png'} alt="" style={{width:"75%"}}></img>
            </Grid>
            <Grid item xs={9}>
              {props.champInfo['name']}
            </Grid>
         </Grid>       

      </div>
    )
  }
  
  export default  RecommendedChamp;