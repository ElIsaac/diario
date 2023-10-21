import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { Link as RouterLink } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Login">
      <form>
        <Grid container>

        <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre"
              type="text"
              fullWidth
              placeholder="Nombre Apellidos"
            ></TextField>
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              fullWidth
              placeholder="some@example.com"
            ></TextField>
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contrasena"
              type="password"
              fullWidth
              placeholder="******"
            ></TextField>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 0.5 }}>
            <Grid item xs={12} sm={12}>
              <Button variant="contained" fullWidth>
                Crear
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction="row" justifyContent={"end"}>
          <Typography >
            Ya tienes cuenta?
          </Typography>
          <Link component={RouterLink} sx={{ml:1}} to="/auth/login">
             Ingresar
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  )
}
