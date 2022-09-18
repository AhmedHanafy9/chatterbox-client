// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    Rooms._retrieve(() => {
      RoomsView.render();
    });
    RoomsView.$select.on('change', () => {
      let roomSelected = RoomsView.$select.find(':selected').val();
      RoomsView.handleChange(roomSelected);
    });
    RoomsView.$button.on('click', () => {
      let newRoom = (prompt('Name of New Room') || null);
      RoomsView.handleClick(newRoom);
    });
  },

  render: function() {
    // TODO: Render out the list of rooms.
    let $defaultSelect = $('<option value="" selected disabled hidden>Choose Room Here</option>');
    RoomsView.$select.append($defaultSelect);
    let rooms = Rooms._data;
    for (room of rooms) {
      RoomsView.renderRoom(room);
    }
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    let $option = $('<option/>');
    $option.html(roomname);
    RoomsView.$select.append($option);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    let filtered = _.filter(Messages._data, function(message) {
      return message.roomname === event;
    });
    filteredMessages = {};
    _.extend(filteredMessages, filtered);
    MessagesView.$chats.html('');
    MessagesView.render(filteredMessages);
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    Rooms.add(event);
  }

};
