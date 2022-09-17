// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    Messages._retrieve();
    MessagesView.render();
  },

  render: function() {
    let messages = Messages._messages();
    for (let key in messages) {
      MessagesView.renderMessage(messages[key]);
    }
  },

  renderMessage: function(message) {
    let html = '';
    html += MessageView.render(message);
    $chats.append(html);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};