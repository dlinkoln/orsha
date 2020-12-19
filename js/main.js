(function dlinkolnCustom() {


  //>======================== Burger =======================<
  const burger = document.querySelector('#header__burger');

  function MobileMenu() {
    const mobileNav = document.querySelector('.nav__header_mobile');
    const header = document.querySelector('.header');
    const headerTitle = document.querySelector('.header__title');
    const headerInfo = document.querySelector('.header__info');
    const headerTemp = document.querySelector('.header__temp');
    const infokanal = document.querySelector('.infokanal');

    return function runMenu() {
      if (mobileNav.classList.contains('activeB')) {
        mobileNav.classList.remove('activeB');
        header.style.backgroundBlendMode = "normal";
        if (headerTitle) {
          headerTitle.style.display = "block";
          headerInfo.style.display = "block";
          headerTemp.style.display = "block";
        }
        if (infokanal) {
          infokanal.style.background = "url('millBg.svg')";
        }
      }
      else {
        mobileNav.classList.add('activeB');
        header.style.backgroundBlendMode = "darken"
        header.style.height = "auto"
        if (headerTitle) {
          headerTitle.style.display = "none";
          headerInfo.style.display = "none";
          headerTemp.style.display = "none";
        }
        if (infokanal) {
          infokanal.style.background = "none"
        }
      }
    }
  }
  //burger.event()
  burger.onclick = function () {
    MobileMenu()();
  }
  //<======================== EndBurger =======================>


  //>======================== GeolocBurger =======================<
  const $locModal = document.querySelector('.locationModal');

  function locModal(modal) {
    const locYes = modal.querySelector('#locYes');
    const locNo = modal.querySelector('#locNo');
    return function onSubmitModal(e) {

      if (locYes && locNo) {
        switch (e.target.id) {
          case "locYes":
            modal.style.display = "none";
          case "locNo":
            modal.style.display = "none";
          default:
        }
        // locYes.onclick = function () {

        // }
        // locNo.onclick = function () {
        //   modal.style.display = "none";
        // }
      }
    }
  }
  //modal.event()
  $locModal.onclick = function () {
    locModal($locModal)(event);
  }
  //<======================== EndGeolocBurger =======================>


  //>======================== Search =======================<
  function search() {
    const searchIco = document.getElementsByClassName('header__search');
    const hiddenSearch = document.getElementsByClassName('header__searchInput');
    return function srch() {
      window.addEventListener('click', function (e) {
        if ((searchIco[0] == e.target) || (hiddenSearch[0] == e.target)) {
          hiddenSearch[0].style.display = "block";
          searchIco[0].style.cssText = `
                height:20px;
                width:20px;
                margin-top:5px;
            `;

        }
        else {
          hiddenSearch[0].style.display = "none";
          searchIco[0].style.cssText = `
                height:28px;
                width:28px;
                margin-top:0px;
            `;
        }

        if ((searchIco[1] == e.target) || (hiddenSearch[1] == e.target)) {
          hiddenSearch[1].style.display = "block";

        } else {
          hiddenSearch[1].style.display = "none";
        }
      })
    }
  }
  //modal.window event()
  //<======================== EndSearch =======================>


  //>======================== CloseMidi&RoutePopUps func =======================<
  function popupsCloser(card, e) {
    switch (e.target.className) {
      case "clsModal":
        card.style.display = "none";
      default:
    }
  }
  //<======================== EndCloseMidi&RoutePopUps func =======================>


  //>======================== MidiCard =======================<
  const $midiCard = document.querySelector('.midiCard');
  const mCardOpener = document.getElementById('mCardOpener');

  // midiCard.event()
  $midiCard.onclick = function (e) {
    popupsCloser($midiCard, e);
  }
  mCardOpener.onclick = function () {
    $midiCard.style.display = "block";
  }
  //<======================== EndMidiCard =======================>


  //>======================== RouteCard =======================<
  const $routeCard = document.querySelector('.routeCard');

  //routeCard.event()
  $routeCard.onclick = function (e) {
    popupsCloser($routeCard, e);
  }
  rCardOpener.onclick = function () {
    $routeCard.style.display = "block";
  }
  //<======================== EndRouteCard =======================>


  //>======================== RouteNpopup =======================<
  const $routeN = document.querySelector('.routeN');

  //routeN.event()
  $routeN.onclick = function (e) {
    popupsCloser($routeN, e);
  }
  //<======================== EndRouteNpopup =======================>


  //>======================== RoutesListener =======================<
  const routes = document.getElementsByClassName("route");
  const routesSubItem = document.getElementsByClassName("route__subItem");

  //route.event()
  for (let i = 0; i < routes.length; i++) {
    routes[i].addEventListener('click', function (e) {
      routes[i].classList.contains('route_active') ? routes[i].classList.remove('route_active') : routes[i].classList.add('route_active');
    });
  }
  //Subroutes.event() Добавление стилей по нажатию на checkbox в подменю
  for (let i = 0; i < routesSubItem.length; i++) {
    //Написать добавление зеленого класса для уровня ниже,или prevent.default()
    routesSubItem[i].querySelector('input[name=route]').addEventListener('click', function (e) {
      this.checked ? routesSubItem[i].classList.remove('route__subItem_disabled') : routesSubItem[i].classList.add('route__subItem_disabled')
    })
    routesSubItem[i].addEventListener('click', function (e) {
      e.stopPropagation();
    })
  }
  //<======================== EndRoutesListener =======================>


  //>======================== Range =======================<
  const filterRange = document.querySelector(".filterRange");
  //filterRange.event()
  filterRange.addEventListener("mousemove", function () {
    const rangeImmitator = document.querySelector('.lineImmitator');
    const filterRangeData = document.querySelector('.filterRangeData');
    const finishDot = document.querySelector('.finishDot');

    let x = filterRange.value;
    rangeImmitator.style.width = `${x / 4}%`;
    filterRangeData.style.marginLeft = `calc(${(x / 4)}% - ${10}px)`;
    filterRangeData.innerHTML = `${x}км`;
    if (x > 395) {
      finishDot.style.background = '#537278';
    }
    else {
      finishDot.style.background = '#808080';
    }

    if (x > 50 && x < 350) {
      filterRangeData.style.display = "block";
    }
    else {
      filterRangeData.style.display = "none";
    }
  })
  //<======================== EndRange =======================>


  //>======================== FilterMap =======================<

  const filterBtn = document.querySelector('.filter-ctr__visible');
  //filterBtn.event()
  filterBtn.onclick = function () {
    const filterBody = document.querySelector('.filter-ctr__body');
    if (filterBody) {
      filterBody.classList.contains('activeBody') ? filterBody.classList.remove('activeBody') : filterBody.classList.add('activeBody');
    }
  }
  //<======================== EndFilterMap =======================>


  //>======================== Stickers Controller =======================<




  class Sticker {
    constructor() {
      this.ctr = arguments[0];
      this.routeBar = arguments[1];
      this.aside = arguments[2];
      this._init();
    }
    styleRoute(highlight = 'routes', routeBar = 'map__marsh') {
      Array.prototype.slice.call(this.ctr.children).forEach(el => {
        el.classList.remove("btn-highlight_active")
      })
      Array.prototype.slice.call(this.routeBar.children).forEach(el => {
        el.classList.remove("activeR")
      })
      document.querySelector(`.${routeBar}`) ? document.querySelector(`.${routeBar}`).classList.add("activeR") : ''
      document.querySelector(`#${highlight}`) ? document.querySelector(`#${highlight}`).classList.add("btn-highlight_active") : ''

    }
    _init() {
      if (this.ctr) {
        this.styleRoute()
        this._addListeners()
        if (!this.aside.classList.contains('.map__aside_active')) {
          this.aside.classList.add('map__aside_active');
        }
      }
    }
    _addListeners() {
      Array.prototype.slice.call(this.ctr.children).forEach(el => {
        el.addEventListener("click", () => {
          if (!this.aside.classList.contains('.map__aside_active')) {
            this.aside.classList.add('map__aside_active');
          }
          this.styleRoute(el.id, el.dataset.route)
        })
      })
    }
    hideStickers() {
      if (!this.aside.classList.contains('.map__aside_active')) {
        this.aside.classList.remove('map__aside_active');
      }
    }
  }



  //<======================== Stickers Controller =======================>

  window.onload = function () {
    const ctr = document.querySelector('.map__ctr')
    const routeBar = document.querySelector('.map__routes')
    const aside = document.querySelector('.map__aside')
    const mapCustomRoute = document.querySelector('.map__customRoute')
    const Stickers = new Sticker(ctr, routeBar, aside)

    const hideStickers = document.querySelectorAll('.map__hide')
    Array.prototype.slice.call(hideStickers).forEach(el => {
      el.addEventListener("click", () => {
        Stickers.hideStickers()
      })
    })
    mapCustomRoute.onclick = function () {
      Stickers.styleRoute(null, 'map__custom')
    }
    search()();
  }




}())
