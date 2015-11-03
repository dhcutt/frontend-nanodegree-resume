/*
This is empty on purpose! Your code to build the resume will go here.
 */

//append info to the html file
var formattedName = HTMLheaderName.replace("%data%","Darren Honeycutt");
var formattedRole = HTMLheaderRole.replace("%data%","Developer");
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
 

 /* create bio object and append to the html
 */ 
var bio = {
	"name" : "Darren Honeycutt",
	"role" : "Developer",
	"pictureURL" : "http://placehold.it/350x350",
	"welcomeMessage" : "welcome to my javascript resume",
	"skills" : ["web development", "root cause analysis", "corrective action"],
	"contacts": {
		"mobile": "469 278 1143",
		"email": "darren.j.honeycutt@gmail.com",
		"github": "dhcutt",
		"location": "Richardson TX"
	}
};

$("#topContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
$("#topContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
//$("#topContacts").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
$("#topContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
$("#topContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));
$("#header").append(HTMLbioPic.replace("%data%",bio.pictureURL));
$("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));

var work = {
	"jobs": [
		{
			"employer": "World Wide Technology",
			"title": "Quality Control Analyst",
			"location": "Lewisville, TX",
			"dates": "2015",
			"description": "End Customer Analyst",
			"url": "https://www2.wwt.com/"
		},
		{
			"employer": "Ceva Logistics",
			"title": "Quality Control Analyst",
			"location": "Lewisville, TX",
			"dates": "2013 - 2015",
			"description": "End Customer Analyst",
			"url": "http://www.cevalogistics.com/"
		}
	]
};

function displayWork() {
for (job in work["jobs"]) {
	$("#workExperience").append(HTMLworkStart);
	
	jobName = HTMLworkEmployer.replace("%data%",work["jobs"][job]["employer"]);
	work["jobs"][job]["employer"] = jobName.replace("#",work["jobs"][job]["url"]);
	work["jobs"][job]["title"] = HTMLworkTitle.replace("%data%",work["jobs"][job]["title"]);
	work["jobs"][job]["dates"] = HTMLworkDates.replace("%data%",work["jobs"][job]["dates"]);
	work["jobs"][job]["location"] = HTMLworkLocation.replace("%data%",work["jobs"][job]["location"]);
	work["jobs"][job]["description"] = HTMLworkDescription.replace("%data%",work["jobs"][job]["description"]);
	$(".work-entry:last").append(work["jobs"][job]["employer"] + work["jobs"][job]["title"] + work["jobs"][job]["dates"]
		+ work["jobs"][job]["location"] + work["jobs"][job]["description"]); 
	}
}
displayWork();

var projects = {
	"projects": [
		{
			"title": "insert title",
			"dates": "insert dates",
			"description": "instert description",
			"images": "http://placehold.it/350x350"
		},
		{
			"title": "insert title2",
			"dates": "insert dates2",
			"description": "instert description2",
			"images": "http://placehold.it/350x150"
		}		
	]
};
// Display projects using encapsulating function
projects.display = function() {
	for (proj in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		projTitle = HTMLprojectTitle.replace("%data%",projects.projects[proj].title);
		projDates = HTMLprojectDates.replace("%data%",projects.projects[proj].dates);
		projDescription = HTMLprojectDescription.replace("%data%",projects.projects[proj].description);	
		// will need to put loop here for multiple images	
		projImage = HTMLprojectImage.replace("%data%",projects.projects[proj].images);
		$(".project-entry:last").append(projTitle + projDates + projDescription + projImage);
	}
}
projects.display();


/* using JSON notaion
*/
var education = {
	"schools": [
		{
			"name": "Texas Tech",
			"location": "Lubbock",
			"major": "Mechanical Engineering",
			"dates attended": "insert dates",
			"url": "https://www.ttu.edu/"
		},
		{
			"name": "Richland College",
			"location": "Dallas",
			"major": "Associates of Science",
			"dates attended": "insert dates",
			"url": "http://richlandcollege.edu/"			
		}
		],
	"onlineCourses": [
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": "2015",
			"URL": "https://www.udacity.com/course/javascript-basics--ud804"
		},
		{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"dates": "2015",
			"URL": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
		}
	]
	};
education.display = function() {
	for (edu in education.schools) {
		$("#education").append(HTMLschoolStart);
		eduName = HTMLschoolName.replace("%data%",education.schools[edu].name);
		eduName = eduName.replace("#",education.schools[edu].url);
		eduMajor = HTMLschoolMajor.replace("%data%",education.schools[edu].major);
		eduDates = HTMLschoolDates.replace("%data%",education.schools[edu]["dates attended"]);
		eduLocation = HTMLschoolLocation.replace("%data%",education.schools[edu].location);
		$(".education-entry:last").append(eduName + eduMajor + eduDates + eduLocation);	
	}
	$("#education").append(HTMLonlineClasses);
	for (online in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		onTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[online].title);
		onTitle = onTitle.replace("#",education.onlineCourses[online].URL);
		onSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[online].school);
		onDates = HTMLonlineDates.replace("%data%",education.onlineCourses[online].dates);
		onURL = HTMLonlineURL.replace("%data%",education.onlineCourses[online].URL);
		onURL = onURL.replace("#",education.onlineCourses[online].URL);
		$(".education-entry:last").append(onTitle + onSchool + onDates + onURL);
	}
}
education.display();



//console.log(bio.skills.length);
//bio.skills = HTMLskills.replace("%data%",bio.skills);
//console.log(bio.skills);
if (bio.skills !== 0) {
	console.log("worked");
	$("#header").append(HTMLskillsStart);
	var formattedSkills = HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedSkills);
};

$("#map-div").append(googleMap);






		
/* using a previous notation
education["name"] = "Texas Tech University";
education["years"] = 3
education["city"] = "Lubbock";
$("#main").append(work["position"]);
$("#main").append(education.name);
*/

/*
 $("#main").append("Darren Honeycutt");
var firstName = "Darren";
var age = 32;
//these strings show up on the console in developer tools
console.log(firstName);
var awesomeThoughts = "I am Darren and I am AWESOME!";
console.log(awesomeThoughts);
var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
console.log(funThoughts);
*/

// var s = ["two", "dog", "horse"];
// $("#main").append(s.length);



