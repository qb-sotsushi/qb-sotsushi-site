// Firebase認証確認
import { auth } from "./firebase.js";

import {
    onAuthStateChanged
}
from "https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";


// ログイン状態確認

onAuthStateChanged(auth, function(user){


    if(!user){


        // 未ログインならログイン画面へ

        location.href = "ログイン.html";


    }


});


// 現在の問題データ
let currentData;


// 選択中の回答
let selectedAnswers = [];


// 問題一覧
let questions = [];


// 現在の問題番号
let currentQuestion = 0;





// JSON読み込み
fetch(jsonFile)

.then(response => response.json())

.then(data => {

    questions = data;

    loadQuestion();

});








// 問題表示
function loadQuestion(){


    currentData = questions[currentQuestion];



    // 問題番号
    document.getElementById("questionNumber").innerHTML =
    "第" + currentData.id + "問";



    // 進捗
    document.getElementById("progress").innerHTML =
    (currentQuestion + 1) + " / " + questions.length + "問";



    // 問題文
    document.getElementById("questionText").innerHTML =
    currentData.question;





    // 画像
    let image =
    document.getElementById("questionImage");


    if(currentData.image){


        image.src =
        "images/" + currentData.image;


        image.style.display =
        "block";


    }else{


        image.style.display =
        "none";


    }






    // 解説非表示
    document.getElementById("answer").style.display =
    "none";


    document.getElementById("result").innerHTML =
    "";


    document.getElementById("explanation").innerHTML =
    "";





    // 選択リセット
    selectedAnswers = [];





    // 選択肢ボタンリセット
    let buttons =
    document.querySelectorAll(".answerButton");


    buttons.forEach(function(button){


        button.disabled = false;


        button.classList.remove("correct");


        button.classList.remove("incorrect");


        button.classList.remove("selected");


    });








    // 前へ・次へ表示制御

    let prevButton =
    document.getElementById("prevButton");


    let nextButton =
    document.getElementById("nextButton");




    if(currentQuestion === 0){

        prevButton.style.display = "none";

    }else{

        prevButton.style.display = "inline-block";

    }




    if(currentQuestion === questions.length - 1){

        nextButton.style.display = "none";

    }else{

        nextButton.style.display = "inline-block";

    }



}









// 選択肢を押した時
function selectAnswer(choice){


    let button =
    document.getElementById("btn-" + choice);



    if(selectedAnswers.includes(choice)){


        selectedAnswers =

        selectedAnswers.filter(function(item){

            return item !== choice;

        });


        button.classList.remove("selected");


    }else{


        selectedAnswers.push(choice);


        button.classList.add("selected");


    }

}









// 回答する
function checkAnswer(){


    document.getElementById("answer").style.display =
    "block";



    let buttons =
    document.querySelectorAll(".answerButton");



    buttons.forEach(function(button){


        button.disabled = true;


        button.classList.remove("selected");


    });








    // 正解判定

    let correct =


    JSON.stringify([...selectedAnswers].sort()) ===

    JSON.stringify([...currentData.answer].sort());






    if(correct){


        document.getElementById("result").innerHTML =

        "○ 正解";


    }else{


        document.getElementById("result").innerHTML =

        "× 不正解<br>正解：" +

        currentData.answer.join(",");


    }








    // 正解表示

    currentData.answer.forEach(function(answer){


        document.getElementById("btn-" + answer)

        .classList.add("correct");


    });







    // 誤答表示

    selectedAnswers.forEach(function(answer){


        if(!currentData.answer.includes(answer)){


            document.getElementById("btn-" + answer)

            .classList.add("incorrect");


        }


    });








    // 解説表示

    let explanation =

    document.getElementById("explanation");



    explanation.innerHTML =

    currentData.explanation;








    // 解説へスクロール

    explanation.scrollIntoView({

        behavior:"smooth",

        block:"start"

    });


}









// 次の問題
function nextQuestion(){


    if(currentQuestion < questions.length - 1){


        currentQuestion++;


        loadQuestion();



        // 上へ戻る

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });


    }


}









// 前の問題
function prevQuestion(){


    if(currentQuestion > 0){


        currentQuestion--;


        loadQuestion();



        // 上へ戻る

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });


    }


}
