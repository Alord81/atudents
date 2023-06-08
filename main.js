let getNameInp = document.getElementById('name')
let fields = document.querySelectorAll('ul li input');
let creatWrite = document.querySelector('.the-resalt');

console.log(fields)


let arr = []

getNameInp.onblur = function () {
    fields[0].focus();
}

fields.forEach(function (el) {
    el.oninput = function () {

        this.blur();
        arr.push(this.value);
        console.log(arr);

        console.log(+this.className + 1);

        if (!(this.className === '4')) {

            fields[+this.className + 1].focus();

        };

    };

});


fields[4].onblur = function () {

    console.log(arr);

    let resl = arr.reduce(function (acc, curr) {
        return +acc + +curr;
    });

    let theResalt = (resl + +fields[4].value);


    let textForSapan = document.createTextNode(theResalt);

    let creatspan = document.createElement('span');

    creatspan.appendChild(textForSapan);


    if (theResalt === 5) {
        let isBeater = document.createTextNode(' ممتاز ');
        creatspan.appendChild(isBeater);
    } else if (theResalt === 4) {
        let isVeryGood = document.createTextNode(' جيد جداَ ');
        creatspan.appendChild(isVeryGood);
    } else if (theResalt < 3) {
        let isGood = document.createTextNode(' جيد ');
        creatspan.appendChild(isGood);
        let creatEX = document.createElement('img');
        creatEX.classList.add('exclamation');
        creatEX.setAttribute('src', 'https://cdn-icons-png.flaticon.com/128/10308/10308693.png')
        creatspan.appendChild(creatEX)
    } else if (theResalt === 0) {
        let isGood = document.createTextNode(' سيئ ');
        creatspan.appendChild(isGood);
        let creatEX = document.createElement('img');
        creatEX.classList.add('exclamation');
        creatEX.setAttribute('src', 'https://cdn-icons-png.flaticon.com/128/10308/10308693.png')
        creatspan.appendChild(creatEX)
    }

    creatWrite.appendChild(creatspan)


};

let getExclamation = document.querySelector('exclamation');

document.addEventListener('click', function (e) {

    if (e.target.className === 'exclamation') {

        let creatMeain = document.createElement('div');
        creatMeain.classList.add('msg');

        let createBoxOfImg = document.createElement('div');
        createBoxOfImg.classList.add('img-msg');
        creatMeain.appendChild(createBoxOfImg);

        let theImg = document.createElement('img');
        theImg.setAttribute('src', '/imag/ex2.png');
        createBoxOfImg.appendChild(theImg);

        let createTitle = document.createElement('h4');
        createTitle.textContent = 'ينقل هذا الطالب';
        creatMeain.appendChild(createTitle);

        let createBtn = document.createElement('span');
        createBtn.classList.add('btn')
        createBtn.textContent = 'تمام';
        creatMeain.appendChild(createBtn);


        document.body.appendChild(creatMeain);

        let getBtn = document.querySelector('.btn')

        getBtn.onclick = function () {
            creatMeain.remove()
        }
    };
})




