# Project-Jobber

This is me hacking Javascript. It is just a simple project I intend to use to learn Javascript.

The simple app does web scraping (for Jobs) by making the least number of HTTP request (Usually a single request) 
to the target website). During deployment, a CRON job that goes out to fetch jobs from these target sitse is setup to run daily. The data gathered from these website are "treated" and stored in mongo DB.
Some endpoints are used by the client to retrieve and display this data.

The frameworks/technologies stack used are:

* Database - Mongo DB
* Back End - Node JS with Express JS
* Front End - React (version 2), Jade & Bootstrap (version 1).

NOTE: For practice only.
