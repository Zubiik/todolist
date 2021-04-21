import {React, useState} from 'react';
import {BodyCustom} from './styled';

export default function UrgentZone({storage}) {
const [urgent, setUrgent] = useState([]);
const [nonUrgent,setNonUrgent] = useState([]);



console.log(storage,"o");

  return (

    <BodyCustom>
      
    </BodyCustom> 
  );
}
