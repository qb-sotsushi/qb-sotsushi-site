let yearButton = document.getElementById("year2025");


yearButton.onclick = function(){

    document.getElementById("examButtons").innerHTML = `

    <h2>試験を選択</h2>

    <button onclick="location.href='2025卒2.html'">
    卒業試験2
    </button>


    <button onclick="location.href='2025卒3.html'">
    卒業試験3
    </button>

    `;

};