/* Write your T-SQL query statement below */
select Person.firstName, Person.lastName, Address.city, Address.state
From Address 
right join Person
on Person.personId = Address.personId