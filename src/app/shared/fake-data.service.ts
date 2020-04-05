import {of as observableOf, Observable} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {Headers, Http, RequestMethod, RequestOptions, Request, Response} from '@angular/http';
import { SentSessionModel } from './sent.session.model';


@Injectable()
export class FakeDataService {

  titleList = ["как усилить черные методы продвижения в таких ужасных условиях",
  "Блог: зачем знать проблемы на рынке digital через постель",
  "Канал на YouTube: как напугать корпоративную почту, а потом уйти в тень",
  "Продажи: зачем знать свои проекты через постель",
  "Конверсия: на что поменять проблемы на рынке digital и избежать ссылки в Сибирь",
  "SEO: чем разоблачить целевую аудиторию через постель",
  "Мессенджеры: кому отдать в руки новые инструменты маркетинга на день рождения друга",
  "Канал на YouTube: как понять биржи фриланса, а потом уйти в тень",
  "anding Page: как напугать слабое знание бизнеса и выглядеть молодцом",
  "Вебинар: чем оправдать слабое знание бизнеса, а потом уйти в тень",
  "Landing Page: приобрести веру в инфостиль в этом году",
  "Landing Page: выпросить денег на текст на главной странице, чтобы не побили",
  "Создание сайтов: как объяснить черные методы продвижения с утра",
  "Интернет-реклама: приобрести веру в конкурентов через постель",
  "Маркетинговое агентство: как проектировать проблемы на рынке digital, чтобы не побили",
  "Лидогенерация: как получить коллег по работе в вашем городе",
  "Веб-дизайн: как понять лидеров мнений через постель",
  "Контент-стратегия: как понять новые инструменты маркетинга, а потом уйти в тень",
  "Кейс: чем оправдать конкурентов и выглядеть молодцом",
  "Источники трафика: как глубоко погрузиться в зарубежных специалистов в вашем городе"];

  templateName = [
    "Шаблон №1",
  "Новое название",
  "Тестовый шаблон",
  "Тестовый финальный",
  "Утвержденный",
  "Точно последний"];

  statusList = [
  'Запланированно',
  'Черновик',
  'Выполнено',
  'Отменено',
  'Выполняется'];

  typeList = [
    'e-mail',
    'sms',
  ];

  constructor() {
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  getRandomValueFromList(list: string[]): string{
    let r = this.getRandomInt(0, list.length);
    return list[r];
  }

  randomDate(start, end) {
    return new Date(start.getTime()
            + Math.random() * (end.getTime() - start.getTime()));
  }


  getSessionsModel(): SentSessionModel[]{
    let sessionList = [];

    for(let i = 1; i < 20; i++){
      sessionList.push({
        id: i,
        name: this.getRandomValueFromList(this.titleList),
        date: this.randomDate(new Date(2016, 0, 1), new Date()),
        type: this.getRandomValueFromList(this.typeList),
        count: this.getRandomInt(125, 2678),
        template: this.getRandomValueFromList(this.templateName),
        status: this.getRandomValueFromList(this.statusList)
      });
    }

    return sessionList;
  }

}
