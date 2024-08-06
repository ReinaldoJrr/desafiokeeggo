Feature:  Funcionalidade: Validar produtos no carrinho
	        Como cliente de uma loja virtual
	        Eu desejo buscar Produtos
	        Para coloca-los em um carrinho e validar se os mesmos se encontram


  Scenario: Validar carrinho de site de compras
   Given que acesso site de compras
    When usuário incluir produtos no carrinho
   Then usuário deve validar se o sistema adicionou corretamente os itens
    

  