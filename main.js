const curiosityBtn = document.getElementById("curiosityBtn");
    text: "Ajuda a preservar rios e recursos hídricos através do uso consciente da água."
  },
  {
    title: "ODS 7 - Energia Limpa",
    text: "Incentiva o uso de energias renováveis no campo."
  },
  {
    title: "ODS 8 - Trabalho Decente",
    text: "Promove empregos sustentáveis e desenvolvimento econômico."
  },
  {
    title: "ODS 9 - Indústria e Inovação",
    text: "Estimula novas tecnologias agrícolas mais sustentáveis."
  },
  {
    title: "ODS 10 - Redução das Desigualdades",
    text: "Ajuda pequenos agricultores e fortalece comunidades locais."
  },
  {
    title: "ODS 11 - Cidades Sustentáveis",
    text: "Contribui para abastecimento de alimentos saudáveis nas cidades."
  },
  {
    title: "ODS 12 - Consumo Responsável",
    text: "Estimula práticas de produção e consumo conscientes."
  },
  {
    title: "ODS 13 - Ação Contra o Clima",
    text: "Reduz impactos ambientais e emissão de gases poluentes."
  },
  {
    title: "ODS 14 - Vida na Água",
    text: "Evita poluição de rios, mares e lagos causada por resíduos agrícolas."
  },
  {
    title: "ODS 15 - Vida Terrestre",
    text: "Protege florestas, solos e biodiversidade."
  },
  {
    title: "ODS 16 - Paz e Justiça",
    text: "Fortalece comunidades mais equilibradas e sustentáveis."
  },
  {
    title: "ODS 17 - Parcerias",
    text: "Estimula cooperação global para alcançar o desenvolvimento sustentável."
  }
];

showODSBtn.addEventListener("click", () => {

  odsContainer.innerHTML = "";

  ods.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("ods-card");

    card.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    `;

    odsContainer.appendChild(card);
  });

  showODSBtn.textContent = "ODS Carregadas ✅";
});
