# [calendario-de-aniversarios](https://voaneves.com/calendario-de-aniversarios)

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/voaneves/calendario-de-aniversarios/graphs/commit-activity) [![made-with-HTML](https://img.shields.io/badge/Made%20with-HTML-Blue)](https://voaneves.com/calendario-de-aniversarios) [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/) [![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com/voaneves/ama)

Este repositório contém um projeto de calendário com funcionalidades de criação, leitura, atualização e exclusão (CRUD). O projeto foi desenvolvido para treinar conhecimentos obtidos no curso de Sistemas de Informação da XP Educação, no Bootcamp Programador de Software, módulo de Desenvolvimento Web.

Diga "Oi" 👇
<sub> <br> <br>
[<img src = "https://img.shields.io/badge/github-black.svg?&style=for-the-badge&logo=github&logoColor=white">](https://github.com/voaneves)
[<img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white">](https://www.linkedin.com/in/voaneves)
[<img src="https://img.shields.io/badge/Portfolio-%23000000.svg?style=for-the-badge&logo=firefox&logoColor=#FF7139">](https://voaneves.com)
</sub>

## Tecnologias utilizadas

O projeto utiliza as seguintes tecnologias:

- HTML
- CSS
- JavaScript

A página está otimizada para todas as plataformas (cross-browser), como score do lighthouse abaixo.

[<img src = "img/lighthouse_score.png">](https://pagespeed.web.dev/analysis/https-voaneves-com-calendario-de-aniversarios/dy2zzoyur6?form_factor=mobile)

## Funcionalidades

O projeto possui as seguintes funcionalidades:

- Adicionar aniversários ao calendário através de um formulário.
- Exibir os aniversários na tabela abaixo do formulário.
- Editar informações de aniversários existentes.
- Remover aniversários da tabela.
- Alternar entre o tema claro e o tema escuro, com cores baseadas no Google Bard.
- O tabela calendário é gerida em JSON e possui persistência no localStorage.
- Ícones do icomoon.

## Estrutura do projeto

O projeto possui a seguinte estrutura de arquivos:

- index.html: arquivo HTML principal que contém a estrutura do calendário e os elementos interativos.
- style/style.css: arquivo CSS que define o estilo visual do calendário.
- script/script.js: arquivo JavaScript que contém a lógica de interação do calendário.
- fonts/theme.woff2: arquivo de fonte icomoon.
- README.md: arquivo de documentação do projeto (você está lendo este arquivo).

## Como usar

1. Faça o clone deste repositório em sua máquina:

   ```bash
   git clone https://github.com/seu-usuario/calendar-crud.git

   ```

2. Abra o arquivo index.html em um navegador web.

3. Utilize o formulário para adicionar aniversários ao calendário. Preencha o nome da pessoa e a data de nascimento e clique no botão "Adicionar".

4. Os aniversários adicionados serão exibidos na tabela abaixo do formulário. Cada aniversário terá opções para editar e remover.

5. O tema do calendário pode ser alterado clicando no botão de alternância de tema localizado no canto superior esquerdo.

## To do

- [x] Adicionar sorting para o array JSON dos aniversarios;
- [x] Com o toggle de sorting ligado, fazer com que a edição seja igual entre o array aniversarios e aniversariosSorted;
- [ ] Adicionar notificações para lembrete dos aniversários;
- [x] Transformar em webapp;
- [x] Melhorar estrutura da página, adicionar tags <meta> e otimizar entrega do javascript.

## Reportando Bugs

Encontrou algum bug ou problema no projeto? Siga as etapas abaixo:

1. Verifique se o bug ainda não foi relatado em nossa seção de "Issues" (problemas) no GitHub: [link para os Issues](https://github.com/voaneves/calendar-crud/issues).

2. Caso não tenha encontrado um relatório sobre o bug, clique em "New Issue" (novo problema) para abrir um novo relatório de bug.

3. Forneça um título claro e descritivo para o bug, juntamente com uma descrição detalhada dos passos necessários para reproduzi-lo.

4. Se possível, inclua capturas de tela, trechos de código relevantes ou outras informações que possam ajudar na identificação e resolução do bug.

5. Clique em "Submit Issue" (enviar problema) para criar o relatório de bug.

Obrigado por relatar bugs! Caso queira colaborar com código, você pode abrir um PR e sua participação é mais do que bem-vinda.

## Licença

Este projeto está licenciado sob a [MIT License](/LICENSE).
