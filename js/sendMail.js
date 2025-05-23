function sendMail() {
  var xhttp = new XMLHttpRequest();
  var htmlBody, user_email, user_name, user_questions, data;
  user_name = document.getElementById("name").value;
  user_email = document.getElementById("email").value;
  user_questions = document.getElementById("questions").value;
  htmlBody = `Hi the following user has some questions regarding the app: <br> <strong>Name: </strong>${user_name}<br> <strong>Email: </strong>${user_email}<br> <strong>URL: </strong>${window.location.href}<br> <strong>Questions: </strong>${user_questions}`;
  data = {
    fromEmail: "appquery@freevpnapp.org",
    subject: "Query regarding our app.",
    body: "User has the some query regarding our app.",
    htmlBody: htmlBody,
    secret: "b3h0ldTh3w0rmh0l3",
    recipients: "support@freevpnusapp.com",
  };

  $.post(
    'https://dashnet3.cdn42.ch/api/dataplanes/send_mail_to_recipient',
    data,
    function (result) {
      console.log(result);
      if (result.status === 'ok') {
        document.getElementById('contactform').reset();
        document.getElementById('alertSuccess').classList.add('active');
        setTimeout(removeAlertSuccess, 3000);
      } else {
        document.getElementById('alertDanger').classList.add('active');
        setTimeout(removeDangerSuccess, 3000);
      }
    }
  );
}

function removeAlertSuccess() {
  document.getElementById("alertSuccess").classList.remove("active");
}

function removeDangerSuccess() {
  document.getElementById("alertDanger").classList.remove("active");
}
