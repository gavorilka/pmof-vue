<script setup>
const contentData = [
  {src:"https://www.youtube.com/embed/1Vd5Lv-skvg?si=8VnBXcKFHtpgAhdg", title:"«Об информатизации образования», Кирилова В.А., заместитель директора по информатизации, Лицей № 369"},
  //{src:"", title:""},
]
</script>

<template>
  <h1 class="mb-4">Модуль «#PROцели»</h1>
  <h2 class="text-success">О чём:</h2>
  <p>
    Модуль посвящён системе управления образовательной деятельностью современной школы, позволяющей достигать федеральных, региональных и локальных целевых установок, направленной на обеспечение конкурентоспособности участников образовательных отношений и воспитание гармонично развитой и социально ответственной личности.
  </p>
  <h2 class="text-success">Что узнаете:</h2>
  <ul>
    <li>Как создать и осуществлять управление командой образовательной организации при выполнении госзадания и достижении целей приоритетных направлений развития экономики страны.</li>
    <li>О формировании конкурентоспособного всесторонне развитого общества на уровне общего образования.</li>
    <li>О воспитании патриотизма и духовной нравственности.</li>
  </ul>
  <h2 class="text-success">Тренды:</h2>
  <ul>
    <li>Методы эффективного управления образовательной организацией.</li>
    <li>Сохранение традиционных ценностей, памяти о героях страны, ценности семьи.</li>
    <li>Виртуальная реальность.</li>
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