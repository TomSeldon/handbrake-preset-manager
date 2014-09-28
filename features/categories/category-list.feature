Feature: Category list
    As a user, I want to be able to view a list of existing categories.
    I need to be able to view, edit, delete and save categories. I should
    also be able to cancel any changes I've made since the last save operation.

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

    Scenario: Renaming a category
        Given I am on the categories list page
        And I rename the category 'iOS' to 'iOS (iPhone 5)'
        Then there shouldn't be a category named 'iOS'
        And there should be a category named 'iOS (iPhone 5)'

    Scenario: Saving changes to a category
        Given I am on the categories list page
        And I rename the category 'Animated' to 'Animated (3D)'
        And I save the changes
        Then I refresh the page
        Then there shouldn't be a category named 'Animated'
        But there should be a category named 'Animated (3D)'

    Scenario: Deleting a category
        Given I am on the categories list page
        And I delete the category 'Movie (3D)'
        Then I refresh the page
        Then there shouldn't be a category named 'Movie (3D)'
        And there should be 3 remaining categories

    Scenario: Adding a category
        Given I am on the categories list page
        And I add a new category called 'Porn (3D)'
        Then I save the changes
        Then I refresh the page
        Then there should be a category named 'Porn (3D)'

    Scenario: Cancelling changes
        Given I am on the categories list page
        And I delete the category 'Animated'
        Then I cancel my changes
        Then there should be a category named 'Animated'
