<template>
  <div class="container-fluid p-0">
    <header>
      <div class="positionSet">
        <a class="navbar-brand brandBox" href="#" aria-label="Href">
         <img class="logo" src="../assets/img/quatt.png" alt="">
        </a>
        <nav class="navbar-expand-lg navBox">
          <button class="navbar-toggler border border-0"
          type="button" data-bs-toggle="collapse"
          data-bs-target="#homeNavbar" aria-controls="homeNavbar"
          aria-expanded="false" aria-label="Toggle navigation">
            <span class="toggleIcon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
              fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5
                .5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0
                -4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </span>
          </button>
          <div class="collapse navbar-collapse bigLinkBox" id="homeNavbar">
            <div class="linkBox">
              <div class="navbar-nav navLink">
              <router-link to="/user/promotional_activity">NEWS</router-link>
              <router-link to="/user/product">PRODUCTS</router-link>
              <router-link to="/user/cart">CART</router-link>
              <router-link to="/user/about_us">COMPANY</router-link>
              <router-link to="/user/store_location">STORE</router-link>
              <router-link to="/user/login">LOG IN</router-link>
              </div>
              <button class="searchBtn border border-0 mt2 text-center" type="submit"
            @click="openModal">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="rgb(160,121,100)"
              class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85
                3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0
                1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
    <main>
      <section>
        <div id="carouselTop" class="carousel slide carousel-fade"
        data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="4000">
              <img src="../assets/img/autumn2023.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item" data-bs-interval="4000">
              <img src="../assets/img/autumnSale.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item" data-bs-interval="4000">
              <img src="../assets/img/clearance.png" class="d-block w-100" alt="...">
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>Best Seller<hr></h2>
        <div id="carouselProduct" class="carousel slide carousel-dark" data-bs-ride="carousel">
          <div class="carousel-inner">
            <!-- 第一排 -->
            <div class="carousel-item active" data-bs-interval="4000">
              <div class="row row-cols-2 row-cols-md-4 g-5 carouselProductBox">
                <div class="col p-2">
                  <div class="card border border-0">
                    <button class="homeProductBtn" @click="getProductA">
                      <img src="../assets/img/product/coatA.png" class="card-img-top" alt="...">
                      <div class="bigCardBox">
                        <h5 class="card-title text-start">軍綠色鋪棉長版外套</h5>
                        <div class="cardBox">
                          <p>NT.1650</p>
                          <button class="homeProductBtn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a
                              .5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408
                              L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313
                              -7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2
                              0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1
                              1 0 0 1 0-2z"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                <div class="col p-2">
                  <div class="card border border-0">
                    <button class="homeProductBtn" @click="getProductB">
                      <img src="../assets/img/product/skirtD.png" class="card-img-top" alt="...">
                      <div class="bigCardBox">
                        <h5 class="card-title text-start">大地色薄紗長裙</h5>
                        <div class="cardBox">
                          <p>NT.990</p>
                          <button class="homeProductBtn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a
                              .5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408
                              L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313
                              -7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2
                              0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1
                              1 0 0 1 0-2z"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                <div class="col p-2">
                  <div class="card border border-0">
                    <button class="homeProductBtn" @click="getProductC">
                      <img src="../assets/img/product/coatG.png" class="card-img-top" alt="...">
                      <div class="bigCardBox">
                        <h5 class="card-title text-start">卡其色單排扣風衣</h5>
                        <div class="cardBox">
                          <p>NT.1350</p>
                          <button class="homeProductBtn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a
                              .5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408
                              L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313
                              -7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2
                              0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1
                              1 0 0 1 0-2z"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                <div class="col p-2">
                  <div class="card border border-0">
                    <button class="homeProductBtn" @click="getProductD">
                      <img src="../assets/img/product/coatH.png" class="card-img-top" alt="...">
                      <div class="bigCardBox">
                        <h5 class="card-title text-start">鐵灰色單排扣風衣</h5>
                        <div class="cardBox">
                          <p>NT.1280</p>
                          <button class="homeProductBtn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a
                              .5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408
                              L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313
                              -7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2
                              0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1
                              1 0 0 1 0-2z"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- 第二排 -->
            <div class="carousel-item" data-bs-interval="4000">
              <div class="row row-cols-2 row-cols-md-4 g-5 carouselProductBox">
                <div class="col p-2">
                  <div class="card border border-0">
                    <button class="homeProductBtn" @click="getProductE">
                      <img src="../assets/img/product/tshirtA.png" class="card-img-top" alt="...">
                      <div class="bigCardBox">
                        <h5 class="card-title text-start">白色短袖T-Shirt</h5>
                        <div class="cardBox">
                          <p>NT.490</p>
                          <button class="homeProductBtn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a
                              .5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408
                              L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313
                              -7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2
                              0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1
                              1 0 0 1 0-2z"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                <div class="col p-2">
                  <div class="card border border-0">
                    <button class="homeProductBtn" @click="getProductF">
                      <img src="../assets/img/product/topB.png" class="card-img-top" alt="...">
                      <div class="bigCardBox">
                        <h5 class="card-title text-start">白色小高領Bra-Top</h5>
                        <div class="cardBox">
                          <p class="card-text text-start">NT.520</p>
                          <button class="homeProductBtn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a
                              .5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408
                              L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313
                              -7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2
                              0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1
                              1 0 0 1 0-2z"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                <div class="col p-2">
                  <div class="card border border-0">
                    <button class="homeProductBtn" @click="getProductG">
                      <img src="../assets/img/product/pantsA.png" class="card-img-top" alt="...">
                      <div class="bigCardBox">
                        <h5 class="card-title text-start">白色西裝寬褲</h5>
                        <div class="cardBox">
                          <p class="card-text text-start">NT.850</p>
                          <button class="homeProductBtn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a
                              .5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408
                              L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313
                              -7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2
                              0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1
                              1 0 0 1 0-2z"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                <div class="col p-2">
                  <div class="card border border-0">
                    <button class="homeProductBtn" @click="getProductH">
                      <img src="../assets/img/product/blouseA.png" class="card-img-top" alt="...">
                      <div class="bigCardBox">
                        <h5 class="card-title text-start">白色長袖寬鬆襯衫</h5>
                        <div class="cardBox">
                          <p class="card-text text-start">NT.690</p>
                          <button class="homeProductBtn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a
                              .5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408
                              L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313
                              -7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2
                              0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1
                              1 0 0 1 0-2z"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- 第三排 -->
            <div class="carousel-item" data-bs-interval="4000">
              <div class="row row-cols-2 row-cols-md-4 g-5 carouselProductBox">
                <div class="col p-2">
                  <div class="card border border-0">
                    <button class="homeProductBtn" @click="getProductI">
                      <img src="../assets/img/product/pantsC.png" class="card-img-top" alt="...">
                      <div class="bigCardBox">
                        <h5 class="card-title text-start">深棕色西裝寬褲</h5>
                        <div class="cardBox">
                          <p class="card-text text-start">NT.900</p>
                          <button class="homeProductBtn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a
                              .5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408
                              L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313
                              -7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2
                              0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1
                              1 0 0 1 0-2z"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                <div class="col p-2">
                  <div class="card border border-0">
                    <button class="homeProductBtn" @click="getProductJ">
                      <img src="../assets/img/product/blouseC.png" class="card-img-top" alt="...">
                      <div class="bigCardBox">
                        <h5 class="card-title text-start">咖啡色緞面襯衫</h5>
                        <div class="cardBox">
                          <p class="card-text text-start">NT.790</p>
                          <button class="homeProductBtn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a
                              .5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408
                              L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313
                              -7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2
                              0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1
                              1 0 0 1 0-2z"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                <div class="col p-2">
                  <div class="card border border-0">
                    <button class="homeProductBtn" @click="getProductK">
                      <img src="../assets/img/product/dressD.png" class="card-img-top" alt="...">
                      <div class="bigCardBox">
                        <h5 class="card-title text-start">深棕色緞面細肩長裙</h5>
                        <div class="cardBox">
                          <p class="card-text text-start">NT.790</p>
                          <button class="homeProductBtn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a
                              .5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408
                              L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313
                              -7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2
                              0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1
                              1 0 0 1 0-2z"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                <div class="col p-2">
                  <div class="card border border-0">
                    <button class="homeProductBtn" @click="getProductL">
                      <img src="../assets/img/product/pantsB.png" class="card-img-top" alt="...">
                      <div class="bigCardBox">
                        <h5 class="card-title text-start">駝色彈力喇叭褲</h5>
                        <div class="cardBox">
                          <p class="card-text text-start">NT.850</p>
                          <button class="homeProductBtn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a
                              .5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408
                              L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313
                              -7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2
                              0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1
                              1 0 0 1 0-2z"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 按鈕 -->
          <button class="carousel-control-prev" type="button"
          data-bs-target="#carouselProduct"
          data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button"
          data-bs-target="#carouselProduct"
          data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section>
        <h2>Follow Us<hr></h2>
        <h3>@chibitw_official</h3>
        <div class="boxCenter mb-5">
          <a href="#" aria-label="Href">
            <img src="../assets/img/fbBrown.png" alt="">
          </a>
          <a href="#" aria-label="Href">
            <img src="../assets/img/ytBrown.png" alt="">
          </a>
          <a href="#" aria-label="Href">
            <img src="../assets/img/lineBrown.png" alt="">
          </a>
          <a href="#" aria-label="Href">
            <img src="../assets/img/igBrown.png" alt="">
          </a>
        </div>
        <div class="followUsBox">
          <img src="../assets/img/followUsA.png" alt="">
          <img src="../assets/img/followUsB.png" alt="">
          <img src="../assets/img/followUsC.png" alt="">
          <img src="../assets/img/followUsD.png" alt="">
          <img src="../assets/img/followUsE.png" alt="">
        </div>
      </section>
      <section>
        <div class="locationBox">
          <h5>
            銷售據點
            Store Location
            <hr>
          </h5>
          <h6>
            台灣地區 Taiwan
          </h6>
          <a href="#/user/contact">
            See More
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor"
            class="bi bi-caret-right-fill" viewBox="0 0 16 16">
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1
              1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
            </svg>
          </a>
        </div>
      </section>
      <ManagerLogin></ManagerLogin>
    </main>
    <Footer></Footer>
  </div>
  <LoadingPlugin :active="isLoading"/>
  <SearchModal ref="searchModal"></SearchModal>
</template>

<script>
import '@/assets/home.scss';
import ManagerLogin from '@/components/ManagerLogin.vue';
import Footer from '@/components/UserFooter.vue';
import SearchModal from '@/components/SearchModal.vue';
import 'bootstrap/dist/js/bootstrap.bundle';

export default {
  name: 'HomeView',
  data() {
    return {
      isLoading: false,
    };
  },
  components: {
    SearchModal, Footer, ManagerLogin,
  },
  methods: {
    openModal() {
      const searchComponent = this.$refs.searchModal;
      searchComponent.showModal();
    },
    getProductA() {
      this.$router.push('/user/product/-NebUwTPe4OAg4ULnj20');
    },
    getProductB() {
      this.$router.push('/user/product/-NebOx0CetuzseeVXz-g');
    },
    getProductC() {
      this.$router.push('/user/product/-NeHz9xcAfrAZ-FScdRQ');
    },
    getProductD() {
      this.$router.push('/user/product/-NeMW6sM8u5CA1Oj0_FB');
    },
    getProductE() {
      this.$router.push('/user/product/-NeqBEOSE2o9mo50hKQA');
    },
    getProductF() {
      this.$router.push('/user/product/-NeqImEMUsUcsOL01e7P');
    },
    getProductG() {
      this.$router.push('/user/product/-NeqMdrAv4IeP1jjYZTv');
    },
    getProductH() {
      this.$router.push('/user/product/-NebC7LLzWzDAoJhlIP4');
    },
    getProductI() {
      this.$router.push('/user/product/-NeqJvvA8EB4Cc4UvYIl');
    },
    getProductJ() {
      this.$router.push('/user/product/-NeqNbqrQLOAANJUweyu');
    },
    getProductK() {
      this.$router.push('/user/product/-NeqLcfoGVkxhy9AJmIy');
    },
    getProductL() {
      this.$router.push('/user/product/-NeqGvUi7ifMHo7WPBio');
    },
  },
  created() {
    console.log(process.env.VUE_APP_API, process.env.VUE_APP_PATH);
  },
};
</script>
