Feature: Category list
    As a user, I want to be able to view a list of existing categories.
    I need to be able to view, edit, delete and save categories.

    Background:
        Given The database is clean
        And There are the following categories:
            | Name:         |
            | Movie (3D)    |
            | Movie (HD)    |
            | Animated      |
            | iOS           |

    Scenario: View the list of categories
        Given I am on the categories list page
        Then I should see a list of 4 categories
