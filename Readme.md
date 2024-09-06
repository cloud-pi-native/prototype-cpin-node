## API Prototype CPIN - Readme

**Description:** 

Cette API expose plusieurs endpoints pour accéder à des citations humoristiques.
Cette API fait partie du prototype CPIN et l'infrastructure est présente dans le repo [Prototype CPIN](https://github.com/cloud-pi-native/prototype-cpin).
  
**Endpoints:**

* **GET /quote1**: Accès pour admin, modérateur
* **GET /quote2**: Accès pour admin, modérateur
* **GET /quote3**: Accès pour admin, modérateur
* **PUT /quote4**: Accès pour admin et modérateur
* **PUT /quote5**: Accès pour admin et modérateur
* **POST /quote6**: Accès pour admin
* **POST /quote7**: Accès pour admin
* **GET /public**: Accès ouvert à tous


**Compilation et lancement:**

1. Assurez-vous d'avoir Node.js installé sur votre système.
2. Ouvrez un terminal et naviguez dans le répertoire contenant le fichier `index.js`.
3. Exécutez la commande suivante pour compiler et lancer l'application:

 ```bash
 node index.js 
 ```

L'API sera alors accessible à l'adresse `http://localhost:3000/`.

**Compilation Docker:**


1. Assurez-vous d'avoir Docker installé sur votre système.
2. Ouvrez un terminal et naviguez dans le répertoire contenant le fichier `Dockerfile`.
3. Exécutez la commande suivante pour construire l'image Docker:

```bash
 docker build -t api-cpin . 
```
4. Exécutez la commande suivante pour lancer l'application:
```bash
docker run -p 3000:3000 --name api-quotes api-cpin
```