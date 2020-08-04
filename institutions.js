import React from 'react';

const universitiesSorted = [
  'Abia State University',
  'Abubakar Tafawa Balewa University',
  'Achievers University, Owo',
  'Adamawa State University',
  'Adekunle Ajasin University',
  'Adeleke University',
  'Admiralty University of Nigeria',
  'Afe Babalola University',
  'African University of Science and Technology',
  'Ahmadu Bello University',
  'Ajayi Crowther University',
  'Akwa Ibom State University',
  'Alex Ekwueme Federal University, Ndufu-Alike',
  'Al-Hikmah University',
  'Al-Qalam University, Katsina',
  'Ambrose Alli University',
  'American University of Nigeria',
  'Anchor University, Lagos',
  'Arthur Jarvis University',
  'Atiba University',
  'Augustine University',
  'Babcock University',
  'Bauchi State University',
  'Bayero University Kano',
  'Baze University',
  'Bells University of Technology',
  'Benson Idahosa University',
  'Benue State University',
  'Bingham University',
  'Borno State University',
  'Bowen University',
  'Caleb University',
  'Caritas University',
  'Chrisland University',
  'Christopher University',
  'Chukwuemeka Odumegwu Ojukwu University',
  'Clifford University',
  'Coal City University',
  'Covenant University',
  'Crawford University',
  'Crescent University, Abeokuta',
  'Cross River University of Technology',
  'Crown Hill University',
  'Delta State University, Abraka',
  'Dominican University, Ibadan',
  'Eastern Palm University',
  'Ebonyi State University',
  'Edo University',
  'Edwin Clark University',
  'Ekiti State University, Ado Ekiti',
  'Eko University of Medical and Health Sciences',
  'Elizade University',
  'Enugu State University of Science and Technology',
  'Evangel University, Akaeze',
  'Federal University of Agriculture, Abeokuta',
  'Federal University of Petroleum Resources',
  'Federal University of Technology, Akure',
  'Federal University of Technology, Minna',
  'Federal University of Technology, Owerri',
  'Federal University, Birnin Kebbi',
  'Federal University, Dutse',
  'Federal University, Dutsin-Ma',
  'Federal University, Gashua',
  'Federal University, Gusau',
  'Federal University, Kashere',
  'Federal University, Lafia',
  'Federal University, Lokoja',
  'Federal University, Otuoke',
  'Federal University, Oye-Ekiti',
  'Federal University, Wukari',
  'Fountain University, Osogbo',
  'Godfrey Okoye University',
  'Gombe State University',
  'Gombe State University of Science and Technology',
  'Gregory University, Uturu',
  'Hallmark University, Ijebu-Itele',
  'Hezekiah University',
  'Ibrahim Badamasi Babangida University',
  'Igbinedion University Okada',
  'Ignatius Ajuru University of Education',
  'Imo State University',
  'Joseph Ayo Babalola University',
  'Kaduna State University',
  'Kano University of Science and Technology',
  'Kebbi State University of Science and Technology',
  'Kings University',
  'Kogi State University',
  'Kola Daisi University',
  'Kwara State University',
  'Kwararafa University, Wukari',
  'Ladoke Akintola University of Technology',
  'Lagos State University',
  'Landmark University',
  'Lead City University',
  'Legacy University, Okija',
  'Madonna University, Okija',
  'Mcpherson University',
  'Michael and Cecilia Ibru University',
  'Michael Okpara University of Agriculture',
  'Modibbo Adama University of Technology',
  'Moshood Abiola University of Science and Technology, Abeokuta',
  'Mountain Top University',
  'Nasarawa State University',
  'National Open University',
  'Niger Delta University',
  'Nigerian Maritime University, Okerenkoko',
  'Nile University of Nigeria',
  'Nnamdi Azikiwe University',
  'Novena University',
  'Obafemi Awolowo University',
  'Obong University',
  'Oduduwa University',
  'Olabisi Onabanjo University',
  'Ondo State University of Science and Technology',
  'Osun State University',
  'PAMO University of Medical Sciences',
  'Pan-Atlantic University',
  'Paul University',
  'Plateau State University',
  'Precious Cornerstone University',
  `Redeemer's University`,
  'Renaissance University',
  'Rhema University',
  'Ritman University',
  'Rivers State University',
  'Salem University',
  'Samuel Adegboyega University',
  'Skyline University Nigeria',
  'Sokoto State University',
  'Southwestern University, Nigeria',
  'Spiritan University, Nneochi',
  'Sule Lamido University',
  'Summit University Offa',
  'Tai Solarin University of Education',
  'Tansian University',
  'Taraba State University',
  'The Technical University',
  'Umaru Musa Yar Adua University',
  'University of Abuja',
  'University of Africa',
  'University of Agriculture, Makurdi',
  'University of Benin',
  'University of Calabar',
  'University of Ibadan',
  'University of Ilorin',
  'University of Jos',
  'University of Lagos',
  'University of Maiduguri',
  'University of Medical Sciences',
  'University of Mkar',
  'University of Nigeria',
  'University of Port Harcourt',
  'University of Uyo',
  'Usmanu Danfodio University',
  'Veritas University',
  'Wellspring University',
  'Wesley University of Science and Technology',
  'Western Delta University',
  'Yobe State University',
  'Yusuf Maitama Sule University Kano',
  'Zamfara State University',
  'Others'
];


export const polytechnicsSorted = [
  'Abia State Polytechnic',
  'Akwa-Ibom College of Agriculture',
  'Akperan Orshi College of Agriculture',
  'Borno College of Agriculture',
  'Ibrahim Babangida College of Agriculture',
  'Delta State College of Agriculture',
  'Federal College of Agriculture, Ishiagu',
  'College of Agriculture and Animal Science',
  'Samaru College of Agriculture',
  'Audu Bako School of Agriculture',
  'College of Agriculture, Zuru',
  'College of Agriculture, Kabba',
  'School of Agriculture, Ikorodu',
  'College of Agriculture, Lafia',
  'Bilyaminu Usman Polytechnic, Hadejia',
  'Jigawa State Polytechnic, Dutse',
  'Niger State College of Agriculture',
  'Federal College of Animal Health and Production Technology, Ibadan',
  'Federal College of Animal Health and Production Technology, Vom',
  'Plateau State College of Agriculture',
  'College of Agriculture, Jalingo',
  'Foundation College of Technology',
  'The UA College of Science and Technology , Isuofia',
  'Maritime Academy of Nigeria',
  'Petroleum Training Institute',
  'Federal School of Dental Technology & Therapy',
  'Federal College of Land Resources Technology, Owerri',
  'Federal College of Chemical and Leather and Technology',
  'Federal College of Forestry Mechanisation',
  'Nigerian College of Aviation Technology',
  'Federal school of statistics Manchok',
  'Federal College of Fisheries and Marine Technology',
  'Federal College of Fresh Water Fisheries Technology',
  'Federal College of Wildlife Management',
  'Federal College of Forestry, Ibadan',
  'Federal College of Education, Pankshin',
  'Federal College of Forestry. Jos',
  'Federal College of Land Resources Technology, Kuru',
  'Wavecrest College of Hospitality',
  'Dorben Polytechnic',
  'Adamawa State Polytechnic',
  'Federal Polytechnic, Mubi',
  'Akwa Ibom State Polytechnic',
  'Heritage Polytechnic',
  'Ekwenugo Okeke Polytechnic',
  'Federal Polytechnic, Oko',
  'Abubakar Tafari Ali Polytechnic',
  'Federal Polytechnic, Bauchi',
  'Bayelsa State College of Arts and Science',
  'Federal Polytechnic Ekowe Bayelsa State',
  'Benue State Polytechnic',
  'Ramat Polytechnic',
  'The Polytechnic, Calabar',
  'Divine Polytechnic, Mkpani',
  'Delta State Polytechnic (three institutions)',
  'Akanu Ibiam Federal Polytechnic',
  'Edo State Polytechnic Usen',
  'Auchi Polytechnic',
  'Kings Polytechnic',
  'Shaka Polytechnic',
  'Federal Polytechnic, Ado-Ekiti',
  'Institute of Management Technology, Enugu',
  'Our Saviour Institute of Science and Technology',
  'Federal Polytechnic, Nekede',
  'Temple Gate Polytechnic',
  'Imo State Polytechnic',
  'Imo State Technological Skills Acquisition Center',
  'Hussaini Adamu Federal Polytechnic',
  'Hussani Adamu Polytechnic',
  'Kaduna Polytechnic',
  'Nuhu Bamalli Polytechnic',
  'Kano State Polytechnic',
  'Mohammed Abdullahi Wase Polytechnic',
  'Hassan Usman Katsina Polytechnic',
  'Federal Polytechnic, Birnin-Kebbi',
  'Kebbi State Polytechnic',
  'Federal Polytechnic, Idah',
  'Kogi State Polytechnic',
  'Federal Polytechnic, Offa',
  'Kwara State Polytechnic',
  'Grace Polytechnic',
  'Lagos City Polytechnic',
  'Lagos State Polytechnic',
  'Ronik Polytechnic',
  'Wolex Polytechnic',
  'Yaba College of Technology',
  'Maurid Institute of Management & Technology, Nasarawa',
  'Federal Polytechnic, Nassarawa',
  'Nasarawa State Polytechnic',
  'Federal Polytechnic, Bida',
  'Niger State Polytechnic',
  'Abraham Adesanya Polytechnic',
  'Allover Central Polytechnic',
  'Federal Polytechnic, Ilaro',
  'Gateway Polytechnic Saapade',
  'Marvic Polytechnic',
  'Moshood Abiola Polytechnic',
  'Ogun State College of Health Technology',
  'Rufus Giwa Polytechnic',
  'Federal Polytechnic, Ede',
  'Osun State College of Technology',
  'Osun State Polytechnic',
  'Igbajo Polytechnic, Igbajo',
  'Polytechnic Ile-Ife',
  'Interlink Polytechnic',
  'Southern Nigeria Institute of Innovative Technology (SNIITPOLY)',
  'Federal College of Animal Health & Production Technology',
  'The Polytechnic, Ibadan',
  'The Kings Poly, Shaki, Oyo',
  'Tower Polytechnic, Ibadan',
  'The Oke-Ogun Polytechnic, Saki',
  'Plateau State Polytechnic',
  'Eastern Polytechnic',
  'Port Harcourt Polytechnic',
  'Rivers State Polytechnic',
  'Federal Polytechnic, Damaturu',
  'Mai Idris Alooma Polytechnic',
  'Abdul Gusau Polytechnic',
  'Federal Polytechnic, Namoda',
  'Others'
];

export const collegeOfEducationSorted = [
  'Federal College of Education (Special), Oyo',
  'Federal College of Education',
  'Federal College of Education, Osiele',
  'Federal College of Education, Kano',
  'Federal College of Education, Eha-Amufu',
  'Federal College of Education, Okene',
  'Federal College of Education (Technical), Gombe',
  'Federal College of Education (Technical), Omoku',
  'Federal College of Education, Kontagora',
  'Federal College of Education, Zaria',
  'Federal College of Education, Pankshin',
  'Jigawa State College of Education, Gumel',
  'Alvan Ikoku College of Education',
  'Federal College of Education, Yola',
  'Federal College of Education (Tech), Potiskum',
  'Federal College of Education (Technical), Gusau',
  'Federal College of Education (Technical), Akoka',
  'Federal College of Education, Kastina',
  'Federal College of Education (Technical), Bichi',
  'Federal College of Education, Obudu.',
  'Adeyemi College of Education',
  'Federal College of Education (Technical), Umunze',
  'Piaget College of Education.',
  'St. Augustine College of Education',
  'Our Saviour Institute of Science and Technology',
  'Delar College of Education',
  'Yewa Central College of Education',
  'Institute of Ecumenical Education, (Thinkers Corner), Enugu',
  'Ansar-Ud-Deen College of Education',
  'African Thinkers Community of Inquiry College of Education.',
  'City College of Education, Mararaba',
  'Muftau Olanihun College of Education',
  'Corner Stone College of Education',
  'Muhyideen College of Education',
  'Bauchi Institute of Arabic & Islamic Studies',
  'Havard Wilson College of Education',
  'College of Education Offa.',
  'Calvin Foundation College of Education, Naka',
  'Angel Crown College of Education, Gidan Waya',
  'Royal City College of Education, Iyesi-ota',
  'Nigerian Army School of Education (NASE)',
  'Tai Solarin College of Education, Omu-Ijebu, Ogun',
  'Nwafor Orizu College of Education, Nsugbe',
  'Enugu State College of Education (Technical), Enugu State',
  'Aminu Saleh College of Education, Azare, Bauchi State',
  'Taraba State College of Education, Zing',
  'Adeniran Ogunsanya College of Education, Ijanikin, Lagos State',
  'Imo State College of Education, Ihitte Uboma.',
  'Kwara State College of Education, Oro ',
  'Kwara State College of Education, Ilorin',
  'Kwara State College of Education (Technical) Lafiagi',
  'Yusufu Bala Usman College of Legal and General Studies, Daura, Katsina State ',
  'College of Education, Ikere-Ekiti. Ekiti State.',
  "Sa'adatu Rimi College of Education Kumbotso, Kano.",
  'Shehu Shagari College of Education',
  'Ozigis College of Education',
  'Adamawa State College of Education, Hong',
  'college of education Edejeba-Warri, Delta state ',
  'KOGI STATE COLLEGE OF EDUCATION(TECHNICAL) KABBA ',
  'Michael Otedola college of primary education Epe,Lagos',
  'Jigawa state college of islamic and legal studies',
  'Others'
];

export const schoolOfNursingSorted = [
  'ECWA School of Nursing, Egbe',
  'Eksuth School Of Nursing, Ado Ekiti',
  'FCT School of Nursing, Gwagwalada',
  'School of Nursing and Midwifery, Afikpo',
  'School of Nursing (UCH)-Ibadan',
  'School of Nursing Amaigbo',
  'School Of Nursing Federal Teaching Hospital, Ido Ekiti',
  'School of Nursing UNTH, Enugu',
  'School of Nursing, LUTH',
  'Sacred Heart Hospital, Lantoro, Abeokuta, Ogun State, Nigeria',
  'Ondo State Schools of Nursing & Midwifery',
  'School Of Nursing Mbano,Joint Hospital',
  'School of Nursing UBTH, Edo',
  'Others'
];

export const schoolOfHealthSorted = [
  'ABU Teaching Hospital, Department of Community Medicine (CHO), Shika, Zaria, Kaduna State',
  'Aminu Kano University Teaching Hospital, Kano',
  'Federal College of Dental Technology, Enugu',
  'Institute of Public Health College of Health Sciences, (OAU) Ile- Ife',
  'National Orthopaedic Centre, Igbobi, Lagos State',
  'Nigerian Army Medical Corps and Schools, Ojo, Lagos State',
  'Othman Dan-Fodio University Teaching Hospital, Sokoto',
  'University of Calabar Teaching Hospital Calabar, Cross River State',
  'University College Hospital, Ibadan, Oyo State',
  'University Teaching Hospital, Lagos',
  'Anambra State School of Health Technology, Obosi',
  'Bauchi State School of Health Technology, Ningi',
  'Imo State School of Health Technology, Amaigbo',
  'Imo State School of Public Health Nursing/CHO, Owerri Imo State',
  'Lagos State School of Public Health Nursing/CHO, Awolowo Road, Lagos',
  'Rivers State College of Health Sciences and Technology, Port Harcourt',
  'School of Health Technology, Aba, Abia State',
  'School of Health Technology, Akure, Ondo State',
  'School of Health Technology, Alushi Via, Akwanga, Nasarawa State',
  'School of Health Technology, Benin-City, Edo State',
  'School of Health Technology, Calabar, Cross River State',
  'School of Health Technology, Daura, Katsina State',
  'School of Health Technology, Elesa Osun State',
  'School of Health Technology, Etinan, Akwa-Ibom State',
  'School of Health Technology, Idah, Kogi State',
  'School of Health Technology, Ijero-Elati, Ekiti State',
  'School of Health Technology, Ilese, Ijebu-Ode, Ogun State',
  'School of Health Technology, Inyi, Enugu State',
  'School of Health Technology, Jahun, Jigawa State',
  'School of Health Technology, Jega, Kebbi State',
  'School of Health Technology, Kaltungo, Gombe State',
  'School of Health Technology, Kankia, Katsina State',
  'School of Health Technology, Kano',
  'School of Health Technology, Maiduguri, Borno State',
  'School of Health Technology, Makurdi, Benue State',
  'School of Health Technology, Minna, Niger State',
  'School of Health Technology, Mubi, Adamawa State',
  'School of Health Technology, Offa, Kwara State',
  'School of Health Technology, Ofuoma, Ughelli Delta State',
  'School of Health Technology, Oji River, Enugu State',
  'School of Health Technology, Pankshin, Plateau State',
  'School of Health Technology, Takum, Taraba State',
  'School of Health Technology, Tungar Magajiya, Kontagora, Niger State',
  'School of Health Technology, Yaba, Lagos State',
  'School of Health Technology, Zawan-Jos, Plateau State',
  'School of Hygiene, Eleyele, Ibadan, Oyo State',
  'School of Hygiene, Kano',
  'School of Public Health Nursing Nsukka, Enugu',
  'Shehu Idris College of Health Sciences and Technology, Makarfi, Kaduna State',
  'Sultan Abdur-Rahman School of Health Technology, Gwadabawa, Sokoto State',
  'NKST College of Health Technology, Mkar, Gboko, Benue State',
  'Others'
];

const collegeOfAgricultureSorted = [
  'College of Agriculture (DAC), Kabba, Kogi State.',
  'Federal College of Agriculture Akure, Ondo State.',
   'Federal College of Agriculture, Dadinkowa, Gombe State.',
   'Federal College of Agriculture, Ibadan, Oyo State.',
   'Federal College of Agriculture Ishiagu, Ebonyi State.',
   'Federal College of Animal Health and Production Technology, Ibadan, Oyo State.',
   'Federal College of Animal Health and Production Technology, Vom, Plateau State.',
   'Federal College of Fisheries and Marine Technology, Lagos.',
   'Federal College of Freshwater Fisheries Technology, Baga, Borno State.',
   'Federal College of Freshwater Fisheries Technology, New Bussa, Niger State.',
   'Federal College of Forestry Mechanisation, Afaka, Kaduna State.',
   'Federal College of Land Resources Technology, Kuru, Jos, Plateau State.',
   'Federal College of Land Resources Technology, Owerri Imo State.',
   'Federal College of Wildlife Management, New Bussa, Niger State.',
   'Federal College of Forestry, Ibadan, Oyo State.',
   'Federal College of Forestry, Jos, Plateau State.',
   'Samaru College of Agriculture (DAC), Zaria Kaduna State.',
   'Adamawa State College of Agriculture, Mubi.',
   'Akperan Orshi College of Agriculture, Yandev Gboko.',
   'Akwa Ibom State College of Agriculture, Obio-Akpa.',
   'Anambra State College of Agriculture, Igbariam.',
   'Audu Bako School of Agriculture, Danbatta, Kano State.',
   'College of Agriculture, Jalingo, Taraba State.',
   'College of Agriculture, Lafia, Nassarawa State.',
   'College of Agriculture, Zuru, Kebbi State.',
   'Edo State College of Agriculture, Iguariakhi.',
   'Jigawa State College of Agriculture, Hadejia.',
   'Mohamet Lawan College of Agriculture Maiduguri, Borno State.',
   'Niger State College of Agriculture, Mokwa.',
   'Oyo State College of Agriculture, Oyo.',
   'Plateau State College of Agriculture, Garkawa.',
   'Regional Agricultural Training School, Maiduguri, Borno State.',
   'Rivers State Institute of Agricultural Research and Training, Onne.',
   'School of Agriculture, Ikorodu, Lagos State.',
   'Yobe State College of Agriculture, Gujba.',
   'Zamfara State College of Agriculture, Bakura.',
   'Others'
];



//Sorting data from the frontend
let universities = universitiesSorted.sort((a, b) => {
  if (b > a) {
    return -1
  } else {
    return 1
  }
});

//Sorting data from the frontend
let collegeOfAgriculture = collegeOfAgricultureSorted.sort((a, b) => {
  if (b > a) {
    return -1
  } else {
    return 1
  }
});

//Sorting data from the frontend
let schoolOfHealth = schoolOfHealthSorted.sort((a, b) => {
  if (b > a) {
    return -1
  } else {
    return 1
  }
});

//Sorting data from the frontend
let polytechnics = polytechnicsSorted.sort((a, b) => {
  if (b > a) {
    return -1
  } else {
    return 1
  }
});

//Sorting data from the frontend
let collegeOfEducation = collegeOfEducationSorted.sort((a, b) => {
  if (b > a) {
    return -1
  } else {
    return 1
  }
});

//Sorting data from the frontend
let schoolOfNursing = schoolOfNursingSorted.sort((a, b) => {
  if (b > a) {
    return -1
  } else {
    return 1
  }
});

export {universities, collegeOfAgriculture, schoolOfHealth, polytechnics, collegeOfEducation, schoolOfNursing};