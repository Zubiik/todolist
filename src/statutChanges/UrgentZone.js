import {React} from 'react';
import {BodyCustom, TaskCustom,TitleCustom, ChangeStatutButton} from './styled';

export default function UrgentZone({storage}) {

  return (

    <BodyCustom>
      <TitleCustom>Liste des task urgentes</TitleCustom>
      {
        storage.map((task,index) => {

         if (task.statut === "urgent") {

             return(
            <TaskCustom>
              <div>{task.title}</div>
              <div>{task.text}</div>
              <ChangeStatutButton>Reset</ChangeStatutButton>
            </TaskCustom>
          )
         }
         return null;
        })
      }
    </BodyCustom> 
  );
}
