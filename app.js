// console.log(popularContents);
// console.log(viewContents);
// console.log(recentContents);

const $nav = document.querySelectorAll('.nav li');
const $list = document.querySelectorAll('#list div');

let recentList = "";
let viewList = "";
let popularList = "";

const list10 = (start, end) => {
    for(let i=start; i<end; i++){
        recentList += 
        `<div class='cover'>
            <div>
                <span>${recentContents[i].cp}</span><br/>
                <strong OnClick="location.href='${recentContents[i].url}'">
                    ${recentContents[i].title}
                </strong>
            </div>
            <div OnClick="location.href='${recentContents[i].url}'">
                <img src='${recentContents[i].img}'>
            </div>
        </div><hr>`;
        viewList += 
        `<div class='cover'>
            <div>
                <span>${viewContents[i].cp}</span><br/>
                <strong OnClick="location.href='${viewContents[i].url}'">
                    ${viewContents[i].title}
                </strong>
            </div>
            <div OnClick="location.href='${viewContents[i].url}'">
                <img src='${viewContents[i].img}'>
            </div>
        </div><hr>`;
        popularList += 
        `<div class='cover'>
            <div>
                <span>${popularContents[i].cp}</span><br/>
                <strong OnClick="location.href='${popularContents[i].url}'">
                    ${popularContents[i].title}
                </strong>
            </div>
            <div OnClick="location.href='${popularContents[i].url}'">
                <img src='${popularContents[i].img}'>
            </div>
        </div><hr>`;
    }
    
    $list[0].innerHTML = recentList;
    $list[1].innerHTML = viewList;
    $list[2].innerHTML = popularList;
};

for(let i=0; i<$nav.length; i++){
    $nav[i].addEventListener('click', (e) => {
        e.preventDefault();
        const tabTarget = e.target.getAttribute('href').replace('#', "");
        // const tabContents = (new Function("return "+tabTarget+`Contents`))();
        const $tabTarget = document.getElementById(tabTarget);

        for(let j=0; j<$nav.length; j++){
            $nav[j].classList.remove('active');
            $list[j].style.display = 'none';
        }
        e.target.classList.add('active');
        
        $tabTarget.style.display = 'block';
        // $tabTarget.innerHTML = tabContents[0].title;
    });
}

list10(0, 10);