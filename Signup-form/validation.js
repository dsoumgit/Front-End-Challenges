function submit(evt) {
    // get first name value 
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value; 
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var obj = {
      fname: firstName,
      lname: lastName,
    //  email: email,
      password: password
    };

    // validate email 
    let regEx = /^[\w.-]+@(?=[a-z\d][^.]*\.)[a-z\d.-]*[^.]$/;
    
    if (email.match(regEx)) {
      // display icon error 
      document.querySelector('.icon-error.email').style.display = 'none';
      // display icon error 
      document.querySelector('.error.email').style.display = 'none';
    } else {
      // display icon error 
      document.querySelector('.icon-error.email').style.display = 'block';
      document.querySelector('.error.email').style.display = 'block';
    } 


    for (let i in obj) {

      if (obj[i] === '') {
        // display icon error 
        document.querySelector('.icon-error.' + i).style.display = 'block';

        document.querySelector('.error.' + i).style.display = 'block';
      } else {
        // display icon error 
        document.querySelector('.icon-error.' + i).style.display = 'none';

        document.querySelector('.error.' + i).style.display = 'none';

      }
    }
  }