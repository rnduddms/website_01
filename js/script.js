//#1. 텍스트들을 2차 배열로 구성한다.
//2차 배열의 패턴을 구성한다. ["타이틀", "내용", "이미지파일"]
var $cont_01 = [
    ["Animal", "cashmere values every life on this planet. All our products are made from naturally-shed hair without harming the animals. We set our friends free at all times, providing them with high-quality grass only.", "intro_01.jpg"],
    ["LOCAL PRODUCERS", "cashmere believes in mutual growth with everyone engaged in our journey. We support our local producers’ economic independence through reliable buying practice and brand creation.", "intro_02.jpg"],
    ["ENVIRONMENT", "cashmere cares foremost about our nature. From attentive pasture management to zerowaste technology, in every step of our process protecting environment is our top priority. Buy one le cashmere, adopt one tree.", "intro_03.jpg"],
];

//#2. 새로운 하위 요소들을 담아야 할 곳을 선택
var $c_box_frame_01 = document.querySelector("#cont_01 article:first-child .content");

//#3. 내부 .cont_box를 모두 수집할 역할을 담당
var $c_box_01 = "";

//#4. 1차 배열 데이터의 개수만큼 구조를 반복하면서 각 반복하는 순서에 때라 배열 데이터의 내용을 담아서 수집하는 변수에 하나씩 추가로 담는다.
console.log($cont_01.length);
for(i=0; i<$cont_01.length; i++){ //i = 0 =(i++)=> 1 =(i++)=> 2
    $c_box_01 += `
    <div class="cont_box">
        <div class="subject">`+ $cont_01[i][0] +`</div>
        <div class="img_cont" style="background-image:url(./img/` + $cont_01[i][2] + `)"></div>
        <p class="txt_cont">` + $cont_01[i][1] + `</p>
    </div>
    `;
    console.log($c_box_01);
}

//#5. 반복 종료 후 담은 모든 내용들을 지정된 하위 요소에 넣는다.
$c_box_frame_01.innerHTML = $c_box_01;  //최종 세개의 .cont_box를 묶어서 .content 하위에 넣어주겠다는 의미



/////////////////////////////////////////////////
//#1. 배열 데이터 구성
//2차 배열객체 패턴 ["이미지파일명", "타이틀", "내용"]
var $cont_02 = [
    {$img:"story_02.jpg", $title:"Pure cotton that everyone is happy", $cont:"In principle, fair trade aims to improve producers' lives and become independent by providing jobs to those who are socially and economically vulnerable and purchasing raw materials and products at an appropriate price. When you make products with the right organic products rather than to support someone, the relationship of fair trade is naturally formed."},
    {$img:"story_03.jpg", $title:"Precision in consideration of ecology", $cont:"We produce products that reflect the most up-to-date information such as new construction methods, environmental changes, farmland environments, and the global trend of the organic movement. We believe that organic fabrics made through these efforts can be recognized for their precise and reliable quality."},
];
//#2. 하위에 넣고자 하는 곳의 선택자 구성
var $c_box_frame_02 = document.querySelector("#cont_01 article:last-child .content");
console.log($c_box_frame_02);

//#3. 하위 내용을 수집할 변수를 구성한다.
var $c_box_02 = "";

//#4. 배열의 개수만큼 반복하여 구조를 수집한다.
for(i=0; i<$cont_02.length; i++){
    $c_box_02 += `
    <div class="cont_box">
        <div class="img_cont" style="background-image:url(./img/`+$cont_02[i].$img+`)"></div>
        <div class="txt_cont">
            <h3>`+ $cont_02[i].$title +`</h3>
            <p>`+$cont_02[i].$cont+`</p>
        </div>
    </div>
    `;
}

//#5. 지정한 요소의 하위요소로 수집한 구조를 넣는다.
$c_box_frame_02.innerHTML = $c_box_02;

////////////////////////////////////////////////////////
//반응형 메뉴
var $nav =document.querySelector("header nav");
function openMenu(){
    $nav.classList.add("active");
}
function closeMenu(){
    $nav.classList.remove("acive");
}
