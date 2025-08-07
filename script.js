const username = "PatrickDom64";

async function loadProjects() {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await response.json();
    const container = document.getElementById('projects');

    repos.forEach(repo => {
      if (repo.fork || !repo.description) return;

      const imageUrl = `https://raw.githubusercontent.com/${username}/${repo.name}/main/preview.png`;

      const card = document.createElement('div');
      card.className = 'project-card';

      card.innerHTML = `
        <img src="${imageUrl}" alt="${repo.name}" class="project-image" onerror="this.style.display='none'">
        <h2 class="project-title">${repo.name}</h2>
        <p class="project-description">${repo.description}</p>
        
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Erro ao carregar os projetos:", error);
  }
}
loadProjects();