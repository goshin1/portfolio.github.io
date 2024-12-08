const toDay = new Date();
document.getElementById("time").innerHTML = toDay.getHours() + ":" + ("0" + toDay.getMinutes()).slice(-2)
document.getElementById("mainHeader").style.height = "35%";

const screen = document.getElementById("screen");
const browserWidth = window.innerWidth;
let value = (browserWidth - screen.offsetWidth) / 2;
screen.style.marginLeft = `${value}px`;


let items = ["Depatorium", "ChatPress", "영어단어정복ABC", "PasserBob", "ReactCh", "universocial"];
let itemsImg = {
    "Depatorium" : "/portfolio.github.io/images/icons/Depatorium.png",
    "ChatPress" : "/portfolio.github.io/images/icons/chatpress.png",
    "영어단어정복ABC" : "/portfolio.github.io/images/icons/englishnoteLogo.png",
    "PasserBob" : "/portfolio.github.io/images/icons/passerbob.PNG",
    "ReactCh" : "/portfolio.github.io/images/icons/reactCh.PNG",
    "universocial" : "/portfolio.github.io/images/icons/universocial.PNG"
}

const appMenu = document.getElementById('appMenu');
function renderBlocks() {
    appMenu.innerHTML = '';
    items.forEach((item, index) => {
        const icon = document.createElement('div');
        icon.style.backgroundImage = `url(${itemsImg[item]})`;
        icon.classList.add('icon');
        icon.setAttribute('draggable', true);
        icon.setAttribute('id', item)
        icon.dataset.index = index;
        appMenu.appendChild(icon);
        icon.addEventListener('dragstart', onDragStart);
        icon.addEventListener('dragover', onDragOver);
        icon.addEventListener('dragleave', onDragLeave);
        icon.addEventListener('drop', onDrop);
        icon.addEventListener('dragend', onDragEnd);
        icon.addEventListener('click', screenChangeFunction);
    });
}

function onDragStart(e) {
    const draggedBlock = e.target;
    draggedBlock.classList.add('dragging');
    e.dataTransfer.setData('text/plain', draggedBlock.dataset.index);
}

function onDragOver(e) {
    e.preventDefault(); // Necessary to allow drop
    const overBlock = e.target;
    overBlock.classList.add('over');
}

function onDragLeave(e) {
    const overBlock = e.target;
    overBlock.classList.remove('over');
}

function onDrop(e) {
    e.preventDefault();
    const overBlock = e.target;
    overBlock.classList.remove('over');

    const draggedIndex = e.dataTransfer.getData('text/plain');
    const draggedBlock = appMenu.querySelector(`.icon[data-index="${draggedIndex}"]`);
    const droppedIndex = overBlock.dataset.index;

    const temp = items[draggedIndex];
    items[draggedIndex] = items[droppedIndex];
    items[droppedIndex] = temp;

    renderBlocks(); 
}


function onDragEnd(e) {
    const draggedBlock = e.target;
    draggedBlock.classList.remove('dragging');
}

renderBlocks();

// ["Departorium", "ChatPress", "영어단어정복ABC", "PasserBob", "ReactCh", "universocial"];
const slideImages = {
    "Depatorium" : [
        "/depatorium/depatorium1.png",
        "/depatorium/depatorium2.png",
        "/depatorium/depatorium3.png",
        "/depatorium/depatorium4.png",
        "/depatorium/depatorium5.png",
        "/depatorium/depatorium6.png",
        "/depatorium/depatorium7.png",
    ], 
    "ChatPress" : [
        "/chatpress/chatPress1.png",
        "/chatpress/chatPress2.png",
        "/chatpress/chatPress3.png",
        "/chatpress/chatPress4.png",
        "/chatpress/chatPress5.png",
        "/chatpress/chatPress6.png",
        "/chatpress/chatPress7.png",
    ], 
    "영어단어정복ABC" : [
        "/englishABC/english1.gif",
        "/englishABC/english2.gif",
        "/englishABC/english3.gif",
        "/englishABC/english4.gif",
        "/englishABC/english5.gif",
        "/englishABC/english6.gif",
        "/englishABC/english7.gif",
    ], 
    "PasserBob" : [
        "/PasserBob/passerBob1.gif",
        "/PasserBob/passerBob2.gif",
        "/PasserBob/passerBob3.gif",
        "/PasserBob/passerBob4.gif",
        "/PasserBob/passerBob5.gif",
        "/PasserBob/passerBob6.gif",
        "/PasserBob/passerBob7.gif",
    ], 
    "ReactCh" : [
        "/reactCh/reactCh1.png",
        "/reactCh/reactCh2.gif",
        "/reactCh/reactCh3.gif",
        "/reactCh/reactCh4.gif",
        "/reactCh/reactCh5.gif",
        "/reactCh/reactCh6.gif",
        "/reactCh/reactCh7.gif",
    ], 
    "universocial" : [
        "/universocial/universocial1.png",
        "/universocial/universocial2.png",
        "/universocial/universocial3.png",
        "/universocial/universocial4.png",
        "/universocial/universocial5.png",
        "/universocial/universocial6.png",
        "/universocial/universocial7.png",
]
}
function screenChangeFunction(event){
    const select = event.currentTarget.id;
    document.getElementById("timezone").style.color = 'rgb(0,0,0)';
    document.getElementById("wifi").setAttribute("src", "/portfolio.github.io/images/wifi_black.png");
    document.getElementById("micro").setAttribute("src", "/portfolio.github.io/images/micro_black.png");
    document.getElementById("battery").setAttribute("src", "/portfolio.github.io/images/battery_black.png");

    document.getElementById("phoneLeft").style.transitionTimingFunction = 'ease';
    document.getElementById("phoneLeft").style.animation = 'main_to_explain_left 0s 1 forwards'

    document.getElementById("phoneRight").style.transitionTimingFunction = 'ease';
    document.getElementById("phoneRight").style.animation = 'main_to_explain_right 0s 1 forwards'


    document.getElementById("box1").style.zIndex = 0;
    document.getElementById("box1").style.opacity = 0;
    document.getElementById("box2").style.zIndex = 1;
    document.getElementById("box2").style.opacity = 100;

    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const slideBox = document.querySelector('.slideBox');
    const slides = document.querySelectorAll('.slide');
    const slideBtns = document.querySelectorAll('.slideBtn');
    const totalSlides = slides.length;

    let currentSlideIndex = 0;

    function updateSlidePosition() {
        const offset = -currentSlideIndex * 100; // 슬라이드 하나의 크기만큼 이동
        slideBox.style.transform = `translateX(${offset}%)`;
    }

    nextButton.addEventListener('click', () => {
        currentSlideIndex = (currentSlideIndex + 1) % totalSlides; // 마지막에서 첫 번째로 순환
        slideBtns.forEach(obj => obj.style.backgroundColor = 'rgba(0,0,0,0.5)')
        slideBtns[currentSlideIndex].style.backgroundColor = 'rgba(0, 140, 255, 0.8)'
            
        updateSlidePosition();
    });

    prevButton.addEventListener('click', () => {
        currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides; // 첫 번째에서 마지막으로 순환
        slideBtns.forEach(obj => obj.style.backgroundColor = 'rgba(0,0,0,0.5)')
        slideBtns[currentSlideIndex].style.backgroundColor = 'rgba(0, 140, 255, 0.8)'
        updateSlidePosition();
    });

    // 초기 상태에서 첫 번째 슬라이드로 이동
    updateSlidePosition();

    for(let i = 0; i < 7; i++){
        slideBtns[i].addEventListener("click", ()=>{
            slideBtns.forEach(obj => obj.style.backgroundColor = 'rgba(0,0,0,0.5)')
            slideBtns[i].style.backgroundColor = 'rgba(0, 140, 255, 0.8)'
            currentSlideIndex = i;
            updateSlidePosition();
        })
    }


    // 슬라이드 이미지 삽입
    for(let i = 1; i <= 7; i++){
        document.getElementById(`slide${i}`).innerHTML = "";
        const img = document.createElement("img");
        img.setAttribute("src", `/portfolio.github.io/images${slideImages[select][i - 1]}`)
        if(select === "영어단어정복ABC"){
            img.style.width = '23%'
        }else if( select === "PasserBob" || select === "ReactCh" || select === "ChatPress"){
            img.style.width = '50%'
        }else{
            img.style.width = '100%'
        }
        document.getElementById(`slide${i}`).appendChild(img)
    }
    // https://yoohyeok.github.io/u-it/ 포폴 설명 참고
    // 설명 삽입 및 깃허브링크연결
    const projectInfo = {
        "Depatorium" : {
            "date" : "팀 프로젝트 2024-03 ~ 2024-11",
            "purpose" : "코로나 시기 많은 사람들은 재택근무를 많이 하게 되었습니다. 학교에서도 비대면 수업을 진행하게 되면서<br/>\
                        원격으로 회의, 수업 등 서로 다른 장소에서 작업을 하면서 소통하기 위해 트렐로, 디스코드, 줌 등 다양한 협업 프로그램을 사용하였습니다.<br/>\
                        하지만 이러한 협업 프로그램은 수평적관계에서 업무 비중의 편차가 발생한다는 문제가 있었습니다.<br/>\
                        저희 팀은 이러한 문제를 해결하기 위해 업무에 적합한 협업사이트를 기획하게 되었습니다.<br/>\
                        저는 UI/UX 디자인 설계, 프론트엔드, 백엔드를 담당하며 개발 부분의 총괄을 맡았습니다.",
            "explain" : "- 프로젝트의 UI/UX 디자인 설계 및 구현<br/>\
                        - 프로젝트 내의 모든 페이지 구현<br/>\
                        - WebSocket을 통한 실시간 채팅 구현 및 파일 업로드 구현<br/>\
                        - 프론트엔드와 백엔드 연동<br/>\
                        - AWS를 통한 프로젝트 배포<br/><br/>\
                        직무회의실 참여시 서버로부터 회의실에 토큰값을 받고 다시 WebSocket서버에게 해당 회의실에 참가 요청을 보내어 <br/>\
                        실시간 채팅이 이루어졌습니다. 이 과정에서 채팅과 관련된 파일 업로드와 같은 기능이 렌더링이 늦어지거나 변경이 안되는 경우가 발생하여<br/>\
                        어려움 겪었으나 렌더링 과정을 확인한 다음 useEffect()함수를 통해 변경사항을 하나씩 정리하였고, useRef를 통해 생성된<br/>\
                        socket이 초기화되는 것을 방지하여 원활한 채팅이 가능하게 구현하였습니다. 이를 통해 useEffect와 useRef에 대해 더 알 수 있었습니다.",
            "github" : "https://github.com/goshin1/depatorium",
            "stack" : ["react.png", "html.png", "css.png", "js.png", "spring.png", "jwt.png", "mysql.png", "aws.png"]
        },
        "ChatPress" : {
            "date" : "개인 공모전 참가 2024-08-01 ~ 2024-10-5",
            "purpose" : "평소 문서 프로그램을 사용하게 되는 경우가 많습니다. 문서 프로그램을 사용하기 위해서는<br/>\
                        사용하는 컴퓨터마다 설치해야 되며, 소속된 기관에 따라 프로그램을 설치해야 됩니다.<br/>\
                        또한 모바일 기능을 지원하는 프로그램도 있지만, 그렇지 않은 경우 컴퓨터로만 확인할 수 있다는 불편함이 있습니다.<br/>\
                        이러한 불편함을 해결하고자, 모바일과 PC 환경을 가리지 않고 사용할 수 있는 문서 편집 사이트를 만들게 되었습니다.",
            "explain" : "- Spring security를 통한 로그인 및 회원가입 기능<br/>\
                        - Google SMTP를 통한 이메일 인증 기능<br/>\
                        - WebSocket을 사용하여 사용자간의 실시간 대화<br/>\
                        - react-quill을 사용하여 문서 편집 기능을 구현<br/>\
                        - 문서 제작 후 공유 주소를 통해 비회원에게도 문서공유가 가능하도록 구현하였습니다.<br/><br/>\
                        해당 프로젝트는 모바일과 PC 등 다양한 환경에서 사용할 수 있게 만드는 것이 중요하였기에 디자인을 단순화하는데에<br/>\
                        많은 노력을 기울였으며, 비회원도 해당 사이트에서 제작된 문서를 열고 사용할 있게 만드는 과정에서 <br/>\
                        어려움을 겪었습니다. 하지만, Spring Security에서 영감을 받아 각 문서에게 고유 키 값을 발행하고 <br/>\
                        useParam을 통해 주소란에 키값을 읽어 문서를 불러와 해결할 수 있었습니다.<br/>\
                        이를 통해 프론트엔드와 백엔드에서정보를 공유할 때 어떻게 할 수 있는지에 대해 생각할 수 있는 계기를 가지게 되었습니다.",
            "github" : "https://github.com/goshin1/ChatPress",
            "stack" : ["react.png", "html.png", "css.png", "js.png", "spring.png", "jwt.png", "mysql.png"]
        }, 
        "영어단어정복ABC" : {
            "date" : "토이 프로젝트 2023-03 ~ 2023-05-07",
            "purpose" : "영어를 공부하던 중 사용하던 단어 앱에서 추가결제를 해야하지만, 단어를 저장할 수 있었습니다.<br/>\
                        당시 저는 단어앱정도면 나도 만들 수 있지 않을까 라는 생각이 들게 되었고 이후 영어 단어장 앱을 만들기로 하였습니다.<br/>\
                        컴퓨터와 PC 두 환경에서 똑같이 사용하기 위해 React를 통해 반응형 웹 사이트로 제작하였습니다.",
            "explain" : "- 회원 별 영어 단어장 제공<br/>\
                        - 각 단어에 발음을 들을 수 있으며 속도 조절 기능<br/>\
                        - 단어 추가 및 편집, 삭제 기능 단어 추가 시 검색을 통해 단어 뜻 조사 가능<br/>\
                        - 학습화면에서 총 4가지의 게임을 통해 암기를 확인할 수 있게 제작하였습니다.<br/><br/>\
                        서버에 정보를 저장할 때 txt문서에 저장해서 사용하려는 계획을 세웠으나, 직접 파일을 수정하는것은 어려워<br/>\
                        다른 방법을 찾던 중 node.js에서 postgresql을 사용할 수 있다는 것을 알게 되어 해결할 수 있었습니다.<br/>\
                        또한 페이지간 정보를 주고 받을 때 session, cookie를 통해 저장 한 후 불러올 수 있는 방법을 생각하였으나<br/>\
                        react-router-dom을 공부하면서 useNavigate, useLocation을 알게 되었고, 현재 프로젝트처럼 크기가 작은 데이터를<br/>\
                        공유할 때 더 효율적이라는 것을 알 수 있었습니다.",
            "github" : "https://github.com/goshin1/english_total",
            "stack" : ["react.png", "html.png", "css.png", "js.png", "node.png", "postgresql.png"]
        },
        "PasserBob" : {
            "date" : "토이 프로젝트 2023-05-29 ~ 2023-06-17",
            "purpose" : "드래그 이벤트에 대해 공부하던 도중 예전에 즐겨했던 스파이더 카드 게임이 떠올랐습니다.<br/>\
                        카드를 규칙에 맞게 배치하고 턴을 종료하면 어려운 규칙일수록 체력을 많이 깎아 빠르게 게임을 끝내게 하여<br/>\
                        점수를 많이 얻을 수 있게 만들었습니다.",
            "explain" : "- 드래그엔 드롭 이벤트를 통한 카드 게임<br/>\
                        - 배치된 카드를 규칙에 따라 점수를 산정하여 점수 획득<br/><br/>\
                        - 제한시간안에 턴을 넘기지 못하면 자동으로 턴이 넘어가는 게임입니다.<br/>\
                        게임을 만들 때 배치된 카드들이 어떤 규칙으로 만들어졌는지 찾고 점수를 산정하는 기능을 만들 때<br/>\
                        어려움을 겪었으나, redux를 통해 각 배치된 카드들을 별도로 저장하여 계산하는 방식으로 구현함으로써<br/>\
                        해결할 수 있었습니다.  ",
            "github" : "https://github.com/goshin1/card",
            "stack" : ["react.png", "html.png", "css.png", "js.png", "node.png", "postgresql.png"]
        },
        "ReactCh" : {
            "date" : "토이 프로젝트 2023-08-03 ~ 2023-11-30",
            "purpose" : "useRef, useEffect를 공부하던 도중 React에서도 setInterval함수처럼 일정시간마다 반복할 수 있다는 것을 알게되었습니다.<br/>\
                        useInterval을 통해 서버에 요청을 보내 사용자간의 실시간 소통을 구현할 수 있게다는 생각이 떠올라 행동을 옮기게 되었습니다.<br/>\
                        지난 프로젝트에서 카드게임을 만들었기에 보드게임을 만들까 고민하던 도중 체스가 떠올랐고, 실시간 체스 사이트를 만들었습니다.",
            "explain" : "- 사용자간의 실시간 대화<br/>\
                        - 방 만들기 및 매칭등을 통한 사용자들간의 체스 대전 지원<br/>\
                        - 간단한 규칙으로 만든 봇을 통해 연습할 수 있는 체스 봇 지원<br/><br/>\
                        실시간 대전을 구현하는 과정에서 상대방이 두고 나서 보드에 반영할 지에 대해 고민이 많았습니다.<br/>\
                        처음은 단순하게 서버에 요청을 보내고 읽으면 되는거 아닌가라는 생각을 하였지만,<br/>\
                        이럴 경우 수를 둔 사용자는 턴이 넘어가지만, 상대방이 알아채리는 방법이 없다는 문제가 있었습니다.<br/>\
                        문득 매 초마다 보드를 조회할 때 컬럼에 턴에 대한 정보도 넣으면 되지 않나 라는 생각을 하게 되었고,<br/>\
                        그 결과 보드 조회시 자신의 턴인지 확인을 하고 맞을 경우 기물을 둘 수 있게 구현하여 문제를 해결할 수 있었습니다.",
            "github" : "https://github.com/goshin1/reactChess",
            "stack" : ["react.png", "html.png", "css.png", "js.png", "node.png", "postgresql.png"]
        },
        "universocial" : {
            "date" : "팀 프로젝트 2021-03-25~ 2021-12-10",
            "purpose" : "코로나로 인해 강의가 비대면으로 시행하게 되면서 수업을 이해하는데에 어려움을 겪는 학생들이 늘어나게 되었습니다.<br/>\
                        또한 학생들이 수업을 듣는 시간이 자유로워져 교수님들에게 질문을 하게 되어도 빠른 답변을 받기 힘들었습니다.<br/>\
                        이러한 문제를 해결하고자 정보의 장이 되어줄 사이트를 기획하게 되었습니다.<br/>\
                        팀원은 총 3명으로 저는 UI/UX 디자인을 담당하며, 사용자의 로그인과 관련된 기능 및 각 팀원에게 분배된 업무를 받아<br/>\
                        병합하는 역할을 하였습니다. ",
        
            "explain" : "- 프로젝트의 UI/UX 디자인 설계 및 구현<br/>\
                        - 회원가입, 로그인 기능 구현 및 로그인 유저인 경우 게시글, 댓글, 메신저 기능이 사용 가능하게 세션 관리<br/><br/>\
                        - 관리자 페이지를 제작하여 각 회원의 정보를 조회 및 변경 삭제 할 수 있는 기능을 구현하였습니다.<br/>\
                        관리자 페이지는 회원을 탈퇴시키거나 정보를 변경하는 경우, 다른 페이지에도 영향을 주게 되어 파악하는데에 어려움을 겪었으며,<br/>\
                        이는 테이블 외래키를 설정하고 팀원들의 코드를 병합하면서 구조를 파악하여 해결할 수 있었습니다.<br/>\
                        브라우저에서 어떻게 회원정보가 유지되는지 알 수 있었습니다.",
            "github" : "https://github.com/goshin1/universocial",
            "stack" : ["html.png", "css.png", "js.png", "java.png"]
        }
    }
    document.getElementById("projectTitle").innerHTML = select;

    document.getElementById("stack").innerHTML = "";
    for(let  i = 0; i < projectInfo[select]["stack"].length; i++){
        let img = document.createElement("img");
        img.setAttribute("src", `/portfolio.github.io/images/${projectInfo[select]["stack"][i]}`);
        img.setAttribute("class", "stackIcon")
        document.getElementById("stack").appendChild(img)
    }
    let githubLink = document.createElement("img");
    githubLink.setAttribute("src", `/portfolio.github.io/images/github.png`);
    githubLink.setAttribute("class", "github")
    githubLink.onclick = () => {
        location.href = projectInfo[select]["github"];
    }
    document.getElementById("stack").appendChild(githubLink)

    document.getElementById("projectDate").innerHTML = projectInfo[select]["date"]
    document.getElementById("projectPurpose").innerHTML = projectInfo[select]["purpose"]

    document.getElementById("projectExplain").innerHTML = (select === "universocial" || select === "Depatorium" ? "담당 개발 영역<br/>" : "주요 구현 내용<br/>") + projectInfo[select]["explain"]
}

function screenChangeMainFunction(){
    document.getElementById("timezone").style.color = 'rgb(255,255,255)';
    document.getElementById("wifi").setAttribute("src", "/portfolio.github.io/images/wifi_white.png");
    document.getElementById("micro").setAttribute("src", "/portfolio.github.io/images/micro_white.png");
    document.getElementById("battery").setAttribute("src", "/portfolio.github.io/images/battery_white.png");

    document.getElementById("phoneLeft").style.transitionTimingFunction = 'ease';
    document.getElementById("phoneLeft").style.animation = 'explain_to_main_left 0s 1 forwards'

    document.getElementById("phoneRight").style.transitionTimingFunction = 'ease';
    document.getElementById("phoneRight").style.animation = 'explain_to_main_right 0s 1 forwards'


    document.getElementById("box1").style.zIndex = 1;
    document.getElementById("box1").style.opacity = 100;
    document.getElementById("box2").style.zIndex = 0;
    document.getElementById("box2").style.opacity = 0;


}

function mainHeaderResize(){
    const mainHeader = document.getElementById("mainHeader");
    const headerLeft = document.getElementById("headerLeft");
    const headerRight = document.getElementById("headerRight");
    const detail = document.getElementById("detail");

    if(mainHeader.style.height === "35%"){
        mainHeader.style.height = "100%";
        headerLeft.style.width = "95%";
        headerRight.style.width = "0%";

        headerLeft.innerHTML =  `<table>
                            <tr>
                                <td rowspan="4" style="width: 30%; text-align: center;"><img src="/portfolio.github.io/images/고신원_증명사진.jpg" alt="phto"></td>
                                <td style="width: 12%;">성명</td>
                                <td style="width: 23%;">고신원</td>
                                <td style="width: 12%;">나이</td>
                                <td style="width: 23%;">24세</td>
                            </tr>
                            <tr>
                                
                                <td>생년월일</td>
                                <td>2001.03.04</td>
                                <td>핸드폰</td>
                                <td>010-4338-4430</td>
                            </tr>
                            <tr>
                                
                                <td>이메일</td>
                                <td>gci787@naver.com</td>
                                <td>전화</td>
                                <td>010-4338-4430</td>
                            </tr>
                            <tr>
                                
                                <td>병역</td>
                                <td>군필</td>
                                <td>보훈/장애</td>
                                <td>비대상</td>
                            </tr>
                        </table>
                        <div class="mainBlock">
                            <h3>Stack</h3>
                            <div class="headerStack">
                                <img src="/portfolio.github.io/images/react.png" alt="stack"/>
                                <img src="/portfolio.github.io/images/html.png" alt="stack"/>
                                <img src="/portfolio.github.io/images/css.png" alt="stack"/>
                                <img src="/portfolio.github.io/images/js.png" alt="stack"/>
                                <img src="/portfolio.github.io/images/spring.png" alt="stack"/>
                                <img src="/portfolio.github.io/images/node.png" alt="stack">
                                <img src="/portfolio.github.io/images/mysql.png" alt="stack">
                                <img style="margin-top: 2.5%;" src="/portfolio.github.io/images/aws.png" alt="stack">
                            </div>
                        </div>
                        <div class="mainBlock">
                            <h3>Education</h3>
                            <div class="headerStack">
                                <span>2020.03 ~ 2025.02 동양미래대학교 컴퓨터소프트웨어공학과</span>
                                <span>2017.03 ~ 2020.02 세명컴퓨터고등학교 스마트콘텐츠과</span>
                            </div>
                        </div>
                        <div class="mainBlock">
                            <h3>License</h3>
                            <div class="headerStack">
                                <span>2019.07.12 웹디자인기능사</span>
                                <span>2019.04.26 컴퓨터그래픽스운용기능사</span>
                                <span>2017.12.27 정보처리기능사</span>
                            </div>
                        </div>`;
        
    }else{
        mainHeader.style.height = "35%";
        headerLeft.style.width = "25%";
        headerRight.style.width = "70%";

   
        headerLeft.innerHTML = `<img src="/portfolio.github.io/images/고신원_증명사진.jpg" alt="photo">
            <div id="detail">
                <p><img src="/portfolio.github.io/images/mail.png" alt="mail"> gci787@naver.com</p>
                <p><img src="/portfolio.github.io/images/phone.png" alt="mail"> 010-4338-4430</p>
            </div>`
        
    }
}