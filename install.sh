#!/bin/bash

## author:  Gabriele Princiotta

# Funzioni per stampare a schermo il testo con diversi colori
shw_info () {
    echo $(tput bold)$(tput setaf 4) $@ $(tput sgr 0)
}

shw_info "Installazione NodeWebAppGenerator"

sudo mkdir /opt/node-web-app-generator/

sudo cp -r app /opt/node-web-app-generator/.

sudo chmod 777 /opt/node-web-app-generator/

sudo chmod a+x node-web-app-generator.sh

sudo cp node-web-app-generator.sh /usr/bin/node-web-app-generator
