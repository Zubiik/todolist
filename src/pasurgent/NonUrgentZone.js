import {React} from 'react';
import {BodyCustom, TaskCustom,TitleCustom} from './styled';

export default function NonUrgentZone({storage}) {

  return (

    <BodyCustom>
      <TitleCustom>Liste des task peu urgentes</TitleCustom>
      {
        storage.map((task,index) => {
         if (task.statut === "nonUrgent") {

             return(
            <TaskCustom>
              <div>{task.title}</div>
              <div>{task.text}</div>

            </TaskCustom>
          )
         }
         return null;
       
        })
      }
    </BodyCustom> 
  );
}
