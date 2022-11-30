

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light-mode')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light-mode'){
		document.getElementById('theme-style').href = 'default.css'
	}

	if(mode == 'dark-mode'){
		document.getElementById('theme-style').href = 'dark.css'
	}

    if(mode == 'brown-mode'){
        document.getElementById('theme-style').href = 'brown.css'
    }

	

	localStorage.setItem('theme', mode)
}


var myVar;
        function myFunction() {
            myVar = setTimeout(showPage, 2000);
        }
        function showPage() {
            document.getElementById("loader").style.display = "none";
            document.getElementById("myDiv").style.display = "block";
        }

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                    
                });
            });
        });