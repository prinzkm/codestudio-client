import React from 'react';
import  './HomeView.scss';
import {observer} from 'mobx-react-lite';
import { getHomeStore } from '../store/store';
import { setCode } from '../mutators/setCode';
import { BuildState } from '../store/schema/BuildState';
import { BuildStatusView} from './BuildStatusView';
import { buildProgram } from '../utils/buildProgram';

export const HomeView = observer(()=> {

  const { codeEditorState } = getHomeStore();

  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  },[]);

  const handleSubmit = React.useCallback(() => {
    buildProgram();
  },[]);

  const getStatusMessage = React.useCallback(() => {  
    switch(codeEditorState.buildState){
      case BuildState.Success:
        return 'Build Success';
      case BuildState.Error:
        return 'Build Fail';
      case BuildState.InProgress:
        return 'Build In Progress';
      default:
        return '';
    }
  },[]);

  return (
    <div>
      <h1 className='header'>Code Studio</h1>
      <select>
        {
          codeEditorState.supportedLanguages.map((language) => {
            return <option  value={language}>{language}</option>
          })
        }
      </select>
      <textarea className='textarea' placeholder='Type something here...' value={codeEditorState.code} onChange={handleChange}></textarea>
      <button className='button' disabled= {codeEditorState.buildState == BuildState.InProgress || codeEditorState.code.trim() === ''} onClick={handleSubmit}>Submit</button>
      <BuildStatusView statusMessage={getStatusMessage()}/>
    </div>
  );
})
