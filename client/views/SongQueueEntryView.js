// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',

  template: _.template('<td class="playSong">(<%= artist %>)</td><td class="playSong"><%= title %></td><td><%= played %></td><td><img id="closeButton" src="images/close.jpeg" /></td>'),

  events: {
    'click #closeButton': function() {
      var playing = $('.title').text();
      if (this.model.get('title') === playing){
        this.model.trigger('change', this.model);
      }
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
