var charactersList = new Array(8);

charactersList[0] = '<img src="personajes/rocio/img/carousel.jpg" alt="Rocio" /><div class="title"><span class="project-number"></span><h2>Rocio</h2></div>';

charactersList[1] = '<img src="personajes/nihal/img/carousel.jpg" alt="Nihal" /><div class="title"><span class="project-number"></span><h2>Nihal</h2></div>';

charactersList[2] = '<img src="personajes/toph/img/carousel.jpg" alt="Toph" /><div class="title"><span class="project-number"></span><h2>Toph</h2></div>';

charactersList[3] = '<img src="personajes/june/img/carousel.jpg" alt="June" /><div class="title"><span class="project-number"></span><h2>June</h2></div>';

charactersList[4] = '<img src="personajes/hara_millo/img/carousel.jpg" alt="Hara Millo" /><div class="title"><span class="project-number"></span><h2>Hara Millo</h2></div>';

charactersList[5] = '<img src="personajes/julius_jr/img/carousel.jpg" alt="Julius Jr" /><div class="title"><span class="project-number"></span><h2>Julius Jr</h2></div>';

charactersList[6] = '<img src="personajes/molly/img/carousel.jpg" alt="Molly" /><div class="title"><span class="project-number"></span><h2>Eva/Molly</h2></div>';

charactersList[7] = '<img src="personajes/moze/img/carousel.jpg" alt="Moze" /><div class="title"><span class="project-number"></span><h2>Moze</h2></div>';

charactersList[8] = '<img src="personajes/barry/img/carousel.jpg" alt="Barry" /><div class="title"><span class="project-number"></span><h2>Barry</h2></div>';

function f_shuffle() {
    var i = 0;
    var random;
    while (i < charactersList.length) {
        random = Math.floor(Math.random() * charactersList.length);
        if (charactersList[random] != "selected") {
            document.write(charactersList[random]);
            charactersList[random] = "selected";
            i++;
        }
    }
}
