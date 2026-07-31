import { auth } from "./firebase.js";

import {
    onAuthStateChanged,
    signOut
}
from "https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";


console.log("auth.js読み込み");


onAuthStateChanged(auth, function(user){


    console.log("ユーザー:", user);



    if(!user){

        location.href = "ログイン.html";

        return;

    }


    createLogoutButton();


});





function createLogoutButton(){


    console.log("ログアウトボタン作成");


    let button = document.createElement("button");


    button.id = "logoutButton";


    button.innerHTML = "ログアウト";



    button.onclick = function(){


        signOut(auth)

        .then(function(){


            location.href = "ログイン.html";


        });


    };



    document.body.appendChild(button);


}
