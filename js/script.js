
// const countEl = document.getElementById('count');
// updateCounter();
// function updateCounter() {
// 	fetch('https://api.countapi.xyz/update/GymTube-Online-Fitness/website/?amount=1')
// 		.then(res => res.json())
// 		.then(res => {
// 			countEl.innerHTML = res.value;
// 		});
// }

$(document).ready(function () {
	$('.header').height($(window).height());
})


const icon = document.querySelector('ul');

window.onscroll = function(){
	var top = window.scrollY;
	// console.log(top);  this make slow to our website IMPORTANT TO REMOVE

	if (top >= 910 ) {
		icon.classList.remove('hide')
	}else{
		icon.classList.add('hide')
	} 
	// changed from 100
}

	// $(window).load(function()
	// 			{
	// 			    $('#myModal').modal('show');
	// 			});




// var mybutton = document.getElementById("myBtn");

// window.onscroll = function() {
// 	scrollFunction()

// };

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }
// <<<<<<< HEAD


// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

// count
// const countEl = document.getElementById('count');
// =======
// >>>>>>> 2bc5ce261b19f0ac545b55b8e9830c656645856c

// updateCount();

// <<<<<<< HEAD
// =======
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

// count
// const countEl = document.getElementById('count');

// updateCount();

// >>>>>>> 2bc5ce261b19f0ac545b55b8e9830c656645856c
// function updateCount(){
// 	fetch('https://api.countapi.xyz/update/gymtube/website?amount=1')
// 	.then(res => res.json())
// 	.then(res => {
// 		countEl.innerHTML = res.value;
// 	});
// <<<<<<< HEAD
// }
// =======
// }
// >>>>>>> 2bc5ce261b19f0ac545b55b8e9830c656645856c
// count
const countEl = document.getElementById('count');

updateCount();


function updateCount(){
	fetch('https://api.countapi.xyz/update/gymtube/website?amount=1')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	});

}
