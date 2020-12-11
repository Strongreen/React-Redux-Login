# React-Redux-Login
Criação de um sistema de Login utilizando o React e Redux

### 1 - Rotas: O componente `App` renderiza `BrowserRouter`
​
Utilizamos um `BrowserRouter` pra criar as rotas da aplicação.
​
#### Rotas:
- a rota `/` renderiza Home
- a rota `/signin` renderiza Login
- a rota `/clientes-cadastratos` renderiza Clientes Cadastrados
- a rota `/cadastrar-cliente` renderiza Cadastrar Cliente
- qualquer rota não declarada renderiza NotFound
​
### 2 - Criando o componente chamado `Header`
​
Esse componente renderiza um menu em todas as páginas. Esse menu contém os links:
​
  - `Home`,
  - `Clientes Cadastrados`,
  - `Cadastrar Cliente`,
  - `Login`: um botão com alinhamento a direita
​
### 3 - Criando o componente chamado `Footer`
​
Esse componente é renderizado em todas as páginas. Esse rodapé contém o texto:
​
  - Desenvolvido por: Hérika Ströngreen && Tiago Esdras
​
### 4 - Criando o componente chamado `Logo`
​
Esse componente renderizará: a logo e um texto:
​
  - `Logo`, link da imagem:...
  - `Frase`, 'Um sistema de cadastros de clientes'
​
### 5 - Criando a página `Home`
​
A página `Home` deve conter os seguintes componentes:
​
  - `Header`,
  - `Logo`,
  - `Footer`,
​
### 6 - Criando o componente `SingInForm`
​
Esse componente renderiza um formulário de login contendo as seguintes informações. 
​
  - `Logo`,
  - `Email`,
  - `Senha`,
  - `Botão`,
​
​
### 7 - Criando a página `SignIn`
​
A página `SignIn` deve conter os seguintes componentes:
​
  - `Header`,
  - `SingInForm`,
  - `Footer`,
​
Após o login ser efetuado, o usuário é redirecionado para a página de Clientes cadastrados.
Caso o email ou senha estejam incorretos, um alert será exibido com a mensagem: "Email ou senha incorretos".
Caso o login não seja feito, e o usuário tenha mudado à mão o link do sistema e ido para a página de cadastro ou de clientes, a única mensagem exibida é: "Login não efetuado".
​
### 8 - Criando o componente `SubMenu`
​
Esse componente renderiza um submenu.
​
  - `Nome`, que tem um botao que se clicado ordena a lista de clientes em ordem alfabetica
  - `Idade`,
  - `Email`,
​
### 9 - Criando o componente `ClientTable`
​
Esse componente renderiza uma tabela com todos clientes já cadastrados.
Essa tabela contém as seguintes informações. 
​
  - `Nome`,
  - `Idade`,
  - `Email`,
​
Ao lado de cada linha da tabela tem um botao `X` que ao ser clicado exclui o cliente selecionado.
​
### 10 - Criando a página `Clientes Cadastrados`
​
A página `Clientes Cadastrados` deve conter os seguintes componentes:
​
  - `Header`,
  - `SubMenu`,
  - `ClientTable`,
  - `Botão`, com o texto "Cadastrar Cliente" que vai para a página de cadastro
  - `Footer`,
​
Caso a lista de clientes cadastrados esteja, vazia a mensagem "Nenhum cliente cadastrado" é renderizada na tela.
​
### 11 - Criando o componente `RegisterClientForm`
​
Esse componente renderiza um formulário de cadastro de cliente contendo as seguintes informações. 
​
  - `Nome`,
  - `Idade`,
  - `Email`,
​
### 10 - Criando a página `Cadastrar Cliente`
​
A página `Cadastrar Cliente` deve conter os seguintes componentes:
​
  - `Header`,
  - `RegisterClientForm`,
  - `Botão`, com o texto "Cadastrar" que leva o usuário para a página de Clientes cadastrados.
  - `Footer`,
​
​
## Estados que não necessitem navegar para outros componentes, podem ser guardados internamente. Todos os outros devem ser trafegados via Redux.
