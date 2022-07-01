<div align="center">
  <a href="https://github.com/bluntswordman/Explore-ID" target="blank" rel="noreferrer">
    <img src="https://drive.google.com/uc?id=15EnQDW-wcZWJm3f-qDz6tLbcD4HWwnwZ" alt="logo-exploreid" width="200px">
  </a>
</div>

## About Application ##
Explore ID merupakan website untuk mempromosikan wisata lokal, dengan dibuatnya website ini pengembang berharap agar masyarakat setempat atau wisatawan yang datang lebih bisa bekerja sama untuk mempromosikan wisata lokal.

## Install & Running Application ##
*Repository <a href="https://github.com/bluntswordman/Explore-ID">**Client**</a>* 
#### Install Xampp
```bash
  https://www.apachefriends.org/download.html
```
or
#### Install MySQL Workbench ####
```bash
  https://dev.mysql.com/downloads/workbench/
```
#### Create Database ####
  **Using CLI**
  ```bash
     Open command prompt
  ```
  ```bash
     mysql -u root -p;
  ```
  ```bash
     CREATE DATABASES explore_db;
  ```
  ```bash
     USE explore_db;
  ```
  **Using XAMPP**
  ```bash
     start Xampp Control Panel and check MYSQL + Apache
  ```
  ```bash
     create new database and type name database "explore_db"
  ```
  **Using MySQL Workbench**
  ```bash
     login to MySQL Workbench
  ```
  ```bash
     CREATE DATABASES explore_db;
  ```
  ```bash
     USE explore_db;
  ```
#### Clone Application ####
  ```bash
    git clone https://github.com/bluntswordman/server-ExploreID.git
  ```
#### Running Application ####
  ```bash
    cd server-ExploreID
  ```
  ```bash
    in folder root create ".env" add :
    - PORT = 5000

    - DB_USERNAME = root 
    - DB_NAME = explore_db
    - DB_PASSWORD = "" || your database password

    - ACCESS_TOKEN = Aoiewrerghj || random string
    - REFRESH_TOKEN = rutirefsjf || random string
  ```
  ```bash
    in folder root create folder images
  ```
  ```bash
    in folder images create folder content & profile
  ```
  ```bash
    yarn || npm || pnpm "install"
  ```
  ```bash
    yarn || npm || pnpm "run start-dev"
  ```
## API Spec ##
### User Authentication ###
#### Register ####
- Method    : POST
- Endpoint  : `/v1/user`
- Header :
    - Content-Type : application/json
- Body :
```json 
  {
      "username" : "string",
      "nama" : "string",
      "password" : "string",
      "confirmPassword" : "string"
  }
```
- Response :
```json 
  {
    "status" : 201,
    "msg" : "Berhasil membuat akun"
  }
```
#### Login ####
- Method    : POST
- Endpoint  : `/v1/user/login`
- Header :
    - Content-Type : application/json
- Body :
```json 
  {
    "username" : "string",
    "password" : "string"
  }
```
- Response :
```json 
  {
    "status" : 200,
    "data" : {
      "accessToken" : "string"
    }
  }
```
#### Token ####
- Method    : GET
- Endpoint  : `/v1/token/access`
- Header :
    - Content-Type : application/json
- Response :
```json 
  {
    "status" : 200,
    "data" : {
      "accessToken" : "string"
    }
  }
```
#### Logout ####
- Method    : DELETE
- Endpoint  : `/v1/user/logout`
- auth : 
```json
  {
    "type": "bearer",
    "bearer": {
        "key": "token",
        "type": "string"
    }
  }
```
- Header :
    - Content-Type : application/json
- Response :
```json 
  {
    "status" : 200,
    "msg" : "Logged out"
  }
```
#### Data User ####
- Method    : GET
- Endpoint  : `/v1/user/{userId}`
- auth : 
```json
  {
    "type": "bearer",
    "bearer": {
        "key": "token",
        "type": "string"
    }
  }
```
- Header :
    - Content-Type : application/json
- Response :
```json 
  {
    "status" : 200,
    "data" : {
      "id" : "string, unique",
      "username" : "string",
      "nama" : "string",
      "profile_image" : "string",
      "createdAt" : "date",
      "updatedAt" : "date"
    }
  }
```
#### Update Data User ####
- Method    : PUT
- Endpoint  : `/v1/user/{userId}`
- auth : 
```json
  {
    "type": "bearer",
    "bearer": {
        "key": "token",
        "type": "string"
    }
  }
```
- Header :
    - Content-Type : application/json
- Body :
```json 
  {
    "username" : "string",
    "name" : "string"
  }
```
- Response :
```json 
  {
    "status" : 200,
    "msg" : "User updated"
  }
```
#### Update Photo User ####
- Method    : PUT
- Endpoint  : `/v1/user/updateimage/{userId}`
- auth : 
```json
  {
    "type": "bearer",
    "bearer": {
        "key": "token",
        "type": "string"
    }
  }
```
- Header :
    - Content-Type : multipart/form-data
- Body :
```json 
  {
    "image" : "file"
  }
```
- Response :
```json 
  {
    "status" : 200,
    "msg" : "Images updated"
  }
```
### Content ###
#### Create Content ####
- Method    : POST
- Endpoint  : `/v1/location/`
- auth : 
```json
  {
    "type": "bearer",
    "bearer": {
        "key": "token",
        "type": "string"
    }
  }
```
- Header :
    - Content-Type : multipart/form-data
- Body :
```json 
  {
    "title" : "string",
    "description" : "string",
    "photo" : "file",
    "lat" : "double",
    "lng" : "double"
  }
```
- Response :
```json 
  {
    "status" : 201,
    "msg" : "Location created",
    "data" : {
      "id" : "integer",
      "title" : "string",
      "description" : "string",
      "image" : "string",
      "lat" : "double",
      "lng" : "double",
      "nama" : "string",
      "userId" : "string",
      "createdAt" : "date",
      "updatedAt" : "date"
    }
  }
```
#### Update Content ####
- Method    : PUT
- Endpoint  : `/v1/location/{id}`
- auth : 
```json
  {
    "type": "bearer",
    "bearer": {
        "key": "token",
        "type": "string"
    }
  }
```
- Header :
    - Content-Type : application/json
- Body :
```json 
  {
    "title" : "string",
    "description" : "string"
  }
```
- Response :
```json 
  {
    "status" : 200,
    "msg" : "Location updated"
  }
```
#### Get All Content ####
- Method    : GET
- Endpoint  : `/v1/location/`
- Header :
    - Content-Type : application/json
- Response :
```json 
  {
    "status" : 200,
    "data" : [
      {
        "id" : "integer",
        "title" : "string",
        "description" : "string",
        "image" : "string",
        "lat" : "double",
        "lng" : "double",
        "nama" : "string",
        "userId" : "string",
        "createdAt" : "date",
        "updatedAt" : "date"
      },
    ]
  }
```
#### Get All Content by UserId ####
- Method    : GET
- Endpoint  : `/v1/location/locself/{userId}`
- Header :
    - Content-Type : application/json
- Response :
```json 
  {
    "status" : 200,
    "data" : [
      {
        "id" : "integer",
        "title" : "string",
        "description" : "string",
        "image" : "string",
        "lat" : "double",
        "lng" : "double",
        "nama" : "string",
        "userId" : "string",
        "createdAt" : "date",
        "updatedAt" : "date"
      },
    ]
  }
```
#### Get Content by Id ####
- Method    : GET
- Endpoint  : `/v1/location/{id}`
- Header :
    - Content-Type : application/json
- Response :
```json 
  {
    "status" : 200,
    "data" : {
      "id" : "integer",
      "title" : "string",
      "description" : "string",
      "image" : "string",
      "lat" : "double",
      "lng" : "double",
      "nama" : "string",
      "userId" : "string",
      "createdAt" : "date",
      "updatedAt" : "date"
    }
  }
```
#### Get Content Random ####
- Method    : GET
- Endpoint  : `/v1/location/random`
- Header :
    - Content-Type : application/json
- Response :
```json 
  {
    "status" : 200,
    "data" : [
      {
        "id" : "integer",
        "title" : "string",
        "description" : "string",
        "image" : "string",
        "lat" : "double",
        "lng" : "double",
        "nama" : "string",
        "userId" : "string",
        "createdAt" : "date",
        "updatedAt" : "date"
      },
    ]
  }
```
#### Delete Content ####
- Method    : DELETE
- Endpoint  : `/v1/location/{id}`
- auth : 
```json
  {
    "type": "bearer",
    "bearer": {
        "key": "token",
        "type": "string"
    }
  }
```
- Header :
    - Content-Type : application/json
- Response :
```json 
  {
    "status" : 200,
    "msg" : "Location deleted"
  }
```
### Comment Content ###
#### Create Comment ####
- Method    : POST
- Endpoint  : `/v1/comment`
- auth : 
```json
  {
    "type": "bearer",
    "bearer": {
        "key": "token",
        "type": "string"
    }
  }
```
- Header :
    - Content-Type : application/json
- Body :
```json 
  {
    "commentBody" : "string",
    "commentAuthor" : "string"
  }
```
- Response :
```json 
  {
    "status" : 201,
    "msg" : "Comment created",
    "data" : {
      "id" : "integer",
      "commentBody" : "string",
      "commentAuthor" : "string",
      "commentAuthorPhoto" : "string",
      "userId" : "string",
      "locationId" : "integer",
      "createdAt" : "date",
      "updatedAt" : "date"
    }
  }
```
#### Get Comment ####
- Method    : GET
- Endpoint  : `/v1/comment/{locationId}`
- Header :
    - Content-Type : application/json
- Response :
```json 
  {
    "status" : 200,
    "data" : [
      {
        "id" : "integer",
        "commentBody" : "string",
        "commentAuthor" : "string",
        "commentAuthorPhoto" : "string",
        "userId" : "string",
        "locationId" : "integer",
        "createdAt" : "date",
        "updatedAt" : "date"
      },
    ]
  }
```

## Technology ##
| Programming Language & DBMS | Framework | Tools | 
|------------|-------------|-------------|
| <div align="center"><a href="https://www.javascript.com/" target="_blank" rel="noreferrer"><img src="https://cdn.iconscout.com/icon/free/png-64/javascript-2752148-2284965.png" width="35" alt="javascript"> </a> <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://cdn.iconscout.com/icon/free/png-64/nodejs-2-226035.png" width="35" alt="nodejs"> </a> <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"><img src="https://cdn.iconscout.com/icon/free/png-64/mysql-3521596-2945040.png" width="35" alt="mysql"></a></div>| <div align="center"><a href="https://expressjs.com/" target="_blank" rel="noreferrer"> <img src="https://cdn.iconscout.com/icon/free/png-64/express-8-1175029.png" width="35"></a></div> |   <div align="center"><a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer"> <img src="https://cdn.iconscout.com/icon/free/png-64/visual-studio-code-1868941-1583105.png" width="35"></a><a href="https://yarnpkg.com/" target="_blank" rel="noreferrer"> <img src="https://cdn.iconscout.com/icon/free/png-64/yarn-34-1174974.png" width="35"> </a> </a><a href="https://dev.mysql.com/downloads/windows/installer/8.0.html" target="_blank" rel="noreferrer"> <img src="https://cdn.icon-icons.com/icons2/1381/PNG/512/mysqlworkbench_93532.png" width="35"> </a></div> |
#### Credits ####
+ <a href="https://github.com/kelektiv/node.bcrypt.js" target="_blank" rel="noreferrer">bcrypt</a>
+ <a href="https://github.com/expressjs/body-parser" target="_blank" rel="noreferrer">body-parser</a>
+ <a href="https://github.com/expressjs/cors" target="_blank" rel="noreferrer">cors</a>
+ <a href="https://github.com/ericelliott/cuid" target="_blank" rel="noreferrer">cuid</a>
+ <a href="https://github.com/motdotla/dotenv" target="_blank" rel="noreferrer">dotenv</a>
+ <a href="https://github.com/auth0/node-jsonwebtoken" target="_blank" rel="noreferrer">jsonwebtoken</a>
+ <a href="https://github.com/expressjs/multer" target="_blank" rel="noreferrer">multer</a>
+ <a href="https://github.com/sidorares/node-mysql2" target="_blank" rel="noreferrer">mysql2</a>
+ <a href="https://github.com/sequelize/cli" target="_blank" rel="noreferrer">sequelize-cli</a>
+ <a href="https://github.com/spikebrehm/set-cookie" target="_blank" rel="noreferrer">set-cookie</a>
