# Diretriz visual — Site Allure com Animação

## Referência de verdade

Este projeto deve reproduzir a implementação presente no arquivo `Siteallurecomanimação01.zip` antes de qualquer aprimoramento. O ZIP contém uma build TanStack Start/React já compilada, com identidade Allure, marca gráfica própria, assets de CEOs, imagem hero e folhas de estilo. A fidelidade à build enviada prevalece sobre qualquer redesign automático.

## Objetivo de abertura

Preservar a composição, tipografia, cores, animações, rotas e assets existentes sempre que forem recuperáveis a partir da build. Não substituir imagens por placeholders nem alterar a linguagem visual sem solicitação explícita do usuário.

## Critérios para aprimoramentos posteriores

Cada mudança deverá ser feita de forma incremental, com validação visual no preview do Manus e comparação com o estado anterior. O foco inicial é abrir o estado atual com segurança; somente depois serão discutidas melhorias de experiência, conteúdo, acessibilidade, responsividade e animação.

## Conteúdo recuperado do arquivo

- Build frontend em `.output/public/assets/`.
- Marca Allure em `.output/public/brand/`.
- Imagem hero em `.output/public/images/`.
- Retratos em `.output/public/ceos/`.
- Folhas de estilo compiladas em `.output/public/assets/` e `.output/public/css/`.
- Bundle SSR em `.output/server/`.

## Decisão de estilo

A abordagem escolhida é **preservação fiel da referência fornecida**. Não serão criadas três alternativas estilísticas nesta etapa, pois a tarefa é importar e abrir um projeto existente, não conceber uma nova identidade.
