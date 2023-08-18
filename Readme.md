How do I do database migrations with sequelize? 

Apparenlty in insomnia, the foreign key id needs to be capitalized

It sounds like you can also define the associations in the index.js

Major Issue 1: 
Difficulty implementing many to many relationship. Tables can't seem to find each other, find foreign keys for the other table

TypeError: Cannot read properties of undefined (reading 'ChildId')

I know WHAT The syntax is for the many to many relationship. I just don't know WHERE in the project directory should I write the many to many logic

We need to define many to many logic inside the models index.js folder