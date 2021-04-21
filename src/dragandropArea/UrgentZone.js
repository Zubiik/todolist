import {React, useState} from 'react';
import {BodyCustom} from './styled';

export default function UrgentZone({urgentStorage}) {

  return (

    <BodyCustom>
      <p>Liste des task urgentes</p>
      {
        urgentStorage.map((task,index) => {
         
             return(
            <div>
              <div>{task.title}</div>
              <div>{task.text}</div>

            </div>
           
          )
          
         
        })
      }
    </BodyCustom> 
  );
}
