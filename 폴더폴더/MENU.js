const Menu_login = document.querySelector("MENU.Menu_login");
Menu_login.addEventListener("click",(event => {
    const target = event.target;
    const tag_name = event.target.tagName;
    const nav_text = target.innerText;
    if(tag_name === "LI"){
        if(nav_text === "HOME"){
            document.location.href = "./홈메뉴.html";
        }else if(nav_text === "로그인"){
            importHTML(img_container,"./login.html");
        }else if (nav_text === "회원가입") {
            importHTML(img_container,"./join.html");
        }    
    }
}));