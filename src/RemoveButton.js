import {React} from 'react';
import {RemoveButtonCustom} from './creationtodolist/styled';

export default function RemoveButton({storage, setStorage, index,onClick}) {

    const removeCallback = (selectedItemIndex) => {

        storage.pop(selectedItemIndex);
        setStorage([...storage]);
    }
    
    return(
    <div>
        <RemoveButtonCustom onClick={() => {
            removeCallback(index)
            }}
            >x</RemoveButtonCustom> 
    </div> 
    );
}