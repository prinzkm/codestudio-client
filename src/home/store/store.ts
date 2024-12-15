import { createStore } from 'satcheljs';
import { CodeEditorState } from './schema/CodeEditorState';
import { BuildState } from './schema/BuildState';

const defaultCodeEditorState: CodeEditorState = { code: '', buildState: BuildState.None , supportedLanguages: ['C++','C'] };

export const getHomeStore = createStore(
    'homeStore',
    { codeEditorState: defaultCodeEditorState }
);