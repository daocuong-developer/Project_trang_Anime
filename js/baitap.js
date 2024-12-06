document.addEventListener("DOMContentLoaded", function() {
	$('.owl-carousel').owlCarousel({
	  loop:true,
	  margin:10,
	  nav:true,
	  responsive:{
		0:{
		  items:2
		},
		576:{
		  items:2
		},
		768:{
			item:3
		},
		992:{
			item:3
		},
		1020:{
			item:4
		},
		1024:{
		  items:5
		}
	  }
	});
  });

let slideIndex = 1;
showSlides(slideIndex);

let slideInterval = setInterval(function() {
  plusSlides(1);
}, 5000); // thời gian chuyển ảnh là 5 giây (5000 miliseconds)

function plusSlides(n) {
  clearInterval(slideInterval); // xóa bỏ interval hiện tại
  showSlides(slideIndex += n);
  slideInterval = setInterval(function() {
    plusSlides(1);
  }, 5000); // tạo interval mới
}

function currentSlide(n) {
  clearInterval(slideInterval); // xóa bỏ interval hiện tại
  showSlides(slideIndex = n);
  slideInterval = setInterval(function() {
    plusSlides(1);
  }, 5000); // tạo interval mới
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("TPostMv");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
};

const movieBtn=document.querySelectorAll('.Top button')
const movieList=document.querySelectorAll('.Movie-item')
movieBtn.forEach((btn)=>{
	btn.addEventListener('click', (e)=>{
		const type = e.target.getAttribute('type-movie')
		document
			.querySelector('.Top button.active')
			.classList.remove('active')
		e.target.classList.add('active')
		movieList.forEach((item)=>{
			if(type=='all'||item.getAttribute('type-movie')==type)
				item.classList.remove('hide')
			else
				item.classList.add('hide')
		})
	})
});

var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
