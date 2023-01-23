# 🚀 Desafio Front-end

O objetivo deste desafio é avaliar suas habilidades em programação. Quando concluir o desafio, basta responder o e-mail onde recebeu o link do repositório. Em seguida, enviaremos o feedback e as instruções dos próximos passos!

Caso tenha alguma dúvida, nós estamos disponíveis para tirá-las. Bom desafio!

## ⚠️ ATENÇÃO

O Desafio foi cuidadosamente contruído para propósito de avaliação apenas.

Ao criar seu repositório com a resolução do desafio, adicionar o usuário marcelogoncalves2212 para ter acesso ao seu repositório, ou pode deixar o seu repositório como público.

Obs: Ao deixar seu repositório como público, não nos responsabilizamos por plágio do seu código.

## ✔️ Critérios de Avaliação

Além dos requisitos levantados acima, iremos olhar para os seguintes critérios durante a correção do desafio:

* Eficiência e simplicidade;

## 📋 Pré-requisitos

O projeto deverá seguir os seguintes itens:

* Angular(versão superior a 8),
* Arquitetura MVC
* Boostrap
* Código limpo, com funções e fluxos comentados
* Tratamento de erros
* Métodos de User Experience
* Layout responsivo(Opcional)


## 🧠 Contexto
Eu enquanto Flexpag, desejo que seja criado uma um simulador de precificação para venda de veículo.
O simulador consinste em que eu possa selecionar o tipo do veículo, Marca do veículo, Modelo do veículo, e ano, e que possa inserir o valor da venda do veículo que desejo vender o mesmo, e o simulador me informar todos os dados do veículo que quero vender, e se o valor em que adicionei está abaixo, acima, ou na média de preço do mercado de veículos. Também exiba o percentual do valor que adicionei para venda em relação a tabela do mercado.

### ⌨ Passo a passo para calcular a variação de aumento do percentual.

VVD = Valor do veículo digitado pelo usuário

VVF - Valor do veículo de acordo com a tabela FIPE

Resultado do percentual = {(VVD – VVF) / VVF} * 100

Caso o resultado: 
 ```
    Resultado do percentual >= 10%
        Então: Valor do veículo abaixo da tabela FIPE
```
ou
```
    Resultado do percentual <= -10%
        Então: Valor do veículo abaixo da tabela FIPE
```
ou
```
    Resultado do percentual -9.99% ~ 9.99%
        Então: Valor do veículo na média da tabela FIPE
```


### Wireframe 1 - Formulário para preenchimento dos dados

<img src="https://termo-usos.s3.amazonaws.com/formulario+01.png" alt="drawing" width="800"/>


### Wireframe 2 - Resultado da tela quando o valor do veículo está acima do mercado

<img src="https://termo-usos.s3.amazonaws.com/formulario+02.png" alt="drawing" width="800"/>


### Wireframe 3 - Resultado da tela quando o valor do veículo está abaixo do mercado

<img src="https://termo-usos.s3.amazonaws.com/formulario+03.png" alt="drawing" width="800"/>

### Wireframe 4 - Resultado da tela quando o valor do veículo está na média do mercado

<img src="https://termo-usos.s3.amazonaws.com/formulario+04.png" alt="drawing" width="800"/>



## 🛠️ Utilização da API para popular os campos

A Tabela Fipe expressa preços médios de veículos no mercado nacional, servindo apenas como um parâmetro para negociações ou avaliações. Os preços efetivamente praticados variam em função da região, conservação, cor, acessórios ou qualquer outro fator que possa influenciar as condições de oferta e procura por um veículo específico.

### Tipo de veículo

Preencha o Dropdown com os seguintes valores:
    
    * CARROS
    * MOTOS
    * CAMINHOES

### Marcas

Primeiro liste as marcas do tipo de veículo que você deseja, através da ação marcas e sem nenhum parâmetro:

Request
```
GET: https://parallelum.com.br/fipe/api/v1/{tipo do veículo}/marcas
```

Response:
```
[   
    {
        "nome": "Acura",
        "codigo": "1"
    },
    {
        "nome": "Agrale",
        "codigo": "2"
    },
    {
        "nome": "Alfa Romeo",
        "codigo": "3"
    }
]
```

### Modelos

Na sequencia você poderá obter a listagem de veículos de uma determinada marca, com o código da marca selecionada.

Request
```
GET: https://parallelum.com.br/fipe/api/v1/{tipo do veículo}/marcas/{codigo da marca}/modelos
```

Response:

```
{
    "modelos": [
        {
            "nome": "AMAROK CD2.0 16V\/S CD2.0 16V TDI 4x2 Die",
            "codigo": 5585
        },
        {
            "nome": "AMAROK CD2.0 16V\/S CD2.0 16V TDI 4x4 Die",
            "codigo": 5586
        },
        {
            "nome": "AMAROK Comfor. 3.0 V6 TDI 4x4 Dies. Aut.",
            "codigo": 9895
        }
    ]
}
```

### Anos

Após escolher o veículo desejado, e o modelo, é possível consultar os anos do veículo disponíveis para a consulta de preços.

Request
```
GET: https://parallelum.com.br/fipe/api/v1/{tipo do veículo}/marcas/{código da marca}/modelos/{codigo do modelo}/anos
```

Response:

```
[
    {
        "nome": "2022 Diesel",
        "codigo": "2022-3"
    },
    {
        "nome": "2021 Diesel",
        "codigo": "2021-3"
    },
    {
        "nome": "2020 Diesel",
        "codigo": "2020-3"
    },
]
``` 

### Valor

Por fim adicionando mais um parâmetro será possível visualizar o preço corrente da Tabela FIPE para este veículo/modelo/ano.

Request
```
GET: https://parallelum.com.br/fipe/api/v1/{tipo do veículo}/marcas/{código da marca}/modelos/{codigo do modelo}/anos/{codigo do ano}
```

Response:

```
{
    "Valor": "R$ 125.318,00",
    "Marca": "VW - VolksWagen",
    "Modelo": "AMAROK High.CD 2.0 16V TDI 4x4 Dies. Aut",
    "AnoModelo": 2014,
    "Combustivel": "Diesel",
    "CodigoFipe": "005340-6",
    "MesReferencia": "janeiro de 2023 ",
    "TipoVeiculo": 1,
    "SiglaCombustivel": "D"
}
``` 

Com isto descubrimos os detalhes do veículo selecionado por mim.

Obs: Para mais informações sobre a API, entrar no link [API FIPE](http://deividfortuna.github.io/fipe/) http://deividfortuna.github.io/fipe/
 

## 🛠️ To-do list

 * Fazer o fork do projeto
 * Implementar solução
 * Enviar link do projeto
 
ℹ️ Sinta-se livre para incluir quaisquer observações que achar necessário
