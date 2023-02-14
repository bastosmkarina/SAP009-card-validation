# Cartão de Crédito Válido

## Índice

* [1. Sobre o projeto](#1-Sobre-o-projeto)
* [2. Método para a validação](#2-Método-para-a-validação)

***

## 1. Sobre o projeto

Foi desenvolvida uma página para a Web, com o UI(User Interface) que possibilita ao usuário inserir dados de um cartão para que ele receba a resposta se o número do cartão é válido ou não.

Aplicações realizadas:

-Inserir o número para validação. Usar apenas caracteres numéricos (dígitos) no cartão para validar [0-9].
-Constatar se o resultado é válido ou não.
-Ocultar todos os dígitos do número do cartão, excetuando os últimos 4 caracteres.
-Não deve poder inserir um campo vazio.

## 2. Método para a validação 

A validação é feita utilizando o algoritmo de Luhn, conforme explicação abaixo:

O [algoritmo de Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm), também
chamado de módulo 10, é um método de soma de verificação, usado para validar
números de identificação, como o IMEI de telefones celulares, cartões de crédito
etc.

Esse algoritmo é simples. Obtemos o inverso do número a ser verificado (que
contém apenas dígitos [0-9]); todos os números que ocupam uma posição par devem
ser multiplicados por dois; se esse número for maior ou igual a 10, devemos
adicionar os dígitos do resultado; o número a verificar será válido se a soma de
seus dígitos finais for um múltiplo de 10.

![gráfico do algoritmo de
Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)


