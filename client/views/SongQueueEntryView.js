// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',

  template: _.template('<td class="playSong">(<%= artist %>)</td><td class="playSong"><%= title %></td><td><img id="closeButton" src="images/close.jpeg" /></td>'),

  events: {
    'click #closeButton': function() {
      this.model.dequeue();
    },
    'click .playSong': function(){
      this.model.play();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
