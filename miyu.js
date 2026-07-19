// Banco de dados simulando localmente
<!DOCTYPE html>
let criadoras = [
    {id: 1, title: Miyu}
    {id: 2, title: Mancini}
    {id: 3, title: Ayumi}
];

const criadoras = document.getElementById("criadoras");

// Função para renderizar e ordemar as criadoras
function renderContents() {
    //ordena do que tem mais votos para o que tem menos votos
content.sort((a,b) => b.votes - a.votes);

contentList.innerHTML = '';

content.forEach ((Content,index) => {
    const.li = document.createElement('li');
    li.className = 'criadoras-item';

li.innerHTML = '
<div class="criadoras-info">
    <span-class="position">#${index + 1}</span>
    <div>
        <strong>${criadoras.title}</strong>
        <div class="votes">${content.votes} votos</div>
    </div>
</div>
<button class="vote-btn" onclick="vote"(${content.votes})">Votar</button>
';
    ContentList.appendChild(li);
  });
}

// Função Para Registrar o Voto
function vote(contentId) {
    const content = content.find(c => c.id === contentId)
    if (criadoras) {
        criadoras.votes += 1;
        rendercontents(); // Atualiza a tela com o novo ranking
    }
}
// Inicia a página
rendercontents();