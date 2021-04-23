import {React} from 'react';
import {BodyCustom, TaskCustom,TitleCustom} from './styled';

export default function UrgentZone({storage}) {
console.log(storage);

  return (

    <BodyCustom>
      <TitleCustom>Liste des task urgentes</TitleCustom>
      {
        storage.map((task,index) => {
          console.log(task.statut === "urgent");

         if (task.statut === "urgent") {

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
