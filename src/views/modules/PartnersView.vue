<script setup>
const partnerVideos = [
  {src:"https://www.youtube.com/embed/8_D4hQ4QXMc?si=EcXk3mo7JTrMmX5U", title:"Tegratech"},
  {src: "https://www.youtube.com/embed/H608i4grXoY?si=Ilz85tOVq5YJUYT3", title: "ООО «Веб-Мост»"},
  {src:"https://www.youtube.com/embed/hAEtLX_kSgA?si=Hszq_MbTxR2dehCL", title:"ЗАО «ВИЗАРДСОФТ»"},
  {src:"https://www.youtube.com/embed/uGoSK2cPp5Y?si=ib0Fq_Y-3OOvYOja", title:"Modum Lab"},
  {src:"https://www.youtube.com/embed/xFyi44HBA70?si=peaGJlaL_Hx7apUA", title:"ООО «Вектор»"},
  {src:"https://www.youtube.com/embed/QqfdQqLI59A?si=1r0wXNyonQv6hRxD", title:"ООО «МЭО»"},
  //{src:"", title:""},
]
</script>

<template>
  <h1 class="mb-4">Модуль «#PROпартнёрство»</h1>
  <ul>
    <li>О реализации образовательных программ в сетевой форме с ведущими образовательными, научными и промышленными партнёрами.</li>
    <li>Об обмене методическим и технологическим опытом с целью создания качественных продуктов для цифровой экономики страны.</li>
    <li>О доступности качественных российских продуктов для оснащения современной школы.</li>
  </ul>
  <h2 class="mt-4 text-success">О сетевой форме реализации образовательных программ в рамках курсов внеурочной деятельности</h2>
  <div class="p-2">
    <div class="frame-block">
      <iframe
          src="https://www.youtube.com/embed/iy154YHnNZU?si=--MVCqOKN8jLN4R2"
          title="О сетевой форме реализации образовательных программ в рамках курсов внеурочной деятельности"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          width="560"
          height="315"
      ></iframe>
    </div>
  </div>
  <h2 class="mt-4 text-success">О возможностях партнёров</h2>
  <div class="row row-gap-4">
    <div class="col-lg-4 col-md-6" v-for="(item, key) in partnerVideos" :key="key" >
      <div class="frame-block">
        <iframe
            class="video-three-col"
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