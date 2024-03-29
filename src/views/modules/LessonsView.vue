<script setup>
const contentData = [
  {src:"https://www.youtube.com/embed/cquE-PRpFvQ?si=ML3A39xPoYQ1QyzM", title:"Инструкция пеликан"},
  //{src:"", title:""},
]
</script>

<template>
  <h1 class="mb-4">Модуль «#PROурок»</h1>
  <ul>
    <li>Об отдельных методических подходах, используемых в Лицее №&nbsp;369.</li>
    <li>Об использовании цифровых устройств, сервисов и ресурсов в образовательном процессе.</li>
    <li>Об использовании специализированного оборудования при изучении предметов естественно-научной направленности.</li>
  </ul>
  <div class="accordion mb-4" id="accordionLesson">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
          #PROурокМАТЕМАТИКИ
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionLesson">
        <div class="accordion-body">
          <div><strong>Тема урока: </strong>Действия с десятичными дробями</div>
          <div><strong>Учитель: </strong>Чернаускас Светлана Владимировна</div>
          <div><strong>Класс: </strong>5</div>
          <a href="https://369.pelikan.online/events/94125">Смотреть запись</a>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          #PROурокИНФОРМАТИКИ
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionLesson">
        <div class="accordion-body">
          <div><strong>Тема урока: </strong>Составление и отладка программ, реализующих алгоритмы решения задач с помощью динамического программирования. Практическая работа</div>
          <div><strong>Учитель: </strong>Скотников Вадим Борисович</div>
          <div><strong>Класс: </strong>9</div>
          <a href="https://369.pelikan.online/events/94141">Смотреть запись</a>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingFour">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
          #PROурокХИМИИ
        </button>
      </h2>
      <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionLesson">
        <div class="accordion-body">
          <div><strong>Тема урока: </strong>Решение экспериментальных задач по теме "Важнейшие металлы и их соединения"</div>
          <div><strong>Учитель: </strong>Соколова Тамара Леонидовна</div>
          <div><strong>Класс: </strong>9</div>
          <a href="https://369.pelikan.online/events/94565/">Смотреть запись</a>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingFive">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
          #PROурокФИЗИКИ
        </button>
      </h2>
      <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionLesson">
        <div class="accordion-body">
          <div><strong>Тема урока: </strong>Лабораторная работа "Определение работы и мощности электрического тока в электрической лампе"</div>
          <div><strong>Учитель: </strong>Казакова Лилия Валерьевна</div>
          <div><strong>Класс: </strong>8</div>
          <a href="https://369.pelikan.online/events/94528/">Смотреть запись</a>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingSix">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
          #PROурокБИОЛОГИИ
        </button>
      </h2>
      <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionLesson">
        <div class="accordion-body">
          <div><strong>Тема урока: </strong>Транспорт веществ в растении</div>
          <div><strong>Учитель: </strong>Кунаева Светлана Александровна</div>
          <div><strong>Класс: </strong>6</div>
          <a href="https://369.pelikan.online/events/94486/">Смотреть запись</a>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingSeven">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
          #PROурокИНОСТРАННОГО_ЯЗЫКА
        </button>
      </h2>
      <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionLesson">
        <div class="accordion-body">
          <div><strong>Тема урока: </strong>Проблемы окружающей среды</div>
          <div><strong>Учитель: </strong>Кинслер Екатерина Владимировна</div>
          <div><strong>Класс: </strong>9</div>
          <div class="promo">
            <iframe
                class="promo-media"
                src="https://www.youtube.com/embed/0U0oDvqntgo?si=kaYxnnWMdni5uuPU"
                title="#PROурокИНОСТРАННОГО_ЯЗЫКА"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingEight">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
          #PROурокТЕХНОЛОГИИ
        </button>
      </h2>
      <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionLesson">
        <div class="accordion-body">
          <div class="accordion accordion-flush" id="accordionTechnology">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  Мастерская домоводства
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionTechnology">
                <div class="accordion-body">
                  <div><strong>Тема урока: </strong>Технологии обработки пищевых продуктов</div>
                  <div><strong>Учитель: </strong>Дымбовская Светлана Николаевна</div>
                  <div><strong>Класс: </strong>6</div>
                  <div class="promo">
                    <iframe
                        class="promo-media"
                        src="https://www.youtube.com/embed/wFXkMmf2Bhs?si=2WtxSA_6WJKxCzct"
                        title="Урок технологии (мастерская домоводства)"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  Мастерская по обработке тканей
                </button>
              </h2>
              <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionTechnology">
                <div class="accordion-body">
                  <div><strong>Тема урока: </strong>Технологические операции по пошиву изделия. Оценка качества шейного изделия</div>
                  <div><strong>Учитель: </strong>Ярыгина Наталья Викторовна</div>
                  <div><strong>Класс: </strong>5</div>
                  <div class="promo">
                    <iframe
                        class="promo-media"
                        src="https://www.youtube.com/embed/irNL5k25BQM?si=UuaWjCBzt5TJ8S77"
                        title="Урок технологии (мастерская по обработке тканей)"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  Мастерская по деревообработке
                </button>
              </h2>
              <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionTechnology">
                <div class="accordion-body">
                  <div><strong>Тема урока: </strong>Технологии обработки конструкционных материалов</div>
                  <div><strong>Учитель: </strong>Муртаев Алишер Нурханжанович</div>
                  <div><strong>Класс: </strong>6</div>
                  <div class="promo">
                    <iframe
                        class="promo-media"
                        src="https://www.youtube.com/embed/fbStHCJq4-U?si=YOrDkKXPsR-VFJ_L"
                        title="Урок технологии (мастерская по деревообработке)"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row mt-4">
    <div v-for="(item, key) in contentData" :key="key" class="col-md-6">
      <iframe
          class="video-two-col"
          :src="item.src"
          :title="item.title"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
      >
      </iframe>
    </div>
  </div>
</template>

<style scoped>

</style>