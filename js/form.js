const submitBtn = document.querySelector('#mailBtn');

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const urlObject = new URL("https://script.google.com/macros/s/AKfycbyPvws7EcmA-GDPEb_yaWRvq2VW5lBexnbTCxhkShYqlV-Ya5LwpVAaBI7N7g13iciY-Q/exec");

    const name_ = document.querySelector('.mailname').value;
    const mail_ = document.querySelector('.mailmail').value;
    const phone_ = document.querySelector('.mailphone').value;
    const message_ = document.querySelector('.mailmess').value;

    urlObject.searchParams.set("name", name_);
    urlObject.searchParams.set("mail", mail_);
    urlObject.searchParams.set("phone", phone_);
    urlObject.searchParams.set("message", message_);
    urlObject.searchParams.set("note", "Website");

    fetch(urlObject.toString());
});