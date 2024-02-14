# Diario - Aplicación con expo-React, Material-UI y Firebase

Mi Diario es una aplicación simple construida con React que te permite llevar un diario personal. Puedes agregar, editar y eliminar tus entradas diarias. La aplicación utiliza Firebase para almacenar y gestionar los datos, proporcionando una experiencia de usuario fluida y segura.

## Características

- **CRUD completo:** La aplicación permite realizar operaciones básicas como Crear, Leer, Actualizar y Eliminar entradas del diario.

- **Interfaz atractiva:** Utiliza Material-UI para una interfaz de usuario moderna y agradable.

- **Almacenamiento en la nube:** Los datos del diario se almacenan de forma segura en Firebase, lo que permite acceder a ellos desde cualquier dispositivo.



## Instalación

1. Clona este repositorio: `git clone https://github.com/elisaac/diario.git`
2. Accede al directorio del proyecto: `cd diario`
3. Instala las dependencias: `yarn install`

## Configuración de Firebase

1. Crea un proyecto en [Firebase](https://console.firebase.google.com/).
2. Copia la configuración de tu proyecto Firebase en `src/firebase/firebaseConfig.js`.

```javascript
// src/firebase/firebaseConfig.js

const firebaseConfig = {
  apiKey: "tu-api-key",
  authDomain: "tu-auth-domain",
  projectId: "tu-project-id",
  storageBucket: "tu-storage-bucket",
  messagingSenderId: "tu-messaging-sender-id",
  appId: "tu-app-id",
};

export default firebaseConfig;
```

## Uso
Inicia la aplicación: yarn dev
Abre tu navegador y ve a http://localhost:3000
Contribuciones
¡Las contribuciones son bienvenidas! Si encuentras algún error o tienes alguna mejora, siéntete libre de abrir un problema o enviar un pull request.

Licencia
Este proyecto está bajo la Licencia MIT - consulta el archivo LICENSE para más detalles.
