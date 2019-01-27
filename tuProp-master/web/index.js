function sendInformation() {
    const name = document.getElementById('txtName').value;
    const email = document.getElementById('txtEmail').value;
    const phone = document.getElementById('nmbPhone').value;
    const detalle = document.getElementById('txtDetail').value;

    const leads = {
        name,
        email,
        phone,
        detalle
    }

    console.log(leads);
}