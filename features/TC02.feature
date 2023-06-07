Feature: Fluxo de exceção 1



    Scenario: O usuário não preenche nenhum campo
        Given Usuario no campo cadastro
        When Nao preenche nenhum campo
        Then O sistema exibe uma mensagem de erro