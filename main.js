const odsDados = [
    { id: 1, nome: "Erradicação da Pobreza", desc: "Acabar com a pobreza em todas as suas formas." },
    { id: 2, nome: "Fome Zero", desc: "Promover agricultura sustentável e segurança alimentar." },
    // ... adicione até a 17
];

const containerBotoes = document.getElementById('botoes-ods');

odsDados.forEach(ods => {
    const btn = document.createElement('button');
    btn.innerText = `ODS ${ods.id}`;
    btn.onclick = () => {
        document.getElementById('display-info').classList.remove('hidden');
        document.getElementById('titulo-ods').innerText = ods.nome;
        document.getElementById('descricao-ods').innerText = ods.desc;
    };
    containerBotoes.appendChild(btn);
});