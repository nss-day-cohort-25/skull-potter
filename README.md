# Skull & Potter

## Set up your API

```sh
mkdir -p ~/workspace/javascript/skull-potter-api
cd $_
echo '{
    "animals": [
        {
            "species": "Hedgehog",
            "furred": true,
            "color": "Brown",
            "size": "small",
            "feathered": false,
            "scales": false,
            "mount": true,
            "price": 225.00,
            "quantity": 73,
            "id": 1
        }
    ]
}' >> animals.json
json-server -p 8088 -w animals.json
```

## Clone this repo

```sh
mkdir -p ~/workspace/javascript/skull-potter-app
cd $_
git clone git@github.com:nss-day-cohort-25/skull-potter.git .
mkdir dist
code .
```
