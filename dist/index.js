/*!
 * name: @jswork/jquery-totop
 * description: jQuery plugin for back to top.
 * homepage: https://github.com/afeiship/jquery-totop
 * version: 1.0.1
 * date: 2020-12-17 16:31:50
 * license: MIT
 */

(function ($, nx, global) {
  var TO_TOP_HTML = '<div class="jquery-totop"><span>返回顶部</span></div>';

  var Widget = nx.declare({
    statics: {
      options: { interval: 300 }
    },
    methods: {
      init: function (inOptions) {
        this.options = $.extend({}, Widget.options, inOptions);
        this.inject();
        this.elements();
        this.events();
      },
      elements: function () {
        this.$root = $('.jquery-totop');
        this.$docRoot = $('body,html');
      },
      events: function () {
        var self = this;
        this.$root.click(function () {
          self.totop();
        });
      },
      totop: function () {
        this.$docRoot.animate({ scrollTop: 0 }, this.options.interval);
      },
      inject: function () {
        if (!this.$root.length) {
          var $html = $(TO_TOP_HTML);
          $(document.body).append($html);
        }
      }
    }
  });

  $.fn.totop = function (inOptions) {
    new Widget(inOptions);
  };
})($, nx, nx.GLOBAL);
