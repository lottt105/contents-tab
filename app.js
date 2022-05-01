const $nav = document.querySelectorAll('.nav li');
const $list = document.querySelectorAll('#list div');
const $moreBtn = document.querySelector('#moreBtn');

const makeContentList = (end) => {
    let recentList = "";
    let viewList = "";
    let popularList = "";

    for(let i=0; i<end; i++){
        recentList += 
            `<div class='cover'>
                <div>
                    <span>${recentContents[i].cp}</span><br><br>
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
                    <span>${viewContents[i].cp}</span><br><br>
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
                    <span>${popularContents[i].cp}</span><br><br>
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

const showLoading = (func, end) =>{
    $list[3].style.display = 'block';
    $moreBtn.style.display = 'none';
    setTimeout(() => {
        if (end!=0) func(end);
        else func();
        $moreBtn.style.display = 'block';
        $list[3].style.display = 'none';
    },1000);
};

for(let i=0; i<$nav.length; i++){
    $nav[i].addEventListener('click', (e) => {
        e.preventDefault();
        const tabTarget = e.target.getAttribute('href').replace('#', "");
        const $tabTarget = document.getElementById(tabTarget);

        for(let j=0; j<$nav.length; j++){
            $nav[j].classList.remove('active');
            $list[j].style.display = 'none';
        }
        e.target.parentNode.classList.add('active');
        makeContentList(10);

        showLoading(() => {$tabTarget.style.display = 'block';}, 0);
    });
}

$moreBtn.addEventListener('click', () => {
    showLoading(makeContentList, 20);
    setTimeout(() => {$moreBtn.style.display = 'none'}, 1000);
});

showLoading(makeContentList, 10);

