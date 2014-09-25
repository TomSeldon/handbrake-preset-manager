Feature: Category list
    As a user, I want to be able to view a list of existing categories.
    I need to be able to view, edit, delete and save categories.

    Scenario: View the list of categories
        Given I am on the categories list page
        Then I should see a list of 10 categories
