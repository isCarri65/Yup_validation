import { FC } from "react";
import styles from "./Button.module.css";
interface IButton {
  isValid: boolean;
}
export const Button: FC<IButton> = ({ isValid }) => {
  return (
    <button type="submit" className={styles.submitButton} disabled={!isValid}>
      Enviar
    </button>
  );
};
