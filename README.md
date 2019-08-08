# ScrumApp backend #

ScrumApp es una herramienta open source destinada a facilitar la implementación de la metodología agil Scrum en diferentes proyecto de una manera muy sencilla permitiendo enfocarse en el entendimiento de la metodología.

El video ilustrativo se encuentra [aquí](https://www.youtube.com/watch?v=lCBi615wK5k&feature=youtu.be)

### Versión ###
  * Actual (1.0.37)

### Features ###
  **Agregar Features** 
  * Ya que es un proyecto open source la forma de aportar diferentes feature es mediante las siguientes formas:
    * Creando issues que se irán analizando y desarrollando. 
    * Haciendo un fork y tratarlos de forma local y luego hacer un merge con la aplicación mediante pull request 
    
### Recursos ###
 * Listado de recursos
    * Para poder tener un mejor detalla de los recursos por favor dirigirse a {url_base}/swagger-ui.html


### Requisitos ###
* java SDK v1.8
* Spring boot 2.1.5.RELEASE
* Apache Maven 3.6.1
* mysql v5.7
* Docker version 19.03.1 (En el caso de utilizar una base de datos con docker)
  * en el raíz de la aplicación correr el comando **docker-compose up -d** y automáticamente se correrá el scrip sql que se encuentra en el carpeta /src/main/resources/scripts

### Run Test ###
* mvn test

### Run Application ###
* Para correr el backend se puede hacer de dos formas:
  * Con el plugin de spring boot **mvn spring-boot:run**
  * Ejecutando el jar
    * Generar el jar con el comando **mvn clean install**
    * Ejecutar el jar con el comando **java -jar target/*.jar**

### Frontend Repository ###
[Frontend Repository](https://github.com/lecocchi/projectFinal-Android)

### Contactos ###
* Fernando Calviño <fernando.calvinio@gmail.com>
* Leandro Cocchi <leandro.cocchi@davinci.edu.ar>
* Esteban Gimenez <estebanngimenez@gmail.com>
