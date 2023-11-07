<template>
  <div class="my-5 row justify-content-center">
    <h4 class="fs-4 fw-bold locationTitle">
      <span class="p-3">Location 店舖資訊</span>
      <hr/>
    </h4>
    <div class="col-md-4 paddingColor leftMarginBottom">
      <ul>
        <li class="mb-3">
          <div class="mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
            fill="#8c6450" class="bi bi-geo-alt-fill pb-1" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1
              0-6 3 3 0 0 1 0 6z"/>
            </svg>
            忠孝分店
          </div>
          <p class="mb-1">電話：02-22554333</p>
          <p>地址：台北市大安區忠孝東路XX號9F</p>
        </li>
        <li class="mb-3">
          <div class="mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
            fill="#8c6450" class="bi bi-geo-alt-fill pb-1" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1
              0-6 3 3 0 0 1 0 6z"/>
            </svg>
            仁愛分店
          </div>
          <p class="mb-1">電話：02-24551388</p>
          <p>地址：台北市大安區仁愛路三段XX號2F</p>
        </li>
        <li class="mb-3">
          <div class="mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
            fill="#8c6450" class="bi bi-geo-alt-fill pb-1" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1
              0-6 3 3 0 0 1 0 6z"/>
            </svg>
            松山分店
          </div>
          <p class="mb-1">電話：02-24987399</p>
          <p>地址：台北市松山區松山路XX號5F</p>
        </li>
        <li class="mb-3">
          <div class="mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
            fill="#8c6450" class="bi bi-geo-alt-fill pb-1" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1
              0-6 3 3 0 0 1 0 6z"/>
            </svg>
            公館分店
          </div>
          <p class="mb-1">電話：02-22340057</p>
          <p>地址：台北市大安區羅斯福路四段XX號1F</p>
        </li>
      </ul>
    </div>
    <div class="col-md-4 paddingColor rightMarginBottom">
      <ul>
        <li class="mb-3">
          <div class="mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
            fill="#8c6450" class="bi bi-geo-alt-fill pb-1" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1
              0-6 3 3 0 0 1 0 6z"/>
            </svg>
            萬華分店
          </div>
          <p class="mb-1">電話：02-23774926</p>
          <p>地址：台北市萬華區成都路XX號3F</p>
        </li>
        <li class="mb-3">
          <div class="mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
            fill="#8c6450" class="bi bi-geo-alt-fill pb-1" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1
              0-6 3 3 0 0 1 0 6z"/>
            </svg>
            南港分店
          </div>
          <p class="mb-1">電話：02-24587624</p>
          <p>地址：台北市南港區忠孝東路七段XX號8F</p>
        </li>
        <li class="mb-3">
          <div class="mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
            fill="#8c6450" class="bi bi-geo-alt-fill pb-1" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1
              0-6 3 3 0 0 1 0 6z"/>
            </svg>
            板橋分店
          </div>
          <p class="mb-1">電話：02-22335466</p>
          <p>地址：新北市板橋區新站路XX號6F</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import '@/assets/user/userStoreLocation.scss';

export default {
  created() {
    console.log('hello');
  },
};
</script>
