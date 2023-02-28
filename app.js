require('./bootstrap')
window.Vue = require('vue')
window.axios = require('axios')

/**
 * Imports
 */
import Vue from 'vue';
import axios from 'axios';
import VueTheMask from 'vue-the-mask';
import { isSet } from 'lodash';

Vue.config.productionTip = false;
Vue.use(VueTheMask);

Vue.component('modal', require('./components/modals/default.vue').default);
Vue.component('store-list', require('./components/StoreList.vue').default);
Vue.component('manager-list', require('./components/ManagerList.vue').default);
Vue.component('carousel', require('./components/Carousel.vue').default);
Vue.component('how-works', require('./components/HowWorks.vue').default);
Vue.component('how-we-are', require('./components/HowWeAre.vue').default);
Vue.component('inesqueciveis', require('./components/Inesqueciveis.vue').default);
Vue.component('benefits', require('./components/Benefits.vue').default);
Vue.component('section-awards', require('./components/sections/awards.vue').default);
Vue.component('flipbook-revista', require('./components/Flipbook.vue').default);
Vue.component('magazines', require('./components/Magazines.vue').default);
Vue.component('partnership-carousel', require('./components/PartnershipCarousel/App.vue').default);

const app = new Vue({
  el: '#app',
  data: {
    awsUrl: '',
  },
  created() {
    this.awsUrl = $('meta[name="awsUrl"]').attr('content');
  }
});

let imgBlogHome = $('.blog-main-image');
if (imgBlogHome) {
  let widthImgBlog = imgBlogHome.width() * 0.6;
  imgBlogHome.css({ 'height': widthImgBlog + 'px' });
};

$('#radio-yes').change(function() {
  $('.show-hide').show();
});
$('#radio-no').change(function () {
  $('.show-hide').hide();
  let options = $('.form-check-options input[type="checkbox"]');

  options.each(function(index, elem) {
    elem.checked = false;
  })
});

$(window).on("load", function () {
  if ($('#radio-yes').is(":checked") == true) {
    $('.show-hide').show();
  }
});

// interations cookie

(() => {
  if (!localStorage.pureJavaScriptCookies) {
    document.querySelector(".box-cookies").classList.remove('hide');
  }

  const acceptCookies = () => {
    document.querySelector(".box-cookies").classList.add('hide');
    localStorage.setItem("pureJavaScriptCookies", "accept");
  };

  const btnCookies = document.querySelector("#btn-cookies");

  btnCookies.addEventListener('click', acceptCookies);
})();

/**
 * Set background image in experience page
 */
let boxExperiences = document.querySelectorAll('.experiences-image[data-img]')

boxExperiences.forEach( (elem) => {
  let img = elem.getAttribute('data-img');
  let pathS3 = elem.getAttribute('data-s3');

  elem.style.backgroundImage = `url(${pathS3}${img})`;
});




