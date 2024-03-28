<script setup>
  const answersData = [
    { src:"https://www.youtube.com/embed/ikkQh4q6h9w?si=6-I2MXNXfrPC9_4T", title:"Какие новейшие технологии у вас используются на уроках ИЗО?"},
    { src:"https://www.youtube.com/embed/4EmisYNcJCI?si=conCmx-drLHM5ZOV", title:"Какие традиции есть в вашем лицее?"},
    { src:"https://www.youtube.com/embed/XShmDfK81vQ?si=3aTI3DPQXmyU7sOz", title:"Кто главный в образовательном процессе?"},
    { src:"https://www.youtube.com/embed/MbmgBVEtyd4?si=tz8HbzhsU3yloQh9", title:"О финансировании лицея"},
    { src:"https://www.youtube.com/embed/R8v2OUhg0Vo?si=X-3blsOa1HX9aMjn", title:"Об организации обучения детей с ОВЗ"},
    { src:"https://www.youtube.com/embed/Imc-xR2Mlnw?si=13bcjNMrq8Rs52Dr", title:"О наполняемости контингента и правилах приема"},
    { src:"https://www.youtube.com/embed/YuAj0JC12k8?si=ex7MMmSXSabxaSOl", title:"О техническом обслуживании оборудования"},
    { src:"https://www.youtube.com/embed/qTTPEfPzO7k?si=9ELCascJiYI2g2k0", title:"О делении на потоки групп по изучению иностранных языков"},
    { src:"https://www.youtube.com/embed/w31fi3sBH5w?si=pQ7VgO3KSxeDHEgI", title:"О досуге детей младшего школьного возраста."},
    { src:"https://www.youtube.com/embed/ffOFEqb3pqk?si=R3dY_lJOat8oyEKA", title:"О свободе самовыражения детей"},
    { src:"https://www.youtube.com/embed/3iR19QZecZY?si=p69CO7aYE1Sq2WIi", title:"О сотрудничестве с Лицеем"},
    { src:"https://www.youtube.com/embed/AvTzlFuyl0g?si=_GhuThzOf9WTbQGh", title:"Учитель - \"оценщик\"? О неуспевающих учениках"},
    { src:"https://www.youtube.com/embed/1aqcZ-RUf3A?si=gdRvPosD1MShJXh5", title:"Что мешает цифровой образовательной среде Санкт-Петербурга?"},
    { src:"https://www.youtube.com/embed/N5xqvAfORWU?si=ND80moe0DmpOercs", title:"Путь для администрации школы. Где и у кого учиться?"},
    { src:"https://www.youtube.com/embed/uauD7ga6Yjc?si=74Lng1q57JtGzM0M", title:"Об отношении родителей к цифровым технологиям"},
    { src:"https://www.youtube.com/embed/E2FBHCnDgTQ?si=aSth2GjkspNjulHz", title:"О знаках отличия лицеистов"},
    { src:"https://www.youtube.com/embed/9-kWG_7xpBk?si=M2SVYjk14kPSuvLe", title:"Об изменении успеваемости после внедрения технологий"},
    { src:"https://www.youtube.com/embed/i5t_eQ8U88U?si=WMYNTa_lW34KrYT-", title:"Что делать школе в отсутствии техники? "},
    { src:"https://www.youtube.com/embed/Ab_91TC1s8M?si=xKFlaf81Gt35cy3M", title:"О тайминге учителя"},
    { src:"https://www.youtube.com/embed/UsHzdKr-eIY?si=0E3Uvj-yBhKMEGD5", title:"Об оптимальной нагрузке учителя-предметника"},
    { src:"https://www.youtube.com/embed/jPe7CU0i1KE?si=n8dVXO3YWkKZgzkn", title:"Объём домашних заданий"},
    { src:"https://www.youtube.com/embed/151JP8374pA?si=VMFqi4t5KIXP77gL", title:"Где, когда, чем и на чём пишут лицеисты?"},
    { src:"https://www.youtube.com/embed/FUAbUAxG9xs?si=V1l5Y9DSqcBIkkYq", title:"О сбоях АИСУ \"Параграф\""},
    { src:"https://www.youtube.com/embed/74uGl59nzVU?si=LYAsDS7-OTIgLVex", title:"Об ошибках в КИМах"},
    { src:"https://www.youtube.com/embed/-8Ku89aJUfY?si=e_4oFoWyigivpzLL", title:"О рейтинге лицеистов"},
    { src:"https://www.youtube.com/embed/bU0FelYHT7E?si=4eo0bXlppLnqLQXl", title:"О предметном образовании в начальной школе"},
    { src:"https://www.youtube.com/embed/x_nJ_5WaHKo?si=3b0CX9UwGe-baGD8", title:"Как стать учителем Лицея № 369? "},
    { src:"https://www.youtube.com/embed/GBHR-hIyGLw?si=Ton78BSnuIE7G2dW", title:"О дополнительном образовании в Лицее"},
    { src:"https://www.youtube.com/embed/fopvaZei8UE?si=Yak-QpiEeN7SZJb4", title:"О трудностях диалога с родителями учащихся"},
    { src:"https://www.youtube.com/embed/_h3oT58d5lE?si=Xc26Pd9CJ5ZQwm4F", title:"С чего началась цифровизация Лицея?"},

    //{ src:"", title:""},
  ]
</script>
<template>
  <h1 class="mb-4">Ответы на вопросы</h1>
  <div class="accordion mb-4" id="accordionLesson">
    <div v-for="(accItem, key) in answersData" :key="key" class="accordion-item">
      <h2 class="accordion-header" :id="'heading'+ key">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse'+key" aria-expanded="false" :aria-controls="'collapse'+key">
          {{accItem.title}}
        </button>
      </h2>
      <div :id="'collapse'+key" class="accordion-collapse collapse" :aria-labelledby="'heading'+key" data-bs-parent="#accordionLesson">
        <div class="accordion-body">
          <div class="promo p-2">
            <iframe
                class="promo-media"
                :src="accItem.src"
                :title="accItem.title"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>