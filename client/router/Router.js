var Router = Backbone.Router.extend({
  routes : {
    '': 'home',
    '#newSong': function(){
      console.log('triggered');
      this.trigger('addNewSong');
    },
    'playlist:id': 'changePlayList'
  },
});

