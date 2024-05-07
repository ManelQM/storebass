# StoreBass - Ecommerce - Backend - API REST - MVC

## Resumen 

StoreBass es un proyecto donde se presenta la idea ficticia de crear un negocio online cuyo mercado estaría orientado a suplir y suministar productos para aquellas personas que tocan el bajo eléctrico. Es decir, un Ecommerce de productos e instrumentos músicales vinculados a la práctica de dicha profesión/afición. 

## Objetivos 
Creación de la infraestructura de backend software necesaria para la interfaz de un comercio online con un diseño escalable y mantenible, centrándose en bases de datos, lógica del lado del servidor, interfaz de programación de aplicaciones (APIs), arquitectura y servidores.

Para ello implementaremos el modelo vista controlador(MVC) como patrón de diseño para, ofrecer la creación de un software que tenga en cuenta no solo la arquitectura de código, sino también la lógica de negocio necesaria, para que una empresa pueda operar en vistas a desarrollar su modelo de negocio de manera fiable, segura y fluida. 

## Tecnologías
Las tecnologías usadas para el desarrollo de la funcionalidad general de la app, son las siguientes; 

![JS](./img/logo-javascript-logo-png-transparentj.png) 
![NODE](./img/nodejs-horizontal%20(1).svg)
![EXPRESS](./img/expressjs-ar21%20(1)%20(1).svg)
![JWT](./img/icons8-json-web-token-48.png)

![SEQUELIZE](./img/sequelizejs-ar21%20(1)%20(1).svg)
![MYSQL](./img/mysql-ar21%20(1)%20(1).svg)
![DOCKER]( ./img/docker-ar21%20(1)%20(2).svg)

### JavaScript

JavaScript es un lenguaje de programación versátil y poderoso que se utiliza principalmente en el desarrollo web para agregar interactividad a las páginas. Es un lenguaje interpretado y de alto nivel que se ejecuta en el navegador del cliente, lo que permite crear aplicaciones web dinámicas y ricas en contenido. Además del desarrollo web, JavaScript también se utiliza en entornos de servidor (Node.js), aplicaciones de escritorio y desarrollo de aplicaciones móviles.

### Node.js
Node.js es un entorno de ejecución de JavaScript basado en el motor V8 de Google Chrome. Permite ejecutar código JavaScript en el lado del servidor, lo que lo hace ideal para el desarrollo de aplicaciones web y APIs. Algunas de sus características son:

* JavaScript en el Servidor: Node.js permite utilizar JavaScript tanto en el lado del cliente como en el servidor, lo que simplifica el desarrollo de aplicaciones web completas con un solo lenguaje de programación.
* Event-Driven y Asíncrono: Node.js utiliza un modelo de programación event-driven y asíncrono, lo que significa que puede manejar múltiples solicitudes concurrentes de manera eficiente sin bloquear el subproceso principal.
* NPM (Node Package Manager): Node.js incluye NPM, un administrador de paquetes integrado que permite instalar, administrar y compartir paquetes de código reutilizable de manera sencilla.
* Escalabilidad: Node.js es altamente escalable y puede utilizarse para construir aplicaciones de alta concurrencia y rendimiento, lo que lo hace popular en aplicaciones web en tiempo real y APIs RESTful.

### Express
Express es un marco de aplicación web de Node.js que simplifica el desarrollo de aplicaciones web y APIs. Algunas de sus características son:

* Enrutamiento: Express proporciona un enrutador flexible que permite definir rutas para manejar solicitudes HTTP y responder con contenido dinámico.
* Middleware: Permite la integración de middleware de terceros para agregar funcionalidades adicionales, como manejo de cookies, autenticación y registro de solicitudes.
* Manejo de Solicitudes y Respuestas: Express facilita el manejo de solicitudes y respuestas HTTP mediante métodos y funciones integradas, lo que simplifica la creación de aplicaciones web y APIs robustas.

### Sequelize
Sequelize es un ORM (Object-Relational Mapping) para Node.js, que facilita la interacción con bases de datos relacionales como MySQL, PostgreSQL, SQLite y MSSQL. Proporciona una interfaz basada en promesas para realizar consultas y operaciones CRUD en la base de datos, lo que simplifica el desarrollo y la gestión de la capa de persistencia de una aplicación.

### Bcrypt
Bcrypt es una biblioteca que proporciona funciones de hashing de contraseñas seguras para proteger las contraseñas almacenadas en tu base de datos. Utiliza un algoritmo de hashing adaptativo que agrega una capa adicional de seguridad al generar un hash de la contraseña del usuario. Algunas de sus características principales son:

* Seguridad Robusta: Bcrypt utiliza un algoritmo de hashing lento y deliberadamente intensivo en recursos, lo que lo hace altamente resistente a los ataques de fuerza bruta y de diccionario.
* Salting Automático: Bcrypt incorpora automáticamente un valor de sal único en cada hash de contraseña que genera. Esto previene ataques y hace que cada hash sea único, incluso si las contraseñas son idénticas.
* Facilidad de Uso: Bcrypt proporciona una interfaz simple para generar y verificar contraseñas hash, lo que facilita su integración en tus aplicaciones.
* Escalabilidad: Bcrypt sigue siendo lo suficientemente rápido como para escalar en aplicaciones de producción sin afectar significativamente el rendimiento del servidor.

### JWT (JSON Web Token)
JSON Web Token (JWT) es un estándar abierto (RFC 7519) que define una forma compacta y autónoma para transmitir información de forma segura entre partes como un objeto JSON. Es especialmente útil en entornos de autenticación y autorización, ya que permite generar tokens firmados que pueden ser verificados y confiables, lo que garantiza la integridad de los datos transmitidos. En esta API, JWT se utiliza para la autenticación de usuarios, proporcionando una capa adicional de seguridad al proteger las rutas y recursos sensibles.


### MySQL Workbench
MySQL Workbench es una herramienta de diseño visual y administración de bases de datos MySQL. Permite diseñar esquemas de bases de datos, crear y modificar tablas, ejecutar consultas SQL, gestionar usuarios y privilegios, y realizar tareas de administración y mantenimiento de bases de datos. Es una herramienta imprescindible para desarrolladores y administradores de bases de datos que trabajan con MySQL.

### Docker
Docker es una plataforma de contenedores que permite empaquetar, distribuir y ejecutar aplicaciones en entornos aislados llamados contenedores. Proporciona una forma rápida y eficiente de implementar aplicaciones, ya que los contenedores son ligeros, portátiles y autocontenidos. Docker facilita la creación de entornos de desarrollo y producción consistentes, simplifica la administración de la infraestructura y mejora la escalabilidad y la seguridad de las aplicaciones.



## Arquitectura BBDD

La base de datos responde a una estructura relacional que permite un control de las consultas y peticiones realizadas tanto por el administrador y usuarios(compradores). A su vez, como ya hemos señalado la estructura toma su forma teniendo en cuenta la lógica de negocio necesaria para que el ficticio dueño de tal empresa pueda tener un registro de los datos necesarios para el cumplimiento de sus objetivos financieros tales como usuarios registrados, stock, carros de la compra, productos, pedidos, etc. 

![DB](./img/Model%20databases%20(1).png)
 
## Lista de funcionalidades

Dentro de la API tanto compradores(users) como los administradores(admin) de la información alojada en la base de datos podrán realizar diferentes consultas dependiendo de su rol dentro de la misma. 

A continuación se presenta la lista de endpoints que permiten el acceso y control a distintas funcionalidades dependiendo de los datos que se desean obtener. 

## Lista de Funcionalidades del Administrador (Admin Functionalities)

- **GET /allusers**: Obtener todos los usuarios.
- **GET /allstore**: Obtener todas las tiendas.
- **POST /addproduct**: Agregar un producto a la tienda.
- **DELETE /deleteuser**: Eliminar un usuario.
- **DELETE /deleteproduct**: Eliminar un producto.

## Lista de Funcionalidades de Usuario (User Functionalities)

- **POST /register**: Registrar un usuario.
- **POST /login**: Iniciar sesión.
- **GET /myprofile**: Obtener mi perfil.
- **PATCH /updatemyprofile**: Actualizar mi perfil.
- **PATCH /editmypassword**: Editar mi contraseña.
- **PATCH /editmyemail**: Editar mi correo electrónico.
- **POST /addproducttocart**: Add a product to the cart (requires authorization and role validation).
- **POST /makeorder**: Make an order (requires authorization and role validation).


# English version 

# StoreBass 

## Summary 

StoreBass is a project where the fictitious idea of ​​creating an online business is presented, targeting and supplying products for those who play the electric bass. In other words, it's an e-commerce platform for products and musical instruments related to the practice of this profession/hobby.

## Objectives 
Create the necessary backend software infrastructure for an online commerce interface with a scalable and maintainable design, focusing on databases, server-side logic, application programming interface (APIs), architecture, and servers.

To achieve this, we will implement the Model-View-Controller (MVC) pattern as a design pattern to offer the creation of software that takes into account not only the code architecture but also the necessary business logic, so that a company can operate aiming to develop its business model reliably, securely, and smoothly.

## Technologies
The technologies used for the development of the app's general functionality are as follows; 

![JS](./img/logo-javascript-logo-png-transparentj.png) 
![NODE](./img/nodejs-horizontal%20(1).svg)
![EXPRESS](./img/expressjs-ar21%20(1)%20(1).svg)
![JWT](./img/icons8-json-web-token-48.png)

![SEQUELIZE](./img/sequelizejs-ar21%20(1)%20(1).svg)
![MYSQL](./img/mysql-ar21%20(1)%20(1).svg)
![DOCKER]( ./img/docker-ar21%20(1)%20(2).svg)

### JavaScript

JavaScript is a versatile and powerful programming language mainly used in web development to add interactivity to web pages. It's an interpreted, high-level language that runs in the client's browser, allowing the creation of dynamic and content-rich web applications. Besides web development, JavaScript is also used in server-side environments (Node.js), desktop applications, and mobile app development.

### Node.js

Node.js is a JavaScript runtime environment based on Google Chrome's V8 engine. It enables running JavaScript code on the server-side, making it ideal for web application and API development. Some of its features include:

- JavaScript on the Server: Node.js allows using JavaScript on both the client and server sides, simplifying the development of full-stack web applications with a single programming language.
- Event-Driven and Asynchronous: Node.js employs an event-driven, asynchronous programming model, enabling it to handle multiple concurrent requests efficiently without blocking the main thread.
- NPM (Node Package Manager): Node.js comes with NPM, a built-in package manager that allows installing, managing, and sharing reusable code packages easily.
- Scalability: Node.js is highly scalable and can be used to build high-concurrency, high-performance applications, making it popular for real-time web applications and RESTful APIs.

### Express

Express is a web application framework for Node.js that simplifies web application and API development. Some of its features include:

- Routing: Express provides a flexible router that allows defining routes to handle HTTP requests and respond with dynamic content.
- Middleware: It allows integrating third-party middleware to add additional functionality, such as handling cookies, authentication, and request logging.
- Request and Response Handling: Express makes handling HTTP requests and responses easy through built-in methods and functions, simplifying the creation of robust web applications and APIs.

### Sequelize

Sequelize is an ORM (Object-Relational Mapping) for Node.js, which facilitates interaction with relational databases like MySQL, PostgreSQL, SQLite, and MSSQL. It provides a promise-based interface for performing database queries and CRUD operations, simplifying the development and management of the persistence layer of an application.

### Bcrypt

Bcrypt is a library that provides secure password hashing functions to protect passwords stored in your database. It uses an adaptive hashing algorithm that adds an additional layer of security by generating a hash of the user's password. Some of its key features include:

- Robust Security: Bcrypt employs a deliberately slow and resource-intensive hashing algorithm, making it highly resistant to brute-force and dictionary attacks.
- Automatic Salting: Bcrypt automatically incorporates a unique salt value into each password hash it generates. This prevents rainbow table attacks and makes each hash unique, even if the passwords are identical.
- Ease of Use: Bcrypt provides a simple interface for generating and verifying hashed passwords, making it easy to integrate into your applications.
- Scalability: Bcrypt is still fast enough to scale in production applications without significantly impacting server performance.

### JWT (JSON Web Token)

JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. It is particularly useful in authentication and authorization environments, as it allows generating signed tokens that can be verified and trusted, ensuring the integrity of transmitted data. In this API, JWT is used for user authentication, providing an additional layer of security by protecting sensitive routes and resources.


### MySQL Workbench

MySQL Workbench is a visual database design and administration tool for MySQL databases. It allows designing database schemas, creating and modifying tables, executing SQL queries, managing users and privileges, and performing database administration and maintenance tasks. It is an essential tool for developers and database administrators working with MySQL.

### Docker

Docker is a container platform that enables packaging, distributing, and running applications in isolated environments called containers. It provides a fast and efficient way to deploy applications, as containers are lightweight, portable, and self-contained. Docker facilitates creating consistent development and production environments, simplifies infrastructure management, and improves application scalability and security.

## Database Architecture

The database follows a relational structure that allows control of the queries and requests made by both the administrator and users (buyers). At the same time, as we have already pointed out, the structure takes its form taking into account the necessary business logic so that the fictitious owner of such a company can have a record of the necessary data for the fulfillment of its financial objectives such as registered users, stock, shopping carts, products, orders, etc.

![DB](./img/Model%20databases%20(1).png)
 
## List of functionalities

Within the API, both buyers (users) and administrators (admin) of the information hosted in the database will be able to perform different queries depending on their role within it.

Below is the list of endpoints that allow access and control of different functionalities depending on the data that is desired to be obtained.

## Admin Functionalities List

- **GET /allusers**: Get all users.
- **GET /allstore**: Get all stores.
- **POST /addproduct**: Add a product to the store.
- **DELETE /deleteuser**: Delete a user.
- **DELETE /deleteproduct**: Delete a product.

## User Functionalities List

- **POST /register**: Register a user.
- **POST /login**: Log in.
- **GET /myprofile**: Get my profile.
- **PATCH /updatemyprofile**: Update my profile.
- **PATCH /editmypassword**: Edit my password.
- **PATCH /editmyemail**: Edit my email.
- **POST /addproducttocart**: Add a product to the cart (requires authorization and role validation).
- **POST /makeorder**: Make an order (requires authorization and role validation).
