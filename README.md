# PlanetApp

![image](https://github.com/tg732/planet-app/assets/108361501/c7552b3f-c1e0-4bde-8336-32daed0a7c2e)

Небольшое задание на практику межкомпонентного взаимодействия и сервисы:
Делаем GET запрос на https://swapi.dev/api/planets и получаем массив планет.
1. Требуется нарисовать список планет  из Star Wars (отображаем имя, население в млн.(т.е не 10000000, а 10 млн.) и размер планеты), создав 2 компонента: planet-list и planet-list-item, и 1 сервис для получения этих данных PlanetsService.
2. В компоненте planet-list-item добавляется кнопка “Хочу посетить“. (Обработка события нажатия должна пробрасываться через Output в родительский компонент.)
3. Создаем компонент want-to-visit который отображает только названия планет которые пользователь отметил для посещений. И выводим этот список рядом с компонентом списка планет.
4. При нажатии “Хочу посетить” кнопка заменяется на “В списке“, при повторном нажатии, планета уходит из списка посещений, кнопка возвращается к “Хочу посетить“.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
