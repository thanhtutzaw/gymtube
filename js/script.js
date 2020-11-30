
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

	if (top >= 100 ) {
		icon.classList.remove('hide')
	}else{
		icon.classList.add('hide')
	}
}

	// $(window).load(function()
	// 			{
	// 			    $('#myModal').modal('show');
	// 			});




var mybutton = document.getElementById("myBtn");

window.onscroll = function() {
	scrollFunction()

};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}