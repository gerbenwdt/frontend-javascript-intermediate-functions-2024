// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// For loop: For aantal cijfers in de array: voer vergelijking uit: cijfer >= 8
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// Maak gebruik van het aantal items in de array
// * Hoe zorg ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Maak een variabele aan die elke keer 1 ophoogt
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6
console.log("\n   Opdracht  1: Cum Laude, 1a: Script schrijven")
let numberCumLaudeStudents = 0
for (i in grades) {
    if (grades[i] >= 8) {
        numberCumLaudeStudents++
    }

}
console.log("Aantal Cum Laude afgestudeerde studenten: " + numberCumLaudeStudents)

/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3
console.log("\n   Opdracht  1: Cum Laude, 1b: Omschrijven tot een herbruikbare functie")
const cumLaude = arrayGrades => {
    numberCumLaudeStudents = 0
    for (i in arrayGrades) {
        if (arrayGrades[i] >= 8) {
            numberCumLaudeStudents++
        }
    }
    return "Aantal Cum Laude afgestudeerde studenten: " + numberCumLaudeStudents + "    Cijfers: " + arrayGrades
}
console.log(cumLaude(grades))
console.log(cumLaude([6, 4, 5]))
console.log(cumLaude([8, 9, 4, 6, 10]))

/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// Cijfers optellen en delen door het aantal
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// De totale som van de cijfers, resultaat delen door het aantal items in de array
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// for loop: for (i in grades)
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143
console.log("\n   Opdracht  2: Gemiddeld cijfer, 2a: Script schrijven")
let totalOfGrades = 0
for (i in grades) {
    // console.log("Positie " + i + " Waarde " + grades[i])
    totalOfGrades = totalOfGrades + grades[i]
}
const averageGradeCalculation = "Gemiddelde cijfer: " + totalOfGrades / grades.length + "   Cijfers: " + grades
console.log(averageGradeCalculation)
/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx
console.log("\n   Opdracht  2: Gemiddeld cijfer, 2b: Omschrijven tot een herbruikbare functie")
const averageGrade = arrayGrades => {
    let totalOfGrades = 0
    for (i in arrayGrades) {
        totalOfGrades = totalOfGrades + arrayGrades[i]
    }
    return "Gemiddelde cijfer: " + totalOfGrades / arrayGrades.length + "   Cijfers: " + arrayGrades
}
console.log(averageGrade(grades))
console.log(averageGrade([6, 4, 5]))
console.log(averageGrade([8, 9, 4, 6, 10]))
/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!
console.log("\n   Opdracht  2: Gemiddeld cijfer, 2c: Afronden op twee decimalen")
const averageGrade2Decimals = arrayGrades => {
    let totalOfGrades = 0
    for (i in arrayGrades) {
        totalOfGrades = totalOfGrades + arrayGrades[i]
    }
    return "Gemiddelde cijfer: " + Math.round((totalOfGrades / arrayGrades.length)*100)/100 + "   Cijfers: " + arrayGrades
}
console.log(averageGrade2Decimals(grades))
console.log(averageGrade2Decimals([6, 4, 5]))
console.log(averageGrade2Decimals([8, 9, 4, 6, 10]))
/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorg ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9
console.log("\n   Bonusopdracht: hoogste cijfer, 3a: Script schrijven")
let highestGradeResult = grades[0]
for (i in grades) {
    if (highestGradeResult < grades[i]) {
        highestGradeResult = grades[i]
    }
}
console.log("Het hoogst behaalde cijfer is: " + highestGradeResult + "    Cijfers: " + grades)
/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10
console.log("\n   Bonusopdracht: hoogste cijfer, 3b: Omschrijven tot een herbruikbare functie")
const highestGrade = arrayGrades => {
    highestGradeResult = arrayGrades[0]
    for (i in arrayGrades) {
        if (highestGradeResult < arrayGrades[i]) {
            highestGradeResult = arrayGrades[i]
        }
    }
    return "Het hoogst behaalde cijfer is: " + highestGradeResult + "    Cijfers: " + arrayGrades
}
console.log(highestGrade(grades))
console.log(highestGrade([6, 4, 5]))
console.log(highestGrade([8, 9, 4, 6, 10]))
// Bonus antwoord
console.log("\nHet hoogste cijfer in de array grades: " + Math.max(...grades) + "   Cijfers: " + grades)