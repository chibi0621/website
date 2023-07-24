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
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#8c6450" class="bi bi-handbag" viewBox="0 0 16 16">
              <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5
              1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0
              2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1
              0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5
              1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z"/>
            </svg>
          </li>
          <li class="pt1">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#8c6450" class="bi bi-heart-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736
              3.562-3.248 8 1.314z"/>
            </svg>
          </li>
          <li>
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
              <a class="nav-link active ms-4 mb-2" aria-current="page" href="#">
                登入&註冊
              </a>
            </li>
            <li class="nav-item liBackground">
              <a class="nav-link active ms-4 mb-2" aria-current="page" href="#">
                會員中心
              </a>
            </li>
            <li class="nav-item liBackground">
              <a class="nav-link active ms-4 mb-2" aria-current="page" href="#">
                常見問題
              </a>
            </li>
            <li class="nav-item liBackground">
              <a class="nav-link active ms-4 mb-2" aria-current="page" href="#">
                聯絡我們
              </a>
            </li>
            <li class="nav-item dropdown liBackground">
              <a class="nav-link active ms-4 mb-2" aria-current="page" href="#">
                活動專區
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
              <a href="#" aria-label="Href">
                <img class="ps-4 mb-2 asideSale" src="../assets/img/member.png" alt="">
              </a>
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
            <li class="nav-item ps-5 mt-1 liContact">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            fill="#8c6450" class="bi bi-envelope" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0
              0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13
              2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8
              9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1
              11.105l4.708-2.897L1 5.383v5.722Z"/>
              </svg>
              <p>chibi1996@mail.com</p>
            </li>
            <li class="nav-item ps-5 liContact">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
              fill="#8c6450" class="bi bi-telephone" viewBox="0 0 16 16">
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
              <p>(02)-24111111</p>
            </li>
            <li class="nav-item ps-5 liContact">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
              fill="#8c6450" class="bi bi-map" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5
                0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5
                0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1
                .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4
                .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"/>
              </svg>
              <p>台北市中山區OO路XX號</p>
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
              <button class="cardBtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#8c6450" class="bi bi-heart-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736
                  3.562-3.248 8 1.314z"/>
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
              <button class="cardBtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#8c6450" class="bi bi-heart-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736
                  3.562-3.248 8 1.314z"/>
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
              <button class="cardBtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#8c6450" class="bi bi-heart-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736
                  3.562-3.248 8 1.314z"/>
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
              <button class="cardBtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#8c6450" class="bi bi-heart-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736
                  3.562-3.248 8 1.314z"/>
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
