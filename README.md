# Projeto didático TC2 - 2022.1 - ADS IFSP/São Carlos

Este projeto é voltado para armazenar o código-fonte sendo desenvolvido aula-a-aula da disciplina de TC2 de ADS do IFSP/São Carlos, semestre 2022.1.

Este é um projeto didático e não deve ser usado como base para um sistema em produção enquanto não estiver plenamento completo. Alguns trechos de códigos podem estar incompletos e/ou desenvolvidos de forma inadequada.

Para utilizar este projeto, você precisa:
* Baixar o repositório.
* Entrar na basta base do projeto e instalar as dependências `npm install`
* Executar o projeto `ng serve`

## Problemas de execução

Embora o projeto tenha sido desenvolvido para ser funcional na maioria dos sistemas, a verdade é que o número de dependências e de tecnologias envolvidas é tanto que é comum haver problemas de incompatibilidade em algumas combinações de versões ou similares.

Assim, seguem algumas tecnicas que podem ajudar a resolver conflitos na execução deste projeto.

### Tentou resetar?

Este é o método mais simples e que pode dar bons resultados. 
1. Delete a pasta `node_modules`, se existir.
2. Delete o arquivo `package-lock.json` da pasta raiz, se exitir.
3. Reinstale as dependências com `npm install`.
4. Tente executar o projeto normalmente com `ng serve`.

### Atualizar o projeto

Você pode modificar o arquivo `package.json` e modificar as versões dos pacotes do projeto de acordo com suas necessidades. Depois de feito esse processo, não esqueça de refazer o processo citado no item acima.

Se tiver dúvidas, você pode também utilizar um atualizador automático como o [npm-check-updates](https://github.com/raineorshine/npm-check-updates). Na página inicial do repositório há as instruções específicas de como instalar e executar o projeto.

### Downgrade de versão do node

Se ainda não funcionar, você pode tentar fazer o downgrade do seu ambiente para o ambiente onde este projeto foi desenvolvido. Este é um procedimento mais avançado e pouco recomendado, mas fica o registro caso seja necessário. As versões específicas usadas na criação deste projeto são:
* npm: 8.4.1
* node: 12.21.0

