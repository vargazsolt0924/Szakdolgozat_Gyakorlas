Feature: Search on the videos page

  Background: 
    Given: the 'Main' site is opened

  Scenario Outline: Search for <cardName> videos
    Given the 'Videos' buttton is clicked 
    Then I serach for '<cardName>'

    Examples:
        | cardName | 
        | English | 