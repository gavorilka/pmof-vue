<script setup>
function adjustColspan() {
  const rows = document.querySelectorAll('.sm-offset-col')
  const windowWidth = window.innerWidth

  rows.forEach(row => {
    if (windowWidth > 576) {
      row.removeAttribute('colspan')
    } else {
      row.setAttribute('colspan', '2')

    }
  })
}

// Вызов функции после загрузки DOM
document.addEventListener('DOMContentLoaded', adjustColspan);

// Вызов функции при изменении размера окна
window.onresize = adjustColspan;
</script>
<template>
  <h1 class="mb-4 text-center">
    <div>Программа</div>
    <div>открытой международной научно&#8209;практической стрим&#8209;конференции</div>
    <div>«Пять новелл петербургского образования. #PROЛицей»</div>
  </h1>
  <table id="program" class="table table-hover">
    <thead>
    <tr>
      <th class="first-col" scope="col">Время</th>
      <th scope="col">Мероприятие</th>
      <th scope="col">Спикер</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <th scope="row">10:00-10:10</th>
      <th colspan="2">Открытие стрим-конференции</th>
    </tr>
    <tr>
      <td class="d-none d-sm-table-cell"></td>
      <td class="sm-offset-col"></td>
      <td>Каретина Юлия Юрьевна, начальник отдела государственной аккредитации образовательной деятельности Управления по надзору и контролю за соблюдением законодательства в сфере образования Комитета по образованию</td>
    </tr>
    <tr>
      <td class="d-none d-sm-table-cell"></td>
      <td class="sm-offset-col"></td>
      <td>Тимофеев Сергей Павлович, заместитель главы администрации Красносельского района Санкт-Петербурга</td>
    </tr>
    <tr>
      <th scope="row">10:10-10:25</th>
      <th colspan="2">Модуль «#PROцели»</th>
    </tr>
    <tr>
      <td class="d-none d-sm-table-cell"></td>
      <td class="sm-offset-col">О современной образовательной организации и целях создания высокотехнологичной образовательной среды</td>
      <td>Тхостов Константин Эдуардович, директор Лицея №&nbsp;369</td>
    </tr>
    <tr>
      <td class="d-none d-sm-table-cell"></td>
      <td class="sm-offset-col">Об информатизации образования</td>
      <td>Кирилова Виктория Александровна, заместитель директора по информатизации Лицея №&nbsp;369</td>
    </tr>
    <tr>
      <th scope="row">10:25-10:55</th>
      <th colspan="2">Модуль «#PROсодержание»</th>
    </tr>
    <tr>
      <td class="d-none d-sm-table-cell"></td>
      <td class="sm-offset-col">Об особенностях формирования и реализации учебных планов. Анонс следующего выступления.</td>
      <td>Тхостов Константин Эдуардович, директор Лицея №&nbsp;369</td>
    </tr>
    <tr>
      <td class="d-none d-sm-table-cell"></td>
      <td class="sm-offset-col">О проведении мероприятий для обучающихся начальной школы, направленных на знакомство с профессиями</td>
      <td>Короленко Наталья Леонидовна, заместитель директора по учебной работе Лицея №&nbsp;369</td>
    </tr>
    <tr>
      <td class="d-none d-sm-table-cell"></td>
      <td class="sm-offset-col">О модели естественно-научной профориентации и профессиональных пробах обучающихся Лицея №&nbsp;369</td>
      <td>Алябьева Виктория Петровна, заведующий лабораторией Лицея №&nbsp;369</td>
    </tr>
    <tr>
      <td class="d-none d-sm-table-cell"></td>
      <td class="sm-offset-col">Нормативно-правовая основа осуществления образовательной деятельности и практический опыт перехода на федеральные основные общеобразовательные программы</td>
      <td>Чурсина Ксения Александровна, старший методист Лицея №&nbsp;369</td>
    </tr>
    <tr>
      <td class="d-none d-sm-table-cell"></td>
      <td class="sm-offset-col">Образ современного урока в Лицее №&nbsp;369</td>
      <td>Ильина Евгения Валерьевна, учитель иностранного языка Лицея №&nbsp;369</td>
    </tr>
    <tr>
      <th scope="row">10:55-11:01</th>
      <th colspan="2">Модуль «#PROурок»</th>
    </tr>
    <tr>
      <td class="d-none d-sm-table-cell"></td>
      <td class="sm-offset-col">О подходе к организации и проведению урока в Лицее №&nbsp;369</td>
      <td>Тхостов Константин Эдуардович, директор Лицея №&nbsp;369</td>
    </tr>
    <tr>
      <td class="d-none d-sm-table-cell"></td>
      <td colspan="3">#PROурокМАТЕМАТИКИ</td>
      <td class="d-none d-sm-table-cell"></td>
    </tr>
    <tr>
      <td class="d-none d-sm-table-cell"></td>
      <td colspan="3">#PROурокИНФОРМАТИКИ</td>
      <td class="d-none d-sm-table-cell"></td>
    </tr>
    <tr>
      <td class="d-none d-sm-table-cell"></td>
      <td colspan="3">#PROурок&#173;РУССКОГО_ЯЗЫКА&#173;_И_ЛИТЕРАТУРЫ</td>
      <td class="d-none d-sm-table-cell"></td>
    </tr>
    <tr>
      <td class="d-none d-sm-table-cell"></td>
      <td colspan="3">#PROурокХИМИИ</td>
      <td class="d-none d-sm-table-cell"></td>
    </tr>
    <tr>
      <td class="d-none d-sm-table-cell"></td>
      <td colspan="3">#PROурокФИЗИКИ</td>
      <td class="d-none d-sm-table-cell"></td>
    </tr>
    <tr>
      <td class="d-none d-sm-table-cell"></td>
      <td colspan="3">#PROурокБИОЛОГИИ</td>
      <td class="d-none d-sm-table-cell"></td>
    </tr>
    <tr>
      <td class="d-none d-sm-table-cell"></td>
      <td colspan="3">#PROурокИНОСТРАННОГО_ЯЗЫКА</td>
      <td class="d-none d-sm-table-cell"></td>
    </tr>
    <tr>
      <td class="d-none d-sm-table-cell"></td>
      <td colspan="3">#PROурокТЕХНОЛОГИИ</td>
      <td class="d-none d-sm-table-cell"></td>
    </tr>
    <tr>
      <th scope="row">11:01-11:10</th>
      <th colspan="2">Модуль «#PROистину»</th>
    </tr>
    <tr>
      <td class="d-none d-sm-table-cell"></td>
      <td class="sm-offset-col">#PROЛицей369&#173;_ГЛАЗАМИ_УЧАЩИХСЯ</td>
      <td>Учащиеся Лицея №&nbsp;369</td>
    </tr>
    <tr>
      <th scope="row">11:10-11:30</th>
      <th colspan="2">Модуль «#PROпартнёрство»</th>
    </tr>
    <tr>
      <td class="d-none d-sm-table-cell"></td>
      <td class="sm-offset-col">О сетевой форме реализации образовательных программ в рамках курсов внеурочной деятельности</td>
      <td>Степанова Раиса Вячеславовна, заместитель директора по воспитательной работе Лицея №&nbsp;369</td>
    </tr>
    <tr>
      <td class="d-none d-sm-table-cell"></td>
      <td class="sm-offset-col">О современных подходах к образованию в Российской Федерации</td>
      <td>Кондаков Александр Михайлович, генеральный директор ООО «МЭО», д. п. н., член-корреспондент РАО</td>
    </tr>
    <tr>
      <th scope="row">11:30-12:40</th>
      <th colspan="2">Ознакомление с видеоматериалами стрим-конференции</th>
    </tr>
    <tr>
      <td class="d-none d-sm-table-cell"></td>
      <td class="sm-offset-col">Уроки Лицея №&nbsp;369</td>
      <td>Видеоматериалы, размещённые на сайте конференции в модуле «#PROурок»</td>
    </tr>
    <tr>
      <td class="d-none d-sm-table-cell"></td>
      <td class="sm-offset-col">Витрина образовательных решений партнёров Лицея №&nbsp;369</td>
      <td>Видеоматериалы, размещённые на сайте конференции в модуле «#PROпартнёрство»</td>
    </tr>
    <tr>
      <th scope="row">12:40-13:00</th>
      <th colspan="2">Кофе-брейк</th>
    </tr>
    <tr>
      <th scope="row">13:00-14:00</th>
      <th colspan="2">Живой диалог с директором Лицея №&nbsp;369</th>
    </tr>
    <tr>
      <td class="d-none d-sm-table-cell"></td>
      <td class="sm-offset-col">(ответы на вопросы)</td>
      <td>Тхостов Константин Эдуардович, директор Лицея №&nbsp;369</td>
    </tr>
    </tbody>
  </table>
  <div class="text-center">
    <a class="mt-3 btn btn-outline-danger text-danger hover-success" href="/other/program.pdf" target="_blank" download="ПМОФ_2024_Лицей_№_369_Программа_конференции.pdf">Скачать программу</a>
  </div>
</template>