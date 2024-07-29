/*
O que é um Hash?
Um hash é o resultado de uma função matemática que transforma uma entrada 
(ou "input") em uma saída (ou "output") de tamanho fixo. 
Não importa o tamanho ou tipo da entrada, a saída terá sempre o mesmo tamanho.

Como funciona um Hash?
Entrada: Você começa com algum tipo de dado. Pode ser um texto, 
um arquivo, ou qualquer tipo de informação digital.

Processamento: Esse dado é processado por uma função de hash. Existem várias 
funções de hash diferentes, mas todas têm o mesmo objetivo: transformar a 
entrada em uma saída de tamanho fixo.

Saída (Hash): O resultado do processamento é uma sequência única de caracteres 
de tamanho fixo, que parece uma mistura aleatória de letras e números.

Exemplos Práticos
Exemplo 1: Texto Simples
Entrada: "Olá, mundo!"
Função de Hash: SHA-256
Saída: "c0535e4be2b79ffd93291305436bf889314e4a3d6c57f2ff9d92e3f92aecd4d1"
Exemplo 2: Texto Diferente
Entrada: "Olá, Mundo!"
Função de Hash: SHA-256
Saída: "1c9209a69e0650911a1716c6ad19e3d7c2b68d2d19d0e6f964c54d4b088f39e4"
Note que uma pequena mudança na entrada (a mudança de "m" para "M") resultou em 
uma saída completamente diferente.

Características Importantes dos Hashes
Determinístico: A mesma entrada sempre resultará no mesmo hash.
Rápido: É rápido calcular o hash de qualquer dado.
Único: Pequenas mudanças na entrada resultam em um hash completamente diferente.
Irreversível: É praticamente impossível reverter o hash para descobrir a 
entrada original.
Aplicações dos Hashes
Integridade dos Dados: Verificar se os dados não foram alterados. Se o hash dos 
dados recebidos é igual ao hash dos dados enviados, os dados estão intactos.
Segurança: Armazenar senhas. Em vez de armazenar senhas diretamente, os sistemas 
armazenam o hash das senhas.
Blockchain: Em Blockchain, os hashes são usados para garantir a integridade e a 
imutabilidade dos blocos de transações.
Exemplo Didático
Imagine que você tem um triturador de papel mágico que sempre transforma qualquer 
folha A4 em um pedacinho de papel de exatamente 1cm x 1cm com um padrão único. 
Não importa o que você escreva na folha A4, o pedaço de papel resultante será 
sempre de 1cm x 1cm. Se você colocar a mesma folha A4 no triturador mágico, 
você sempre obterá o mesmo pedacinho de papel. No entanto, se alguém lhe desse 
apenas o pedacinho de papel, seria impossível para você reconstruir 
a folha A4 original.

Esse triturador mágico é uma boa analogia para entender como os hashes funcionam.

*/
