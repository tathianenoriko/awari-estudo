# Lista de Usuários Aprimorada

## Prática

<p>Esta prática usará como base o exercício da aula anterior, “Lista de usuários”, com navegação entre páginas. As tarefas são:<p>

- adicionar à configuração do ESLint, que já vem com o Create React App, as seguintes regras:
  - semi com o chave/valor “error” e “always”, para sempre utilizar “;” no projeto;
  - quotes com o chave/valor “error” e “single”, para sempre utilizar aspas simples no projeto;
  - adicionar o comando lint aos scripts do projeto eslint ./src/\*_/_.{js,jsx};
- criar o arquivo .editorconfig com uma configuração padrão, para padronizar a indentação do código;
- instalar o CommitLint com @commitlint/config-conventional para estender o padrão Conventional Commits;
- instalar o Husk;
- adicionar o hook pre-commit para executar o comando nom run lint;
- adicionar o hook commit-msg para validar as mensagens de commit.
