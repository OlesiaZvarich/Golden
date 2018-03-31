

function validate() {
    var formElem = document.forms.registration.elements;

    for (var i = 0; i < formElem.length; i++) {
        if (formElem[i].name === 'name' || formElem[i].name === 'email' || formElem[i].name === 'message') {
            if (formElem[i].value == '') {
                formElem[i].style.borderColor = 'red';

            } else {
                formElem[i].style.borderColor = 'green';
                if (formElem[i].style.borderColor = 'green') {
                    $('#error').html('')

                }
            }
        }
    }
}


