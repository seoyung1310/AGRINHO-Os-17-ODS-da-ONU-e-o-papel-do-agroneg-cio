const ods = {
  1: "ODS 1 - Erradicação da Pobreza: acabar com a pobreza em todas as suas formas.",
  2: "ODS 2 - Fome Zero: acabar com a fome e promover agricultura sustentável.",
  3: "ODS 3 - Saúde e Bem-Estar: garantir vida saudável para todos.",
  4: "ODS 4 - Educação de Qualidade: educação inclusiva e acessível.",
  5: "ODS 5 - Igualdade de Gênero: alcançar igualdade entre homens e mulheres.",
  6: "ODS 6 - Água Potável e Saneamento: acesso à água limpa e saneamento.",
  7: "ODS 7 - Energia Limpa: acesso à energia sustentável e acessível.",
  8: "ODS 8 - Trabalho Decente: crescimento econômico sustentável.",
  9: "ODS 9 - Inovação e Infraestrutura: promover industrialização sustentável.",
  10: "ODS 10 - Redução das Desigualdades: diminuir desigualdades sociais.",
  11: "ODS 11 - Cidades Sustentáveis: tornar cidades mais inclusivas.",
  12: "ODS 12 - Consumo Responsável: incentivar produção sustentável.",
  13: "ODS 13 - Ação Climática: combater mudanças climáticas.",
  14: "ODS 14 - Vida na Água: proteger oceanos e mares.",
  15: "ODS 15 - Vida Terrestre: preservar florestas e biodiversidade.",
  16: "ODS 16 - Paz e Justiça: promover sociedades pacíficas.",
  17: "ODS 17 - Parcerias: fortalecer meios de implementação global."
};

function mostrarODS(numero) {
  const caixa = document.getElementById("infoODS");

  caixa.innerHTML = `
    <h3>${numero}ª ODS</h3>
    <p>${ods[numero]}</p>
  `;
}
