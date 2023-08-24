How do I do database migrations with sequelize? 

Apparenlty in insomnia, the foreign key id needs to be capitalized

It sounds like you can also define the associations in the index.js

Major Issue 1: 
Difficulty implementing many to many relationship. Tables can't seem to find each other, find foreign keys for the other table

TypeError: Cannot read properties of undefined (reading 'ChildId')

I know WHAT The syntax is for the many to many relationship. I just don't know WHERE in the project directory should I write the many to many logic

Solution: We need to define many to many logic inside the models index.js folder

Do the same with other associate logic


Major Issue 2:

Need to essentially create parents and children at the same time. 

Need a POST route that calls another POST route.

In the fronteend, there would be a form that allows you to enter parents and children at same time. 

But there's never going to be parents without children and never goint to be children without parents.

Solution: Use magic methods that sequelize automatically adds to the model