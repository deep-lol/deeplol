import React, { useState} from "react";
// import axios from 'axios';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

  const PlayerSelector = (props)  => {
    // const  [champ,setChamp] = useState("")
    const  [champImgSrc,setChampImgSrc] = useState("")


    function MakeItem(X) {
      return <option>{X}</option>;
    };

    function logChange(e) {
      props.callback(e.target.value)
      setChampImgSrc('http://ddragon.leagueoflegends.com/cdn/10.1.1/img/champion/' + e.target.value + '.png')
    }

    function getImage() {
        if (champImgSrc === "") {
            return (<div></div>)
        } else {
            return (<img src={champImgSrc} alt="A Champion"  />)
        }
    }
    

    return (
       <div>
           {/* TODO: Give better alt */}
          <div>
            <FormControl>
              <InputLabel></InputLabel>
              <NativeSelect onChange={logChange}>
                <option disabled selected value></option>
                {props.champNames.map(MakeItem)}
              </NativeSelect>
            </FormControl>
           
         </div>
         {getImage()}
        </div>
    )
  }
  
  export default  PlayerSelector;