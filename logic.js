async function getMeaning() {
  const word = document.getElementById("wordInput").value.trim();
  const resultDiv = document.getElementById("result");

  if (!word) {
    resultDiv.innerHTML = "<p>Please enter a word!</p>";
    return;
  }

  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Word not found");
    }
    const data = await response.json();

    // Extract info
    const definition = data[0].meanings[0].definitions[0].definition;
    const example = data[0].meanings[0].definitions[0].example || "No example available.";
    const partOfSpeech = data[0].meanings[0].partOfSpeech;
    const phonetic = data[0].phonetics[0]?.text || "";
    const audio = data[0].phonetics[0]?.audio || "";

    // Display result
    resultDiv.innerHTML = `
      <h2>${data[0].word} (${partOfSpeech})</h2>
      <p><b>Phonetic:</b> ${phonetic}</p>
      <p><b>Definition:</b> ${definition}</p>
      <p><b>Example:</b> ${example}</p>
      ${audio ? `<audio controls src="${audio}"></audio>` : ""}
    `;

  } catch (error) {
    resultDiv.innerHTML = `<p style="color:red;">❌ ${error.message}</p>`;
  }
}
