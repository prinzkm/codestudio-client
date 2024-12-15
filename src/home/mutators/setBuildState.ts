import { mutatorAction } from 'satcheljs';
import { getHomeStore } from '../store/store';
import { BuildState } from '../store/schema/BuildState';

export const setBuildState = mutatorAction(
    'setBuildState',
    (buildState: BuildState)=> {
        getHomeStore().codeEditorState.buildState = buildState;
    });

