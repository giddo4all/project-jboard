var request = require("request");
var cheerio = require("cheerio");
var mongodb = require('mongodb');
var mongoUtil = require("./mongo-write.js");


var url = "https://jobs.chevron.com/search/?q=&locationsearch=Nigeria";
var urlPrefix = "https://jobs.chevron.com";
const mongoURL = mongoUtil.mongoURL;
const tableName = mongoUtil.tableName;
const chevronLogo = "/images/chevron-logo.png";


request(url, function (err, response, html) {
	if (!err) {
		var $ = cheerio.load(html);
		// var allJobs = ($("#searchResultsShell").children().find('a[href*="/job/"]'))
		var allJobs = ($('a[href^="/job/"]').parent().parent());
		// console.log(allJobs.toString());
		var jobIndex = allJobs.length - 1;
		console.log(jobIndex);
		createData(allJobs, function result(jobs) {
			if (jobs.length > 0) {
				mongoUtil.dbstore(tableName, jobs, mongoURL);
				// console.log(JSON.stringify(jobs));
			} else {
				console.log("No Job matching the provided DOM criteria");
			}
		});
	}
});

function createData(htmlData, cb) {
	let wheat = [];
	htmlData.each(function (jobIndex) {
		console.log("Index is: " + jobIndex);
		var $ = cheerio.load(htmlData);
		let eachJob = htmlData.eq(jobIndex)
		let jobTitle = $(this).find('a[href^="/job/"]').text();
		let jobUrl = urlPrefix + $(this).find('a[href^="/job/"]').attr('href');
		let locationName = $(this).find('span[class="jobLocation"]').text().trim();
		let jobData = { title: jobTitle, company: "Chevron", location: locationName, joburl: jobUrl, image: chevronLogo, tags: [] };
		if (locationName.endsWith(" NG")) {
			wheat.push(jobData);
		}
	});
	cb(wheat);
}
