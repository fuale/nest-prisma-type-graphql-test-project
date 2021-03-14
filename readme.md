```sh
$ sudo pacman -S redis mysql # install mysql and redis
```
```sh
$ sudo systemctl start mysql redis
```
```sh
$ npx lerna bootstrap
```
```sh
$ npx lerna run generate --scope server
```
```sh
$ npx lerna run generate --scope client
```
```sh
$ npx lerna run start --parallel
```