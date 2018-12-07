# B2W Processo Seletivo - Lista de produtos

Projeto realizado para o processo seletivo na empresa. Uma simples lista de produtos da loja americanas, com uma aba exclusiva para promoções e um sistema bem simples de carrinho.

## Executando o projeto

Primeiramente clone o repositório do git em um repositório local.

```
git clone https://github.com/flpegomes/b2wTeste.git
```

Depois será necessário instalar as packages usadas no projeto

```
yarn install 
```

E com o computador rodando algum emulador android ou conectado a algum dispositivo com depuração usb ativada, executar o comando:

```
react-native run-android
```

## Imagens de telas do projeto

Tela de início, listando todos os produtos:

![Inicio - listando todos os produtos](https://i.imgur.com/2BRPgCA.png)

Tela de promoções, só lista os produtos que estão em promoção:

![Promoções - listando somente as promoções](https://i.imgur.com/nXyugir.png)

Tela de carrinho, quando vazio traz somente uma mensagem avisando que o carrinho esta vazio:

![Carrinho - tela mostrando mensagem quando o carrinho esta vazio](https://i.imgur.com/a2Jyrx6.png)

Tela de carrinho com produtos e botão para retirar item do carrinho:

![Carrinho - tela de carrinho com produtos e botão de retirar produto do carrinho](https://i.imgur.com/HCOe69S.png)

## Observações 

Para a realização do projeto, foi criada uma Promise que retorna os produtos, simulando uma API. Não tive informações e acesso suficientes para usar a própria api da lojas americanas. Porém todos os produtos cadastrados tem seus dados parecidos com os dados dos produtos dentro do site da loja.

O App foi testado somente em android, por falta de dispositivos para teste em iOS
