const 햄스터 = document.querySelector("li.햄스터");


햄스터.addEventListener("click", (event => {
    const target = event.target;
    
    // event.target 의 tagName 을 tag_name 변수에 선언
    const tag_name = event.target.tagName;
    const nav_text = target.innerText;
    if(tag_name === "LI"){
        // alert("내비 요소 클릭 : " + nav_text);
        if(nav_text === "HOME"){
            // 홈은 절대 바꾸면 안됨.
            document.location.href = "./홈메뉴.html";
        }else if(nav_text === "로그인"){
            importHTML(img_container,"./login.html");
        }else if (nav_text === "회원가입") {
            importHTML(img_container,"./join.html");
        }
    }

}));