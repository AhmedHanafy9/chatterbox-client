// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.
    let url = window.location.search;
    let urlSplit = url.split('=');
    let username = urlSplit[1];
    let text = document.getElementById('message').value;
    let roomname = RoomsView.$select.find(':selected').val();
    let message = {
      username: username,
      text: text,
      roomname: roomname
    };

    Parse.create(message, ()=>{});

    MessagesView.initialize();

    $('#send')[0].reset();

    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};