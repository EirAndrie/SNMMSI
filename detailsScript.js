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

document.addEventListener("DOMContentLoaded", function() {
    const uploaded_image = localStorage.getItem("uploadedImage"); // Retrieve image URL from localStorage
    if (uploaded_image) {
      const img = new Image();
      img.src = uploaded_image;

      img.onload = function() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        canvas.width = 144;
        canvas.height = 144;

        ctx.drawImage(img, 0, 0, 144, 144);

        const resizedImageURL = canvas.toDataURL('image/jpeg', 0.7);

        document.querySelector("#display_image").style.backgroundImage = `url(${resizedImageURL})`;
      };
    } else {
      document.querySelector("#display_image").textContent = "No image uploaded.";
    }
  });