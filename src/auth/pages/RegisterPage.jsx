import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/thunks";

const formData = {
  email: "",
  password: "",
  displayName: "",
};

const formValidations = {
  email: [(value) => value.includes("@"), "El correo debe de tener un @"],
  password: [
    (value) => value.length >= 6,
    "La contrasena debe de tener mas de 6 letras",
  ],
  displayName: [(value) => value.length >= 1, "El nombre es obligatorio"],
};

export const RegisterPage = () => {
  const dispatch = useDispatch()
  const [formSubmited, setFormSubmited] = useState(false);
  const {
    email,
    password,
    displayName,
    onInputChange,
    formState,
    isFormValid,
    emailValid,

    displayNameValid,
    passwordValid,
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmited(true);
    if (!isFormValid) return;
    dispatch(startCreatingUserWithEmailPassword(formState))
  };

  return (
    <AuthLayout title="Crear cuenta">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre"
              type="text"
              fullWidth
              placeholder="Nombre Apellidos"
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmited}
              helperText={formSubmited ? displayNameValid : ""}
            ></TextField>
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              fullWidth
              placeholder="some@example.com"
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmited}
              helperText={formSubmited ? emailValid : ""}
            ></TextField>
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contrasena"
              type="password"
              fullWidth
              placeholder="******"
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmited}
              helperText={formSubmited ? passwordValid : ""}
            ></TextField>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 0.5 }}>
            <Grid item xs={12} sm={12}>
              <Button
                variant="contained"
                type="submit"
                onClick={onSubmit}
                fullWidth
              >
                Crear
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction="row" justifyContent={"end"}>
          <Typography>Ya tienes cuenta?</Typography>
          <Link component={RouterLink} sx={{ ml: 1 }} to="/auth/login">
            Ingresar
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  );
};
