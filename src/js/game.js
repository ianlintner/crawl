(function() {
  'use strict';

  function Game() {}

  Game.prototype = {
    create: function () {
      this.input.onDown.add(this.onInputDown, this);
      this.add.sprite(0, 0, 'knight');
    },

    update: function () {

    },

    onInputDown: function () {
      this.game.state.start('menu');
    }
  };

  window['crawl'] = window['crawl'] || {};
  window['crawl'].Game = Game;
}());
