// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()
require("jquery")

$(document).on("ajax:success", "#new_message", (response, status, xhr) =>{
    console.log(response);
    console.log(status);
    console.log(xhr);
    alert('Form submitted, thank you!');
}).on("ajax:error", "#new_message", (response, status, xhr) => {
    console.log(response);
    console.log(status);
    console.log(xhr);
    alert('Error submitted form!');
});

$(document).on("ajax:success", (event)=> {
    console.log('teste');
    const [data, status, xhr] = event.detail;
    console.log(data);
    console.log(status);
    console.log(xhr);
})
