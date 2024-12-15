import React from 'react';
import {observer} from 'mobx-react-lite';

interface BuildStatusViewProps {
    statusMessage:string;
}

export const BuildStatusView =observer((props:BuildStatusViewProps) => {
    return <p>{props.statusMessage}</p>;
});
