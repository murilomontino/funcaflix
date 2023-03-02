create_cert() {
    
    if [ $1 != "" ]; then
        echo "Creating cert for $1"
        cd $1
    fi

    openssl genrsa -out ./key.pem 2048
    openssl req -new -sha256 -key ./key.pem -out ./cert.pem -subj "/C=BR/ST=SE/L=Aracaju/O=Inc/CN='mapacultural.funcap.se.gov.br'"
    openssl x509 -req -in ./cert.pem -signkey ./key.pem -out ./cert.crt
}

create_cert $1