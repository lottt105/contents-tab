// console.log(popularContents);
// console.log(viewContents);
console.log(recentContents);

const $nav = document.querySelectorAll('.nav li');
// const $list = document.querySelectorAll('#list div');

for(let i=0; i<$nav.length; i++){
    $nav[i].addEventListener('click', (e) => {
        e.preventDefault();
        // const tabTarget = e.target.getAttribute('href').replace('#', "");
        // const tabContents = (new Function("return "+tabTarget+`Contents`))();
        // const $tabTarget = document.getElementById(tabTarget);

        for(let j=0; j<$nav.length; j++){
            $nav[j].classList.remove('active');
            // $list[j].style.display = 'none';
        }
        e.target.classList.add('active');
        
        // $tabTarget.style.display = 'block';
        // $tabTarget.innerHTML = tabContents[0].title;
    });
}



