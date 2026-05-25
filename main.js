const ods = {
  1: "ODS 1 - Erradicação da Pobreza: geração de empregos e renda nas áreas rurais.",

  2: "ODS 2 - Fome Zero: produção agrícola sustentável e segurança alimentar.",

  3: "ODS 3 - Saúde e Bem-Estar: alimentos saudáveis e nutritivos.",

  4: "ODS 4 - Educação de Qualidade: capacitação de agricultores e trabalhadores.",

  5: "ODS 5 - Igualdade de Gênero: valorização das mulheres no agronegócio.",

  6: "ODS 6 - Água Potável e Saneamento: conservação e uso sustentável da água.",

  7: "ODS 7 - Energia Limpa: uso de energias renováveis no campo.",

  8: "ODS 8 - Trabalho Decente: crescimento econômico e geração de empregos.",

  9: "ODS 9 - Inovação e Infraestrutura: modernização tecnológica da agricultura.",

  10: "ODS 10 - Redução das Desigualdades: inclusão de pequenos produtores.",

  11: "ODS 11 - Cidades Sustentáveis: fortalecimento da segurança alimentar.",

  12: "ODS 12 - Consumo Responsável: redução de desperdícios e sustentabilidade.",

  13: "ODS 13 - Ação Climática: redução dos impactos ambientais.",

  14: "ODS 14 - Vida na Água: preservação dos recursos hídricos.",

  15: "ODS 15 - Vida Terrestre: preservação da biodiversidade.",

  16: "ODS 16 - Paz e Justiça: políticas agrícolas justas e transparentes.",

  17: "ODS 17 - Parcerias: união entre governos, empresas e sociedade civil."
};

function mostrarODS(numero) {
  const caixa = document.getElementById("infoODS");

  caixa.innerHTML = `
    <h3>🌍 ODS ${numero}</h3>
    <p>${ods[numero]}</p>
  `;

  caixa.style.animation = "none";
  caixa.offsetHeight;
  caixa.style.animation = "aparecer 0.5s ease";
}

function mostrarListaODS() {
  const lista = document.getElementById("listaODS");

  if (lista.style.display === "block") {
    lista.style.display = "none";
    return;
  }

  lista.style.display = "block";

  lista.innerHTML = `
    <h3>📋 Lista Completa das 17 ODS</h3>

    <ul>
      <li>ODS 1 - Erradicação da Pobreza</li>
      <li>ODS 2 - Fome Zero</li>
      <li>ODS 3 - Saúde e Bem-Estar</li>
      <li>ODS 4 - Educação de Qualidade</li>
      <li>ODS 5 - Igualdade de Gênero</li>
      <li>ODS 6 - Água Potável e Saneamento</li>
      <li>ODS 7 - Energia Limpa</li>
      <li>ODS 8 - Trabalho Decente e Crescimento Econômico</li>
      <li>ODS 9 - Indústria, Inovação e Infraestrutura</li>
      <li>ODS 10 - Redução das Desigualdades</li>
      <li>ODS 11 - Cidades e Comunidades Sustentáveis</li>
      <li>ODS 12 - Consumo e Produção Responsáveis</li>
      <li>ODS 13 - Ação Contra a Mudança Climática</li>
      <li>ODS 14 - Vida na Água</li>
      <li>ODS 15 - Vida Terrestre</li>
      <li>ODS 16 - Paz, Justiça e Instituições Eficazes</li>
      <li>ODS 17 - Parcerias e Meios de Implementação</li>
    </ul>
  `;
}
