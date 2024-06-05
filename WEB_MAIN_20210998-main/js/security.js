function encodeByAES256(key, data){
    constcipher= CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(key), {
        iv: CryptoJS.enc.Utf8.parse(""),
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC
    });
    return cipher.toString();
}

function decodeByAES256(key, data){
    constcipher= CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(key), {
        iv: CryptoJS.enc.Utf8.parse(""),
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC
    });
    return cipher.toString(CryptoJS.enc.Utf8);
}

function encrypt_text(password){
    const k = "key"; // 클라이언트키
    const rk= k.padEnd(32, " "); // AES256은key길이가32
    const b= password;
    const eb= this.encodeByAES256(rk, b);
    return eb;
    console.log(eb);
}
function decrypt_text(){
    const k = "key"; // 서버의키
    const rk= k.padEnd(32, " "); // AES256은key길이가32
    const eb= session_get();
    const b= this.decodeByAES256(rk, eb);
    console.log(b);
}

function init_logined(){
    if(sessionStorage){
        decrypt_text();
    }
    else{
        alert("세션 스토리지 지원 x");
    }
}