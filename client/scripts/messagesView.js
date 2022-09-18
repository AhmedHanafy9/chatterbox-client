// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.$chats.html('');
    Messages._retrieve(() => {
      MessagesView.render();
    });
    $(document).on('click', '.username', function(event) {
      let username = $(this).text();
      MessagesView.handleClick(username);
    });
  },

  render: function(data = Messages._data) {
    // TODO: Render _all_ the messages.
    for (let key in data) {
      MessagesView.renderMessage(data[key]);
    }
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    let html = '';
    html += MessageView.render(message);
    MessagesView.$chats.append(html);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    Friends.add(event);
  }

};