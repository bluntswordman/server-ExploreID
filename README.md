<div align="center">
  <a href="https://github.com/bluntswordman/Explore-ID" target="blank" rel="noreferrer">
    <img src="https://drive.google.com/uc?id=15EnQDW-wcZWJm3f-qDz6tLbcD4HWwnwZ" alt="logo-exploreid" width="200px">
  </a>
</div>

## Tentang Aplikasi ##
Explore ID merupakan website untuk mempromosikan wisata lokal, dengan dibuatnya website ini pengembang berharap agar masyarakat setempat atau wisatawan yang datang lebih bisa bekerja sama untuk mempromosikan wisata lokal.

## Instalasi & Mejalankan Program ##
*Repository <a href="https://github.com/bluntswordman/server-ExploreID">**Client**</a>* 
#### Install Xampp
```bash
  https://www.apachefriends.org/download.html
```
atau
#### Install MySQL Workbench ####
```bash
  https://dev.mysql.com/downloads/workbench/
```
#### Membuat Database ####
  **Menggunakan CLI**
  ```bash
     Open command prompt
  ```
  ```bash
     mysql -u root -p
  ```
  ```bash
     CREATE DATABASES "explore_db"
  ```
  **Menggunakan XAMPP**
  ```bash
     start Xampp Control Panel and check MYSQL + Apache
  ```
  ```bash
     create new database and type name database "explore_db"
  ```
  **Menggunakan MySQL Workbench**
  ```bash
     Login to MySQL Workbench
  ```
  ```bash
     In the query write CREATE DATABASES "explore_db"
  ```
#### Clone the project ####
  ```bash
    git clone https://github.com/bluntswordman/server-ExploreID.git
  ```
#### Start the server ####
  ```bash
    cd server-ExploreID
  ```
  ```bash
    yarn || npm || pnpm "install"
  ```
  ```bash
    yarn || npm || pnpm "run start-dev"
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
