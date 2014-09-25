// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.listenTo(this, 'add', this.playFirst);
    this.listenTo(this, 'remove', this.playFirst);
    this.listenTo(this, 'change', this.playNextSong);
  },

  playFirst: function(){
    if (this.length === 1) {
      this.models[0].play();
    }
  },

  playNextSong: function(model) {
    var currentIndex = this.indexOf(model);
    if (this.models[currentIndex + 1]) {
      this.models[currentIndex + 1].play();
    } else {
      this.models[0].play();
    }
  }
});
