[<img width="134" src="https://vk.com/images/apps/mini_apps/vk_mini_apps_logo.svg">](https://vk.com/services)

# Create VK Mini App [![npm][npm]][npm-url] [![deps][deps]][deps-url]

## How to install

### Create VK Mini App with gh-pages deploy

`npx @vkontakte/create-vk-mini-app <app-directory-name>`

### Create VK Mini App with Zeit deploy

Firstly, you have to create Zeit account and connect it with your GitHub profile — https://zeit.co/

`npx @vkontakte/create-vk-mini-app <app-directory-name> --zeit`

### Create VK Mini App with Surge deploy

Firstly, you have to create Surge account and Surge-domain — https://surge.sh/

`npx @vkontakte/create-vk-mini-app <app-directory-name> --surge <surge-domain>`

## How to start work with app

Go to created folder and run:
`yarn start` || `npm start` — this will start dev server with hot reload on `localhost:10888`.

`yarn run build` || `npm run build` — this will build production bundle, with tree-shaking, uglify and all this modern fancy stuff

[npm]: https://img.shields.io/npm/v/@vkontakte/create-vk-mini-app.svg
[npm-url]: https://npmjs.com/package/@vkontakte/create-vk-mini-app

[deps]: https://img.shields.io/david/vkcom/create-vk-mini-app.svg
[deps-url]: https://david-dm.org/vkcom/create-vk-mini-app"# ReDoMe"

# Развертывание Backend
1. Скопировать содержимое папки backend\Source\ReDoMeAPI\ReDoMeAPI\bin\Debug на машину под управлением ОС Windows
2. При необходимости создать базу с помощью скрипта backend\Database\crebas.sql O(СУБД MS SQL Server Express 2008 r2 и позднее)
3. В файле ReDoMeAPI.exe.config указать параметры:
  - WebServicePort - номер tcp порта
  - Mode - https
  - ConnectionString  -строк подклбючения к SQL Server
4. Установить сертификат на машину
5. Выполнить netsh http add urlacl url=https://+:НОМЕР_ПОРТА/ user=YOUR_USERNAME 
6. Выполнить netsh http add sslcert ipport=0.0.0.0:НОМЕР_ПОРТА certhash=YOUR_THUMBPRINT_WITHOUT_SPACES appid={06aabebd-3a91-4b80-8a15-adfd3c8a0b14} 
7. Запустить ReDoMeAPI.exe