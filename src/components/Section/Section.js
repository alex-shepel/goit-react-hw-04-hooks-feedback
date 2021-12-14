import React from 'react';
import s from './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <section className={s.section}>
    <h2>{title}</h2>
    <div>{children}</div>
  </section>
);

export default Section;

Section.propTypes = {
  children: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};
