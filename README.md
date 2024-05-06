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


  ## Arquitectura BBDD

La base de datos responde a una estructura relacional que permite un control de las consultas y peticiones realizadas tanto por el administrador y usuarios(compradores). A su vez, como ya hemos señalado la estructura toma su forma teniendo en cuenta la lógica de negocio necesaria para que el ficticio dueño de tal empresa pueda tener un registro de los datos necesarios para el cumplimiento de sus objetivos financieros tales como usuarios registrados, stock, carros de la compra, productos, pedidos, etc. 

![DB](./img/Model%20databases%20(1).png)
 
## Lista de funcionalidades

Dentro de la API tanto compradores(users) como los administradores(admin) de la información alojada en la base de datos podrán realizar diferentes consultas dependiendo de su rol dentro de la misma. 

A continuación se presenta la lista de endpoints que permiten el acceso y control a distintas funcionalidades dependiendo de los datos que se desean obtener. 

1) Como administrador(admin): 

    * Listado de todos los usuarios
    
    * Listado de todos los productos
    
    * Añadir productos

    * Eliminar productos

    * Eliminar usuarios
 
 2) Como comprador(user): 

    * Registrarse

    * Login 

    * Acceder al perfil de usuario 

    * Modificar o actualizar datos del perfil de usuario

    * Modificar o actualizar password 

    * Modificar o actualizar email
    
    * Añadir productos al carro de la compra

    * Realizar un pedido 


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


## Database Architecture

The database follows a relational structure that allows control of the queries and requests made by both the administrator and users (buyers). At the same time, as we have already pointed out, the structure takes its form taking into account the necessary business logic so that the fictitious owner of such a company can have a record of the necessary data for the fulfillment of its financial objectives such as registered users, stock, shopping carts, products, orders, etc.

![DB](./img/Model%20databases%20(1).png)
 
## List of functionalities

Within the API, both buyers (users) and administrators (admin) of the information hosted in the database will be able to perform different queries depending on their role within it.

Below is the list of endpoints that allow access and control of different functionalities depending on the data that is desired to be obtained.

1) As an administrator (admin): 

    - List of all users
    - List of all products
    - Add products
    - Delete products
    - Delete users
 
 2) As a buyer (user): 

    - Sign up
    - Login 
    - Access user profile 
    - Modify or update user profile data
    - Modify or update password 
    - Modify or update email
    - Add products to the shopping cart
    - Place an order
