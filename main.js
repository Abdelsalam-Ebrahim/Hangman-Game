// Get The type of Word
let typeOfWord = document.querySelectorAll("header span")[0];

// console.log(typeOfWord);

let movies = ["interstellar", "memento", "inception", "creed", "southpaw", "fury", "glass", "split", "godfather", "arrival", "it", "heat"];
let countries = ["egypt", "england", "america", "german", "france", "china", "india", "russia", "morocco", "qatar", "spain", "syria", "tunis"];
let programming = ["c", "r", "python", "java", "javascript", "go", "ruby", "assembly", "php", "mySQL"];

let random = [movies, countries, programming];
let word = ["Movies", "Countries", "Programming"];
let choosenWord = Math.floor(Math.random() * random.length);

typeOfWord.innerHTML = word[choosenWord];

let type = random[choosenWord];
let choosetype = Math.floor(Math.random() * type.length);
let solution = type[choosetype];

for(let i = 0; i < solution.length; i++) {
    let createSolution = document.createElement("div");
    createSolution.className = "answer";

    let createSpan = document.createElement("span");
    createSpan.innerHTML = solution[i];
    createSolution.appendChild(createSpan);

    let getResult = document.querySelector(".result");
    getResult.appendChild(createSolution);
}

let cnt = 0;
let letters = document.querySelectorAll(".letter");

letters.forEach(letter => {
    letter.addEventListener("click", function (e) {
        e.target.className = "letter clicked";

        let answers = document.querySelectorAll(".answer span");
        let ok = false, finish = 0;
        answers.forEach(answer => {
            if(answer.innerHTML.toUpperCase() == e.target.innerHTML.toUpperCase()) {
                answer.style.display = "block";
                ok = true;
            }

            if(answer.style.display == "block"){
                finish++;
            }
        });

        if(finish == solution.length) {
            let winner = document.createElement("div");
            winner.className = "winner";
            winner.innerHTML = `Congrats You Won`;
            document.querySelector(".game").appendChild(winner);
        }

        if(!ok){
            if(cnt == 0) {
                document.querySelector(".base").style.display = "block";
            } else if(cnt == 1) {
                document.querySelector(".hang").style.display = "block";
            } else if(cnt == 2) {
                document.querySelector(".hang-1").style.display = "block";
                document.querySelector(".hang-2").style.display = "block";
            } else if(cnt == 3) {
                document.querySelector(".rope").style.display = "block";
            } else if(cnt == 4) {
                document.querySelector(".head").style.display = "block";
            } else if(cnt == 5) {
                document.querySelector(".body").style.display = "block";
            } else if(cnt == 6) {
                document.querySelector(".arm-1").style.display = "block";
                document.querySelector(".arm-2").style.display = "block";
            } else if(cnt == 7) {
                let loser = document.createElement("div");
                loser.className = "loser";
                loser.innerHTML = `Game Over, The Word Is ${solution}`;
                document.querySelector(".game").appendChild(loser);

                let btn = document.createElement("button");
                btn.innerHTML = "Try Again";
                loser.appendChild(btn);
                document.querySelector("button").addEventListener("click", function (e) {
                    window.location.reload();
                });
            }
            cnt++;
        }
    });
});

