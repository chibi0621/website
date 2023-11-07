<template>
  <div class="my-5 row justify-content-center">
    <h4 class="fs-4 mt-4 mb-5 contactTitle">
      <span class="p-3">Contact Us 聯絡我們</span>
      <hr>
    </h4>
    <div class="col-md-7 contactBox">
      <ul class="contactUlBox">
        <li class="d-flex mb-4">
          <h6 class="fw-bold fs-5 color2 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
            fill="#8c6450" class="bi bi-geo-alt-fill pb-1 me-1" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3
               3 0 0 1 0 6z"/>
            </svg>
            <span>MAP</span>
          </h6>
        </li>
        <li class="mb-4">
          <img src="@/assets/img/new_map.png" alt="" class="mapImg">
        </li>
        <li class="d-flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
          fill="#8c6450" class="bi bi-envelope pb-1 me-1" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0
            0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13
            2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8
            9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1
            11.105l4.708-2.897L1 5.383v5.722Z"/>
          </svg>
          <p class="me-2 fw-bold">客服信箱：</p>
          <p>chibi1996@mail.com</p>
        </li>
        <li class="d-flex mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
          fill="#8c6450" class="bi bi-telephone pb-1 me-1" viewBox="0 0 16 16">
            <path d="M3.654 1.328a.678.678 0 0
            0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45
            1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569
            0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678
            0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745
            1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0
            1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654
            1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29
            2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0
            0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745
            1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163
            2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634
            18.634 0 0 1-7.01-4.42 18.634 18.634 0 0
            1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
          </svg>
          <p class="me-2 fw-bold">客服專線(免付費)：</p>
          <p>0800-241-111</p>
        </li>
        <li class="d-flex mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
          fill="#8c6450" class="bi bi-map pb-1 me-1" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5
            0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5
            0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1
            .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4
            .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"/>
          </svg>
          <p class="me-2 fw-bold">總公司地址：</p>
          <p>台北市中山區OO路XX號</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import '@/assets/user/userContact.scss';

export default {
  created() {
    console.log('hello');
  },
};
</script>
