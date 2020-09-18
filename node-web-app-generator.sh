#!/bin/bash

## author:  Gabriele Princiotta

echo "Nome progetto:"
read nome_progetto

echo "Autore progetto:"
read autore_progetto

echo "Descrizione progetto:"
read descrizione_progetto

echo "Versione progetto:"
read versione_progetto

# Inserisco i file all'interno della cartella
cp -r /opt/node-web-app-generator/app/. `pwd`

# Modifico i file

# config.js
sed -i "s/nomeapp/$nome_progetto/g" `pwd`/config/config.js
sed -i "s/autoreapp/$autore_progetto/g" `pwd`/config/config.js
sed -i "s/versioneapp/$versione_progetto/g" `pwd`/config/config.js

# package.json
sed -i "s/nomeapp/$nome_progetto/g" `pwd`/package.json
sed -i "s/autoreapp/$autore_progetto/g" `pwd`/package.json
sed -i "s/versioneapp/$versione_progetto/g" `pwd`/package.json
sed -i "s/descrizioneapp/$versione_progetto/g" `pwd`/package.json

npm install

npm start
