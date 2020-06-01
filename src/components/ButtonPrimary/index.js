import React from 'react';
import styles from './style.module.css';

export default function (props) {
  return <button className={styles.main_button} style={{background: props.customColor}}>{props.children}</button>
}