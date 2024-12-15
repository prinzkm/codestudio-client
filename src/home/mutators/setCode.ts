import { mutatorAction } from 'satcheljs';
import { getHomeStore } from '../store/store';

export const setCode = mutatorAction(
    'setCode',
    (code: string)=> {
        getHomeStore().codeEditorState.code = code;
    });

