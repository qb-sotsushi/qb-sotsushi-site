// Firebase認証読み込み
import { auth } from "./firebase.js";


import {
    signInWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";




// ログインボタン

document
.getElementById("loginButton")
.addEventListener("click", function(){



    const email =
    document.getElementById("email").value;



    const password =
    document.getElementById("password").value;





    signInWithEmailAndPassword(
        auth,
        email,
        password
    )


    .then(function(){


        // ログイン成功

        location.href =
        "QB卒試online.html";


    })



    .catch(function(error){


        document
        .getElementById("error")
        .innerHTML =
        "メールアドレスまたはパスワードが違います";


    });



});
