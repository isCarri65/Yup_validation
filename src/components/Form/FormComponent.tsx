import styles from "./FormComponent.module.css";
import { object, ref, string } from "yup";
import { Formik, Form } from "formik";
import Swal from "sweetalert2";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

interface IValuesForm {
  name: string;
  email: string;
  password: string;
  check_password: string;
}

const schemaValuesForm = object({
  name: string()
    .min(3, "el nombre tiene que tener al menos 3 caracteres")
    .required("El nombre es obligatorio"),
  email: string()
    .email("El email no tiene un formato válido")
    .required("El email es un dato obligatorio"),
  password: string()
    .min(6, "debe de contener minimo 6 caracteres")
    .required("Escriba una contraseña"),
  check_password: string()
    .oneOf([ref("password")], "Las contraseñas no coinciden")
    .required("Debes confirmar la contraseña"),
});
const valuesForm: IValuesForm = {
  name: "",
  email: "",
  password: "",
  check_password: "",
};
export const FormComponent = () => {
  return (
    <div>
      <Formik
        initialValues={valuesForm}
        validationSchema={schemaValuesForm}
        validateOnChange={true}
        onSubmit={(values, { resetForm }) => {
          Swal.fire({
            title: "¡Formulario enviado!",
            text: "Tu información ha sido guardada correctamente.",
            icon: "success",
            confirmButtonText: "Aceptar",
          });
          console.log("Datos enviados:", values);
          resetForm();
        }}
      >
        {({ isValid }) => (
          <Form className={styles.formContainer}>
            <h2>Registro</h2>

            <Input label="Nombre" name="name" type="text" />
            <Input label="Email" name="email" type="email" />
            <Input label="Contraseña" name="password" type="password" />
            <Input
              label="Confirmar Contraseña"
              name="check_password"
              type="password"
            />

            <Button isValid={isValid} />
          </Form>
        )}
      </Formik>
    </div>
  );
};
