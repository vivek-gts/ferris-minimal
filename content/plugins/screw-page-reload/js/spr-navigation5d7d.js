this.Navigation = (function() {
  function Navigation() {
    var pageElement;
    this.currentPath = window.location.pathname + window.location.search;
    this.websiteHost = window.location.hostname;
    pageElement = $("#views-container .page-view").first();
    this.currentTemplate = this.toClassName(pageElement.attr("class"));
    this.currentPage = new window[this.currentTemplate](pageElement);
    this.lockNavigation();
    this.backEventListener();
    this.hostname = window.location.hostname;
    this.inProgress = false;
  }

  Navigation.prototype.backEventListener = function() {
    return window.onpopstate = (function(_this) {
      return function(e) {
        e.preventDefault();
        if (window.location.hostname === _this.hostname) {
          return _this.goTo(window.location.pathname + window.location.search, null, false, true);
        }
      };
    })(this);
  };

  Navigation.prototype.getLocation = function(href) {
    var l;
    l = document.createElement('a');
    l.href = href;
    return l;
  };

  Navigation.prototype.toClassName = function(str) {
    return _.reject(str.replace(/page-view/, '').replace(/\s{2,}/g, ' ').split(' '), function(item) {
      return item === "";
    })[0].replace(/(-|_)([a-z])/g, function(g) {
      return g[1].toUpperCase();
    }).upCase();
  };

  Navigation.prototype.lockNavigation = function() {
    return $('body').on('click', 'a', (function(_this) {
      return function(e) {
        var url;
        if ($(e.currentTarget).attr('target')) {
          return true;
        }
        if ($(e.currentTarget).attr('noajax')) {
          return true;
        }
        if (_this.getLocation($(e.currentTarget).attr('href')).hostname !== _this.websiteHost) {
          return true;
        }
        e.preventDefault();
        url = $(e.currentTarget).attr('href');
        if (url !== '' && url !== void 0) {
          return _this.goTo(url, e);
        }
      };
    })(this));
  };

  Navigation.prototype.goTo = function(url, e, forcePushState, backButtonPressed) {
    var pageDivTmp;
    if (e == null) {
      e = null;
    }
    if (forcePushState == null) {
      forcePushState = false;
    }
    if (backButtonPressed == null) {
      backButtonPressed = false;
    }
    if (this.currentPath === (this.getLocation(url).pathname + this.getLocation(url).search) || this.inProgress) {
      if (e != null) {
        e.preventDefault();
      }
      return;
    }
    if (e != null) {
      e.preventDefault();
    }
    this.currentPath = this.getLocation(url).pathname + this.getLocation(url).search;
    pageDivTmp = $('<div/>');
    this.inProgress = true;
    this.currentPageHidden = false;
    this.currentPageLoaded = false;
    this.currentPage.destroy().done((function(_this) {
      return function() {
        _this.currentPageHidden = true;
        if (_this.currentPageLoaded) {
          return _this.loadPage(_this.newPage);
        } else {
          return _this.showLoadIndicator();
        }
      };
    })(this));
    return $.ajax({
      url: url,
      beforeSend: (function(_this) {
        return function() {
          return $(document).trigger("page-will-load");
        };
      })(this),
      success: (function(_this) {
        return function(data) {
          var newTemplate, pageElement, title;
          _this.currentPageLoaded = true;
          pageDivTmp.append(data);
          pageElement = pageDivTmp.find(".page-view");
          newTemplate = _this.toClassName(pageElement.attr("class"));
          title = pageDivTmp.find('title').text();
          console.log("title", title);
          if (e || forcePushState) {
            history.pushState(null, title, url);
          }
          document.title = title;
          _this.newPage = new window[newTemplate](pageElement, true, true);
          if (_this.currentPageHidden) {
            return _this.loadPage(_this.newPage);
          }
        };
      })(this),
      error: function(errorThrown) {
        return console.log('error');
      }
    });
  };

  Navigation.prototype.loadPage = function(page) {
    this.inProgress = false;
    page.load().done((function(_this) {
      return function() {
        console.log("Page loaded");
        return $(document).trigger('page-loaded');
      };
    })(this));
    this.currentPage = this.newPage;
    return this.hideLoadIndicator();
  };

  Navigation.prototype.showLoadIndicator = function() {
    return $("#load-indicator").show();
  };

  Navigation.prototype.hideLoadIndicator = function() {
    return $("#load-indicator").hide();
  };

  return Navigation;

})();