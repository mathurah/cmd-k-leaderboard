import { Box, IconButton, Text } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import styles from './Modal.module.css';

const Modal = ({ show, Toggle, children }) => {
  return (
    <>
      {show ? (
        <div className={styles.overlay}>
          <div className={styles.modal}>{children}</div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
