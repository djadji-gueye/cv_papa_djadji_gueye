import { CvItem } from '../cv-item';

// tslint:disable:max-line-length
export const GENERAL = {
  name: 'Papa Djadji Gueye',
  position: 'Software Engineer',
  description: `Ingénieur en informatique, mon parcours Scientifique et Technologique me permet de  mettre à la disposition de mes employeurs un esprit rigoureux, capable d'analyser des problèmes complexes.Je suis un 
passionné d'innovation technologique, des projets qui incluent des technologies modernes et progressives dans un environnement de travail collaboratif.
  
Apprendre et essayer de nouvelles choses font partie de ma motivation. De nouveaux rôles sont intéressants si je peux accompagner le logiciel de bout en bout, de la planification, la mise en œuvre, le déploiement à la surveillance. 

Des boucles de rétroaction amplifiées et une culture d'apprentissage continu et d'expérimentation définissent pour moi un environnement de travail approprié.`,
};
// tslint:enable:max-line-length

export const CVITEMS: CvItem[] = [
  {
    title: 'TeamXGroup',
    subtitle: 'Software Engineer/ Project Manager',
    begin: '2018-10',
    end: '',
    description: 'TeamX Group est un "Start-up studio" qui a pour vocation de créer et développer des start-up sur la base d\'idées générées en interne,'+ 
      'mais également à accompagner des entrepreneurs dans la concrétisation de leurs projets à travers un apport tech.',
    tags: ['Java','Angular','Kotlin', 'React', 'MongoDB', 'Nginx','Kubernetes', 'Git', 'Docker', 'Jira','Braintree',
      'MongoDB', 'Node.js','AWS', 'Jenkins','RabbitMQ', 'BitBucket', 'Android'],
    link: 'https://teamxgroup.com/',
    thumbnail: 'teamx.png',
  },
  {
    title: 'Volkeno',
    subtitle: 'Développeur web et mobile',
    begin: '2017-07',
    end: '2017-07',
    description: 'Volkeno est une entreprise numérique et une startup studio basée à Dakar au Sénégal. '+
      'Elle a été créée en 2015 et a pour vocation de contribuer à la révolution numérique en cours dans '+
      'le but de créer mais aussi d’accompagner des jeunes porteurs de projet à créer des produits innovants '+
      'à forte valeur ajoutée.',
    tags: ['Java', 'Intershop', 'Python', 'Ansible', 'Git', 'KanBan', 'PyCharm', 'Apache HTTPD', 'AWS', 'Docker', 'Jira', 'Bamboo', 'TDD',
      'JavaScript', 'eclipse', 'Scrum', 'Subversion', 'Scala', 'Testrail', 'trac', 'Confluence', 'bash', 'Kubernetes', 'Oracle PL/SQL'],
    link: 'https://www.volkeno.sn/',
    thumbnail: 'volkeno.png',
  },
];

export const CERTIFICATES: CvItem[] = [
  {
    title: 'Developpeur web et Mobile',
    subtitle: 'Volkeno',
    begin: '',
    end: '2017-10-24',
    description: '',
    link: '',
    thumbnail: 'volkeno.png',
    attachment: 'Certificat_dev_web_mobiile.pdf',
  },
];

export const EDUCATION: CvItem[] = [
  {
    title: 'Institut Supérieur Informatique',
    subtitle: 'Ingénieur Génie Logiciel',
    begin: '2016-10',
    end: '2018-04',
    description: '',
    tags: ['PHP', 'C', 'Git', 'Java', 'Sql', 'eclipse','C++', 'Maven'],
    link: 'http://www.groupeisi.com/',
    thumbnail: 'isi.jpg',
  },
  {
    title: 'Université Gaston Berger de Saint-Louis',
    subtitle: 'Mathématique Physique et Informatique',
    begin: '2009-10',
    end: '2012-07',
    description: '',
    tags: ['C',  'Java', 'C++', 'Assembler', 'eclipse'],
    link: 'http://www.tu-berlin.de',
    thumbnail: 'berger.png',
  },
];

export const LANGUAGES = [
  // RATE YOURSELF  =>  100% = NATIVE;  80-99% = FLUENT;  60-79% = ADVANCED;  40-59% = INTERMEDIATE;  20-39% = ELEMENTARY;  0-19% = BEGINNER
  { title: 'French | Français', level: '100' },
  { title: 'English | Anglais', level: '80' },
];

export const PROJECTS: CvItem[] = [
  {
    title: 'RatS',
    subtitle: 'Script for transfering personal movie ratings from one site to another',
    begin: '2017-02',
    end: '',
    description: 'This Python project offers an easy way of synchronizing personal movie ratings from one site (e.g. IMDB) ' +
      'to another (e.g. Trakt). The script supports 13 sites currently and is constantly expanding.',
    tags: ['Python', 'Git', 'Docker', 'Selenium', 'Beautifulsoup', 'JSON', 'CSV'],
    link: 'https://github.com/StegSchreck/RatS',
    thumbnail: 'RatS.png',
  },
  {
    title: 'AngularCV',
    subtitle: 'A simple self-hosted online-CV',
    begin: '2017-09',
    end: '',
    description: 'This project was created for the purpose of having a basic online-CV, which anyone can host by themselves. ' +
      'This very website is the result of it.',
    tags: ['Angular', 'MaterialDesign', 'GitHub', 'CSS', 'TypeScript', 'JetBrains WebStorm', 'AWS', 'jsPDF', 'npm'],
    link: 'https://github.com/StegSchreck/AngularCV',
    thumbnail: '../AngularCV.svg',
  },
  {
    title: 'UberPage',
    subtitle: 'A simple self-hosted website as overview on different self-defined links',
    begin: '2019-07',
    end: '',
    description: 'This project aims to offer a simple overview website for different links.',
    tags: ['React', 'Javascript', 'GitHub', 'CSS', 'JetBrains WebStorm', 'AWS', 'npm'],
    link: 'https://github.com/StegSchreck/uberpage',
    thumbnail: 'UberPage_kompakt.png',
  },
  {
    title: 'IS24 Price Per Area',
    subtitle: 'Chrome extension to display the price per m² on ImmoScout',
    begin: '2020-02',
    end: '',
    description: 'Show price per m² on the search result pages, the shortlist page, and the expose pages of ImmobilienScout24. ' +
      'The extension also allows a colored highlighting with customizable thresholds.' +
      'Not affiliated with ImmobilienScout24 GmbH.',
    tags: ['Javascript', 'CSS', 'MaterialDesign', 'Chrome'],
    link: 'https://github.com/StegSchreck/is24-price-per-area',
    thumbnail: 'is24-price-per-area.svg',
  },
  {
    title: 'Recoding Aviation Hackathon',
    subtitle: 'Hackathon for improving the passenger journey for flights',
    begin: '',
    end: '2017-06',
    description: 'Sebastian participated in this hackathon together with three collegues. ' +
      'They develpoed an idea how the passenger can be relieved from stress and anxiety at an airport. ' +
      'The idea was named \'Unwait the airport\'. The resulting idea convinced the technical experts of the Munich Airport, ' +
      'which awarded their partner prize.',
    tags: ['Angular 2', 'MaterialDesign', 'Git', 'NodeJS', 'ACI ACRIS Seamless Tavel API', 'Express.js', 'MongoDB', 'twilio'],
    link: 'https://github.com/StegSchreck/RecodingAviation',
    thumbnail: 're-coding-avation-ba.png',
  },
  {
    title: 'OFM Helper',
    subtitle: 'Support for analysis of data in football management browser game \'OFM\'',
    begin: '2016-05',
    end: '2017-05',
    description: 'OFM is a browser game where you manage a football team. ' +
      'The \'OFM Helper\' helps the user to analyse the data which emerges from matches, trainings, etc. ' +
      'We formed a two-man team for developing this project.',
    tags: ['Python', 'Django', 'Git', 'Selenium', 'Beautifulsoup', 'TDD', 'Docker'],
    link: 'https://www.ofmhelper.de/',
    thumbnail: 'OFM_Helper.png',
  },
  {
    title: 'GoOLAP.info',
    subtitle: 'Fact search engine',
    begin: '2010',
    end: '2011',
    description: 'GoOLAP is a fact search engine, which crawls the web and combines relevant data using natural language processing. ' +
      'It is a research project at the DIMA department of TU Berlin. ' +
      'Sebastian was part of the team which was responsible of the project management. ' +
      'Later he wrote his bachelor thesis about the data persistence layer of the application.',
    tags: ['Project Managemant', 'Hadoop', 'MySQL', 'Mantis'],
    link: 'http://goolap.info/',
    thumbnail: 'TU_DIMA_GoOLAP.png',
  },
  {
    title: 'Global Phenological Monitoring Programm (GPM)',
    subtitle: 'Web-application for the Humboldt University',
    begin: '',
    end: '2010',
    description: 'The GPM is a global program for monitoring specific plants and analysing their behavior in the context of ' +
      'weather data. The web-application was created during a project course at the TU Berlin, which Sebastian took part at.',
    tags: ['Java', 'JSF', 'JSP', 'Subversion', 'Scrum', 'Trac', 'Spring', 'ant'],
    link: 'http://gpm.hu-berlin.de/',
    thumbnail: 'Huberlin-logo.png',
  },
];

export const VOLUNTEERING: CvItem[] = [
  {
    title: 'DFB cup finals & international matches',
    subtitle: 'Admission, visitor services, VIP support, stand-by man, special tasks',
    begin: '2007',
    end: '2016',
    description: 'Admission, visitor services, VIP support, stand-by man, special tasks',
    link: 'http://www.dfb.de',
    thumbnail: 'DFB-Logo.jpg',
  },
  {
    title: 'ISTAF & ISTAF Indoor',
    subtitle: 'Team lead',
    begin: '2007',
    end: '2016',
    description: 'Technical setup, visitor service, security, special tasks, teardown',
    link: 'https://www.istaf.de',
    thumbnail: 'ISTAF.png',
  },
  {
    title: 'UEFA Champions League Finals 2015 Berlin',
    subtitle: 'Team lead',
    begin: '',
    end: '2015',
    description: 'Team lead visitor service',
    link: 'https://www.uefa.com',
    thumbnail: 'UEFA_Champions_League-logo.png',
  },
  {
    title: 'CEV Champions League Final Four 2015 Berlin',
    subtitle: 'Team lead',
    begin: '',
    end: '2015',
    description: 'Team lead backstage security',
    link: 'http://www.cev.lu/',
    thumbnail: 'CEV_Champions_League_logo.png',
  },
  {
    title: 'German indoor rowing series',
    subtitle: 'Technical event manager',
    begin: '2010',
    end: '2015',
    description: 'Technical setup and time measurements',
    link: 'https://www.concept2.de/indoor-rowers/indoor-regatten/dirm',
    thumbnail: 'dirs_logo.jpg',
  },
  {
    title: 'Ruder-Bundesliga',
    subtitle: 'Time measurement',
    begin: '2009',
    end: '2015',
    description: 'Technical setup and time measurements for rowing Bundesliga.',
    link: 'https://www.ruder-bundesliga.de',
    thumbnail: 'Logo-Bundesliga_quer.jpg',
  },
  {
    title: 'Deutsche Ruderjugend im Deutschen Ruderverband',
    subtitle: 'Youth trainer and youth leader',
    begin: '2007',
    end: '2014',
    description: 'Taking care of young rowers in training camps, recreational rowing tours, camp for visiting the Olympic Games.',
    link: 'https://www.ruderjugend.org',
    thumbnail: 'DRJ_Logo.jpg',
  },
  {
    title: 'FISA World Rowing Junior Championships 2014 Hamburg',
    subtitle: 'IT network setup',
    begin: '',
    end: '2014',
    description: '',
    link: 'http://www.worldrowing.com/',
    thumbnail: 'FISA_JWM_2014.png',
  },
  {
    title: 'Hertha BSC',
    subtitle: 'Visitor services, special tasks, team lead',
    begin: '2008',
    end: '2011',
    description: 'Guiding visitors of home matches in the olympic stadium in Berlin. Lastly, as team lead.',
    link: 'http://www.hertha.de/',
    thumbnail: 'Hertha_BSC_Logo.svg',
  },
  {
    title: 'IAAF World Championships 2009 Berlin',
    subtitle: 'Anti-Doping-Chaperone',
    begin: '',
    end: '2009',
    description: '',
    link: 'https://www.iaaf.org/',
    thumbnail: 'IAAF_2009_in_Berlin.png',
  },
  {
    title: 'ULEB Euroleague Final Four 2009 Berlin',
    subtitle: 'Team delegate',
    begin: '',
    end: '2009',
    description: 'Team delegate of a basketeball team of Montepaschi Siena, Italy',
    link: 'http://www.euroleague.net/',
    thumbnail: 'ULEB_FinalFour_2009.png',
  },
  {
    title: 'FIFA World Cup 2006 Germany',
    subtitle: 'Visitor service',
    begin: '',
    end: '2006',
    description: 'Guiding visitors of the olympic stadium in Berlin.',
    link: 'https://www.fifa.com/',
    thumbnail: 'fifa_world_cup_2006.jpg',
  },
];

export const CONTACT = {
  city: 'Berlin, Germany',
  phone: '',
  mail: 'sebastian@schreck.berlin',
  skype: '', // just the account name
  linkedin: 'https://www.linkedin.com/in/sebastian-schreck-050739131/', // full url
  xing: 'https://www.xing.com/profile/Sebastian_Schreck2', // full url
  github: 'https://github.com/StegSchreck', // full url
  stackoverflow: 'https://stackoverflow.com/users/story/6538600', // full url
  twitter: 'https://twitter.com/StegSchreck', // full url
  facebook: '', // full url
  instagram: '', // full url
  other: [
    { title: 'Medium', icon: 'icon-medium', link: 'https://medium.com/@stegschreck' },
    { title: 'GitHub Page', icon: 'icon-github', link: 'https://stegschreck.github.io' },
    { title: 'GitLab Page', icon: 'icon-gitlab', link: 'https://stegschreck.gitlab.io' },
  ],
};

export const INTERESTS = [
  {
    title: 'Vélo',
    icon: 'directions_bike',
  },
  {
    title: 'Voyager',
    icon: 'card_travel',
  },
  {
    title: 'Logiciels open source',
    icon: 'code',
  },
  {
    title: 'Football',
    icon: 'sports_soccer',
  },
];

export const PUBLICATIONS: CvItem[] = [
  {
    title: 'Toubamajalis, une nouvelle application dédiée à la communauté Mouride',
    subtitle: 'Article publié sur Socialnetlink.org',
    begin: '',
    end: '2016-07-27',
    description: '',
    tags: ['Ionic', 'Angular','Cordova','Phonegap'],
    link: 'https://www.socialnetlink.org/2016/07/toubamajalis-une-nouvelle-application-dediee-a-la-communaute-mouride/',
    thumbnail: 'social.png',
  },
  {
    title: 'Jeulsima : Une nouvelle application pour réserver un taxi au Sénégal',
    subtitle: 'Article publié sur Socialnetlink.org',
    begin: '',
    end: '2018-09-05',
    description: 'Une des premières applications de réservation de véhicules au Sénégal en ligne',
    tags: ['GPS', 'GCP', 'Paypal', 'Android', 'Gmaps','PHP','geolocation'],
    link: 'https://www.socialnetlink.org/2018/09/jeulsima-une-nouvelle-application-pour-reserver-un-taxi-au-senegal/',
    thumbnail: 'social.png',
  },
];

export const TALKS: CvItem[] = [
  {
    title: 'Looking at a New-Born Star hrough the Telescope: Architecture Review Approach at idealo',
    subtitle: '20 min. @ Netlight EdgeX Urknall',
    begin: '',
    end: '2020-06-17',
    description: 'After starting a new project on a green field, you sometimes wonder if you made the right choices at the beginning. This talk will give you an overview of how idealo\'s team product page took a step back and reviewed their early architecture decisions considering the learnings made on the way.',
    tags: ['Architecture', 'Arc42'],
    thumbnail: 'NetlightEdgeXUrknall.png',
  },
  {
    title: 'Bringing a complex stack to the cloud - Our journey and lessons learned',
    subtitle: '45 min. @ AWS Startup Day Berlin 2018',
    begin: '',
    end: '2018-10-09',
    description: 'Mister Spex moved away from AWS to an on-premises infrastructure in 2015. In 2018 they switched back to AWS. This talk covers the story of these changes and the lessons learned.',
    tags: ['AWS', 'cloud', 'migration'],
    thumbnail: 'AWS_Startup_Day.png',
  },
  {
    title: 'Tear down this wall! - Overcoming collaboration obstacles on your DevOps journey',
    subtitle: '60 min. @ DevOpsCon Berlin 2018',
    begin: '',
    end: '2018-05-29',
    description: 'The discussion about DevOps is often focusing solely on the tooling aspect: automation, ' +
      'continuous integration & delivery; and monitoring. But automation and monitoring will only get you so far on ' +
      'your DevOps journey. The first and arguably hardest thing to master in DevOps is getting your work from ' +
      'inception into the hands of the customer fast. It requires your engineers to work hand in hand to ensure the ' +
      'stability of the software as well as the systems it runs on. This talk focuses on the organizational ' +
      'aspects of DevOps: How to measure and improve your team\'s effectiveness by reducing silos and silo thinking and ' +
      'how to get your engineers to share responsibility - a basis for every successful DevOps transformation.',
    tags: ['DevOps', 'culture', 'collaboration', 'communication', 'microservices', 'team structure'],
    link: 'https://jaxenter.com/devops-interview-schreck-uebel-145573.html',
    thumbnail: 'DevOpsCon_2018_Speaker.png',
  },
  {
    title: 'Tear down this wall! - Overcoming collaboration obstacles on your DevOps journey',
    subtitle: '45 min. @ code.talks commerce special Berlin 2018',
    begin: '',
    end: '2018-04-13',
    description: 'The discussion about DevOps is often focusing solely on the tooling aspect: automation, ' +
      'continuous integration & delivery; and monitoring. But automation and monitoring will only get you so far on ' +
      'your DevOps journey. The first and arguably hardest thing to master in DevOps is getting your work from ' +
      'inception into the hands of the customer fast. It requires your engineers to work hand in hand to ensure the ' +
      'stability of the software as well as the systems it runs on. We focus on the organizational ' +
      'aspects of DevOps: How to measure and improve your team\'s effectiveness by reducing silos and silo thinking and ' +
      'how to get your engineers to share responsibility - a basis for every successful DevOps transformation.',
    tags: ['DevOps', 'culture', 'collaboration', 'communication', 'microservices'],
    link: 'https://www.youtube.com/watch?v=KWw0H__mtxI',
    thumbnail: 'code-talks-commerce.png',
  },
];
