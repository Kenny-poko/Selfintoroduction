let headlines = document.getElementsByClassName('headline');

let contents = document.getElementsByClassName(`content`);


// for(let i = 0; i < headlines.length; i++) {
//         headlines[i].addEventListener("click", function() {
//         content[i].textContent="あいうえい";
//   })
// }

headlines[0].addEventListener(`click`, function clickEvent(){
    contents[0].textContent = "あいうえお";
});


window.addEventListener('click', function clickEvent(event) {
  event.currentTarget.removeEventListener(event.type, clickEvent);
});


headlines[1].addEventListener(`click`, function(){
    contents[1].textContent = "かきくけこ";
})

headlines[2].addEventListener(`click`, function(){
    contents[2].textContent = "さしすせそ";
})

headlines[3].addEventListener(`click`, function(){
    contents[3].textContent = "たちつてと";
})






// for ( headline of headlines ){
//     headline.addEventListener(`click`, function(){
//         if (headline.textconatent == "Career");
//         content[0].textContent="あいうえい";
//     })
// } 


    