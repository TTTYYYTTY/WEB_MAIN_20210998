const check_input = () => {
    const idsave_check = document.getElementById('idSaveCheck');
    const loginForm = document.getElementById('login_form');
    const loginBtn = document.getElementById('login_btn');
    const emailInput = document.getElementById('typeEmailX');
    const passwordInput = document.getElementById('typePasswordX');

    const c = '아이디, 패스워드를 체크합니다';
    alert(c);

    const emailValue = emailInput.ariaValueMax.trim();
    const passwordValue = passwordInput.ariaValueMax.trim();

    if(id.value.length === 0 || passwordInput.value.length === 0){
        alert("아이디와 비밀번호를 모두 입력해주세요.");
    } else{
        session_set();
        form.submit();
    }
    


    if (emailValue === '') {
        alert('이메일을 입력하세요.');
        return false;
    }

    if (passwordValue === '') {
        alert('비밀번호를 입력하세요');
        return false;
    }

    if (emailValue.length < 5){
        alert('아이디는 최소 5글자 이상 입력해야 합니다.');
        return false;

    }

    if (passwordValue.length < 12){
        alert('비밀번호는 반드시 12글자 이상 입력해야 합니다.');
        return false;
    }

    const hasSpecialChar = passwordValue.match(/[!,@#$%^&*()_+\-=[\]{};':"\\|,.<>\/?]+/) !== null;
    if (!hasSpecialChar) {
        alert('패스워드는 특수문자를 1개 이상 포함해야 합니다.');
        return false;
    }
    const hasUpperCase = passwordValue.match(/[A-Z]+/) !== null;
    const hasLowerCase = passwordValue.match(/[a-z]+/) !== null;
    if (!hasUpperCase || !hasLowerCase) {
        alert('패스워드는 대소문자를 1개 이상 포함해야 합니다.');
        return false;
    }

    console.log('이메일:', emailValue);
    console.log('비밀번호:', passwordValue);
    if(idsave_check.checked == true) {
        alert("쿠키를 저장합니다", emailValue);
        setCookie("id", emailValue, 1);
    }
    else
    {
        setCookie("id", emailValue.value, 0);
    }
    loginForm.submit();
};


const check_xss = (input) => {
    // DOMPurify 라이브러리 로드 (CDN 사용)
    const DOMPurify = window.DOMPurify;

    // 입력 값을 DOMPurify로 sanitize
    const sanitizedInput = DOMPurify.sanitize(input);

    // Sanitized도니 값과 원본 입력 값 비교
    if (sanitizedInput !== input) {
        // XSS 공격 가능성 발견 시 에러 처리
        alert('XSS 공격 가능성이 있는 입력값을 발견했습니다');
        return false;
    }

    //Sanitized된 값 반환
    return sanitizedInput;
}
function logout(){
    session_del();
    location.href='../index.html';
}
document.getElementById("login_btn").addEventListener('click', check_input);

function addJavascript(jsname) {
    var th = document.getElementsByTagName('head')[0];
    var s = document.createElement('script');
    s.setAttribute('src',jsname);
    th.appendChild(s);
}
addJavascript('/js/security.js');
addJavascript('/js/session.js');
addJavascript('/js/cookie.js');