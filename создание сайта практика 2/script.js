let row = document.getElementById('row_');
let xmark = document.getElementById('Xmark');
let bars = document.getElementById('bars');
let news = document.getElementById('news');
let main_img = document.getElementById('mainIMG');
let mainDescribe = document.getElementById('mainh1');
let main_type = document.getElementById('mainType');
let main_autor = document.getElementById('mainAutor');
let Newrow = document.getElementById('latestRow');
let secondX = document.getElementById('Xmark2');
let secondBars = document.getElementById('bars_2');
let hidecol = document.getElementsByClassName('latestcolumn');
let latestBTN = document.getElementById('latestbtn');
let featuredRow = document.getElementById('featuredposts');
xmark.addEventListener('click', close);

function right() {
    news.scrollLeft += 600
}

function left() {
    news.scrollLeft += -600
}

let images = ['./images/IMAGE (1).png',
    './images/IMAGE (2).png',
    './images/IMAGE (3).png',
    './images/IMAGE (4).png',
    './images/IMAGE (5).png',
    './images/IMAGE (6).png'
]
let text = ['Helmut Lang celebrates<br>taxi drivers worldwide in<br>latest campaign',
    'Bowlcut launch a new<br>summer collection that pays<br>homage to “UK legends”',
    'Thousands of previously<br>unseen photographs by Andy<br>Warhol will be made public<br>this Autumn',
    'London-based Yinka Ilori’s<br>storytelling furniture',
    'Anonymous Israeli art<br>collective Broken Fingaz<br>direct music video for U2<br>and Beck',
    'Suzanne Saroff’s<br>meticulously<br>arranged photographs<br>alter perceptions'
]
let autors = ['By Alessandra Ortiz', 'By Rosanna Ondricka', 'By Annie Lueilwitz', 'By Annie Lueilwitz',
    'By Semion Brekke', 'By Reta Torphy'
]
let type = ['Photography', 'Photography', 'Photography', 'Interactive Design', 'Graphic Design', 'Architecture']
let i = 0;
while (i < images.length) {
    row.innerHTML += `<div class="column">
                        <a href="#main"><img src = "` + images[i] + `" alt = "" onclick = "changeNews('` + images[i] + "' , '" + type[i] + "' , '" + text[i] + "' , '" + autors[i] + `')"></a>
                        <p>` + type[i] + `</p>
                        <h1>` + text[i] + `</h1>
                        <h3>` + autors[i] + `</h3>
                    </div>`
    i++
}

let images2 = ['./images/IMAGE.png',
    './images/IMAGE (1).png',
    './images/IMAGE (2).png',
    './images/IMAGE (3).png',
    './images/IMAGE (4).png',
    './images/IMAGE (5).png',
    './images/IMAGE (6).png',
    './images/IMAGE (7).png'
]

let text2 = ['Japan House opens<br>in mountainside to<br>foster peak<br>creativity.',

    'Helmut Lang celebrates<br>taxi drivers worldwide in<br>latest campaign',

    'Bowlcut launch a new<br>summer collection that pays<br>homage to “UK legends”',

    'Thousands of previously<br>unseen photographs by Andy<br>Warhol will be made public<br>this Autumn',

    'London-based Yinka Ilori’s<br>storytelling furniture',
    'Anonymous Israeli art<br>collective Broken Fingaz<br>direct music video for U2<br>and Beck',

    'Suzanne Saroff’s<br>meticulously<br>arranged photographs<br>alter perceptions',

    'Anu Ambasna’s playful<br>illustrations celebrate club<br>culture, brown<br>bodies and perfect paunches'
]

let autors2 = ['By Reta Torphy',
    'By Alessandra Ortiz',
    'By Rosanna Ondricka',
    'By Annie Lueilwitz',
    'By Annie Lueilwitz',
    'By Semion Brekke',
    'By Reta Torphy',
    'By Leo Bartell'
]
let type2 = ['Illustration',
    'Photography',
    'Photography',
    'Photography',
    'Interactive Design',
    'Graphic Design',
    'Architecture',
    'Graphic Design'
]

for (let i = 0; i < images2.length; i++) {
    Newrow.innerHTML += `<div class="latestcolumn">
                           <a href="#main"><img src="` + images2[i] + `" alt="" onclick = "changeNews('` + images2[i] + "' , '" + type2[i] + "' , '" + text2[i] + "' , '" + autors2[i] + `')"></a>
                            <p>` + type2[i] + `</p>
                            <h1>` + text2[i] + `</h1>
                            <h3>` + autors2[i] + `</h3>
                        </div>`
}

for (let i = 4; i < hidecol.length; i++) {
    hidecol[i].style.cssText = 'display:none;'
}

function showAllLatest() {
    for (let i = 4; i < hidecol.length; i++) {
        hidecol[i].style.cssText = 'display:block;'
    }
    latestBTN.style.cssText = 'display:none;'
}

let images3 = [
    './images/IMAGE (8).png',
    './images/IMAGE (9).png',
    './images/IMAGE (10).png',
    './images/IMAGE (11).png'
]

let text3 = ['A Brief History of the FIFA World Cup Logo',

    'Need a guide to LA’s graphic design scene?<br>Shoplifters’ new issue has got your back',

    'Fred Rowson directs film for Years and Years',

    'M&C Saatchi and Fontsmith collaborate on<br>font collection for House of St Barnabas'
]

let autors3 = ['By Clem Onojeghuo',
    'By Alessandra Ortiz',
    'By Coby Gottlieb',
    'By Annie Lueilwitz'
]

let type3 = ['Graphic Design',
    'Graphic Design',
    'Photography',
    'Illustration'
]

for (let i = 0; i < images3.length; i++) {
    featuredRow.innerHTML += `<div class="featuredcol">
                                <a href="#main"><img src="` + images3[i] + `" alt="" onclick = "changeNews('` + images3[i] + "' , '" + type3[i] + "' , '" + text3[i] + "' , '" + autors3[i] + `')"></a>
                                <p>` + type3[i] + `</p>
                                <h1>` + text3[i] + `</h1>
                                <h3>` + autors3[i] + `</h3>
                            </div>`
}

function close() {
    row.style.cssText = 'display: none;'
    xmark.style.cssText = 'display: none;'
    bars.style.cssText = 'display: block;'
}

function show() {
    row.style.cssText = 'display: flex;'
    xmark.style.cssText = 'display:block;'
    bars.style.cssText = 'display:none;'
}

function close2() {
    Newrow.style.cssText = 'display:none;'
    secondX.style.cssText = 'display:none;'
    secondBars.style.cssText = 'display:block;'
}

function show2() {
    Newrow.style.cssText = 'display: flex;'
    secondX.style.cssText = 'display: block;'
    secondBars.style.cssText = 'display:none;'
}

function changeNews(img, p_, h1_, autor) {
    main_img.innerHTML = '<img src="' + img + '" alt="">'
    mainDescribe.innerHTML = h1_
    main_type.innerHTML = p_
    main_autor.innerHTML = autor
}