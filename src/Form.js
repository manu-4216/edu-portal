import React, { Component } from 'react';
import './Form.css';

const questions = {
    "ro": [
        "Creez un site web, o aplicatie pentru mobil, sau un program pentru calculator",
        "Invat cum functioneaza corpul uman",
        "Fac experimente si deduc observatii",
        "Sfatuiesc oameni despre un mod de viata sanatos",
        "Incep o afacere", // 5
        "Studiez si aflu mai multe despre sistemul legal",
        "Studiez si aflu mai multe despre etapele dezvoltarii unei afaceri",
        "Studiez limbaje de programare pe calculator",
        "Am grija de oameni, chiar si straini",
        "Rezolv probleme tehnologige", // 10
        "Fac o cariera pentru care trebuie mai mutin de 2 ani de studiu",
        "Lucrez in slujba comunitatii sau pentru securitatea cetatenilor",
        "Ajut oameni in timpul dezastrelor naturale si in timpul urgentelor",
        "Ma asigur ca legile sunt respectate",
        "Supraveghez salariati, ii angajez, si ii ghidez", // 15
        "Critic arta, muzica sau spectacolele",
        "Lucrez ca actor sau ca designer de vestimentatie, sau de scena",
        "Invat cum se investesc banii",
        "Lucrez ca designer de arta, pentru a incanta oamenii",
        "Ajut oameni sa capete noi cunostinte si aptitudini", // 20
        "Motivez si ajut alti oameni pentru ca ei sa-si atinga scopul",
        "Pregatesc planuri de lectii",
        "Promovez si fac marketing pentru un nou produs",
        "Scriu un articol de blog, un articol de revista, sau un roman",
        "Pregatesc un comunicat de presa sau o reclama", // 25
        "Invat o limba noua",
        "Arat la un grup de oameni cum sa faca ceva",
        "Aflu mai multe despre comportamentul oamenilor",
        "Lucrez cu mainile",
        "Aflu mai multe despre alte culturi si religii", // 30
        "Inteleg evenimentele din lume sau evenimentele politice",
        "Aflu cum se amesteca mai multe produse chimice",
        "Rezolv probleme de matematica",
        "Ii ajut pe cei care bolnavi sau in depresie",
        "Folosesc stiinta si tehnologia",
        "Creez logo-uri, muzica sau mancaruri unice",
        "Repar sau construiesc diferite lucruri",
        "Studiez etica si filozofia",
        "Lucrez ceva necesita munca fizica",
        "Ma interesez si stau la curent cu cele mai recente tehnologii" // 40
    ],

    "en": [
        "Code a website, mobile app, or software program",
        "Learn how the body functions",
        "Conduct experiments and make observations",
        "Advise people about healthy lifestyle habit",
        "Start (or learn how to run) a business",
        "Learn the legal system",
        "Learn how a business operates",
        "Learn computer software programs",
        "Take care of people even strangers",
        "Troubleshoot technology issues",
        "A career that takes less than 2 years of education",
        "Serve the community and keep it safe",
        "Help people during a natural disaster or emergency",
        "Ensure federal, state, and local laws are abided by",
        "Supervise, hire, and mentor others",
        "Critique art, music, or performances",
        "Work as a performer, costume designer, or background artist",
        "Learn how to invest money",
        "Design works of art for others to enjoy",
        "Teach people new skills",
        "Motivate and help others fulfill their goals",
        "Develop lesson plans for classes",
        "Promote or market a brand new product",
        "Write a blog post, magazine article, or novel",
        "Prepare a press release or commercial",
        "Learn another language",
        "Teach a large group how to do something",
        "Learn about human behavior",
        "Work with my hands",
        "Research other cultures or religions",
        "Understand world events or politics",
        "Discover why chemicals react to one another",
        "Solve math problems",
        "Help those who are dying, sick, or depressed",
        "Use science and technology",
        "Create logos, music, or unique dishes at a restaurant",
        "Fix or build things",
        "Study ethics or philosophy",
        "Work that is physical (keeps my body active)",
        "Keep up with the most cutting edge technology"
    ]
};

const options = {
    "ro": [
        "Foarte interesat",
        "Interesat",
        "Putin interesat",
        "Neinteresat"
    ],

    "en": [
        "Very Interested",
        "Interested",
        "Slightly interested",
        "Not Interested"
    ]
};

const fields = {
    "ro": [
        "Sanatate si Medicina",
        "Business si Finante",
        "Tehnologie si Media",
        "Lege si Servicii Publice",
        "Arte si bucatar",
        "Educatie",
        "Communicatie",
        "Stiinte Sociale",
        "Stiinta si Inginerie",
        "Vocatie de Comert"
    ],

    "en": [
        "Health and Medical",
        "Business and Finance",
        "Technology and Media",
        "Law and Public Service",
        "Arts and Culinary",
        "Education",
        "Communications",
        "Social Science",
        "Science and Engineering",
        "Trade Vocations"
    ]
}

const moreInfo = {
    'ro': [
`
Overview: The health and medical industry is not only one of the fastest growing career fields, but it's also known for having high paying salaries. Employment in health careers is expected to grow faster than average due to our aging population, new medical research, and the accessibility to health insurance. In addition to careers that help people overcome illness, injury, and disease, there has also been an increased focus on healthier eating and lifestyles. Therefore, there are health careers opportunities in wellness education as well.
If your career test results are high in health and medical, you'll have many career options to choose from. There are a wide range of healthcare or wellness certifications or college degree programs to fit your needs. Certifications can take a few months, other programs can be completed in 1-2 years, or you can advance all the way up to a doctorate level degree. These career pathways can be pursued at vocational schools, community colleges, state colleges, or universities.

Health and medical prep courses may include: Anatomy, Biology, Human Biology, Kinesiology, Chemistry, Math, Physics, Medical Terminology, Developmental Psychology, Sociology, Pathology, Physiology, or Nutrition.

Example careers in health and medical field: Sonographer (Ultrasound Technician), Registered Nurse (RN), Certified Nursing Assistant (CNA), Licensed Practical Nurse (LPN), Radiographer (X-Ray Tech), Surgical Technologist, Dental Assistant, Dental Hygienist, Physical Therapist (PT), PT Assistant, Occupational Therapist (OT), OT Assistant, Speech Therapist, Doctor/Surgeon, Emergency Medical Technician (EMT), Medical Office/Record Assistant (transcriptionist), Clinical Lab Tech, Veterinarian, Medical Coder and Biller, Nutritionist or Dietitian, Fitness Training, Physician, and Recreational Therapy.
`
,
//**********************************************************************************
`
Overview: Career growth in the business and finance industry is not expected to slow. Every organization or company needs management, financial planning, or a logistical process to run their business and meet goals. If you love math and numbers there are more focused financial careers in business as well where you can manage, advise, or facilitate budgets, investments, or assets.

Business prep courses may include: Accounting, Statistics, Algebra, Introduction to Business, Finance, Micro/Macro Economics, Microcomputer Applications, Business Math, Business Law, or Marketing.

Example careers in business and finance: Executive Manager, Financial Clerk, Accountant, Purchasing Manager, Real Estate Agent, Economist, Actuary, Public Relations Manager, Logistician, Market Research Analyst, Human Resource Specialist, Food Service Manager, Loan Manager, Claims Adjuster, Advertising Manager, Financial Manager, Secretary, Office Manager, Accountant Technician, Appraiser, and Sales Agent.
`
,
//**********************************************************************************
`
Overview: Technology and media is an evolving, innovative, fast-paced career field to enter. There are constant technology changes and new trends that are sought or developed every day and this provides a wide variety of career opportunities. Technology careers can vary but job tasks can include providing cybersecurity, developing websites, creating mobile apps, providing computer support to employees, editing video or film footage, or even managing databases. Some career fields in technology have a faster than average career growth rate. However, keep in mind that because of the constant changes in technology you will need to keep your skill set up-to-date on the latest software and trends throughout your career to stay competitive.

Technology and media prep courses may include: Microcomputer Applications, Basic Database Development, Communication, Web Design, Graphic Design, Typing, Basic Programming, Art, Photography,Videography, Coding, Software Development, or Drawing.

Example careers in technology and media: Software Developer, Information Security Analyst, Database Administrator, Web Developer, Programmer Network Computer Systems Administrator, and Computer Support, Web Developer, Multimedia Artist and Animator, Industrial Designer, Photographer, Graphic Designer, Recording Arts (sound/music), Producer or Director, and Video Editor/Camera Operator.
`
,
//**********************************************************************************
`
Overview: Legal and public service careers are crucial for the protection, assistance, and fairness of our judicial system and members of our society. There are a wide variety of legal areas one can focus on as well. Examples include criminal law, constitutional law, property law, civil rights law, family or juvenile justice law, corporate law, copyright and trademark law, international law, environmental law, arbitration, and even sentencing. Public service careers may include fighting fires, tending to emergencies, investigating fraudulent claims, providing security, and even planning for natural disasters. Employment opportunities can be found in state, federal, or private sectors.

Law and public service prep courses include: First Aid, CPR, Legal Studies, Medical Terminology, Public Speaking, Ethics, Introduction to Criminology, Sociology, Psychology, American Government, or International Studies.

Example careers in law and public service include: Lawyer, Paralegal, Forensics (Crime Scene Investigation), Law Enforcement, Correctional Officer, Firefighter, Security Guard, Wildlife Officer, and Military, Fraud Investigator, Detective, Emergency Management Director, Judge, Court Reporter, and Police Officer.
`
,
//**********************************************************************************
`
Overview: The arts and culinary career category has a wide variety of career options such as painting, drawing, sculpting, theater, fashion design, videography, cooking, producing music, and even photography. There are art careers in museums, game development companies, film or video production houses, advertising agencies, and product design firms. The use of technology is also rapidly growing in this career field.

If you enjoy technology, you may enjoy an art career where job duties include the use of computer programs to design products, create layouts for websites and advertisements, and build animations and visual effects for films or music productions.

Art careers can also encompasses interior designer, acting, industrial design, or even fashion design. Also, if you love cooking or baking, you may find happiness in a career such as being a chef, baker or pastry chef, or cake decorator as these careers can also let you be creative and express yourself through your culinary creations.

Arts and/or culinary prep courses: English Composition, Drama, Theater, Film Production, Editing, Digital Art, Communications, Basic Video, Broadcasting, Photography, Art History, Business Math, Nutrition, Dance, Music, and Home Economics.

Example careers in the arts and culinary industry include: Fine Artist, Actor, Curator, Director, Chef, Pastry Chef, Baker, Writer, Singer, Artist, Film or Video Editor, Photographer, Fashion Designer, Graphic Designer, Cosmetologist, Dancer and Choreographer, and Theater Set Designer.
`
,
//**********************************************************************************
`
Overview: Careers in education are projected to grow because the number of school and college enrollments have increased drastically. Online education and continuing education also continues to increase as well due to the demand of consumers seeking to further their education and employers demanding their workforce stay current in their skills. Teaching goes beyond the traditional classroom as there are now opportunities to instruct and learn online, corporation training careers, and private tutoring services.

Education prep courses include: Introduction to Education, Children's Literature, Public Speaking, Developmental Psychology, Sociology, General Psychology, Children Psychology, and Business Management, Instructional Design, and Curriculum Development.

Example careers in education include: Teacher (school-aged through adult), School Counselor, Corporate Trainer, Principal, Teacher's Aide, Preschool Teacher or Director, GED Instructor, Special Education Teacher, and Postsecondary Administrator.
`
,
//**********************************************************************************
`
Overview: Employment in the communication career field is not expected to slow. Communication is virtually impossible to ignore; it is a way that people share or exchange important information or ideas in addition to providing entertainment to consumers. This career field encompasses face-to-face communications as well as virtual, written, and even broadcasted media. There are career opportunities that are behind the scenes and others where you will be in the public eye.

Communication prep courses include: Mass Communication, English Composition, Broadcasting, Microcomputer Applications, Public Speaking, Literature, Public Relations, Radio Production, Marketing, Research, Foreign Languages, and Digital Media.

Example careers in communications include: Marketing and Advertising, Sales, Public Relation Specialist, Fundraiser, Literature Teacher, Technical Writer, Editor, Librarian, Librarian Technician, Author, Reporter, and Interpreter/Translator.
`
,
//**********************************************************************************
`
Overview: Social science is a broad category that involves the social interactions and relationships among individuals and society. There are a variety of career opportunities that differ. These careers include helping those cope through life events or mental health issues to careers that contribute to research. You can also find careers that analyze world events and cultures.

Social science prep courses include: Government, Anthropology, Sociology, Psychology, Cultural Studies, World History, Political Science, Research, Ethics, Religion, Introduction to Philosophy, Art History, and Economics.

Example careers in social science include: Social Science Teacher, Social Worker, Psychologist, Sociologist, Substance Abuse Counselor, Social Service Community Manager, Anthropologist, Health Care Social Worker, Marriage Counselor, Industrial Organizational Psychologist, and Psychiatric Technician.
`
,
//**********************************************************************************
`
Overview: Science and Engineering careers coincide very closely. Engineering is a blend of both science and technology that leads to design, building, and the use of different structures or machines. Science is the study of physical, biological, chemical, and natural settings. According to the Bureau of Labor Statistics, there will also be a demand in many careers focused on alternative energy.

There are a number of career pathways you may consider when researching this career field. Some careers conduct research, others design structures, products, or machines, yet others establish solutions to hypothesis or even find medical cures for diseases.

Employment opportunities in the science and engineering industry may differ drastically. If you scored high in science and engineering be sure to research the varies careers available, their educational requirements, and the career's growth rate.

Science and engineering prep courses include: Chemistry, Algebra, Environmental Science, AutoCad, Biology, Oceanography, Building Construction, Statistics, Geology, Earth Science, Geography, Drafting, Woodworking, Physics, Physical Science, Calculus, and Trigonometry.

Example careers in science and engineering include: Geographer, Anthropologist, Archeologist, Oceanographer, Biochemist, Biophysicist, Environmental Scientist, Industrial Designer, Geoscientist, Marine Biologist, Chemist, Farmer/Rancher, Astronomer, Physicist, Architect, Land Surveyor, Wind Turbine Technician, Heavy Vehicle Technician, Engineer Technician, and Engineers (various).
`
,
//**********************************************************************************
`
Overview: Are you someone who learns by doing and are not necessarily interested in going to school for an extended period of time? A trade vocation may be the answer. Some careers have on-the-job training while others may less than a year in a certification program or a two-year degree. Many trade careers fall into the healthcare, business, law, engineering, and hospitality industries as well. If the career you are interested in requires or desires a certification of some sort, these training programs often focus solely on the tasks related to your field of choice. When looking into trade careers, be sure to review the educational or on-the-job requirements, salary, and growth rate. Some trade careers are fast growing and also offer high salaries as well.
`
], // end of one language
//**********************************************************************************
//**********************************************************************************

'en': [
`
Overview: The health and medical industry is not only one of the fastest growing career fields, but it's also known for having high paying salaries. Employment in health careers is expected to grow faster than average due to our aging population, new medical research, and the accessibility to health insurance. In addition to careers that help people overcome illness, injury, and disease, there has also been an increased focus on healthier eating and lifestyles. Therefore, there are health careers opportunities in wellness education as well.
If your career test results are high in health and medical, you'll have many career options to choose from. There are a wide range of healthcare or wellness certifications or college degree programs to fit your needs. Certifications can take a few months, other programs can be completed in 1-2 years, or you can advance all the way up to a doctorate level degree. These career pathways can be pursued at vocational schools, community colleges, state colleges, or universities.

Health and medical prep courses may include: Anatomy, Biology, Human Biology, Kinesiology, Chemistry, Math, Physics, Medical Terminology, Developmental Psychology, Sociology, Pathology, Physiology, or Nutrition.

Example careers in health and medical field: Sonographer (Ultrasound Technician), Registered Nurse (RN), Certified Nursing Assistant (CNA), Licensed Practical Nurse (LPN), Radiographer (X-Ray Tech), Surgical Technologist, Dental Assistant, Dental Hygienist, Physical Therapist (PT), PT Assistant, Occupational Therapist (OT), OT Assistant, Speech Therapist, Doctor/Surgeon, Emergency Medical Technician (EMT), Medical Office/Record Assistant (transcriptionist), Clinical Lab Tech, Veterinarian, Medical Coder and Biller, Nutritionist or Dietitian, Fitness Training, Physician, and Recreational Therapy.
`
,
//**********************************************************************************
`
Overview: Career growth in the business and finance industry is not expected to slow. Every organization or company needs management, financial planning, or a logistical process to run their business and meet goals. If you love math and numbers there are more focused financial careers in business as well where you can manage, advise, or facilitate budgets, investments, or assets.

Business prep courses may include: Accounting, Statistics, Algebra, Introduction to Business, Finance, Micro/Macro Economics, Microcomputer Applications, Business Math, Business Law, or Marketing.

Example careers in business and finance: Executive Manager, Financial Clerk, Accountant, Purchasing Manager, Real Estate Agent, Economist, Actuary, Public Relations Manager, Logistician, Market Research Analyst, Human Resource Specialist, Food Service Manager, Loan Manager, Claims Adjuster, Advertising Manager, Financial Manager, Secretary, Office Manager, Accountant Technician, Appraiser, and Sales Agent.
`
,
//**********************************************************************************
`
Overview: Technology and media is an evolving, innovative, fast-paced career field to enter. There are constant technology changes and new trends that are sought or developed every day and this provides a wide variety of career opportunities. Technology careers can vary but job tasks can include providing cybersecurity, developing websites, creating mobile apps, providing computer support to employees, editing video or film footage, or even managing databases. Some career fields in technology have a faster than average career growth rate. However, keep in mind that because of the constant changes in technology you will need to keep your skill set up-to-date on the latest software and trends throughout your career to stay competitive.

Technology and media prep courses may include: Microcomputer Applications, Basic Database Development, Communication, Web Design, Graphic Design, Typing, Basic Programming, Art, Photography,Videography, Coding, Software Development, or Drawing.

Example careers in technology and media: Software Developer, Information Security Analyst, Database Administrator, Web Developer, Programmer Network Computer Systems Administrator, and Computer Support, Web Developer, Multimedia Artist and Animator, Industrial Designer, Photographer, Graphic Designer, Recording Arts (sound/music), Producer or Director, and Video Editor/Camera Operator.
`
,
//**********************************************************************************
`
Overview: Legal and public service careers are crucial for the protection, assistance, and fairness of our judicial system and members of our society. There are a wide variety of legal areas one can focus on as well. Examples include criminal law, constitutional law, property law, civil rights law, family or juvenile justice law, corporate law, copyright and trademark law, international law, environmental law, arbitration, and even sentencing. Public service careers may include fighting fires, tending to emergencies, investigating fraudulent claims, providing security, and even planning for natural disasters. Employment opportunities can be found in state, federal, or private sectors.

Law and public service prep courses include: First Aid, CPR, Legal Studies, Medical Terminology, Public Speaking, Ethics, Introduction to Criminology, Sociology, Psychology, American Government, or International Studies.

Example careers in law and public service include: Lawyer, Paralegal, Forensics (Crime Scene Investigation), Law Enforcement, Correctional Officer, Firefighter, Security Guard, Wildlife Officer, and Military, Fraud Investigator, Detective, Emergency Management Director, Judge, Court Reporter, and Police Officer.
`
,
//**********************************************************************************
`
Overview: The arts and culinary career category has a wide variety of career options such as painting, drawing, sculpting, theater, fashion design, videography, cooking, producing music, and even photography. There are art careers in museums, game development companies, film or video production houses, advertising agencies, and product design firms. The use of technology is also rapidly growing in this career field.

If you enjoy technology, you may enjoy an art career where job duties include the use of computer programs to design products, create layouts for websites and advertisements, and build animations and visual effects for films or music productions.

Art careers can also encompasses interior designer, acting, industrial design, or even fashion design. Also, if you love cooking or baking, you may find happiness in a career such as being a chef, baker or pastry chef, or cake decorator as these careers can also let you be creative and express yourself through your culinary creations.

Arts and/or culinary prep courses: English Composition, Drama, Theater, Film Production, Editing, Digital Art, Communications, Basic Video, Broadcasting, Photography, Art History, Business Math, Nutrition, Dance, Music, and Home Economics.

Example careers in the arts and culinary industry include: Fine Artist, Actor, Curator, Director, Chef, Pastry Chef, Baker, Writer, Singer, Artist, Film or Video Editor, Photographer, Fashion Designer, Graphic Designer, Cosmetologist, Dancer and Choreographer, and Theater Set Designer.
`
,
//**********************************************************************************
`
Overview: Careers in education are projected to grow because the number of school and college enrollments have increased drastically. Online education and continuing education also continues to increase as well due to the demand of consumers seeking to further their education and employers demanding their workforce stay current in their skills. Teaching goes beyond the traditional classroom as there are now opportunities to instruct and learn online, corporation training careers, and private tutoring services.

Education prep courses include: Introduction to Education, Children's Literature, Public Speaking, Developmental Psychology, Sociology, General Psychology, Children Psychology, and Business Management, Instructional Design, and Curriculum Development.

Example careers in education include: Teacher (school-aged through adult), School Counselor, Corporate Trainer, Principal, Teacher's Aide, Preschool Teacher or Director, GED Instructor, Special Education Teacher, and Postsecondary Administrator.
`
,
//**********************************************************************************
`
Overview: Employment in the communication career field is not expected to slow. Communication is virtually impossible to ignore; it is a way that people share or exchange important information or ideas in addition to providing entertainment to consumers. This career field encompasses face-to-face communications as well as virtual, written, and even broadcasted media. There are career opportunities that are behind the scenes and others where you will be in the public eye.

Communication prep courses include: Mass Communication, English Composition, Broadcasting, Microcomputer Applications, Public Speaking, Literature, Public Relations, Radio Production, Marketing, Research, Foreign Languages, and Digital Media.

Example careers in communications include: Marketing and Advertising, Sales, Public Relation Specialist, Fundraiser, Literature Teacher, Technical Writer, Editor, Librarian, Librarian Technician, Author, Reporter, and Interpreter/Translator.
`
,
//**********************************************************************************
`
Overview: Social science is a broad category that involves the social interactions and relationships among individuals and society. There are a variety of career opportunities that differ. These careers include helping those cope through life events or mental health issues to careers that contribute to research. You can also find careers that analyze world events and cultures.

Social science prep courses include: Government, Anthropology, Sociology, Psychology, Cultural Studies, World History, Political Science, Research, Ethics, Religion, Introduction to Philosophy, Art History, and Economics.

Example careers in social science include: Social Science Teacher, Social Worker, Psychologist, Sociologist, Substance Abuse Counselor, Social Service Community Manager, Anthropologist, Health Care Social Worker, Marriage Counselor, Industrial Organizational Psychologist, and Psychiatric Technician.
`
,
//**********************************************************************************
`
Overview: Science and Engineering careers coincide very closely. Engineering is a blend of both science and technology that leads to design, building, and the use of different structures or machines. Science is the study of physical, biological, chemical, and natural settings. According to the Bureau of Labor Statistics, there will also be a demand in many careers focused on alternative energy.

There are a number of career pathways you may consider when researching this career field. Some careers conduct research, others design structures, products, or machines, yet others establish solutions to hypothesis or even find medical cures for diseases.

Employment opportunities in the science and engineering industry may differ drastically. If you scored high in science and engineering be sure to research the varies careers available, their educational requirements, and the career's growth rate.

Science and engineering prep courses include: Chemistry, Algebra, Environmental Science, AutoCad, Biology, Oceanography, Building Construction, Statistics, Geology, Earth Science, Geography, Drafting, Woodworking, Physics, Physical Science, Calculus, and Trigonometry.

Example careers in science and engineering include: Geographer, Anthropologist, Archeologist, Oceanographer, Biochemist, Biophysicist, Environmental Scientist, Industrial Designer, Geoscientist, Marine Biologist, Chemist, Farmer/Rancher, Astronomer, Physicist, Architect, Land Surveyor, Wind Turbine Technician, Heavy Vehicle Technician, Engineer Technician, and Engineers (various).
`
,
//**********************************************************************************
`
Overview: Are you someone who learns by doing and are not necessarily interested in going to school for an extended period of time? A trade vocation may be the answer. Some careers have on-the-job training while others may less than a year in a certification program or a two-year degree. Many trade careers fall into the healthcare, business, law, engineering, and hospitality industries as well. If the career you are interested in requires or desires a certification of some sort, these training programs often focus solely on the tasks related to your field of choice. When looking into trade careers, be sure to review the educational or on-the-job requirements, salary, and growth rate. Some trade careers are fast growing and also offer high salaries as well.
`
] // end of a language

};


const submitError = {
    'ro': 'Eroare! Te rog raspunde la toate intrebarile',
    'en': 'Error! Please answer all the questions'
}


const relations = [
    3, 1, 9, 1, 2,
    4, 2, 3, 1, 3,
   10, 4, 4, 4, 2,
    5, 5, 2, 5, 6,
    6, 6, 7, 7, 7,
    7, 6, 8, 10, 8,
    8, 9, 9, 1, 9,
    5, 10, 8, 10, 3
]

const handleSubmit = function (e) {

    var input,
        answerIndex,
        answers = [],
        lang = this.props.lang;
    const inputs = document.querySelectorAll('input');

    e.preventDefault();

    // Scroll smootly to bottom, to see the chart:
    var scrollElem = document.body;
    var start = scrollElem.scrollTop;

    function scroll (position) {
        setTimeout(function() {
            scrollElem.scrollTop = start + position;
        }, 50 + position*5);
    }
    for (var position = start; position < start + 150; position += 3) {
        scroll(position - start);
    }


    for (let i = 0; i < inputs.length; i++) {
        input = inputs[i];
        answerIndex = input.getAttribute('id');

        input.checked && answers.push(answerIndex);
    }


    if (answers.length !== questions[lang].length) {
        console.log("Please answer ALL the questions");
        this.setState({
            error: submitError[lang]
        })
    } else {
        this.setState({
            points: calculateScore(answers, lang),
            error: ''
        })
    }
}

function calculateScore (answers, lang) {
    var points = {},
        questionFieldIndex;

    // Initialize points for each field:
    fields[lang].map((field, index) => {
        points[index] = 0;
        return;
    });

    answers.forEach((answerIndex, questionIndex) => {
        questionFieldIndex =  relations[questionIndex] - 1;

        points[questionFieldIndex] += (3 - answerIndex); // Each favorable answer has a rating from 0 to 3
    })

    console.log(points);

    // Transform  the points into a percentage
    var points_percent = {};
    Object.keys(points).map(function(key) {
        // Only count the fields with at least one point
        if (points[key]) {
            points_percent[key] = Math.round(points[key]/12*10000)/100; // 12 is the maximum points of a field
        }
        return;
    });

    return points_percent;
}

class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            points: {},
            error: ''
        }
    }

    render() {

        var lang = this.props.lang;

        return (
            <div>
                <form className="Form">
                    {questions[lang].map((question, index1) =>
                        <div key={index1}>
                            <h3 className="question">{index1 + 1}. {question}</h3>
                            <div className="options-group">
                                {options[lang].map((option, index2) =>
                                    <label className="option" key={index2}>
                                        <input type="radio" name={'question' + index1} id={index2} value={option}></input>
                                        <span>{option}</span>
                                    </label>
                                )}
                            </div>
                        </div>
                    )}

                    <button className='submit-button' onClick={handleSubmit.bind(this)}>
                        Submit
                    </button>

                    {this.state.error &&
                        <div className="error">
                            {this.state.error}
                        </div>
                    }

                </form>

                <Answer
                    points={this.state.points}
                    lang={lang}>
                </Answer>
            </div>
        )
    }
}

export default Form;

class Answer extends Component {

    render() {

        var lang = this.props.lang;

        return (
            <div className='points'>
                {Object.keys(this.props.points).sort(function (a, b) {
                    return this.props.points[a] < this.props.points[b];
                }.bind(this)).map(function (fieldIndex, index)  {
                    return (
                        <div className='field' key={index}>
                            <div className='field-title'>
                                {fields[lang][fieldIndex] + ' : ' + this.props.points[fieldIndex] + '%'}
                            </div>
                            <hr></hr>
                            <div className='field-more'>
                                {moreInfo[lang][fieldIndex].split("\n").map((i, index) => {
                                    return <div key={index}>{i}</div>;
                                })}
                            </div>
                        </div>
                    )
                }.bind(this))
                }
            </div>
        )
    }
}
