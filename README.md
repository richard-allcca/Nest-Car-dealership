# Car dealership

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Creation

```bash
  nest new project_name
```

## Project setup

```bash
npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Comandos para generar

```bash
  # Crear un controlador
  nest g co name

  # Crear un servicio
  nest g s name --no-spec

```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
npm install -g mau
mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- Para manejo de errores usa [Exception filters](https://docs.nestjs.com/exception-filters).
- Para conversión de data usa los Pipes [Pipes by default](https://docs.nestjs.com/pipes)

## Temas tocados en este proyecto

- Core Nest building blocks

- Módulos

- Controladores (Post, Patch, Get, Delete)

- Primeros decoradores

- Servicios

- Inyección de dependencias

- Pipes

- Exception Filters

- DTO (Data Transfer Object)

- Patch, Post, Delete

- Validaciones automáticas

- Class Validator

- Class Transformer

- Seguir el principio DRY (Don't repeat yourself)

- Algunos decoradores del Class Validator útiles

## Comandos CLI para crear nuevo CRUD

```bash
  nest g resource name --no-spec

  # What transport layer would you like to use? - REST API
  # Would you like to generate CRUD entry points? - yes
```
