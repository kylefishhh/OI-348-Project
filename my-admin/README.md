Cape Collage Student Administration System

Deviations of design throgh the development process:
CHANGES to Attributes:

-   Added Datefeilds updated and created
-   Added role to users
-   Added departmentID field to lecturers
-   Added column moduleStudents to students table which operates as a foreign key displaying the relevant module ID's related to the primary key in the ID column of students 
-   Added relational columns to avoid cross-collection API rules requests and errors:
    -   GradeID column in grades 
    -   userModule column in Module
    -   courseID column in lecturers
-   Added courseID to lecturers table
-   Added amount to Bursaryapplication table
-   Added a courseID to modules (FK) to help with identify 
-   Removed courseID from grades (since it already contains a link to module)
-   banking collection created as a class, as a means of managing student account without interfering with the api rules for the student view tabs

CHANGES to UX:

-   Used Material Design kit templates to build all pages
-   Create account page was re-arranged to better follow the create page formats
-   Removed the search tabs from all list pages as this functionality is not available  
-   Tabs on the side are unable to be shown, meaning that all tabs are viewable to all actors. Tabs that should be inacessable to actors without permission will see no records.
-   Log in page design changed to follow the whole project 
-   Tab names where changed to better follow the Class diagram
-   Added create and export links to list pages
-   Added Edit button to View pages
-   removed the gray areas for visual clarity
-   Added dark/ night mode functionality using Material Design kit themes
-   Removed password requirements, any password is acceptabe 



