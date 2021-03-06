// Document Listeners
let generateBtn = document.querySelector('#submitBtn');
let outPutText = document.getElementById('outputPassword');
let numLength = document.querySelector('#numlengthTest');
let lowercaseSelect = document.getElementById('lowercase');
let uppercaseSelect = document.getElementById('uppercase');
let numericSelect = document.getElementById('numeric');
let specialSelect = document.getElementById('specialCharacters');

// Start -- Main button
generateBtn.addEventListener('click', writePassword);

// Creates a password.
function generatePassword() {
  let lowerCaseStr = 'abcdefghijklmnopqrstuvwxyz';
  let upperCaseStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let numericStr = '1234567890';
  let specialStr = '!@#$%&';
  let testStr = '';
  let genPass = '';

  // Function takes in
  // 1. length 8 -- 128MAX? Validation If NOT VALID alert and ignore.
  if (!numLength.checkValidity() || numLength === null) {
    window.alert(`Invalid input please input a number between 8 - 128.`);
  } else {
    // Since it's a valid numeric entry continue...

    // 2. Check if lowercase checkbox is checked
    if (lowercaseSelect.checked) {
      testStr += lowerCaseStr;
    }
    // 3. UPPERCASE
    if (uppercaseSelect.checked) {
      testStr += upperCaseStr;
    }
    // 4. Numeric
    if (numericSelect.checked) {
      testStr += numericStr;
    }
    // 5. Special characters
    if (specialSelect.checked) {
      testStr += specialStr;
    }
  }
  // Validate -> At least 1 type should be selected
  if (testStr === '') {
    window.alert(`You must select at least one of the checkboxes`);
  } else {
    for (let i = 1; i < numLength.value; i++) {
      // get a random number (index) based on str length
      let char = Math.floor(Math.random() * testStr.length + 1);

      // Push that random index chracter into genPass
      genPass += testStr.charAt(char);
    }
  }

  // return
  return genPass;
  // Finally generate and return Password.
}

// Copies on click
function onClickCopy() {
  // Redudant to not get referenced,
  let textToCopy = document.getElementById('outputPassword');

  textToCopy.select();
  textToCopy.setSelectionRange(0, 300);
  document.execCommand('copy');
  window.alert(`Copied the password to your clipboard: ${textToCopy.value}`);

  return;
}

// Write password to the #password input
function writePassword(e) {
  e.preventDefault();

  var password = generatePassword();
  // if return empty aka failed
  if (password === '') {
    password = 'Invalid Entries Try Again.';
  }
  var passwordText = document.querySelector('#outputPassword');

  passwordText.value = password;
}

document
  .getElementById('outputPassword')
  .addEventListener('click', onClickCopy);
