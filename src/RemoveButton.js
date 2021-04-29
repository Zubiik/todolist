import {React} from 'react';
import {RemoveButtonCustom} from './creationtodolist/styled';

export default function RemoveButton({storage, setStorage, index}) {

    const removeCallback = (index) => {
    var copyStorage = storage
    copyStorage.filter((index) => {
        
    setStorage([...copyStorage]);
        console.log(storage);
    });
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