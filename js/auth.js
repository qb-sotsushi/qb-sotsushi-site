import { auth } from "./firebase.js";

import {
    onAuthStateChanged,
    signOut
}
from "https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";



// ログイン状態確認

onAuthStateChanged(auth, function(user){


    if(!user){


        location.href = "ログイン.html";

        return;


    }



    // ログイン済みならログアウトボタン作成

    createLogoutButton();


});





// ログアウトボタン作成

function createLogoutButton(){


    // すでに存在する場合は作らない

    if(document.getElementById("logoutButton")){

        return;

    }



    let button = document.createElement("button");


    button.id = "logoutButton";


    button.innerHTML = "ログアウト";



    button.onclick = function(){


        signOut(auth)

        .then(function(){


            location.href = "ログイン.html";


        })


        .catch(function(error){


            console.log(error);


        });


    };



    document.body.appendChild(button);


}
