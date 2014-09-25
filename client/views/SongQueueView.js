// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'add', this.playAndRender);
    this.listenTo(this.collection, 'remove', this.playAndRender, this);
    this.listenTo(this.collection, 'change', this.playNextSong, this);
  },

  playNextSong: function(model) {
    var currentIndex = this.collection.indexOf(model);
    if (this.collection.models[currentIndex + 1]) {
      this.collection.models[currentIndex + 1].play();
    } else {
      this.collection.models[0].play();
    }
    this.render();
  },

  playAndRender: function() {
    this.collection.playOnly();
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
