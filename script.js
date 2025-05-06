document.getElementById('promptForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const title = document.getElementById('titleInput').value;
  const question = document.getElementById('researchInput').value;
  const relevance = document.getElementById('relevanceInput').value;

  const result = `Prompt Generator Output:\n\nTitle: ${title}\n\nResearch Question: ${question}\n\nRelevance: ${relevance}\n\nGenerated Prompt for AI Processing`;

  document.getElementById('outputArea').innerText = result;
});
