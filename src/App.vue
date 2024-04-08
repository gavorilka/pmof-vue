<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue';
import {Pagination, Grid, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import {onMounted, reactive, ref} from "vue";
import { Modal } from 'bootstrap'


const showToastSuccess = ref(false)
const showToastError = ref(false)
const responseMessage = ref('')
const questionModal = ref(null)
const loading = ref(false)
const closeModal = () => Modal.getInstance(questionModal.value)?.hide()

const partnerLogo = [
    {src:"/pic/partners/tegratech.svg", title:"Tegratech", link:"https://xn--80affcz7ale.xn--p1ai"},
    {src:"/pic/partners/Eljur_logo.svg", title:"ООО «Веб-Мост»", link:"https://eljur.ru"},
    {src:"/pic/partners/pelikan_logo.svg", title:"ЗАО «ВИЗАРДСОФТ»", link:"https://pelikan.online"},
    {src:"/pic/partners/MEO_Logo.svg", title:"ООО «Мобильное Электронное Образование»", link:"https://mob-edu.ru"},
    {src:"/pic/partners/ModumLab.svg", title:"ModumLab", link:"https://modumlab.com"},
    {src:"/pic/partners/VectorLogo.svg", title:"ООО«Вектор»", link:"https://vector-ld.ru"},
    //{src:"", title:"", link:""},
]

const validateTextarea = (event) => {
  const errorMsg = "Не соответствует формату"
  const textarea = event.target
  const pattern = new RegExp( textarea.getAttribute('pattern') )
  const valueLines = textarea.value.split("\n")

  valueLines.forEach(function(line) {
    if (line.trim() === '') {
      return true; // Пропускаем пустые строки
    }
    let hasError = !line.match(pattern)
    if (typeof textarea.setCustomValidity === 'function') {
      textarea.setCustomValidity(hasError ? errorMsg : '')
    } else {
      if (hasError) {
        textarea.setAttribute('title', errorMsg)
      } else {
        textarea.removeAttribute('title')
      }
    }
    return !hasError
  })
}
const formatPhone = (event) =>  {
  let phone = event.target.value
  const x = phone.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/)
  if (x[1] === '7' || x[1] === '8') {
    x[1] = '+7'
  } else {
    x[2] = x[1]
    x[1] = '+7'
  }
  phone = !x[3]
      ? x[1] + ' (' + x[2]
      : x[1] + ' (' + x[2] + ') ' + x[3] + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '')
  event.target.value = phone
}

const messageData = reactive( {
  name: '',
  email: '',
  phone: '',
  message: '',
  files: null,
  agreement: true,
})
const handleFileChange = (event) => {
  messageData.files = event.target.files
}

const sendMessage = async () => {
  loading.value = true
  const Url = new URL(window.location)
  const url = `${Url.protocol}//${Url.hostname}${Url.port?':'+Url.port:''}/${import.meta.env.VITE_API_PREFIX}/email`
  const formData = new FormData()
  for (const [key, val] of Object.entries(messageData)) {
    if(key != 'files'){
      formData.append(key, val)
    } else {
      if (val){
        for (const fileIndex in val) {
          formData.append('files', val[fileIndex])
        }
      }
    }

  }
  try {
    const request = await fetch(url, {
      method: 'POST',
      body: formData,
    })
    const response = await request
    if (response.ok) {
      // Успешно отправлено
      const data = await response.json()
      responseMessage.value = data.message
      showToastSuccess.value = true
      closeModal()
      loading.value = false
      setTimeout(() => {
        showToastSuccess.value = false
      }, 3000)
      messageData.name = ''
      messageData.email = ''
      messageData.phone = ''
      messageData.message = ''
      messageData.files = null
      messageData.agreement = true
      console.log('Данные успешно отправлены:', data )
    } else {
      // Обработка ошибки при отправке
      responseMessage.value = 'Ошибка при отправке данных'
      showToastError.value = true
      setTimeout(() => {
        showToastError.value = false
      }, 3000)
      // console.error('Ошибка при отправке данных:', response.statusText)
    }
  } catch (error) {
    responseMessage.value = 'Ошибка при отправке данных:'
    setTimeout(() => {
      showToastError.value = false
    }, 3000)
    //console.error('Ошибка при отправке данных:', error.message)
  }
}


onMounted(() => {
  const forms = document.querySelectorAll('.needs-validation');
  forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      if (!form.checkValidity()) {
        event.stopPropagation()
      } else {
        sendMessage()
      }
      form.classList.add('was-validated')
    })

    form.addEventListener('input', () => {
      if (form.checkValidity()) {
        form.classList.remove('was-validated')
      }
    })
  })
})

</script>

<template>
  <header class="header navbar navbar-expand-lg navbar-dark bg-primary">
    <nav class="container mb-3 mt-3">
      <div class="logo-container d-flex align-items-center">
        <a class="navbar-brand" href="https://www.eduforum.spb.ru" target="_blank">
          <img src="/pic/logoPfom.svg" class="img-fluid logo" alt="Петербургский международный образовательный форум">
        </a>
        <a class="navbar-brand d-none d-sm-block" href="https://xn--2024-u4d6b7a9f1a.xn--p1ai" target="_blank">
          <img src="/pic/logoYearFamily.svg" class="img-fluid logo-small" alt="Год семьи">
        </a>
        <a class="navbar-brand d-sm-none" href="https://xn--2024-u4d6b7a9f1a.xn--p1ai" target="_blank">
          <img src="/pic/shortLogoYearFamily.svg" class="img-fluid logo-small" alt="Год семьи">
        </a>
        <a class="navbar-brand" href="https://licey369.ru/" target="_blank">
          <img src="/pic/logoBlue.svg" class="img-fluid logo-small" alt="Лицей №&nbsp;369">
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
            <button class="nav-link" data-bs-toggle="modal" data-bs-target="#questionModal">Обратная связь</button>
          </li>
        </ul>
      </div>
    </nav>
    <div ref="questionModal" class="modal fade questionModal" id="questionModal" tabindex="-1" aria-labelledby="questionModal" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title fs-5" id="questionModalLabel">Обратная связь</h2>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
          </div>
          <div class="modal-body">
            <form class="row g-3 needs-validation" novalidate>
              <fieldset v-bind:disabled="loading">
                <div class="mb-3">
                  <label for="questionFio" class="form-label">ФИО</label>
                  <input v-model="messageData.name" type="text" class="form-control" id="questionFio" placeholder="Иванов Иван Иванович" pattern="^[А-ЯЁ][а-яё]{1,}\s[А-ЯЁ][а-яё]{1,}(\s[А-ЯЁ][а-яё]{1,})?$" required>
                </div>
                <div class="mb-3">
                  <label for="questionEmail" class="form-label">Email</label>
                  <input v-model="messageData.email" type="email" class="form-control" id="questionEmail" placeholder="simple@example.ru" pattern="([A-zА-я])+([0-9\-_\+\.])*([A-zА-я0-9\-_\+\.]){2,}@([A-zА-я])+([0-9\-_\+\.])*([A-zА-я0-9\-_\+\.])*[\.]([A-zА-я])+" required>
                </div>
                <div class="mb-3">
                  <label for="questionPhone" class="form-label">Телефон</label>
                  <input v-model="messageData.phone" @input="formatPhone" type="tel" class="form-control" id="questionPhone" placeholder="+7 (880) 555 35 35" pattern="^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$" required>
                </div>
                <div class="mb-3">
                  <label for="questionText" class="form-label">Вопрос</label>
                  <textarea v-model="messageData.message" @input="validateTextarea" class="form-control" id="questionText" rows="3" pattern="^[А-Яа-яЁё\s\d.,!?:;\-&quot;&apos;&laquo;&raquo;()/\\]+$" placeholder="Вопрос состоит из кириллического текста со знаками препинания и арабскими цифрами" required></textarea>
                </div>
                <div class="mb-3">
                  <label class="form-label" for="questionFile">Файл</label>
                  <input @change="handleFileChange" type="file" class="form-control" id="questionFile" />
                </div>
                <div class="mb-3 form-check">
                  <input v-model="messageData.agreement" type="checkbox" class="form-check-input" id="questionAgreement" required>
                  <label class="form-check-label" for="questionAgreement">Я даю согласие на обработку персональных данных в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных»</label>
                </div>
                <div class="col-12">
                  <button class="btn btn-primary" type="submit">Отправить</button>
                </div>
              </fieldset>
            </form>
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
            Телефон: <a href="tel:+78122468990p8007" >(812) 246-89-90, 8007</a>
          </div>
          <div>
            Адрес: 198330, Санкт-Петербург, ул. Маршала Захарова, д. 58
          </div>
        </address>
        <div class="col-md-6 px-5">
          <iframe
              class="map"
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A4730123501ab88bffc8b2e671815b05bea6421b6b855355ceef622d3872d936d&amp;source=constructor"
          >
          </iframe>
        </div>
      </div>
    </div>
    <div class="row pt-3">
      <div class="col-md-8 partner px-0">
        <h3 class="text-md-start px-5 mt-2">Партнёры</h3>
        <Swiper
            class="partnerSwiper px-1"
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
          <SwiperSlide v-for=" (item, key) in partnerLogo" :key="key">
            <a :href="item.link" target="_blank">
              <img :src="item.src" :alt="item.title" />
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
              <img class="img-fluid" src="/pic/soc/VK_logo.svg" alt="Вконтакте Лицея 369">
            </a>
            <a href="https://www.youtube.com/@No-rb4jq" target="_blank">
              <img class="img-fluid" src="/pic/soc/Youtube_logo.svg" alt="YouTube канал Лицея 369">
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5 row text-center justify-content-center justify-content-sm-center">
      <a href="https://licey369.ru" class="text-light link-info nav-link">&copy; Лицей №&nbsp;369, 2024</a>
    </div>
  </footer>
  <!-- Добавляем элемент Toast для успешной отправки -->
  <div style="z-index: 9999" class="mt-5 toast position-absolute top-0 start-50 translate-middle-x" role="alert" aria-live="assertive" aria-atomic="true" :class="{ 'show': showToastSuccess }">
    <div class="toast-header bg-success text-white">
      <strong class="me-auto">Успешно!</strong>
      <button type="button" class="btn-close" @click="showToastSuccess = false"></button>
    </div>
    <div class="toast-body">
      {{ responseMessage }}
    </div>
  </div>

  <!-- Добавляем элемент Toast для ошибки отправки -->
  <div style="z-index: 9999" class="mt-5 toast position-absolute top-0 start-50 translate-middle-x" role="alert" aria-live="assertive" aria-atomic="true" :class="{ 'show': showToastError }">
    <div class="toast-header bg-danger text-white">
      <strong class="me-auto">Ошибка!</strong>
      <button type="button" class="btn-close" @click="showToastError = false"></button>
    </div>
    <div class="toast-body">
      {{ responseMessage }}
    </div>
  </div>
</template>
<style scoped lang="scss">
  .map {
    width: 70%;
    height: 235px;
    @media (max-width: 1080px) {
      & {
        width: 80%;
      }
    }
    @media (max-width: 920px) {
      & {
        width: 90%;
      }
    }
    @media (max-width: 768px) {
      & {
        width: 70%;
      }
    }
    @media (max-width: 576px) {
      & {
        width: 100%;
      }
    }
  }
</style>