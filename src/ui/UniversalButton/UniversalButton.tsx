import React from 'react';
import {CalcStatusType} from '../../bll/reducers/calcReducer';
import  styles from './UniversalButton.module.css'

//component
export const UniversalButton = (props: ButtonPropsType) => {
  return (
    <button className={styles.button} onClick={props.callback} disabled={props.status === 'loading'}>{props.title}</button>
  );
}

//types
type ButtonPropsType = {
  title: string
  status: CalcStatusType
  callback: () => void
}