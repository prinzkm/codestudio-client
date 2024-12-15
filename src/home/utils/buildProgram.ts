import { callBuildService } from '../service/callBuildService';
import { getHomeStore } from '../store/store';
import { setBuildState } from '../mutators/setBuildState';
import { BuildState } from '../store/schema/BuildState';

async function buildProgram(): Promise<void> {

    const {code, buildState} = getHomeStore().codeEditorState;

    if (buildState === BuildState.InProgress) {
        console.log('Build already in progress');
        return;
    }
    
    setBuildState(BuildState.InProgress);

    try {
        const result = await callBuildService(code);
        console.log('Build successful:', result);
        setBuildState(BuildState.Success);
    } catch (error) {
        setBuildState(BuildState.Error);
        console.error('Build failed:', error);
    }
}

export { buildProgram };