import { FC } from "react";
import styles from "./Input.module.css";
import { ErrorMessage, Field } from "formik";
interface IInput {
  type?: string;
  name: string;
  label: string;
}
export const Input: FC<IInput> = ({ type, name, label }) => {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={name}>{label}:</label>
      <Field id={name} name={name} type={type} />
      <ErrorMessage name={name} component="p" className={styles.error} />
    </div>
  );
};
