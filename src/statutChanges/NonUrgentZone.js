import {React} from 'react';
import {BodyCustom, TaskCustom,TitleCustom,ChangeStatutButton} from './styled';

export default function NonUrgentZone({storage}) {

  const ChangeTaskStatut = (task,index) => {
task.statut= "default") 



console.log(task.statut);
  }

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
              <ChangeStatutButton onClick={ () => ChangeTaskStatut(task,index)

              }>Reset</ChangeStatutButton>
            </TaskCustom>
          )
         }
         return null;
       
        })
      }
    </BodyCustom> 
  );
}
