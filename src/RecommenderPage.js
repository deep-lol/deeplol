import React, { useState, useEffect} from "react";
import axios from 'axios';
import Team from './Team';
import RecommendedChamp from './RecommendedChamp';
import {Paper, Grid} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';


  const RecommenderPage = ()  => {
    const  [champions,setChampions ]= useState({})
    const  [recommended,setRecommended ]= useState([])
    const  [champNames,setChampNames ]= useState([])
    const  [ally1, setAlly1] = useState("")
    const  [ally2, setAlly2] = useState("")
    const  [ally3, setAlly3] = useState("")
    const  [ally4, setAlly4] = useState("")
    const  [enemy1, setEnemy1] = useState("")
    const  [enemy2, setEnemy2] = useState("")
    const  [enemy3, setEnemy3] = useState("")
    const  [enemy4, setEnemy4] = useState("")
    const  [enemy5, setEnemy5] = useState("")

    



    async function fetchChampions() {
      let response = await fetch('https://ddragon.leagueoflegends.com/cdn/10.1.1/data/en_US/champion.json')
      response = await response.json()      
      setChampions(response.data)
      setChampNames(Object.keys(response.data))
    }

    async function compileTeams() {
      let allies = [ally1, ally2, ally3, ally4]
      let enemies = [enemy1, enemy2, enemy3, enemy4, enemy5]

      allies = allies.filter(function (el) {
        return el !== ""
      })
      enemies = enemies.filter(function (el) {
        return el !== ""
      })
      allies = Array.from(new Set(allies))
      enemies = Array.from(new Set(enemies))

      let allyIds = []
      let enemyIds = []

      let ally
      for (ally in allies) {
        allyIds.push(champions[allies[ally]].key)
      }
      let enemy
      for (enemy in enemies) {
        enemyIds.push(champions[enemies[enemy]].key)
      }

      const response = await axios.post("https://deeplol-api.herokuapp.com/recommend",
            {body: {allies: allyIds, enemies: enemyIds}, crossdomain: true, mode: 'cors'})

      setRecommended(response.data)

    }

    function MakeRecommendedItems(champId) {
      let i;
      let j;
      for (i in champions) {
        if (champions[i]['key'] == champId) {
          j = i
        }
      }
      return <Grid item xs={12}>
              <Paper style={{backgroundColor:'rgba(75,83,83,0.8)', borderStyle: "solid"}}><b>#{recommended.indexOf(champId)+1}</b><hr/><RecommendedChamp champId={champId} champInfo={champions[j]}></RecommendedChamp></Paper>
            </Grid>;
    };


    useEffect(() => {
      fetchChampions();
    }, []);


    return (
       <div>

        


         <Grid container spacing={3}>

        <Grid item xs={12}>
        <Paper style={{backgroundColor:'rgba(75,83,83,0.8)', borderStyle: 'solid', borderRadius:"10px", margin:"10px"}}>

          <Grid container>
            
            <Grid item xs={12} >
            <h2>Allies</h2>
            <Team champNames={champNames} id='allies' callbacks={[setAlly1, setAlly2, setAlly3, setAlly4]}></Team>
            </Grid>

            <Grid item xs={12} style={{margin:25}}>
            <h2>Enemies</h2>
            <Team champNames={champNames} id='enemies' callbacks={[setEnemy1, setEnemy2, setEnemy3, setEnemy4, setEnemy5]}></Team>
            </Grid>

          </Grid>

        </Paper>
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" onClick={compileTeams} style={{spacing:"3", backgroundColor:'rgba(220,220,220,0.6)', color:"black", border:"2px solid", borderRadius:"10px"}}>
            Recommend!
          </Button>
          {/* <Fab variant="extended" aria-label="like" onClick={compileTeams} style={{spacing:"3", backgroundColor:'rgba(191,211,211,0.85)', border:"3px solid"}}>
          Recommend!
          </Fab> */}
        </Grid>
        
          
        <Grid item>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}
          >
            {/* <Grid item xs={3} style={{backgroundColor:"#123456", height:'100%'}}></Grid> */}

            <Grid item xs={6} xl={4} style={{background:"rgba(12,34,56,0.5)", borderRadius:"10px"}}>
              <Grid container spacing={3} justify="center"> 
                {recommended.map(MakeRecommendedItems)}
              </Grid>
            </Grid>

            {/* <Grid item xs={3} style={{backgroundColor:"#123456"}}></Grid> */}


          </Grid>
        </Grid>


          </Grid>
        </div>
    )
  }
  
  export default  RecommenderPage;