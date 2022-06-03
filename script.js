let body = document.querySelector("body"); //тело сайта
let main_player = document.querySelector(".main_player"); //игрок на главной сцене

let main= document.querySelector(".main"); //главная локация
let school = document.querySelector(".school"); //картинка школы
let workshop = document.querySelector(".mastery")
let arena = document.querySelector(".arena")

let location2 = document.querySelector(".location2"); //локация 2
let nojniBox = document.querySelector(".nojni"); //ачивка ножны
let swordBox = document.querySelector(".sword");
let crownBox = document.querySelector(".crown")
let classNN = document.querySelector("idkclassname");
let location1 = document.querySelector(".location1");

let checker = 0

school.onclick = function(){
	main_player.style.top = "32%";
	main_player.style.left = "70%";
	

	let loc2_variants_block = document.querySelector(".loc2_variants_block");
	let miss = document.querySelectorAll('.loc2_variants');
	let talk = document.querySelector(".loc2_talk");
	let hit = document.querySelector('.loc2_pravilno');

	function changeLocation2(){
		main.style.display = "none";
		body.style.background = "green";
		location2.style.display = "block";
		setTimeout(showBuble, 1000);
		setTimeout(showVariants, 2000);
	}

	let showBuble = function(){
		talk.style.display = "block";
	}
	let showVariants = function(){
		loc2_variants_block.style.display = "block";
	}
	let timerSecond = function(){
		
	}
	for(let i=0;i<miss.length;i++){
		miss[i].onclick = function(){
			alert('hohoho ... no');
		}
	}

	hit.onclick = function(){
		alert("hohoho ... yes")
		location2.style.display = "none";
		main.style.display = "block";
		body.style.backgroundImage = 'url(bg1.png)';
		body.style.backgroundSize = "cover";
		checker = checker + 1;
		if(checker==1){
			nojniBox.style.display = "block";
		}else if(checker==2){
			nojniBox.style.display = "none";
			swordBox.style.display = "block";
		}else if(checker==3){
			nojniBox.style.display = "none";
			swordBox.style.display = "none";
			crownBox.style.display = "block"
		}
	}
	setTimeout(changeLocation2, 1000);
}

workshop.onclick = function(){
	main_player.style.top = "70%";
	main_player.style.left = "40%";
	checker = checker + 1;
	if(checker==1){
		nojniBox.style.display = "block";
	}else if(checker==2){
		nojniBox.style.display = "none";
		swordBox.style.display = "block";
	}else if(checker==3){
		nojniBox.style.display = "none";
		swordBox.style.display = "none";
		crownBox.style.display = "block"
	}
}
arena.onclick = function(){
	main_player.style.top = "30%";
	main_player.style.left = "40%";
	checker = checker + 1;
	if(checker==1){
		nojniBox.style.display = "block";
	}else if(checker==2){
		nojniBox.style.display = "none";
		swordBox.style.display = "block";
	}else if(checker==3){
		nojniBox.style.display = "none";
		swordBox.style.display = "none";
		crownBox.style.display = "block"
	}
}
