
export default function scriptJS() {
    let popup = document.getElementById("popup");
    let lijnT = document.getElementById("lijnT");
    let lijnM = document.getElementById("lijnM");
    let lijnB = document.getElementById("lijnB");
    let hamburger = document.getElementById("hamburger");
    hamburger.addEventListener("click", () => { toggleLijnen(); })

    popup.addEventListener("click", () => { toggleLijnen(); })


    function toggleLijnen() {
        popup.classList.toggle("verborgen");
        popup.classList.toggle("transitie");
        lijnT.classList.toggle("rotateKlok");
        lijnM.classList.toggle("lijn");
        lijnB.classList.toggle("rotateAntiKlok");
    };

    window.onresize = () => {
        popup.classList.remove("transitie");
        popup.classList.add("verborgen");
    };



    //javascript voor caroussel
    let fotos = document.querySelector(".fotos");
    let fotoKaarten = document.getElementsByClassName("fotoKaart");
    let knoppenLijst = document.querySelector(".knoppenLijst");

    for (let i = 0; i < fotoKaarten.length; i++) {
        let knop = document.createElement("button");
        knop.classList.add("knop");
        if (i == 0) knop.classList.add("active");
        knop.onclick = function () {
            let shift = fotoKaarten[0].clientWidth;

            var p = document.getElementById("target");
            fotos.style.transform = "translateX(-" + shift * i + "px)";
            let lijst = document.querySelectorAll(".active");
            lijst.forEach((item) => item.classList.remove("active"));
            this.classList.add("active");
        };
        knoppenLijst.appendChild(knop);
    }
}