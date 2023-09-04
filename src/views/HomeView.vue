<template>
  <div class="container-fluid p-0">
    <header class="fixed-top">
      <h6>
        6/1~6/22限時免運中
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
        class="bi bi-truck truck" viewBox="0 0 16 16">
          <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1
          1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0
          1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999
          0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0
          0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0
          .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1
          0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
        </svg>
      </h6>
    </header>
    <nav class="navbar">
      <a class="navbar-brand brandBox" href="#" aria-label="Href">
        <img class="logo" src="../assets/img/CHIBI2.png" alt="">
      </a>
      <form class="search">
        <input class="form-control mt2" type="search" placeholder="輸入商品關鍵字..." aria-label="Search">
        <button class="btn searchBtn mt2" type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
          class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85
            3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0
            1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </button>
      </form>
      <div class="topBox">
        <ul class="icons">
          <li class="me-4">
            <a href="#/user/cart" aria-label="Href">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#8c6450" class="bi bi-handbag" viewBox="0 0 16 16">
              <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5
              1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0
              2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1
              0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5
              1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z"/>
            </svg>
            </a>
          </li>
          <li>
            <a href="#/user/product" aria-label="Href">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#8c6450" class="bi bi-shop-window" viewBox="0 0 16 16">
              <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5
              0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37
              2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375
              0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0
              0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0
              1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1
              5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2
              9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1
              .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0
              1-1-1V9.5a.5.5 0 0 1 .5-.5z"/>
            </svg>
            </a>
          </li>
        </ul>
        <button class="navbar-toggler offcanvasButton" type="button"
        data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar" ref="collapse">
        <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel" ref="collapse">
        <div class="offcanvas-header">
          <div class="offcanvas-title" id="offcanvasNavbarLabel">
            <img class="logoText" src="../assets/img/text.png" alt="">
          </div>
          <button type="button" class="btn-close text-reset"
          data-bs-dismiss="offcanvas" aria-label="Close">
          </button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav pe4">
            <li class="nav-item liBackground">
              <a class="nav-link active ms-4 mb-2" aria-current="page" href="#/user/login">
                登入&註冊
              </a>
            </li>
            <li class="nav-item liBackground">
              <a class="nav-link active ms-4 mb-2" aria-current="page" href="#/user/product">
                商品列表
              </a>
            </li>
            <li class="nav-item liBackground">
              <a class="nav-link active ms-4 mb-2" aria-current="page" href="#/user/cart">
                購物車
              </a>
            </li>
            <li class="nav-item liBackground mb-3">
              <a class="nav-link active ms-4 mb-2" aria-current="page" href="#/user/contact">
                聯絡我們
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" aria-label="Href">
                <img class="ps-4 mb-2 asideSale" src="../assets/img/1103new.png" alt="">
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" aria-label="Href">
                <img class="ps-4 mb-2 asideSale" src="../assets/img/travel.png" alt="">
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" aria-label="Href">
                <img class="ps-4 mb-2 asideSale" src="../assets/img/campaign.png" alt="">
              </a>
            </li>
            <li class="nav-item mb-2">
              <hr class="hrColor">
            </li>
            <li class="nav-item ps-4 mb-2">
              <a href="#" aria-label="Href">
                <img class="ms-3 me-3" src="../assets/img/fb48.png" alt="">
              </a>
              <a href="#" aria-label="Href">
                <img class="me-3" src="../assets/img/ig48.png" alt="">
              </a>
              <a href="#" aria-label="Href">
                <img class="me-3" src="../assets/img/line48.png" alt="">
              </a>
              <a href="#" aria-label="Href">
                <img src="../assets/img/yt48.png" alt="">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <main>
      <section class="mainCarousel">
        <div id="carouselExampleFade" class="carousel slide carousel-fade"
        data-bs-ride="carousel" ref="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../assets/img/helloAutumn.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="../assets/img/1103new.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="../assets/img/all10off.png"
              class="d-block w-100" alt="...">
            </div>
          </div>
          <button class="carousel-control-prev" type="button"
          data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button"
          data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section class="sectionCarousel">
        <h3 class="fs-2 mb-3 title3">穿搭靈感</h3>
        <div id="carouselOneControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../assets/img/vintage.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="../assets/img/book.png" class="d-block w-100" alt="">
            </div>
          </div>
          <button class="carousel-control-prev" type="button"
          data-bs-target="#carouselOneControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button"
          data-bs-target="#carouselOneControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section class="sectionCarousel">
        <h3 class="fs-2 mb-3 title3">最新活動</h3>
        <div id="carouselTwoControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../assets/img/campaign.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="../assets/img/member.png" class="d-block w-100" alt="...">
            </div>
          </div>
          <button class="carousel-control-prev" type="button"
          data-bs-target="#carouselTwoControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button"
          data-bs-target="#carouselTwoControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section class="sectionCards">
        <h3 class="mb-3 ms-5">推薦商品</h3>
        <div class="card-group">
          <div class="card">
            <img src="../assets/img/product/coatA.png" class="card-img-top cardImg" alt="...">
            <div class="card-body p-0 ps-3 mb-2">
              <h6 class="card-title nameColor">軍綠長版外套</h6>
              <p class="card-text fw-bold nameColor">
                <i class="bi bi-currency-dollar"></i>
                <span class="ms-2">1,680</span>
              </p>
            </div>
            <div class="card-footer cardFooterBox">
              <button class="cardBtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#8c6450" class="bi bi-handbag" viewBox="0 0 16 16">
                  <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5
                  1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0
                  2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1
                  0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5
                  1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z"/>
                </svg>
              </button>
            </div>
          </div>
          <div class="card">
            <img src="../assets/img/product/dressA.png" class="card-img-top cardImg" alt="...">
            <div class="card-body p-0 ps-3 mb-2">
              <h6 class="card-title nameColor">棉麻拼接洋裝</h6>
              <p class="card-text fw-bold nameColor">
                <i class="bi bi-currency-dollar"></i>
                <span class="ms-2">1,180</span>
              </p>
            </div>
            <div class="card-footer cardFooterBox">
              <button class="cardBtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#8c6450" class="bi bi-handbag" viewBox="0 0 16 16">
                  <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5
                  1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0
                  2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1
                  0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5
                  1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z"/>
                </svg>
              </button>
            </div>
          </div>
          <div class="card">
            <img src="../assets/img/product/skirtD.png" class="card-img-top cardImg" alt="...">
            <div class="card-body p-0 ps-3 mb-2">
              <h6 class="card-title nameColor">奶茶色棉麻長裙</h6>
              <p class="card-text fw-bold nameColor">
                <i class="bi bi-currency-dollar"></i>
                <span class="ms-2">880</span>
              </p>
            </div>
            <div class="card-footer cardFooterBox">
              <button class="cardBtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#8c6450" class="bi bi-handbag" viewBox="0 0 16 16">
                  <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5
                  1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0
                  2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1
                  0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5
                  1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z"/>
                </svg>
              </button>
            </div>
          </div>
          <div class="card">
            <img src="../assets/img/product/coatF.png" class="card-img-top cardImg" alt="...">
            <div class="card-body p-0 ps-3 mb-2">
              <h6 class="card-title nameColor">卡其色長版風衣</h6>
              <p class="card-text fw-bold nameColor">
                <i class="bi bi-currency-dollar"></i>
                <span class="ms-2">1,580</span>
              </p>
            </div>
            <div class="card-footer cardFooterBox">
              <button class="cardBtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#8c6450" class="bi bi-handbag" viewBox="0 0 16 16">
                  <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5
                  1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0
                  2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1
                  0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5
                  1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <article class="articleCards">
        <div class="card-group">
          <div class="card border border-0 cardBg">
            <img src="../assets/img/staff.png" class="card-img-top articleImg mb-2" alt="...">
            <div class="card-body">
              <h5 class="card-title mb-1 titleColor">人才招募</h5>
              <p class="card-text pt-1 pb-1 pColor">招募新夥伴們</p>
            </div>
            <div class="card-footer border border-0 cardFooterBox">
              <a href="#" aria-label="Href" class="btn rounded-pill btnColor">了解更多</a>
            </div>
          </div>
          <div class="card border border-0 cardBg">
            <img src="../assets/img/coupon10off.png" class="card-img-top articleImg mb-2" alt="...">
            <div class="card-body">
              <h5 class="card-title mb-1 titleColor">折價券優惠</h5>
              <p class="card-text pt-1 pb-1 pColor">11/04~11/08期間限定優惠券</p>
            </div>
            <div class="card-footer border border-0 cardFooterBox">
              <a href="#" aria-label="Href" class="btn rounded-pill btnColor">領取優惠</a>
            </div>
          </div>
          <div class="card border border-0 cardBg">
            <img src="../assets/img/autumn1103.png" class="card-img-top articleImg mb-2" alt="...">
            <div class="card-body">
              <h5 class="card-title mb-1 titleColor">新品上市</h5>
              <p class="card-text pt-1 pb-1 pColor">11/03秋季商品全新上市</p>
            </div>
            <div class="card-footer border border-0 cardFooterBox">
              <a href="#" aria-label="Href" class="btn rounded-pill btnColor">查看商品</a>
            </div>
          </div>
          <div class="card border border-0 cardBg">
            <img src="../assets/img/specialWeek.png" class="card-img-top articleImg mb-2" alt="...">
            <div class="card-body">
              <h5 class="card-title mb-1 titleColor">11月會員日</h5>
              <p class="card-text pt-1 pb-1 pColor">11/01~11/08會員消費享8折折扣</p>
            </div>
            <div class="card-footer border border-0 cardFooterBox">
              <a href="#" aria-label="Href" class="btn rounded-pill btnColor">了解更多</a>
            </div>
          </div>
        </div>
      </article>
    </main>
    <div class="backTopBox">
      <a href="#" aria-label="Href">
       <img class="backTop" src="http://design-ec.com/d/e_others_40/l_e_others_407.png" alt="">
      </a>
    </div>
    <footer>
      <div class="footerBox">
        <ul class="ulBox">
          <li>
            <a href="#">關於Chibi</a>
          </li>
          <li>
            <a href="#">會員中心</a>
          </li>
          <li>
            <a href="#">常見問題</a>
          </li>
          <li>
            <a href="#">聯絡我們</a>
          </li>
          <li>
            <a href="#">最新活動</a>
          </li>
          <li>
            <a href="#">分店資訊</a>
          </li>
        </ul>
        <div class="logoBox">
          <img class="footerLogo" src="../assets/img/chibiDark.png" alt="">
        </div>
        <div class="boxCenter footerColor mb-2">
          <a href="#" aria-label="Href">
            <img class="m-1" src="../assets/img/fb48.png" alt="...">
          </a>
          |
          <a href="#" aria-label="Href">
            <img class="m-1" src="../assets/img/ig48.png" alt="...">
          </a>
          |
          <a href="#" aria-label="Href">
            <img class="m-1" src="../assets/img/line48.png" alt="...">
          </a>
          |
          <a href="#" aria-label="Href">
            <img class="m-1" src="../assets/img/yt48.png" alt="...">
          </a>
        </div>
        <div class="boxCenter footerColor mb-3">
          Copyright © 2023 Chibi. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import '@/assets/dist/home.scss';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/js/dist/offcanvas';
import 'bootstrap/js/dist/button';
import 'bootstrap/js/dist/carousel';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';

export default {
  name: 'HomeView',
  created() {
    console.log(process.env.VUE_APP_API, process.env.VUE_APP_PATH);
  },
};
</script>
