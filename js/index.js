const news = [
  {
    title: "Предвыборная кампания Трампа",
    description: "О том, какие изменения планируется в государственном аппарате США",
    date: "2023-04-02",
    tags: ["политика", "выборы"]
  },
  {
    title: "Заявление Илона Маска",
    description: "Илон Маск пообещал выпустить три новых модели за этот год, а также внедрить новую систему обслуживания.",
    date: "2023-06-07",
    tags: ["акции", "tesla"]
  },
  {
    title: "Посол Китая прибыл в РФ",
    description: "МИД РФ заявил о прибытии посла Китая в Россию, заключено новое торговое соглашение",
    date: "2023-08-23",
    tags: ["политика", "экономика"]
  },
  {
    title: "Как заработать на криптовалюте",
    description: "Мы расскажем о том, что такое криптовалюта, как её добывать и зарабатывать на ней",
    date: "2021-09-15",
    tags: ["финансы", "криптовалюта"]
  },
]

const hobbies = [
  {
    title: "Как живется в Новой Зеландии",
    description: "Мы расскажем об уникальной природе, культуре и образе жизни в этой стране",
    date: "2021-07-12",
    tags: ["путешествия", "Новая Зеландия"]
  },
  {
    title: "Новое обновление iOS 15",
    description: "Мы расскажем о новых функциях, улучшениях и изменениях в ОС для iPhone и iPad",
    date: "2021-06-07",
    tags: ["технологии", "iOS"]
  },
  {
    title: "Новые игры для PlayStation 5",
    description: "Мы составили список из 5 лучших игр для новой консоли PlayStation 5",
    date: "2021-11-05",
    tags: ["игры", "PlayStation 5"]
  },
  {
    title: "Топ-10 лучших фильмов ужасов",
    description: "Мы составили список из 10 лучших фильмов ужасов всех времен",
    date: "2021-10-31",
    tags: ["кино", "ужасы"]
  }
]

const sports = [



  {
    title: "Как правильно заниматься йогой",
    description: "Мы расскажем о правильной технике выполнения поз и дыхательных упражнений",
    date: "2021-09-01",
    tags: ["здоровье", "йога"]
  },
  {
    title: "Как правильно заботиться о коже лица",
    description: "Мы дадим советы по уходу за кожей лица и расскажем о лучших средствах для этого",
    date: "2023-03-14",
    tags: ["здоровье", "кожа"]
  },
  {
    title: "Звезды последнего Сезона НБА",
    description: "Самые результативные игроки сезона, восходящие молодые звезды НБА",
    date: "2023-11-01",
    tags: ["спорт", "баскетболл"]
  },
  {
    title: "Результаты мажора по CS:GO",
    description: "Фавориты турнира Na'vi заняли последнее место, G2 - чемпионы.",
    date: "2023-06-02",
    tags: ["спорт", "киберспорт"]
  },

];

const list_sports = document.getElementById("sport_window")
const list_hobbies = document.getElementById("hobbies_window")
const list_news = document.getElementById("news_window")
// const [sp_index,arr_sport] = sports
// const [hb_index,arr_hobby] = hobbies 
// const [nw_index,arr_new] = news 

function create() {

//sports
  for (const[sp_index,arr_sport] of sports.entries()) {
    list_sports.innerHTML += `<div class="news-window">

    <div class="news-window__item news-window__item_title">
      <span class="title">
      <div>
        <h3>${arr_sport.title}</h3>
      </div>
      </span>
    </div>
    <div class="news-window__item news-window__item_desc ">
      <div>
        <span class="desc_text">${arr_sport.description}</span>
      </div>
    </div>
    <div class=" news-window__item_date">
      <div class="news-window__item news-window__item_date_inside">
        <div><span class="date">${arr_sport.date}</span></div>
      </div>
    </div>
    <div class="news-window__item news-window__item_tags">
      <div class="tags_sports${sp_index}">
      </div>
    </div>
  </div>`
    let tag_selector = document.querySelector(`.tags_sports${sp_index}`)
    const sport_tags_html = arr_sport.tags.map(tag => `<button class="tag">${tag}</button>`)
    tag_selector.innerHTML += `${sport_tags_html.join('')}`
    // for (let j = 0; j < arr_sport.tags.length; j++) {
    //   let tagsElem = document.createElement('span')
    //   tagsElem.classList.add(`tag`)
    //   tagsElem.classList.add(`tag_${j}`)
    //   tagsElem.textContent = sports.tags[j]
    //   tag_selector.appendChild(tagsElem)
    // }
  }
  
  //news
  for (const[nw_index,arr_news] of news.entries()) {
    list_news.innerHTML += `<div class="news-window">

    <div class="news-window__item news-window__item_title">
      <span class="title">
      <div>
        <h3>${arr_news.title}</h3>
      </div>
      </span>
    </div>
    <div class="news-window__item news-window__item_desc ">
      <div>
        <span class="desc_text">${arr_news.description}</span>
      </div>
    </div>
    <div class=" news-window__item_date">
      <div class="news-window__item news-window__item_date_inside">
        <div><span class="date">${arr_news.date}</span></div>
      </div>
    </div>
    <div class="news-window__item news-window__item_tags">
      <div class="tags_news${nw_index}">
      </div>
    </div>
  </div>`
    let tag_selector = document.querySelector(`.tags_news${nw_index}`)
    const news_tags_html = arr_news.tags.map(tag => `<button class="tag">${tag}</button>`)
    tag_selector.innerHTML += `${news_tags_html.join('')}`
  }

  //hobbies
  for (const[hb_index,arr_hobby] of hobbies.entries()) {
    list_hobbies.innerHTML += `<div class="news-window">

    <div class="news-window__item news-window__item_title">
      <span class="title">
      <div>
        <h3>${arr_hobby.title}</h3>
      </div>
      </span>
    </div>
    <div class="news-window__item news-window__item_desc ">
      <div>
        <span class="desc_text">${arr_hobby.description}</span>
      </div>
    </div>
    <div class=" news-window__item_date">
      <div class="news-window__item news-window__item_date_inside">
        <div><span class="date">${arr_hobby.date}</span></div>
      </div>
    </div>
    <div class="news-window__item news-window__item_tags">
      <div class="tags_hobbies${hb_index}">
      </div>
    </div>
  </div>`
    let tag_selector = document.querySelector(`.tags_hobbies${hb_index}`)
    const hobby_tags_html = arr_hobby.tags.map(tag => `<button class="tag">${tag}</button>`)
    tag_selector.innerHTML += `${hobby_tags_html.join('')}`
  }
}


create()


