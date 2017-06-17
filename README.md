# Учебная сборка Loftschool
## Кацер Сергей Викторович

> Сборка работает на gulp версии 4.0. 

#### Для начала работы

1. ```clone this repo```
2. ```cd path/to/...```
3. ```npm install gulpjs/gulp-cli -g```  
> Установка последней версии Gulp CLI tools глобально (подробнее - [GitHub](https://github.com/gulpjs/gulp/blob/4.0/docs/getting-started.md) )

4. ```npm install```
6. ```run gulp``` 


> ### Описание выполненной работы домашнего задания 1:
1. Добавлена задача по копированию всех файлов и каталогов из папки "source/fonts" в папку "build/fonts".
2. Установлены плагины gulp-imagemin и gulp.spritesmith. Добавлена задача по минификации файлов gif и png из папки "source/sprites" и созданию из них спрайта, который перемещается в папку "build".
3. Новые задачи прописаны в файле "gulp/path/tasks.js" и gulpfile.js в первой ветке parallel. Так же задача по копированию шрифтов добавлена в watch.js.