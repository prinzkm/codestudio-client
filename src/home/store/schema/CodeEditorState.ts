import { BuildState } from './BuildState';

export interface CodeEditorState {
    code: string;
    buildState: BuildState;
    supportedLanguages: string[];    
}