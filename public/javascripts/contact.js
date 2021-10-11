
console.log('Form is working fine')
$(document).ready(function () {
 $('.submitmsg').click(function (event) {
    console.log('Button clicked')

    var email = $('.email').val()
    var subject = $('.subject').val()
    var message = $('.message').val()
    var statusElm = $('.mailstatus')
    statusElm.empty()

    if(email.length > 5 && email.includes('@') && email.includes('.')){
       statusElm.append('<div>Email is valid</div>')
    }else{
      event.preventDefault()
      statusElm.append('<div>Email is not valid</div>')

    }

    if(subject.length > 1) {
       statusElm.append('<div>Subject is valid</div>')
    } else{
      event.preventDefault()
      statusElm.append('<div>Subject is not valid</div>')
    }

    if(message.length >= 5){
      statusElm.append('<div>Message is valid</div>')
    } else{
      event.preventDefault()
      statusElm.append('<div>Message is not valid</div>')
    }
 })
})