export async function fetchTriviaQuestions() {
  return [
    {
      question: "Welches Spiel ist ein Klassiker auf dem NES?",
      correct_answer: "Super Mario Bros.",
      incorrect_answers: ["Crash Bandicoot", "Halo", "Tetris"]
    },
    {
      question: "Was ist die Währung in 'The Legend of Zelda'?",
      correct_answer: "Rubine",
      incorrect_answers: ["Gold", "Münzen", "Sterne"]
    },
    {
      question: "In welchem Jahrzehnt erschien Pac-Man?",
      correct_answer: "1980er",
      incorrect_answers: ["1990er", "1970er", "2000er"]
    },
    {
      question: "Wie heißt der blaue Igel von SEGA?",
      correct_answer: "Sonic",
      incorrect_answers: ["Shadow", "Knuckles", "Tails"]
    },
    {
      question: "Wie viele Bits hatte das Super Nintendo?",
      correct_answer: "16",
      incorrect_answers: ["8", "32", "64"]
    }
  ];
}
