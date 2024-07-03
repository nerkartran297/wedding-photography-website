const submitBtn = document.querySelector('#mailBtn');

submitBtn.addEventListener('submit', () => {
    const urlObject = new URL("https://script.google.com/macros/s/AKfycbyqs1upJ111FDObhzGsvhxz0oxNQSAIfbN_e0zsWNebsYTSg79RKAc5HBhFyE5GR7s49A/exec");

    const name = document.querySelector('.mailname').value;
    const mail = document.querySelector('.mailmail').value;
    const phone = document.querySelector('.mailphone').value;
    const message = document.querySelector('.mailmess').value;

    urlObject.searchParams.set("Tên khách hàng", name);
    urlObject.searchParams.set("Email", mail);
    urlObject.searchParams.set("Số điện thoại", phone);
    urlObject.searchParams.set("Lời nhắn", message);
    urlObject.searchParams.set("Ghi chú", "Liên hệ từ website");

    fetch(urlObject.toString());
});