// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'add', this.playFirst);
    this.listenTo(this.collection, 'remove', this.playFirst);
  },
  events:{},

  playFirst: function(){
    if (this.collection.length > 0) {
      this.collection.models[0].play();
    }
    this.render();
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
