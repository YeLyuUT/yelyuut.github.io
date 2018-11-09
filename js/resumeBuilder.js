/*************************************************
			Images and Link Edit
*************************************************/
var linkOfTwente = 'https://www.utwente.nl/';
var linkOfITC = 'https://www.itc.nl/';
var linkMY = 'https://sites.google.com/site/michaelyingyang/home';
var linkGV = 'https://www.itc.nl/personal/vosselman/';
var linkSUG = 'https://sites.google.com/site/michaelyingyang/group';
var personalImg = './images/LyuYe.jpg';
$('#pic').append('<img class="personalImg" src=%data% alt="PersonalPic">'.replace('%data%',personalImg));
$('#name').append('<p>Ye LYU</p>');
/*************************************************
			Personal Info Edit
*************************************************/
var linkTemplate = '<a href= %link% target="view_window" > %text% </a>';
var group = linkTemplate.replace('%link%',linkSUG).replace('%text%', 'Scene Understanding Group');
var ITC = linkTemplate.replace('%link%',linkOfITC).replace('%text%', 'ITC');
var GV = linkTemplate.replace('%link%',linkGV).replace('%text%', 'G. Vosselman');
var MY = linkTemplate.replace('%link%',linkMY).replace('%text%', 'Michael Ying Yang');
var About_Content='<p>'+"I am a PhD student in the "+group+" at "+ITC+",supervised by "+GV+" and "+MY+"."+'</p>'+
'<p>'+"I've been working on prject of Scene Understanding from Very High Resolution Images."+'</p>';
$('#about').append(About_Content)
/*************************************************
				Publication
				Projection Edit
*************************************************/
/***************Publication**********************/
var PublicationTBID = 'ID_PublicationTB';
$("#publicationItems").append(LvProjectStart.replace('%data%',PublicationTBID));
var publication_data =
[
	LvPublicationTitle.replace('%data%','Title'),
	LvPublicationAuthors.replace('%data%','Ye LYU'),
	LvPublicationJournalName.replace('%data%','ISPRS'),
	LvPublicationLinks.replace('%data%','<a href="#">[pdf]</a>'+'<a href="#">[code]</a>'),
	LvPublicationImage.replace("%data%",'#'),
];
addPublication(publication_data,PublicationTBID);
/****************Projection***********************/
var ProjTBID = 'ID_ProjTB';
$("#projItems").append(LvProjectStart.replace('%data%',ProjTBID));
console.log(LvProjectStart.replace('%data%',ProjTBID));
var project1_data =
[
	LvProjectTitle.replace("%data%","Scene Understanding in VHR UAV Images"),
	LvProjectDates.replace("%data%","2017/08/01"),
	LvProjectDescription.replace("%data%","Proj1Content"),
	LvProjectImage.replace('%data%',"proj1.jpg"),
];
addProject('(1)',project1_data,ProjTBID);
// console.log('#'+ID_Proj1);
/*************************************************
				News Edit
*************************************************/
/*create ul*/
var ID_News_Content = 'news-content';
$('#News').append(LvNewsContent.replace('%data%',ID_News_Content));
/*add items*/
var News1_Content='2017/06 I have been admitted by UTwente ITC!';
$('#'+ID_News_Content).append(LvSubContent.replace('%data%',News1_Content));

/*************************************************
				Footer Edit
*************************************************/
var ITCImg = './images/ITC.jpg';
var UTwenteImg = './images/UTwente.png';
var GitImg = "./images/github.jpg";
var TwitterImg = "./images/Twitter.png";
$('#Icons').append(linkTemplate.replace('%link%',linkOfITC).replace('%text%', '<img class="icon-image" src=%data% alt="ITCPic">'.replace('%data%',ITCImg)));
$('#Icons').append(linkTemplate.replace('%link%',linkOfTwente).replace('%text%', '<img class="icon-image" src=%data% alt="UTwentePic">'.replace('%data%',UTwenteImg)));
$('#Icons').append(linkTemplate.replace('%link%',"#").replace('%text%', '<img class="icon-image" src=%data% alt="GitPic">'.replace('%data%',GitImg)));
$('#Icons').append(linkTemplate.replace('%link%',"#").replace('%text%', '<img class="icon-image" src=%data% alt="TwitterPic">'.replace('%data%',TwitterImg)));
//////////////////////////////////////////////////
var LvSchoolStart = '<div class="education-entry"></div>';
var LvSschoolName = '<a href="#">%data%';
var LvSchoolDegree = ' -- %data%</a>';
var LvSchoolDates = '<div class="date-text">%data%</div>';
var LvSchoolLocation = '<div class="location-text">%data%</div>';
var LvSchoolMajor = '<em><br>Major: %data%</em>';