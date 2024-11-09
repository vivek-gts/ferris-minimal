this.Template = (function() {
  function Template(el, pageChange, wait) {
    if (pageChange == null) {
      pageChange = false;
    }
    if (wait == null) {
      wait = false;
    }
    this.destroyDefer = $.Deferred();
    this.pageChange = pageChange;
    this.el = $(el);
    $("#views-container").append(this.el);
    if (!wait) {
      this.load();
    }
  }

  Template.prototype.pageReady = function() {};

  Template.prototype.created = function() {
    return this.el.css({
      opacity: 0,
      display: 'block',
      visibility: 'visible'
    });
  };

  Template.prototype.load = function() {
    var defer;
    defer = $.Deferred();
    this.created();
    this.pageReady();
    this.animateIn(defer);
    return defer.promise();
  };

  Template.prototype.destroyed = function() {
    $('html,body').scrollTop(0);
    this.el.find('video').each(function() {
      var video;
      video = $(this);
      video[0].pause();
      video[0].src = '';
      video[0].load();
      video.children('source').prop('src', '');
      return video.remove().length = 0;
    });
    return this.el.remove();
  };

  Template.prototype.animateIn = function(defer) {
    if (defer == null) {
      defer = null;
    }
    $('html,body').scrollTop(0);
    return this.el.animate({
      opacity: 1
    }, 1, (function(_this) {
      return function() {
        return defer != null ? defer.resolve() : void 0;
      };
    })(this));
  };

  Template.prototype.destroy = function(playAnimation) {
    if (playAnimation == null) {
      playAnimation = true;
    }
    that = this 
    if (playAnimation) {
      setTimeout(function(){
        that.el.animate({
          opacity: 0
        }, 1, (function(that) {
          return function() {
            that.destroyed();
            return that.destroyDefer.resolve();
          };
        })(that));
      }, 700)
    }
    return this.destroyDefer.promise();
  };

  return Template;

})();