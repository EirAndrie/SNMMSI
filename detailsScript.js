const firstName = localStorage.getItem('first-name');
const middleName = localStorage.getItem('middle-name');
const surName = localStorage.getItem('surname');
const gender = localStorage.getItem('gender');
const birthDay = localStorage.getItem('birthday');
const address = localStorage.getItem('address');
const yearLevel = localStorage.getItem('year-Level');
const academicStrand = localStorage.getItem('academic-Strand');
const emailAdd = localStorage.getItem('email-add');
const phoneNum = localStorage.getItem('phone');
const learnersNum = localStorage.getItem('learners-number');
const nationality = localStorage.getItem('nationality');
const religion = localStorage.getItem('religion');
const ethnicity = localStorage.getItem('ethnicity');
const NativeLanguage = localStorage.getItem('native-language');


document.getElementById('first-name').textContent = firstName;
document.getElementById('middle-name').textContent = middleName;
document.getElementById('surname').textContent = surName;
document.getElementById('gender').textContent = gender;
document.getElementById('birthday').textContent = birthDay;
document.getElementById('address').textContent = address;
document.getElementById('year-level').textContent = yearLevel;
document.getElementById('academic-strand').textContent = academicStrand;
document.getElementById('email-add').textContent = emailAdd;
document.getElementById('phone-number').textContent = phoneNum;
document.getElementById('LRN-number').textContent = learnersNum;
document.getElementById('nationality').textContent = nationality;
document.getElementById('religion').textContent = religion;
document.getElementById('ethnicity').textContent = ethnicity;
document.getElementById('native-lang').textContent = NativeLanguage;

