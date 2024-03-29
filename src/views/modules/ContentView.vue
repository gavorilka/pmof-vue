<script setup>
  const contentData = [
    {src:"https://www.youtube.com/embed/yTZ88PCHu7M?si=cIiBnhf5Cc6rqj5g", title:"О проведении мероприятий для обучающихся начальной школы, направленных на знакомство с профессиями"},
    {src:"https://www.youtube.com/embed/rQy8tYkOMMA?si=ocO8Revxq0lkLWve", title:"О модели естественно-научной профориентации и профессиональных пробах обучающихся Лицея № 369\n"},
    {src:"https://www.youtube.com/embed/Lx1-En3tBro?si=YRoh3Sx2dXTIiCWi", title:"Нормативно-правовая основа осуществления образовательной деятельности и опыт перехода на ФООП\n"},
    {src:"https://www.youtube.com/embed/glLeF0Wn-28?si=elj45OtrkXls0O-d", title:"Образ современного урока в Лицее № 369, Е.В. Ильина, учитель иностранного языка, Лицей № 369\n"},
    //{src:"", title:""},
  ]
</script>

<template>
  <h1 class="mb-4">Модуль «#PROсодержание»</h1>
  <ul>
    <li>О формировании групп по учебным предметам с учётом образовательных потребностей обучающихся.</li>
    <li>О подходах к профориентационной работе.</li>
    <li>О нормативной правовой основе осуществления образовательной деятельности.</li>
    <li>О портрете современного урока.</li>
  </ul>
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