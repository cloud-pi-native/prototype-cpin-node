# Utiliser une image officielle de Node.js comme image de base
FROM docker.io/node:20.16.0-bullseye-slim

# Définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copier le fichier package.json et package-lock.json (si disponible)
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code de l'application
COPY . .

# Exposer le port sur lequel l'application écoutera
EXPOSE 3000

# Démarrer l'application
CMD ["node", "index.js"]
