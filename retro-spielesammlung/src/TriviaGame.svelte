<script>
  import { onMount } from 'svelte';
  import { fetchTriviaQuestions } from './trivia.js';
  import { Game } from './Game.js';

  let game = new Game('Trivia-Quiz');
  let questions = [];
  let current = 0;
  let selectedAnswer = '';
  let correct = false;
  let showResult = false;
  let error = false;

  onMount(async () => {
    try {
      const result = await fetchTriviaQuestions();
      console.log("Fragen geladen:", result);
      if (result && result.length > 0) {
        questions = [...result]; // Reaktivität erzwingen
        game.start();
      } else {
        error = true;
      }
    } catch (err) {
      error = true;
    }
  });

  function checkAnswer(answer) {
    selectedAnswer = answer;
    correct = answer === decode(questions[current].correct_answer);
    if (correct) game.addPoints(10);
    showResult = true;
  }

  function nextQuestion() {
    current++;
    selectedAnswer = '';
    showResult = false;
  }

  function decode(text) {
    const txt = document.createElement('textarea');
    txt.innerHTML = text;
    return txt.value;
  }
</script>

<style>
  ul {
    list-style: none;
    padding: 0;
  }
</style>

{#if error}
  <p>⚠️ Fehler beim Laden der Fragen.</p>
{:else if questions.length === 0}
  <p>🕹️ Fragen werden geladen...</p>
{:else if current < questions.length}
  <div class="quiz-card">
    <p>{decode(questions[current].question)}</p>
    <ul>
      {#each [...questions[current].incorrect_answers, questions[current].correct_answer].sort() as answer}
        <li>
          <button on:click={() => checkAnswer(decode(answer))} disabled={showResult}>
            {decode(answer)}
          </button>
        </li>
      {/each}
    </ul>

    {#if showResult}
      <p>{correct ? '✅ Richtig!' : '❌ Falsch!'}</p>
      <button on:click={nextQuestion}>Weiter</button>
    {/if}
  </div>
{:else}
  <p>🎉 Ende! Dein Punktestand: {game.getScore()}</p>
{/if}
