import React from 'react';
import styles from './AddSection.module.css';
import { useState, useContext } from 'react';
import { Store } from '../context/state';
import Button from './Button';
import AddCompanyModal from './AddCompanyModal';

const AddSection = ({ toggleAdd }) => {
  const {
    state: { showAdd: show },
    dispatch,
  } = useContext(Store);

  return (
    <div className={styles.addSectionWrapper}>
      <div className={styles.addSectionContainer}>
        <div className={styles.addSection}>
          <div className={styles.addContainer}>
            <div className={styles.text}>Don't see your favourite app?</div>
            <Button style="add_section" onClick={toggleAdd}>
              Add app
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSection;
