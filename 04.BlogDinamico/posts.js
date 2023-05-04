const posts = [
  {
    title: "Chihuahua",
    content:
      "Menor raça do mundo mas são capazes de surpreender com a sua energia e vontade de brincar. Inteligentes e muito devotos ao seu tutor. De origem mexicana, geralmente pesam de 1 a 3 kgs, altura média de 15 a 23 cm e uma expectativa de vida de 12 a 20 anos.",
  },
  {
    title: "Jack Russel",
    content:
      "Ligado nos 220V de puro entusiasmo com personalidade marcante e independente. De origem inglesa, geralmente pesam de 9 a 13 kgs, altura média de 30 a 35 cm e uma expectativa de vida de 12 a 14 anos.",
  },
  {
    title: "Shiba Inu",
    content:
      "É um ótimo cachorro de guarda, alerta, ágil e desconfiado com estranhos mas carinhoso e leal com a família. De origem japonesa, geralmente pesam de 7 a 11 kgs, altura média de 33 a 43 cm e uma expectativa de vida de 12 a 15 anos.",
  },
];

const wrapper = document.getElementById("posts");

for (var i = 0; i < posts.length; i++) {
  const postData = posts[i];
  console.log(postData);

  const article = document.createElement("article");
  article.classList.add("article");

  const title = document.createElement("h2");
  title.classList.add("article-title");
  const titleText = document.createTextNode(postData.title);
  title.appendChild(titleText);
  article.appendChild(title);

  const content = document.createElement("p");
  const contentText = document.createTextNode(postData.content);
  content.appendChild(contentText);
  article.appendChild(content);

  wrapper.appendChild(article);
}
