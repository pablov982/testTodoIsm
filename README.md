# Task Manager Testing Suite

Este proyecto contiene un conjunto de pruebas automatizadas para la aplicación web **Task Manager**, utilizando [Playwright](https://playwright.dev/) como herramienta de testing end-to-end.

## Tabla de Contenidos

- [Estructura del Proyecto](#estructura-del-proyecto)
- [Archivos Principales](#archivos-principales)
- [Configuración](#configuración)
- [Ejecución de Pruebas](#ejecución-de-pruebas)
  - [Casos de Prueba](#casos-de-prueba)
  - [Ejecución de Pruebas Específicas](#ejecución-de-pruebas-específicas)
- [Modelo de Objeto de Página (POM)](#modelo-de-objeto-de-página-pom)
- [Recursos Adicionales](#recursos-adicionales)
- [Notas](#notas)
- [Contacto](#contacto)

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- **pages/**: Contiene las clases del Modelo de Objeto de Página (POM) que representan cada página de la aplicación.
  - `intro.page.ts`: Define la página de introducción, que incluye navegación y acceso a la pantalla de inicio de sesión.
  - `login.page.ts`: Define la página de inicio de sesión, permitiendo la creación de una cuenta de prueba y el acceso.
  - `app.page.ts`: Define la página principal de la aplicación para la gestión de tareas.

- **tests/**: Incluye los archivos de prueba que emplean las clases de POM y definen los casos de prueba.

## Archivos Principales

- `intro.page.ts`: Clase que modela la página de introducción, contiene métodos para navegar a la aplicación y acceder al inicio de sesión.
- `login.page.ts`: Clase que modela la funcionalidad de la página de inicio de sesión, permite la generación de una cuenta de prueba y autenticación.
- `app.page.ts`: Clase que representa la página principal de tareas, permitiendo crear, completar y eliminar tareas.

## Configuración

### Requisitos Previos

- Node.js (https://nodejs.org/)
- Git (para clonar el repositorio)

### Instalación

1. **Clonar el repositorio**:

   ```bash
   git clone https://github.com/pablov982/testTodoIsm
   cd task-manager-testing-suite

2. **Instalar dependencias:**:

    ```bash
    npm install

3. **Configurar Playwright:**:

    ```bash
    npx playwright install

### Ejecución de Pruebas

    ```bash
    npx playwright test

