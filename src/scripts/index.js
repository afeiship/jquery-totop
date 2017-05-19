(function ($, nx, global) {

  var Widget = nx.declare({
    statics: {
      options: {
        interval: 300
      }
    },
    methods: {
      init: function (inOptions) {
        this.options = $.extend({}, Widget.options, inOptions);

        this.inject();
        this.elements();
        this.attachEvents();
      },
      elements: function () {
        this.$root = $('.jquery-totop');
        this.$docRoot = $('body,html');
      },
      attachEvents: function () {
        var self = this;
        this.$root.click(function () {
          self.totop();
        });
      },
      totop: function () {
        this.$docRoot.animate({
          scrollTop: 0
        }, this.options.interval);
      },
      inject: function () {
        var $html = $('<div class="jquery-totop"><span>返回顶部</span></div>');
        $(document.body).append($html);
      }
    }
  });


  $.fn.totop = function (inOptions) {
    new Widget(inOptions);
  };

}($, nx, nx.GLOBAL));

