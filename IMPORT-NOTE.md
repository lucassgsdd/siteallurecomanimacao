# Nota de importação

O arquivo enviado contém a build pública e um bundle SSR parcial do projeto TanStack Start, mas não contém o código-fonte (`src/`) nem o diretório `.output/server/_chunks/` necessário para o SSR original. O bundle cliente depende de `window.$_TSR`, que normalmente é injetado pelo SSR; por isso, referenciar apenas os arquivos JavaScript compilados em um HTML vazio resulta em tela em branco.

Para abrir o projeto fielmente e permitir aprimoramentos estruturais, é necessário receber o repositório/código-fonte original ou uma nova exportação que inclua `src/`, `public/` e todos os arquivos de `.output/server/`.

Os assets originais já foram preservados no armazenamento do projeto e a especificação de fidelidade está em `ideas.md`.
