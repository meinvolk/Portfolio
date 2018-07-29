---
path: '/ram-die'
title: 'Ram Die'
category: 'software'
featuredImage: './Ramdie_Featured.jpg'
sidebarImage: './Ramdie_Main.png'
featuredText: 'The design of the project was created to be a simple interface and easy access to CRUD operations within the management panel.'
link: ''
---
#Ram Die
##Job Tracker
Ram Die is committed to building and servicing tools for several industries that cover a vast range of steel required products such as the: Automotive, Furniture, Appliance, Recreational Vehicle, and Medical fields. Managing all of these products can be an intense process. Ram Die was implementing a scheduling program using Microsoft Excel. Their process was messy, hard to manage, and inefficient. That is when Ram Die came to me to redesign there software as a internal web interface for scheduling and managing processes within the company.

##Design
The design of the project was created to be a simple interface and easy access to CRUD operations within the management panel. The program would be broken down into two main categories. Administration where CRUD operations could be performed on jobs, employees, documents, and customers. The second category would be the Job Tracker. This would be a table that showed all the various fields for a job. It would take date times and display productivity levels based on color coding. The aesthetics of the app would take form in using Bootstrap 4.

##Development
The development of the project took the for of Rapid Application Development (RAD). With that said it was agreed that the web app would be written using ASP.NET Web Forms. Web Forms would allow us to plop all the forms and tables in the application quickly without having to route controllers and models. Another reason is that the site only comprised of 6 pages. The database was a SQLServer express installation. By using Entity Framework Code-First the creation of the database with instantaneous. EF allowed me to focus on the functionality of the job tracker and take a load of writing CRUD operations.

The Job Tracker page is where most of the magic was. Given certain dates the program would look at the dates and compare them against each other. Depending how the dates aligned the color of the boxes would change to indicate if the job was behind, on time, or ahead of schedule.