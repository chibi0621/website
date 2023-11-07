<template>
  <footer>
    <div class="footerBox">
      <div class="rightFooterBox">
        <img src="../assets/img/quatt.png" alt="" class="footerLogo">
        <a href="#/user/contact_us" class="contactUsLink">Contact Us</a>
        <p class="mail">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#5d4036"
          class="bi bi-envelope" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1
            a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5
            .383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0
            0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
          </svg>
           chibitw_official@cmail.com
        </p>
        <p class="copyright">Copyright © 2023 Chibi. All rights reserved.</p>
      </div>
      <div class="hrefBox">
        <a href="#" aria-label="Href">
          <img src="../assets/img/fbBrown.png" alt="..." title="前往facebook">
        </a>
        <a href="#" aria-label="Href">
          <img src="../assets/img/ytBrown.png" alt="..." title="前往youtube">
        </a>
        <a href="#" aria-label="Href">
          <img src="../assets/img/lineBrown.png" alt="..." title="前往line">
        </a>
        <a href="#" aria-label="Href">
          <img src="../assets/img/igBrown.png" alt="..." title="前往instagram">
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import '@/assets/user/component/userFooter.scss';

export default {
  created() {
    console.log('footer');
  },
};
</script>
