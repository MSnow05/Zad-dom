Feature: Wyszukiwanie i zakup produktu w ulubionym sklepie eBay.com
    Given   Użytkownik jest zalogowany do swojego konta w  sklepie internetowym.
    And     Użytkownik ma dostęp do wyszukiwarki produktów.
    And     Użytkownik posiada wystarczającą ilość środków na koncie.

Scenario: Wyszukiwanie produktu
    Given   Użytkownik jest na stronie głównej eBay.
    When    Użytkownik wpisuje nazwę produktu w wyszukiwarkę.
    Then    System wyświetla listę produktów pasujących do wpisanej nazwy.

Scenario: Wybieranie produktu
    Given Użytkownik widzi listę wyników wyszukiwania produktów.
    When Użytkownik wybiera produkt z listy.
    Then System wyświetla stronę szczegółów wybranego produktu.

Scenario: Dodawanie produktu do koszyka
    Given Użytkownik znajduje się na stronie szczegółów wybranego produktu.
    When Użytkownik naciska przycisk "Dodaj do koszyka".
    Then System dodaje wybrany produkt do koszyka.

Scenario: Sprawdzanie zawartości koszyka.
    Given Użytkownik znajduje się na stronie koszyka.
    When Użytkownik sprawdza zawartość koszyka.
    Then System wyświetla listę produktów znajdujących się w koszyku.

Scenario: Walidacja zawartości koszyka.
    Given Użytkownik znajduje się na stronie koszyka.
    And Użytkownik sprawdza zawartość koszyka.
    Then System wyświetla sumaryczną wartość zamówienia.

Scenario: Przejście do procesu zakupu.
    Given Użytkownik znajduje się na stronie koszyka.
    When Użytkownik naciska przycisk "Przejdź do kasy".
    Then System przenosi użytkownika do procesu zakupu.

Scenario: Wybieranie metody płatności.
    Given Użytkownik znajduje się w procesie zakupu.
    When Użytkownik wybiera metodę płatności.
    Then System wyświetla dostępne metody płatności.

Scenario: Wybieranie metody dostawy.
    Given Użytkownik znajduje się w procesie zakupu.
    When Użytkownik wybiera metodę płatności.
    And System wyświetla dostępne metody dostawy.

Scenario: Finalizacja zakupu.
    Given Użytkownik znajduje się w procesie zakupu.
    When Użytkownik wybiera metodę dostawy.
    Then System wyświetla podsumowanie zamówienia i prosi użytkownika o potwierdzenie.

Scenario: Potwierdzenie zakupu.
    Given Użytkownik znajduje się w procesie zakupu.
    When Użytkownik potwierdza zamówienie.
    Then System przetwarza płatność i potwierdza zakup.