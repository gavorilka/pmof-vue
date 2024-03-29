<script setup>
const contentData = [
  {src:"https://www.youtube.com/embed/1Vd5Lv-skvg?si=8VnBXcKFHtpgAhdg", title:"«Об информатизации образования», Кирилова В.А., заместитель директора по информатизации, Лицей № 369"},
  {src:"https://www.youtube.com/embed/NeFvy3QF-lk?si=tKOrOKioJE14-2Kn", title: "ПМОФ 2024 ProЦели"}
  //{src:"", title:""},
]
</script>

<template>
  <h1 class="mb-4">Модуль «#PROцели»</h1>
  <ul>
    <li>Как создать и осуществлять управление командой образовательной организации при выполнении госзадания и достижении целей приоритетных направлений развития экономики страны.</li>
    <li>О формировании конкурентоспособного всесторонне развитого общества на уровне общего образования.</li>
    <li>О воспитании патриотизма и духовной нравственности.</li>
  </ul>
  <div class="row mt-4 row-gap-4">
    <div v-for="(item, key) in contentData" :key="key" class="col-md-6">
      <div class="frame-block">
        <iframe
            :src="item.src"
            :title="item.title"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            width="560"
            height="315"
        >
        </iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>