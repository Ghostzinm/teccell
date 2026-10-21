# Manter o catálogo de modelos e preços

O site é estático. Os modelos e faixas ficam em `catalog.js`, que é o arquivo de configuração do catálogo para o prestador. Não há painel administrativo nem banco de dados nesta versão; depois de alterar o arquivo, publique novamente o site para os clientes receberem a tabela atualizada.

## Antes de publicar

1. Troque os valores demonstrativos pelos intervalos aprovados pela assistência.
2. Cadastre apenas modelos e serviços que a equipe consegue atender.
3. Depois de revisar a tabela inteira, altere `demoMode: true` para `demoMode: false`.
4. Verifique a consulta no site e o link do WhatsApp.

A indicação de demonstração aparece para o cliente enquanto `demoMode` estiver ativo.

## Adicionar ou editar um modelo

Cada objeto em `models` informa o identificador da marca, o nome exibido e as faixas por serviço. Preços são valores em reais, sem centavos:

```js
{
  id: "modelo-unico",
  brand: "samsung",
  name: "Galaxy A55",
  prices: {
    screen: { min: 600, max: 850 },
    battery: { min: 280, max: 430 },
  },
}
```

Os ids de serviços válidos estão na lista `services`: `screen`, `battery`, `back-cover`, `charging-port`, `camera`, `cleaning`, `oxidation`, `microsoldering` e `diagnostics`. Use como marca um id presente em `brands`.

O cliente seleciona serviço, marca e modelo. Os modelos são agrupados por faixas de valor, e o intervalo aparece na tela e segue preenchido na mensagem do WhatsApp. Serviços sem preço cadastrado levam o cliente ao atendimento pelo WhatsApp.
