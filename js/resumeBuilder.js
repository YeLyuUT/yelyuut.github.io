/*************************************************
			Images and Link Edit
*************************************************/
var linkOfTwente = 'https://www.utwente.nl/';
var linkOfITC = 'https://www.itc.nl/';
var linkOfGit = 'https://github.com/YeLyuUT';
var linkMY = 'https://sites.google.com/site/michaelyingyang/home';
var linkGV = 'https://www.itc.nl/personal/vosselman/';
var linkSUG = 'https://sites.google.com/site/michaelyingyang/group';
var personalImg = './images/LyuYe.png';
$('#pic').append('<a href="./easter_egg/style_transfer/style_transfer.html" target="_self"><img class="personalImg" src=%data% alt="PersonalPic"></a>'.replace('%data%',personalImg));
$('#name').append('<p><b>Click &uarr; Pic!!! </b></p><p>Ye LYU</p>');
/*************************************************
			Personal Info Edit
*************************************************/
var linkTemplate = '<a href= %link% target="view_window" > %text% </a>';
var group = linkTemplate.replace('%link%',linkSUG).replace('%text%', 'Scene Understanding Group');
var ITC = linkTemplate.replace('%link%',linkOfITC).replace('%text%', 'ITC');
var GV = linkTemplate.replace('%link%',linkGV).replace('%text%', 'George Vosselman');
var MY = linkTemplate.replace('%link%',linkMY).replace('%text%', 'Michael Ying Yang');
var About_Content='<p>'+"I am a Ph.D. candidate in the "+group+" at "+ITC+",supervised by "+GV+" and "+MY+"."+'</p>'+
'<p>'+"I've been working on project of Scene Understanding from Very High Resolution UAV Images."+'</p>'+
'<p>'+"My research interest is about object detection, object segmenation from images and videos."+'</p>';
$('#about').append(About_Content)
/*************************************************
				Publication
				Projection Edit
*************************************************/
/***************Publication**********************/
var PublicationTBID = 'ID_PublicationTB';
$("#publicationItems").append(LvProjectStart.replace('%data%',PublicationTBID));
var publication_UAVid =
[
	LvPublicationTitle.replace('%data%','UAVid: A semantic segmentation dataset for UAV imagery'),
	LvPublicationAuthors.replace('%data%','Ye Lyu, George Vosselman, Gui-Song Xia, Michael Ying Yang'),
	LvPublicationJournalName.replace('%data%','ISPRS Journal'),
	LvPublicationLinks.replace('%data%',
	'<a href="https://arxiv.org/pdf/1810.10438.pdf" target="_blank">[Arxiv]</a>'
	+'<a href="https://www.sciencedirect.com/science/article/pii/S0924271620301295" target="_blank">[Journal]</a>'
	+'<a href="https://www.youtube.com/watch?v=iCdr-L19Slc" target="_blank">[video]</a>'
	+'<a href="https://github.com/YeLyuUT/MSDNet" target="_blank">[project page]</a>'
	+'<a href="https://uavid.nl" target="_blank">[UAVid website]</a>'),
	LvPublicationImage.replace("%data%",'./images/pub_UAVid/eg.jpg'),
];
var publication_LIP =
[
	LvPublicationTitle.replace('%data%','LIP: Learning Instance Propagation for Video Object Segmentation'),
	LvPublicationAuthors.replace('%data%','Ye Lyu, George Vosselman, Gui-Song Xia, Alper Yilmaz, Michael Ying Yang'),
	LvPublicationJournalName.replace('%data%','ICCV19 Workshop'),
	LvPublicationLinks.replace('%data%','<a href="http://openaccess.thecvf.com/content_ICCVW_2019/html/MCMV/Lyu_LIP_Learning_Instance_Propagation_for_Video_Object_Segmentation_ICCVW_2019_paper.html" target="_blank">[paper]</a>'
	+'<a href="https://www.youtube.com/watch?v=4bH-n8N757Y" target="_blank">[video]</a>'),
	//+'<a href="#" target="_blank">[project page]</a>',
	LvPublicationImage.replace("%data%",'./images/pub_LIP/eg.jpg'),
];
var publication_VOD_TRACK =
[
	LvPublicationTitle.replace('%data%','Plug & Play Convolutional Regression Tracker for Video Object Detection'),
	LvPublicationAuthors.replace('%data%','Ye Lyu, Michael Ying Yang, George Vosselman, Gui-Song Xia'),
	LvPublicationJournalName.replace('%data%','ISPRS Journal'),
	LvPublicationLinks.replace('%data%','<a href="https://arxiv.org/pdf/2003.00981.pdf" target="_blank">[Arxiv]</a>'
	+'<a href="https://www.sciencedirect.com/science/article/pii/S092427162100099X" target="_blank">[Journal]</a>'
	+'<a href="https://youtu.be/aItstqQUzHw" target="_blank">[video]</a>'),
	//+'<a href="#" target="_blank">[video]</a>'),
	//+'<a href="#" target="_blank">[project page]</a>',
	LvPublicationImage.replace("%data%",'./images/pub_VOD_TRACK/eg.png'),
];

var publication_MOTS =
[
	LvPublicationTitle.replace('%data%','Joint Top-down and Bottom-up Inference for Multi-Object Tracking and Segmentation'),
	LvPublicationAuthors.replace('%data%','Ye Lyu, George Vosselman, Gui-Song Xia, Michael Ying Yang'),
	LvPublicationJournalName.replace('%data%','Preprint'),
	LvPublicationLinks.replace('%data%','<a href="#" target="_blank">[Arxiv]</a>'
	+'<a href="https://www.youtube.com/watch?v=jjNRs7MzzX8" target="_blank">[video]</a>'),
	//+'<a href="#" target="_blank">[project page]</a>',
	LvPublicationImage.replace("%data%",'./images/pub_MOTS/mots_eg.jpg'),
];

var publication_UAVid_BiMSAN =
[
	LvPublicationTitle.replace('%data%','Bidirectional Multi-scale Attention Networks for Semantic Segmentation of Oblique UAV Imagery'),
	LvPublicationAuthors.replace('%data%','Ye Lyu, George Vosselman, Gui-Song Xia, Michael Ying Yang'),
	LvPublicationJournalName.replace('%data%','ISPRS Congress'),
	LvPublicationLinks.replace('%data%','<a href="https://arxiv.org/abs/2102.03099" target="_blank">[Arxiv]</a>'),
	//+'<a href="#" target="_blank">[video]</a>'),
	//+'<a href="#" target="_blank">[project page]</a>',
	LvPublicationImage.replace("%data%",'./images/pub_BiMSAN/example.jpg'),
];
addPublication(publication_UAVid,PublicationTBID);
addPublication(publication_LIP,PublicationTBID);
addPublication(publication_VOD_TRACK,PublicationTBID);
addPublication(publication_MOTS,PublicationTBID);
addPublication(publication_UAVid_BiMSAN,PublicationTBID);
/****************Projection***********************/
var ProjTBID = 'ID_ProjTB';
$("#projItems").append(LvProjectStart.replace('%data%',ProjTBID));
console.log(LvProjectStart.replace('%data%',ProjTBID));
var project1_data =
[
	LvProjectTitle.replace("%data%","Scene Understanding in VHR UAV Images"),
	LvProjectDates.replace("%data%","2017/08/01 till now"),
	LvProjectDescription.replace("%data%","My research interest is about semantic segmentation, instance segmentation, detection and tracking."),
	LvProjectImage.replace('%data%',"./images/proj_uav/projpic.jpg"),
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
var News2_Content='2018/04 I have passed the ph.D. qualifier!';
$('#'+ID_News_Content).append(LvSubContent.replace('%data%',News2_Content));
var News3_Content='2019/08 Our UAVid project website is online!  <a target="_blank" href="https://uavid.nl">[link]</a> ';
$('#'+ID_News_Content).append(LvSubContent.replace('%data%',News3_Content));
var News4_Content='2020/05 Our UAVid2020 benchmark is published on Codalab!  <a target="_blank" href="https://competitions.codalab.org/competitions/25224">[link]</a> ';
$('#'+ID_News_Content).append(LvSubContent.replace('%data%',News4_Content));

/*************************************************
				Footer Edit
*************************************************/
var ITCUTImg = './images/itc_ut.png';
var GitImg = "./images/github.jpg";
var TwitterImg = "./images/Twitter.png";
//$('#Icons').append(linkTemplate.replace('%link%',linkOfITC).replace('%text%', '<img class="icon-image" src=%data% alt="ITCPic">'.replace('%data%',ITCImg)));
$('#Icons').append(linkTemplate.replace('%link%',linkOfTwente).replace('%text%', '<img class="icon-image" src=%data% alt="UTwentePic">'.replace('%data%',ITCUTImg)));
$('#Icons').append(linkTemplate.replace('%link%',linkOfGit).replace('%text%', '<img class="icon-image" src=%data% alt="GitPic">'.replace('%data%',GitImg)));
//$('#Icons').append(linkTemplate.replace('%link%',"#").replace('%text%', '<img class="icon-image" src=%data% alt="TwitterPic">'.replace('%data%',TwitterImg)));
//////////////////////////////////////////////////
var LvSchoolStart = '<div class="education-entry"></div>';
var LvSschoolName = '<a href="#">%data%';
var LvSchoolDegree = ' -- %data%</a>';
var LvSchoolDates = '<div class="date-text">%data%</div>';
var LvSchoolLocation = '<div class="location-text">%data%</div>';
var LvSchoolMajor = '<em><br>Major: %data%</em>';
