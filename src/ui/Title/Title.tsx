import React from 'react';
import styles from './Title.module.css'

type TitlePropsType = {
  title: string
}

export const Title = (props: TitlePropsType) => {
  return (
    <h1 className={styles.title}>{props.title}</h1>
  );
};