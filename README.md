# Развертывание Frontend
Необходимо установить Node.js и какую-нибудь IDE (например, PhpStorm)

Открыть консоль Windows (сочетание клавиш Windows + R)
в консоли при помощи команд командной строки перейти в папку с проектом

В папку проекта при помощи git скачать репозиторий github.com/lyonalyo/ReDoMe

git remote add origin git@github.com:name/app.git
git push -u origin master

В консоли выолнить команду npm run deploy

По ссылке https://vk.com/apps?act=manage создать vk mini apss с произвольным названием.

В навигационной области слева выбрать пункт "Настройки"

В настройках Vk mini apps для всех трех способов запуска vk mini apss указать URL, который ведет на GitHub Pages с проектом (можно посмотреть на GitHud в разделе "Настройки -> GitHub Pages"

Установка сервиса

Дополнительно можно:
Дополнить в файле package.json
"start": "cross-env PORT=1088 HTTPS=true react-scripts start",

Выполнить в командной строке npm start 

В настройках приложения включить режим разработки и указать URL для разработки https://localhost:10888/
Указать в настройках в адресе для разработки 

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

@antonsyssoyev
