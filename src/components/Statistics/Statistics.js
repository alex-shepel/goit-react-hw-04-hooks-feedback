import s from './Statistics.module.css';
import React from 'react';

const Statistics = props =>
  Object.keys(props).map(key => (
    <span key={key} className={s.item}>
      {key}: {props[key]}
    </span>
  ));

export default Statistics;
