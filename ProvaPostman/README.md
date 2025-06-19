# Prova Postman-S206
Este projeto contém a solução da prova de testes de API utilizando a ferramenta **Postman**, conforme instruções.

# Sobre o projeto

Verifica cenários:

- Lista todos os agentes da Valorant API.
- Testa um endpoint inexiste na Valorant API.
- Simula um Post na JSONPlaceholoder API.

# Relatório de Testes

Para gerar o relatório dos testes automatizados, utilizei o Newman integrado com o reporter htmlextra.

# Instalação do Reporter

Para instalação do reporter, execute o seguinte comando no terminal:

```bash
npm install -g newman-reporter-htmlextra
```

## Execução dos Testes para Gerar o Relatório

Os testes foram executados utilizando o comando abaixo:

```bash
newman run Valorant.postman_collection.json -r htmlextra
```
