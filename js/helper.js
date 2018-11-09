var LvBioPic = '<img src="%data%",alt = "pic", class="biopic">';
var LvProjects = '<h1>Project:</h1><ol>%data%</ol>';
var LvGithub = "%data%";
var LvEmail = "%data%";
var Lvtwitter = "%data%";
var LvWelComeMessage="%data%";

var LvNewsContent = '<div class=news><ul id=%data%></ul></div>';
var LvSubContent = '<li>%data%</li>';

var LvPublicationStart = '<div width="100%" class="project-entry"><table width="100%" border="0" cellpadding="0" cellspacing="0"><tbody id= %data% ></tbody></table></div>';
var LvPublicationTitle = '<h3 class="publication-title"> %data% </h3>';
var LvPublicationAuthors = '<p class="authors"> %data% </p>';
var LvPublicationJournalName = '<p class="journal-name"> %data% </p>';
var LvPublicationLinks = ' %data% ';
var LvPublicationImage = '<img class="subItemImages" src= %data% alt="PublicationPic">';

var LvProjectStart = '<div width="100%" class="project-entry"><table width="100%" border="0" cellpadding="0" cellspacing="0"><tbody id= %data% ></tbody></table></div>';
var LvProjectTitle = '<a href="#">%data%</a>';
var LvProjectDates = '<div class="date-text">%data%</div>';
var LvProjectDescription = '<p><br>%data%</p>';
var LvProjectImage = '<img class="subItemImages" src="%data%" alt="ProjectPic">';

var LvSchoolStart = '<div class="education-entry">%data%</div>';
var LvSschoolName = '<a href="#">%data%';
var LvSchoolDegree = ' -- %data%</a>';
var LvSchoolDates = '<div class="date-text">%data%</div>';
var LvSchoolLocation = '<div class="location-text">%data%</div>';
var LvSchoolMajor = '<em><br>Major: %data%</em>';

function addProject(idx,items,id_Str)
{
  var table = '<tr width="100%"><td width="5%">'+idx+'</td><td align="center" width="45%" >'+items[0]+items[1]+items[2]+'</td><td width="50%">'+items[3]+'</td></tr>';
  $('#'+id_Str).append(table);
}

function addPublication(items,id_Str)
{
  var table = '<tr width="100%"><td width="5%"></td><td align="center" width="45%">'+items[4]+'</td><td width="50%" >'+items[0]+items[1]+items[2]+items[3]+'</td></tr>';
  $('#'+id_Str).append(table);
}

var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span>%data%</span><hr>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';


var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';





var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';

