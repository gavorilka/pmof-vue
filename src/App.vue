<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue';
import {Pagination, Grid, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/grid';

</script>

<template>
  <header class="header navbar navbar-expand-lg navbar-dark bg-primary">
    <nav class="container mb-3 mt-3">
      <div class="logo-container d-flex align-items-center">
        <a class="navbar-brand" href="https://www.eduforum.spb.ru" target="_blank">
          <img src="/logoPfom.svg" class="img-fluid logo" alt="Петербургский международный образовательный форум">
        </a>
        <a class="navbar-brand d-none d-sm-block" href="https://xn--2024-u4d6b7a9f1a.xn--p1ai" target="_blank">
          <img src="/logoYearFamily.svg" class="img-fluid logo2" alt="Год семьи">
        </a>
        <a class="navbar-brand d-sm-none" href="https://xn--2024-u4d6b7a9f1a.xn--p1ai" target="_blank">
          <img src="/shortLogoYearFamily.svg" class="img-fluid logo2" alt="Год семьи">
        </a>
        <a class="navbar-brand" href="https://licey369.ru/" target="_blank">
          <img src="/logoBlue.svg" class="img-fluid logo2" alt="Лицей №&nbsp;369">
        </a>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mt-3 mt-lg-0 mb-2 mb-lg-2">
          <li class="nav-item">
            <RouterLink class="nav-link" aria-current="page" :to="{name: 'home'}">Главная</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" aria-current="page" :to="{name: 'program'}">Программа</RouterLink>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Модули
            </a>
            <ul class="dropdown-menu bg-info" aria-labelledby="navbarDropdown">
              <li><RouterLink class="dropdown-item text-light link-info" :to="{name:'pro_goals'}">#PROцели</RouterLink></li>
              <li><RouterLink class="dropdown-item text-light link-info" :to="{name:'pro_content'}">#PROсодержание</RouterLink></li>
              <li><RouterLink class="dropdown-item text-light link-info" :to="{name:'pro_lessons'}">#PROурок</RouterLink></li>
              <li><RouterLink class="dropdown-item text-light link-info" :to="{name:'pro_truth'}">#PROистину</RouterLink></li>
              <li><RouterLink class="dropdown-item text-light link-info" :to="{name:'pro_partners'}">#PROпартнёрство</RouterLink></li>
            </ul>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" aria-current="page" :to="{name:'answers'}">Ответы на вопросы</RouterLink>
          </li>
          <li class="nav-item">
            <button class="nav-link" data-bs-toggle="modal" data-bs-target="#questionModal">Задать вопрос</button>
          </li>
        </ul>
      </div>
    </nav>
    <div class="modal fade questionModal" id="questionModal" tabindex="-1" aria-labelledby="questionModal" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title fs-5" id="questionModalLabel">Задать вопрос</h2>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
          </div>
          <div class="modal-body">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSexm5frDg_Lz3PyFyRDhtdAnvqGJYu7pyz_CY8aDS3mRIpgGw/viewform?embedded=true" style="margin: 0; border:none; width:100%; height:100vh;" frameborder="0" marginheight="0" marginwidth="0"></iframe>
          </div>
        </div>
      </div>
    </div>
  </header>
  <main class="main container mt-5 mb-5">
    <RouterView />
  </main>
  <footer class="footer mt-auto">
    <div>
      <div class="row mt-4">
        <address class="col-md-6 px-5">
          <h3>Связаться с нами</h3>
          <div>
            Почта: <a href="mailto:eduforum@licey369.ru?subject=Обращение%20с%20сайта&amp;body=Здравствуйте">eduforum@licey369.ru</a>
          </div>
          <div>
            Телефон: <a href="tel:+78122468990" >(812) 246-89-90, 8007</a>
          </div>
          <div>
            Адрес: 198330, Санкт-Петербург, ул. Маршала Захарова, д. 58
          </div>
        </address>
        <div class="col-md-6 px-5">
          <iframe
              style="width: 80%; height: 235px;"
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A4730123501ab88bffc8b2e671815b05bea6421b6b855355ceef622d3872d936d&amp;source=constructor"
          >
          </iframe>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 partner">
        <h3 class="text-center mt-2">Партнёры</h3>
        <Swiper
            class="partnerSwiper"
            :modules="[ Autoplay ,Grid, Pagination]"
            :loop="true"
            :autoplay = "{
              delay: 2500,
              disableOnInteraction: false,
            }"
            :slidesPerView = "1"
            :spaceBetween = "30"
            :breakpoints = "{
              480: {
              slidesPerView: 2
              },
              968: {
              slidesPerView: 3
              }
            }"
            :pagination="{
              clickable: true,
            }"
        >
            <SwiperSlide>
              <a href="https://xn--80affcz7ale.xn--p1ai" target="_blank">
                <img src="/partners/tegratech.svg" alt="Tegratech" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="https://eljur.ru" target="_blank">
                <img src="/partners/Eljur_logo.svg" alt="ООО «Веб-Мост»" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="https://pelikan.online" target="_blank">
                <img src="/partners/pelikan_logo.svg" alt="ЗАО «ВИЗАРДСОФТ»" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="https://mob-edu.ru" target="_blank">
                <img src="/partners/MEO_Logo.svg" alt="ООО «Мобильное Электронное Образование»" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="https://modumlab.com" target="_blank">
                <img src="/partners/ModumLab.svg" alt="ModumLab" />
              </a>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <a href="https://vector-ld.ru" target="_blank">
                <img src="/partners/VectorLogo.svg" alt="ООО«Вектор»" />
              </a>
            </SwiperSlide>
        </Swiper>
      </div>
      <div class="col-md-4 d-flex justify-content-between align-items-center flex-wrap d-md-block">
        <ul class="mt-5 me-auto mb-0" style="text-transform: uppercase; list-style: none">
          <li><RouterLink class="text-light link-info nav-link" :to="{name:'pro_goals'}">#PROцели</RouterLink></li>
          <li><RouterLink class="text-light link-info nav-link" :to="{name:'pro_content'}">#PROсодержание</RouterLink></li>
          <li><RouterLink class="text-light link-info nav-link" :to="{name:'pro_lessons'}">#PROурок</RouterLink></li>
          <li><RouterLink class="text-light link-info nav-link" :to="{name:'pro_truth'}">#PROистину</RouterLink></li>
          <li><RouterLink class="text-light link-info nav-link" :to="{name:'pro_partners'}">#PROпартнёрство</RouterLink></li>
        </ul>
        <div class="px-5 mt-5 ms-auto social">
          <div class="m-md-5 d-flex gap-3">
            <a href="https://vk.com/licey_369" target="_blank">
              <img class="img-fluid" src="/soc/VK_logo.svg" alt="Вконтакте Лицея 369">
            </a>
            <a href="https://www.youtube.com/@No-rb4jq" target="_blank">
              <img class="img-fluid" src="/soc/Youtube_logo.svg" alt="YouTube канал Лицея 369">
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5 row text-center justify-content-center justify-content-sm-center">
      <a href="https://licey369.ru" class="text-light link-info nav-link">&copy; Лицей №&nbsp;369, 2024</a>
    </div>
  </footer>
</template>
