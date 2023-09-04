let necs = document.querySelectorAll(".nec")
let bigs = document.querySelectorAll(".big")
let metr = document.querySelector("#metr")
let price = document.querySelector("#price")
let arrows = document.querySelectorAll(".arrows")
console.log(bigs);
arrows.forEach(arrow => {
    console.log(arrow.firstChild);
    arrows[0].firstChild.onclick = () => {
        arro(0, 20, 10)
    }
    arrows[1].firstChild.onclick = () => {
        arro(1, 20, 1)
    }
    arrows[2].firstChild.onclick = () => {
        arro(2, 10, 2)
    }
    arrows[0].lastChild.onclick = () => {
        arro(0, -20, -10)
    }
    arrows[1].lastChild.onclick = () => {
        arro(1, -20, -1)
    }
    arrows[2].lastChild.onclick = () => {
        arro(2, -10, -2)
    }
});
necs.forEach(nec => {
    nec.onclick = () => {
        nec.lastChild.firstChild.classList.toggle("active")
        nec.lastChild.classList.toggle("activee")
    }
});
necs[0].onclick = () => {
    slidders(0, 110, 30)
}
necs[1].onclick = () => {
    slidders(1, 1000, -100)

}
function slidders(idx, plusPrice, minusMetr) {
    console.log(necs[idx].lastChild);
    necs[idx].lastChild.firstChild.classList.toggle("active")
    necs[idx].lastChild.classList.toggle("activee")
    if (necs[idx].lastChild.firstChild.classList.contains("active")) {
        price.innerHTML = `$${+price.innerHTML.replace(",", "").slice(1, 6) + plusPrice}`
        metr.innerHTML = `${+metr.innerHTML.slice(0, 3) - minusMetr}км`
    } else {
        price.innerHTML = `$${+price.innerHTML.replace(",", "").slice(1, 6) - plusPrice}`
        metr.innerHTML = `${+metr.innerHTML.slice(0, 3) + minusMetr}км`
    }

}
function sel(params) {

}
function arro(idx, minusMetr, plusPrice) {
    bigs.forEach(big => {
        console.log(big.firstChild.innerHTML);
        if (big.firstChild.innerHTML == bigs[idx].firstChild.innerHTML) {
            big.firstChild.innerHTML = +big.firstChild.innerHTML + plusPrice
            metr.innerHTML = `${+metr.innerHTML.slice(0, 3) - minusMetr}км`
        }
        if (big.firstChild.innerHTML == 80 || big.firstChild.innerHTML == 30 || big.firstChild.innerHTML == 11) {
            big.firstChild.innerHTML = +big.firstChild.innerHTML - plusPrice
            metr.innerHTML = `${+metr.innerHTML.slice(0, 3) + minusMetr}км`
        } else if (big.firstChild.innerHTML == 40 || big.firstChild.innerHTML == 20 || big.firstChild.innerHTML == 19) {
            big.firstChild.innerHTML = +big.firstChild.innerHTML - plusPrice
            metr.innerHTML = `${+metr.innerHTML.slice(0, 3) + minusMetr}км`
        }
    });
}

let door = document.querySelector(".door")
let tesla = document.querySelector(".tesla img")
let ckickable = document.querySelector('.ckickable')
let color = document.querySelector(".color")
let colordivs = document.querySelectorAll(".color div")
let urls = {
    "black": "https://s3-alpha-sig.figma.com/img/610f/08df/e7ae32b8b92cdace6a4fe298fc3d6db9?Expires=1694995200&Signature=qE2xR6n~yCd4KVyhnqDJ4bpHKlxf80Awwi2yKjjHw2Llc~UKO4gNIHsMKfJ7WTLtK4gyIan~TrOXybsYWtQZmgUV-TQoYZJ17yk5s756aSdytXHAA2EgbS~vELlVQdzByQu1Cve558v3Yln0HSYkZgk1yoSiCXCm8p63oeJ~rPII6msLnveLFgALLQj-n3gUJ0GGX2dRexjXpRD54mqNb0qn1HhFsBn7FysvbGHNga47BN~6BrrNrQBuRo-qrmKGF27wVZx0vnAAscaHHRQ5H6DdRT~W7786SvqqRsTTb2HXVtR8MNOL-tYwS2H2NjyxkPkPLXih~D05Omcuq~dspA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "white": "https://s3-alpha-sig.figma.com/img/f565/3255/8446207488023d149f672e5e3fa327ce?Expires=1694995200&Signature=VShf2VqbSLmdjvxE~eMI3Ky-OY~d20d8IRKBmP6CPOUPw8lq2MIYNnotRjzPUO42cMj6aLJr5LoijcSICD0To7GtAwVRuc6nDausbcfLZPKAZokboIuGYZZge43opK8O-OguSThbQbu0w7Q-JBAplLmN~zuxnut~S6B2O9cRoKGz8Q5qiClVW-d9eYmNNIGHJHs27ZjNh9~BiYZHF9R9E5IVLaTa210OJ68EoXeNbT6JpcLHtiX2ZsgxaweSDHNcHgaPT5XS4lY7FTpSer3Pj62js-7aw34C7V9785n4MDlS4lEpWdM0LK20QdgcAFkZb0MFr2QZ3bm7Ip0Wlzehng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "gold": "https://s3-alpha-sig.figma.com/img/40b7/8e81/7db0de2688c72eb1c07316211b2d7764?Expires=1694995200&Signature=V1lffvKmt303~-mCqfqovHs8H60jVSnDqtPMeQGV9ZilU55fJpTvhuCwEDkMxlrr3U~aNdDunZqcaeOmjOKi-pNMR~OFtfpcYkYct3mqdXU647cieV37tE5mLn-fvVNMZufkROdhmDa9IO2~G-Hm7n0yQNJvzqVAuVagbXL5cGuiD9ysQKfeb5LnnmUuJNxN80zpc0KtjqXnSd6VldpFk0ZMEs1wKQyhkw2O87zsXr2WcXNnzcpuzFKQhPTJUwGyfBphgDlCjru-gNxw4oPPPBY2v3~Ava037E1HcXLfweB8bYpR-X~sgdYVVdytUSecrM6MiiDC4zVuQMAJG6NL7Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
}
door.onclick = () => {
    ckickable.style.display = "none"
    color.style.display = "flex"

    colordivs.forEach(colordiv => {
        colordiv.onclick = () => {
            tesla.setAttribute("src", urls[colordiv.getAttribute("data-color")])
        }


    });
    tesla.setAttribute("src", "https://s3-alpha-sig.figma.com/img/610f/08df/e7ae32b8b92cdace6a4fe298fc3d6db9?Expires=1694995200&Signature=qE2xR6n~yCd4KVyhnqDJ4bpHKlxf80Awwi2yKjjHw2Llc~UKO4gNIHsMKfJ7WTLtK4gyIan~TrOXybsYWtQZmgUV-TQoYZJ17yk5s756aSdytXHAA2EgbS~vELlVQdzByQu1Cve558v3Yln0HSYkZgk1yoSiCXCm8p63oeJ~rPII6msLnveLFgALLQj-n3gUJ0GGX2dRexjXpRD54mqNb0qn1HhFsBn7FysvbGHNga47BN~6BrrNrQBuRo-qrmKGF27wVZx0vnAAscaHHRQ5H6DdRT~W7786SvqqRsTTb2HXVtR8MNOL-tYwS2H2NjyxkPkPLXih~D05Omcuq~dspA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")
}