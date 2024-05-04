const form = document.getElementById('form');
const customAlert = document.getElementById('customAlert');
const firstName = document.getElementById('firstname');
const middleName = document.getElementById('middlename');
const surName = document.getElementById('surname');
const genderMale = document.getElementById('male');
const genderFemale = document.getElementById('female');
const birthDay  = document.getElementById('birthday');
const address = document.getElementById('address');
const yearLevel = document.getElementById('year-Level');
const academicStrand = document.getElementById('academic-Strand');
const emailAdd = document.getElementById('emailadd');
const phoneNum = document.getElementById('phone');
const learnersNum = document.getElementById('lrn');
const nationality = document.getElementById('Nationality');
const religion = document.getElementById('Religion');
const ethnicity = document.getElementById('Ethnicity');
const NativeLanguage = document.getElementById('nativeLanguage');


form.addEventListener('submit', function(e) {
    e.preventDefault();

    const firstNameValue = firstName.value;
    const middleNameValue = middleName.value;
    const surNameValue = surName.value;

    let genderValue = '';
    if (genderMale.checked) {
        genderValue = genderMale.value;
    } else if (genderFemale.checked) {
        genderValue = genderFemale.value;
    }
    
    const birthDayValue = birthDay.value;
    const addressValue = address.value;
    const yearLevelValue = yearLevel.value;
    const academicStrandValue = academicStrand.value;
    const emailAddValue = emailAdd.value;
    const phoneNum = document.getElementById('phone').value;
    const learnersNum = document.getElementById('lrn').value;
    const nationality = document.getElementById('Nationality').value;
    const religion = document.getElementById('Religion').value;
    const ethnicity = document.getElementById('Ethnicity').value;
    const NativeLanguage = document.getElementById('nativeLanguage').value;
    


    if (firstNameValue && middleNameValue && surNameValue && genderValue && birthDayValue && addressValue && yearLevelValue && academicStrandValue && emailAddValue) {

        localStorage.setItem('first-name', firstNameValue);
        localStorage.setItem('middle-name', middleNameValue);
        localStorage.setItem('surname', surNameValue);
        localStorage.setItem('gender', genderValue);
        localStorage.setItem('birthday', birthDayValue);
        localStorage.setItem('address', addressValue);
        localStorage.setItem('year-Level', yearLevelValue);
        localStorage.setItem('academic-Strand', academicStrandValue);
        localStorage.setItem('email-add', emailAddValue);
        localStorage.setItem('phone', phoneNum);
        localStorage.setItem('learners-number', learnersNum);
        localStorage.setItem('nationality', nationality);
        localStorage.setItem('religion', religion);
        localStorage.setItem('ethnicity', ethnicity);
        localStorage.setItem('native-language', NativeLanguage);

        showAlert('Form submitted successfully!');
        setTimeout(function() {
            window.location.href = "Details.html";
        }, 2000);
    } else {
        showAlert('Please complete filling up form');
    }
});

function showAlert(message) {
    const alertContent = customAlert.querySelector('.alert-content');
    alertContent.innerHTML = `
        <span class="close-btn" onclick="hideAlert()">&times;</span>
        <h2>NOTICE!</h2>
        <p>${message}</p>
        <button onclick="hideAlert()">OK</button>
    `;
    customAlert.style.display = 'block';
}

function hideAlert() {
    customAlert.style.display = 'none';
}

