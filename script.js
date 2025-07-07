let heroi = "Otto"
let XP = 9500

let matrix = [
    [0, 1000, "Ferro"],
    [1001, 2000, "Bronze"],
    [2001, 5000, "Prata"],
    [5001, 7000, "Ouro"],
    [7001, 8000, "Platina"],
    [8001, 9000, "Ascendente"],
    [9001, 10000, "Imortal"]
]

let patente = "Radiante"

for (let [min, max, paten] of matrix) {
    if (min <= XP && XP <= max) {
        patente = paten
        break
    }
}

    console.log("o herói " + heroi + " tem " + XP + " de XP, e a patente dele é", patente)

