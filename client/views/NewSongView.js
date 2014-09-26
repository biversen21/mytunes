var NewSongView = Backbone.View.extend({
  el: '.formContainer',

  initialize: function(){
    // this.listenTo(this.router, 'addNewSong', this.render);
  },

  // template: _.template($('#newSongTemplate').html()),
  template: _.template('<form class="newSongForm"><label>Song title</label><input type="text" name="title"></input><label>Artist</label><input type="text" name="artist"></input><label>URL</label><input type="text" name="url"></input><input type="submit" ></form>'),

  render: function(){
    this.$el.append(this.template);
  }

});
