/*!
 * VERSION: 2.1.3
 * DATE: 2019-05-17
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},e=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e(c,b[c],b):e[c%e.length];delete a.cycle},f=function(a){if("function"==typeof a)return a;var b="object"==typeof a?a:{each:a},c=b.ease,d=b.from||0,e=b.base||0,f={},g=isNaN(d),h=b.axis,i={center:.5,end:1}[d]||0;return function(a,j,k){var l,m,n,o,p,q,r,s,t,u=(k||b).length,v=f[u];if(!v){if(t="auto"===b.grid?0:(b.grid||[1/0])[0],!t){for(r=-(1/0);r<(r=k[t++].getBoundingClientRect().left)&&u>t;);t--}for(v=f[u]=[],l=g?Math.min(t,u)*i-.5:d%t,m=g?u*i/t-.5:d/t|0,r=0,s=1/0,q=0;u>q;q++)n=q%t-l,o=m-(q/t|0),v[q]=p=h?Math.abs("y"===h?o:n):Math.sqrt(n*n+o*o),p>r&&(r=p),s>p&&(s=p);v.max=r-s,v.min=s,v.v=u=b.amount||b.each*(t>u?u-1:h?"y"===h?u/t:t:Math.max(t,u/t))||0,v.b=0>u?e-u:e}return u=(v[a]-v.min)/v.max,v.b+(c?c.getRatio(u):u)*v.v}},g=function(a,b,d){c.call(this,a,b,d),this._cycle=0,this._yoyo=this.vars.yoyo===!0||!!this.vars.yoyoEase,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._repeat&&this._uncache(!0),this.render=g.prototype.render},h=1e-8,i=c._internals,j=i.isSelector,k=i.isArray,l=g.prototype=c.to({},.1,{}),m=[];g.version="2.1.3",l.constructor=g,l.kill()._gc=!1,g.killTweensOf=g.killDelayedCallsTo=c.killTweensOf,g.getTweensOf=c.getTweensOf,g.lagSmoothing=c.lagSmoothing,g.ticker=c.ticker,g.render=c.render,g.distribute=f,l.invalidate=function(){return this._yoyo=this.vars.yoyo===!0||!!this.vars.yoyoEase,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._yoyoEase=null,this._uncache(!0),c.prototype.invalidate.call(this)},l.updateTo=function(a,b){var d,e=this,f=e.ratio,g=e.vars.immediateRender||a.immediateRender;b&&e._startTime<e._timeline._time&&(e._startTime=e._timeline._time,e._uncache(!1),e._gc?e._enabled(!0,!1):e._timeline.insert(e,e._startTime-e._delay));for(d in a)e.vars[d]=a[d];if(e._initted||g)if(b)e._initted=!1,g&&e.render(0,!0,!0);else if(e._gc&&e._enabled(!0,!1),e._notifyPluginsOfEnabled&&e._firstPT&&c._onPluginEvent("_onDisable",e),e._time/e._duration>.998){var h=e._totalTime;e.render(0,!0,!1),e._initted=!1,e.render(h,!0,!1)}else if(e._initted=!1,e._init(),e._time>0||g)for(var i,j=1/(1-f),k=e._firstPT;k;)i=k.s+k.c,k.c*=j,k.s=i-k.c,k=k._next;return e},l.render=function(a,b,d){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var e,f,g,j,k,l,m,n,o,p=this,q=p._dirty?p.totalDuration():p._totalDuration,r=p._time,s=p._totalTime,t=p._cycle,u=p._duration,v=p._rawPrevTime;if(a>=q-h&&a>=0?(p._totalTime=q,p._cycle=p._repeat,p._yoyo&&0!==(1&p._cycle)?(p._time=0,p.ratio=p._ease._calcEnd?p._ease.getRatio(0):0):(p._time=u,p.ratio=p._ease._calcEnd?p._ease.getRatio(1):1),p._reversed||(e=!0,f="onComplete",d=d||p._timeline.autoRemoveChildren),0===u&&(p._initted||!p.vars.lazy||d)&&(p._startTime===p._timeline._duration&&(a=0),(0>v||0>=a&&a>=-h||v===h&&"isPause"!==p.data)&&v!==a&&(d=!0,v>h&&(f="onReverseComplete")),p._rawPrevTime=n=!b||a||v===a?a:h)):h>a?(p._totalTime=p._time=p._cycle=0,p.ratio=p._ease._calcEnd?p._ease.getRatio(0):0,(0!==s||0===u&&v>0)&&(f="onReverseComplete",e=p._reversed),a>-h?a=0:0>a&&(p._active=!1,0===u&&(p._initted||!p.vars.lazy||d)&&(v>=0&&(d=!0),p._rawPrevTime=n=!b||a||v===a?a:h)),p._initted||(d=!0)):(p._totalTime=p._time=a,0!==p._repeat&&(j=u+p._repeatDelay,p._cycle=p._totalTime/j>>0,0!==p._cycle&&p._cycle===p._totalTime/j&&a>=s&&p._cycle--,p._time=p._totalTime-p._cycle*j,p._yoyo&&0!==(1&p._cycle)&&(p._time=u-p._time,o=p._yoyoEase||p.vars.yoyoEase,o&&(p._yoyoEase||(o!==!0||p._initted?p._yoyoEase=o=o===!0?p._ease:o instanceof Ease?o:Ease.map[o]:(o=p.vars.ease,p._yoyoEase=o=o?o instanceof Ease?o:"function"==typeof o?new Ease(o,p.vars.easeParams):Ease.map[o]||c.defaultEase:c.defaultEase)),p.ratio=o?1-o.getRatio((u-p._time)/u):0)),p._time>u?p._time=u:p._time<0&&(p._time=0)),p._easeType&&!o?(k=p._time/u,l=p._easeType,m=p._easePower,(1===l||3===l&&k>=.5)&&(k=1-k),3===l&&(k*=2),1===m?k*=k:2===m?k*=k*k:3===m?k*=k*k*k:4===m&&(k*=k*k*k*k),p.ratio=1===l?1-k:2===l?k:p._time/u<.5?k/2:1-k/2):o||(p.ratio=p._ease.getRatio(p._time/u))),r===p._time&&!d&&t===p._cycle)return void(s!==p._totalTime&&p._onUpdate&&(b||p._callback("onUpdate")));if(!p._initted){if(p._init(),!p._initted||p._gc)return;if(!d&&p._firstPT&&(p.vars.lazy!==!1&&p._duration||p.vars.lazy&&!p._duration))return p._time=r,p._totalTime=s,p._rawPrevTime=v,p._cycle=t,i.lazyTweens.push(p),void(p._lazy=[a,b]);!p._time||e||o?e&&this._ease._calcEnd&&!o&&(p.ratio=p._ease.getRatio(0===p._time?0:1)):p.ratio=p._ease.getRatio(p._time/u)}for(p._lazy!==!1&&(p._lazy=!1),p._active||!p._paused&&p._time!==r&&a>=0&&(p._active=!0),0===s&&(2===p._initted&&a>0&&p._init(),p._startAt&&(a>=0?p._startAt.render(a,!0,d):f||(f="_dummyGS")),p.vars.onStart&&(0!==p._totalTime||0===u)&&(b||p._callback("onStart"))),g=p._firstPT;g;)g.f?g.t[g.p](g.c*p.ratio+g.s):g.t[g.p]=g.c*p.ratio+g.s,g=g._next;p._onUpdate&&(0>a&&p._startAt&&p._startTime&&p._startAt.render(a,!0,d),b||(p._totalTime!==s||f)&&p._callback("onUpdate")),p._cycle!==t&&(b||p._gc||p.vars.onRepeat&&p._callback("onRepeat")),f&&(!p._gc||d)&&(0>a&&p._startAt&&!p._onUpdate&&p._startTime&&p._startAt.render(a,!0,d),e&&(p._timeline.autoRemoveChildren&&p._enabled(!1,!1),p._active=!1),!b&&p.vars[f]&&p._callback(f),0===u&&p._rawPrevTime===h&&n!==h&&(p._rawPrevTime=0))},g.to=function(a,b,c){return new g(a,b,c)},g.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new g(a,b,c)},g.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new g(a,b,d)},g.staggerTo=g.allTo=function(a,b,h,i,l,n,o){var p,q,r,s,t=[],u=f(h.stagger||i),v=h.cycle,w=(h.startAt||m).cycle;for(k(a)||("string"==typeof a&&(a=c.selector(a)||a),j(a)&&(a=d(a))),a=a||[],p=a.length-1,r=0;p>=r;r++){q={};for(s in h)q[s]=h[s];if(v&&(e(q,a,r),null!=q.duration&&(b=q.duration,delete q.duration)),w){w=q.startAt={};for(s in h.startAt)w[s]=h.startAt[s];e(q.startAt,a,r)}q.delay=u(r,a[r],a)+(q.delay||0),r===p&&l&&(q.onComplete=function(){h.onComplete&&h.onComplete.apply(h.onCompleteScope||this,arguments),l.apply(o||h.callbackScope||this,n||m)}),t[r]=new g(a[r],b,q)}return t},g.staggerFrom=g.allFrom=function(a,b,c,d,e,f,h){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,g.staggerTo(a,b,c,d,e,f,h)},g.staggerFromTo=g.allFromTo=function(a,b,c,d,e,f,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,g.staggerTo(a,b,d,e,f,h,i)},g.delayedCall=function(a,b,c,d,e){return new g(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,useFrames:e,overwrite:0})},g.set=function(a,b){return new g(a,0,b)},g.isTweening=function(a){return c.getTweensOf(a,!0).length>0};var n=function(a,b){for(var d=[],e=0,f=a._first;f;)f instanceof c?d[e++]=f:(b&&(d[e++]=f),d=d.concat(n(f,b)),e=d.length),f=f._next;return d},o=g.getAllTweens=function(b){return n(a._rootTimeline,b).concat(n(a._rootFramesTimeline,b))};g.killAll=function(a,c,d,e){null==c&&(c=!0),null==d&&(d=!0);var f,g,h,i=o(0!=e),j=i.length,k=c&&d&&e;for(h=0;j>h;h++)g=i[h],(k||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&(a?g.totalTime(g._reversed?0:g.totalDuration()):g._enabled(!1,!1))},g.killChildTweensOf=function(a,b){if(null!=a){var e,f,h,l,m,n=i.tweenLookup;if("string"==typeof a&&(a=c.selector(a)||a),j(a)&&(a=d(a)),k(a))for(l=a.length;--l>-1;)g.killChildTweensOf(a[l],b);else{e=[];for(h in n)for(f=n[h].target.parentNode;f;)f===a&&(e=e.concat(n[h].tweens)),f=f.parentNode;for(m=e.length,l=0;m>l;l++)b&&e[l].totalTime(e[l].totalDuration()),e[l]._enabled(!1,!1)}}};var p=function(a,c,d,e){c=c!==!1,d=d!==!1,e=e!==!1;for(var f,g,h=o(e),i=c&&d&&e,j=h.length;--j>-1;)g=h[j],(i||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&g.paused(a)};return g.pauseAll=function(a,b,c){p(!0,a,b,c)},g.resumeAll=function(a,b,c){p(!1,a,b,c)},g.globalTimeScale=function(b){var d=a._rootTimeline,e=c.ticker.time;return arguments.length?(b=b||h,d._startTime=e-(e-d._startTime)*d._timeScale/b,d=a._rootFramesTimeline,e=c.ticker.frame,d._startTime=e-(e-d._startTime)*d._timeScale/b,d._timeScale=a._rootTimeline._timeScale=b,b):d._timeScale},l.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this.duration()?this._time/this._duration:this.ratio},l.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()},l.time=function(a,b){if(!arguments.length)return this._time;this._dirty&&this.totalDuration();var c=this._duration,d=this._cycle,e=d*(c+this._repeatDelay);return a>c&&(a=c),this.totalTime(this._yoyo&&1&d?c-a+e:this._repeat?a+e:a,b)},l.duration=function(b){return arguments.length?a.prototype.duration.call(this,b):this._duration},l.totalDuration=function(a){return arguments.length?-1===this._repeat?this:this.duration((a-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},l.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},l.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},l.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},g},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){b.call(this,a);var c,d,e=this,f=e.vars;e._labels={},e.autoRemoveChildren=!!f.autoRemoveChildren,e.smoothChildTiming=!!f.smoothChildTiming,e._sortChildren=!0,e._onUpdate=f.onUpdate;for(d in f)c=f[d],i(c)&&-1!==c.join("").indexOf("{self}")&&(f[d]=e._swapSelfInParams(c));i(f.tweens)&&e.add(f.tweens,0,f.align,f.stagger)},e=1e-8,f=c._internals,g=d._internals={},h=f.isSelector,i=f.isArray,j=f.lazyTweens,k=f.lazyRender,l=_gsScope._gsDefine.globals,m=function(a){var b,c={};for(b in a)c[b]=a[b];return c},n=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e(c,b[c],b):e[c%e.length];delete a.cycle},o=g.pauseCallback=function(){},p=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},q=function(a,b,c,d){var e="immediateRender";return e in b||(b[e]=!(c&&c[e]===!1||d)),b},r=function(a){if("function"==typeof a)return a;var b="object"==typeof a?a:{each:a},c=b.ease,d=b.from||0,e=b.base||0,f={},g=isNaN(d),h=b.axis,i={center:.5,end:1}[d]||0;return function(a,j,k){var l,m,n,o,p,q,r,s,t,u=(k||b).length,v=f[u];if(!v){if(t="auto"===b.grid?0:(b.grid||[1/0])[0],!t){for(r=-(1/0);r<(r=k[t++].getBoundingClientRect().left)&&u>t;);t--}for(v=f[u]=[],l=g?Math.min(t,u)*i-.5:d%t,m=g?u*i/t-.5:d/t|0,r=0,s=1/0,q=0;u>q;q++)n=q%t-l,o=m-(q/t|0),v[q]=p=h?Math.abs("y"===h?o:n):Math.sqrt(n*n+o*o),p>r&&(r=p),s>p&&(s=p);v.max=r-s,v.min=s,v.v=u=b.amount||b.each*(t>u?u-1:h?"y"===h?u/t:t:Math.max(t,u/t))||0,v.b=0>u?e-u:e}return u=(v[a]-v.min)/v.max,v.b+(c?c.getRatio(u):u)*v.v}},s=d.prototype=new b;return d.version="2.1.3",d.distribute=r,s.constructor=d,s.kill()._gc=s._forcingPlayhead=s._hasPause=!1,s.to=function(a,b,d,e){var f=d.repeat&&l.TweenMax||c;return b?this.add(new f(a,b,d),e):this.set(a,d,e)},s.from=function(a,b,d,e){return this.add((d.repeat&&l.TweenMax||c).from(a,b,q(this,d)),e)},s.fromTo=function(a,b,d,e,f){var g=e.repeat&&l.TweenMax||c;return e=q(this,e,d),b?this.add(g.fromTo(a,b,d,e),f):this.set(a,e,f)},s.staggerTo=function(a,b,e,f,g,i,j,k){var l,o,q=new d({onComplete:i,onCompleteParams:j,callbackScope:k,smoothChildTiming:this.smoothChildTiming}),s=r(e.stagger||f),t=e.startAt,u=e.cycle;for("string"==typeof a&&(a=c.selector(a)||a),a=a||[],h(a)&&(a=p(a)),o=0;o<a.length;o++)l=m(e),t&&(l.startAt=m(t),t.cycle&&n(l.startAt,a,o)),u&&(n(l,a,o),null!=l.duration&&(b=l.duration,delete l.duration)),q.to(a[o],b,l,s(o,a[o],a));return this.add(q,g)},s.staggerFrom=function(a,b,c,d,e,f,g,h){return c.runBackwards=!0,this.staggerTo(a,b,q(this,c),d,e,f,g,h)},s.staggerFromTo=function(a,b,c,d,e,f,g,h,i){return d.startAt=c,this.staggerTo(a,b,q(this,d,c),e,f,g,h,i)},s.call=function(a,b,d,e){return this.add(c.delayedCall(0,a,b,d),e)},s.set=function(a,b,d){return this.add(new c(a,0,q(this,b,null,!0)),d)},d.exportRoot=function(a,b){a=a||{},null==a.smoothChildTiming&&(a.smoothChildTiming=!0);var e,f,g,h,i=new d(a),j=i._timeline;for(null==b&&(b=!0),j._remove(i,!0),i._startTime=0,i._rawPrevTime=i._time=i._totalTime=j._time,g=j._first;g;)h=g._next,b&&g instanceof c&&g.target===g.vars.onComplete||(f=g._startTime-g._delay,0>f&&(e=1),i.add(g,f)),g=h;return j.add(i,0),e&&i.totalDuration(),i},s.add=function(e,f,g,h){var j,k,l,m,n,o,p=this;if("number"!=typeof f&&(f=p._parseTimeOrLabel(f,0,!0,e)),!(e instanceof a)){if(e instanceof Array||e&&e.push&&i(e)){for(g=g||"normal",h=h||0,j=f,k=e.length,l=0;k>l;l++)i(m=e[l])&&(m=new d({tweens:m})),p.add(m,j),"string"!=typeof m&&"function"!=typeof m&&("sequence"===g?j=m._startTime+m.totalDuration()/m._timeScale:"start"===g&&(m._startTime-=m.delay())),j+=h;return p._uncache(!0)}if("string"==typeof e)return p.addLabel(e,f);if("function"!=typeof e)throw"Cannot add "+e+" into the timeline; it is not a tween, timeline, function, or string.";e=c.delayedCall(0,e)}if(b.prototype.add.call(p,e,f),(e._time||!e._duration&&e._initted)&&(j=(p.rawTime()-e._startTime)*e._timeScale,(!e._duration||Math.abs(Math.max(0,Math.min(e.totalDuration(),j)))-e._totalTime>1e-5)&&e.render(j,!1,!1)),(p._gc||p._time===p._duration)&&!p._paused&&p._duration<p.duration())for(n=p,o=n.rawTime()>e._startTime;n._timeline;)o&&n._timeline.smoothChildTiming?n.totalTime(n._totalTime,!0):n._gc&&n._enabled(!0,!1),n=n._timeline;return p},s.remove=function(b){if(b instanceof a){this._remove(b,!1);var c=b._timeline=b.vars.useFrames?a._rootFramesTimeline:a._rootTimeline;return b._startTime=(b._paused?b._pauseTime:c._time)-(b._reversed?b.totalDuration()-b._totalTime:b._totalTime)/b._timeScale,this}if(b instanceof Array||b&&b.push&&i(b)){for(var d=b.length;--d>-1;)this.remove(b[d]);return this}return"string"==typeof b?this.removeLabel(b):this.kill(null,b)},s._remove=function(a,c){b.prototype._remove.call(this,a,c);var d=this._last;return d?this._time>this.duration()&&(this._time=this._duration,this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},s.append=function(a,b){return this.add(a,this._parseTimeOrLabel(null,b,!0,a))},s.insert=s.insertMultiple=function(a,b,c,d){return this.add(a,b||0,c,d)},s.appendMultiple=function(a,b,c,d){return this.add(a,this._parseTimeOrLabel(null,b,!0,a),c,d)},s.addLabel=function(a,b){return this._labels[a]=this._parseTimeOrLabel(b),this},s.addPause=function(a,b,d,e){var f=c.delayedCall(0,o,d,e||this);return f.vars.onComplete=f.vars.onReverseComplete=b,f.data="isPause",this._hasPause=!0,this.add(f,a)},s.removeLabel=function(a){return delete this._labels[a],this},s.getLabelTime=function(a){return null!=this._labels[a]?this._labels[a]:-1},s._parseTimeOrLabel=function(b,c,d,e){var f,g;if(e instanceof a&&e.timeline===this)this.remove(e);else if(e&&(e instanceof Array||e.push&&i(e)))for(g=e.length;--g>-1;)e[g]instanceof a&&e[g].timeline===this&&this.remove(e[g]);if(f="number"!=typeof b||c?this.duration()>99999999999?this.recent().endTime(!1):this._duration:0,"string"==typeof c)return this._parseTimeOrLabel(c,d&&"number"==typeof b&&null==this._labels[c]?b-f:0,d);if(c=c||0,"string"!=typeof b||!isNaN(b)&&null==this._labels[b])null==b&&(b=f);else{if(g=b.indexOf("="),-1===g)return null==this._labels[b]?d?this._labels[b]=f+c:c:this._labels[b]+c;c=parseInt(b.charAt(g-1)+"1",10)*Number(b.substr(g+1)),b=g>1?this._parseTimeOrLabel(b.substr(0,g-1),0,d):f}return Number(b)+c},s.seek=function(a,b){return this.totalTime("number"==typeof a?a:this._parseTimeOrLabel(a),b!==!1)},s.stop=function(){return this.paused(!0)},s.gotoAndPlay=function(a,b){return this.play(a,b)},s.gotoAndStop=function(a,b){return this.pause(a,b)},s.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,g,h,i,l,m,n,o=this,p=o._time,q=o._dirty?o.totalDuration():o._totalDuration,r=o._startTime,s=o._timeScale,t=o._paused;if(p!==o._time&&(a+=o._time-p),o._hasPause&&!o._forcingPlayhead&&!b){if(a>p)for(d=o._first;d&&d._startTime<=a&&!l;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===o._rawPrevTime||(l=d),d=d._next;else for(d=o._last;d&&d._startTime>=a&&!l;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(l=d),d=d._prev;l&&(o._time=o._totalTime=a=l._startTime,n=o._startTime+(o._reversed?o._duration-a:a)/o._timeScale)}if(a>=q-e&&a>=0)o._totalTime=o._time=q,o._reversed||o._hasPausedChild()||(f=!0,h="onComplete",i=!!o._timeline.autoRemoveChildren,0===o._duration&&(0>=a&&a>=-e||o._rawPrevTime<0||o._rawPrevTime===e)&&o._rawPrevTime!==a&&o._first&&(i=!0,o._rawPrevTime>e&&(h="onReverseComplete"))),o._rawPrevTime=o._duration||!b||a||o._rawPrevTime===a?a:e,a=q+1e-4;else if(e>a)if(o._totalTime=o._time=0,a>-e&&(a=0),(0!==p||0===o._duration&&o._rawPrevTime!==e&&(o._rawPrevTime>0||0>a&&o._rawPrevTime>=0))&&(h="onReverseComplete",f=o._reversed),0>a)o._active=!1,o._timeline.autoRemoveChildren&&o._reversed?(i=f=!0,h="onReverseComplete"):o._rawPrevTime>=0&&o._first&&(i=!0),o._rawPrevTime=a;else{if(o._rawPrevTime=o._duration||!b||a||o._rawPrevTime===a?a:e,0===a&&f)for(d=o._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,o._initted||(i=!0)}else o._totalTime=o._time=o._rawPrevTime=a;if(o._time!==p&&o._first||c||i||l){if(o._initted||(o._initted=!0),o._active||!o._paused&&o._time!==p&&a>0&&(o._active=!0),0===p&&o.vars.onStart&&(0===o._time&&o._duration||b||o._callback("onStart")),m=o._time,m>=p)for(d=o._first;d&&(g=d._next,m===o._time&&(!o._paused||t));)(d._active||d._startTime<=m&&!d._paused&&!d._gc)&&(l===d&&(o.pause(),o._pauseTime=n),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=g;else for(d=o._last;d&&(g=d._prev,m===o._time&&(!o._paused||t));){if(d._active||d._startTime<=p&&!d._paused&&!d._gc){if(l===d){for(l=d._prev;l&&l.endTime()>o._time;)l.render(l._reversed?l.totalDuration()-(a-l._startTime)*l._timeScale:(a-l._startTime)*l._timeScale,b,c),l=l._prev;l=null,o.pause(),o._pauseTime=n}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=g}o._onUpdate&&(b||(j.length&&k(),o._callback("onUpdate"))),h&&(o._gc||(r===o._startTime||s!==o._timeScale)&&(0===o._time||q>=o.totalDuration())&&(f&&(j.length&&k(),o._timeline.autoRemoveChildren&&o._enabled(!1,!1),o._active=!1),!b&&o.vars[h]&&o._callback(h)))}},s._hasPausedChild=function(){for(var a=this._first;a;){if(a._paused||a instanceof d&&a._hasPausedChild())return!0;a=a._next}return!1},s.getChildren=function(a,b,d,e){e=e||-9999999999;for(var f=[],g=this._first,h=0;g;)g._startTime<e||(g instanceof c?b!==!1&&(f[h++]=g):(d!==!1&&(f[h++]=g),a!==!1&&(f=f.concat(g.getChildren(!0,b,d)),h=f.length))),g=g._next;return f},s.getTweensOf=function(a,b){var d,e,f=this._gc,g=[],h=0;for(f&&this._enabled(!0,!0),d=c.getTweensOf(a),e=d.length;--e>-1;)(d[e].timeline===this||b&&this._contains(d[e]))&&(g[h++]=d[e]);return f&&this._enabled(!1,!0),g},s.recent=function(){return this._recent},s._contains=function(a){for(var b=a.timeline;b;){if(b===this)return!0;b=b.timeline}return!1},s.shiftChildren=function(a,b,c){c=c||0;for(var d,e=this._first,f=this._labels;e;)e._startTime>=c&&(e._startTime+=a),e=e._next;if(b)for(d in f)f[d]>=c&&(f[d]+=a);return this._uncache(!0)},s._kill=function(a,b){if(!a&&!b)return this._enabled(!1,!1);for(var c=b?this.getTweensOf(b):this.getChildren(!0,!0,!1),d=c.length,e=!1;--d>-1;)c[d]._kill(a,b)&&(e=!0);return e},s.clear=function(a){var b=this.getChildren(!1,!0,!0),c=b.length;for(this._time=this._totalTime=0;--c>-1;)b[c]._enabled(!1,!1);return a!==!1&&(this._labels={}),this._uncache(!0)},s.invalidate=function(){for(var b=this._first;b;)b.invalidate(),b=b._next;return a.prototype.invalidate.call(this)},s._enabled=function(a,c){if(a===this._gc)for(var d=this._first;d;)d._enabled(a,!0),d=d._next;return b.prototype._enabled.call(this,a,c)},s.totalTime=function(b,c,d){this._forcingPlayhead=!0;var e=a.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},s.duration=function(a){return arguments.length?(0!==this.duration()&&0!==a&&this.timeScale(this._duration/a),this):(this._dirty&&this.totalDuration(),this._duration)},s.totalDuration=function(a){if(!arguments.length){if(this._dirty){for(var b,c,d=0,e=this,f=e._last,g=999999999999;f;)b=f._prev,f._dirty&&f.totalDuration(),f._startTime>g&&e._sortChildren&&!f._paused&&!e._calculatingDuration?(e._calculatingDuration=1,e.add(f,f._startTime-f._delay),e._calculatingDuration=0):g=f._startTime,f._startTime<0&&!f._paused&&(d-=f._startTime,e._timeline.smoothChildTiming&&(e._startTime+=f._startTime/e._timeScale,e._time-=f._startTime,e._totalTime-=f._startTime,e._rawPrevTime-=f._startTime),e.shiftChildren(-f._startTime,!1,-9999999999),g=0),c=f._startTime+f._totalDuration/f._timeScale,c>d&&(d=c),f=b;e._duration=e._totalDuration=d,e._dirty=!1}return this._totalDuration}return a&&this.totalDuration()?this.timeScale(this._totalDuration/a):this},s.paused=function(b){if(b===!1&&this._paused)for(var c=this._first;c;)c._startTime===this._time&&"isPause"===c.data&&(c._rawPrevTime=0),c=c._next;return a.prototype.paused.apply(this,arguments)},s.usesFrames=function(){for(var b=this._timeline;b._timeline;)b=b._timeline;return b===a._rootFramesTimeline},s.rawTime=function(a){return a&&(this._paused||this._repeat&&this.time()>0&&this.totalProgress()<1)?this._totalTime%(this._duration+this._repeatDelay):this._paused?this._totalTime:(this._timeline.rawTime(a)-this._startTime)*this._timeScale},d},!0),_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(a,b,c){var d=function(b){a.call(this,b),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=!!this.vars.yoyo,this._dirty=!0},e=1e-8,f=b._internals,g=f.lazyTweens,h=f.lazyRender,i=_gsScope._gsDefine.globals,j=new c(null,null,1,0),k=d.prototype=new a;return k.constructor=d,k.kill()._gc=!1,d.version="2.1.3",k.invalidate=function(){return this._yoyo=!!this.vars.yoyo,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),a.prototype.invalidate.call(this)},k.addCallback=function(a,c,d,e){return this.add(b.delayedCall(0,a,d,e),c)},k.removeCallback=function(a,b){if(a)if(null==b)this._kill(null,a);else for(var c=this.getTweensOf(a,!1),d=c.length,e=this._parseTimeOrLabel(b);--d>-1;)c[d]._startTime===e&&c[d]._enabled(!1,!1);return this},k.removePause=function(b){return this.removeCallback(a._internals.pauseCallback,b)},k.tweenTo=function(a,c){c=c||{};var d,e,f,g={ease:j,useFrames:this.usesFrames(),immediateRender:!1,lazy:!1},h=c.repeat&&i.TweenMax||b;for(e in c)g[e]=c[e];return g.time=this._parseTimeOrLabel(a),d=Math.abs(Number(g.time)-this._time)/this._timeScale||.001,f=new h(this,d,g),g.onStart=function(){f.target.paused(!0),f.vars.time===f.target.time()||d!==f.duration()||f.isFromTo||f.duration(Math.abs(f.vars.time-f.target.time())/f.target._timeScale).render(f.time(),!0,!0),c.onStart&&c.onStart.apply(c.onStartScope||c.callbackScope||f,c.onStartParams||[])},f},k.tweenFromTo=function(a,b,c){c=c||{},a=this._parseTimeOrLabel(a),c.startAt={onComplete:this.seek,onCompleteParams:[a],callbackScope:this},c.immediateRender=c.immediateRender!==!1;var d=this.tweenTo(b,c);return d.isFromTo=1,d.duration(Math.abs(d.vars.time-a)/this._timeScale||.001)},k.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,i,j,k,l,m,n,o,p=this,q=p._time,r=p._dirty?p.totalDuration():p._totalDuration,s=p._duration,t=p._totalTime,u=p._startTime,v=p._timeScale,w=p._rawPrevTime,x=p._paused,y=p._cycle;if(q!==p._time&&(a+=p._time-q),a>=r-e&&a>=0)p._locked||(p._totalTime=r,p._cycle=p._repeat),p._reversed||p._hasPausedChild()||(f=!0,j="onComplete",k=!!p._timeline.autoRemoveChildren,0===p._duration&&(0>=a&&a>=-e||0>w||w===e)&&w!==a&&p._first&&(k=!0,w>e&&(j="onReverseComplete"))),p._rawPrevTime=p._duration||!b||a||p._rawPrevTime===a?a:e,p._yoyo&&1&p._cycle?p._time=a=0:(p._time=s,a=s+1e-4);else if(e>a)if(p._locked||(p._totalTime=p._cycle=0),p._time=0,a>-e&&(a=0),(0!==q||0===s&&w!==e&&(w>0||0>a&&w>=0)&&!p._locked)&&(j="onReverseComplete",f=p._reversed),0>a)p._active=!1,p._timeline.autoRemoveChildren&&p._reversed?(k=f=!0,j="onReverseComplete"):w>=0&&p._first&&(k=!0),p._rawPrevTime=a;else{if(p._rawPrevTime=s||!b||a||p._rawPrevTime===a?a:e,0===a&&f)for(d=p._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,p._initted||(k=!0)}else 0===s&&0>w&&(k=!0),p._time=p._rawPrevTime=a,p._locked||(p._totalTime=a,0!==p._repeat&&(l=s+p._repeatDelay,p._cycle=p._totalTime/l>>0,p._cycle&&p._cycle===p._totalTime/l&&a>=t&&p._cycle--,p._time=p._totalTime-p._cycle*l,p._yoyo&&1&p._cycle&&(p._time=s-p._time),p._time>s?(p._time=s,a=s+1e-4):p._time<0?p._time=a=0:a=p._time));if(p._hasPause&&!p._forcingPlayhead&&!b){if(a=p._time,a>q||p._repeat&&y!==p._cycle)for(d=p._first;d&&d._startTime<=a&&!m;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===p._rawPrevTime||(m=d),d=d._next;else for(d=p._last;d&&d._startTime>=a&&!m;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(m=d),d=d._prev;m&&(o=p._startTime+(p._reversed?p._duration-m._startTime:m._startTime)/p._timeScale,m._startTime<s&&(p._time=p._rawPrevTime=a=m._startTime,p._totalTime=a+p._cycle*(p._totalDuration+p._repeatDelay)))}if(p._cycle!==y&&!p._locked){var z=p._yoyo&&0!==(1&y),A=z===(p._yoyo&&0!==(1&p._cycle)),B=p._totalTime,C=p._cycle,D=p._rawPrevTime,E=p._time;if(p._totalTime=y*s,p._cycle<y?z=!z:p._totalTime+=s,p._time=q,p._rawPrevTime=0===s?w-1e-4:w,p._cycle=y,p._locked=!0,q=z?0:s,p.render(q,b,0===s),b||p._gc||p.vars.onRepeat&&(p._cycle=C,p._locked=!1,p._callback("onRepeat")),q!==p._time)return;if(A&&(p._cycle=y,p._locked=!0,q=z?s+1e-4:-1e-4,p.render(q,!0,!1)),p._locked=!1,p._paused&&!x)return;p._time=E,p._totalTime=B,p._cycle=C,p._rawPrevTime=D}if(!(p._time!==q&&p._first||c||k||m))return void(t!==p._totalTime&&p._onUpdate&&(b||p._callback("onUpdate")));if(p._initted||(p._initted=!0),p._active||!p._paused&&p._totalTime!==t&&a>0&&(p._active=!0),0===t&&p.vars.onStart&&(0===p._totalTime&&p._totalDuration||b||p._callback("onStart")),n=p._time,n>=q)for(d=p._first;d&&(i=d._next,n===p._time&&(!p._paused||x));)(d._active||d._startTime<=p._time&&!d._paused&&!d._gc)&&(m===d&&(p.pause(),p._pauseTime=o),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=i;else for(d=p._last;d&&(i=d._prev,n===p._time&&(!p._paused||x));){if(d._active||d._startTime<=q&&!d._paused&&!d._gc){if(m===d){for(m=d._prev;m&&m.endTime()>p._time;)m.render(m._reversed?m.totalDuration()-(a-m._startTime)*m._timeScale:(a-m._startTime)*m._timeScale,b,c),m=m._prev;m=null,p.pause(),p._pauseTime=o}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=i}p._onUpdate&&(b||(g.length&&h(),p._callback("onUpdate"))),j&&(p._locked||p._gc||(u===p._startTime||v!==p._timeScale)&&(0===p._time||r>=p.totalDuration())&&(f&&(g.length&&h(),p._timeline.autoRemoveChildren&&p._enabled(!1,!1),p._active=!1),!b&&p.vars[j]&&p._callback(j)))},k.getActive=function(a,b,c){var d,e,f=[],g=this.getChildren(a||null==a,b||null==a,!!c),h=0,i=g.length;for(d=0;i>d;d++)e=g[d],e.isActive()&&(f[h++]=e);return f},k.getLabelAfter=function(a){a||0!==a&&(a=this._time);var b,c=this.getLabelsArray(),d=c.length;for(b=0;d>b;b++)if(c[b].time>a)return c[b].name;return null},k.getLabelBefore=function(a){null==a&&(a=this._time);for(var b=this.getLabelsArray(),c=b.length;--c>-1;)if(b[c].time<a)return b[c].name;return null},k.getLabelsArray=function(){var a,b=[],c=0;for(a in this._labels)b[c++]={time:this._labels[a],name:a};return b.sort(function(a,b){return a.time-b.time}),b},k.invalidate=function(){return this._locked=!1,a.prototype.invalidate.call(this)},k.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()||0},k.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()||0},k.totalDuration=function(b){return arguments.length?-1!==this._repeat&&b?this.timeScale(this.totalDuration()/b):this:(this._dirty&&(a.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},k.time=function(a,b){if(!arguments.length)return this._time;this._dirty&&this.totalDuration();var c=this._duration,d=this._cycle,e=d*(c+this._repeatDelay);return a>c&&(a=c),this.totalTime(this._yoyo&&1&d?c-a+e:this._repeat?a+e:a,b)},k.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},k.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},k.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},k.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.getLabelBefore(this._time+e)},d},!0),function(){var a=180/Math.PI,b=[],c=[],d=[],e={},f=_gsScope._gsDefine.globals,g=function(a,b,c,d){c===d&&(c=d-(d-b)/1e6),a===b&&(b=a+(c-a)/1e6),this.a=a,this.b=b,this.c=c,this.d=d,this.da=d-a,this.ca=c-a,this.ba=b-a},h=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",i=function(a,b,c,d){var e={a:a},f={},g={},h={c:d},i=(a+b)/2,j=(b+c)/2,k=(c+d)/2,l=(i+j)/2,m=(j+k)/2,n=(m-l)/8;return e.b=i+(a-i)/4,f.b=l+n,e.c=f.a=(e.b+f.b)/2,f.c=g.a=(l+m)/2,g.b=m-n,h.b=k+(d-k)/4,g.c=h.a=(g.b+h.b)/2,[e,f,g,h]},j=function(a,e,f,g,h){var j,k,l,m,n,o,p,q,r,s,t,u,v,w=a.length-1,x=0,y=a[0].a;for(j=0;w>j;j++)n=a[x],k=n.a,l=n.d,m=a[x+1].d,h?(t=b[j],u=c[j],v=(u+t)*e*.25/(g?.5:d[j]||.5),o=l-(l-k)*(g?.5*e:0!==t?v/t:0),p=l+(m-l)*(g?.5*e:0!==u?v/u:0),q=l-(o+((p-o)*(3*t/(t+u)+.5)/4||0))):(o=l-(l-k)*e*.5,p=l+(m-l)*e*.5,q=l-(o+p)/2),o+=q,p+=q,n.c=r=o,0!==j?n.b=y:n.b=y=n.a+.6*(n.c-n.a),n.da=l-k,n.ca=r-k,n.ba=y-k,f?(s=i(k,y,r,l),a.splice(x,1,s[0],s[1],s[2],s[3]),x+=4):x++,y=p;n=a[x],n.b=y,n.c=y+.4*(n.d-y),n.da=n.d-n.a,n.ca=n.c-n.a,n.ba=y-n.a,f&&(s=i(n.a,y,n.c,n.d),a.splice(x,1,s[0],s[1],s[2],s[3]))},k=function(a,d,e,f){var h,i,j,k,l,m,n=[];if(f)for(a=[f].concat(a),i=a.length;--i>-1;)"string"==typeof(m=a[i][d])&&"="===m.charAt(1)&&(a[i][d]=f[d]+Number(m.charAt(0)+m.substr(2)));if(h=a.length-2,0>h)return n[0]=new g(a[0][d],0,0,a[0][d]),n;for(i=0;h>i;i++)j=a[i][d],k=a[i+1][d],n[i]=new g(j,0,0,k),e&&(l=a[i+2][d],b[i]=(b[i]||0)+(k-j)*(k-j),c[i]=(c[i]||0)+(l-k)*(l-k));return n[i]=new g(a[i][d],0,0,a[i+1][d]),n},l=function(a,f,g,i,l,m){var n,o,p,q,r,s,t,u,v={},w=[],x=m||a[0];l="string"==typeof l?","+l+",":h,null==f&&(f=1);for(o in a[0])w.push(o);if(a.length>1){for(u=a[a.length-1],t=!0,n=w.length;--n>-1;)if(o=w[n],Math.abs(x[o]-u[o])>.05){t=!1;break}t&&(a=a.concat(),m&&a.unshift(m),a.push(a[1]),m=a[a.length-3])}for(b.length=c.length=d.length=0,n=w.length;--n>-1;)o=w[n],e[o]=-1!==l.indexOf(","+o+","),v[o]=k(a,o,e[o],m);for(n=b.length;--n>-1;)b[n]=Math.sqrt(b[n]),c[n]=Math.sqrt(c[n]);if(!i){for(n=w.length;--n>-1;)if(e[o])for(p=v[w[n]],
s=p.length-1,q=0;s>q;q++)r=p[q+1].da/c[q]+p[q].da/b[q]||0,d[q]=(d[q]||0)+r*r;for(n=d.length;--n>-1;)d[n]=Math.sqrt(d[n])}for(n=w.length,q=g?4:1;--n>-1;)o=w[n],p=v[o],j(p,f,g,i,e[o]),t&&(p.splice(0,q),p.splice(p.length-q,q));return v},m=function(a,b,c){b=b||"soft";var d,e,f,h,i,j,k,l,m,n,o,p={},q="cubic"===b?3:2,r="soft"===b,s=[];if(r&&c&&(a=[c].concat(a)),null==a||a.length<q+1)throw"invalid Bezier data";for(m in a[0])s.push(m);for(j=s.length;--j>-1;){for(m=s[j],p[m]=i=[],n=0,l=a.length,k=0;l>k;k++)d=null==c?a[k][m]:"string"==typeof(o=a[k][m])&&"="===o.charAt(1)?c[m]+Number(o.charAt(0)+o.substr(2)):Number(o),r&&k>1&&l-1>k&&(i[n++]=(d+i[n-2])/2),i[n++]=d;for(l=n-q+1,n=0,k=0;l>k;k+=q)d=i[k],e=i[k+1],f=i[k+2],h=2===q?0:i[k+3],i[n++]=o=3===q?new g(d,e,f,h):new g(d,(2*e+d)/3,(2*e+f)/3,f);i.length=n}return p},n=function(a,b,c){for(var d,e,f,g,h,i,j,k,l,m,n,o=1/c,p=a.length;--p>-1;)for(m=a[p],f=m.a,g=m.d-f,h=m.c-f,i=m.b-f,d=e=0,k=1;c>=k;k++)j=o*k,l=1-j,d=e-(e=(j*j*g+3*l*(j*h+l*i))*j),n=p*c+k-1,b[n]=(b[n]||0)+d*d},o=function(a,b){b=b>>0||6;var c,d,e,f,g=[],h=[],i=0,j=0,k=b-1,l=[],m=[];for(c in a)n(a[c],g,b);for(e=g.length,d=0;e>d;d++)i+=Math.sqrt(g[d]),f=d%b,m[f]=i,f===k&&(j+=i,f=d/b>>0,l[f]=m,h[f]=j,i=0,m=[]);return{length:j,lengths:h,segments:l}},p=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.9",API:2,global:!0,init:function(a,b,c){this._target=a,b instanceof Array&&(b={values:b}),this._func={},this._mod={},this._props=[],this._timeRes=null==b.timeResolution?6:parseInt(b.timeResolution,10);var d,e,f,g,h,i=b.values||[],j={},k=i[0],n=b.autoRotate||c.vars.orientToBezier;this._autoRotate=n?n instanceof Array?n:[["x","y","rotation",n===!0?0:Number(n)||0]]:null;for(d in k)this._props.push(d);for(f=this._props.length;--f>-1;)d=this._props[f],this._overwriteProps.push(d),e=this._func[d]="function"==typeof a[d],j[d]=e?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]():parseFloat(a[d]),h||j[d]!==i[0][d]&&(h=j);if(this._beziers="cubic"!==b.type&&"quadratic"!==b.type&&"soft"!==b.type?l(i,isNaN(b.curviness)?1:b.curviness,!1,"thruBasic"===b.type,b.correlate,h):m(i,b.type,j),this._segCount=this._beziers[d].length,this._timeRes){var p=o(this._beziers,this._timeRes);this._length=p.length,this._lengths=p.lengths,this._segments=p.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(n=this._autoRotate)for(this._initialRotations=[],n[0]instanceof Array||(this._autoRotate=n=[n]),f=n.length;--f>-1;){for(g=0;3>g;g++)d=n[f][g],this._func[d]="function"==typeof a[d]?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]:!1;d=n[f][2],this._initialRotations[f]=(this._func[d]?this._func[d].call(this._target):this._target[d])||0,this._overwriteProps.push(d)}return this._startRatio=c.vars.runBackwards?1:0,!0},set:function(b){var c,d,e,f,g,h,i,j,k,l,m,n=this._segCount,o=this._func,p=this._target,q=b!==this._startRatio;if(this._timeRes){if(k=this._lengths,l=this._curSeg,m=b*this._length,e=this._li,m>this._l2&&n-1>e){for(j=n-1;j>e&&(this._l2=k[++e])<=m;);this._l1=k[e-1],this._li=e,this._curSeg=l=this._segments[e],this._s2=l[this._s1=this._si=0]}else if(m<this._l1&&e>0){for(;e>0&&(this._l1=k[--e])>=m;);0===e&&m<this._l1?this._l1=0:e++,this._l2=k[e],this._li=e,this._curSeg=l=this._segments[e],this._s1=l[(this._si=l.length-1)-1]||0,this._s2=l[this._si]}if(c=e,m-=this._l1,e=this._si,m>this._s2&&e<l.length-1){for(j=l.length-1;j>e&&(this._s2=l[++e])<=m;);this._s1=l[e-1],this._si=e}else if(m<this._s1&&e>0){for(;e>0&&(this._s1=l[--e])>=m;);0===e&&m<this._s1?this._s1=0:e++,this._s2=l[e],this._si=e}h=1===b?1:(e+(m-this._s1)/(this._s2-this._s1))*this._prec||0}else c=0>b?0:b>=1?n-1:n*b>>0,h=(b-c*(1/n))*n;for(d=1-h,e=this._props.length;--e>-1;)f=this._props[e],g=this._beziers[f][c],i=(h*h*g.da+3*d*(h*g.ca+d*g.ba))*h+g.a,this._mod[f]&&(i=this._mod[f](i,p)),o[f]?p[f](i):p[f]=i;if(this._autoRotate){var r,s,t,u,v,w,x,y=this._autoRotate;for(e=y.length;--e>-1;)f=y[e][2],w=y[e][3]||0,x=y[e][4]===!0?1:a,g=this._beziers[y[e][0]],r=this._beziers[y[e][1]],g&&r&&(g=g[c],r=r[c],s=g.a+(g.b-g.a)*h,u=g.b+(g.c-g.b)*h,s+=(u-s)*h,u+=(g.c+(g.d-g.c)*h-u)*h,t=r.a+(r.b-r.a)*h,v=r.b+(r.c-r.b)*h,t+=(v-t)*h,v+=(r.c+(r.d-r.c)*h-v)*h,i=q?Math.atan2(v-t,u-s)*x+w:this._initialRotations[e],this._mod[f]&&(i=this._mod[f](i,p)),o[f]?p[f](i):p[f]=i)}}}),q=p.prototype;p.bezierThrough=l,p.cubicToQuadratic=i,p._autoCSS=!0,p.quadraticToCubic=function(a,b,c){return new g(a,(2*b+a)/3,(2*b+c)/3,c)},p._cssRegister=function(){var a=f.CSSPlugin;if(a){var b=a._internals,c=b._parseToProxy,d=b._setPluginRatio,e=b.CSSPropTween;b._registerComplexSpecialProp("bezier",{parser:function(a,b,f,g,h,i){b instanceof Array&&(b={values:b}),i=new p;var j,k,l,m=b.values,n=m.length-1,o=[],q={};if(0>n)return h;for(j=0;n>=j;j++)l=c(a,m[j],g,h,i,n!==j),o[j]=l.end;for(k in b)q[k]=b[k];return q.values=o,h=new e(a,"bezier",0,0,l.pt,2),h.data=l,h.plugin=i,h.setRatio=d,0===q.autoRotate&&(q.autoRotate=!0),!q.autoRotate||q.autoRotate instanceof Array||(j=q.autoRotate===!0?0:Number(q.autoRotate),q.autoRotate=null!=l.end.left?[["left","top","rotation",j,!1]]:null!=l.end.x?[["x","y","rotation",j,!1]]:!1),q.autoRotate&&(g._transform||g._enableTransforms(!1),l.autoRotate=g._target._gsTransform,l.proxy.rotation=l.autoRotate.rotation||0,g._overwriteProps.push("rotation")),i._onInitTween(l.proxy,q,g._tween),h}})}},q._mod=function(a){for(var b,c=this._overwriteProps,d=c.length;--d>-1;)b=a[c[d]],b&&"function"==typeof b&&(this._mod[c[d]]=b)},q._kill=function(a){var b,c,d=this._props;for(b in this._beziers)if(b in a)for(delete this._beziers[b],delete this._func[b],c=d.length;--c>-1;)d[c]===b&&d.splice(c,1);if(d=this._autoRotate)for(c=d.length;--c>-1;)a[d[c][2]]&&d.splice(c,1);return this._super._kill.call(this,a)}}(),_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(a,b){var c,d,e,f,g=function(){a.call(this,"css"),this._overwriteProps.length=0,this.setRatio=g.prototype.setRatio},h=_gsScope._gsDefine.globals,i={},j=g.prototype=new a("css");j.constructor=g,g.version="2.1.3",g.API=2,g.defaultTransformPerspective=0,g.defaultSkewType="compensated",g.defaultSmoothOrigin=!0,j="px",g.suffixMap={top:j,right:j,bottom:j,left:j,width:j,height:j,fontSize:j,padding:j,margin:j,perspective:j,lineHeight:""};var k,l,m,n,o,p,q,r,s=/(?:\-|\.|\b)(\d|\.|e\-)+/g,t=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,u=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b),?/gi,w=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,x=/(?:\d|\-|\+|=|#|\.)*/g,y=/opacity *= *([^)]*)/i,z=/opacity:([^;]*)/i,A=/alpha\(opacity *=.+?\)/i,B=/^(rgb|hsl)/,C=/([A-Z])/g,D=/-([a-z])/gi,E=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,F=function(a,b){return b.toUpperCase()},G=/(?:Left|Right|Width)/i,H=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,I=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,J=/,(?=[^\)]*(?:\(|$))/gi,K=/[\s,\(]/i,L=Math.PI/180,M=180/Math.PI,N={},O={style:{}},P=_gsScope.document||{createElement:function(){return O}},Q=function(a,b){var c=P.createElementNS?P.createElementNS(b||"http://www.w3.org/1999/xhtml",a):P.createElement(a);return c.style?c:P.createElement(a)},R=Q("div"),S=Q("img"),T=g._internals={_specialProps:i},U=(_gsScope.navigator||{}).userAgent||"",V=function(){var a=U.indexOf("Android"),b=Q("a");return m=-1!==U.indexOf("Safari")&&-1===U.indexOf("Chrome")&&(-1===a||parseFloat(U.substr(a+8,2))>3),o=m&&parseFloat(U.substr(U.indexOf("Version/")+8,2))<6,n=-1!==U.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(U)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(U))&&(p=parseFloat(RegExp.$1)),b?(b.style.cssText="top:1px;opacity:.55;",/^0.55/.test(b.style.opacity)):!1}(),W=function(a){return y.test("string"==typeof a?a:(a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100:1},X=function(a){_gsScope.console&&console.log(a)},Y="",Z="",$=function(a,b){b=b||R;var c,d,e=b.style;if(void 0!==e[a])return a;for(a=a.charAt(0).toUpperCase()+a.substr(1),c=["O","Moz","ms","Ms","Webkit"],d=5;--d>-1&&void 0===e[c[d]+a];);return d>=0?(Z=3===d?"ms":c[d],Y="-"+Z.toLowerCase()+"-",Z+a):null},_="undefined"!=typeof window?window:P.defaultView||{getComputedStyle:function(){}},aa=function(a){return _.getComputedStyle(a)},ba=g.getStyle=function(a,b,c,d,e){var f;return V||"opacity"!==b?(!d&&a.style[b]?f=a.style[b]:(c=c||aa(a))?f=c[b]||c.getPropertyValue(b)||c.getPropertyValue(b.replace(C,"-$1").toLowerCase()):a.currentStyle&&(f=a.currentStyle[b]),null==e||f&&"none"!==f&&"auto"!==f&&"auto auto"!==f?f:e):W(a)},ca=T.convertToPixels=function(a,c,d,e,f){if("px"===e||!e&&"lineHeight"!==c)return d;if("auto"===e||!d)return 0;var h,i,j,k=G.test(c),l=a,m=R.style,n=0>d,o=1===d;if(n&&(d=-d),o&&(d*=100),"lineHeight"!==c||e)if("%"===e&&-1!==c.indexOf("border"))h=d/100*(k?a.clientWidth:a.clientHeight);else{if(m.cssText="border:0 solid red;position:"+ba(a,"position")+";line-height:0;","%"!==e&&l.appendChild&&"v"!==e.charAt(0)&&"rem"!==e)m[k?"borderLeftWidth":"borderTopWidth"]=d+e;else{if(l=a.parentNode||P.body,-1!==ba(l,"display").indexOf("flex")&&(m.position="absolute"),i=l._gsCache,j=b.ticker.frame,i&&k&&i.time===j)return i.width*d/100;m[k?"width":"height"]=d+e}l.appendChild(R),h=parseFloat(R[k?"offsetWidth":"offsetHeight"]),l.removeChild(R),k&&"%"===e&&g.cacheWidths!==!1&&(i=l._gsCache=l._gsCache||{},i.time=j,i.width=h/d*100),0!==h||f||(h=ca(a,c,d,e,!0))}else i=aa(a).lineHeight,a.style.lineHeight=d,h=parseFloat(aa(a).lineHeight),a.style.lineHeight=i;return o&&(h/=100),n?-h:h},da=T.calculateOffset=function(a,b,c){if("absolute"!==ba(a,"position",c))return 0;var d="left"===b?"Left":"Top",e=ba(a,"margin"+d,c);return a["offset"+d]-(ca(a,b,parseFloat(e),e.replace(x,""))||0)},ea=function(a,b){var c,d,e,f={};if(b=b||aa(a,null))if(c=b.length)for(;--c>-1;)e=b[c],(-1===e.indexOf("-transform")||Fa===e)&&(f[e.replace(D,F)]=b.getPropertyValue(e));else for(c in b)(-1===c.indexOf("Transform")||Ea===c)&&(f[c]=b[c]);else if(b=a.currentStyle||a.style)for(c in b)"string"==typeof c&&void 0===f[c]&&(f[c.replace(D,F)]=b[c]);return V||(f.opacity=W(a)),d=Ta(a,b,!1),f.rotation=d.rotation,f.skewX=d.skewX,f.scaleX=d.scaleX,f.scaleY=d.scaleY,f.x=d.x,f.y=d.y,Ha&&(f.z=d.z,f.rotationX=d.rotationX,f.rotationY=d.rotationY,f.scaleZ=d.scaleZ),f.filters&&delete f.filters,f},fa=function(a,b,c,d,e){var f,g,h,i={},j=a.style;for(g in c)"cssText"!==g&&"length"!==g&&isNaN(g)&&(b[g]!==(f=c[g])||e&&e[g])&&-1===g.indexOf("Origin")&&("number"==typeof f||"string"==typeof f)&&(i[g]="auto"!==f||"left"!==g&&"top"!==g?""!==f&&"auto"!==f&&"none"!==f||"string"!=typeof b[g]||""===b[g].replace(w,"")?f:0:da(a,g),void 0!==j[g]&&(h=new ua(j,g,j[g],h)));if(d)for(g in d)"className"!==g&&(i[g]=d[g]);return{difs:i,firstMPT:h}},ga={width:["Left","Right"],height:["Top","Bottom"]},ha=["marginLeft","marginRight","marginTop","marginBottom"],ia=function(a,b,c){if("svg"===(a.nodeName+"").toLowerCase())return(c||aa(a))[b]||0;if(a.getCTM&&Qa(a))return a.getBBox()[b]||0;var d=parseFloat("width"===b?a.offsetWidth:a.offsetHeight),e=ga[b],f=e.length;for(c=c||aa(a,null);--f>-1;)d-=parseFloat(ba(a,"padding"+e[f],c,!0))||0,d-=parseFloat(ba(a,"border"+e[f]+"Width",c,!0))||0;return d},ja=function(a,b){if("contain"===a||"auto"===a||"auto auto"===a)return a+" ";(null==a||""===a)&&(a="0 0");var c,d=a.split(" "),e=-1!==a.indexOf("left")?"0%":-1!==a.indexOf("right")?"100%":d[0],f=-1!==a.indexOf("top")?"0%":-1!==a.indexOf("bottom")?"100%":d[1];if(d.length>3&&!b){for(d=a.split(", ").join(",").split(","),a=[],c=0;c<d.length;c++)a.push(ja(d[c]));return a.join(",")}return null==f?f="center"===e?"50%":"0":"center"===f&&(f="50%"),("center"===e||isNaN(parseFloat(e))&&-1===(e+"").indexOf("="))&&(e="50%"),a=e+" "+f+(d.length>2?" "+d[2]:""),b&&(b.oxp=-1!==e.indexOf("%"),b.oyp=-1!==f.indexOf("%"),b.oxr="="===e.charAt(1),b.oyr="="===f.charAt(1),b.ox=parseFloat(e.replace(w,"")),b.oy=parseFloat(f.replace(w,"")),b.v=a),b||a},ka=function(a,b){return"function"==typeof a&&(a=a(r,q)),"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2)):parseFloat(a)-parseFloat(b)||0},la=function(a,b){"function"==typeof a&&(a=a(r,q));var c="string"==typeof a&&"="===a.charAt(1);return"string"==typeof a&&"v"===a.charAt(a.length-2)&&(a=(c?a.substr(0,2):0)+window["inner"+("vh"===a.substr(-2)?"Height":"Width")]*(parseFloat(c?a.substr(2):a)/100)),null==a?b:c?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2))+b:parseFloat(a)||0},ma=function(a,b,c,d){var e,f,g,h,i,j=1e-6;return"function"==typeof a&&(a=a(r,q)),null==a?h=b:"number"==typeof a?h=a:(e=360,f=a.split("_"),i="="===a.charAt(1),g=(i?parseInt(a.charAt(0)+"1",10)*parseFloat(f[0].substr(2)):parseFloat(f[0]))*(-1===a.indexOf("rad")?1:M)-(i?0:b),f.length&&(d&&(d[c]=b+g),-1!==a.indexOf("short")&&(g%=e,g!==g%(e/2)&&(g=0>g?g+e:g-e)),-1!==a.indexOf("_cw")&&0>g?g=(g+9999999999*e)%e-(g/e|0)*e:-1!==a.indexOf("ccw")&&g>0&&(g=(g-9999999999*e)%e-(g/e|0)*e)),h=b+g),j>h&&h>-j&&(h=0),h},na={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},oa=function(a,b,c){return a=0>a?a+1:a>1?a-1:a,255*(1>6*a?b+(c-b)*a*6:.5>a?c:2>3*a?b+(c-b)*(2/3-a)*6:b)+.5|0},pa=g.parseColor=function(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(a)if("number"==typeof a)c=[a>>16,a>>8&255,255&a];else{if(","===a.charAt(a.length-1)&&(a=a.substr(0,a.length-1)),na[a])c=na[a];else if("#"===a.charAt(0))4===a.length&&(d=a.charAt(1),e=a.charAt(2),f=a.charAt(3),a="#"+d+d+e+e+f+f),a=parseInt(a.substr(1),16),c=[a>>16,a>>8&255,255&a];else if("hsl"===a.substr(0,3))if(c=m=a.match(s),b){if(-1!==a.indexOf("="))return a.match(t)}else g=Number(c[0])%360/360,h=Number(c[1])/100,i=Number(c[2])/100,e=.5>=i?i*(h+1):i+h-i*h,d=2*i-e,c.length>3&&(c[3]=Number(c[3])),c[0]=oa(g+1/3,d,e),c[1]=oa(g,d,e),c[2]=oa(g-1/3,d,e);else c=a.match(s)||na.transparent;c[0]=Number(c[0]),c[1]=Number(c[1]),c[2]=Number(c[2]),c.length>3&&(c[3]=Number(c[3]))}else c=na.black;return b&&!m&&(d=c[0]/255,e=c[1]/255,f=c[2]/255,j=Math.max(d,e,f),k=Math.min(d,e,f),i=(j+k)/2,j===k?g=h=0:(l=j-k,h=i>.5?l/(2-j-k):l/(j+k),g=j===d?(e-f)/l+(f>e?6:0):j===e?(f-d)/l+2:(d-e)/l+4,g*=60),c[0]=g+.5|0,c[1]=100*h+.5|0,c[2]=100*i+.5|0),c},qa=function(a,b){var c,d,e,f=a.match(ra)||[],g=0,h="";if(!f.length)return a;for(c=0;c<f.length;c++)d=f[c],e=a.substr(g,a.indexOf(d,g)-g),g+=e.length+d.length,d=pa(d,b),3===d.length&&d.push(1),h+=e+(b?"hsla("+d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:"rgba("+d.join(","))+")";return h+a.substr(g)},ra="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(j in na)ra+="|"+j+"\\b";ra=new RegExp(ra+")","gi"),g.colorStringFilter=function(a){var b,c=a[0]+" "+a[1];ra.test(c)&&(b=-1!==c.indexOf("hsl(")||-1!==c.indexOf("hsla("),a[0]=qa(a[0],b),a[1]=qa(a[1],b)),ra.lastIndex=0},b.defaultStringFilter||(b.defaultStringFilter=g.colorStringFilter);var sa=function(a,b,c,d){if(null==a)return function(a){return a};var e,f=b?(a.match(ra)||[""])[0]:"",g=a.split(f).join("").match(u)||[],h=a.substr(0,a.indexOf(g[0])),i=")"===a.charAt(a.length-1)?")":"",j=-1!==a.indexOf(" ")?" ":",",k=g.length,l=k>0?g[0].replace(s,""):"";return k?e=b?function(a){var b,m,n,o;if("number"==typeof a)a+=l;else if(d&&J.test(a)){for(o=a.replace(J,"|").split("|"),n=0;n<o.length;n++)o[n]=e(o[n]);return o.join(",")}if(b=(a.match(ra)||[f])[0],m=a.split(b).join("").match(u)||[],n=m.length,k>n--)for(;++n<k;)m[n]=c?m[(n-1)/2|0]:g[n];return h+m.join(j)+j+b+i+(-1!==a.indexOf("inset")?" inset":"")}:function(a){var b,f,m;if("number"==typeof a)a+=l;else if(d&&J.test(a)){for(f=a.replace(J,"|").split("|"),m=0;m<f.length;m++)f[m]=e(f[m]);return f.join(",")}if(b=a.match(","===j?u:v)||[],m=b.length,k>m--)for(;++m<k;)b[m]=c?b[(m-1)/2|0]:g[m];return(h&&"none"!==a?a.substr(0,a.indexOf(b[0]))||h:h)+b.join(j)+i}:function(a){return a}},ta=function(a){return a=a.split(","),function(b,c,d,e,f,g,h){var i,j=(c+"").split(" ");for(h={},i=0;4>i;i++)h[a[i]]=j[i]=j[i]||j[(i-1)/2>>0];return e.parse(b,h,f,g)}},ua=(T._setPluginRatio=function(a){this.plugin.setRatio(a);for(var b,c,d,e,f,g=this.data,h=g.proxy,i=g.firstMPT,j=1e-6;i;)b=h[i.v],i.r?b=i.r(b):j>b&&b>-j&&(b=0),i.t[i.p]=b,i=i._next;if(g.autoRotate&&(g.autoRotate.rotation=g.mod?g.mod.call(this._tween,h.rotation,this.t,this._tween):h.rotation),1===a||0===a)for(i=g.firstMPT,f=1===a?"e":"b";i;){if(c=i.t,c.type){if(1===c.type){for(e=c.xs0+c.s+c.xs1,d=1;d<c.l;d++)e+=c["xn"+d]+c["xs"+(d+1)];c[f]=e}}else c[f]=c.s+c.xs0;i=i._next}},function(a,b,c,d,e){this.t=a,this.p=b,this.v=c,this.r=e,d&&(d._prev=this,this._next=d)}),va=(T._parseToProxy=function(a,b,c,d,e,f){var g,h,i,j,k,l=d,m={},n={},o=c._transform,p=N;for(c._transform=null,N=b,d=k=c.parse(a,b,d,e),N=p,f&&(c._transform=o,l&&(l._prev=null,l._prev&&(l._prev._next=null)));d&&d!==l;){if(d.type<=1&&(h=d.p,n[h]=d.s+d.c,m[h]=d.s,f||(j=new ua(d,"s",h,j,d.r),d.c=0),1===d.type))for(g=d.l;--g>0;)i="xn"+g,h=d.p+"_"+i,n[h]=d.data[i],m[h]=d[i],f||(j=new ua(d,i,h,j,d.rxp[i]));d=d._next}return{proxy:m,end:n,firstMPT:j,pt:k}},T.CSSPropTween=function(a,b,d,e,g,h,i,j,k,l,m){this.t=a,this.p=b,this.s=d,this.c=e,this.n=i||b,a instanceof va||f.push(this.n),this.r=j?"function"==typeof j?j:Math.round:j,this.type=h||0,k&&(this.pr=k,c=!0),this.b=void 0===l?d:l,this.e=void 0===m?d+e:m,g&&(this._next=g,g._prev=this)}),wa=function(a,b,c,d,e,f){var g=new va(a,b,c,d-c,e,-1,f);return g.b=c,g.e=g.xs0=d,g},xa=g.parseComplex=function(a,b,c,d,e,f,h,i,j,l){c=c||f||"","function"==typeof d&&(d=d(r,q)),h=new va(a,b,0,0,h,l?2:1,null,!1,i,c,d),d+="",e&&ra.test(d+c)&&(d=[c,d],g.colorStringFilter(d),c=d[0],d=d[1]);var m,n,o,p,u,v,w,x,y,z,A,B,C,D=c.split(", ").join(",").split(" "),E=d.split(", ").join(",").split(" "),F=D.length,G=k!==!1;for((-1!==d.indexOf(",")||-1!==c.indexOf(","))&&(-1!==(d+c).indexOf("rgb")||-1!==(d+c).indexOf("hsl")?(D=D.join(" ").replace(J,", ").split(" "),E=E.join(" ").replace(J,", ").split(" ")):(D=D.join(" ").split(",").join(", ").split(" "),E=E.join(" ").split(",").join(", ").split(" ")),F=D.length),F!==E.length&&(D=(f||"").split(" "),F=D.length),h.plugin=j,h.setRatio=l,ra.lastIndex=0,m=0;F>m;m++)if(p=D[m],u=E[m]+"",x=parseFloat(p),x||0===x)h.appendXtra("",x,ka(u,x),u.replace(t,""),G&&-1!==u.indexOf("px")?Math.round:!1,!0);else if(e&&ra.test(p))B=u.indexOf(")")+1,B=")"+(B?u.substr(B):""),C=-1!==u.indexOf("hsl")&&V,z=u,p=pa(p,C),u=pa(u,C),y=p.length+u.length>6,y&&!V&&0===u[3]?(h["xs"+h.l]+=h.l?" transparent":"transparent",h.e=h.e.split(E[m]).join("transparent")):(V||(y=!1),C?h.appendXtra(z.substr(0,z.indexOf("hsl"))+(y?"hsla(":"hsl("),p[0],ka(u[0],p[0]),",",!1,!0).appendXtra("",p[1],ka(u[1],p[1]),"%,",!1).appendXtra("",p[2],ka(u[2],p[2]),y?"%,":"%"+B,!1):h.appendXtra(z.substr(0,z.indexOf("rgb"))+(y?"rgba(":"rgb("),p[0],u[0]-p[0],",",Math.round,!0).appendXtra("",p[1],u[1]-p[1],",",Math.round).appendXtra("",p[2],u[2]-p[2],y?",":B,Math.round),y&&(p=p.length<4?1:p[3],h.appendXtra("",p,(u.length<4?1:u[3])-p,B,!1))),ra.lastIndex=0;else if(v=p.match(s)){if(w=u.match(t),!w||w.length!==v.length)return h;for(o=0,n=0;n<v.length;n++)A=v[n],z=p.indexOf(A,o),h.appendXtra(p.substr(o,z-o),Number(A),ka(w[n],A),"",G&&"px"===p.substr(z+A.length,2)?Math.round:!1,0===n),o=z+A.length;h["xs"+h.l]+=p.substr(o)}else h["xs"+h.l]+=h.l||h["xs"+h.l]?" "+u:u;if(-1!==d.indexOf("=")&&h.data){for(B=h.xs0+h.data.s,m=1;m<h.l;m++)B+=h["xs"+m]+h.data["xn"+m];h.e=B+h["xs"+m]}return h.l||(h.type=-1,h.xs0=h.e),h.xfirst||h},ya=9;for(j=va.prototype,j.l=j.pr=0;--ya>0;)j["xn"+ya]=0,j["xs"+ya]="";j.xs0="",j._next=j._prev=j.xfirst=j.data=j.plugin=j.setRatio=j.rxp=null,j.appendXtra=function(a,b,c,d,e,f){var g=this,h=g.l;return g["xs"+h]+=f&&(h||g["xs"+h])?" "+a:a||"",c||0===h||g.plugin?(g.l++,g.type=g.setRatio?2:1,g["xs"+g.l]=d||"",h>0?(g.data["xn"+h]=b+c,g.rxp["xn"+h]=e,g["xn"+h]=b,g.plugin||(g.xfirst=new va(g,"xn"+h,b,c,g.xfirst||g,0,g.n,e,g.pr),g.xfirst.xs0=0),g):(g.data={s:b+c},g.rxp={},g.s=b,g.c=c,g.r=e,g)):(g["xs"+h]+=b+(d||""),g)};var za=function(a,b){b=b||{},this.p=b.prefix?$(a)||a:a,i[a]=i[this.p]=this,this.format=b.formatter||sa(b.defaultValue,b.color,b.collapsible,b.multi),b.parser&&(this.parse=b.parser),this.clrs=b.color,this.multi=b.multi,this.keyword=b.keyword,this.dflt=b.defaultValue,this.allowFunc=b.allowFunc,this.pr=b.priority||0},Aa=T._registerComplexSpecialProp=function(a,b,c){"object"!=typeof b&&(b={parser:c});var d,e,f=a.split(","),g=b.defaultValue;for(c=c||[g],d=0;d<f.length;d++)b.prefix=0===d&&b.prefix,b.defaultValue=c[d]||g,e=new za(f[d],b)},Ba=T._registerPluginProp=function(a){if(!i[a]){var b=a.charAt(0).toUpperCase()+a.substr(1)+"Plugin";Aa(a,{parser:function(a,c,d,e,f,g,j){var k=h.com.greensock.plugins[b];return k?(k._cssRegister(),i[d].parse(a,c,d,e,f,g,j)):(X("Error: "+b+" js file not loaded."),f)}})}};j=za.prototype,j.parseComplex=function(a,b,c,d,e,f){var g,h,i,j,k,l,m=this.keyword;if(this.multi&&(J.test(c)||J.test(b)?(h=b.replace(J,"|").split("|"),i=c.replace(J,"|").split("|")):m&&(h=[b],i=[c])),i){for(j=i.length>h.length?i.length:h.length,g=0;j>g;g++)b=h[g]=h[g]||this.dflt,c=i[g]=i[g]||this.dflt,m&&(k=b.indexOf(m),l=c.indexOf(m),k!==l&&(-1===l?h[g]=h[g].split(m).join(""):-1===k&&(h[g]+=" "+m)));b=h.join(", "),c=i.join(", ")}return xa(a,this.p,b,c,this.clrs,this.dflt,d,this.pr,e,f)},j.parse=function(a,b,c,d,f,g,h){return this.parseComplex(a.style,this.format(ba(a,this.p,e,!1,this.dflt)),this.format(b),f,g)},g.registerSpecialProp=function(a,b,c){Aa(a,{parser:function(a,d,e,f,g,h,i){var j=new va(a,e,0,0,g,2,e,!1,c);return j.plugin=h,j.setRatio=b(a,d,f._tween,e),j},priority:c})},g.useSVGTransformAttr=!0;var Ca,Da="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),Ea=$("transform"),Fa=Y+"transform",Ga=$("transformOrigin"),Ha=null!==$("perspective"),Ia=T.Transform=function(){this.perspective=parseFloat(g.defaultTransformPerspective)||0,this.force3D=g.defaultForce3D!==!1&&Ha?g.defaultForce3D||"auto":!1},Ja=_gsScope.SVGElement,Ka=function(a,b,c){var d,e=P.createElementNS("http://www.w3.org/2000/svg",a),f=/([a-z])([A-Z])/g;for(d in c)e.setAttributeNS(null,d.replace(f,"$1-$2").toLowerCase(),c[d]);return b.appendChild(e),e},La=P.documentElement||{},Ma=function(){var a,b,c,d=p||/Android/i.test(U)&&!_gsScope.chrome;return P.createElementNS&&La.appendChild&&!d&&(a=Ka("svg",La),b=Ka("rect",a,{width:100,height:50,x:100}),c=b.getBoundingClientRect().width,b.style[Ga]="50% 50%",b.style[Ea]="scaleX(0.5)",d=c===b.getBoundingClientRect().width&&!(n&&Ha),La.removeChild(a)),d}(),Na=function(a,b,c,d,e,f){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=a._gsTransform,w=Sa(a,!0);v&&(t=v.xOrigin,u=v.yOrigin),(!d||(h=d.split(" ")).length<2)&&(n=a.getBBox(),0===n.x&&0===n.y&&n.width+n.height===0&&(n={x:parseFloat(a.hasAttribute("x")?a.getAttribute("x"):a.hasAttribute("cx")?a.getAttribute("cx"):0)||0,y:parseFloat(a.hasAttribute("y")?a.getAttribute("y"):a.hasAttribute("cy")?a.getAttribute("cy"):0)||0,width:0,height:0}),b=ja(b).split(" "),h=[(-1!==b[0].indexOf("%")?parseFloat(b[0])/100*n.width:parseFloat(b[0]))+n.x,(-1!==b[1].indexOf("%")?parseFloat(b[1])/100*n.height:parseFloat(b[1]))+n.y]),c.xOrigin=k=parseFloat(h[0]),c.yOrigin=l=parseFloat(h[1]),d&&w!==Ra&&(m=w[0],n=w[1],o=w[2],p=w[3],q=w[4],r=w[5],s=m*p-n*o,s&&(i=k*(p/s)+l*(-o/s)+(o*r-p*q)/s,j=k*(-n/s)+l*(m/s)-(m*r-n*q)/s,k=c.xOrigin=h[0]=i,l=c.yOrigin=h[1]=j)),v&&(f&&(c.xOffset=v.xOffset,c.yOffset=v.yOffset,v=c),e||e!==!1&&g.defaultSmoothOrigin!==!1?(i=k-t,j=l-u,v.xOffset+=i*w[0]+j*w[2]-i,v.yOffset+=i*w[1]+j*w[3]-j):v.xOffset=v.yOffset=0),f||a.setAttribute("data-svg-origin",h.join(" "))},Oa=function(a){var b,c=Q("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),d=this.parentNode,e=this.nextSibling,f=this.style.cssText;if(La.appendChild(c),c.appendChild(this),this.style.display="block",a)try{b=this.getBBox(),this._originalGetBBox=this.getBBox,this.getBBox=Oa}catch(g){}else this._originalGetBBox&&(b=this._originalGetBBox());return e?d.insertBefore(this,e):d.appendChild(this),La.removeChild(c),this.style.cssText=f,b},Pa=function(a){try{return a.getBBox()}catch(b){return Oa.call(a,!0)}},Qa=function(a){return!(!Ja||!a.getCTM||a.parentNode&&!a.ownerSVGElement||!Pa(a))},Ra=[1,0,0,1,0,0],Sa=function(a,b){var c,d,e,f,g,h,i,j=a._gsTransform||new Ia,k=1e5,l=a.style;if(Ea?d=ba(a,Fa,null,!0):a.currentStyle&&(d=a.currentStyle.filter.match(H),d=d&&4===d.length?[d[0].substr(4),Number(d[2].substr(4)),Number(d[1].substr(4)),d[3].substr(4),j.x||0,j.y||0].join(","):""),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,Ea&&c&&!a.offsetParent&&a!==La&&(f=l.display,l.display="block",i=a.parentNode,i&&a.offsetParent||(g=1,h=a.nextSibling,La.appendChild(a)),d=ba(a,Fa,null,!0),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,f?l.display=f:Xa(l,"display"),g&&(h?i.insertBefore(a,h):i?i.appendChild(a):La.removeChild(a))),(j.svg||a.getCTM&&Qa(a))&&(c&&-1!==(l[Ea]+"").indexOf("matrix")&&(d=l[Ea],c=0),e=a.getAttribute("transform"),c&&e&&(e=a.transform.baseVal.consolidate().matrix,d="matrix("+e.a+","+e.b+","+e.c+","+e.d+","+e.e+","+e.f+")",c=0)),c)return Ra;for(e=(d||"").match(s)||[],ya=e.length;--ya>-1;)f=Number(e[ya]),e[ya]=(g=f-(f|=0))?(g*k+(0>g?-.5:.5)|0)/k+f:f;return b&&e.length>6?[e[0],e[1],e[4],e[5],e[12],e[13]]:e},Ta=T.getTransform=function(a,c,d,e){if(a._gsTransform&&d&&!e)return a._gsTransform;var f,h,i,j,k,l,m=d?a._gsTransform||new Ia:new Ia,n=m.scaleX<0,o=2e-5,p=1e5,q=Ha?parseFloat(ba(a,Ga,c,!1,"0 0 0").split(" ")[2])||m.zOrigin||0:0,r=parseFloat(g.defaultTransformPerspective)||0;if(m.svg=!(!a.getCTM||!Qa(a)),m.svg&&(Na(a,ba(a,Ga,c,!1,"50% 50%")+"",m,a.getAttribute("data-svg-origin")),Ca=g.useSVGTransformAttr||Ma),f=Sa(a),f!==Ra){if(16===f.length){var s,t,u,v,w,x=f[0],y=f[1],z=f[2],A=f[3],B=f[4],C=f[5],D=f[6],E=f[7],F=f[8],G=f[9],H=f[10],I=f[12],J=f[13],K=f[14],L=f[11],N=Math.atan2(D,H);m.zOrigin&&(K=-m.zOrigin,I=F*K-f[12],J=G*K-f[13],K=H*K+m.zOrigin-f[14]),m.rotationX=N*M,N&&(v=Math.cos(-N),w=Math.sin(-N),s=B*v+F*w,t=C*v+G*w,u=D*v+H*w,F=B*-w+F*v,G=C*-w+G*v,H=D*-w+H*v,L=E*-w+L*v,B=s,C=t,D=u),N=Math.atan2(-z,H),m.rotationY=N*M,N&&(v=Math.cos(-N),w=Math.sin(-N),s=x*v-F*w,t=y*v-G*w,u=z*v-H*w,G=y*w+G*v,H=z*w+H*v,L=A*w+L*v,x=s,y=t,z=u),N=Math.atan2(y,x),m.rotation=N*M,N&&(v=Math.cos(N),w=Math.sin(N),s=x*v+y*w,t=B*v+C*w,u=F*v+G*w,y=y*v-x*w,C=C*v-B*w,G=G*v-F*w,x=s,B=t,F=u),m.rotationX&&Math.abs(m.rotationX)+Math.abs(m.rotation)>359.9&&(m.rotationX=m.rotation=0,m.rotationY=180-m.rotationY),N=Math.atan2(B,C),m.scaleX=(Math.sqrt(x*x+y*y+z*z)*p+.5|0)/p,m.scaleY=(Math.sqrt(C*C+D*D)*p+.5|0)/p,m.scaleZ=(Math.sqrt(F*F+G*G+H*H)*p+.5|0)/p,x/=m.scaleX,B/=m.scaleY,y/=m.scaleX,C/=m.scaleY,Math.abs(N)>o?(m.skewX=N*M,B=0,"simple"!==m.skewType&&(m.scaleY*=1/Math.cos(N))):m.skewX=0,m.perspective=L?1/(0>L?-L:L):0,m.x=I,m.y=J,m.z=K,m.svg&&(m.x-=m.xOrigin-(m.xOrigin*x-m.yOrigin*B),m.y-=m.yOrigin-(m.yOrigin*y-m.xOrigin*C))}else if(!Ha||e||!f.length||m.x!==f[4]||m.y!==f[5]||!m.rotationX&&!m.rotationY){var O=f.length>=6,P=O?f[0]:1,Q=f[1]||0,R=f[2]||0,S=O?f[3]:1;m.x=f[4]||0,m.y=f[5]||0,i=Math.sqrt(P*P+Q*Q),j=Math.sqrt(S*S+R*R),k=P||Q?Math.atan2(Q,P)*M:m.rotation||0,l=R||S?Math.atan2(R,S)*M+k:m.skewX||0,m.scaleX=i,m.scaleY=j,m.rotation=k,m.skewX=l,Ha&&(m.rotationX=m.rotationY=m.z=0,m.perspective=r,m.scaleZ=1),m.svg&&(m.x-=m.xOrigin-(m.xOrigin*P+m.yOrigin*R),m.y-=m.yOrigin-(m.xOrigin*Q+m.yOrigin*S))}Math.abs(m.skewX)>90&&Math.abs(m.skewX)<270&&(n?(m.scaleX*=-1,m.skewX+=m.rotation<=0?180:-180,m.rotation+=m.rotation<=0?180:-180):(m.scaleY*=-1,m.skewX+=m.skewX<=0?180:-180)),m.zOrigin=q;for(h in m)m[h]<o&&m[h]>-o&&(m[h]=0)}return d&&(a._gsTransform=m,m.svg&&(Ca&&a.style[Ea]?b.delayedCall(.001,function(){Xa(a.style,Ea)}):!Ca&&a.getAttribute("transform")&&b.delayedCall(.001,function(){a.removeAttribute("transform")}))),m},Ua=function(a){var b,c,d=this.data,e=-d.rotation*L,f=e+d.skewX*L,g=1e5,h=(Math.cos(e)*d.scaleX*g|0)/g,i=(Math.sin(e)*d.scaleX*g|0)/g,j=(Math.sin(f)*-d.scaleY*g|0)/g,k=(Math.cos(f)*d.scaleY*g|0)/g,l=this.t.style,m=this.t.currentStyle;if(m){c=i,i=-j,j=-c,b=m.filter,l.filter="";var n,o,q=this.t.offsetWidth,r=this.t.offsetHeight,s="absolute"!==m.position,t="progid:DXImageTransform.Microsoft.Matrix(M11="+h+", M12="+i+", M21="+j+", M22="+k,u=d.x+q*d.xPercent/100,v=d.y+r*d.yPercent/100;if(null!=d.ox&&(n=(d.oxp?q*d.ox*.01:d.ox)-q/2,o=(d.oyp?r*d.oy*.01:d.oy)-r/2,u+=n-(n*h+o*i),v+=o-(n*j+o*k)),s?(n=q/2,o=r/2,t+=", Dx="+(n-(n*h+o*i)+u)+", Dy="+(o-(n*j+o*k)+v)+")"):t+=", sizingMethod='auto expand')",-1!==b.indexOf("DXImageTransform.Microsoft.Matrix(")?l.filter=b.replace(I,t):l.filter=t+" "+b,(0===a||1===a)&&1===h&&0===i&&0===j&&1===k&&(s&&-1===t.indexOf("Dx=0, Dy=0")||y.test(b)&&100!==parseFloat(RegExp.$1)||-1===b.indexOf(b.indexOf("Alpha"))&&l.removeAttribute("filter")),!s){var w,z,A,B=8>p?1:-1;for(n=d.ieOffsetX||0,o=d.ieOffsetY||0,d.ieOffsetX=Math.round((q-((0>h?-h:h)*q+(0>i?-i:i)*r))/2+u),d.ieOffsetY=Math.round((r-((0>k?-k:k)*r+(0>j?-j:j)*q))/2+v),ya=0;4>ya;ya++)z=ha[ya],w=m[z],c=-1!==w.indexOf("px")?parseFloat(w):ca(this.t,z,parseFloat(w),w.replace(x,""))||0,A=c!==d[z]?2>ya?-d.ieOffsetX:-d.ieOffsetY:2>ya?n-d.ieOffsetX:o-d.ieOffsetY,l[z]=(d[z]=Math.round(c-A*(0===ya||2===ya?1:B)))+"px"}}},Va=T.set3DTransformRatio=T.setTransformRatio=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,o,p,q,r,s,t,u,v,w,x,y,z=this.data,A=this.t.style,B=z.rotation,C=z.rotationX,D=z.rotationY,E=z.scaleX,F=z.scaleY,G=z.scaleZ,H=z.x,I=z.y,J=z.z,K=z.svg,M=z.perspective,N=z.force3D,O=z.skewY,P=z.skewX;if(O&&(P+=O,B+=O),((1===a||0===a)&&"auto"===N&&(this.tween._totalTime===this.tween._totalDuration||!this.tween._totalTime)||!N)&&!J&&!M&&!D&&!C&&1===G||Ca&&K||!Ha)return void(B||P||K?(B*=L,x=P*L,y=1e5,c=Math.cos(B)*E,f=Math.sin(B)*E,d=Math.sin(B-x)*-F,g=Math.cos(B-x)*F,x&&"simple"===z.skewType&&(b=Math.tan(x-O*L),b=Math.sqrt(1+b*b),d*=b,g*=b,O&&(b=Math.tan(O*L),b=Math.sqrt(1+b*b),c*=b,f*=b)),K&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset,Ca&&(z.xPercent||z.yPercent)&&(q=this.t.getBBox(),H+=.01*z.xPercent*q.width,I+=.01*z.yPercent*q.height),q=1e-6,q>H&&H>-q&&(H=0),q>I&&I>-q&&(I=0)),u=(c*y|0)/y+","+(f*y|0)/y+","+(d*y|0)/y+","+(g*y|0)/y+","+H+","+I+")",K&&Ca?this.t.setAttribute("transform","matrix("+u):A[Ea]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+u):A[Ea]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+E+",0,0,"+F+","+H+","+I+")");if(n&&(q=1e-4,q>E&&E>-q&&(E=G=2e-5),q>F&&F>-q&&(F=G=2e-5),!M||z.z||z.rotationX||z.rotationY||(M=0)),B||P)B*=L,r=c=Math.cos(B),s=f=Math.sin(B),P&&(B-=P*L,r=Math.cos(B),s=Math.sin(B),"simple"===z.skewType&&(b=Math.tan((P-O)*L),b=Math.sqrt(1+b*b),r*=b,s*=b,z.skewY&&(b=Math.tan(O*L),b=Math.sqrt(1+b*b),c*=b,f*=b))),d=-s,g=r;else{if(!(D||C||1!==G||M||K))return void(A[Ea]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) translate3d(":"translate3d(")+H+"px,"+I+"px,"+J+"px)"+(1!==E||1!==F?" scale("+E+","+F+")":""));c=g=1,d=f=0}k=1,e=h=i=j=l=m=0,o=M?-1/M:0,p=z.zOrigin,q=1e-6,v=",",w="0",B=D*L,B&&(r=Math.cos(B),s=Math.sin(B),i=-s,l=o*-s,e=c*s,h=f*s,k=r,o*=r,c*=r,f*=r),B=C*L,B&&(r=Math.cos(B),s=Math.sin(B),b=d*r+e*s,t=g*r+h*s,j=k*s,m=o*s,e=d*-s+e*r,h=g*-s+h*r,k*=r,o*=r,d=b,g=t),1!==G&&(e*=G,h*=G,k*=G,o*=G),1!==F&&(d*=F,g*=F,j*=F,m*=F),1!==E&&(c*=E,f*=E,i*=E,l*=E),(p||K)&&(p&&(H+=e*-p,I+=h*-p,J+=k*-p+p),K&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset),q>H&&H>-q&&(H=w),q>I&&I>-q&&(I=w),q>J&&J>-q&&(J=0)),u=z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix3d(":"matrix3d(",u+=(q>c&&c>-q?w:c)+v+(q>f&&f>-q?w:f)+v+(q>i&&i>-q?w:i),u+=v+(q>l&&l>-q?w:l)+v+(q>d&&d>-q?w:d)+v+(q>g&&g>-q?w:g),
C||D||1!==G?(u+=v+(q>j&&j>-q?w:j)+v+(q>m&&m>-q?w:m)+v+(q>e&&e>-q?w:e),u+=v+(q>h&&h>-q?w:h)+v+(q>k&&k>-q?w:k)+v+(q>o&&o>-q?w:o)+v):u+=",0,0,0,0,1,0,",u+=H+v+I+v+J+v+(M?1+-J/M:1)+")",A[Ea]=u};j=Ia.prototype,j.x=j.y=j.z=j.skewX=j.skewY=j.rotation=j.rotationX=j.rotationY=j.zOrigin=j.xPercent=j.yPercent=j.xOffset=j.yOffset=0,j.scaleX=j.scaleY=j.scaleZ=1,Aa("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(a,b,c,d,f,h,i){if(d._lastParsedTransform===i)return f;d._lastParsedTransform=i;var j=i.scale&&"function"==typeof i.scale?i.scale:0;j&&(i.scale=j(r,a));var k,l,m,n,o,p,s,t,u,v=a._gsTransform,w=a.style,x=1e-6,y=Da.length,z=i,A={},B="transformOrigin",C=Ta(a,e,!0,z.parseTransform),D=z.transform&&("function"==typeof z.transform?z.transform(r,q):z.transform);if(C.skewType=z.skewType||C.skewType||g.defaultSkewType,d._transform=C,"rotationZ"in z&&(z.rotation=z.rotationZ),D&&"string"==typeof D&&Ea)l=R.style,l[Ea]=D,l.display="block",l.position="absolute",-1!==D.indexOf("%")&&(l.width=ba(a,"width"),l.height=ba(a,"height")),P.body.appendChild(R),k=Ta(R,null,!1),"simple"===C.skewType&&(k.scaleY*=Math.cos(k.skewX*L)),C.svg&&(p=C.xOrigin,s=C.yOrigin,k.x-=C.xOffset,k.y-=C.yOffset,(z.transformOrigin||z.svgOrigin)&&(D={},Na(a,ja(z.transformOrigin),D,z.svgOrigin,z.smoothOrigin,!0),p=D.xOrigin,s=D.yOrigin,k.x-=D.xOffset-C.xOffset,k.y-=D.yOffset-C.yOffset),(p||s)&&(t=Sa(R,!0),k.x-=p-(p*t[0]+s*t[2]),k.y-=s-(p*t[1]+s*t[3]))),P.body.removeChild(R),k.perspective||(k.perspective=C.perspective),null!=z.xPercent&&(k.xPercent=la(z.xPercent,C.xPercent)),null!=z.yPercent&&(k.yPercent=la(z.yPercent,C.yPercent));else if("object"==typeof z){if(k={scaleX:la(null!=z.scaleX?z.scaleX:z.scale,C.scaleX),scaleY:la(null!=z.scaleY?z.scaleY:z.scale,C.scaleY),scaleZ:la(z.scaleZ,C.scaleZ),x:la(z.x,C.x),y:la(z.y,C.y),z:la(z.z,C.z),xPercent:la(z.xPercent,C.xPercent),yPercent:la(z.yPercent,C.yPercent),perspective:la(z.transformPerspective,C.perspective)},o=z.directionalRotation,null!=o)if("object"==typeof o)for(l in o)z[l]=o[l];else z.rotation=o;"string"==typeof z.x&&-1!==z.x.indexOf("%")&&(k.x=0,k.xPercent=la(z.x,C.xPercent)),"string"==typeof z.y&&-1!==z.y.indexOf("%")&&(k.y=0,k.yPercent=la(z.y,C.yPercent)),k.rotation=ma("rotation"in z?z.rotation:"shortRotation"in z?z.shortRotation+"_short":C.rotation,C.rotation,"rotation",A),Ha&&(k.rotationX=ma("rotationX"in z?z.rotationX:"shortRotationX"in z?z.shortRotationX+"_short":C.rotationX||0,C.rotationX,"rotationX",A),k.rotationY=ma("rotationY"in z?z.rotationY:"shortRotationY"in z?z.shortRotationY+"_short":C.rotationY||0,C.rotationY,"rotationY",A)),k.skewX=ma(z.skewX,C.skewX),k.skewY=ma(z.skewY,C.skewY)}for(Ha&&null!=z.force3D&&(C.force3D=z.force3D,n=!0),m=C.force3D||C.z||C.rotationX||C.rotationY||k.z||k.rotationX||k.rotationY||k.perspective,m||null==z.scale||(k.scaleZ=1);--y>-1;)u=Da[y],D=k[u]-C[u],(D>x||-x>D||null!=z[u]||null!=N[u])&&(n=!0,f=new va(C,u,C[u],D,f),u in A&&(f.e=A[u]),f.xs0=0,f.plugin=h,d._overwriteProps.push(f.n));return D="function"==typeof z.transformOrigin?z.transformOrigin(r,q):z.transformOrigin,C.svg&&(D||z.svgOrigin)&&(p=C.xOffset,s=C.yOffset,Na(a,ja(D),k,z.svgOrigin,z.smoothOrigin),f=wa(C,"xOrigin",(v?C:k).xOrigin,k.xOrigin,f,B),f=wa(C,"yOrigin",(v?C:k).yOrigin,k.yOrigin,f,B),(p!==C.xOffset||s!==C.yOffset)&&(f=wa(C,"xOffset",v?p:C.xOffset,C.xOffset,f,B),f=wa(C,"yOffset",v?s:C.yOffset,C.yOffset,f,B)),D="0px 0px"),(D||Ha&&m&&C.zOrigin)&&(Ea?(n=!0,u=Ga,D||(D=(ba(a,u,e,!1,"50% 50%")+"").split(" "),D=D[0]+" "+D[1]+" "+C.zOrigin+"px"),D+="",f=new va(w,u,0,0,f,-1,B),f.b=w[u],f.plugin=h,Ha?(l=C.zOrigin,D=D.split(" "),C.zOrigin=(D.length>2?parseFloat(D[2]):l)||0,f.xs0=f.e=D[0]+" "+(D[1]||"50%")+" 0px",f=new va(C,"zOrigin",0,0,f,-1,f.n),f.b=l,f.xs0=f.e=C.zOrigin):f.xs0=f.e=D):ja(D+"",C)),n&&(d._transformType=C.svg&&Ca||!m&&3!==this._transformType?2:3),j&&(i.scale=j),f},allowFunc:!0,prefix:!0}),Aa("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),Aa("clipPath",{defaultValue:"inset(0%)",prefix:!0,multi:!0,formatter:sa("inset(0% 0% 0% 0%)",!1,!0)}),Aa("borderRadius",{defaultValue:"0px",parser:function(a,b,c,f,g,h){b=this.format(b);var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],z=a.style;for(q=parseFloat(a.offsetWidth),r=parseFloat(a.offsetHeight),i=b.split(" "),j=0;j<y.length;j++)this.p.indexOf("border")&&(y[j]=$(y[j])),m=l=ba(a,y[j],e,!1,"0px"),-1!==m.indexOf(" ")&&(l=m.split(" "),m=l[0],l=l[1]),n=k=i[j],o=parseFloat(m),t=m.substr((o+"").length),u="="===n.charAt(1),u?(p=parseInt(n.charAt(0)+"1",10),n=n.substr(2),p*=parseFloat(n),s=n.substr((p+"").length-(0>p?1:0))||""):(p=parseFloat(n),s=n.substr((p+"").length)),""===s&&(s=d[c]||t),s!==t&&(v=ca(a,"borderLeft",o,t),w=ca(a,"borderTop",o,t),"%"===s?(m=v/q*100+"%",l=w/r*100+"%"):"em"===s?(x=ca(a,"borderLeft",1,"em"),m=v/x+"em",l=w/x+"em"):(m=v+"px",l=w+"px"),u&&(n=parseFloat(m)+p+s,k=parseFloat(l)+p+s)),g=xa(z,y[j],m+" "+l,n+" "+k,!1,"0px",g);return g},prefix:!0,formatter:sa("0px 0px 0px 0px",!1,!0)}),Aa("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function(a,b,c,d,f,g){return xa(a.style,c,this.format(ba(a,c,e,!1,"0px 0px")),this.format(b),!1,"0px",f)},prefix:!0,formatter:sa("0px 0px",!1,!0)}),Aa("backgroundPosition",{defaultValue:"0 0",parser:function(a,b,c,d,f,g){var h,i,j,k,l,m,n="background-position",o=e||aa(a,null),q=this.format((o?p?o.getPropertyValue(n+"-x")+" "+o.getPropertyValue(n+"-y"):o.getPropertyValue(n):a.currentStyle.backgroundPositionX+" "+a.currentStyle.backgroundPositionY)||"0 0"),r=this.format(b);if(-1!==q.indexOf("%")!=(-1!==r.indexOf("%"))&&r.split(",").length<2&&(m=ba(a,"backgroundImage").replace(E,""),m&&"none"!==m)){for(h=q.split(" "),i=r.split(" "),S.setAttribute("src",m),j=2;--j>-1;)q=h[j],k=-1!==q.indexOf("%"),k!==(-1!==i[j].indexOf("%"))&&(l=0===j?a.offsetWidth-S.width:a.offsetHeight-S.height,h[j]=k?parseFloat(q)/100*l+"px":parseFloat(q)/l*100+"%");q=h.join(" ")}return this.parseComplex(a.style,q,r,f,g)},formatter:ja}),Aa("backgroundSize",{defaultValue:"0 0",formatter:function(a){return a+="","co"===a.substr(0,2)?a:ja(-1===a.indexOf(" ")?a+" "+a:a)}}),Aa("perspective",{defaultValue:"0px",prefix:!0}),Aa("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),Aa("transformStyle",{prefix:!0}),Aa("backfaceVisibility",{prefix:!0}),Aa("userSelect",{prefix:!0}),Aa("margin",{parser:ta("marginTop,marginRight,marginBottom,marginLeft")}),Aa("padding",{parser:ta("paddingTop,paddingRight,paddingBottom,paddingLeft")}),Aa("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(a,b,c,d,f,g){var h,i,j;return 9>p?(i=a.currentStyle,j=8>p?" ":",",h="rect("+i.clipTop+j+i.clipRight+j+i.clipBottom+j+i.clipLeft+")",b=this.format(b).split(",").join(j)):(h=this.format(ba(a,this.p,e,!1,this.dflt)),b=this.format(b)),this.parseComplex(a.style,h,b,f,g)}}),Aa("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),Aa("autoRound,strictUnits",{parser:function(a,b,c,d,e){return e}}),Aa("border",{defaultValue:"0px solid #000",parser:function(a,b,c,d,f,g){var h=ba(a,"borderTopWidth",e,!1,"0px"),i=this.format(b).split(" "),j=i[0].replace(x,"");return"px"!==j&&(h=parseFloat(h)/ca(a,"borderTopWidth",1,j)+j),this.parseComplex(a.style,this.format(h+" "+ba(a,"borderTopStyle",e,!1,"solid")+" "+ba(a,"borderTopColor",e,!1,"#000")),i.join(" "),f,g)},color:!0,formatter:function(a){var b=a.split(" ");return b[0]+" "+(b[1]||"solid")+" "+(a.match(ra)||["#000"])[0]}}),Aa("borderWidth",{parser:ta("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),Aa("float,cssFloat,styleFloat",{parser:function(a,b,c,d,e,f){var g=a.style,h="cssFloat"in g?"cssFloat":"styleFloat";return new va(g,h,0,0,e,-1,c,!1,0,g[h],b)}});var Wa=function(a){var b,c=this.t,d=c.filter||ba(this.data,"filter")||"",e=this.s+this.c*a|0;100===e&&(-1===d.indexOf("atrix(")&&-1===d.indexOf("radient(")&&-1===d.indexOf("oader(")?(c.removeAttribute("filter"),b=!ba(this.data,"filter")):(c.filter=d.replace(A,""),b=!0)),b||(this.xn1&&(c.filter=d=d||"alpha(opacity="+e+")"),-1===d.indexOf("pacity")?0===e&&this.xn1||(c.filter=d+" alpha(opacity="+e+")"):c.filter=d.replace(y,"opacity="+e))};Aa("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(a,b,c,d,f,g){var h=parseFloat(ba(a,"opacity",e,!1,"1")),i=a.style,j="autoAlpha"===c;return"string"==typeof b&&"="===b.charAt(1)&&(b=("-"===b.charAt(0)?-1:1)*parseFloat(b.substr(2))+h),j&&1===h&&"hidden"===ba(a,"visibility",e)&&0!==b&&(h=0),V?f=new va(i,"opacity",h,b-h,f):(f=new va(i,"opacity",100*h,100*(b-h),f),f.xn1=j?1:0,i.zoom=1,f.type=2,f.b="alpha(opacity="+f.s+")",f.e="alpha(opacity="+(f.s+f.c)+")",f.data=a,f.plugin=g,f.setRatio=Wa),j&&(f=new va(i,"visibility",0,0,f,-1,null,!1,0,0!==h?"inherit":"hidden",0===b?"hidden":"inherit"),f.xs0="inherit",d._overwriteProps.push(f.n),d._overwriteProps.push(c)),f}});var Xa=function(a,b){b&&(a.removeProperty?(("ms"===b.substr(0,2)||"webkit"===b.substr(0,6))&&(b="-"+b),a.removeProperty(b.replace(C,"-$1").toLowerCase())):a.removeAttribute(b))},Ya=function(a){if(this.t._gsClassPT=this,1===a||0===a){this.t.setAttribute("class",0===a?this.b:this.e);for(var b=this.data,c=this.t.style;b;)b.v?c[b.p]=b.v:Xa(c,b.p),b=b._next;1===a&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};Aa("className",{parser:function(a,b,d,f,g,h,i){var j,k,l,m,n,o=a.getAttribute("class")||"",p=a.style.cssText;if(g=f._classNamePT=new va(a,d,0,0,g,2),g.setRatio=Ya,g.pr=-11,c=!0,g.b=o,k=ea(a,e),l=a._gsClassPT){for(m={},n=l.data;n;)m[n.p]=1,n=n._next;l.setRatio(1)}return a._gsClassPT=g,g.e="="!==b.charAt(1)?b:o.replace(new RegExp("(?:\\s|^)"+b.substr(2)+"(?![\\w-])"),"")+("+"===b.charAt(0)?" "+b.substr(2):""),a.setAttribute("class",g.e),j=fa(a,k,ea(a),i,m),a.setAttribute("class",o),g.data=j.firstMPT,a.style.cssText!==p&&(a.style.cssText=p),g=g.xfirst=f.parse(a,j.difs,g,h)}});var Za=function(a){if((1===a||0===a)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var b,c,d,e,f,g=this.t.style,h=i.transform.parse;if("all"===this.e)g.cssText="",e=!0;else for(b=this.e.split(" ").join("").split(","),d=b.length;--d>-1;)c=b[d],i[c]&&(i[c].parse===h?e=!0:c="transformOrigin"===c?Ga:i[c].p),Xa(g,c);e&&(Xa(g,Ea),f=this.t._gsTransform,f&&(f.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._gsTransform))}};for(Aa("clearProps",{parser:function(a,b,d,e,f){return f=new va(a,d,0,0,f,2),f.setRatio=Za,f.e=b,f.pr=-10,f.data=e._tween,c=!0,f}}),j="bezier,throwProps,physicsProps,physics2D".split(","),ya=j.length;ya--;)Ba(j[ya]);j=g.prototype,j._firstPT=j._lastParsedTransform=j._transform=null,j._onInitTween=function(a,b,h,j){if(!a.nodeType)return!1;this._target=q=a,this._tween=h,this._vars=b,r=j,k=b.autoRound,c=!1,d=b.suffixMap||g.suffixMap,e=aa(a,""),f=this._overwriteProps;var n,p,s,t,u,v,w,x,y,A=a.style;if(l&&""===A.zIndex&&(n=ba(a,"zIndex",e),("auto"===n||""===n)&&this._addLazySet(A,"zIndex",0)),"string"==typeof b&&(t=A.cssText,n=ea(a,e),A.cssText=t+";"+b,n=fa(a,n,ea(a)).difs,!V&&z.test(b)&&(n.opacity=parseFloat(RegExp.$1)),b=n,A.cssText=t),b.className?this._firstPT=p=i.className.parse(a,b.className,"className",this,null,null,b):this._firstPT=p=this.parse(a,b,null),this._transformType){for(y=3===this._transformType,Ea?m&&(l=!0,""===A.zIndex&&(w=ba(a,"zIndex",e),("auto"===w||""===w)&&this._addLazySet(A,"zIndex",0)),o&&this._addLazySet(A,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(y?"visible":"hidden"))):A.zoom=1,s=p;s&&s._next;)s=s._next;x=new va(a,"transform",0,0,null,2),this._linkCSSP(x,null,s),x.setRatio=Ea?Va:Ua,x.data=this._transform||Ta(a,e,!0),x.tween=h,x.pr=-1,f.pop()}if(c){for(;p;){for(v=p._next,s=t;s&&s.pr>p.pr;)s=s._next;(p._prev=s?s._prev:u)?p._prev._next=p:t=p,(p._next=s)?s._prev=p:u=p,p=v}this._firstPT=t}return!0},j.parse=function(a,b,c,f){var g,h,j,l,m,n,o,p,s,t,u=a.style;for(g in b){if(n=b[g],h=i[g],"function"!=typeof n||h&&h.allowFunc||(n=n(r,q)),h)c=h.parse(a,n,g,this,c,f,b);else{if("--"===g.substr(0,2)){this._tween._propLookup[g]=this._addTween.call(this._tween,a.style,"setProperty",aa(a).getPropertyValue(g)+"",n+"",g,!1,g);continue}m=ba(a,g,e)+"",s="string"==typeof n,"color"===g||"fill"===g||"stroke"===g||-1!==g.indexOf("Color")||s&&B.test(n)?(s||(n=pa(n),n=(n.length>3?"rgba(":"rgb(")+n.join(",")+")"),c=xa(u,g,m,n,!0,"transparent",c,0,f)):s&&K.test(n)?c=xa(u,g,m,n,!0,null,c,0,f):(j=parseFloat(m),o=j||0===j?m.substr((j+"").length):"",(""===m||"auto"===m)&&("width"===g||"height"===g?(j=ia(a,g,e),o="px"):"left"===g||"top"===g?(j=da(a,g,e),o="px"):(j="opacity"!==g?0:1,o="")),t=s&&"="===n.charAt(1),t?(l=parseInt(n.charAt(0)+"1",10),n=n.substr(2),l*=parseFloat(n),p=n.replace(x,"")):(l=parseFloat(n),p=s?n.replace(x,""):""),""===p&&(p=g in d?d[g]:o),n=l||0===l?(t?l+j:l)+p:b[g],o!==p&&(""!==p||"lineHeight"===g)&&(l||0===l)&&j&&(j=ca(a,g,j,o),"%"===p?(j/=ca(a,g,100,"%")/100,b.strictUnits!==!0&&(m=j+"%")):"em"===p||"rem"===p||"vw"===p||"vh"===p?j/=ca(a,g,1,p):"px"!==p&&(l=ca(a,g,l,p),p="px"),t&&(l||0===l)&&(n=l+j+p)),t&&(l+=j),!j&&0!==j||!l&&0!==l?void 0!==u[g]&&(n||n+""!="NaN"&&null!=n)?(c=new va(u,g,l||j||0,0,c,-1,g,!1,0,m,n),c.xs0="none"!==n||"display"!==g&&-1===g.indexOf("Style")?n:m):X("invalid "+g+" tween value: "+b[g]):(c=new va(u,g,j,l-j,c,0,g,k!==!1&&("px"===p||"zIndex"===g),0,m,n),c.xs0=p))}f&&c&&!c.plugin&&(c.plugin=f)}return c},j.setRatio=function(a){var b,c,d,e=this._firstPT,f=1e-6;if(1!==a||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(a||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;e;){if(b=e.c*a+e.s,e.r?b=e.r(b):f>b&&b>-f&&(b=0),e.type)if(1===e.type)if(d=e.l,2===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2;else if(3===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3;else if(4===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4;else if(5===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4+e.xn4+e.xs5;else{for(c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}else-1===e.type?e.t[e.p]=e.xs0:e.setRatio&&e.setRatio(a);else e.t[e.p]=b+e.xs0;e=e._next}else for(;e;)2!==e.type?e.t[e.p]=e.b:e.setRatio(a),e=e._next;else for(;e;){if(2!==e.type)if(e.r&&-1!==e.type)if(b=e.r(e.s+e.c),e.type){if(1===e.type){for(d=e.l,c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}}else e.t[e.p]=b+e.xs0;else e.t[e.p]=e.e;else e.setRatio(a);e=e._next}},j._enableTransforms=function(a){this._transform=this._transform||Ta(this._target,e,!0),this._transformType=this._transform.svg&&Ca||!a&&3!==this._transformType?2:3};var $a=function(a){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};j._addLazySet=function(a,b,c){var d=this._firstPT=new va(a,b,0,0,this._firstPT,2);d.e=c,d.setRatio=$a,d.data=this},j._linkCSSP=function(a,b,c,d){return a&&(b&&(b._prev=a),a._next&&(a._next._prev=a._prev),a._prev?a._prev._next=a._next:this._firstPT===a&&(this._firstPT=a._next,d=!0),c?c._next=a:d||null!==this._firstPT||(this._firstPT=a),a._next=b,a._prev=c),a},j._mod=function(a){for(var b=this._firstPT;b;)"function"==typeof a[b.p]&&(b.r=a[b.p]),b=b._next},j._kill=function(b){var c,d,e,f=b;if(b.autoAlpha||b.alpha){f={};for(d in b)f[d]=b[d];f.opacity=1,f.autoAlpha&&(f.visibility=1)}for(b.className&&(c=this._classNamePT)&&(e=c.xfirst,e&&e._prev?this._linkCSSP(e._prev,c._next,e._prev._prev):e===this._firstPT&&(this._firstPT=c._next),c._next&&this._linkCSSP(c._next,c._next._next,e._prev),this._classNamePT=null),c=this._firstPT;c;)c.plugin&&c.plugin!==d&&c.plugin._kill&&(c.plugin._kill(b),d=c.plugin),c=c._next;return a.prototype._kill.call(this,f)};var _a=function(a,b,c){var d,e,f,g;if(a.slice)for(e=a.length;--e>-1;)_a(a[e],b,c);else for(d=a.childNodes,e=d.length;--e>-1;)f=d[e],g=f.type,f.style&&(b.push(ea(f)),c&&c.push(f)),1!==g&&9!==g&&11!==g||!f.childNodes.length||_a(f,b,c)};return g.cascadeTo=function(a,c,d){var e,f,g,h,i=b.to(a,c,d),j=[i],k=[],l=[],m=[],n=b._internals.reservedProps;for(a=i._targets||i.target,_a(a,k,m),i.render(c,!0,!0),_a(a,l),i.render(0,!0,!0),i._enabled(!0),e=m.length;--e>-1;)if(f=fa(m[e],k[e],l[e]),f.firstMPT){f=f.difs;for(g in d)n[g]&&(f[g]=d[g]);h={};for(g in f)h[g]=k[e][g];j.push(b.fromTo(m[e],c,h,f))}return j},a.activate([g]),g},!0),function(){var a=_gsScope._gsDefine.plugin({propName:"roundProps",version:"1.7.0",priority:-1,API:2,init:function(a,b,c){return this._tween=c,!0}}),b=function(a){var b=1>a?Math.pow(10,(a+"").length-2):1;return function(c){return(Math.round(c/a)*a*b|0)/b}},c=function(a,b){for(;a;)a.f||a.blob||(a.m=b||Math.round),a=a._next},d=a.prototype;d._onInitAllProps=function(){var a,d,e,f,g=this._tween,h=g.vars.roundProps,i={},j=g._propLookup.roundProps;if("object"!=typeof h||h.push)for("string"==typeof h&&(h=h.split(",")),e=h.length;--e>-1;)i[h[e]]=Math.round;else for(f in h)i[f]=b(h[f]);for(f in i)for(a=g._firstPT;a;)d=a._next,a.pg?a.t._mod(i):a.n===f&&(2===a.f&&a.t?c(a.t._firstPT,i[f]):(this._add(a.t,f,a.s,a.c,i[f]),d&&(d._prev=a._prev),a._prev?a._prev._next=d:g._firstPT===a&&(g._firstPT=d),a._next=a._prev=null,g._propLookup[f]=j)),a=d;return!1},d._add=function(a,b,c,d,e){this._addTween(a,b,c,c+d,b,e||Math.round),this._overwriteProps.push(b)}}(),function(){_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.6.1",init:function(a,b,c,d){var e,f;if("function"!=typeof a.setAttribute)return!1;for(e in b)f=b[e],"function"==typeof f&&(f=f(d,a)),this._addTween(a,"setAttribute",a.getAttribute(e)+"",f+"",e,!1,e),this._overwriteProps.push(e);return!0}})}(),_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.3.1",API:2,init:function(a,b,c,d){"object"!=typeof b&&(b={rotation:b}),this.finals={};var e,f,g,h,i,j,k=b.useRadians===!0?2*Math.PI:360,l=1e-6;for(e in b)"useRadians"!==e&&(h=b[e],"function"==typeof h&&(h=h(d,a)),j=(h+"").split("_"),f=j[0],g=parseFloat("function"!=typeof a[e]?a[e]:a[e.indexOf("set")||"function"!=typeof a["get"+e.substr(3)]?e:"get"+e.substr(3)]()),h=this.finals[e]="string"==typeof f&&"="===f.charAt(1)?g+parseInt(f.charAt(0)+"1",10)*Number(f.substr(2)):Number(f)||0,i=h-g,j.length&&(f=j.join("_"),-1!==f.indexOf("short")&&(i%=k,i!==i%(k/2)&&(i=0>i?i+k:i-k)),-1!==f.indexOf("_cw")&&0>i?i=(i+9999999999*k)%k-(i/k|0)*k:-1!==f.indexOf("ccw")&&i>0&&(i=(i-9999999999*k)%k-(i/k|0)*k)),(i>l||-l>i)&&(this._addTween(a,e,g,g+i,e),this._overwriteProps.push(e)));return!0},set:function(a){var b;if(1!==a)this._super.setRatio.call(this,a);else for(b=this._firstPT;b;)b.f?b.t[b.p](this.finals[b.p]):b.t[b.p]=this.finals[b.p],b=b._next}})._autoCSS=!0,_gsScope._gsDefine("easing.Back",["easing.Ease"],function(a){var b,c,d,e,f=_gsScope.GreenSockGlobals||_gsScope,g=f.com.greensock,h=2*Math.PI,i=Math.PI/2,j=g._class,k=function(b,c){var d=j("easing."+b,function(){},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,d},l=a.register||function(){},m=function(a,b,c,d,e){var f=j("easing."+a,{easeOut:new b,easeIn:new c,easeInOut:new d},!0);return l(f,a),f},n=function(a,b,c){this.t=a,this.v=b,c&&(this.next=c,c.prev=this,this.c=c.v-b,this.gap=c.t-a)},o=function(b,c){var d=j("easing."+b,function(a){this._p1=a||0===a?a:1.70158,this._p2=1.525*this._p1},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,e.config=function(a){return new d(a)},d},p=m("Back",o("BackOut",function(a){return(a-=1)*a*((this._p1+1)*a+this._p1)+1}),o("BackIn",function(a){return a*a*((this._p1+1)*a-this._p1)}),o("BackInOut",function(a){return(a*=2)<1?.5*a*a*((this._p2+1)*a-this._p2):.5*((a-=2)*a*((this._p2+1)*a+this._p2)+2)})),q=j("easing.SlowMo",function(a,b,c){b=b||0===b?b:.7,null==a?a=.7:a>1&&(a=1),this._p=1!==a?b:0,this._p1=(1-a)/2,this._p2=a,this._p3=this._p1+this._p2,this._calcEnd=c===!0},!0),r=q.prototype=new a;return r.constructor=q,r.getRatio=function(a){var b=a+(.5-a)*this._p;return a<this._p1?this._calcEnd?1-(a=1-a/this._p1)*a:b-(a=1-a/this._p1)*a*a*a*b:a>this._p3?this._calcEnd?1===a?0:1-(a=(a-this._p3)/this._p1)*a:b+(a-b)*(a=(a-this._p3)/this._p1)*a*a*a:this._calcEnd?1:b},q.ease=new q(.7,.7),r.config=q.config=function(a,b,c){return new q(a,b,c)},b=j("easing.SteppedEase",function(a,b){a=a||1,this._p1=1/a,this._p2=a+(b?0:1),this._p3=b?1:0},!0),r=b.prototype=new a,r.constructor=b,r.getRatio=function(a){return 0>a?a=0:a>=1&&(a=.999999999),((this._p2*a|0)+this._p3)*this._p1},r.config=b.config=function(a,c){return new b(a,c)},c=j("easing.ExpoScaleEase",function(a,b,c){this._p1=Math.log(b/a),this._p2=b-a,this._p3=a,this._ease=c},!0),r=c.prototype=new a,r.constructor=c,r.getRatio=function(a){return this._ease&&(a=this._ease.getRatio(a)),(this._p3*Math.exp(this._p1*a)-this._p3)/this._p2},r.config=c.config=function(a,b,d){return new c(a,b,d)},d=j("easing.RoughEase",function(b){b=b||{};for(var c,d,e,f,g,h,i=b.taper||"none",j=[],k=0,l=0|(b.points||20),m=l,o=b.randomize!==!1,p=b.clamp===!0,q=b.template instanceof a?b.template:null,r="number"==typeof b.strength?.4*b.strength:.4;--m>-1;)c=o?Math.random():1/l*m,d=q?q.getRatio(c):c,"none"===i?e=r:"out"===i?(f=1-c,e=f*f*r):"in"===i?e=c*c*r:.5>c?(f=2*c,e=f*f*.5*r):(f=2*(1-c),e=f*f*.5*r),o?d+=Math.random()*e-.5*e:m%2?d+=.5*e:d-=.5*e,p&&(d>1?d=1:0>d&&(d=0)),j[k++]={x:c,y:d};for(j.sort(function(a,b){return a.x-b.x}),h=new n(1,1,null),m=l;--m>-1;)g=j[m],h=new n(g.x,g.y,h);this._prev=new n(0,0,0!==h.t?h:h.next)},!0),r=d.prototype=new a,r.constructor=d,r.getRatio=function(a){var b=this._prev;if(a>b.t){for(;b.next&&a>=b.t;)b=b.next;b=b.prev}else for(;b.prev&&a<=b.t;)b=b.prev;return this._prev=b,b.v+(a-b.t)/b.gap*b.c},r.config=function(a){return new d(a)},d.ease=new d,m("Bounce",k("BounceOut",function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375}),k("BounceIn",function(a){return(a=1-a)<1/2.75?1-7.5625*a*a:2/2.75>a?1-(7.5625*(a-=1.5/2.75)*a+.75):2.5/2.75>a?1-(7.5625*(a-=2.25/2.75)*a+.9375):1-(7.5625*(a-=2.625/2.75)*a+.984375)}),k("BounceInOut",function(a){var b=.5>a;return a=b?1-2*a:2*a-1,a=1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375,b?.5*(1-a):.5*a+.5})),m("Circ",k("CircOut",function(a){return Math.sqrt(1-(a-=1)*a)}),k("CircIn",function(a){return-(Math.sqrt(1-a*a)-1)}),k("CircInOut",function(a){return(a*=2)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)})),e=function(b,c,d){var e=j("easing."+b,function(a,b){this._p1=a>=1?a:1,this._p2=(b||d)/(1>a?a:1),this._p3=this._p2/h*(Math.asin(1/this._p1)||0),this._p2=h/this._p2},!0),f=e.prototype=new a;return f.constructor=e,f.getRatio=c,f.config=function(a,b){return new e(a,b)},e},m("Elastic",e("ElasticOut",function(a){return this._p1*Math.pow(2,-10*a)*Math.sin((a-this._p3)*this._p2)+1},.3),e("ElasticIn",function(a){return-(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2))},.3),e("ElasticInOut",function(a){return(a*=2)<1?-.5*(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2)):this._p1*Math.pow(2,-10*(a-=1))*Math.sin((a-this._p3)*this._p2)*.5+1},.45)),m("Expo",k("ExpoOut",function(a){return 1-Math.pow(2,-10*a)}),k("ExpoIn",function(a){return Math.pow(2,10*(a-1))-.001}),k("ExpoInOut",function(a){return(a*=2)<1?.5*Math.pow(2,10*(a-1)):.5*(2-Math.pow(2,-10*(a-1)))})),m("Sine",k("SineOut",function(a){return Math.sin(a*i)}),k("SineIn",function(a){return-Math.cos(a*i)+1}),k("SineInOut",function(a){return-.5*(Math.cos(Math.PI*a)-1)})),j("easing.EaseLookup",{find:function(b){return a.map[b]}},!0),l(f.SlowMo,"SlowMo","ease,"),l(d,"RoughEase","ease,"),l(b,"SteppedEase","ease,"),p},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a,b){"use strict";var c={},d=a.document,e=a.GreenSockGlobals=a.GreenSockGlobals||a,f=e[b];if(f)return"undefined"!=typeof module&&module.exports&&(module.exports=f),f;var g,h,i,j,k,l=function(a){var b,c=a.split("."),d=e;for(b=0;b<c.length;b++)d[c[b]]=d=d[c[b]]||{};return d},m=l("com.greensock"),n=1e-8,o=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},p=function(){},q=function(){var a=Object.prototype.toString,b=a.call([]);return function(c){return null!=c&&(c instanceof Array||"object"==typeof c&&!!c.push&&a.call(c)===b)}}(),r={},s=function(d,f,g,h){this.sc=r[d]?r[d].sc:[],r[d]=this,this.gsClass=null,this.func=g;var i=[];this.check=function(j){for(var k,m,n,o,p=f.length,q=p;--p>-1;)(k=r[f[p]]||new s(f[p],[])).gsClass?(i[p]=k.gsClass,q--):j&&k.sc.push(this);if(0===q&&g){if(m=("com.greensock."+d).split("."),n=m.pop(),o=l(m.join("."))[n]=this.gsClass=g.apply(g,i),h)if(e[n]=c[n]=o,"undefined"!=typeof module&&module.exports)if(d===b){module.exports=c[b]=o;for(p in c)o[p]=c[p]}else c[b]&&(c[b][n]=o);else"function"==typeof define&&define.amd&&define((a.GreenSockAMDPath?a.GreenSockAMDPath+"/":"")+d.split(".").pop(),[],function(){return o});for(p=0;p<this.sc.length;p++)this.sc[p].check()}},this.check(!0)},t=a._gsDefine=function(a,b,c,d){return new s(a,b,c,d)},u=m._class=function(a,b,c){return b=b||function(){},t(a,[],function(){return b},c),b};t.globals=e;var v=[0,0,1,1],w=u("easing.Ease",function(a,b,c,d){this._func=a,this._type=c||0,this._power=d||0,this._params=b?v.concat(b):v},!0),x=w.map={},y=w.register=function(a,b,c,d){for(var e,f,g,h,i=b.split(","),j=i.length,k=(c||"easeIn,easeOut,easeInOut").split(",");--j>-1;)for(f=i[j],e=d?u("easing."+f,null,!0):m.easing[f]||{},g=k.length;--g>-1;)h=k[g],x[f+"."+h]=x[h+f]=e[h]=a.getRatio?a:a[h]||new a};for(i=w.prototype,i._calcEnd=!1,i.getRatio=function(a){if(this._func)return this._params[0]=a,this._func.apply(null,this._params);var b=this._type,c=this._power,d=1===b?1-a:2===b?a:.5>a?2*a:2*(1-a);return 1===c?d*=d:2===c?d*=d*d:3===c?d*=d*d*d:4===c&&(d*=d*d*d*d),1===b?1-d:2===b?d:.5>a?d/2:1-d/2},g=["Linear","Quad","Cubic","Quart","Quint,Strong"],h=g.length;--h>-1;)i=g[h]+",Power"+h,y(new w(null,null,1,h),i,"easeOut",!0),y(new w(null,null,2,h),i,"easeIn"+(0===h?",easeNone":"")),y(new w(null,null,3,h),i,"easeInOut");x.linear=m.easing.Linear.easeIn,x.swing=m.easing.Quad.easeInOut;var z=u("events.EventDispatcher",function(a){this._listeners={},this._eventTarget=a||this});i=z.prototype,i.addEventListener=function(a,b,c,d,e){e=e||0;var f,g,h=this._listeners[a],i=0;for(this!==j||k||j.wake(),null==h&&(this._listeners[a]=h=[]),g=h.length;--g>-1;)f=h[g],f.c===b&&f.s===c?h.splice(g,1):0===i&&f.pr<e&&(i=g+1);h.splice(i,0,{c:b,s:c,up:d,pr:e})},i.removeEventListener=function(a,b){var c,d=this._listeners[a];if(d)for(c=d.length;--c>-1;)if(d[c].c===b)return void d.splice(c,1)},i.dispatchEvent=function(a){var b,c,d,e=this._listeners[a];if(e)for(b=e.length,b>1&&(e=e.slice(0)),c=this._eventTarget;--b>-1;)d=e[b],d&&(d.up?d.c.call(d.s||c,{type:a,target:c}):d.c.call(d.s||c))};var A=a.requestAnimationFrame,B=a.cancelAnimationFrame,C=Date.now||function(){return(new Date).getTime()},D=C();for(g=["ms","moz","webkit","o"],h=g.length;--h>-1&&!A;)A=a[g[h]+"RequestAnimationFrame"],B=a[g[h]+"CancelAnimationFrame"]||a[g[h]+"CancelRequestAnimationFrame"];u("Ticker",function(a,b){var c,e,f,g,h,i=this,l=C(),m=b!==!1&&A?"auto":!1,o=500,q=33,r="tick",s=function(a){var b,d,j=C()-D;j>o&&(l+=j-q),D+=j,i.time=(D-l)/1e3,b=i.time-h,(!c||b>0||a===!0)&&(i.frame++,h+=b+(b>=g?.004:g-b),d=!0),a!==!0&&(f=e(s)),d&&i.dispatchEvent(r)};z.call(i),i.time=i.frame=0,i.tick=function(){s(!0)},i.lagSmoothing=function(a,b){return arguments.length?(o=a||1/n,void(q=Math.min(b,o,0))):1/n>o},i.sleep=function(){null!=f&&(m&&B?B(f):clearTimeout(f),e=p,f=null,i===j&&(k=!1))},i.wake=function(a){null!==f?i.sleep():a?l+=-D+(D=C()):i.frame>10&&(D=C()-o+5),e=0===c?p:m&&A?A:function(a){return setTimeout(a,1e3*(h-i.time)+1|0)},i===j&&(k=!0),s(2)},i.fps=function(a){return arguments.length?(c=a,g=1/(c||60),h=this.time+g,void i.wake()):c},i.useRAF=function(a){return arguments.length?(i.sleep(),m=a,void i.fps(c)):m},i.fps(a),setTimeout(function(){"auto"===m&&i.frame<5&&"hidden"!==(d||{}).visibilityState&&i.useRAF(!1)},1500)}),i=m.Ticker.prototype=new m.events.EventDispatcher,i.constructor=m.Ticker;var E=u("core.Animation",function(a,b){if(this.vars=b=b||{},this._duration=this._totalDuration=a||0,this._delay=Number(b.delay)||0,this._timeScale=1,this._active=!!b.immediateRender,this.data=b.data,this._reversed=!!b.reversed,Z){k||j.wake();var c=this.vars.useFrames?Y:Z;c.add(this,c._time),this.vars.paused&&this.paused(!0)}});j=E.ticker=new m.Ticker,i=E.prototype,i._dirty=i._gc=i._initted=i._paused=!1,i._totalTime=i._time=0,i._rawPrevTime=-1,i._next=i._last=i._onUpdate=i._timeline=i.timeline=null,i._paused=!1;var F=function(){k&&C()-D>2e3&&("hidden"!==(d||{}).visibilityState||!j.lagSmoothing())&&j.wake();var a=setTimeout(F,2e3);a.unref&&a.unref()};F(),i.play=function(a,b){return null!=a&&this.seek(a,b),this.reversed(!1).paused(!1)},i.pause=function(a,b){return null!=a&&this.seek(a,b),this.paused(!0)},i.resume=function(a,b){return null!=a&&this.seek(a,b),this.paused(!1)},i.seek=function(a,b){return this.totalTime(Number(a),b!==!1)},i.restart=function(a,b){return this.reversed(!1).paused(!1).totalTime(a?-this._delay:0,b!==!1,!0)},i.reverse=function(a,b){return null!=a&&this.seek(a||this.totalDuration(),b),this.reversed(!0).paused(!1)},i.render=function(a,b,c){},i.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},i.isActive=function(){var a,b=this._timeline,c=this._startTime;return!b||!this._gc&&!this._paused&&b.isActive()&&(a=b.rawTime(!0))>=c&&a<c+this.totalDuration()/this._timeScale-n},i._enabled=function(a,b){return k||j.wake(),this._gc=!a,this._active=this.isActive(),b!==!0&&(a&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!a&&this.timeline&&this._timeline._remove(this,!0)),!1},i._kill=function(a,b){return this._enabled(!1,!1)},i.kill=function(a,b){return this._kill(a,b),this},i._uncache=function(a){for(var b=a?this:this.timeline;b;)b._dirty=!0,b=b.timeline;return this},i._swapSelfInParams=function(a){for(var b=a.length,c=a.concat();--b>-1;)"{self}"===a[b]&&(c[b]=this);return c},i._callback=function(a){var b=this.vars,c=b[a],d=b[a+"Params"],e=b[a+"Scope"]||b.callbackScope||this,f=d?d.length:0;switch(f){case 0:c.call(e);break;case 1:c.call(e,d[0]);break;case 2:c.call(e,d[0],d[1]);break;default:c.apply(e,d)}},i.eventCallback=function(a,b,c,d){if("on"===(a||"").substr(0,2)){var e=this.vars;if(1===arguments.length)return e[a];null==b?delete e[a]:(e[a]=b,e[a+"Params"]=q(c)&&-1!==c.join("").indexOf("{self}")?this._swapSelfInParams(c):c,e[a+"Scope"]=d),"onUpdate"===a&&(this._onUpdate=b)}return this},i.delay=function(a){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+a-this._delay),this._delay=a,this):this._delay},i.duration=function(a){return arguments.length?(this._duration=this._totalDuration=a,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==a&&this.totalTime(this._totalTime*(a/this._duration),!0),this):(this._dirty=!1,this._duration)},i.totalDuration=function(a){return this._dirty=!1,arguments.length?this.duration(a):this._totalDuration},i.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(a>this._duration?this._duration:a,b)):this._time},i.totalTime=function(a,b,c){if(k||j.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>a&&!c&&(a+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var d=this._totalDuration,e=this._timeline;if(a>d&&!c&&(a=d),this._startTime=(this._paused?this._pauseTime:e._time)-(this._reversed?d-a:a)/this._timeScale,e._dirty||this._uncache(!1),e._timeline)for(;e._timeline;)e._timeline._time!==(e._startTime+e._totalTime)/e._timeScale&&e.totalTime(e._totalTime,!0),
e=e._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==a||0===this._duration)&&(K.length&&_(),this.render(a,b,!1),K.length&&_())}return this},i.progress=i.totalProgress=function(a,b){var c=this.duration();return arguments.length?this.totalTime(c*a,b):c?this._time/c:this.ratio},i.startTime=function(a){return arguments.length?(a!==this._startTime&&(this._startTime=a,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,a-this._delay)),this):this._startTime},i.endTime=function(a){return this._startTime+(0!=a?this.totalDuration():this.duration())/this._timeScale},i.timeScale=function(a){if(!arguments.length)return this._timeScale;var b,c;for(a=a||n,this._timeline&&this._timeline.smoothChildTiming&&(b=this._pauseTime,c=b||0===b?b:this._timeline.totalTime(),this._startTime=c-(c-this._startTime)*this._timeScale/a),this._timeScale=a,c=this.timeline;c&&c.timeline;)c._dirty=!0,c.totalDuration(),c=c.timeline;return this},i.reversed=function(a){return arguments.length?(a!=this._reversed&&(this._reversed=a,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},i.paused=function(a){if(!arguments.length)return this._paused;var b,c,d=this._timeline;return a!=this._paused&&d&&(k||a||j.wake(),b=d.rawTime(),c=b-this._pauseTime,!a&&d.smoothChildTiming&&(this._startTime+=c,this._uncache(!1)),this._pauseTime=a?b:null,this._paused=a,this._active=this.isActive(),!a&&0!==c&&this._initted&&this.duration()&&(b=d.smoothChildTiming?this._totalTime:(b-this._startTime)/this._timeScale,this.render(b,b===this._totalTime,!0))),this._gc&&!a&&this._enabled(!0,!1),this};var G=u("core.SimpleTimeline",function(a){E.call(this,0,a),this.autoRemoveChildren=this.smoothChildTiming=!0});i=G.prototype=new E,i.constructor=G,i.kill()._gc=!1,i._first=i._last=i._recent=null,i._sortChildren=!1,i.add=i.insert=function(a,b,c,d){var e,f;if(a._startTime=Number(b||0)+a._delay,a._paused&&this!==a._timeline&&(a._pauseTime=this.rawTime()-(a._timeline.rawTime()-a._pauseTime)),a.timeline&&a.timeline._remove(a,!0),a.timeline=a._timeline=this,a._gc&&a._enabled(!0,!0),e=this._last,this._sortChildren)for(f=a._startTime;e&&e._startTime>f;)e=e._prev;return e?(a._next=e._next,e._next=a):(a._next=this._first,this._first=a),a._next?a._next._prev=a:this._last=a,a._prev=e,this._recent=a,this._timeline&&this._uncache(!0),this},i._remove=function(a,b){return a.timeline===this&&(b||a._enabled(!1,!0),a._prev?a._prev._next=a._next:this._first===a&&(this._first=a._next),a._next?a._next._prev=a._prev:this._last===a&&(this._last=a._prev),a._next=a._prev=a.timeline=null,a===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},i.render=function(a,b,c){var d,e=this._first;for(this._totalTime=this._time=this._rawPrevTime=a;e;)d=e._next,(e._active||a>=e._startTime&&!e._paused&&!e._gc)&&(e._reversed?e.render((e._dirty?e.totalDuration():e._totalDuration)-(a-e._startTime)*e._timeScale,b,c):e.render((a-e._startTime)*e._timeScale,b,c)),e=d},i.rawTime=function(){return k||j.wake(),this._totalTime};var H=u("TweenLite",function(b,c,d){if(E.call(this,c,d),this.render=H.prototype.render,null==b)throw"Cannot tween a null target.";this.target=b="string"!=typeof b?b:H.selector(b)||b;var e,f,g,h=b.jquery||b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType),i=this.vars.overwrite;if(this._overwrite=i=null==i?X[H.defaultOverwrite]:"number"==typeof i?i>>0:X[i],(h||b instanceof Array||b.push&&q(b))&&"number"!=typeof b[0])for(this._targets=g=o(b),this._propLookup=[],this._siblings=[],e=0;e<g.length;e++)f=g[e],f?"string"!=typeof f?f.length&&f!==a&&f[0]&&(f[0]===a||f[0].nodeType&&f[0].style&&!f.nodeType)?(g.splice(e--,1),this._targets=g=g.concat(o(f))):(this._siblings[e]=aa(f,this,!1),1===i&&this._siblings[e].length>1&&ca(f,this,null,1,this._siblings[e])):(f=g[e--]=H.selector(f),"string"==typeof f&&g.splice(e+1,1)):g.splice(e--,1);else this._propLookup={},this._siblings=aa(b,this,!1),1===i&&this._siblings.length>1&&ca(b,this,null,1,this._siblings);(this.vars.immediateRender||0===c&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-n,this.render(Math.min(0,-this._delay)))},!0),I=function(b){return b&&b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType)},J=function(a,b){var c,d={};for(c in a)W[c]||c in b&&"transform"!==c&&"x"!==c&&"y"!==c&&"width"!==c&&"height"!==c&&"className"!==c&&"border"!==c||!(!T[c]||T[c]&&T[c]._autoCSS)||(d[c]=a[c],delete a[c]);a.css=d};i=H.prototype=new E,i.constructor=H,i.kill()._gc=!1,i.ratio=0,i._firstPT=i._targets=i._overwrittenProps=i._startAt=null,i._notifyPluginsOfEnabled=i._lazy=!1,H.version="2.1.3",H.defaultEase=i._ease=new w(null,null,1,1),H.defaultOverwrite="auto",H.ticker=j,H.autoSleep=120,H.lagSmoothing=function(a,b){j.lagSmoothing(a,b)},H.selector=a.$||a.jQuery||function(b){var c=a.$||a.jQuery;return c?(H.selector=c,c(b)):(d||(d=a.document),d?d.querySelectorAll?d.querySelectorAll(b):d.getElementById("#"===b.charAt(0)?b.substr(1):b):b)};var K=[],L={},M=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,N=/[\+-]=-?[\.\d]/,O=function(a){for(var b,c=this._firstPT,d=1e-6;c;)b=c.blob?1===a&&null!=this.end?this.end:a?this.join(""):this.start:c.c*a+c.s,c.m?b=c.m.call(this._tween,b,this._target||c.t,this._tween):d>b&&b>-d&&!c.blob&&(b=0),c.f?c.fp?c.t[c.p](c.fp,b):c.t[c.p](b):c.t[c.p]=b,c=c._next},P=function(a){return(1e3*a|0)/1e3+""},Q=function(a,b,c,d){var e,f,g,h,i,j,k,l=[],m=0,n="",o=0;for(l.start=a,l.end=b,a=l[0]=a+"",b=l[1]=b+"",c&&(c(l),a=l[0],b=l[1]),l.length=0,e=a.match(M)||[],f=b.match(M)||[],d&&(d._next=null,d.blob=1,l._firstPT=l._applyPT=d),i=f.length,h=0;i>h;h++)k=f[h],j=b.substr(m,b.indexOf(k,m)-m),n+=j||!h?j:",",m+=j.length,o?o=(o+1)%5:"rgba("===j.substr(-5)&&(o=1),k===e[h]||e.length<=h?n+=k:(n&&(l.push(n),n=""),g=parseFloat(e[h]),l.push(g),l._firstPT={_next:l._firstPT,t:l,p:l.length-1,s:g,c:("="===k.charAt(1)?parseInt(k.charAt(0)+"1",10)*parseFloat(k.substr(2)):parseFloat(k)-g)||0,f:0,m:o&&4>o?Math.round:P}),m+=k.length;return n+=b.substr(m),n&&l.push(n),l.setRatio=O,N.test(b)&&(l.end=null),l},R=function(a,b,c,d,e,f,g,h,i){"function"==typeof d&&(d=d(i||0,a));var j,k=typeof a[b],l="function"!==k?"":b.indexOf("set")||"function"!=typeof a["get"+b.substr(3)]?b:"get"+b.substr(3),m="get"!==c?c:l?g?a[l](g):a[l]():a[b],n="string"==typeof d&&"="===d.charAt(1),o={t:a,p:b,s:m,f:"function"===k,pg:0,n:e||b,m:f?"function"==typeof f?f:Math.round:0,pr:0,c:n?parseInt(d.charAt(0)+"1",10)*parseFloat(d.substr(2)):parseFloat(d)-m||0};return("number"!=typeof m||"number"!=typeof d&&!n)&&(g||isNaN(m)||!n&&isNaN(d)||"boolean"==typeof m||"boolean"==typeof d?(o.fp=g,j=Q(m,n?parseFloat(o.s)+o.c+(o.s+"").replace(/[0-9\-\.]/g,""):d,h||H.defaultStringFilter,o),o={t:j,p:"setRatio",s:0,c:1,f:2,pg:0,n:e||b,pr:0,m:0}):(o.s=parseFloat(m),n||(o.c=parseFloat(d)-o.s||0))),o.c?((o._next=this._firstPT)&&(o._next._prev=o),this._firstPT=o,o):void 0},S=H._internals={isArray:q,isSelector:I,lazyTweens:K,blobDif:Q},T=H._plugins={},U=S.tweenLookup={},V=0,W=S.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1,yoyoEase:1,stagger:1},X={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},Y=E._rootFramesTimeline=new G,Z=E._rootTimeline=new G,$=30,_=S.lazyRender=function(){var a,b,c=K.length;for(L={},a=0;c>a;a++)b=K[a],b&&b._lazy!==!1&&(b.render(b._lazy[0],b._lazy[1],!0),b._lazy=!1);K.length=0};Z._startTime=j.time,Y._startTime=j.frame,Z._active=Y._active=!0,setTimeout(_,1),E._updateRoot=H.render=function(){var a,b,c;if(K.length&&_(),Z.render((j.time-Z._startTime)*Z._timeScale,!1,!1),Y.render((j.frame-Y._startTime)*Y._timeScale,!1,!1),K.length&&_(),j.frame>=$){$=j.frame+(parseInt(H.autoSleep,10)||120);for(c in U){for(b=U[c].tweens,a=b.length;--a>-1;)b[a]._gc&&b.splice(a,1);0===b.length&&delete U[c]}if(c=Z._first,(!c||c._paused)&&H.autoSleep&&!Y._first&&1===j._listeners.tick.length){for(;c&&c._paused;)c=c._next;c||j.sleep()}}},j.addEventListener("tick",E._updateRoot);var aa=function(a,b,c){var d,e,f=a._gsTweenID;if(U[f||(a._gsTweenID=f="t"+V++)]||(U[f]={target:a,tweens:[]}),b&&(d=U[f].tweens,d[e=d.length]=b,c))for(;--e>-1;)d[e]===b&&d.splice(e,1);return U[f].tweens},ba=function(a,b,c,d){var e,f,g=a.vars.onOverwrite;return g&&(e=g(a,b,c,d)),g=H.onOverwrite,g&&(f=g(a,b,c,d)),e!==!1&&f!==!1},ca=function(a,b,c,d,e){var f,g,h,i;if(1===d||d>=4){for(i=e.length,f=0;i>f;f++)if((h=e[f])!==b)h._gc||h._kill(null,a,b)&&(g=!0);else if(5===d)break;return g}var j,k=b._startTime+n,l=[],m=0,o=0===b._duration;for(f=e.length;--f>-1;)(h=e[f])===b||h._gc||h._paused||(h._timeline!==b._timeline?(j=j||da(b,0,o),0===da(h,j,o)&&(l[m++]=h)):h._startTime<=k&&h._startTime+h.totalDuration()/h._timeScale>k&&((o||!h._initted)&&k-h._startTime<=2*n||(l[m++]=h)));for(f=m;--f>-1;)if(h=l[f],i=h._firstPT,2===d&&h._kill(c,a,b)&&(g=!0),2!==d||!h._firstPT&&h._initted&&i){if(2!==d&&!ba(h,b))continue;h._enabled(!1,!1)&&(g=!0)}return g},da=function(a,b,c){for(var d=a._timeline,e=d._timeScale,f=a._startTime;d._timeline;){if(f+=d._startTime,e*=d._timeScale,d._paused)return-100;d=d._timeline}return f/=e,f>b?f-b:c&&f===b||!a._initted&&2*n>f-b?n:(f+=a.totalDuration()/a._timeScale/e)>b+n?0:f-b-n};i._init=function(){var a,b,c,d,e,f,g=this.vars,h=this._overwrittenProps,i=this._duration,j=!!g.immediateRender,k=g.ease,l=this._startAt;if(g.startAt){l&&(l.render(-1,!0),l.kill()),e={};for(d in g.startAt)e[d]=g.startAt[d];if(e.data="isStart",e.overwrite=!1,e.immediateRender=!0,e.lazy=j&&g.lazy!==!1,e.startAt=e.delay=null,e.onUpdate=g.onUpdate,e.onUpdateParams=g.onUpdateParams,e.onUpdateScope=g.onUpdateScope||g.callbackScope||this,this._startAt=H.to(this.target||{},0,e),j)if(this._time>0)this._startAt=null;else if(0!==i)return}else if(g.runBackwards&&0!==i)if(l)l.render(-1,!0),l.kill(),this._startAt=null;else{0!==this._time&&(j=!1),c={};for(d in g)W[d]&&"autoCSS"!==d||(c[d]=g[d]);if(c.overwrite=0,c.data="isFromStart",c.lazy=j&&g.lazy!==!1,c.immediateRender=j,this._startAt=H.to(this.target,0,c),j){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=k=k?k instanceof w?k:"function"==typeof k?new w(k,g.easeParams):x[k]||H.defaultEase:H.defaultEase,g.easeParams instanceof Array&&k.config&&(this._ease=k.config.apply(k,g.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(f=this._targets.length,a=0;f>a;a++)this._initProps(this._targets[a],this._propLookup[a]={},this._siblings[a],h?h[a]:null,a)&&(b=!0);else b=this._initProps(this.target,this._propLookup,this._siblings,h,0);if(b&&H._onPluginEvent("_onInitAllProps",this),h&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),g.runBackwards)for(c=this._firstPT;c;)c.s+=c.c,c.c=-c.c,c=c._next;this._onUpdate=g.onUpdate,this._initted=!0},i._initProps=function(b,c,d,e,f){var g,h,i,j,k,l;if(null==b)return!1;L[b._gsTweenID]&&_(),this.vars.css||b.style&&b!==a&&b.nodeType&&T.css&&this.vars.autoCSS!==!1&&J(this.vars,b);for(g in this.vars)if(l=this.vars[g],W[g])l&&(l instanceof Array||l.push&&q(l))&&-1!==l.join("").indexOf("{self}")&&(this.vars[g]=l=this._swapSelfInParams(l,this));else if(T[g]&&(j=new T[g])._onInitTween(b,this.vars[g],this,f)){for(this._firstPT=k={_next:this._firstPT,t:j,p:"setRatio",s:0,c:1,f:1,n:g,pg:1,pr:j._priority,m:0},h=j._overwriteProps.length;--h>-1;)c[j._overwriteProps[h]]=this._firstPT;(j._priority||j._onInitAllProps)&&(i=!0),(j._onDisable||j._onEnable)&&(this._notifyPluginsOfEnabled=!0),k._next&&(k._next._prev=k)}else c[g]=R.call(this,b,g,"get",l,g,0,null,this.vars.stringFilter,f);return e&&this._kill(e,b)?this._initProps(b,c,d,e,f):this._overwrite>1&&this._firstPT&&d.length>1&&ca(b,this,c,this._overwrite,d)?(this._kill(c,b),this._initProps(b,c,d,e,f)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(L[b._gsTweenID]=!0),i)},i.render=function(a,b,c){var d,e,f,g,h=this,i=h._time,j=h._duration,k=h._rawPrevTime;if(a>=j-n&&a>=0)h._totalTime=h._time=j,h.ratio=h._ease._calcEnd?h._ease.getRatio(1):1,h._reversed||(d=!0,e="onComplete",c=c||h._timeline.autoRemoveChildren),0===j&&(h._initted||!h.vars.lazy||c)&&(h._startTime===h._timeline._duration&&(a=0),(0>k||0>=a&&a>=-n||k===n&&"isPause"!==h.data)&&k!==a&&(c=!0,k>n&&(e="onReverseComplete")),h._rawPrevTime=g=!b||a||k===a?a:n);else if(n>a)h._totalTime=h._time=0,h.ratio=h._ease._calcEnd?h._ease.getRatio(0):0,(0!==i||0===j&&k>0)&&(e="onReverseComplete",d=h._reversed),a>-n?a=0:0>a&&(h._active=!1,0===j&&(h._initted||!h.vars.lazy||c)&&(k>=0&&(k!==n||"isPause"!==h.data)&&(c=!0),h._rawPrevTime=g=!b||a||k===a?a:n)),(!h._initted||h._startAt&&h._startAt.progress())&&(c=!0);else if(h._totalTime=h._time=a,h._easeType){var l=a/j,m=h._easeType,o=h._easePower;(1===m||3===m&&l>=.5)&&(l=1-l),3===m&&(l*=2),1===o?l*=l:2===o?l*=l*l:3===o?l*=l*l*l:4===o&&(l*=l*l*l*l),h.ratio=1===m?1-l:2===m?l:.5>a/j?l/2:1-l/2}else h.ratio=h._ease.getRatio(a/j);if(h._time!==i||c){if(!h._initted){if(h._init(),!h._initted||h._gc)return;if(!c&&h._firstPT&&(h.vars.lazy!==!1&&h._duration||h.vars.lazy&&!h._duration))return h._time=h._totalTime=i,h._rawPrevTime=k,K.push(h),void(h._lazy=[a,b]);h._time&&!d?h.ratio=h._ease.getRatio(h._time/j):d&&h._ease._calcEnd&&(h.ratio=h._ease.getRatio(0===h._time?0:1))}for(h._lazy!==!1&&(h._lazy=!1),h._active||!h._paused&&h._time!==i&&a>=0&&(h._active=!0),0===i&&(h._startAt&&(a>=0?h._startAt.render(a,!0,c):e||(e="_dummyGS")),h.vars.onStart&&(0!==h._time||0===j)&&(b||h._callback("onStart"))),f=h._firstPT;f;)f.f?f.t[f.p](f.c*h.ratio+f.s):f.t[f.p]=f.c*h.ratio+f.s,f=f._next;h._onUpdate&&(0>a&&h._startAt&&a!==-1e-4&&h._startAt.render(a,!0,c),b||(h._time!==i||d||c)&&h._callback("onUpdate")),e&&(!h._gc||c)&&(0>a&&h._startAt&&!h._onUpdate&&a!==-1e-4&&h._startAt.render(a,!0,c),d&&(h._timeline.autoRemoveChildren&&h._enabled(!1,!1),h._active=!1),!b&&h.vars[e]&&h._callback(e),0===j&&h._rawPrevTime===n&&g!==n&&(h._rawPrevTime=0))}},i._kill=function(a,b,c){if("all"===a&&(a=null),null==a&&(null==b||b===this.target))return this._lazy=!1,this._enabled(!1,!1);b="string"!=typeof b?b||this._targets||this.target:H.selector(b)||b;var d,e,f,g,h,i,j,k,l,m=c&&this._time&&c._startTime===this._startTime&&this._timeline===c._timeline,n=this._firstPT;if((q(b)||I(b))&&"number"!=typeof b[0])for(d=b.length;--d>-1;)this._kill(a,b[d],c)&&(i=!0);else{if(this._targets){for(d=this._targets.length;--d>-1;)if(b===this._targets[d]){h=this._propLookup[d]||{},this._overwrittenProps=this._overwrittenProps||[],e=this._overwrittenProps[d]=a?this._overwrittenProps[d]||{}:"all";break}}else{if(b!==this.target)return!1;h=this._propLookup,e=this._overwrittenProps=a?this._overwrittenProps||{}:"all"}if(h){if(j=a||h,k=a!==e&&"all"!==e&&a!==h&&("object"!=typeof a||!a._tempKill),c&&(H.onOverwrite||this.vars.onOverwrite)){for(f in j)h[f]&&(l||(l=[]),l.push(f));if((l||!a)&&!ba(this,c,b,l))return!1}for(f in j)(g=h[f])&&(m&&(g.f?g.t[g.p](g.s):g.t[g.p]=g.s,i=!0),g.pg&&g.t._kill(j)&&(i=!0),g.pg&&0!==g.t._overwriteProps.length||(g._prev?g._prev._next=g._next:g===this._firstPT&&(this._firstPT=g._next),g._next&&(g._next._prev=g._prev),g._next=g._prev=null),delete h[f]),k&&(e[f]=1);!this._firstPT&&this._initted&&n&&this._enabled(!1,!1)}}return i},i.invalidate=function(){this._notifyPluginsOfEnabled&&H._onPluginEvent("_onDisable",this);var a=this._time;return this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],E.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-n,this.render(a,!1,this.vars.lazy!==!1)),this},i._enabled=function(a,b){if(k||j.wake(),a&&this._gc){var c,d=this._targets;if(d)for(c=d.length;--c>-1;)this._siblings[c]=aa(d[c],this,!0);else this._siblings=aa(this.target,this,!0)}return E.prototype._enabled.call(this,a,b),this._notifyPluginsOfEnabled&&this._firstPT?H._onPluginEvent(a?"_onEnable":"_onDisable",this):!1},H.to=function(a,b,c){return new H(a,b,c)},H.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new H(a,b,c)},H.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new H(a,b,d)},H.delayedCall=function(a,b,c,d,e){return new H(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,lazy:!1,useFrames:e,overwrite:0})},H.set=function(a,b){return new H(a,0,b)},H.getTweensOf=function(a,b){if(null==a)return[];a="string"!=typeof a?a:H.selector(a)||a;var c,d,e,f;if((q(a)||I(a))&&"number"!=typeof a[0]){for(c=a.length,d=[];--c>-1;)d=d.concat(H.getTweensOf(a[c],b));for(c=d.length;--c>-1;)for(f=d[c],e=c;--e>-1;)f===d[e]&&d.splice(c,1)}else if(a._gsTweenID)for(d=aa(a).concat(),c=d.length;--c>-1;)(d[c]._gc||b&&!d[c].isActive())&&d.splice(c,1);return d||[]},H.killTweensOf=H.killDelayedCallsTo=function(a,b,c){"object"==typeof b&&(c=b,b=!1);for(var d=H.getTweensOf(a,b),e=d.length;--e>-1;)d[e]._kill(c,a)};var ea=u("plugins.TweenPlugin",function(a,b){this._overwriteProps=(a||"").split(","),this._propName=this._overwriteProps[0],this._priority=b||0,this._super=ea.prototype},!0);if(i=ea.prototype,ea.version="1.19.0",ea.API=2,i._firstPT=null,i._addTween=R,i.setRatio=O,i._kill=function(a){var b,c=this._overwriteProps,d=this._firstPT;if(null!=a[this._propName])this._overwriteProps=[];else for(b=c.length;--b>-1;)null!=a[c[b]]&&c.splice(b,1);for(;d;)null!=a[d.n]&&(d._next&&(d._next._prev=d._prev),d._prev?(d._prev._next=d._next,d._prev=null):this._firstPT===d&&(this._firstPT=d._next)),d=d._next;return!1},i._mod=i._roundProps=function(a){for(var b,c=this._firstPT;c;)b=a[this._propName]||null!=c.n&&a[c.n.split(this._propName+"_").join("")],b&&"function"==typeof b&&(2===c.f?c.t._applyPT.m=b:c.m=b),c=c._next},H._onPluginEvent=function(a,b){var c,d,e,f,g,h=b._firstPT;if("_onInitAllProps"===a){for(;h;){for(g=h._next,d=e;d&&d.pr>h.pr;)d=d._next;(h._prev=d?d._prev:f)?h._prev._next=h:e=h,(h._next=d)?d._prev=h:f=h,h=g}h=b._firstPT=e}for(;h;)h.pg&&"function"==typeof h.t[a]&&h.t[a]()&&(c=!0),h=h._next;return c},ea.activate=function(a){for(var b=a.length;--b>-1;)a[b].API===ea.API&&(T[(new a[b])._propName]=a[b]);return!0},t.plugin=function(a){if(!(a&&a.propName&&a.init&&a.API))throw"illegal plugin definition.";var b,c=a.propName,d=a.priority||0,e=a.overwriteProps,f={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"},g=u("plugins."+c.charAt(0).toUpperCase()+c.substr(1)+"Plugin",function(){ea.call(this,c,d),this._overwriteProps=e||[]},a.global===!0),h=g.prototype=new ea(c);h.constructor=g,g.API=a.API;for(b in f)"function"==typeof a[b]&&(h[f[b]]=a[b]);return g.version=a.version,ea.activate([g]),g},g=a._gsQueue){for(h=0;h<g.length;h++)g[h]();for(i in r)r[i].func||a.console.log("GSAP encountered missing dependency: "+i)}k=!1}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenMax");
/*!
 * VERSION: 1.15.6
 * DATE: 2017-06-19
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = (typeof(module) !== "undefined" && module.exports && typeof(global) !== "undefined") ? global : this || window; //helps ensure compatibility with AMD/RequireJS and CommonJS/Node
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push( function() {

	"use strict";

	_gsScope._gsDefine("easing.Back", ["easing.Ease"], function(Ease) {
		
		var w = (_gsScope.GreenSockGlobals || _gsScope),
			gs = w.com.greensock,
			_2PI = Math.PI * 2,
			_HALF_PI = Math.PI / 2,
			_class = gs._class,
			_create = function(n, f) {
				var C = _class("easing." + n, function(){}, true),
					p = C.prototype = new Ease();
				p.constructor = C;
				p.getRatio = f;
				return C;
			},
			_easeReg = Ease.register || function(){}, //put an empty function in place just as a safety measure in case someone loads an OLD version of TweenLite.js where Ease.register doesn't exist.
			_wrap = function(name, EaseOut, EaseIn, EaseInOut, aliases) {
				var C = _class("easing."+name, {
					easeOut:new EaseOut(),
					easeIn:new EaseIn(),
					easeInOut:new EaseInOut()
				}, true);
				_easeReg(C, name);
				return C;
			},
			EasePoint = function(time, value, next) {
				this.t = time;
				this.v = value;
				if (next) {
					this.next = next;
					next.prev = this;
					this.c = next.v - value;
					this.gap = next.t - time;
				}
			},

			//Back
			_createBack = function(n, f) {
				var C = _class("easing." + n, function(overshoot) {
						this._p1 = (overshoot || overshoot === 0) ? overshoot : 1.70158;
						this._p2 = this._p1 * 1.525;
					}, true), 
					p = C.prototype = new Ease();
				p.constructor = C;
				p.getRatio = f;
				p.config = function(overshoot) {
					return new C(overshoot);
				};
				return C;
			},

			Back = _wrap("Back",
				_createBack("BackOut", function(p) {
					return ((p = p - 1) * p * ((this._p1 + 1) * p + this._p1) + 1);
				}),
				_createBack("BackIn", function(p) {
					return p * p * ((this._p1 + 1) * p - this._p1);
				}),
				_createBack("BackInOut", function(p) {
					return ((p *= 2) < 1) ? 0.5 * p * p * ((this._p2 + 1) * p - this._p2) : 0.5 * ((p -= 2) * p * ((this._p2 + 1) * p + this._p2) + 2);
				})
			),


			//SlowMo
			SlowMo = _class("easing.SlowMo", function(linearRatio, power, yoyoMode) {
				power = (power || power === 0) ? power : 0.7;
				if (linearRatio == null) {
					linearRatio = 0.7;
				} else if (linearRatio > 1) {
					linearRatio = 1;
				}
				this._p = (linearRatio !== 1) ? power : 0;
				this._p1 = (1 - linearRatio) / 2;
				this._p2 = linearRatio;
				this._p3 = this._p1 + this._p2;
				this._calcEnd = (yoyoMode === true);
			}, true),
			p = SlowMo.prototype = new Ease(),
			SteppedEase, RoughEase, _createElastic;
			
		p.constructor = SlowMo;
		p.getRatio = function(p) {
			var r = p + (0.5 - p) * this._p;
			if (p < this._p1) {
				return this._calcEnd ? 1 - ((p = 1 - (p / this._p1)) * p) : r - ((p = 1 - (p / this._p1)) * p * p * p * r);
			} else if (p > this._p3) {
				return this._calcEnd ? 1 - (p = (p - this._p3) / this._p1) * p : r + ((p - r) * (p = (p - this._p3) / this._p1) * p * p * p);
			}
			return this._calcEnd ? 1 : r;
		};
		SlowMo.ease = new SlowMo(0.7, 0.7);
		
		p.config = SlowMo.config = function(linearRatio, power, yoyoMode) {
			return new SlowMo(linearRatio, power, yoyoMode);
		};


		//SteppedEase
		SteppedEase = _class("easing.SteppedEase", function(steps, immediateStart) {
				steps = steps || 1;
				this._p1 = 1 / steps;
				this._p2 = steps + (immediateStart ? 0 : 1);
				this._p3 = immediateStart ? 1 : 0;
			}, true);
		p = SteppedEase.prototype = new Ease();	
		p.constructor = SteppedEase;
		p.getRatio = function(p) {
			if (p < 0) {
				p = 0;
			} else if (p >= 1) {
				p = 0.999999999;
			}
			return (((this._p2 * p) | 0) + this._p3) * this._p1;
		};
		p.config = SteppedEase.config = function(steps, immediateStart) {
			return new SteppedEase(steps, immediateStart);
		};


		//RoughEase
		RoughEase = _class("easing.RoughEase", function(vars) {
			vars = vars || {};
			var taper = vars.taper || "none",
				a = [],
				cnt = 0,
				points = (vars.points || 20) | 0,
				i = points,
				randomize = (vars.randomize !== false),
				clamp = (vars.clamp === true),
				template = (vars.template instanceof Ease) ? vars.template : null,
				strength = (typeof(vars.strength) === "number") ? vars.strength * 0.4 : 0.4,
				x, y, bump, invX, obj, pnt;
			while (--i > -1) {
				x = randomize ? Math.random() : (1 / points) * i;
				y = template ? template.getRatio(x) : x;
				if (taper === "none") {
					bump = strength;
				} else if (taper === "out") {
					invX = 1 - x;
					bump = invX * invX * strength;
				} else if (taper === "in") {
					bump = x * x * strength;
				} else if (x < 0.5) {  //"both" (start)
					invX = x * 2;
					bump = invX * invX * 0.5 * strength;
				} else {				//"both" (end)
					invX = (1 - x) * 2;
					bump = invX * invX * 0.5 * strength;
				}
				if (randomize) {
					y += (Math.random() * bump) - (bump * 0.5);
				} else if (i % 2) {
					y += bump * 0.5;
				} else {
					y -= bump * 0.5;
				}
				if (clamp) {
					if (y > 1) {
						y = 1;
					} else if (y < 0) {
						y = 0;
					}
				}
				a[cnt++] = {x:x, y:y};
			}
			a.sort(function(a, b) {
				return a.x - b.x;
			});

			pnt = new EasePoint(1, 1, null);
			i = points;
			while (--i > -1) {
				obj = a[i];
				pnt = new EasePoint(obj.x, obj.y, pnt);
			}

			this._prev = new EasePoint(0, 0, (pnt.t !== 0) ? pnt : pnt.next);
		}, true);
		p = RoughEase.prototype = new Ease();
		p.constructor = RoughEase;
		p.getRatio = function(p) {
			var pnt = this._prev;
			if (p > pnt.t) {
				while (pnt.next && p >= pnt.t) {
					pnt = pnt.next;
				}
				pnt = pnt.prev;
			} else {
				while (pnt.prev && p <= pnt.t) {
					pnt = pnt.prev;
				}
			}
			this._prev = pnt;
			return (pnt.v + ((p - pnt.t) / pnt.gap) * pnt.c);
		};
		p.config = function(vars) {
			return new RoughEase(vars);
		};
		RoughEase.ease = new RoughEase();


		//Bounce
		_wrap("Bounce",
			_create("BounceOut", function(p) {
				if (p < 1 / 2.75) {
					return 7.5625 * p * p;
				} else if (p < 2 / 2.75) {
					return 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
				} else if (p < 2.5 / 2.75) {
					return 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
				}
				return 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
			}),
			_create("BounceIn", function(p) {
				if ((p = 1 - p) < 1 / 2.75) {
					return 1 - (7.5625 * p * p);
				} else if (p < 2 / 2.75) {
					return 1 - (7.5625 * (p -= 1.5 / 2.75) * p + 0.75);
				} else if (p < 2.5 / 2.75) {
					return 1 - (7.5625 * (p -= 2.25 / 2.75) * p + 0.9375);
				}
				return 1 - (7.5625 * (p -= 2.625 / 2.75) * p + 0.984375);
			}),
			_create("BounceInOut", function(p) {
				var invert = (p < 0.5);
				if (invert) {
					p = 1 - (p * 2);
				} else {
					p = (p * 2) - 1;
				}
				if (p < 1 / 2.75) {
					p = 7.5625 * p * p;
				} else if (p < 2 / 2.75) {
					p = 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
				} else if (p < 2.5 / 2.75) {
					p = 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
				} else {
					p = 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
				}
				return invert ? (1 - p) * 0.5 : p * 0.5 + 0.5;
			})
		);


		//CIRC
		_wrap("Circ",
			_create("CircOut", function(p) {
				return Math.sqrt(1 - (p = p - 1) * p);
			}),
			_create("CircIn", function(p) {
				return -(Math.sqrt(1 - (p * p)) - 1);
			}),
			_create("CircInOut", function(p) {
				return ((p*=2) < 1) ? -0.5 * (Math.sqrt(1 - p * p) - 1) : 0.5 * (Math.sqrt(1 - (p -= 2) * p) + 1);
			})
		);


		//Elastic
		_createElastic = function(n, f, def) {
			var C = _class("easing." + n, function(amplitude, period) {
					this._p1 = (amplitude >= 1) ? amplitude : 1; //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
					this._p2 = (period || def) / (amplitude < 1 ? amplitude : 1);
					this._p3 = this._p2 / _2PI * (Math.asin(1 / this._p1) || 0);
					this._p2 = _2PI / this._p2; //precalculate to optimize
				}, true),
				p = C.prototype = new Ease();
			p.constructor = C;
			p.getRatio = f;
			p.config = function(amplitude, period) {
				return new C(amplitude, period);
			};
			return C;
		};
		_wrap("Elastic",
			_createElastic("ElasticOut", function(p) {
				return this._p1 * Math.pow(2, -10 * p) * Math.sin( (p - this._p3) * this._p2 ) + 1;
			}, 0.3),
			_createElastic("ElasticIn", function(p) {
				return -(this._p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin( (p - this._p3) * this._p2 ));
			}, 0.3),
			_createElastic("ElasticInOut", function(p) {
				return ((p *= 2) < 1) ? -0.5 * (this._p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin( (p - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 *(p -= 1)) * Math.sin( (p - this._p3) * this._p2 ) * 0.5 + 1;
			}, 0.45)
		);


		//Expo
		_wrap("Expo",
			_create("ExpoOut", function(p) {
				return 1 - Math.pow(2, -10 * p);
			}),
			_create("ExpoIn", function(p) {
				return Math.pow(2, 10 * (p - 1)) - 0.001;
			}),
			_create("ExpoInOut", function(p) {
				return ((p *= 2) < 1) ? 0.5 * Math.pow(2, 10 * (p - 1)) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
			})
		);


		//Sine
		_wrap("Sine",
			_create("SineOut", function(p) {
				return Math.sin(p * _HALF_PI);
			}),
			_create("SineIn", function(p) {
				return -Math.cos(p * _HALF_PI) + 1;
			}),
			_create("SineInOut", function(p) {
				return -0.5 * (Math.cos(Math.PI * p) - 1);
			})
		);

		_class("easing.EaseLookup", {
				find:function(s) {
					return Ease.map[s];
				}
			}, true);

		//register the non-standard eases
		_easeReg(w.SlowMo, "SlowMo", "ease,");
		_easeReg(RoughEase, "RoughEase", "ease,");
		_easeReg(SteppedEase, "SteppedEase", "ease,");
		
		return Back;
		
	}, true);

}); if (_gsScope._gsDefine) { _gsScope._gsQueue.pop()(); }

//export to AMD/RequireJS and CommonJS/Node (precursor to full modular build system coming at a later date)
(function() {
	"use strict";
	var getGlobal = function() {
		return (_gsScope.GreenSockGlobals || _gsScope);
	};
	if (typeof(module) !== "undefined" && module.exports) { //node
		require("../TweenLite.js");
		module.exports = getGlobal();
	} else if (typeof(define) === "function" && define.amd) { //AMD
		define(["TweenLite"], getGlobal);
	}
}());
/*!
 * VERSION: 1.9.2
 * DATE: 2019-02-07
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var a=(_gsScope.document||{}).documentElement,b=_gsScope,c=function(c,d){var e="x"===d?"Width":"Height",f="scroll"+e,g="client"+e,h=document.body;return c===b||c===a||c===h?Math.max(a[f],h[f])-(b["inner"+e]||a[g]||h[g]):c[f]-c["offset"+e]},d=function(a){return"string"==typeof a&&(a=TweenLite.selector(a)),a.length&&a!==b&&a[0]&&a[0].style&&!a.nodeType&&(a=a[0]),a===b||a.nodeType&&a.style?a:null},e=function(c,d){var e="scroll"+("x"===d?"Left":"Top");return c===b&&(null!=c.pageXOffset?e="page"+d.toUpperCase()+"Offset":c=null!=a[e]?a:document.body),function(){return c[e]}},f=function(c,f){var g=d(c).getBoundingClientRect(),h=document.body,i=!f||f===b||f===h,j=i?{top:a.clientTop-(window.pageYOffset||a.scrollTop||h.scrollTop||0),left:a.clientLeft-(window.pageXOffset||a.scrollLeft||h.scrollLeft||0)}:f.getBoundingClientRect(),k={x:g.left-j.left,y:g.top-j.top};return!i&&f&&(k.x+=e(f,"x")(),k.y+=e(f,"y")()),k},g=function(a,b,d,e){var g=typeof a;return isNaN(a)?"string"===g&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2))+e:"max"===a?c(b,d):Math.min(c(b,d),f(a,b)[d]):parseFloat(a)},h=_gsScope._gsDefine.plugin({propName:"scrollTo",API:2,global:!0,version:"1.9.2",init:function(a,c,d){return this._wdw=a===b,this._target=a,this._tween=d,"object"!=typeof c?(c={y:c},"string"==typeof c.y&&"max"!==c.y&&"="!==c.y.charAt(1)&&(c.x=c.y)):c.nodeType&&(c={y:c,x:c}),this.vars=c,this._autoKill=c.autoKill!==!1,this.getX=e(a,"x"),this.getY=e(a,"y"),this.x=this.xPrev=this.getX(),this.y=this.yPrev=this.getY(),null!=c.x?(this._addTween(this,"x",this.x,g(c.x,a,"x",this.x)-(c.offsetX||0),"scrollTo_x",!0),this._overwriteProps.push("scrollTo_x")):this.skipX=!0,null!=c.y?(this._addTween(this,"y",this.y,g(c.y,a,"y",this.y)-(c.offsetY||0),"scrollTo_y",!0),this._overwriteProps.push("scrollTo_y")):this.skipY=!0,!0},set:function(a){this._super.setRatio.call(this,a);var d=this._wdw||!this.skipX?this.getX():this.xPrev,e=this._wdw||!this.skipY?this.getY():this.yPrev,f=e-this.yPrev,g=d-this.xPrev,i=h.autoKillThreshold;this.x<0&&(this.x=0),this.y<0&&(this.y=0),this._autoKill&&(!this.skipX&&(g>i||-i>g)&&d<c(this._target,"x")&&(this.skipX=!0),!this.skipY&&(f>i||-i>f)&&e<c(this._target,"y")&&(this.skipY=!0),this.skipX&&this.skipY&&(this._tween.kill(),this.vars.onAutoKill&&this.vars.onAutoKill.apply(this.vars.onAutoKillScope||this._tween,this.vars.onAutoKillParams||[]))),this._wdw?b.scrollTo(this.skipX?d:this.x,this.skipY?e:this.y):(this.skipY||(this._target.scrollTop=this.y),this.skipX||(this._target.scrollLeft=this.x)),this.xPrev=this.x,this.yPrev=this.y}}),i=h.prototype;h.max=c,h.getOffset=f,h.buildGetter=e,h.autoKillThreshold=7,i._kill=function(a){return a.scrollTo_x&&(this.skipX=!0),a.scrollTo_y&&(this.skipY=!0),this._super._kill.call(this,a)}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"undefined"!=typeof module&&module.exports?(require("../TweenLite.min.js"),module.exports=b()):"function"==typeof define&&define.amd&&define(["TweenLite"],b)}("ScrollToPlugin");
(function(root,factory){if(typeof define==='function'&&define.amd){define(['jquery'],function(a0){return(factory(a0))})}else if(typeof module==='object'&&module.exports){module.exports=factory(require('jquery'))}else{factory(root.jQuery)}}(this,function($){(function(){'use strict';var defaults={mode:'lg-slide',cssEasing:'ease',easing:'linear',speed:600,height:'100%',width:'100%',addClass:'',startClass:'lg-start-zoom',backdropDuration:150,hideBarsDelay:6000,useLeft:!1,closable:!0,loop:!0,escKey:!0,keyPress:!0,controls:!0,slideEndAnimatoin:!0,hideControlOnEnd:!1,mousewheel:!0,getCaptionFromTitleOrAlt:!0,appendSubHtmlTo:'.lg-sub-html',subHtmlSelectorRelative:!1,preload:1,showAfterLoad:!0,selector:'',selectWithin:'',nextHtml:'',prevHtml:'',index:!1,iframeMaxWidth:'100%',download:!0,counter:!0,appendCounterTo:'.lg-toolbar',swipeThreshold:50,enableSwipe:!0,enableDrag:!0,dynamic:!1,dynamicEl:[],galleryId:1};function Plugin(element,options){this.el=element;this.$el=$(element);this.s=$.extend({},defaults,options);if(this.s.dynamic&&this.s.dynamicEl!=='undefined'&&this.s.dynamicEl.constructor===Array&&!this.s.dynamicEl.length){throw('When using dynamic mode, you must also define dynamicEl as an Array.')}
this.modules={};this.lGalleryOn=!1;this.lgBusy=!1;this.hideBartimeout=!1;this.isTouch=('ontouchstart' in document.documentElement);if(this.s.slideEndAnimatoin){this.s.hideControlOnEnd=!1}
if(this.s.dynamic){this.$items=this.s.dynamicEl}else{if(this.s.selector==='this'){this.$items=this.$el}else if(this.s.selector!==''){if(this.s.selectWithin){this.$items=$(this.s.selectWithin).find(this.s.selector)}else{this.$items=this.$el.find($(this.s.selector))}}else{this.$items=this.$el.children()}}
this.$slide='';this.$outer='';this.init();return this}
Plugin.prototype.init=function(){var _this=this;if(_this.s.preload>_this.$items.length){_this.s.preload=_this.$items.length}
var _hash=window.location.hash;if(_hash.indexOf('lg='+this.s.galleryId)>0){_this.index=parseInt(_hash.split('&slide=')[1],10);$('body').addClass('lg-from-hash');if(!$('body').hasClass('lg-on')){setTimeout(function(){_this.build(_this.index)});$('body').addClass('lg-on')}}
if(_this.s.dynamic){_this.$el.trigger('onBeforeOpen.lg');_this.index=_this.s.index||0;if(!$('body').hasClass('lg-on')){setTimeout(function(){_this.build(_this.index);$('body').addClass('lg-on')})}}else{_this.$items.on('click.lgcustom',function(event){try{event.preventDefault();event.preventDefault()}catch(er){event.returnValue=!1}
_this.$el.trigger('onBeforeOpen.lg');_this.index=_this.s.index||_this.$items.index(this);if(!$('body').hasClass('lg-on')){_this.build(_this.index);$('body').addClass('lg-on')}})}};Plugin.prototype.build=function(index){var _this=this;_this.structure();$.each($.fn.lightGallery.modules,function(key){_this.modules[key]=new $.fn.lightGallery.modules[key](_this.el)});_this.slide(index,!1,!1,!1);if(_this.s.keyPress){_this.keyPress()}
if(_this.$items.length>1){_this.arrow();setTimeout(function(){_this.enableDrag();_this.enableSwipe()},50);if(_this.s.mousewheel){_this.mousewheel()}}else{_this.$slide.on('click.lg',function(){_this.$el.trigger('onSlideClick.lg')})}
_this.counter();_this.closeGallery();_this.$el.trigger('onAfterOpen.lg');_this.$outer.on('mousemove.lg click.lg touchstart.lg',function(){_this.$outer.removeClass('lg-hide-items');clearTimeout(_this.hideBartimeout);_this.hideBartimeout=setTimeout(function(){_this.$outer.addClass('lg-hide-items')},_this.s.hideBarsDelay)});_this.$outer.trigger('mousemove.lg')};Plugin.prototype.structure=function(){var list='';var controls='';var i=0;var subHtmlCont='';var template;var _this=this;$('body').append('<div class="lg-backdrop"></div>');$('.lg-backdrop').css('transition-duration',this.s.backdropDuration+'ms');for(i=0;i<this.$items.length;i++){list+='<div class="lg-item"></div>'}
if(this.s.controls&&this.$items.length>1){controls='<div class="lg-actions">'+'<button class="lg-prev lg-icon">'+this.s.prevHtml+'</button>'+'<button class="lg-next lg-icon">'+this.s.nextHtml+'</button>'+'</div>'}
if(this.s.appendSubHtmlTo==='.lg-sub-html'){subHtmlCont='<div class="lg-sub-html"></div>'}
template='<div class="lg-outer '+this.s.addClass+' '+this.s.startClass+'">'+'<div class="lg" style="width:'+this.s.width+'; height:'+this.s.height+'">'+'<div class="lg-inner">'+list+'</div>'+'<div class="lg-toolbar lg-group">'+'<span class="lg-close lg-icon"></span>'+'</div>'+controls+subHtmlCont+'</div>'+'</div>';$('body').append(template);this.$outer=$('.lg-outer');this.$slide=this.$outer.find('.lg-item');if(this.s.useLeft){this.$outer.addClass('lg-use-left');this.s.mode='lg-slide'}else{this.$outer.addClass('lg-use-css3')}
_this.setTop();$(window).on('resize.lg orientationchange.lg',function(){setTimeout(function(){_this.setTop()},100)});this.$slide.eq(this.index).addClass('lg-current');if(this.doCss()){this.$outer.addClass('lg-css3')}else{this.$outer.addClass('lg-css');this.s.speed=0}
this.$outer.addClass(this.s.mode);if(this.s.enableDrag&&this.$items.length>1){this.$outer.addClass('lg-grab')}
if(this.s.showAfterLoad){this.$outer.addClass('lg-show-after-load')}
if(this.doCss()){var $inner=this.$outer.find('.lg-inner');$inner.css('transition-timing-function',this.s.cssEasing);$inner.css('transition-duration',this.s.speed+'ms')}
setTimeout(function(){$('.lg-backdrop').addClass('in')});setTimeout(function(){_this.$outer.addClass('lg-visible')},this.s.backdropDuration);if(this.s.download){this.$outer.find('.lg-toolbar').append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>')}
this.prevScrollTop=$(window).scrollTop()};Plugin.prototype.setTop=function(){if(this.s.height!=='100%'){var wH=$(window).height();var top=(wH-parseInt(this.s.height,10))/2;var $lGallery=this.$outer.find('.lg');if(wH>=parseInt(this.s.height,10)){$lGallery.css('top',top+'px')}else{$lGallery.css('top','0px')}}};Plugin.prototype.doCss=function(){var support=function(){var transition=['transition','MozTransition','WebkitTransition','OTransition','msTransition','KhtmlTransition'];var root=document.documentElement;var i=0;for(i=0;i<transition.length;i++){if(transition[i]in root.style){return!0}}};if(support()){return!0}
return!1};Plugin.prototype.isVideo=function(src,index){var html;if(this.s.dynamic){html=this.s.dynamicEl[index].html}else{html=this.$items.eq(index).attr('data-html')}
if(!src){if(html){return{html5:!0}}else{console.error('lightGallery :- data-src is not pvovided on slide item '+(index+1)+'. Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html');return!1}}
var youtube=src.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i);var vimeo=src.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i);var dailymotion=src.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i);var vk=src.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);if(youtube){return{youtube:youtube}}else if(vimeo){return{vimeo:vimeo}}else if(dailymotion){return{dailymotion:dailymotion}}else if(vk){return{vk:vk}}};Plugin.prototype.counter=function(){if(this.s.counter){$(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">'+(parseInt(this.index,10)+1)+'</span> / <span id="lg-counter-all">'+this.$items.length+'</span></div>')}};Plugin.prototype.addHtml=function(index){var subHtml=null;var subHtmlUrl;var $currentEle;if(this.s.dynamic){if(this.s.dynamicEl[index].subHtmlUrl){subHtmlUrl=this.s.dynamicEl[index].subHtmlUrl}else{subHtml=this.s.dynamicEl[index].subHtml}}else{$currentEle=this.$items.eq(index);if($currentEle.attr('data-sub-html-url')){subHtmlUrl=$currentEle.attr('data-sub-html-url')}else{subHtml=$currentEle.attr('data-sub-html');if(this.s.getCaptionFromTitleOrAlt&&!subHtml){subHtml=$currentEle.attr('title')||$currentEle.find('img').first().attr('alt')}}}
if(!subHtmlUrl){if(typeof subHtml!=='undefined'&&subHtml!==null){var fL=subHtml.substring(0,1);if(fL==='.'||fL==='#'){if(this.s.subHtmlSelectorRelative&&!this.s.dynamic){subHtml=$currentEle.find(subHtml).html()}else{subHtml=$(subHtml).html()}}}else{subHtml=''}}
if(this.s.appendSubHtmlTo==='.lg-sub-html'){if(subHtmlUrl){this.$outer.find(this.s.appendSubHtmlTo).load(subHtmlUrl)}else{this.$outer.find(this.s.appendSubHtmlTo).html(subHtml)}}else{if(subHtmlUrl){this.$slide.eq(index).load(subHtmlUrl)}else{this.$slide.eq(index).append(subHtml)}}
if(typeof subHtml!=='undefined'&&subHtml!==null){if(subHtml===''){this.$outer.find(this.s.appendSubHtmlTo).addClass('lg-empty-html')}else{this.$outer.find(this.s.appendSubHtmlTo).removeClass('lg-empty-html')}}
this.$el.trigger('onAfterAppendSubHtml.lg',[index])};Plugin.prototype.preload=function(index){var i=1;var j=1;for(i=1;i<=this.s.preload;i++){if(i>=this.$items.length-index){break}
this.loadContent(index+i,!1,0)}
for(j=1;j<=this.s.preload;j++){if(index-j<0){break}
this.loadContent(index-j,!1,0)}};Plugin.prototype.loadContent=function(index,rec,delay){var _this=this;var _hasPoster=!1;var _$img;var _src;var _poster;var _srcset;var _sizes;var _html;var getResponsiveSrc=function(srcItms){var rsWidth=[];var rsSrc=[];for(var i=0;i<srcItms.length;i++){var __src=srcItms[i].split(' ');if(__src[0]===''){__src.splice(0,1)}
rsSrc.push(__src[0]);rsWidth.push(__src[1])}
var wWidth=$(window).width();for(var j=0;j<rsWidth.length;j++){if(parseInt(rsWidth[j],10)>wWidth){_src=rsSrc[j];break}}};if(_this.s.dynamic){if(_this.s.dynamicEl[index].poster){_hasPoster=!0;_poster=_this.s.dynamicEl[index].poster}
_html=_this.s.dynamicEl[index].html;_src=_this.s.dynamicEl[index].src;if(_this.s.dynamicEl[index].responsive){var srcDyItms=_this.s.dynamicEl[index].responsive.split(',');getResponsiveSrc(srcDyItms)}
_srcset=_this.s.dynamicEl[index].srcset;_sizes=_this.s.dynamicEl[index].sizes}else{if(_this.$items.eq(index).attr('data-poster')){_hasPoster=!0;_poster=_this.$items.eq(index).attr('data-poster')}
_html=_this.$items.eq(index).attr('data-html');_src=_this.$items.eq(index).attr('href')||_this.$items.eq(index).attr('data-src');if(_this.$items.eq(index).attr('data-responsive')){var srcItms=_this.$items.eq(index).attr('data-responsive').split(',');getResponsiveSrc(srcItms)}
_srcset=_this.$items.eq(index).attr('data-srcset');_sizes=_this.$items.eq(index).attr('data-sizes')}
var iframe=!1;if(_this.s.dynamic){if(_this.s.dynamicEl[index].iframe){iframe=!0}}else{if(_this.$items.eq(index).attr('data-iframe')==='true'){iframe=!0}}
var _isVideo=_this.isVideo(_src,index);if(!_this.$slide.eq(index).hasClass('lg-loaded')){if(iframe){_this.$slide.eq(index).prepend('<div class="lg-video-cont lg-has-iframe" style="max-width:'+_this.s.iframeMaxWidth+'"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="'+_src+'"  allowfullscreen="true"></iframe></div></div>')}else if(_hasPoster){var videoClass='';if(_isVideo&&_isVideo.youtube){videoClass='lg-has-youtube'}else if(_isVideo&&_isVideo.vimeo){videoClass='lg-has-vimeo'}else{videoClass='lg-has-html5'}
_this.$slide.eq(index).prepend('<div class="lg-video-cont '+videoClass+' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="'+_poster+'" /></div></div>')}else if(_isVideo){_this.$slide.eq(index).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>');_this.$el.trigger('hasVideo.lg',[index,_src,_html])}else{_this.$slide.eq(index).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="'+_src+'" /></div>')}
_this.$el.trigger('onAferAppendSlide.lg',[index]);_$img=_this.$slide.eq(index).find('.lg-object');if(_sizes){_$img.attr('sizes',_sizes)}
if(_srcset){_$img.attr('srcset',_srcset);try{picturefill({elements:[_$img[0]]})}catch(e){console.warn('lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.')}}
if(this.s.appendSubHtmlTo!=='.lg-sub-html'){_this.addHtml(index)}
_this.$slide.eq(index).addClass('lg-loaded')}
_this.$slide.eq(index).find('.lg-object').on('load.lg error.lg',function(){var _speed=0;if(delay&&!$('body').hasClass('lg-from-hash')){_speed=delay}
setTimeout(function(){_this.$slide.eq(index).addClass('lg-complete');_this.$el.trigger('onSlideItemLoad.lg',[index,delay||0])},_speed)});if(_isVideo&&_isVideo.html5&&!_hasPoster){_this.$slide.eq(index).addClass('lg-complete')}
if(rec===!0){if(!_this.$slide.eq(index).hasClass('lg-complete')){_this.$slide.eq(index).find('.lg-object').on('load.lg error.lg',function(){_this.preload(index)})}else{_this.preload(index)}}};Plugin.prototype.slide=function(index,fromTouch,fromThumb,direction){var _prevIndex=this.$outer.find('.lg-current').index();var _this=this;if(_this.lGalleryOn&&(_prevIndex===index)){return}
var _length=this.$slide.length;var _time=_this.lGalleryOn?this.s.speed:0;if(!_this.lgBusy){if(this.s.download){var _src;if(_this.s.dynamic){_src=_this.s.dynamicEl[index].downloadUrl!==!1&&(_this.s.dynamicEl[index].downloadUrl||_this.s.dynamicEl[index].src)}else{_src=_this.$items.eq(index).attr('data-download-url')!=='false'&&(_this.$items.eq(index).attr('data-download-url')||_this.$items.eq(index).attr('href')||_this.$items.eq(index).attr('data-src'))}
if(_src){$('#lg-download').attr('href',_src);_this.$outer.removeClass('lg-hide-download')}else{_this.$outer.addClass('lg-hide-download')}}
this.$el.trigger('onBeforeSlide.lg',[_prevIndex,index,fromTouch,fromThumb]);_this.lgBusy=!0;clearTimeout(_this.hideBartimeout);if(this.s.appendSubHtmlTo==='.lg-sub-html'){setTimeout(function(){_this.addHtml(index)},_time)}
this.arrowDisable(index);if(!direction){if(index<_prevIndex){direction='prev'}else if(index>_prevIndex){direction='next'}}
if(!fromTouch){_this.$outer.addClass('lg-no-trans');this.$slide.removeClass('lg-prev-slide lg-next-slide');if(direction==='prev'){this.$slide.eq(index).addClass('lg-prev-slide');this.$slide.eq(_prevIndex).addClass('lg-next-slide')}else{this.$slide.eq(index).addClass('lg-next-slide');this.$slide.eq(_prevIndex).addClass('lg-prev-slide')}
setTimeout(function(){_this.$slide.removeClass('lg-current');_this.$slide.eq(index).addClass('lg-current');_this.$outer.removeClass('lg-no-trans')},50)}else{this.$slide.removeClass('lg-prev-slide lg-current lg-next-slide');var touchPrev;var touchNext;if(_length>2){touchPrev=index-1;touchNext=index+1;if((index===0)&&(_prevIndex===_length-1)){touchNext=0;touchPrev=_length-1}else if((index===_length-1)&&(_prevIndex===0)){touchNext=0;touchPrev=_length-1}}else{touchPrev=0;touchNext=1}
if(direction==='prev'){_this.$slide.eq(touchNext).addClass('lg-next-slide')}else{_this.$slide.eq(touchPrev).addClass('lg-prev-slide')}
_this.$slide.eq(index).addClass('lg-current')}
if(_this.lGalleryOn){setTimeout(function(){_this.loadContent(index,!0,0)},this.s.speed+50);setTimeout(function(){_this.lgBusy=!1;_this.$el.trigger('onAfterSlide.lg',[_prevIndex,index,fromTouch,fromThumb])},this.s.speed)}else{_this.loadContent(index,!0,_this.s.backdropDuration);_this.lgBusy=!1;_this.$el.trigger('onAfterSlide.lg',[_prevIndex,index,fromTouch,fromThumb])}
_this.lGalleryOn=!0;if(this.s.counter){$('#lg-counter-current').text(index+1)}}
_this.index=index};Plugin.prototype.goToNextSlide=function(fromTouch){var _this=this;var _loop=_this.s.loop;if(fromTouch&&_this.$slide.length<3){_loop=!1}
if(!_this.lgBusy){if((_this.index+1)<_this.$slide.length){_this.index++;_this.$el.trigger('onBeforeNextSlide.lg',[_this.index]);_this.slide(_this.index,fromTouch,!1,'next')}else{if(_loop){_this.index=0;_this.$el.trigger('onBeforeNextSlide.lg',[_this.index]);_this.slide(_this.index,fromTouch,!1,'next')}else if(_this.s.slideEndAnimatoin&&!fromTouch){_this.$outer.addClass('lg-right-end');setTimeout(function(){_this.$outer.removeClass('lg-right-end')},400)}}}};Plugin.prototype.goToPrevSlide=function(fromTouch){var _this=this;var _loop=_this.s.loop;if(fromTouch&&_this.$slide.length<3){_loop=!1}
if(!_this.lgBusy){if(_this.index>0){_this.index--;_this.$el.trigger('onBeforePrevSlide.lg',[_this.index,fromTouch]);_this.slide(_this.index,fromTouch,!1,'prev')}else{if(_loop){_this.index=_this.$items.length-1;_this.$el.trigger('onBeforePrevSlide.lg',[_this.index,fromTouch]);_this.slide(_this.index,fromTouch,!1,'prev')}else if(_this.s.slideEndAnimatoin&&!fromTouch){_this.$outer.addClass('lg-left-end');setTimeout(function(){_this.$outer.removeClass('lg-left-end')},400)}}}};Plugin.prototype.keyPress=function(){var _this=this;if(this.$items.length>1){$(window).on('keyup.lg',function(e){if(_this.$items.length>1){if(e.keyCode===37){e.preventDefault();_this.goToPrevSlide()}
if(e.keyCode===39){e.preventDefault();_this.goToNextSlide()}}})}
$(window).on('keydown.lg',function(e){if(_this.s.escKey===!0&&e.keyCode===27){e.preventDefault();if(!_this.$outer.hasClass('lg-thumb-open')){_this.destroy()}else{_this.$outer.removeClass('lg-thumb-open')}}})};Plugin.prototype.arrow=function(){var _this=this;this.$outer.find('.lg-prev').on('click.lg',function(){_this.goToPrevSlide()});this.$outer.find('.lg-next').on('click.lg',function(){_this.goToNextSlide()})};Plugin.prototype.arrowDisable=function(index){if(!this.s.loop&&this.s.hideControlOnEnd){if((index+1)<this.$slide.length){this.$outer.find('.lg-next').removeAttr('disabled').removeClass('disabled')}else{this.$outer.find('.lg-next').attr('disabled','disabled').addClass('disabled')}
if(index>0){this.$outer.find('.lg-prev').removeAttr('disabled').removeClass('disabled')}else{this.$outer.find('.lg-prev').attr('disabled','disabled').addClass('disabled')}}};Plugin.prototype.setTranslate=function($el,xValue,yValue){if(this.s.useLeft){$el.css('left',xValue)}else{$el.css({transform:'translate3d('+(xValue)+'px, '+yValue+'px, 0px)'})}};Plugin.prototype.touchMove=function(startCoords,endCoords){var distance=endCoords-startCoords;if(Math.abs(distance)>15){this.$outer.addClass('lg-dragging');this.setTranslate(this.$slide.eq(this.index),distance,0);this.setTranslate($('.lg-prev-slide'),-this.$slide.eq(this.index).width()+distance,0);this.setTranslate($('.lg-next-slide'),this.$slide.eq(this.index).width()+distance,0)}};Plugin.prototype.touchEnd=function(distance){var _this=this;if(_this.s.mode!=='lg-slide'){_this.$outer.addClass('lg-slide')}
this.$slide.not('.lg-current, .lg-prev-slide, .lg-next-slide').css('opacity','0');setTimeout(function(){_this.$outer.removeClass('lg-dragging');if((distance<0)&&(Math.abs(distance)>_this.s.swipeThreshold)){_this.goToNextSlide(!0)}else if((distance>0)&&(Math.abs(distance)>_this.s.swipeThreshold)){_this.goToPrevSlide(!0)}else if(Math.abs(distance)<5){_this.$el.trigger('onSlideClick.lg')}
_this.$slide.removeAttr('style')});setTimeout(function(){if(!_this.$outer.hasClass('lg-dragging')&&_this.s.mode!=='lg-slide'){_this.$outer.removeClass('lg-slide')}},_this.s.speed+100)};Plugin.prototype.enableSwipe=function(){var _this=this;var startCoords=0;var endCoords=0;var isMoved=!1;if(_this.s.enableSwipe&&_this.doCss()){_this.$slide.on('touchstart.lg',function(e){if(!_this.$outer.hasClass('lg-zoomed')&&!_this.lgBusy){e.preventDefault();_this.manageSwipeClass();startCoords=e.originalEvent.targetTouches[0].pageX}});_this.$slide.on('touchmove.lg',function(e){if(!_this.$outer.hasClass('lg-zoomed')){e.preventDefault();endCoords=e.originalEvent.targetTouches[0].pageX;_this.touchMove(startCoords,endCoords);isMoved=!0}});_this.$slide.on('touchend.lg',function(){if(!_this.$outer.hasClass('lg-zoomed')){if(isMoved){isMoved=!1;_this.touchEnd(endCoords-startCoords)}else{_this.$el.trigger('onSlideClick.lg')}}})}};Plugin.prototype.enableDrag=function(){var _this=this;var startCoords=0;var endCoords=0;var isDraging=!1;var isMoved=!1;if(_this.s.enableDrag&&_this.doCss()){_this.$slide.on('mousedown.lg',function(e){if(!_this.$outer.hasClass('lg-zoomed')&&!_this.lgBusy&&!$(e.target).text().trim()){e.preventDefault();_this.manageSwipeClass();startCoords=e.pageX;isDraging=!0;_this.$outer.scrollLeft+=1;_this.$outer.scrollLeft-=1;_this.$outer.removeClass('lg-grab').addClass('lg-grabbing');_this.$el.trigger('onDragstart.lg')}});$(window).on('mousemove.lg',function(e){if(isDraging){isMoved=!0;endCoords=e.pageX;_this.touchMove(startCoords,endCoords);_this.$el.trigger('onDragmove.lg')}});$(window).on('mouseup.lg',function(e){if(isMoved){isMoved=!1;_this.touchEnd(endCoords-startCoords);_this.$el.trigger('onDragend.lg')}else if($(e.target).hasClass('lg-object')||$(e.target).hasClass('lg-video-play')){_this.$el.trigger('onSlideClick.lg')}
if(isDraging){isDraging=!1;_this.$outer.removeClass('lg-grabbing').addClass('lg-grab')}})}};Plugin.prototype.manageSwipeClass=function(){var _touchNext=this.index+1;var _touchPrev=this.index-1;if(this.s.loop&&this.$slide.length>2){if(this.index===0){_touchPrev=this.$slide.length-1}else if(this.index===this.$slide.length-1){_touchNext=0}}
this.$slide.removeClass('lg-next-slide lg-prev-slide');if(_touchPrev>-1){this.$slide.eq(_touchPrev).addClass('lg-prev-slide')}
this.$slide.eq(_touchNext).addClass('lg-next-slide')};Plugin.prototype.mousewheel=function(){var _this=this;_this.$outer.on('mousewheel.lg',function(e){if(!e.deltaY){return}
if(e.deltaY>0){_this.goToPrevSlide()}else{_this.goToNextSlide()}
e.preventDefault()})};Plugin.prototype.closeGallery=function(){var _this=this;var mousedown=!1;this.$outer.find('.lg-close').on('click.lg',function(){_this.destroy()});if(_this.s.closable){_this.$outer.on('mousedown.lg',function(e){if($(e.target).is('.lg-outer')||$(e.target).is('.lg-item ')||$(e.target).is('.lg-img-wrap')){mousedown=!0}else{mousedown=!1}});_this.$outer.on('mousemove.lg',function(){mousedown=!1})}};Plugin.prototype.destroy=function(d){var _this=this;if(!d){_this.$el.trigger('onBeforeClose.lg');$(window).scrollTop(_this.prevScrollTop)}
if(d){if(!_this.s.dynamic){this.$items.off('click.lg click.lgcustom')}
$.removeData(_this.el,'lightGallery')}
this.$el.off('.lg.tm');$.each($.fn.lightGallery.modules,function(key){if(_this.modules[key]){_this.modules[key].destroy()}});this.lGalleryOn=!1;clearTimeout(_this.hideBartimeout);this.hideBartimeout=!1;$(window).off('.lg');$('body').removeClass('lg-on lg-from-hash');if(_this.$outer){_this.$outer.removeClass('lg-visible')}
$('.lg-backdrop').removeClass('in');setTimeout(function(){if(_this.$outer){_this.$outer.remove()}
$('.lg-backdrop').remove();if(!d){_this.$el.trigger('onCloseAfter.lg')}},_this.s.backdropDuration+50)};$.fn.lightGallery=function(options){return this.each(function(){if(!$.data(this,'lightGallery')){$.data(this,'lightGallery',new Plugin(this,options))}else{try{$(this).data('lightGallery').init()}catch(err){console.error('lightGallery has not initiated properly')}}})};$.fn.lightGallery.modules={}})()}));(function(root,factory){if(typeof define==='function'&&define.amd){define(['jquery'],function(a0){return(factory(a0))})}else if(typeof exports==='object'){module.exports=factory(require('jquery'))}else{factory(jQuery)}}(this,function($){(function(){'use strict';var defaults={autoplay:!1,pause:5000,progressBar:!0,fourceAutoplay:!1,autoplayControls:!0,appendAutoplayControlsTo:'.lg-toolbar'};var Autoplay=function(element){this.core=$(element).data('lightGallery');this.$el=$(element);if(this.core.$items.length<2){return!1}
this.core.s=$.extend({},defaults,this.core.s);this.interval=!1;this.fromAuto=!0;this.canceledOnTouch=!1;this.fourceAutoplayTemp=this.core.s.fourceAutoplay;if(!this.core.doCss()){this.core.s.progressBar=!1}
this.init();return this};Autoplay.prototype.init=function(){var _this=this;if(_this.core.s.autoplayControls){_this.controls()}
if(_this.core.s.progressBar){_this.core.$outer.find('.lg').append('<div class="lg-progress-bar"><div class="lg-progress"></div></div>')}
_this.progress();if(_this.core.s.autoplay){_this.$el.one('onSlideItemLoad.lg.tm',function(){_this.startlAuto()})}
_this.$el.on('onDragstart.lg.tm touchstart.lg.tm',function(){if(_this.interval){_this.cancelAuto();_this.canceledOnTouch=!0}});_this.$el.on('onDragend.lg.tm touchend.lg.tm onSlideClick.lg.tm',function(){if(!_this.interval&&_this.canceledOnTouch){_this.startlAuto();_this.canceledOnTouch=!1}})};Autoplay.prototype.progress=function(){var _this=this;var _$progressBar;var _$progress;_this.$el.on('onBeforeSlide.lg.tm',function(){if(_this.core.s.progressBar&&_this.fromAuto){_$progressBar=_this.core.$outer.find('.lg-progress-bar');_$progress=_this.core.$outer.find('.lg-progress');if(_this.interval){_$progress.removeAttr('style');_$progressBar.removeClass('lg-start');setTimeout(function(){_$progress.css('transition','width '+(_this.core.s.speed+_this.core.s.pause)+'ms ease 0s');_$progressBar.addClass('lg-start')},20)}}
if(!_this.fromAuto&&!_this.core.s.fourceAutoplay){_this.cancelAuto()}
_this.fromAuto=!1})};Autoplay.prototype.controls=function(){var _this=this;var _html='<span class="lg-autoplay-button lg-icon"></span>';$(this.core.s.appendAutoplayControlsTo).append(_html);_this.core.$outer.find('.lg-autoplay-button').on('click.lg',function(){if($(_this.core.$outer).hasClass('lg-show-autoplay')){_this.cancelAuto();_this.core.s.fourceAutoplay=!1}else{if(!_this.interval){_this.startlAuto();_this.core.s.fourceAutoplay=_this.fourceAutoplayTemp}}})};Autoplay.prototype.startlAuto=function(){var _this=this;_this.core.$outer.find('.lg-progress').css('transition','width '+(_this.core.s.speed+_this.core.s.pause)+'ms ease 0s');_this.core.$outer.addClass('lg-show-autoplay');_this.core.$outer.find('.lg-progress-bar').addClass('lg-start');_this.interval=setInterval(function(){if(_this.core.index+1<_this.core.$items.length){_this.core.index++}else{_this.core.index=0}
_this.fromAuto=!0;_this.core.slide(_this.core.index,!1,!1,'next')},_this.core.s.speed+_this.core.s.pause)};Autoplay.prototype.cancelAuto=function(){clearInterval(this.interval);this.interval=!1;this.core.$outer.find('.lg-progress').removeAttr('style');this.core.$outer.removeClass('lg-show-autoplay');this.core.$outer.find('.lg-progress-bar').removeClass('lg-start')};Autoplay.prototype.destroy=function(){this.cancelAuto();this.core.$outer.find('.lg-progress-bar').remove()};$.fn.lightGallery.modules.autoplay=Autoplay})()}));(function(root,factory){if(typeof define==='function'&&define.amd){define(['jquery'],function(a0){return(factory(a0))})}else if(typeof module==='object'&&module.exports){module.exports=factory(require('jquery'))}else{factory(root.jQuery)}}(this,function($){(function(){'use strict';var defaults={fullScreen:!0};function isFullScreen(){return(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement)}
var Fullscreen=function(element){this.core=$(element).data('lightGallery');this.$el=$(element);this.core.s=$.extend({},defaults,this.core.s);this.init();return this};Fullscreen.prototype.init=function(){var fullScreen='';if(this.core.s.fullScreen){if(!document.fullscreenEnabled&&!document.webkitFullscreenEnabled&&!document.mozFullScreenEnabled&&!document.msFullscreenEnabled){return}else{fullScreen='<span class="lg-fullscreen lg-icon"></span>';this.core.$outer.find('.lg-toolbar').append(fullScreen);this.fullScreen()}}};Fullscreen.prototype.requestFullscreen=function(){var el=document.documentElement;if(el.requestFullscreen){el.requestFullscreen()}else if(el.msRequestFullscreen){el.msRequestFullscreen()}else if(el.mozRequestFullScreen){el.mozRequestFullScreen()}else if(el.webkitRequestFullscreen){el.webkitRequestFullscreen()}};Fullscreen.prototype.exitFullscreen=function(){if(document.exitFullscreen){document.exitFullscreen()}else if(document.msExitFullscreen){document.msExitFullscreen()}else if(document.mozCancelFullScreen){document.mozCancelFullScreen()}else if(document.webkitExitFullscreen){document.webkitExitFullscreen()}};Fullscreen.prototype.fullScreen=function(){var _this=this;$(document).on('fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg',function(){_this.core.$outer.toggleClass('lg-fullscreen-on')});this.core.$outer.find('.lg-fullscreen').on('click.lg',function(){if(isFullScreen()){_this.exitFullscreen()}else{_this.requestFullscreen()}})};Fullscreen.prototype.destroy=function(){if(isFullScreen()){this.exitFullscreen()}
$(document).off('fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg')};$.fn.lightGallery.modules.fullscreen=Fullscreen})()}));(function(root,factory){if(typeof define==='function'&&define.amd){define(['jquery'],function(a0){return(factory(a0))})}else if(typeof exports==='object'){module.exports=factory(require('jquery'))}else{factory(jQuery)}}(this,function($){(function(){'use strict';var defaults={pager:!1};var Pager=function(element){this.core=$(element).data('lightGallery');this.$el=$(element);this.core.s=$.extend({},defaults,this.core.s);if(this.core.s.pager&&this.core.$items.length>1){this.init()}
return this};Pager.prototype.init=function(){var _this=this;var pagerList='';var $pagerCont;var $pagerOuter;var timeout;_this.core.$outer.find('.lg').append('<div class="lg-pager-outer"></div>');if(_this.core.s.dynamic){for(var i=0;i<_this.core.s.dynamicEl.length;i++){pagerList+='<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="'+_this.core.s.dynamicEl[i].thumb+'" /></div></span>'}}else{_this.core.$items.each(function(){if(!_this.core.s.exThumbImage){pagerList+='<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="'+$(this).find('img').attr('src')+'" /></div></span>'}else{pagerList+='<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="'+$(this).attr(_this.core.s.exThumbImage)+'" /></div></span>'}})}
$pagerOuter=_this.core.$outer.find('.lg-pager-outer');$pagerOuter.html(pagerList);$pagerCont=_this.core.$outer.find('.lg-pager-cont');$pagerCont.on('click.lg touchend.lg',function(){var _$this=$(this);_this.core.index=_$this.index();_this.core.slide(_this.core.index,!1,!0,!1)});$pagerOuter.on('mouseover.lg',function(){clearTimeout(timeout);$pagerOuter.addClass('lg-pager-hover')});$pagerOuter.on('mouseout.lg',function(){timeout=setTimeout(function(){$pagerOuter.removeClass('lg-pager-hover')})});_this.core.$el.on('onBeforeSlide.lg.tm',function(e,prevIndex,index){$pagerCont.removeClass('lg-pager-active');$pagerCont.eq(index).addClass('lg-pager-active')})};Pager.prototype.destroy=function(){};$.fn.lightGallery.modules.pager=Pager})()}));(function(root,factory){if(typeof define==='function'&&define.amd){define(['jquery'],function(a0){return(factory(a0))})}else if(typeof exports==='object'){module.exports=factory(require('jquery'))}else{factory(jQuery)}}(this,function($){(function(){'use strict';var defaults={thumbnail:!0,animateThumb:!0,currentPagerPosition:'middle',thumbWidth:100,thumbHeight:'80px',thumbContHeight:100,thumbMargin:5,exThumbImage:!1,showThumbByDefault:!0,toogleThumb:!0,pullCaptionUp:!0,enableThumbDrag:!0,enableThumbSwipe:!0,swipeThreshold:50,loadYoutubeThumbnail:!0,youtubeThumbSize:1,loadVimeoThumbnail:!0,vimeoThumbSize:'thumbnail_small',loadDailymotionThumbnail:!0};var Thumbnail=function(element){this.core=$(element).data('lightGallery');this.core.s=$.extend({},defaults,this.core.s);this.$el=$(element);this.$thumbOuter=null;this.thumbOuterWidth=0;this.thumbTotalWidth=(this.core.$items.length*(this.core.s.thumbWidth+this.core.s.thumbMargin));this.thumbIndex=this.core.index;if(this.core.s.animateThumb){this.core.s.thumbHeight='100%'}
this.left=0;this.init();return this};Thumbnail.prototype.init=function(){var _this=this;if(this.core.s.thumbnail&&this.core.$items.length>1){if(this.core.s.showThumbByDefault){setTimeout(function(){_this.core.$outer.addClass('lg-thumb-open')},700)}
if(this.core.s.pullCaptionUp){this.core.$outer.addClass('lg-pull-caption-up')}
this.build();if(this.core.s.animateThumb&&this.core.doCss()){if(this.core.s.enableThumbDrag){this.enableThumbDrag()}
if(this.core.s.enableThumbSwipe){this.enableThumbSwipe()}
this.thumbClickable=!1}else{this.thumbClickable=!0}
this.toogle();this.thumbkeyPress()}};Thumbnail.prototype.build=function(){var _this=this;var thumbList='';var vimeoErrorThumbSize='';var $thumb;var html='<div class="lg-thumb-outer">'+'<div class="lg-thumb lg-group">'+'</div>'+'</div>';switch(this.core.s.vimeoThumbSize){case 'thumbnail_large':vimeoErrorThumbSize='640';break;case 'thumbnail_medium':vimeoErrorThumbSize='200x150';break;case 'thumbnail_small':vimeoErrorThumbSize='100x75'}
_this.core.$outer.addClass('lg-has-thumb');_this.core.$outer.find('.lg').append(html);_this.$thumbOuter=_this.core.$outer.find('.lg-thumb-outer');_this.thumbOuterWidth=_this.$thumbOuter.width();if(_this.core.s.animateThumb){_this.core.$outer.find('.lg-thumb').css({width:_this.thumbTotalWidth+'px',position:'relative'})}
if(this.core.s.animateThumb){_this.$thumbOuter.css('height',_this.core.s.thumbContHeight+'px')}
function getThumb(src,thumb,index){var isVideo=_this.core.isVideo(src,index)||{};var thumbImg;var vimeoId='';if(isVideo.youtube||isVideo.vimeo||isVideo.dailymotion){if(isVideo.youtube){if(_this.core.s.loadYoutubeThumbnail){thumbImg='//img.youtube.com/vi/'+isVideo.youtube[1]+'/'+_this.core.s.youtubeThumbSize+'.jpg'}else{thumbImg=thumb}}else if(isVideo.vimeo){if(_this.core.s.loadVimeoThumbnail){thumbImg='//i.vimeocdn.com/video/error_'+vimeoErrorThumbSize+'.jpg';vimeoId=isVideo.vimeo[1]}else{thumbImg=thumb}}else if(isVideo.dailymotion){if(_this.core.s.loadDailymotionThumbnail){thumbImg='//www.dailymotion.com/thumbnail/video/'+isVideo.dailymotion[1]}else{thumbImg=thumb}}}else{thumbImg=thumb}
thumbList+='<div data-vimeo-id="'+vimeoId+'" class="lg-thumb-item" style="width:'+_this.core.s.thumbWidth+'px; height: '+_this.core.s.thumbHeight+'; margin-right: '+_this.core.s.thumbMargin+'px"><img src="'+thumbImg+'" /></div>';vimeoId=''}
if(_this.core.s.dynamic){for(var i=0;i<_this.core.s.dynamicEl.length;i++){getThumb(_this.core.s.dynamicEl[i].src,_this.core.s.dynamicEl[i].thumb,i)}}else{_this.core.$items.each(function(i){if(!_this.core.s.exThumbImage){getThumb($(this).attr('href')||$(this).attr('data-src'),$(this).find('img').attr('src'),i)}else{getThumb($(this).attr('href')||$(this).attr('data-src'),$(this).attr(_this.core.s.exThumbImage),i)}})}
_this.core.$outer.find('.lg-thumb').html(thumbList);$thumb=_this.core.$outer.find('.lg-thumb-item');$thumb.each(function(){var $this=$(this);var vimeoVideoId=$this.attr('data-vimeo-id');if(vimeoVideoId){$.getJSON('//www.vimeo.com/api/v2/video/'+vimeoVideoId+'.json?callback=?',{format:'json'},function(data){$this.find('img').attr('src',data[0][_this.core.s.vimeoThumbSize])})}});$thumb.eq(_this.core.index).addClass('active');_this.core.$el.on('onBeforeSlide.lg.tm',function(){$thumb.removeClass('active');$thumb.eq(_this.core.index).addClass('active')});$thumb.on('click.lg touchend.lg',function(){var _$this=$(this);setTimeout(function(){if((_this.thumbClickable&&!_this.core.lgBusy)||!_this.core.doCss()){_this.core.index=_$this.index();_this.core.slide(_this.core.index,!1,!0,!1)}},50)});_this.core.$el.on('onBeforeSlide.lg.tm',function(){_this.animateThumb(_this.core.index)});$(window).on('resize.lg.thumb orientationchange.lg.thumb',function(){setTimeout(function(){_this.animateThumb(_this.core.index);_this.thumbOuterWidth=_this.$thumbOuter.width()},200)})};Thumbnail.prototype.setTranslate=function(value){this.core.$outer.find('.lg-thumb').css({transform:'translate3d(-'+(value)+'px, 0px, 0px)'})};Thumbnail.prototype.animateThumb=function(index){var $thumb=this.core.$outer.find('.lg-thumb');if(this.core.s.animateThumb){var position;switch(this.core.s.currentPagerPosition){case 'left':position=0;break;case 'middle':position=(this.thumbOuterWidth/2)-(this.core.s.thumbWidth/2);break;case 'right':position=this.thumbOuterWidth-this.core.s.thumbWidth}
this.left=((this.core.s.thumbWidth+this.core.s.thumbMargin)*index-1)-position;if(this.left>(this.thumbTotalWidth-this.thumbOuterWidth)){this.left=this.thumbTotalWidth-this.thumbOuterWidth}
if(this.left<0){this.left=0}
if(this.core.lGalleryOn){if(!$thumb.hasClass('on')){this.core.$outer.find('.lg-thumb').css('transition-duration',this.core.s.speed+'ms')}
if(!this.core.doCss()){$thumb.animate({left:-this.left+'px'},this.core.s.speed)}}else{if(!this.core.doCss()){$thumb.css('left',-this.left+'px')}}
this.setTranslate(this.left)}};Thumbnail.prototype.enableThumbDrag=function(){var _this=this;var startCoords=0;var endCoords=0;var isDraging=!1;var isMoved=!1;var tempLeft=0;_this.$thumbOuter.addClass('lg-grab');_this.core.$outer.find('.lg-thumb').on('mousedown.lg.thumb',function(e){if(_this.thumbTotalWidth>_this.thumbOuterWidth){e.preventDefault();startCoords=e.pageX;isDraging=!0;_this.core.$outer.scrollLeft+=1;_this.core.$outer.scrollLeft-=1;_this.thumbClickable=!1;_this.$thumbOuter.removeClass('lg-grab').addClass('lg-grabbing')}});$(window).on('mousemove.lg.thumb',function(e){if(isDraging){tempLeft=_this.left;isMoved=!0;endCoords=e.pageX;_this.$thumbOuter.addClass('lg-dragging');tempLeft=tempLeft-(endCoords-startCoords);if(tempLeft>(_this.thumbTotalWidth-_this.thumbOuterWidth)){tempLeft=_this.thumbTotalWidth-_this.thumbOuterWidth}
if(tempLeft<0){tempLeft=0}
_this.setTranslate(tempLeft)}});$(window).on('mouseup.lg.thumb',function(){if(isMoved){isMoved=!1;_this.$thumbOuter.removeClass('lg-dragging');_this.left=tempLeft;if(Math.abs(endCoords-startCoords)<_this.core.s.swipeThreshold){_this.thumbClickable=!0}}else{_this.thumbClickable=!0}
if(isDraging){isDraging=!1;_this.$thumbOuter.removeClass('lg-grabbing').addClass('lg-grab')}})};Thumbnail.prototype.enableThumbSwipe=function(){var _this=this;var startCoords=0;var endCoords=0;var isMoved=!1;var tempLeft=0;_this.core.$outer.find('.lg-thumb').on('touchstart.lg',function(e){if(_this.thumbTotalWidth>_this.thumbOuterWidth){e.preventDefault();startCoords=e.originalEvent.targetTouches[0].pageX;_this.thumbClickable=!1}});_this.core.$outer.find('.lg-thumb').on('touchmove.lg',function(e){if(_this.thumbTotalWidth>_this.thumbOuterWidth){e.preventDefault();endCoords=e.originalEvent.targetTouches[0].pageX;isMoved=!0;_this.$thumbOuter.addClass('lg-dragging');tempLeft=_this.left;tempLeft=tempLeft-(endCoords-startCoords);if(tempLeft>(_this.thumbTotalWidth-_this.thumbOuterWidth)){tempLeft=_this.thumbTotalWidth-_this.thumbOuterWidth}
if(tempLeft<0){tempLeft=0}
_this.setTranslate(tempLeft)}});_this.core.$outer.find('.lg-thumb').on('touchend.lg',function(){if(_this.thumbTotalWidth>_this.thumbOuterWidth){if(isMoved){isMoved=!1;_this.$thumbOuter.removeClass('lg-dragging');if(Math.abs(endCoords-startCoords)<_this.core.s.swipeThreshold){_this.thumbClickable=!0}
_this.left=tempLeft}else{_this.thumbClickable=!0}}else{_this.thumbClickable=!0}})};Thumbnail.prototype.toogle=function(){var _this=this;if(_this.core.s.toogleThumb){_this.core.$outer.addClass('lg-can-toggle');_this.$thumbOuter.append('<span class="lg-toogle-thumb lg-icon"></span>');_this.core.$outer.find('.lg-toogle-thumb').on('click.lg',function(){_this.core.$outer.toggleClass('lg-thumb-open')})}};Thumbnail.prototype.thumbkeyPress=function(){var _this=this;$(window).on('keydown.lg.thumb',function(e){if(e.keyCode===38){e.preventDefault();_this.core.$outer.addClass('lg-thumb-open')}else if(e.keyCode===40){e.preventDefault();_this.core.$outer.removeClass('lg-thumb-open')}})};Thumbnail.prototype.destroy=function(){if(this.core.s.thumbnail&&this.core.$items.length>1){$(window).off('resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb');this.$thumbOuter.remove();this.core.$outer.removeClass('lg-has-thumb')}};$.fn.lightGallery.modules.Thumbnail=Thumbnail})()}));(function(root,factory){if(typeof define==='function'&&define.amd){define(['jquery'],function(a0){return(factory(a0))})}else if(typeof module==='object'&&module.exports){module.exports=factory(require('jquery'))}else{factory(root.jQuery)}}(this,function($){(function(){'use strict';var defaults={videoMaxWidth:'855px',autoplayFirstVideo:!0,youtubePlayerParams:!1,vimeoPlayerParams:!1,dailymotionPlayerParams:!1,vkPlayerParams:!1,videojs:!1,videojsOptions:{}};var Video=function(element){this.core=$(element).data('lightGallery');this.$el=$(element);this.core.s=$.extend({},defaults,this.core.s);this.videoLoaded=!1;this.init();return this};Video.prototype.init=function(){var _this=this;_this.core.$el.on('hasVideo.lg.tm',onHasVideo.bind(this));_this.core.$el.on('onAferAppendSlide.lg.tm',onAferAppendSlide.bind(this));if(_this.core.doCss()&&(_this.core.$items.length>1)&&(_this.core.s.enableSwipe||_this.core.s.enableDrag)){_this.core.$el.on('onSlideClick.lg.tm',function(){var $el=_this.core.$slide.eq(_this.core.index);_this.loadVideoOnclick($el)})}else{_this.core.$slide.on('click.lg',function(){_this.loadVideoOnclick($(this))})}
_this.core.$el.on('onBeforeSlide.lg.tm',onBeforeSlide.bind(this));_this.core.$el.on('onAfterSlide.lg.tm',function(event,prevIndex){_this.core.$slide.eq(prevIndex).removeClass('lg-video-playing')});if(_this.core.s.autoplayFirstVideo){_this.core.$el.on('onAferAppendSlide.lg.tm',function(e,index){if(!_this.core.lGalleryOn){var $el=_this.core.$slide.eq(index);setTimeout(function(){_this.loadVideoOnclick($el)},100)}})}};Video.prototype.loadVideo=function(src,addClass,noPoster,index,html){var video='';var autoplay=1;var a='';var isVideo=this.core.isVideo(src,index)||{};if(noPoster){if(this.videoLoaded){autoplay=0}else{autoplay=this.core.s.autoplayFirstVideo?1:0}}
if(isVideo.youtube){a='?wmode=opaque&autoplay='+autoplay+'&enablejsapi=1';if(this.core.s.youtubePlayerParams){a=a+'&'+$.param(this.core.s.youtubePlayerParams)}
video='<iframe class="lg-video-object lg-youtube '+addClass+'" width="560" height="315" src="//www.youtube.com/embed/'+isVideo.youtube[1]+a+'" frameborder="0" allowfullscreen></iframe>'}else if(isVideo.vimeo){a='?autoplay='+autoplay+'&api=1';if(this.core.s.vimeoPlayerParams){a=a+'&'+$.param(this.core.s.vimeoPlayerParams)}
video='<iframe class="lg-video-object lg-vimeo '+addClass+'" width="560" height="315"  src="//player.vimeo.com/video/'+isVideo.vimeo[1]+a+'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'}else if(isVideo.dailymotion){a='?wmode=opaque&autoplay='+autoplay+'&api=postMessage';if(this.core.s.dailymotionPlayerParams){a=a+'&'+$.param(this.core.s.dailymotionPlayerParams)}
video='<iframe class="lg-video-object lg-dailymotion '+addClass+'" width="560" height="315" src="//www.dailymotion.com/embed/video/'+isVideo.dailymotion[1]+a+'" frameborder="0" allowfullscreen></iframe>'}else if(isVideo.html5){var fL=html.substring(0,1);if(fL==='.'||fL==='#'){html=$(html).html()}
video=html}else if(isVideo.vk){a='&autoplay='+autoplay;if(this.core.s.vkPlayerParams){a=a+'&'+$.param(this.core.s.vkPlayerParams)}
video='<iframe class="lg-video-object lg-vk '+addClass+'" width="560" height="315" src="//vk.com/video_ext.php?'+isVideo.vk[1]+a+'" frameborder="0" allowfullscreen></iframe>'}
return video};Video.prototype.loadVideoOnclick=function($el){var _this=this;if($el.find('.lg-object').hasClass('lg-has-poster')&&$el.find('.lg-object').is(':visible')){if(!$el.hasClass('lg-has-video')){$el.addClass('lg-video-playing lg-has-video');var _src;var _html;var _loadVideo=function(_src,_html){$el.find('.lg-video').append(_this.loadVideo(_src,'',!1,_this.core.index,_html));if(_html){if(_this.core.s.videojs){try{videojs(_this.core.$slide.eq(_this.core.index).find('.lg-html5').get(0),_this.core.s.videojsOptions,function(){this.play()})}catch(e){console.error('Make sure you have included videojs')}}else{_this.core.$slide.eq(_this.core.index).find('.lg-html5').get(0).play()}}};if(_this.core.s.dynamic){_src=_this.core.s.dynamicEl[_this.core.index].src;_html=_this.core.s.dynamicEl[_this.core.index].html;_loadVideo(_src,_html)}else{_src=_this.core.$items.eq(_this.core.index).attr('href')||_this.core.$items.eq(_this.core.index).attr('data-src');_html=_this.core.$items.eq(_this.core.index).attr('data-html');_loadVideo(_src,_html)}
var $tempImg=$el.find('.lg-object');$el.find('.lg-video').append($tempImg);if(!$el.find('.lg-video-object').hasClass('lg-html5')){$el.removeClass('lg-complete');$el.find('.lg-video-object').on('load.lg error.lg',function(){$el.addClass('lg-complete')})}}else{var youtubePlayer=$el.find('.lg-youtube').get(0);var vimeoPlayer=$el.find('.lg-vimeo').get(0);var dailymotionPlayer=$el.find('.lg-dailymotion').get(0);var html5Player=$el.find('.lg-html5').get(0);if(youtubePlayer){youtubePlayer.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}','*')}else if(vimeoPlayer){try{$f(vimeoPlayer).api('play')}catch(e){console.error('Make sure you have included froogaloop2 js')}}else if(dailymotionPlayer){dailymotionPlayer.contentWindow.postMessage('play','*')}else if(html5Player){if(_this.core.s.videojs){try{videojs(html5Player).play()}catch(e){console.error('Make sure you have included videojs')}}else{html5Player.play()}}
$el.addClass('lg-video-playing')}}};Video.prototype.destroy=function(){this.videoLoaded=!1};function onHasVideo(event,index,src,html){var _this=this;_this.core.$slide.eq(index).find('.lg-video').append(_this.loadVideo(src,'lg-object',!0,index,html));if(html){if(_this.core.s.videojs){try{videojs(_this.core.$slide.eq(index).find('.lg-html5').get(0),_this.core.s.videojsOptions,function(){if(!_this.videoLoaded&&_this.core.s.autoplayFirstVideo){this.play()}})}catch(e){console.error('Make sure you have included videojs')}}else{if(!_this.videoLoaded&&_this.core.s.autoplayFirstVideo){_this.core.$slide.eq(index).find('.lg-html5').get(0).play()}}}}
function onAferAppendSlide(event,index){var $videoCont=this.core.$slide.eq(index).find('.lg-video-cont');if(!$videoCont.hasClass('lg-has-iframe')){$videoCont.css('max-width',this.core.s.videoMaxWidth);this.videoLoaded=!0}}
function onBeforeSlide(event,prevIndex,index){var _this=this;var $videoSlide=_this.core.$slide.eq(prevIndex);var youtubePlayer=$videoSlide.find('.lg-youtube').get(0);var vimeoPlayer=$videoSlide.find('.lg-vimeo').get(0);var dailymotionPlayer=$videoSlide.find('.lg-dailymotion').get(0);var vkPlayer=$videoSlide.find('.lg-vk').get(0);var html5Player=$videoSlide.find('.lg-html5').get(0);if(youtubePlayer){youtubePlayer.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}','*')}else if(vimeoPlayer){try{$f(vimeoPlayer).api('pause')}catch(e){console.error('Make sure you have included froogaloop2 js')}}else if(dailymotionPlayer){dailymotionPlayer.contentWindow.postMessage('pause','*')}else if(html5Player){if(_this.core.s.videojs){try{videojs(html5Player).pause()}catch(e){console.error('Make sure you have included videojs')}}else{html5Player.pause()}}if(vkPlayer){$(vkPlayer).attr('src',$(vkPlayer).attr('src').replace('&autoplay','&noplay'))}
var _src;if(_this.core.s.dynamic){_src=_this.core.s.dynamicEl[index].src}else{_src=_this.core.$items.eq(index).attr('href')||_this.core.$items.eq(index).attr('data-src')}
var _isVideo=_this.core.isVideo(_src,index)||{};if(_isVideo.youtube||_isVideo.vimeo||_isVideo.dailymotion||_isVideo.vk){_this.core.$outer.addClass('lg-hide-download')}}
$.fn.lightGallery.modules.video=Video})()}));(function(root,factory){if(typeof define==='function'&&define.amd){define(['jquery'],function(a0){return(factory(a0))})}else if(typeof exports==='object'){module.exports=factory(require('jquery'))}else{factory(jQuery)}}(this,function($){(function(){'use strict';var getUseLeft=function(){var useLeft=!1;var isChrome=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);if(isChrome&&parseInt(isChrome[2],10)<54){useLeft=!0}
return useLeft};var defaults={scale:1,zoom:!0,actualSize:!0,enableZoomAfter:300,useLeftForZoom:getUseLeft()};var Zoom=function(element){this.core=$(element).data('lightGallery');this.core.s=$.extend({},defaults,this.core.s);if(this.core.s.zoom&&this.core.doCss()){this.init();this.zoomabletimeout=!1;this.pageX=$(window).width()/2;this.pageY=($(window).height()/2)+$(window).scrollTop()}
return this};Zoom.prototype.init=function(){var _this=this;var zoomIcons='<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';if(_this.core.s.actualSize){zoomIcons+='<span id="lg-actual-size" class="lg-icon"></span>'}
if(_this.core.s.useLeftForZoom){_this.core.$outer.addClass('lg-use-left-for-zoom')}else{_this.core.$outer.addClass('lg-use-transition-for-zoom')}
this.core.$outer.find('.lg-toolbar').append(zoomIcons);_this.core.$el.on('onSlideItemLoad.lg.tm.zoom',function(event,index,delay){var _speed=_this.core.s.enableZoomAfter+delay;if($('body').hasClass('lg-from-hash')&&delay){_speed=0}else{$('body').removeClass('lg-from-hash')}
_this.zoomabletimeout=setTimeout(function(){_this.core.$slide.eq(index).addClass('lg-zoomable')},_speed+30)});var scale=1;var zoom=function(scaleVal){var $image=_this.core.$outer.find('.lg-current .lg-image');var _x;var _y;var offsetX=($(window).width()-$image.prop('offsetWidth'))/2;var offsetY=(($(window).height()-$image.prop('offsetHeight'))/2)+$(window).scrollTop();_x=_this.pageX-offsetX;_y=_this.pageY-offsetY;var x=(scaleVal-1)*(_x);var y=(scaleVal-1)*(_y);$image.css('transform','scale3d('+scaleVal+', '+scaleVal+', 1)').attr('data-scale',scaleVal);if(_this.core.s.useLeftForZoom){$image.parent().css({left:-x+'px',top:-y+'px'}).attr('data-x',x).attr('data-y',y)}else{$image.parent().css('transform','translate3d(-'+x+'px, -'+y+'px, 0)').attr('data-x',x).attr('data-y',y)}};var callScale=function(){if(scale>1){_this.core.$outer.addClass('lg-zoomed')}else{_this.resetZoom()}
if(scale<1){scale=1}
zoom(scale)};var actualSize=function(event,$image,index,fromIcon){var w=$image.prop('offsetWidth');var nw;if(_this.core.s.dynamic){nw=_this.core.s.dynamicEl[index].width||$image[0].naturalWidth||w}else{nw=_this.core.$items.eq(index).attr('data-width')||$image[0].naturalWidth||w}
var _scale;if(_this.core.$outer.hasClass('lg-zoomed')){scale=1}else{if(nw>w){_scale=nw/w;scale=_scale||2}}
if(fromIcon){_this.pageX=$(window).width()/2;_this.pageY=($(window).height()/2)+$(window).scrollTop()}else{_this.pageX=event.pageX||event.originalEvent.targetTouches[0].pageX;_this.pageY=event.pageY||event.originalEvent.targetTouches[0].pageY}
callScale();setTimeout(function(){_this.core.$outer.removeClass('lg-grabbing').addClass('lg-grab')},10)};var tapped=!1;_this.core.$el.on('onAferAppendSlide.lg.tm.zoom',function(event,index){var $image=_this.core.$slide.eq(index).find('.lg-image');$image.on('dblclick',function(event){actualSize(event,$image,index)});$image.on('touchstart',function(event){if(!tapped){tapped=setTimeout(function(){tapped=null},300)}else{clearTimeout(tapped);tapped=null;actualSize(event,$image,index)}
event.preventDefault()})});$(window).on('resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom',function(){_this.pageX=$(window).width()/2;_this.pageY=($(window).height()/2)+$(window).scrollTop();zoom(scale)});$('#lg-zoom-out').on('click.lg',function(){if(_this.core.$outer.find('.lg-current .lg-image').length){scale-=_this.core.s.scale;callScale()}});$('#lg-zoom-in').on('click.lg',function(){if(_this.core.$outer.find('.lg-current .lg-image').length){scale+=_this.core.s.scale;callScale()}});$('#lg-actual-size').on('click.lg',function(event){actualSize(event,_this.core.$slide.eq(_this.core.index).find('.lg-image'),_this.core.index,!0)});_this.core.$el.on('onBeforeSlide.lg.tm',function(){scale=1;_this.resetZoom()});_this.zoomDrag();_this.zoomSwipe()};Zoom.prototype.resetZoom=function(){this.core.$outer.removeClass('lg-zoomed');this.core.$slide.find('.lg-img-wrap').removeAttr('style data-x data-y');this.core.$slide.find('.lg-image').removeAttr('style data-scale');this.pageX=$(window).width()/2;this.pageY=($(window).height()/2)+$(window).scrollTop()};Zoom.prototype.zoomSwipe=function(){var _this=this;var startCoords={};var endCoords={};var isMoved=!1;var allowX=!1;var allowY=!1;_this.core.$slide.on('touchstart.lg',function(e){if(_this.core.$outer.hasClass('lg-zoomed')){var $image=_this.core.$slide.eq(_this.core.index).find('.lg-object');allowY=$image.prop('offsetHeight')*$image.attr('data-scale')>_this.core.$outer.find('.lg').height();allowX=$image.prop('offsetWidth')*$image.attr('data-scale')>_this.core.$outer.find('.lg').width();if((allowX||allowY)){e.preventDefault();startCoords={x:e.originalEvent.targetTouches[0].pageX,y:e.originalEvent.targetTouches[0].pageY}}}});_this.core.$slide.on('touchmove.lg',function(e){if(_this.core.$outer.hasClass('lg-zoomed')){var _$el=_this.core.$slide.eq(_this.core.index).find('.lg-img-wrap');var distanceX;var distanceY;e.preventDefault();isMoved=!0;endCoords={x:e.originalEvent.targetTouches[0].pageX,y:e.originalEvent.targetTouches[0].pageY};_this.core.$outer.addClass('lg-zoom-dragging');if(allowY){distanceY=(-Math.abs(_$el.attr('data-y')))+(endCoords.y-startCoords.y)}else{distanceY=-Math.abs(_$el.attr('data-y'))}
if(allowX){distanceX=(-Math.abs(_$el.attr('data-x')))+(endCoords.x-startCoords.x)}else{distanceX=-Math.abs(_$el.attr('data-x'))}
if((Math.abs(endCoords.x-startCoords.x)>15)||(Math.abs(endCoords.y-startCoords.y)>15)){if(_this.core.s.useLeftForZoom){_$el.css({left:distanceX+'px',top:distanceY+'px'})}else{_$el.css('transform','translate3d('+distanceX+'px, '+distanceY+'px, 0)')}}}});_this.core.$slide.on('touchend.lg',function(){if(_this.core.$outer.hasClass('lg-zoomed')){if(isMoved){isMoved=!1;_this.core.$outer.removeClass('lg-zoom-dragging');_this.touchendZoom(startCoords,endCoords,allowX,allowY)}}})};Zoom.prototype.zoomDrag=function(){var _this=this;var startCoords={};var endCoords={};var isDraging=!1;var isMoved=!1;var allowX=!1;var allowY=!1;_this.core.$slide.on('mousedown.lg.zoom',function(e){var $image=_this.core.$slide.eq(_this.core.index).find('.lg-object');allowY=$image.prop('offsetHeight')*$image.attr('data-scale')>_this.core.$outer.find('.lg').height();allowX=$image.prop('offsetWidth')*$image.attr('data-scale')>_this.core.$outer.find('.lg').width();if(_this.core.$outer.hasClass('lg-zoomed')){if($(e.target).hasClass('lg-object')&&(allowX||allowY)){e.preventDefault();startCoords={x:e.pageX,y:e.pageY};isDraging=!0;_this.core.$outer.scrollLeft+=1;_this.core.$outer.scrollLeft-=1;_this.core.$outer.removeClass('lg-grab').addClass('lg-grabbing')}}});$(window).on('mousemove.lg.zoom',function(e){if(isDraging){var _$el=_this.core.$slide.eq(_this.core.index).find('.lg-img-wrap');var distanceX;var distanceY;isMoved=!0;endCoords={x:e.pageX,y:e.pageY};_this.core.$outer.addClass('lg-zoom-dragging');if(allowY){distanceY=(-Math.abs(_$el.attr('data-y')))+(endCoords.y-startCoords.y)}else{distanceY=-Math.abs(_$el.attr('data-y'))}
if(allowX){distanceX=(-Math.abs(_$el.attr('data-x')))+(endCoords.x-startCoords.x)}else{distanceX=-Math.abs(_$el.attr('data-x'))}
if(_this.core.s.useLeftForZoom){_$el.css({left:distanceX+'px',top:distanceY+'px'})}else{_$el.css('transform','translate3d('+distanceX+'px, '+distanceY+'px, 0)')}}});$(window).on('mouseup.lg.zoom',function(e){if(isDraging){isDraging=!1;_this.core.$outer.removeClass('lg-zoom-dragging');if(isMoved&&((startCoords.x!==endCoords.x)||(startCoords.y!==endCoords.y))){endCoords={x:e.pageX,y:e.pageY};_this.touchendZoom(startCoords,endCoords,allowX,allowY)}
isMoved=!1}
_this.core.$outer.removeClass('lg-grabbing').addClass('lg-grab')})};Zoom.prototype.touchendZoom=function(startCoords,endCoords,allowX,allowY){var _this=this;var _$el=_this.core.$slide.eq(_this.core.index).find('.lg-img-wrap');var $image=_this.core.$slide.eq(_this.core.index).find('.lg-object');var distanceX=(-Math.abs(_$el.attr('data-x')))+(endCoords.x-startCoords.x);var distanceY=(-Math.abs(_$el.attr('data-y')))+(endCoords.y-startCoords.y);var minY=(_this.core.$outer.find('.lg').height()-$image.prop('offsetHeight'))/2;var maxY=Math.abs(($image.prop('offsetHeight')*Math.abs($image.attr('data-scale')))-_this.core.$outer.find('.lg').height()+minY);var minX=(_this.core.$outer.find('.lg').width()-$image.prop('offsetWidth'))/2;var maxX=Math.abs(($image.prop('offsetWidth')*Math.abs($image.attr('data-scale')))-_this.core.$outer.find('.lg').width()+minX);if((Math.abs(endCoords.x-startCoords.x)>15)||(Math.abs(endCoords.y-startCoords.y)>15)){if(allowY){if(distanceY<=-maxY){distanceY=-maxY}else if(distanceY>=-minY){distanceY=-minY}}
if(allowX){if(distanceX<=-maxX){distanceX=-maxX}else if(distanceX>=-minX){distanceX=-minX}}
if(allowY){_$el.attr('data-y',Math.abs(distanceY))}else{distanceY=-Math.abs(_$el.attr('data-y'))}
if(allowX){_$el.attr('data-x',Math.abs(distanceX))}else{distanceX=-Math.abs(_$el.attr('data-x'))}
if(_this.core.s.useLeftForZoom){_$el.css({left:distanceX+'px',top:distanceY+'px'})}else{_$el.css('transform','translate3d('+distanceX+'px, '+distanceY+'px, 0)')}}};Zoom.prototype.destroy=function(){var _this=this;_this.core.$el.off('.lg.zoom');$(window).off('.lg.zoom');_this.core.$slide.off('.lg.zoom');_this.core.$el.off('.lg.tm.zoom');_this.resetZoom();clearTimeout(_this.zoomabletimeout);_this.zoomabletimeout=!1};$.fn.lightGallery.modules.zoom=Zoom})()}));(function(root,factory){if(typeof define==='function'&&define.amd){define(['jquery'],function(a0){return(factory(a0))})}else if(typeof exports==='object'){module.exports=factory(require('jquery'))}else{factory(jQuery)}}(this,function($){(function(){'use strict';var defaults={hash:!0};var Hash=function(element){this.core=$(element).data('lightGallery');this.core.s=$.extend({},defaults,this.core.s);if(this.core.s.hash){this.oldHash=window.location.hash;this.init()}
return this};Hash.prototype.init=function(){var _this=this;var _hash;_this.core.$el.on('onAfterSlide.lg.tm',function(event,prevIndex,index){if(history.replaceState){history.replaceState(null,null,window.location.pathname+window.location.search+'#lg='+_this.core.s.galleryId+'&slide='+index)}else{window.location.hash='lg='+_this.core.s.galleryId+'&slide='+index}});$(window).on('hashchange.lg.hash',function(){_hash=window.location.hash;var _idx=parseInt(_hash.split('&slide=')[1],10);if((_hash.indexOf('lg='+_this.core.s.galleryId)>-1)){_this.core.slide(_idx,!1,!1)}else if(_this.core.lGalleryOn){_this.core.destroy()}})};Hash.prototype.destroy=function(){if(!this.core.s.hash){return}
if(this.oldHash&&this.oldHash.indexOf('lg='+this.core.s.galleryId)<0){if(history.replaceState){history.replaceState(null,null,this.oldHash)}else{window.location.hash=this.oldHash}}else{if(history.replaceState){history.replaceState(null,document.title,window.location.pathname+window.location.search)}else{window.location.hash=''}}
this.core.$el.off('.lg.hash')};$.fn.lightGallery.modules.hash=Hash})()}));(function(root,factory){if(typeof define==='function'&&define.amd){define(['jquery'],function(a0){return(factory(a0))})}else if(typeof exports==='object'){module.exports=factory(require('jquery'))}else{factory(jQuery)}}(this,function($){(function(){'use strict';var defaults={share:!0,facebook:!0,facebookDropdownText:'Facebook',twitter:!0,twitterDropdownText:'Twitter',googlePlus:!0,googlePlusDropdownText:'GooglePlus',pinterest:!0,pinterestDropdownText:'Pinterest'};var Share=function(element){this.core=$(element).data('lightGallery');this.core.s=$.extend({},defaults,this.core.s);if(this.core.s.share){this.init()}
return this};Share.prototype.init=function(){var _this=this;var shareHtml='<span id="lg-share" class="lg-icon">'+'<ul class="lg-dropdown" style="position: absolute;">';shareHtml+=_this.core.s.facebook?'<li><a id="lg-share-facebook" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">'+this.core.s.facebookDropdownText+'</span></a></li>':'';shareHtml+=_this.core.s.twitter?'<li><a id="lg-share-twitter" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">'+this.core.s.twitterDropdownText+'</span></a></li>':'';shareHtml+=_this.core.s.googlePlus?'<li><a id="lg-share-googleplus" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">'+this.core.s.googlePlusDropdownText+'</span></a></li>':'';shareHtml+=_this.core.s.pinterest?'<li><a id="lg-share-pinterest" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">'+this.core.s.pinterestDropdownText+'</span></a></li>':'';shareHtml+='</ul></span>';this.core.$outer.find('.lg-toolbar').append(shareHtml);this.core.$outer.find('.lg').append('<div id="lg-dropdown-overlay"></div>');$('#lg-share').on('click.lg',function(){_this.core.$outer.toggleClass('lg-dropdown-active')});$('#lg-dropdown-overlay').on('click.lg',function(){_this.core.$outer.removeClass('lg-dropdown-active')});_this.core.$el.on('onAfterSlide.lg.tm',function(event,prevIndex,index){setTimeout(function(){$('#lg-share-facebook').attr('href','https://www.facebook.com/sharer/sharer.php?u='+(encodeURIComponent(_this.getSahreProps(index,'facebookShareUrl')||window.location.href)));$('#lg-share-twitter').attr('href','https://twitter.com/intent/tweet?text='+_this.getSahreProps(index,'tweetText')+'&url='+(encodeURIComponent(_this.getSahreProps(index,'twitterShareUrl')||window.location.href)));$('#lg-share-googleplus').attr('href','https://plus.google.com/share?url='+(encodeURIComponent(_this.getSahreProps(index,'googleplusShareUrl')||window.location.href)));$('#lg-share-pinterest').attr('href','http://www.pinterest.com/pin/create/button/?url='+(encodeURIComponent(_this.getSahreProps(index,'pinterestShareUrl')||window.location.href))+'&media='+encodeURIComponent(_this.getSahreProps(index,'src'))+'&description='+_this.getSahreProps(index,'pinterestText'))},100)})};Share.prototype.getSahreProps=function(index,prop){var shareProp='';if(this.core.s.dynamic){shareProp=this.core.s.dynamicEl[index][prop]}else{var _href=this.core.$items.eq(index).attr('href');var _prop=this.core.$items.eq(index).data(prop);shareProp=prop==='src'?_href||_prop:_prop}
return shareProp};Share.prototype.destroy=function(){};$.fn.lightGallery.modules.share=Share})()}))
/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var i=this._events=this._events||{},n=i[e]=i[e]||[];return n.indexOf(t)==-1&&n.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var i=this._onceEvents=this._onceEvents||{},n=i[e]=i[e]||{};return n[t]=!0,this}},t.off=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=i.indexOf(t);return n!=-1&&i.splice(n,1),this}},t.emitEvent=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){i=i.slice(0),t=t||[];for(var n=this._onceEvents&&this._onceEvents[e],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(e,r),delete n[r]),r.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e}),function(e,t){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return t(e,i)}):"object"==typeof module&&module.exports?module.exports=t(e,require("ev-emitter")):e.imagesLoaded=t(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){function i(e,t){for(var i in t)e[i]=t[i];return e}function n(e){if(Array.isArray(e))return e;var t="object"==typeof e&&"number"==typeof e.length;return t?d.call(e):[e]}function o(e,t,r){if(!(this instanceof o))return new o(e,t,r);var s=e;return"string"==typeof e&&(s=document.querySelectorAll(e)),s?(this.elements=n(s),this.options=i({},this.options),"function"==typeof t?r=t:i(this.options,t),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(this.check.bind(this))):void a.error("Bad element for imagesLoaded "+(s||e))}function r(e){this.img=e}function s(e,t){this.url=e,this.element=t,this.img=new Image}var h=e.jQuery,a=e.console,d=Array.prototype.slice;o.prototype=Object.create(t.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&u[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=e.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var u={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,e),n=i.exec(t.backgroundImage)}},o.prototype.addImage=function(e){var t=new r(e);this.images.push(t)},o.prototype.addBackground=function(e,t){var i=new s(e,t);this.images.push(i)},o.prototype.check=function(){function e(e,i,n){setTimeout(function(){t.progress(e,i,n)})}var t=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(t){t.once("progress",e),t.check()}):void this.complete()},o.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,e,t)},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},r.prototype=Object.create(t.prototype),r.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},r.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},r.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},o.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(h=t,h.fn.imagesLoaded=function(e,t){var i=new o(this,e,t);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).Parallax=t()}}(function(){return function t(e,i,n){function o(r,a){if(!i[r]){if(!e[r]){var l="function"==typeof require&&require;if(!a&&l)return l(r,!0);if(s)return s(r,!0);var h=new Error("Cannot find module '"+r+"'");throw h.code="MODULE_NOT_FOUND",h}var u=i[r]={exports:{}};e[r][0].call(u.exports,function(t){var i=e[r][1][t];return o(i||t)},u,u.exports,t,e,i,n)}return i[r].exports}for(var s="function"==typeof require&&require,r=0;r<n.length;r++)o(n[r]);return o}({1:[function(t,e,i){"use strict";function n(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}var o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},i=0;i<10;i++)e["_"+String.fromCharCode(i)]=i;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(t){n[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var i,a,l=n(t),h=1;h<arguments.length;h++){i=Object(arguments[h]);for(var u in i)s.call(i,u)&&(l[u]=i[u]);if(o){a=o(i);for(var c=0;c<a.length;c++)r.call(i,a[c])&&(l[a[c]]=i[a[c]])}}return l}},{}],2:[function(t,e,i){(function(t){(function(){var i,n,o,s,r,a;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:void 0!==t&&null!==t&&t.hrtime?(e.exports=function(){return(i()-r)/1e6},n=t.hrtime,s=(i=function(){var t;return 1e9*(t=n())[0]+t[1]})(),a=1e9*t.uptime(),r=s-a):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(this,t("_process"))},{_process:3}],3:[function(t,e,i){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(t){if(c===setTimeout)return setTimeout(t,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(t,0);try{return c(t,0)}catch(e){try{return c.call(null,t,0)}catch(e){return c.call(this,t,0)}}}function r(t){if(d===clearTimeout)return clearTimeout(t);if((d===o||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(t);try{return d(t)}catch(e){try{return d.call(null,t)}catch(e){return d.call(this,t)}}}function a(){v&&p&&(v=!1,p.length?f=p.concat(f):y=-1,f.length&&l())}function l(){if(!v){var t=s(a);v=!0;for(var e=f.length;e;){for(p=f,f=[];++y<e;)p&&p[y].run();y=-1,e=f.length}p=null,v=!1,r(t)}}function h(t,e){this.fun=t,this.array=e}function u(){}var c,d,m=e.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:n}catch(t){c=n}try{d="function"==typeof clearTimeout?clearTimeout:o}catch(t){d=o}}();var p,f=[],v=!1,y=-1;m.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];f.push(new h(t,e)),1!==f.length||v||s(l)},h.prototype.run=function(){this.fun.apply(null,this.array)},m.title="browser",m.browser=!0,m.env={},m.argv=[],m.version="",m.versions={},m.on=u,m.addListener=u,m.once=u,m.off=u,m.removeListener=u,m.removeAllListeners=u,m.emit=u,m.prependListener=u,m.prependOnceListener=u,m.listeners=function(t){return[]},m.binding=function(t){throw new Error("process.binding is not supported")},m.cwd=function(){return"/"},m.chdir=function(t){throw new Error("process.chdir is not supported")},m.umask=function(){return 0}},{}],4:[function(t,e,i){(function(i){for(var n=t("performance-now"),o="undefined"==typeof window?i:window,s=["moz","webkit"],r="AnimationFrame",a=o["request"+r],l=o["cancel"+r]||o["cancelRequest"+r],h=0;!a&&h<s.length;h++)a=o[s[h]+"Request"+r],l=o[s[h]+"Cancel"+r]||o[s[h]+"CancelRequest"+r];if(!a||!l){var u=0,c=0,d=[];a=function(t){if(0===d.length){var e=n(),i=Math.max(0,1e3/60-(e-u));u=i+e,setTimeout(function(){var t=d.slice(0);d.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(u)}catch(t){setTimeout(function(){throw t},0)}},Math.round(i))}return d.push({handle:++c,callback:t,cancelled:!1}),c},l=function(t){for(var e=0;e<d.length;e++)d[e].handle===t&&(d[e].cancelled=!0)}}e.exports=function(t){return a.call(o,t)},e.exports.cancel=function(){l.apply(o,arguments)},e.exports.polyfill=function(){o.requestAnimationFrame=a,o.cancelAnimationFrame=l}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"performance-now":2}],5:[function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=t("raf"),r=t("object-assign"),a={propertyCache:{},vendors:[null,["-webkit-","webkit"],["-moz-","Moz"],["-o-","O"],["-ms-","ms"]],clamp:function(t,e,i){return e<i?t<e?e:t>i?i:t:t<i?i:t>e?e:t},data:function(t,e){return a.deserialize(t.getAttribute("data-"+e))},deserialize:function(t){return"true"===t||"false"!==t&&("null"===t?null:!isNaN(parseFloat(t))&&isFinite(t)?parseFloat(t):t)},camelCase:function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},accelerate:function(t){a.css(t,"transform","translate3d(0,0,0) rotate(0.0001deg)"),a.css(t,"transform-style","preserve-3d"),a.css(t,"backface-visibility","hidden")},transformSupport:function(t){for(var e=document.createElement("div"),i=!1,n=null,o=!1,s=null,r=null,l=0,h=a.vendors.length;l<h;l++)if(null!==a.vendors[l]?(s=a.vendors[l][0]+"transform",r=a.vendors[l][1]+"Transform"):(s="transform",r="transform"),void 0!==e.style[r]){i=!0;break}switch(t){case"2D":o=i;break;case"3D":if(i){var u=document.body||document.createElement("body"),c=document.documentElement,d=c.style.overflow,m=!1;document.body||(m=!0,c.style.overflow="hidden",c.appendChild(u),u.style.overflow="hidden",u.style.background=""),u.appendChild(e),e.style[r]="translate3d(1px,1px,1px)",o=void 0!==(n=window.getComputedStyle(e).getPropertyValue(s))&&n.length>0&&"none"!==n,c.style.overflow=d,u.removeChild(e),m&&(u.removeAttribute("style"),u.parentNode.removeChild(u))}}return o},css:function(t,e,i){var n=a.propertyCache[e];if(!n)for(var o=0,s=a.vendors.length;o<s;o++)if(n=null!==a.vendors[o]?a.camelCase(a.vendors[o][1]+"-"+e):e,void 0!==t.style[n]){a.propertyCache[e]=n;break}t.style[n]=i}},l={relativeInput:!1,clipRelativeInput:!1,inputElement:null,hoverOnly:!1,calibrationThreshold:100,calibrationDelay:500,supportDelay:500,calibrateX:!1,calibrateY:!0,invertX:!0,invertY:!0,limitX:!1,limitY:!1,scalarX:10,scalarY:10,frictionX:.1,frictionY:.1,originX:.5,originY:.5,pointerEvents:!1,precision:1,onReady:null,selector:null},h=function(){function t(e,i){n(this,t),this.element=e;var o={calibrateX:a.data(this.element,"calibrate-x"),calibrateY:a.data(this.element,"calibrate-y"),invertX:a.data(this.element,"invert-x"),invertY:a.data(this.element,"invert-y"),limitX:a.data(this.element,"limit-x"),limitY:a.data(this.element,"limit-y"),scalarX:a.data(this.element,"scalar-x"),scalarY:a.data(this.element,"scalar-y"),frictionX:a.data(this.element,"friction-x"),frictionY:a.data(this.element,"friction-y"),originX:a.data(this.element,"origin-x"),originY:a.data(this.element,"origin-y"),pointerEvents:a.data(this.element,"pointer-events"),precision:a.data(this.element,"precision"),relativeInput:a.data(this.element,"relative-input"),clipRelativeInput:a.data(this.element,"clip-relative-input"),hoverOnly:a.data(this.element,"hover-only"),inputElement:document.querySelector(a.data(this.element,"input-element")),selector:a.data(this.element,"selector")};for(var s in o)null===o[s]&&delete o[s];r(this,l,o,i),this.inputElement||(this.inputElement=this.element),this.calibrationTimer=null,this.calibrationFlag=!0,this.enabled=!1,this.depthsX=[],this.depthsY=[],this.raf=null,this.bounds=null,this.elementPositionX=0,this.elementPositionY=0,this.elementWidth=0,this.elementHeight=0,this.elementCenterX=0,this.elementCenterY=0,this.elementRangeX=0,this.elementRangeY=0,this.calibrationX=0,this.calibrationY=0,this.inputX=0,this.inputY=0,this.motionX=0,this.motionY=0,this.velocityX=0,this.velocityY=0,this.onMouseMove=this.onMouseMove.bind(this),this.onDeviceOrientation=this.onDeviceOrientation.bind(this),this.onDeviceMotion=this.onDeviceMotion.bind(this),this.onOrientationTimer=this.onOrientationTimer.bind(this),this.onMotionTimer=this.onMotionTimer.bind(this),this.onCalibrationTimer=this.onCalibrationTimer.bind(this),this.onAnimationFrame=this.onAnimationFrame.bind(this),this.onWindowResize=this.onWindowResize.bind(this),this.windowWidth=null,this.windowHeight=null,this.windowCenterX=null,this.windowCenterY=null,this.windowRadiusX=null,this.windowRadiusY=null,this.portrait=!1,this.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),this.motionSupport=!!window.DeviceMotionEvent&&!this.desktop,this.orientationSupport=!!window.DeviceOrientationEvent&&!this.desktop,this.orientationStatus=0,this.motionStatus=0,this.initialise()}return o(t,[{key:"initialise",value:function(){void 0===this.transform2DSupport&&(this.transform2DSupport=a.transformSupport("2D"),this.transform3DSupport=a.transformSupport("3D")),this.transform3DSupport&&a.accelerate(this.element),"static"===window.getComputedStyle(this.element).getPropertyValue("position")&&(this.element.style.position="relative"),this.pointerEvents||(this.element.style.pointerEvents="none"),this.updateLayers(),this.updateDimensions(),this.enable(),this.queueCalibration(this.calibrationDelay)}},{key:"doReadyCallback",value:function(){this.onReady&&this.onReady()}},{key:"updateLayers",value:function(){this.selector?this.layers=this.element.querySelectorAll(this.selector):this.layers=this.element.children,this.layers.length||console.warn("ParallaxJS: Your scene does not have any layers."),this.depthsX=[],this.depthsY=[];for(var t=0;t<this.layers.length;t++){var e=this.layers[t];this.transform3DSupport&&a.accelerate(e),e.style.position=t?"absolute":"relative",e.style.display="block",e.style.left=0,e.style.top=0;var i=a.data(e,"depth")||0;this.depthsX.push(a.data(e,"depth-x")||i),this.depthsY.push(a.data(e,"depth-y")||i)}}},{key:"updateDimensions",value:function(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,this.windowCenterX=this.windowWidth*this.originX,this.windowCenterY=this.windowHeight*this.originY,this.windowRadiusX=Math.max(this.windowCenterX,this.windowWidth-this.windowCenterX),this.windowRadiusY=Math.max(this.windowCenterY,this.windowHeight-this.windowCenterY)}},{key:"updateBounds",value:function(){this.bounds=this.inputElement.getBoundingClientRect(),this.elementPositionX=this.bounds.left,this.elementPositionY=this.bounds.top,this.elementWidth=this.bounds.width,this.elementHeight=this.bounds.height,this.elementCenterX=this.elementWidth*this.originX,this.elementCenterY=this.elementHeight*this.originY,this.elementRangeX=Math.max(this.elementCenterX,this.elementWidth-this.elementCenterX),this.elementRangeY=Math.max(this.elementCenterY,this.elementHeight-this.elementCenterY)}},{key:"queueCalibration",value:function(t){clearTimeout(this.calibrationTimer),this.calibrationTimer=setTimeout(this.onCalibrationTimer,t)}},{key:"enable",value:function(){this.enabled||(this.enabled=!0,this.orientationSupport?(this.portrait=!1,window.addEventListener("deviceorientation",this.onDeviceOrientation),this.detectionTimer=setTimeout(this.onOrientationTimer,this.supportDelay)):this.motionSupport?(this.portrait=!1,window.addEventListener("devicemotion",this.onDeviceMotion),this.detectionTimer=setTimeout(this.onMotionTimer,this.supportDelay)):(this.calibrationX=0,this.calibrationY=0,this.portrait=!1,window.addEventListener("mousemove",this.onMouseMove),this.doReadyCallback()),window.addEventListener("resize",this.onWindowResize),this.raf=s(this.onAnimationFrame))}},{key:"disable",value:function(){this.enabled&&(this.enabled=!1,this.orientationSupport?window.removeEventListener("deviceorientation",this.onDeviceOrientation):this.motionSupport?window.removeEventListener("devicemotion",this.onDeviceMotion):window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("resize",this.onWindowResize),s.cancel(this.raf))}},{key:"calibrate",value:function(t,e){this.calibrateX=void 0===t?this.calibrateX:t,this.calibrateY=void 0===e?this.calibrateY:e}},{key:"invert",value:function(t,e){this.invertX=void 0===t?this.invertX:t,this.invertY=void 0===e?this.invertY:e}},{key:"friction",value:function(t,e){this.frictionX=void 0===t?this.frictionX:t,this.frictionY=void 0===e?this.frictionY:e}},{key:"scalar",value:function(t,e){this.scalarX=void 0===t?this.scalarX:t,this.scalarY=void 0===e?this.scalarY:e}},{key:"limit",value:function(t,e){this.limitX=void 0===t?this.limitX:t,this.limitY=void 0===e?this.limitY:e}},{key:"origin",value:function(t,e){this.originX=void 0===t?this.originX:t,this.originY=void 0===e?this.originY:e}},{key:"setInputElement",value:function(t){this.inputElement=t,this.updateDimensions()}},{key:"setPosition",value:function(t,e,i){e=e.toFixed(this.precision)+"px",i=i.toFixed(this.precision)+"px",this.transform3DSupport?a.css(t,"transform","translate3d("+e+","+i+",0)"):this.transform2DSupport?a.css(t,"transform","translate("+e+","+i+")"):(t.style.left=e,t.style.top=i)}},{key:"onOrientationTimer",value:function(){this.orientationSupport&&0===this.orientationStatus?(this.disable(),this.orientationSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onMotionTimer",value:function(){this.motionSupport&&0===this.motionStatus?(this.disable(),this.motionSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onCalibrationTimer",value:function(){this.calibrationFlag=!0}},{key:"onWindowResize",value:function(){this.updateDimensions()}},{key:"onAnimationFrame",value:function(){this.updateBounds();var t=this.inputX-this.calibrationX,e=this.inputY-this.calibrationY;(Math.abs(t)>this.calibrationThreshold||Math.abs(e)>this.calibrationThreshold)&&this.queueCalibration(0),this.portrait?(this.motionX=this.calibrateX?e:this.inputY,this.motionY=this.calibrateY?t:this.inputX):(this.motionX=this.calibrateX?t:this.inputX,this.motionY=this.calibrateY?e:this.inputY),this.motionX*=this.elementWidth*(this.scalarX/100),this.motionY*=this.elementHeight*(this.scalarY/100),isNaN(parseFloat(this.limitX))||(this.motionX=a.clamp(this.motionX,-this.limitX,this.limitX)),isNaN(parseFloat(this.limitY))||(this.motionY=a.clamp(this.motionY,-this.limitY,this.limitY)),this.velocityX+=(this.motionX-this.velocityX)*this.frictionX,this.velocityY+=(this.motionY-this.velocityY)*this.frictionY;for(var i=0;i<this.layers.length;i++){var n=this.layers[i],o=this.depthsX[i],r=this.depthsY[i],l=this.velocityX*(o*(this.invertX?-1:1)),h=this.velocityY*(r*(this.invertY?-1:1));this.setPosition(n,l,h)}this.raf=s(this.onAnimationFrame)}},{key:"rotate",value:function(t,e){var i=(t||0)/30,n=(e||0)/30,o=this.windowHeight>this.windowWidth;this.portrait!==o&&(this.portrait=o,this.calibrationFlag=!0),this.calibrationFlag&&(this.calibrationFlag=!1,this.calibrationX=i,this.calibrationY=n),this.inputX=i,this.inputY=n}},{key:"onDeviceOrientation",value:function(t){var e=t.beta,i=t.gamma;null!==e&&null!==i&&(this.orientationStatus=1,this.rotate(e,i))}},{key:"onDeviceMotion",value:function(t){var e=t.rotationRate.beta,i=t.rotationRate.gamma;null!==e&&null!==i&&(this.motionStatus=1,this.rotate(e,i))}},{key:"onMouseMove",value:function(t){var e=t.clientX,i=t.clientY;if(this.hoverOnly&&(e<this.elementPositionX||e>this.elementPositionX+this.elementWidth||i<this.elementPositionY||i>this.elementPositionY+this.elementHeight))return this.inputX=0,void(this.inputY=0);this.relativeInput?(this.clipRelativeInput&&(e=Math.max(e,this.elementPositionX),e=Math.min(e,this.elementPositionX+this.elementWidth),i=Math.max(i,this.elementPositionY),i=Math.min(i,this.elementPositionY+this.elementHeight)),this.elementRangeX&&this.elementRangeY&&(this.inputX=(e-this.elementPositionX-this.elementCenterX)/this.elementRangeX,this.inputY=(i-this.elementPositionY-this.elementCenterY)/this.elementRangeY)):this.windowRadiusX&&this.windowRadiusY&&(this.inputX=(e-this.windowCenterX)/this.windowRadiusX,this.inputY=(i-this.windowCenterY)/this.windowRadiusY)}},{key:"destroy",value:function(){this.disable(),clearTimeout(this.calibrationTimer),clearTimeout(this.detectionTimer),this.element.removeAttribute("style");for(var t=0;t<this.layers.length;t++)this.layers[t].removeAttribute("style");delete this.element,delete this.layers}},{key:"version",value:function(){return"3.1.0"}}]),t}();e.exports=h},{"object-assign":1,raf:4}]},{},[5])(5)});
//# sourceMappingURL=parallax.min.js.map
this.maskReveal = (function() {
  function maskReveal(container) {
    // this.$el = container;
    this.container = container;
    this.stop = false;
    this.init(container);

  }
  maskReveal.prototype.destroy = function() {
    this.stop = true;
  }
  maskReveal.prototype.init = function(container) {

    'use strict';
    const canvas = document.createElement('canvas');
    // canvas.width = window.innerWidth*window.devicePixelRatio;
    // canvas.height = window.innerHeight*window.devicePixelRatio;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // console.log(canvas.clientWidth)
    container.append(canvas)    
    // $(canvas).addClass('smoke').css('transform', 'scale(' + 100-1/window.devicePixelRatio + ') translate(-' + 100-1/window.devicePixelRatio*100 + '%, -' + 1/window.devicePixelRatio*100 + '%)')
    let config = {
        // TEXTURE_DOWNSAMPLE: 1,
        // DENSITY_DISSIPATION: 0.985,
        // VELOCITY_DISSIPATION: 0.98,
        // PRESSURE_DISSIPATION: 0.8,
        // PRESSURE_ITERATIONS: 10,
        // CURL: 50,
        // SPLAT_RADIUS: 0.007
    TEXTURE_DOWNSAMPLE: 1,
    DENSITY_DISSIPATION: 0.985,
    VELOCITY_DISSIPATION: 0.99,
    PRESSURE_DISSIPATION: 0.9,
    PRESSURE_ITERATIONS: 10,
    CURL: 50,
    SPLAT_RADIUS: 0.007
    }

    let pointers = [];
    let splatStack = [];

    const  { gl, ext } = getWebGLContext(canvas);

    function getWebGLContext (canvas) {
        const params = { alpha: false, depth: false, stencil: false, antialias: false };

        let gl = canvas.getContext('webgl2', params);
        const isWebGL2 = !!gl;
        if (!isWebGL2)
            gl = canvas.getContext('webgl', params) || canvas.getContext('experimental-webgl', params);

        let halfFloat;
        let supportLinearFiltering;
        if (isWebGL2) {
            gl.getExtension('EXT_color_buffer_float');
            supportLinearFiltering = gl.getExtension('OES_texture_float_linear');
        } else {
            halfFloat = gl.getExtension('OES_texture_half_float');
            supportLinearFiltering = gl.getExtension('OES_texture_half_float_linear');
        }
        // gl.setScale(0.5, 0.5);
        console.log(canvas.getContext('webgl2', params))
        gl.clearColor(0.0, 0.0, 0.0, 1.0);

        const halfFloatTexType = isWebGL2 ? gl.HALF_FLOAT : halfFloat.HALF_FLOAT_OES;
        let formatRGBA;
        let formatRG;
        let formatR;

        if (isWebGL2)
        {
            formatRGBA = getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, halfFloatTexType);
            formatRG = getSupportedFormat(gl, gl.RG16F, gl.RG, halfFloatTexType);
            formatR = getSupportedFormat(gl, gl.R16F, gl.RED, halfFloatTexType);
        }
        else
        {
            formatRGBA = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
            formatRG = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
            formatR = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
        }

        return {
            gl,
            ext: {
                formatRGBA,
                formatRG,
                formatR,
                halfFloatTexType,
                supportLinearFiltering
            }
        };
    }

    function getSupportedFormat (gl, internalFormat, format, type)
    {
        if (!supportRenderTextureFormat(gl, internalFormat, format, type))
        {
            switch (internalFormat)
            {
                case gl.R16F:
                    return getSupportedFormat(gl, gl.RG16F, gl.RG, type);
                case gl.RG16F:
                    return getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, type);
                default:
                    return null;
            }
        }

        return {
            internalFormat,
            format
        }
    }

    function supportRenderTextureFormat (gl, internalFormat, format, type) {
        let texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, 4, 4, 0, format, type, null);

        let fbo = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);

        const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
        if (status != gl.FRAMEBUFFER_COMPLETE)
            return false;
        return true;
    }

    function pointerPrototype () {
        this.id = -1;
        this.x = 0;
        this.y = 0;
        this.dx = 0;
        this.dy = 0;
        this.down = false;
        this.moved = false;
        this.color = [30, 0, 300];
    }

    pointers.push(new pointerPrototype());

    class GLProgram {

        constructor (vertexShader, fragmentShader) {
            this.uniforms = {};
            this.program = gl.createProgram();

            gl.attachShader(this.program, vertexShader);
            gl.attachShader(this.program, fragmentShader);
            gl.linkProgram(this.program);

            if (!gl.getProgramParameter(this.program, gl.LINK_STATUS))
                throw gl.getProgramInfoLog(this.program);

            const uniformCount = gl.getProgramParameter(this.program, gl.ACTIVE_UNIFORMS);
            for (let i = 0; i < uniformCount; i++) {
                const uniformName = gl.getActiveUniform(this.program, i).name;
                this.uniforms[uniformName] = gl.getUniformLocation(this.program, uniformName);
            }
        }

        bind () {
            gl.useProgram(this.program);
        }
    }

    function compileShader (type, source) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
            throw gl.getShaderInfoLog(shader);

        return shader;
    };

    const baseVertexShader = compileShader(gl.VERTEX_SHADER, `
        precision highp float;
        precision mediump sampler2D;

        attribute vec2 aPosition;
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform vec2 texelSize;

        void main () {
            vUv = aPosition * 0.5 + 0.5;
            vL = vUv - vec2(texelSize.x, 0.0);
            vR = vUv + vec2(texelSize.x, 0.0);
            vT = vUv + vec2(0.0, texelSize.y);
            vB = vUv - vec2(0.0, texelSize.y);
            gl_Position = vec4(aPosition, 0.0, 1.0);
        }
    `);

    const clearShader = compileShader(gl.FRAGMENT_SHADER, `
        precision highp float;
        precision mediump sampler2D;

        varying vec2 vUv;
        uniform sampler2D uTexture;
        uniform float value;

        void main () {
            gl_FragColor = value * texture2D(uTexture, vUv);
        }
    `);

    const displayShader = compileShader(gl.FRAGMENT_SHADER, `
        precision highp float;
        precision mediump sampler2D;

        varying vec2 vUv;
        uniform sampler2D uTexture;

        void main () {
            gl_FragColor = texture2D(uTexture, vUv);
        }
    `);

    const splatShader = compileShader(gl.FRAGMENT_SHADER, `
        precision highp float;
        precision mediump sampler2D;

        varying vec2 vUv;
        uniform sampler2D uTarget;
        uniform float aspectRatio;
        uniform vec3 color;
        uniform vec2 point;
        uniform float radius;

        void main () {
            vec2 p = vUv - point.xy;
            p.x *= aspectRatio;
            vec3 splat = exp(-dot(p, p) / radius) * color;
            vec3 base = texture2D(uTarget, vUv).xyz;
            gl_FragColor = vec4(base + splat, 1.0);
        }
    `);

    const advectionManualFilteringShader = compileShader(gl.FRAGMENT_SHADER, `
        precision highp float;
        precision mediump sampler2D;

        varying vec2 vUv;
        uniform sampler2D uVelocity;
        uniform sampler2D uSource;
        uniform vec2 texelSize;
        uniform float dt;
        uniform float dissipation;

        vec4 bilerp (in sampler2D sam, in vec2 p) {
            vec4 st;
            st.xy = floor(p - 0.5) + 0.5;
            st.zw = st.xy + 1.0;
            vec4 uv = st * texelSize.xyxy;
            vec4 a = texture2D(sam, uv.xy);
            vec4 b = texture2D(sam, uv.zy);
            vec4 c = texture2D(sam, uv.xw);
            vec4 d = texture2D(sam, uv.zw);
            vec2 f = p - st.xy;
            return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
        }

        void main () {
            vec2 coord = gl_FragCoord.xy - dt * texture2D(uVelocity, vUv).xy;
            gl_FragColor = dissipation * bilerp(uSource, coord);
            gl_FragColor.a = 1.0;
        }
    `);

    const advectionShader = compileShader(gl.FRAGMENT_SHADER, `
        precision highp float;
        precision mediump sampler2D;

        varying vec2 vUv;
        uniform sampler2D uVelocity;
        uniform sampler2D uSource;
        uniform vec2 texelSize;
        uniform float dt;
        uniform float dissipation;

        void main () {
            vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
            gl_FragColor = dissipation * texture2D(uSource, coord);
            gl_FragColor.a = 1.0;
        }
    `);

    const divergenceShader = compileShader(gl.FRAGMENT_SHADER, `
        precision highp float;
        precision mediump sampler2D;

        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform sampler2D uVelocity;

        vec2 sampleVelocity (in vec2 uv) {
            vec2 multiplier = vec2(1.0, 1.0);
            if (uv.x < 0.0) { uv.x = 0.0; multiplier.x = -1.0; }
            if (uv.x > 1.0) { uv.x = 1.0; multiplier.x = -1.0; }
            if (uv.y < 0.0) { uv.y = 0.0; multiplier.y = -1.0; }
            if (uv.y > 1.0) { uv.y = 1.0; multiplier.y = -1.0; }
            return multiplier * texture2D(uVelocity, uv).xy;
        }

        void main () {
            float L = sampleVelocity(vL).x;
            float R = sampleVelocity(vR).x;
            float T = sampleVelocity(vT).y;
            float B = sampleVelocity(vB).y;
            float div = 0.5 * (R - L + T - B);
            gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
        }
    `);

    const curlShader = compileShader(gl.FRAGMENT_SHADER, `
        precision highp float;
        precision mediump sampler2D;

        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform sampler2D uVelocity;

        void main () {
            float L = texture2D(uVelocity, vL).y;
            float R = texture2D(uVelocity, vR).y;
            float T = texture2D(uVelocity, vT).x;
            float B = texture2D(uVelocity, vB).x;
            float vorticity = R - L - T + B;
            gl_FragColor = vec4(vorticity, 0.0, 0.0, 1.0);
        }
    `);

    const vorticityShader = compileShader(gl.FRAGMENT_SHADER, `
        precision highp float;
        precision mediump sampler2D;

        varying vec2 vUv;
        varying vec2 vT;
        varying vec2 vB;
        uniform sampler2D uVelocity;
        uniform sampler2D uCurl;
        uniform float curl;
        uniform float dt;

        void main () {
            float T = texture2D(uCurl, vT).x;
            float B = texture2D(uCurl, vB).x;
            float C = texture2D(uCurl, vUv).x;
            vec2 force = vec2(abs(T) - abs(B), 0.0);
            force *= 1.0 / length(force + 0.00001) * curl * C;
            vec2 vel = texture2D(uVelocity, vUv).xy;
            gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);
        }
    `);

    const pressureShader = compileShader(gl.FRAGMENT_SHADER, `
        precision highp float;
        precision mediump sampler2D;

        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform sampler2D uPressure;
        uniform sampler2D uDivergence;

        vec2 boundary (in vec2 uv) {
            uv = min(max(uv, 0.0), 1.0);
            return uv;
        }

        void main () {
            float L = texture2D(uPressure, boundary(vL)).x;
            float R = texture2D(uPressure, boundary(vR)).x;
            float T = texture2D(uPressure, boundary(vT)).x;
            float B = texture2D(uPressure, boundary(vB)).x;
            float C = texture2D(uPressure, vUv).x;
            float divergence = texture2D(uDivergence, vUv).x;
            float pressure = (L + R + B + T - divergence) * 0.25;
            gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
        }
    `);

    const gradientSubtractShader = compileShader(gl.FRAGMENT_SHADER, `
        precision highp float;
        precision mediump sampler2D;

        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform sampler2D uPressure;
        uniform sampler2D uVelocity;

        vec2 boundary (in vec2 uv) {
            uv = min(max(uv, 0.0), 1.0);
            return uv;
        }

        void main () {
            float L = texture2D(uPressure, boundary(vL)).x;
            float R = texture2D(uPressure, boundary(vR)).x;
            float T = texture2D(uPressure, boundary(vT)).x;
            float B = texture2D(uPressure, boundary(vB)).x;
            vec2 velocity = texture2D(uVelocity, vUv).xy;
            velocity.xy -= vec2(R - L, T - B);
            gl_FragColor = vec4(velocity, 0.0, 1.0);
        }
    `);

    let textureWidth;
    let textureHeight;
    let density;
    let velocity;
    let divergence;
    let curl;
    let pressure;
    initFramebuffers();

    const clearProgram = new GLProgram(baseVertexShader, clearShader);
    const displayProgram = new GLProgram(baseVertexShader, displayShader);
    const splatProgram = new GLProgram(baseVertexShader, splatShader);
    const advectionProgram = new GLProgram(baseVertexShader, ext.supportLinearFiltering ? advectionShader : advectionManualFilteringShader);
    const divergenceProgram = new GLProgram(baseVertexShader, divergenceShader);
    const curlProgram = new GLProgram(baseVertexShader, curlShader);
    const vorticityProgram = new GLProgram(baseVertexShader, vorticityShader);
    const pressureProgram = new GLProgram(baseVertexShader, pressureShader);
    const gradienSubtractProgram = new GLProgram(baseVertexShader, gradientSubtractShader);

    function initFramebuffers () {
        textureWidth = gl.drawingBufferWidth >> config.TEXTURE_DOWNSAMPLE;
        textureHeight = gl.drawingBufferHeight >> config.TEXTURE_DOWNSAMPLE;

        const texType = ext.halfFloatTexType;
        const rgba = ext.formatRGBA;
        const rg   = ext.formatRG;
        const r    = ext.formatR;

        density    = createDoubleFBO(2, textureWidth, textureHeight, rgba.internalFormat, rgba.format, texType, ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST);
        velocity   = createDoubleFBO(0, textureWidth, textureHeight, rg.internalFormat, rg.format, texType, ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST);
        divergence = createFBO      (4, textureWidth, textureHeight, r.internalFormat, r.format, texType, gl.NEAREST);
        curl       = createFBO      (5, textureWidth, textureHeight, r.internalFormat, r.format, texType, gl.NEAREST);
        pressure   = createDoubleFBO(6, textureWidth, textureHeight, r.internalFormat, r.format, texType, gl.NEAREST);
    }

    function createFBO (texId, w, h, internalFormat, format, type, param) {
        gl.activeTexture(gl.TEXTURE0 + texId);
        let texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, param);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, param);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, w, h, 0, format, type, null);

        let fbo = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
        gl.viewport(0, 0, w, h);
        gl.clear(gl.COLOR_BUFFER_BIT);

        return [texture, fbo, texId];
    }

    function createDoubleFBO (texId, w, h, internalFormat, format, type, param) {
        let fbo1 = createFBO(texId    , w, h, internalFormat, format, type, param);
        let fbo2 = createFBO(texId + 1, w, h, internalFormat, format, type, param);

        return {
            get read () {
                return fbo1;
            },
            get write () {
                return fbo2;
            },
            swap () {
                let temp = fbo1;
                fbo1 = fbo2;
                fbo2 = temp;
            }
        }
    }

    const blit = (() => {
        gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), gl.STATIC_DRAW);
        gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(0);

        return (destination) => {
            gl.bindFramebuffer(gl.FRAMEBUFFER, destination);
            gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
        }
    })();

    let lastTime = Date.now();
    // multipleSplats(parseInt(Math.random() * 20) + 5);
    let thisClass = this;
    update();

    function update () {
        resizeCanvas();
        console.log("update");
        const dt = Math.min((Date.now() - lastTime) / 1000, 0.016);
        lastTime = Date.now();

        gl.viewport(0, 0, textureWidth, textureHeight);

        // if (splatStack.length > 0)
        //     multipleSplats(splatStack.pop());

        advectionProgram.bind();
        gl.uniform2f(advectionProgram.uniforms.texelSize, 1.0 / textureWidth, 1.0 / textureHeight);
        gl.uniform1i(advectionProgram.uniforms.uVelocity, velocity.read[2]);
        gl.uniform1i(advectionProgram.uniforms.uSource, velocity.read[2]);
        gl.uniform1f(advectionProgram.uniforms.dt, dt);
        gl.uniform1f(advectionProgram.uniforms.dissipation, config.VELOCITY_DISSIPATION);
        blit(velocity.write[1]);
        velocity.swap();

        gl.uniform1i(advectionProgram.uniforms.uVelocity, velocity.read[2]);
        gl.uniform1i(advectionProgram.uniforms.uSource, density.read[2]);
        gl.uniform1f(advectionProgram.uniforms.dissipation, config.DENSITY_DISSIPATION);
        blit(density.write[1]);
        density.swap();

        for (let i = 0; i < pointers.length; i++) {
            const pointer = pointers[i];
            if (pointer.moved) {
                splat(pointer.x, pointer.y, pointer.dx, pointer.dy, pointer.color);
                pointer.moved = false;
            }
        }

        curlProgram.bind();
        gl.uniform2f(curlProgram.uniforms.texelSize, 1.0 / textureWidth, 1.0 / textureHeight);
        gl.uniform1i(curlProgram.uniforms.uVelocity, velocity.read[2]);
        blit(curl[1]);

        vorticityProgram.bind();
        gl.uniform2f(vorticityProgram.uniforms.texelSize, 1.0 / textureWidth, 1.0 / textureHeight);
        gl.uniform1i(vorticityProgram.uniforms.uVelocity, velocity.read[2]);
        gl.uniform1i(vorticityProgram.uniforms.uCurl, curl[2]);
        gl.uniform1f(vorticityProgram.uniforms.curl, config.CURL);
        gl.uniform1f(vorticityProgram.uniforms.dt, dt);
        blit(velocity.write[1]);
        velocity.swap();

        divergenceProgram.bind();
        gl.uniform2f(divergenceProgram.uniforms.texelSize, 1.0 / textureWidth, 1.0 / textureHeight);
        gl.uniform1i(divergenceProgram.uniforms.uVelocity, velocity.read[2]);
        blit(divergence[1]);

        clearProgram.bind();
        let pressureTexId = pressure.read[2];
        gl.activeTexture(gl.TEXTURE0 + pressureTexId);
        gl.bindTexture(gl.TEXTURE_2D, pressure.read[0]);
        gl.uniform1i(clearProgram.uniforms.uTexture, pressureTexId);
        gl.uniform1f(clearProgram.uniforms.value, config.PRESSURE_DISSIPATION);
        blit(pressure.write[1]);
        pressure.swap();

        pressureProgram.bind();
        gl.uniform2f(pressureProgram.uniforms.texelSize, 1.0 / textureWidth, 1.0 / textureHeight);
        gl.uniform1i(pressureProgram.uniforms.uDivergence, divergence[2]);
        pressureTexId = pressure.read[2];
        gl.uniform1i(pressureProgram.uniforms.uPressure, pressureTexId);
        gl.activeTexture(gl.TEXTURE0 + pressureTexId);
        for (let i = 0; i < config.PRESSURE_ITERATIONS; i++) {
            gl.bindTexture(gl.TEXTURE_2D, pressure.read[0]);
            blit(pressure.write[1]);
            pressure.swap();
        }

        gradienSubtractProgram.bind();
        gl.uniform2f(gradienSubtractProgram.uniforms.texelSize, 1.0 / textureWidth, 1.0 / textureHeight);
        gl.uniform1i(gradienSubtractProgram.uniforms.uPressure, pressure.read[2]);
        gl.uniform1i(gradienSubtractProgram.uniforms.uVelocity, velocity.read[2]);
        blit(velocity.write[1]);
        velocity.swap();

        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
        displayProgram.bind();
        gl.uniform1i(displayProgram.uniforms.uTexture, density.read[2]);
        blit(null);

        if (!thisClass.stop) {
            requestAnimationFrame(update);    
        }
        else {
            thisClass.container.find('canvas').remove();
        }
        
    }

    function splat (x, y, dx, dy, color) {
        splatProgram.bind();
        gl.uniform1i(splatProgram.uniforms.uTarget, velocity.read[2]);
        gl.uniform1f(splatProgram.uniforms.aspectRatio, canvas.width / canvas.height);
        gl.uniform2f(splatProgram.uniforms.point, x / canvas.width, 1.0 - y / canvas.height);
        gl.uniform3f(splatProgram.uniforms.color, dx, -dy, 1.0);
        gl.uniform1f(splatProgram.uniforms.radius, config.SPLAT_RADIUS);
        blit(velocity.write[1]);
        velocity.swap();

        gl.uniform1i(splatProgram.uniforms.uTarget, density.read[2]);
        gl.uniform3f(splatProgram.uniforms.color, color[0] * 0.3, color[1] * 0.3, color[2] * 0.3);
        blit(density.write[1]);
        density.swap();
    }

    function multipleSplats (amount) {
        for (let i = 0; i < amount; i++) {
            const color = [Math.random() * 10, Math.random() * 10, Math.random() * 10];
            const x = canvas.width * Math.random();
            const y = canvas.height * Math.random();
            const dx = 1000 * (Math.random() - 0.5);
            const dy = 1000 * (Math.random() - 0.5);
            splat(x, y, dx, dy, color);
        }
    }

    function resizeCanvas () {
        // if (canvas.width != window.innerWidth*window.devicePixelRatio || canvas.height != window.innerHeight*window.devicePixelRatio) {
        //     canvas.width = window.innerWidth*window.devicePixelRatio;
        //     canvas.height = window.innerHeight*window.devicePixelRatio;
        //     initFramebuffers();
        // }

        if (canvas.width != window.innerWidth || canvas.height != window.innerHeight) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initFramebuffers();
        }
    }
    container.parent()[0].addEventListener('mousemove', (e) => {
        if (!$(e.target).is('a') && $(e.target).closest('.text-corner').length == 0  && $(e.target).closest('.text-center').length == 0) {
            pointers[0].down = true;
            pointers[0].color = [1 + 0.2, 1 + 0.2, 1 + 0.2];

            pointers[0].moved = pointers[0].down;
            pointers[0].dx = (e.offsetX - pointers[0].x) * 10.0;
            pointers[0].dy = (e.offsetY - pointers[0].y) * 10.0;
            pointers[0].x = e.offsetX;
            pointers[0].y = e.offsetY;

        }
    });

    container[0].addEventListener('touchmove', (e) => {
        e.preventDefault();
        const touches = e.targetTouches;
        for (let i = 0; i < touches.length; i++) {
            let pointer = pointers[i];
            pointer.moved = pointer.down;
            pointer.dx = (touches[i].pageX - pointer.x) * 10.0;
            pointer.dy = (touches[i].pageY - pointer.y) * 10.0;
            pointer.x = touches[i].pageX;
            pointer.y = touches[i].pageY;
        }
    }, false);
    // console.log(canvas)
    // container.parent()[0].addEventListener('mousemove', () => {
    //     console.log('ss')
    //     pointers[0].down = true;
    //     pointers[0].color = [1 + 0.2, 1 + 0.2, 1 + 0.2];
    // });

    container[0].addEventListener('touchstart', (e) => {
        e.preventDefault();
        const touches = e.targetTouches;
        for (let i = 0; i < touches.length; i++) {
            if (i >= pointers.length)
                pointers.push(new pointerPrototype());

            pointers[i].id = touches[i].identifier;
            pointers[i].down = true;
            pointers[i].x = touches[i].pageX;
            pointers[i].y = touches[i].pageY;
            pointers[i].color = [1 + 0.2, 1 + 0.2, 1 + 0.2];
        }
    });

    window.addEventListener('mouseup', () => {
        pointers[0].down = false;
    });

    window.addEventListener('touchend', (e) => {
        const touches = e.changedTouches;
        for (let i = 0; i < touches.length; i++)
            for (let j = 0; j < pointers.length; j++)
                if (touches[i].identifier == pointers[j].id)
                    pointers[j].down = false;
    });
  };

  return maskReveal;

})();
/**
 * Swiper 5.3.6
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://swiperjs.com
 *
 * Copyright 2014-2020 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: February 29, 2020
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).Swiper=t()}(this,(function(){"use strict";var e="undefined"==typeof document?{body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},location:{hash:""}}:document,t="undefined"==typeof window?{document:e,navigator:{userAgent:""},location:{},history:{},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){}}:window,i=function(e){for(var t=0;t<e.length;t+=1)this[t]=e[t];return this.length=e.length,this};function s(s,a){var r=[],n=0;if(s&&!a&&s instanceof i)return s;if(s)if("string"==typeof s){var o,l,d=s.trim();if(d.indexOf("<")>=0&&d.indexOf(">")>=0){var h="div";for(0===d.indexOf("<li")&&(h="ul"),0===d.indexOf("<tr")&&(h="tbody"),0!==d.indexOf("<td")&&0!==d.indexOf("<th")||(h="tr"),0===d.indexOf("<tbody")&&(h="table"),0===d.indexOf("<option")&&(h="select"),(l=e.createElement(h)).innerHTML=d,n=0;n<l.childNodes.length;n+=1)r.push(l.childNodes[n])}else for(o=a||"#"!==s[0]||s.match(/[ .<>:~]/)?(a||e).querySelectorAll(s.trim()):[e.getElementById(s.trim().split("#")[1])],n=0;n<o.length;n+=1)o[n]&&r.push(o[n])}else if(s.nodeType||s===t||s===e)r.push(s);else if(s.length>0&&s[0].nodeType)for(n=0;n<s.length;n+=1)r.push(s[n]);return new i(r)}function a(e){for(var t=[],i=0;i<e.length;i+=1)-1===t.indexOf(e[i])&&t.push(e[i]);return t}s.fn=i.prototype,s.Class=i,s.Dom7=i;var r={addClass:function(e){if(void 0===e)return this;for(var t=e.split(" "),i=0;i<t.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==this[s]&&void 0!==this[s].classList&&this[s].classList.add(t[i]);return this},removeClass:function(e){for(var t=e.split(" "),i=0;i<t.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==this[s]&&void 0!==this[s].classList&&this[s].classList.remove(t[i]);return this},hasClass:function(e){return!!this[0]&&this[0].classList.contains(e)},toggleClass:function(e){for(var t=e.split(" "),i=0;i<t.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==this[s]&&void 0!==this[s].classList&&this[s].classList.toggle(t[i]);return this},attr:function(e,t){var i=arguments;if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var s=0;s<this.length;s+=1)if(2===i.length)this[s].setAttribute(e,t);else for(var a in e)this[s][a]=e[a],this[s].setAttribute(a,e[a]);return this},removeAttr:function(e){for(var t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},data:function(e,t){var i;if(void 0!==t){for(var s=0;s<this.length;s+=1)(i=this[s]).dom7ElementDataStorage||(i.dom7ElementDataStorage={}),i.dom7ElementDataStorage[e]=t;return this}if(i=this[0]){if(i.dom7ElementDataStorage&&e in i.dom7ElementDataStorage)return i.dom7ElementDataStorage[e];var a=i.getAttribute("data-"+e);return a||void 0}},transform:function(e){for(var t=0;t<this.length;t+=1){var i=this[t].style;i.webkitTransform=e,i.transform=e}return this},transition:function(e){"string"!=typeof e&&(e+="ms");for(var t=0;t<this.length;t+=1){var i=this[t].style;i.webkitTransitionDuration=e,i.transitionDuration=e}return this},on:function(){for(var e,t=[],i=arguments.length;i--;)t[i]=arguments[i];var a=t[0],r=t[1],n=t[2],o=t[3];function l(e){var t=e.target;if(t){var i=e.target.dom7EventData||[];if(i.indexOf(e)<0&&i.unshift(e),s(t).is(r))n.apply(t,i);else for(var a=s(t).parents(),o=0;o<a.length;o+=1)s(a[o]).is(r)&&n.apply(a[o],i)}}function d(e){var t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),n.apply(this,t)}"function"==typeof t[1]&&(a=(e=t)[0],n=e[1],o=e[2],r=void 0),o||(o=!1);for(var h,p=a.split(" "),c=0;c<this.length;c+=1){var u=this[c];if(r)for(h=0;h<p.length;h+=1){var v=p[h];u.dom7LiveListeners||(u.dom7LiveListeners={}),u.dom7LiveListeners[v]||(u.dom7LiveListeners[v]=[]),u.dom7LiveListeners[v].push({listener:n,proxyListener:l}),u.addEventListener(v,l,o)}else for(h=0;h<p.length;h+=1){var f=p[h];u.dom7Listeners||(u.dom7Listeners={}),u.dom7Listeners[f]||(u.dom7Listeners[f]=[]),u.dom7Listeners[f].push({listener:n,proxyListener:d}),u.addEventListener(f,d,o)}}return this},off:function(){for(var e,t=[],i=arguments.length;i--;)t[i]=arguments[i];var s=t[0],a=t[1],r=t[2],n=t[3];"function"==typeof t[1]&&(s=(e=t)[0],r=e[1],n=e[2],a=void 0),n||(n=!1);for(var o=s.split(" "),l=0;l<o.length;l+=1)for(var d=o[l],h=0;h<this.length;h+=1){var p=this[h],c=void 0;if(!a&&p.dom7Listeners?c=p.dom7Listeners[d]:a&&p.dom7LiveListeners&&(c=p.dom7LiveListeners[d]),c&&c.length)for(var u=c.length-1;u>=0;u-=1){var v=c[u];r&&v.listener===r?(p.removeEventListener(d,v.proxyListener,n),c.splice(u,1)):r&&v.listener&&v.listener.dom7proxy&&v.listener.dom7proxy===r?(p.removeEventListener(d,v.proxyListener,n),c.splice(u,1)):r||(p.removeEventListener(d,v.proxyListener,n),c.splice(u,1))}}return this},trigger:function(){for(var i=[],s=arguments.length;s--;)i[s]=arguments[s];for(var a=i[0].split(" "),r=i[1],n=0;n<a.length;n+=1)for(var o=a[n],l=0;l<this.length;l+=1){var d=this[l],h=void 0;try{h=new t.CustomEvent(o,{detail:r,bubbles:!0,cancelable:!0})}catch(t){(h=e.createEvent("Event")).initEvent(o,!0,!0),h.detail=r}d.dom7EventData=i.filter((function(e,t){return t>0})),d.dispatchEvent(h),d.dom7EventData=[],delete d.dom7EventData}return this},transitionEnd:function(e){var t,i=["webkitTransitionEnd","transitionend"],s=this;function a(r){if(r.target===this)for(e.call(this,r),t=0;t<i.length;t+=1)s.off(i[t],a)}if(e)for(t=0;t<i.length;t+=1)s.on(i[t],a);return this},outerWidth:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},offset:function(){if(this.length>0){var i=this[0],s=i.getBoundingClientRect(),a=e.body,r=i.clientTop||a.clientTop||0,n=i.clientLeft||a.clientLeft||0,o=i===t?t.scrollY:i.scrollTop,l=i===t?t.scrollX:i.scrollLeft;return{top:s.top+o-r,left:s.left+l-n}}return null},css:function(e,i){var s;if(1===arguments.length){if("string"!=typeof e){for(s=0;s<this.length;s+=1)for(var a in e)this[s].style[a]=e[a];return this}if(this[0])return t.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(s=0;s<this.length;s+=1)this[s].style[e]=i;return this}return this},each:function(e){if(!e)return this;for(var t=0;t<this.length;t+=1)if(!1===e.call(this[t],t,this[t]))return this;return this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:void 0;for(var t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(var t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(a){var r,n,o=this[0];if(!o||void 0===a)return!1;if("string"==typeof a){if(o.matches)return o.matches(a);if(o.webkitMatchesSelector)return o.webkitMatchesSelector(a);if(o.msMatchesSelector)return o.msMatchesSelector(a);for(r=s(a),n=0;n<r.length;n+=1)if(r[n]===o)return!0;return!1}if(a===e)return o===e;if(a===t)return o===t;if(a.nodeType||a instanceof i){for(r=a.nodeType?[a]:a,n=0;n<r.length;n+=1)if(r[n]===o)return!0;return!1}return!1},index:function(){var e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;var t,s=this.length;return new i(e>s-1?[]:e<0?(t=s+e)<0?[]:[this[t]]:[this[e]])},append:function(){for(var t,s=[],a=arguments.length;a--;)s[a]=arguments[a];for(var r=0;r<s.length;r+=1){t=s[r];for(var n=0;n<this.length;n+=1)if("string"==typeof t){var o=e.createElement("div");for(o.innerHTML=t;o.firstChild;)this[n].appendChild(o.firstChild)}else if(t instanceof i)for(var l=0;l<t.length;l+=1)this[n].appendChild(t[l]);else this[n].appendChild(t)}return this},prepend:function(t){var s,a;for(s=0;s<this.length;s+=1)if("string"==typeof t){var r=e.createElement("div");for(r.innerHTML=t,a=r.childNodes.length-1;a>=0;a-=1)this[s].insertBefore(r.childNodes[a],this[s].childNodes[0])}else if(t instanceof i)for(a=0;a<t.length;a+=1)this[s].insertBefore(t[a],this[s].childNodes[0]);else this[s].insertBefore(t,this[s].childNodes[0]);return this},next:function(e){return this.length>0?e?this[0].nextElementSibling&&s(this[0].nextElementSibling).is(e)?new i([this[0].nextElementSibling]):new i([]):this[0].nextElementSibling?new i([this[0].nextElementSibling]):new i([]):new i([])},nextAll:function(e){var t=[],a=this[0];if(!a)return new i([]);for(;a.nextElementSibling;){var r=a.nextElementSibling;e?s(r).is(e)&&t.push(r):t.push(r),a=r}return new i(t)},prev:function(e){if(this.length>0){var t=this[0];return e?t.previousElementSibling&&s(t.previousElementSibling).is(e)?new i([t.previousElementSibling]):new i([]):t.previousElementSibling?new i([t.previousElementSibling]):new i([])}return new i([])},prevAll:function(e){var t=[],a=this[0];if(!a)return new i([]);for(;a.previousElementSibling;){var r=a.previousElementSibling;e?s(r).is(e)&&t.push(r):t.push(r),a=r}return new i(t)},parent:function(e){for(var t=[],i=0;i<this.length;i+=1)null!==this[i].parentNode&&(e?s(this[i].parentNode).is(e)&&t.push(this[i].parentNode):t.push(this[i].parentNode));return s(a(t))},parents:function(e){for(var t=[],i=0;i<this.length;i+=1)for(var r=this[i].parentNode;r;)e?s(r).is(e)&&t.push(r):t.push(r),r=r.parentNode;return s(a(t))},closest:function(e){var t=this;return void 0===e?new i([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){for(var t=[],s=0;s<this.length;s+=1)for(var a=this[s].querySelectorAll(e),r=0;r<a.length;r+=1)t.push(a[r]);return new i(t)},children:function(e){for(var t=[],r=0;r<this.length;r+=1)for(var n=this[r].childNodes,o=0;o<n.length;o+=1)e?1===n[o].nodeType&&s(n[o]).is(e)&&t.push(n[o]):1===n[o].nodeType&&t.push(n[o]);return new i(a(t))},filter:function(e){for(var t=[],s=0;s<this.length;s+=1)e.call(this[s],s,this[s])&&t.push(this[s]);return new i(t)},remove:function(){for(var e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var i,a;for(i=0;i<e.length;i+=1){var r=s(e[i]);for(a=0;a<r.length;a+=1)this[this.length]=r[a],this.length+=1}return this},styles:function(){return this[0]?t.getComputedStyle(this[0],null):{}}};Object.keys(r).forEach((function(e){s.fn[e]=s.fn[e]||r[e]}));var n={deleteProps:function(e){var t=e;Object.keys(t).forEach((function(e){try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))},nextTick:function(e,t){return void 0===t&&(t=0),setTimeout(e,t)},now:function(){return Date.now()},getTranslate:function(e,i){var s,a,r;void 0===i&&(i="x");var n=t.getComputedStyle(e,null);return t.WebKitCSSMatrix?((a=n.transform||n.webkitTransform).split(",").length>6&&(a=a.split(", ").map((function(e){return e.replace(",",".")})).join(", ")),r=new t.WebKitCSSMatrix("none"===a?"":a)):s=(r=n.MozTransform||n.OTransform||n.MsTransform||n.msTransform||n.transform||n.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,")).toString().split(","),"x"===i&&(a=t.WebKitCSSMatrix?r.m41:16===s.length?parseFloat(s[12]):parseFloat(s[4])),"y"===i&&(a=t.WebKitCSSMatrix?r.m42:16===s.length?parseFloat(s[13]):parseFloat(s[5])),a||0},parseUrlQuery:function(e){var i,s,a,r,n={},o=e||t.location.href;if("string"==typeof o&&o.length)for(r=(s=(o=o.indexOf("?")>-1?o.replace(/\S*\?/,""):"").split("&").filter((function(e){return""!==e}))).length,i=0;i<r;i+=1)a=s[i].replace(/#\S+/g,"").split("="),n[decodeURIComponent(a[0])]=void 0===a[1]?void 0:decodeURIComponent(a[1])||"";return n},isObject:function(e){return"object"==typeof e&&null!==e&&e.constructor&&e.constructor===Object},extend:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var i=Object(e[0]),s=1;s<e.length;s+=1){var a=e[s];if(null!=a)for(var r=Object.keys(Object(a)),o=0,l=r.length;o<l;o+=1){var d=r[o],h=Object.getOwnPropertyDescriptor(a,d);void 0!==h&&h.enumerable&&(n.isObject(i[d])&&n.isObject(a[d])?n.extend(i[d],a[d]):!n.isObject(i[d])&&n.isObject(a[d])?(i[d]={},n.extend(i[d],a[d])):i[d]=a[d])}}return i}},o={touch:t.Modernizr&&!0===t.Modernizr.touch||!!(t.navigator.maxTouchPoints>0||"ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch),pointerEvents:!!t.PointerEvent&&"maxTouchPoints"in t.navigator&&t.navigator.maxTouchPoints>0,observer:"MutationObserver"in t||"WebkitMutationObserver"in t,passiveListener:function(){var e=!1;try{var i=Object.defineProperty({},"passive",{get:function(){e=!0}});t.addEventListener("testPassiveListener",null,i)}catch(e){}return e}(),gestures:"ongesturestart"in t},l=function(e){void 0===e&&(e={});var t=this;t.params=e,t.eventsListeners={},t.params&&t.params.on&&Object.keys(t.params.on).forEach((function(e){t.on(e,t.params.on[e])}))},d={components:{configurable:!0}};l.prototype.on=function(e,t,i){var s=this;if("function"!=typeof t)return s;var a=i?"unshift":"push";return e.split(" ").forEach((function(e){s.eventsListeners[e]||(s.eventsListeners[e]=[]),s.eventsListeners[e][a](t)})),s},l.prototype.once=function(e,t,i){var s=this;if("function"!=typeof t)return s;function a(){for(var i=[],r=arguments.length;r--;)i[r]=arguments[r];s.off(e,a),a.f7proxy&&delete a.f7proxy,t.apply(s,i)}return a.f7proxy=t,s.on(e,a,i)},l.prototype.off=function(e,t){var i=this;return i.eventsListeners?(e.split(" ").forEach((function(e){void 0===t?i.eventsListeners[e]=[]:i.eventsListeners[e]&&i.eventsListeners[e].length&&i.eventsListeners[e].forEach((function(s,a){(s===t||s.f7proxy&&s.f7proxy===t)&&i.eventsListeners[e].splice(a,1)}))})),i):i},l.prototype.emit=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var i,s,a,r=this;if(!r.eventsListeners)return r;"string"==typeof e[0]||Array.isArray(e[0])?(i=e[0],s=e.slice(1,e.length),a=r):(i=e[0].events,s=e[0].data,a=e[0].context||r);var n=Array.isArray(i)?i:i.split(" ");return n.forEach((function(e){if(r.eventsListeners&&r.eventsListeners[e]){var t=[];r.eventsListeners[e].forEach((function(e){t.push(e)})),t.forEach((function(e){e.apply(a,s)}))}})),r},l.prototype.useModulesParams=function(e){var t=this;t.modules&&Object.keys(t.modules).forEach((function(i){var s=t.modules[i];s.params&&n.extend(e,s.params)}))},l.prototype.useModules=function(e){void 0===e&&(e={});var t=this;t.modules&&Object.keys(t.modules).forEach((function(i){var s=t.modules[i],a=e[i]||{};s.instance&&Object.keys(s.instance).forEach((function(e){var i=s.instance[e];t[e]="function"==typeof i?i.bind(t):i})),s.on&&t.on&&Object.keys(s.on).forEach((function(e){t.on(e,s.on[e])})),s.create&&s.create.bind(t)(a)}))},d.components.set=function(e){this.use&&this.use(e)},l.installModule=function(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];var s=this;s.prototype.modules||(s.prototype.modules={});var a=e.name||Object.keys(s.prototype.modules).length+"_"+n.now();return s.prototype.modules[a]=e,e.proto&&Object.keys(e.proto).forEach((function(t){s.prototype[t]=e.proto[t]})),e.static&&Object.keys(e.static).forEach((function(t){s[t]=e.static[t]})),e.install&&e.install.apply(s,t),s},l.use=function(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];var s=this;return Array.isArray(e)?(e.forEach((function(e){return s.installModule(e)})),s):s.installModule.apply(s,[e].concat(t))},Object.defineProperties(l,d);var h={updateSize:function(){var e,t,i=this.$el;e=void 0!==this.params.width?this.params.width:i[0].clientWidth,t=void 0!==this.params.height?this.params.height:i[0].clientHeight,0===e&&this.isHorizontal()||0===t&&this.isVertical()||(e=e-parseInt(i.css("padding-left"),10)-parseInt(i.css("padding-right"),10),t=t-parseInt(i.css("padding-top"),10)-parseInt(i.css("padding-bottom"),10),n.extend(this,{width:e,height:t,size:this.isHorizontal()?e:t}))},updateSlides:function(){var e=this.params,i=this.$wrapperEl,s=this.size,a=this.rtlTranslate,r=this.wrongRTL,o=this.virtual&&e.virtual.enabled,l=o?this.virtual.slides.length:this.slides.length,d=i.children("."+this.params.slideClass),h=o?this.virtual.slides.length:d.length,p=[],c=[],u=[];function v(t){return!e.cssMode||t!==d.length-1}var f=e.slidesOffsetBefore;"function"==typeof f&&(f=e.slidesOffsetBefore.call(this));var m=e.slidesOffsetAfter;"function"==typeof m&&(m=e.slidesOffsetAfter.call(this));var g=this.snapGrid.length,b=this.snapGrid.length,w=e.spaceBetween,y=-f,x=0,T=0;if(void 0!==s){var E,S;"string"==typeof w&&w.indexOf("%")>=0&&(w=parseFloat(w.replace("%",""))/100*s),this.virtualSize=-w,a?d.css({marginLeft:"",marginTop:""}):d.css({marginRight:"",marginBottom:""}),e.slidesPerColumn>1&&(E=Math.floor(h/e.slidesPerColumn)===h/this.params.slidesPerColumn?h:Math.ceil(h/e.slidesPerColumn)*e.slidesPerColumn,"auto"!==e.slidesPerView&&"row"===e.slidesPerColumnFill&&(E=Math.max(E,e.slidesPerView*e.slidesPerColumn)));for(var C,M=e.slidesPerColumn,P=E/M,z=Math.floor(h/e.slidesPerColumn),k=0;k<h;k+=1){S=0;var $=d.eq(k);if(e.slidesPerColumn>1){var L=void 0,I=void 0,D=void 0;if("row"===e.slidesPerColumnFill&&e.slidesPerGroup>1){var O=Math.floor(k/(e.slidesPerGroup*e.slidesPerColumn)),A=k-e.slidesPerColumn*e.slidesPerGroup*O,G=0===O?e.slidesPerGroup:Math.min(Math.ceil((h-O*M*e.slidesPerGroup)/M),e.slidesPerGroup);L=(I=A-(D=Math.floor(A/G))*G+O*e.slidesPerGroup)+D*E/M,$.css({"-webkit-box-ordinal-group":L,"-moz-box-ordinal-group":L,"-ms-flex-order":L,"-webkit-order":L,order:L})}else"column"===e.slidesPerColumnFill?(D=k-(I=Math.floor(k/M))*M,(I>z||I===z&&D===M-1)&&(D+=1)>=M&&(D=0,I+=1)):I=k-(D=Math.floor(k/P))*P;$.css("margin-"+(this.isHorizontal()?"top":"left"),0!==D&&e.spaceBetween&&e.spaceBetween+"px")}if("none"!==$.css("display")){if("auto"===e.slidesPerView){var H=t.getComputedStyle($[0],null),B=$[0].style.transform,N=$[0].style.webkitTransform;if(B&&($[0].style.transform="none"),N&&($[0].style.webkitTransform="none"),e.roundLengths)S=this.isHorizontal()?$.outerWidth(!0):$.outerHeight(!0);else if(this.isHorizontal()){var X=parseFloat(H.getPropertyValue("width")),V=parseFloat(H.getPropertyValue("padding-left")),Y=parseFloat(H.getPropertyValue("padding-right")),F=parseFloat(H.getPropertyValue("margin-left")),W=parseFloat(H.getPropertyValue("margin-right")),R=H.getPropertyValue("box-sizing");S=R&&"border-box"===R?X+F+W:X+V+Y+F+W}else{var q=parseFloat(H.getPropertyValue("height")),j=parseFloat(H.getPropertyValue("padding-top")),K=parseFloat(H.getPropertyValue("padding-bottom")),U=parseFloat(H.getPropertyValue("margin-top")),_=parseFloat(H.getPropertyValue("margin-bottom")),Z=H.getPropertyValue("box-sizing");S=Z&&"border-box"===Z?q+U+_:q+j+K+U+_}B&&($[0].style.transform=B),N&&($[0].style.webkitTransform=N),e.roundLengths&&(S=Math.floor(S))}else S=(s-(e.slidesPerView-1)*w)/e.slidesPerView,e.roundLengths&&(S=Math.floor(S)),d[k]&&(this.isHorizontal()?d[k].style.width=S+"px":d[k].style.height=S+"px");d[k]&&(d[k].swiperSlideSize=S),u.push(S),e.centeredSlides?(y=y+S/2+x/2+w,0===x&&0!==k&&(y=y-s/2-w),0===k&&(y=y-s/2-w),Math.abs(y)<.001&&(y=0),e.roundLengths&&(y=Math.floor(y)),T%e.slidesPerGroup==0&&p.push(y),c.push(y)):(e.roundLengths&&(y=Math.floor(y)),(T-Math.min(this.params.slidesPerGroupSkip,T))%this.params.slidesPerGroup==0&&p.push(y),c.push(y),y=y+S+w),this.virtualSize+=S+w,x=S,T+=1}}if(this.virtualSize=Math.max(this.virtualSize,s)+m,a&&r&&("slide"===e.effect||"coverflow"===e.effect)&&i.css({width:this.virtualSize+e.spaceBetween+"px"}),e.setWrapperSize&&(this.isHorizontal()?i.css({width:this.virtualSize+e.spaceBetween+"px"}):i.css({height:this.virtualSize+e.spaceBetween+"px"})),e.slidesPerColumn>1&&(this.virtualSize=(S+e.spaceBetween)*E,this.virtualSize=Math.ceil(this.virtualSize/e.slidesPerColumn)-e.spaceBetween,this.isHorizontal()?i.css({width:this.virtualSize+e.spaceBetween+"px"}):i.css({height:this.virtualSize+e.spaceBetween+"px"}),e.centeredSlides)){C=[];for(var Q=0;Q<p.length;Q+=1){var J=p[Q];e.roundLengths&&(J=Math.floor(J)),p[Q]<this.virtualSize+p[0]&&C.push(J)}p=C}if(!e.centeredSlides){C=[];for(var ee=0;ee<p.length;ee+=1){var te=p[ee];e.roundLengths&&(te=Math.floor(te)),p[ee]<=this.virtualSize-s&&C.push(te)}p=C,Math.floor(this.virtualSize-s)-Math.floor(p[p.length-1])>1&&p.push(this.virtualSize-s)}if(0===p.length&&(p=[0]),0!==e.spaceBetween&&(this.isHorizontal()?a?d.filter(v).css({marginLeft:w+"px"}):d.filter(v).css({marginRight:w+"px"}):d.filter(v).css({marginBottom:w+"px"})),e.centeredSlides&&e.centeredSlidesBounds){var ie=0;u.forEach((function(t){ie+=t+(e.spaceBetween?e.spaceBetween:0)}));var se=(ie-=e.spaceBetween)-s;p=p.map((function(e){return e<0?-f:e>se?se+m:e}))}if(e.centerInsufficientSlides){var ae=0;if(u.forEach((function(t){ae+=t+(e.spaceBetween?e.spaceBetween:0)})),(ae-=e.spaceBetween)<s){var re=(s-ae)/2;p.forEach((function(e,t){p[t]=e-re})),c.forEach((function(e,t){c[t]=e+re}))}}n.extend(this,{slides:d,snapGrid:p,slidesGrid:c,slidesSizesGrid:u}),h!==l&&this.emit("slidesLengthChange"),p.length!==g&&(this.params.watchOverflow&&this.checkOverflow(),this.emit("snapGridLengthChange")),c.length!==b&&this.emit("slidesGridLengthChange"),(e.watchSlidesProgress||e.watchSlidesVisibility)&&this.updateSlidesOffset()}},updateAutoHeight:function(e){var t,i=[],s=0;if("number"==typeof e?this.setTransition(e):!0===e&&this.setTransition(this.params.speed),"auto"!==this.params.slidesPerView&&this.params.slidesPerView>1)if(this.params.centeredSlides)i.push.apply(i,this.visibleSlides);else for(t=0;t<Math.ceil(this.params.slidesPerView);t+=1){var a=this.activeIndex+t;if(a>this.slides.length)break;i.push(this.slides.eq(a)[0])}else i.push(this.slides.eq(this.activeIndex)[0]);for(t=0;t<i.length;t+=1)if(void 0!==i[t]){var r=i[t].offsetHeight;s=r>s?r:s}s&&this.$wrapperEl.css("height",s+"px")},updateSlidesOffset:function(){for(var e=this.slides,t=0;t<e.length;t+=1)e[t].swiperSlideOffset=this.isHorizontal()?e[t].offsetLeft:e[t].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this.params,i=this.slides,a=this.rtlTranslate;if(0!==i.length){void 0===i[0].swiperSlideOffset&&this.updateSlidesOffset();var r=-e;a&&(r=e),i.removeClass(t.slideVisibleClass),this.visibleSlidesIndexes=[],this.visibleSlides=[];for(var n=0;n<i.length;n+=1){var o=i[n],l=(r+(t.centeredSlides?this.minTranslate():0)-o.swiperSlideOffset)/(o.swiperSlideSize+t.spaceBetween);if(t.watchSlidesVisibility||t.centeredSlides&&t.autoHeight){var d=-(r-o.swiperSlideOffset),h=d+this.slidesSizesGrid[n];(d>=0&&d<this.size-1||h>1&&h<=this.size||d<=0&&h>=this.size)&&(this.visibleSlides.push(o),this.visibleSlidesIndexes.push(n),i.eq(n).addClass(t.slideVisibleClass))}o.progress=a?-l:l}this.visibleSlides=s(this.visibleSlides)}},updateProgress:function(e){if(void 0===e){var t=this.rtlTranslate?-1:1;e=this&&this.translate&&this.translate*t||0}var i=this.params,s=this.maxTranslate()-this.minTranslate(),a=this.progress,r=this.isBeginning,o=this.isEnd,l=r,d=o;0===s?(a=0,r=!0,o=!0):(r=(a=(e-this.minTranslate())/s)<=0,o=a>=1),n.extend(this,{progress:a,isBeginning:r,isEnd:o}),(i.watchSlidesProgress||i.watchSlidesVisibility||i.centeredSlides&&i.autoHeight)&&this.updateSlidesProgress(e),r&&!l&&this.emit("reachBeginning toEdge"),o&&!d&&this.emit("reachEnd toEdge"),(l&&!r||d&&!o)&&this.emit("fromEdge"),this.emit("progress",a)},updateSlidesClasses:function(){var e,t=this.slides,i=this.params,s=this.$wrapperEl,a=this.activeIndex,r=this.realIndex,n=this.virtual&&i.virtual.enabled;t.removeClass(i.slideActiveClass+" "+i.slideNextClass+" "+i.slidePrevClass+" "+i.slideDuplicateActiveClass+" "+i.slideDuplicateNextClass+" "+i.slideDuplicatePrevClass),(e=n?this.$wrapperEl.find("."+i.slideClass+'[data-swiper-slide-index="'+a+'"]'):t.eq(a)).addClass(i.slideActiveClass),i.loop&&(e.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+r+'"]').addClass(i.slideDuplicateActiveClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+r+'"]').addClass(i.slideDuplicateActiveClass));var o=e.nextAll("."+i.slideClass).eq(0).addClass(i.slideNextClass);i.loop&&0===o.length&&(o=t.eq(0)).addClass(i.slideNextClass);var l=e.prevAll("."+i.slideClass).eq(0).addClass(i.slidePrevClass);i.loop&&0===l.length&&(l=t.eq(-1)).addClass(i.slidePrevClass),i.loop&&(o.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+o.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+o.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass),l.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass))},updateActiveIndex:function(e){var t,i=this.rtlTranslate?this.translate:-this.translate,s=this.slidesGrid,a=this.snapGrid,r=this.params,o=this.activeIndex,l=this.realIndex,d=this.snapIndex,h=e;if(void 0===h){for(var p=0;p<s.length;p+=1)void 0!==s[p+1]?i>=s[p]&&i<s[p+1]-(s[p+1]-s[p])/2?h=p:i>=s[p]&&i<s[p+1]&&(h=p+1):i>=s[p]&&(h=p);r.normalizeSlideIndex&&(h<0||void 0===h)&&(h=0)}if(a.indexOf(i)>=0)t=a.indexOf(i);else{var c=Math.min(r.slidesPerGroupSkip,h);t=c+Math.floor((h-c)/r.slidesPerGroup)}if(t>=a.length&&(t=a.length-1),h!==o){var u=parseInt(this.slides.eq(h).attr("data-swiper-slide-index")||h,10);n.extend(this,{snapIndex:t,realIndex:u,previousIndex:o,activeIndex:h}),this.emit("activeIndexChange"),this.emit("snapIndexChange"),l!==u&&this.emit("realIndexChange"),(this.initialized||this.runCallbacksOnInit)&&this.emit("slideChange")}else t!==d&&(this.snapIndex=t,this.emit("snapIndexChange"))},updateClickedSlide:function(e){var t=this.params,i=s(e.target).closest("."+t.slideClass)[0],a=!1;if(i)for(var r=0;r<this.slides.length;r+=1)this.slides[r]===i&&(a=!0);if(!i||!a)return this.clickedSlide=void 0,void(this.clickedIndex=void 0);this.clickedSlide=i,this.virtual&&this.params.virtual.enabled?this.clickedIndex=parseInt(s(i).attr("data-swiper-slide-index"),10):this.clickedIndex=s(i).index(),t.slideToClickedSlide&&void 0!==this.clickedIndex&&this.clickedIndex!==this.activeIndex&&this.slideToClickedSlide()}};var p={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");var t=this.params,i=this.rtlTranslate,s=this.translate,a=this.$wrapperEl;if(t.virtualTranslate)return i?-s:s;if(t.cssMode)return s;var r=n.getTranslate(a[0],e);return i&&(r=-r),r||0},setTranslate:function(e,t){var i=this.rtlTranslate,s=this.params,a=this.$wrapperEl,r=this.wrapperEl,n=this.progress,o=0,l=0;this.isHorizontal()?o=i?-e:e:l=e,s.roundLengths&&(o=Math.floor(o),l=Math.floor(l)),s.cssMode?r[this.isHorizontal()?"scrollLeft":"scrollTop"]=this.isHorizontal()?-o:-l:s.virtualTranslate||a.transform("translate3d("+o+"px, "+l+"px, 0px)"),this.previousTranslate=this.translate,this.translate=this.isHorizontal()?o:l;var d=this.maxTranslate()-this.minTranslate();(0===d?0:(e-this.minTranslate())/d)!==n&&this.updateProgress(e),this.emit("setTranslate",this.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e,t,i,s,a){var r;void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0),void 0===s&&(s=!0);var n=this,o=n.params,l=n.wrapperEl;if(n.animating&&o.preventInteractionOnTransition)return!1;var d,h=n.minTranslate(),p=n.maxTranslate();if(d=s&&e>h?h:s&&e<p?p:e,n.updateProgress(d),o.cssMode){var c=n.isHorizontal();return 0===t?l[c?"scrollLeft":"scrollTop"]=-d:l.scrollTo?l.scrollTo(((r={})[c?"left":"top"]=-d,r.behavior="smooth",r)):l[c?"scrollLeft":"scrollTop"]=-d,!0}return 0===t?(n.setTransition(0),n.setTranslate(d),i&&(n.emit("beforeTransitionStart",t,a),n.emit("transitionEnd"))):(n.setTransition(t),n.setTranslate(d),i&&(n.emit("beforeTransitionStart",t,a),n.emit("transitionStart")),n.animating||(n.animating=!0,n.onTranslateToWrapperTransitionEnd||(n.onTranslateToWrapperTransitionEnd=function(e){n&&!n.destroyed&&e.target===this&&(n.$wrapperEl[0].removeEventListener("transitionend",n.onTranslateToWrapperTransitionEnd),n.$wrapperEl[0].removeEventListener("webkitTransitionEnd",n.onTranslateToWrapperTransitionEnd),n.onTranslateToWrapperTransitionEnd=null,delete n.onTranslateToWrapperTransitionEnd,i&&n.emit("transitionEnd"))}),n.$wrapperEl[0].addEventListener("transitionend",n.onTranslateToWrapperTransitionEnd),n.$wrapperEl[0].addEventListener("webkitTransitionEnd",n.onTranslateToWrapperTransitionEnd))),!0}};var c={setTransition:function(e,t){this.params.cssMode||this.$wrapperEl.transition(e),this.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);var i=this.activeIndex,s=this.params,a=this.previousIndex;if(!s.cssMode){s.autoHeight&&this.updateAutoHeight();var r=t;if(r||(r=i>a?"next":i<a?"prev":"reset"),this.emit("transitionStart"),e&&i!==a){if("reset"===r)return void this.emit("slideResetTransitionStart");this.emit("slideChangeTransitionStart"),"next"===r?this.emit("slideNextTransitionStart"):this.emit("slidePrevTransitionStart")}}},transitionEnd:function(e,t){void 0===e&&(e=!0);var i=this.activeIndex,s=this.previousIndex,a=this.params;if(this.animating=!1,!a.cssMode){this.setTransition(0);var r=t;if(r||(r=i>s?"next":i<s?"prev":"reset"),this.emit("transitionEnd"),e&&i!==s){if("reset"===r)return void this.emit("slideResetTransitionEnd");this.emit("slideChangeTransitionEnd"),"next"===r?this.emit("slideNextTransitionEnd"):this.emit("slidePrevTransitionEnd")}}}};var u={slideTo:function(e,t,i,s){var a;void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0);var r=this,n=e;n<0&&(n=0);var o=r.params,l=r.snapGrid,d=r.slidesGrid,h=r.previousIndex,p=r.activeIndex,c=r.rtlTranslate,u=r.wrapperEl;if(r.animating&&o.preventInteractionOnTransition)return!1;var v=Math.min(r.params.slidesPerGroupSkip,n),f=v+Math.floor((n-v)/r.params.slidesPerGroup);f>=l.length&&(f=l.length-1),(p||o.initialSlide||0)===(h||0)&&i&&r.emit("beforeSlideChangeStart");var m,g=-l[f];if(r.updateProgress(g),o.normalizeSlideIndex)for(var b=0;b<d.length;b+=1)-Math.floor(100*g)>=Math.floor(100*d[b])&&(n=b);if(r.initialized&&n!==p){if(!r.allowSlideNext&&g<r.translate&&g<r.minTranslate())return!1;if(!r.allowSlidePrev&&g>r.translate&&g>r.maxTranslate()&&(p||0)!==n)return!1}if(m=n>p?"next":n<p?"prev":"reset",c&&-g===r.translate||!c&&g===r.translate)return r.updateActiveIndex(n),o.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),"slide"!==o.effect&&r.setTranslate(g),"reset"!==m&&(r.transitionStart(i,m),r.transitionEnd(i,m)),!1;if(o.cssMode){var w=r.isHorizontal();return 0===t?u[w?"scrollLeft":"scrollTop"]=-g:u.scrollTo?u.scrollTo(((a={})[w?"left":"top"]=-g,a.behavior="smooth",a)):u[w?"scrollLeft":"scrollTop"]=-g,!0}return 0===t?(r.setTransition(0),r.setTranslate(g),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,s),r.transitionStart(i,m),r.transitionEnd(i,m)):(r.setTransition(t),r.setTranslate(g),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,s),r.transitionStart(i,m),r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(i,m))}),r.$wrapperEl[0].addEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd))),!0},slideToLoop:function(e,t,i,s){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0);var a=e;return this.params.loop&&(a+=this.loopedSlides),this.slideTo(a,t,i,s)},slideNext:function(e,t,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var s=this.params,a=this.animating,r=this.activeIndex<s.slidesPerGroupSkip?1:s.slidesPerGroup;if(s.loop){if(a)return!1;this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft}return this.slideTo(this.activeIndex+r,e,t,i)},slidePrev:function(e,t,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var s=this.params,a=this.animating,r=this.snapGrid,n=this.slidesGrid,o=this.rtlTranslate;if(s.loop){if(a)return!1;this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft}function l(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}var d,h=l(o?this.translate:-this.translate),p=r.map((function(e){return l(e)})),c=(n.map((function(e){return l(e)})),r[p.indexOf(h)],r[p.indexOf(h)-1]);return void 0===c&&s.cssMode&&r.forEach((function(e){!c&&h>=e&&(c=e)})),void 0!==c&&(d=n.indexOf(c))<0&&(d=this.activeIndex-1),this.slideTo(d,e,t,i)},slideReset:function(e,t,i){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,i)},slideToClosest:function(e,t,i,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),void 0===s&&(s=.5);var a=this.activeIndex,r=Math.min(this.params.slidesPerGroupSkip,a),n=r+Math.floor((a-r)/this.params.slidesPerGroup),o=this.rtlTranslate?this.translate:-this.translate;if(o>=this.snapGrid[n]){var l=this.snapGrid[n];o-l>(this.snapGrid[n+1]-l)*s&&(a+=this.params.slidesPerGroup)}else{var d=this.snapGrid[n-1];o-d<=(this.snapGrid[n]-d)*s&&(a-=this.params.slidesPerGroup)}return a=Math.max(a,0),a=Math.min(a,this.slidesGrid.length-1),this.slideTo(a,e,t,i)},slideToClickedSlide:function(){var e,t=this,i=t.params,a=t.$wrapperEl,r="auto"===i.slidesPerView?t.slidesPerViewDynamic():i.slidesPerView,o=t.clickedIndex;if(i.loop){if(t.animating)return;e=parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"),10),i.centeredSlides?o<t.loopedSlides-r/2||o>t.slides.length-t.loopedSlides+r/2?(t.loopFix(),o=a.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+i.slideDuplicateClass+")").eq(0).index(),n.nextTick((function(){t.slideTo(o)}))):t.slideTo(o):o>t.slides.length-r?(t.loopFix(),o=a.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+i.slideDuplicateClass+")").eq(0).index(),n.nextTick((function(){t.slideTo(o)}))):t.slideTo(o)}else t.slideTo(o)}};var v={loopCreate:function(){var t=this,i=t.params,a=t.$wrapperEl;a.children("."+i.slideClass+"."+i.slideDuplicateClass).remove();var r=a.children("."+i.slideClass);if(i.loopFillGroupWithBlank){var n=i.slidesPerGroup-r.length%i.slidesPerGroup;if(n!==i.slidesPerGroup){for(var o=0;o<n;o+=1){var l=s(e.createElement("div")).addClass(i.slideClass+" "+i.slideBlankClass);a.append(l)}r=a.children("."+i.slideClass)}}"auto"!==i.slidesPerView||i.loopedSlides||(i.loopedSlides=r.length),t.loopedSlides=Math.ceil(parseFloat(i.loopedSlides||i.slidesPerView,10)),t.loopedSlides+=i.loopAdditionalSlides,t.loopedSlides>r.length&&(t.loopedSlides=r.length);var d=[],h=[];r.each((function(e,i){var a=s(i);e<t.loopedSlides&&h.push(i),e<r.length&&e>=r.length-t.loopedSlides&&d.push(i),a.attr("data-swiper-slide-index",e)}));for(var p=0;p<h.length;p+=1)a.append(s(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));for(var c=d.length-1;c>=0;c-=1)a.prepend(s(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass))},loopFix:function(){this.emit("beforeLoopFix");var e,t=this.activeIndex,i=this.slides,s=this.loopedSlides,a=this.allowSlidePrev,r=this.allowSlideNext,n=this.snapGrid,o=this.rtlTranslate;this.allowSlidePrev=!0,this.allowSlideNext=!0;var l=-n[t]-this.getTranslate();if(t<s)e=i.length-3*s+t,e+=s,this.slideTo(e,0,!1,!0)&&0!==l&&this.setTranslate((o?-this.translate:this.translate)-l);else if(t>=i.length-s){e=-i.length+t+s,e+=s,this.slideTo(e,0,!1,!0)&&0!==l&&this.setTranslate((o?-this.translate:this.translate)-l)}this.allowSlidePrev=a,this.allowSlideNext=r,this.emit("loopFix")},loopDestroy:function(){var e=this.$wrapperEl,t=this.params,i=this.slides;e.children("."+t.slideClass+"."+t.slideDuplicateClass+",."+t.slideClass+"."+t.slideBlankClass).remove(),i.removeAttr("data-swiper-slide-index")}};var f={setGrabCursor:function(e){if(!(o.touch||!this.params.simulateTouch||this.params.watchOverflow&&this.isLocked||this.params.cssMode)){var t=this.el;t.style.cursor="move",t.style.cursor=e?"-webkit-grabbing":"-webkit-grab",t.style.cursor=e?"-moz-grabbin":"-moz-grab",t.style.cursor=e?"grabbing":"grab"}},unsetGrabCursor:function(){o.touch||this.params.watchOverflow&&this.isLocked||this.params.cssMode||(this.el.style.cursor="")}};var m,g,b,w,y,x,T,E,S,C,M,P,z,k,$,L={appendSlide:function(e){var t=this.$wrapperEl,i=this.params;if(i.loop&&this.loopDestroy(),"object"==typeof e&&"length"in e)for(var s=0;s<e.length;s+=1)e[s]&&t.append(e[s]);else t.append(e);i.loop&&this.loopCreate(),i.observer&&o.observer||this.update()},prependSlide:function(e){var t=this.params,i=this.$wrapperEl,s=this.activeIndex;t.loop&&this.loopDestroy();var a=s+1;if("object"==typeof e&&"length"in e){for(var r=0;r<e.length;r+=1)e[r]&&i.prepend(e[r]);a=s+e.length}else i.prepend(e);t.loop&&this.loopCreate(),t.observer&&o.observer||this.update(),this.slideTo(a,0,!1)},addSlide:function(e,t){var i=this.$wrapperEl,s=this.params,a=this.activeIndex;s.loop&&(a-=this.loopedSlides,this.loopDestroy(),this.slides=i.children("."+s.slideClass));var r=this.slides.length;if(e<=0)this.prependSlide(t);else if(e>=r)this.appendSlide(t);else{for(var n=a>e?a+1:a,l=[],d=r-1;d>=e;d-=1){var h=this.slides.eq(d);h.remove(),l.unshift(h)}if("object"==typeof t&&"length"in t){for(var p=0;p<t.length;p+=1)t[p]&&i.append(t[p]);n=a>e?a+t.length:a}else i.append(t);for(var c=0;c<l.length;c+=1)i.append(l[c]);s.loop&&this.loopCreate(),s.observer&&o.observer||this.update(),s.loop?this.slideTo(n+this.loopedSlides,0,!1):this.slideTo(n,0,!1)}},removeSlide:function(e){var t=this.params,i=this.$wrapperEl,s=this.activeIndex;t.loop&&(s-=this.loopedSlides,this.loopDestroy(),this.slides=i.children("."+t.slideClass));var a,r=s;if("object"==typeof e&&"length"in e){for(var n=0;n<e.length;n+=1)a=e[n],this.slides[a]&&this.slides.eq(a).remove(),a<r&&(r-=1);r=Math.max(r,0)}else a=e,this.slides[a]&&this.slides.eq(a).remove(),a<r&&(r-=1),r=Math.max(r,0);t.loop&&this.loopCreate(),t.observer&&o.observer||this.update(),t.loop?this.slideTo(r+this.loopedSlides,0,!1):this.slideTo(r,0,!1)},removeAllSlides:function(){for(var e=[],t=0;t<this.slides.length;t+=1)e.push(t);this.removeSlide(e)}},I=(m=t.navigator.platform,g=t.navigator.userAgent,b={ios:!1,android:!1,androidChrome:!1,desktop:!1,iphone:!1,ipod:!1,ipad:!1,edge:!1,ie:!1,firefox:!1,macos:!1,windows:!1,cordova:!(!t.cordova&&!t.phonegap),phonegap:!(!t.cordova&&!t.phonegap),electron:!1},w=t.screen.width,y=t.screen.height,x=g.match(/(Android);?[\s\/]+([\d.]+)?/),T=g.match(/(iPad).*OS\s([\d_]+)/),E=g.match(/(iPod)(.*OS\s([\d_]+))?/),S=!T&&g.match(/(iPhone\sOS|iOS)\s([\d_]+)/),C=g.indexOf("MSIE ")>=0||g.indexOf("Trident/")>=0,M=g.indexOf("Edge/")>=0,P=g.indexOf("Gecko/")>=0&&g.indexOf("Firefox/")>=0,z="Win32"===m,k=g.toLowerCase().indexOf("electron")>=0,$="MacIntel"===m,!T&&$&&o.touch&&(1024===w&&1366===y||834===w&&1194===y||834===w&&1112===y||768===w&&1024===y)&&(T=g.match(/(Version)\/([\d.]+)/),$=!1),b.ie=C,b.edge=M,b.firefox=P,x&&!z&&(b.os="android",b.osVersion=x[2],b.android=!0,b.androidChrome=g.toLowerCase().indexOf("chrome")>=0),(T||S||E)&&(b.os="ios",b.ios=!0),S&&!E&&(b.osVersion=S[2].replace(/_/g,"."),b.iphone=!0),T&&(b.osVersion=T[2].replace(/_/g,"."),b.ipad=!0),E&&(b.osVersion=E[3]?E[3].replace(/_/g,"."):null,b.ipod=!0),b.ios&&b.osVersion&&g.indexOf("Version/")>=0&&"10"===b.osVersion.split(".")[0]&&(b.osVersion=g.toLowerCase().split("version/")[1].split(" ")[0]),b.webView=!(!(S||T||E)||!g.match(/.*AppleWebKit(?!.*Safari)/i)&&!t.navigator.standalone)||t.matchMedia&&t.matchMedia("(display-mode: standalone)").matches,b.webview=b.webView,b.standalone=b.webView,b.desktop=!(b.ios||b.android)||k,b.desktop&&(b.electron=k,b.macos=$,b.windows=z,b.macos&&(b.os="macos"),b.windows&&(b.os="windows")),b.pixelRatio=t.devicePixelRatio||1,b);function D(i){var a=this.touchEventsData,r=this.params,o=this.touches;if(!this.animating||!r.preventInteractionOnTransition){var l=i;l.originalEvent&&(l=l.originalEvent);var d=s(l.target);if(("wrapper"!==r.touchEventsTarget||d.closest(this.wrapperEl).length)&&(a.isTouchEvent="touchstart"===l.type,(a.isTouchEvent||!("which"in l)||3!==l.which)&&!(!a.isTouchEvent&&"button"in l&&l.button>0||a.isTouched&&a.isMoved)))if(r.noSwiping&&d.closest(r.noSwipingSelector?r.noSwipingSelector:"."+r.noSwipingClass)[0])this.allowClick=!0;else if(!r.swipeHandler||d.closest(r.swipeHandler)[0]){o.currentX="touchstart"===l.type?l.targetTouches[0].pageX:l.pageX,o.currentY="touchstart"===l.type?l.targetTouches[0].pageY:l.pageY;var h=o.currentX,p=o.currentY,c=r.edgeSwipeDetection||r.iOSEdgeSwipeDetection,u=r.edgeSwipeThreshold||r.iOSEdgeSwipeThreshold;if(!c||!(h<=u||h>=t.screen.width-u)){if(n.extend(a,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=h,o.startY=p,a.touchStartTime=n.now(),this.allowClick=!0,this.updateSize(),this.swipeDirection=void 0,r.threshold>0&&(a.allowThresholdMove=!1),"touchstart"!==l.type){var v=!0;d.is(a.formElements)&&(v=!1),e.activeElement&&s(e.activeElement).is(a.formElements)&&e.activeElement!==d[0]&&e.activeElement.blur();var f=v&&this.allowTouchMove&&r.touchStartPreventDefault;(r.touchStartForcePreventDefault||f)&&l.preventDefault()}this.emit("touchStart",l)}}}}function O(t){var i=this.touchEventsData,a=this.params,r=this.touches,o=this.rtlTranslate,l=t;if(l.originalEvent&&(l=l.originalEvent),i.isTouched){if(!i.isTouchEvent||"mousemove"!==l.type){var d="touchmove"===l.type&&l.targetTouches&&(l.targetTouches[0]||l.changedTouches[0]),h="touchmove"===l.type?d.pageX:l.pageX,p="touchmove"===l.type?d.pageY:l.pageY;if(l.preventedByNestedSwiper)return r.startX=h,void(r.startY=p);if(!this.allowTouchMove)return this.allowClick=!1,void(i.isTouched&&(n.extend(r,{startX:h,startY:p,currentX:h,currentY:p}),i.touchStartTime=n.now()));if(i.isTouchEvent&&a.touchReleaseOnEdges&&!a.loop)if(this.isVertical()){if(p<r.startY&&this.translate<=this.maxTranslate()||p>r.startY&&this.translate>=this.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(h<r.startX&&this.translate<=this.maxTranslate()||h>r.startX&&this.translate>=this.minTranslate())return;if(i.isTouchEvent&&e.activeElement&&l.target===e.activeElement&&s(l.target).is(i.formElements))return i.isMoved=!0,void(this.allowClick=!1);if(i.allowTouchCallbacks&&this.emit("touchMove",l),!(l.targetTouches&&l.targetTouches.length>1)){r.currentX=h,r.currentY=p;var c=r.currentX-r.startX,u=r.currentY-r.startY;if(!(this.params.threshold&&Math.sqrt(Math.pow(c,2)+Math.pow(u,2))<this.params.threshold)){var v;if(void 0===i.isScrolling)this.isHorizontal()&&r.currentY===r.startY||this.isVertical()&&r.currentX===r.startX?i.isScrolling=!1:c*c+u*u>=25&&(v=180*Math.atan2(Math.abs(u),Math.abs(c))/Math.PI,i.isScrolling=this.isHorizontal()?v>a.touchAngle:90-v>a.touchAngle);if(i.isScrolling&&this.emit("touchMoveOpposite",l),void 0===i.startMoving&&(r.currentX===r.startX&&r.currentY===r.startY||(i.startMoving=!0)),i.isScrolling)i.isTouched=!1;else if(i.startMoving){this.allowClick=!1,a.cssMode||l.preventDefault(),a.touchMoveStopPropagation&&!a.nested&&l.stopPropagation(),i.isMoved||(a.loop&&this.loopFix(),i.startTranslate=this.getTranslate(),this.setTransition(0),this.animating&&this.$wrapperEl.trigger("webkitTransitionEnd transitionend"),i.allowMomentumBounce=!1,!a.grabCursor||!0!==this.allowSlideNext&&!0!==this.allowSlidePrev||this.setGrabCursor(!0),this.emit("sliderFirstMove",l)),this.emit("sliderMove",l),i.isMoved=!0;var f=this.isHorizontal()?c:u;r.diff=f,f*=a.touchRatio,o&&(f=-f),this.swipeDirection=f>0?"prev":"next",i.currentTranslate=f+i.startTranslate;var m=!0,g=a.resistanceRatio;if(a.touchReleaseOnEdges&&(g=0),f>0&&i.currentTranslate>this.minTranslate()?(m=!1,a.resistance&&(i.currentTranslate=this.minTranslate()-1+Math.pow(-this.minTranslate()+i.startTranslate+f,g))):f<0&&i.currentTranslate<this.maxTranslate()&&(m=!1,a.resistance&&(i.currentTranslate=this.maxTranslate()+1-Math.pow(this.maxTranslate()-i.startTranslate-f,g))),m&&(l.preventedByNestedSwiper=!0),!this.allowSlideNext&&"next"===this.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!this.allowSlidePrev&&"prev"===this.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),a.threshold>0){if(!(Math.abs(f)>a.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,i.currentTranslate=i.startTranslate,void(r.diff=this.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY)}a.followFinger&&!a.cssMode&&((a.freeMode||a.watchSlidesProgress||a.watchSlidesVisibility)&&(this.updateActiveIndex(),this.updateSlidesClasses()),a.freeMode&&(0===i.velocities.length&&i.velocities.push({position:r[this.isHorizontal()?"startX":"startY"],time:i.touchStartTime}),i.velocities.push({position:r[this.isHorizontal()?"currentX":"currentY"],time:n.now()})),this.updateProgress(i.currentTranslate),this.setTranslate(i.currentTranslate))}}}}}else i.startMoving&&i.isScrolling&&this.emit("touchMoveOpposite",l)}function A(e){var t=this,i=t.touchEventsData,s=t.params,a=t.touches,r=t.rtlTranslate,o=t.$wrapperEl,l=t.slidesGrid,d=t.snapGrid,h=e;if(h.originalEvent&&(h=h.originalEvent),i.allowTouchCallbacks&&t.emit("touchEnd",h),i.allowTouchCallbacks=!1,!i.isTouched)return i.isMoved&&s.grabCursor&&t.setGrabCursor(!1),i.isMoved=!1,void(i.startMoving=!1);s.grabCursor&&i.isMoved&&i.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);var p,c=n.now(),u=c-i.touchStartTime;if(t.allowClick&&(t.updateClickedSlide(h),t.emit("tap click",h),u<300&&c-i.lastClickTime<300&&t.emit("doubleTap doubleClick",h)),i.lastClickTime=n.now(),n.nextTick((function(){t.destroyed||(t.allowClick=!0)})),!i.isTouched||!i.isMoved||!t.swipeDirection||0===a.diff||i.currentTranslate===i.startTranslate)return i.isTouched=!1,i.isMoved=!1,void(i.startMoving=!1);if(i.isTouched=!1,i.isMoved=!1,i.startMoving=!1,p=s.followFinger?r?t.translate:-t.translate:-i.currentTranslate,!s.cssMode)if(s.freeMode){if(p<-t.minTranslate())return void t.slideTo(t.activeIndex);if(p>-t.maxTranslate())return void(t.slides.length<d.length?t.slideTo(d.length-1):t.slideTo(t.slides.length-1));if(s.freeModeMomentum){if(i.velocities.length>1){var v=i.velocities.pop(),f=i.velocities.pop(),m=v.position-f.position,g=v.time-f.time;t.velocity=m/g,t.velocity/=2,Math.abs(t.velocity)<s.freeModeMinimumVelocity&&(t.velocity=0),(g>150||n.now()-v.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=s.freeModeMomentumVelocityRatio,i.velocities.length=0;var b=1e3*s.freeModeMomentumRatio,w=t.velocity*b,y=t.translate+w;r&&(y=-y);var x,T,E=!1,S=20*Math.abs(t.velocity)*s.freeModeMomentumBounceRatio;if(y<t.maxTranslate())s.freeModeMomentumBounce?(y+t.maxTranslate()<-S&&(y=t.maxTranslate()-S),x=t.maxTranslate(),E=!0,i.allowMomentumBounce=!0):y=t.maxTranslate(),s.loop&&s.centeredSlides&&(T=!0);else if(y>t.minTranslate())s.freeModeMomentumBounce?(y-t.minTranslate()>S&&(y=t.minTranslate()+S),x=t.minTranslate(),E=!0,i.allowMomentumBounce=!0):y=t.minTranslate(),s.loop&&s.centeredSlides&&(T=!0);else if(s.freeModeSticky){for(var C,M=0;M<d.length;M+=1)if(d[M]>-y){C=M;break}y=-(y=Math.abs(d[C]-y)<Math.abs(d[C-1]-y)||"next"===t.swipeDirection?d[C]:d[C-1])}if(T&&t.once("transitionEnd",(function(){t.loopFix()})),0!==t.velocity){if(b=r?Math.abs((-y-t.translate)/t.velocity):Math.abs((y-t.translate)/t.velocity),s.freeModeSticky){var P=Math.abs((r?-y:y)-t.translate),z=t.slidesSizesGrid[t.activeIndex];b=P<z?s.speed:P<2*z?1.5*s.speed:2.5*s.speed}}else if(s.freeModeSticky)return void t.slideToClosest();s.freeModeMomentumBounce&&E?(t.updateProgress(x),t.setTransition(b),t.setTranslate(y),t.transitionStart(!0,t.swipeDirection),t.animating=!0,o.transitionEnd((function(){t&&!t.destroyed&&i.allowMomentumBounce&&(t.emit("momentumBounce"),t.setTransition(s.speed),t.setTranslate(x),o.transitionEnd((function(){t&&!t.destroyed&&t.transitionEnd()})))}))):t.velocity?(t.updateProgress(y),t.setTransition(b),t.setTranslate(y),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,o.transitionEnd((function(){t&&!t.destroyed&&t.transitionEnd()})))):t.updateProgress(y),t.updateActiveIndex(),t.updateSlidesClasses()}else if(s.freeModeSticky)return void t.slideToClosest();(!s.freeModeMomentum||u>=s.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}else{for(var k=0,$=t.slidesSizesGrid[0],L=0;L<l.length;L+=L<s.slidesPerGroupSkip?1:s.slidesPerGroup){var I=L<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;void 0!==l[L+I]?p>=l[L]&&p<l[L+I]&&(k=L,$=l[L+I]-l[L]):p>=l[L]&&(k=L,$=l[l.length-1]-l[l.length-2])}var D=(p-l[k])/$,O=k<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;if(u>s.longSwipesMs){if(!s.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(D>=s.longSwipesRatio?t.slideTo(k+O):t.slideTo(k)),"prev"===t.swipeDirection&&(D>1-s.longSwipesRatio?t.slideTo(k+O):t.slideTo(k))}else{if(!s.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(h.target===t.navigation.nextEl||h.target===t.navigation.prevEl)?h.target===t.navigation.nextEl?t.slideTo(k+O):t.slideTo(k):("next"===t.swipeDirection&&t.slideTo(k+O),"prev"===t.swipeDirection&&t.slideTo(k))}}}function G(){var e=this.params,t=this.el;if(!t||0!==t.offsetWidth){e.breakpoints&&this.setBreakpoint();var i=this.allowSlideNext,s=this.allowSlidePrev,a=this.snapGrid;this.allowSlideNext=!0,this.allowSlidePrev=!0,this.updateSize(),this.updateSlides(),this.updateSlidesClasses(),("auto"===e.slidesPerView||e.slidesPerView>1)&&this.isEnd&&!this.params.centeredSlides?this.slideTo(this.slides.length-1,0,!1,!0):this.slideTo(this.activeIndex,0,!1,!0),this.autoplay&&this.autoplay.running&&this.autoplay.paused&&this.autoplay.run(),this.allowSlidePrev=s,this.allowSlideNext=i,this.params.watchOverflow&&a!==this.snapGrid&&this.checkOverflow()}}function H(e){this.allowClick||(this.params.preventClicks&&e.preventDefault(),this.params.preventClicksPropagation&&this.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))}function B(){var e=this.wrapperEl;this.previousTranslate=this.translate,this.translate=this.isHorizontal()?-e.scrollLeft:-e.scrollTop,-0===this.translate&&(this.translate=0),this.updateActiveIndex(),this.updateSlidesClasses();var t=this.maxTranslate()-this.minTranslate();(0===t?0:(this.translate-this.minTranslate())/t)!==this.progress&&this.updateProgress(this.translate),this.emit("setTranslate",this.translate,!1)}var N=!1;function X(){}var V={init:!0,direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,preventInteractionOnTransition:!1,edgeSwipeDetection:!1,edgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,slidesPerGroupSkip:0,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!1,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0},Y={update:h,translate:p,transition:c,slide:u,loop:v,grabCursor:f,manipulation:L,events:{attachEvents:function(){var t=this.params,i=this.touchEvents,s=this.el,a=this.wrapperEl;this.onTouchStart=D.bind(this),this.onTouchMove=O.bind(this),this.onTouchEnd=A.bind(this),t.cssMode&&(this.onScroll=B.bind(this)),this.onClick=H.bind(this);var r=!!t.nested;if(!o.touch&&o.pointerEvents)s.addEventListener(i.start,this.onTouchStart,!1),e.addEventListener(i.move,this.onTouchMove,r),e.addEventListener(i.end,this.onTouchEnd,!1);else{if(o.touch){var n=!("touchstart"!==i.start||!o.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};s.addEventListener(i.start,this.onTouchStart,n),s.addEventListener(i.move,this.onTouchMove,o.passiveListener?{passive:!1,capture:r}:r),s.addEventListener(i.end,this.onTouchEnd,n),i.cancel&&s.addEventListener(i.cancel,this.onTouchEnd,n),N||(e.addEventListener("touchstart",X),N=!0)}(t.simulateTouch&&!I.ios&&!I.android||t.simulateTouch&&!o.touch&&I.ios)&&(s.addEventListener("mousedown",this.onTouchStart,!1),e.addEventListener("mousemove",this.onTouchMove,r),e.addEventListener("mouseup",this.onTouchEnd,!1))}(t.preventClicks||t.preventClicksPropagation)&&s.addEventListener("click",this.onClick,!0),t.cssMode&&a.addEventListener("scroll",this.onScroll),t.updateOnWindowResize?this.on(I.ios||I.android?"resize orientationchange observerUpdate":"resize observerUpdate",G,!0):this.on("observerUpdate",G,!0)},detachEvents:function(){var t=this.params,i=this.touchEvents,s=this.el,a=this.wrapperEl,r=!!t.nested;if(!o.touch&&o.pointerEvents)s.removeEventListener(i.start,this.onTouchStart,!1),e.removeEventListener(i.move,this.onTouchMove,r),e.removeEventListener(i.end,this.onTouchEnd,!1);else{if(o.touch){var n=!("onTouchStart"!==i.start||!o.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};s.removeEventListener(i.start,this.onTouchStart,n),s.removeEventListener(i.move,this.onTouchMove,r),s.removeEventListener(i.end,this.onTouchEnd,n),i.cancel&&s.removeEventListener(i.cancel,this.onTouchEnd,n)}(t.simulateTouch&&!I.ios&&!I.android||t.simulateTouch&&!o.touch&&I.ios)&&(s.removeEventListener("mousedown",this.onTouchStart,!1),e.removeEventListener("mousemove",this.onTouchMove,r),e.removeEventListener("mouseup",this.onTouchEnd,!1))}(t.preventClicks||t.preventClicksPropagation)&&s.removeEventListener("click",this.onClick,!0),t.cssMode&&a.removeEventListener("scroll",this.onScroll),this.off(I.ios||I.android?"resize orientationchange observerUpdate":"resize observerUpdate",G)}},breakpoints:{setBreakpoint:function(){var e=this.activeIndex,t=this.initialized,i=this.loopedSlides;void 0===i&&(i=0);var s=this.params,a=this.$el,r=s.breakpoints;if(r&&(!r||0!==Object.keys(r).length)){var o=this.getBreakpoint(r);if(o&&this.currentBreakpoint!==o){var l=o in r?r[o]:void 0;l&&["slidesPerView","spaceBetween","slidesPerGroup","slidesPerGroupSkip","slidesPerColumn"].forEach((function(e){var t=l[e];void 0!==t&&(l[e]="slidesPerView"!==e||"AUTO"!==t&&"auto"!==t?"slidesPerView"===e?parseFloat(t):parseInt(t,10):"auto")}));var d=l||this.originalParams,h=s.slidesPerColumn>1,p=d.slidesPerColumn>1;h&&!p?a.removeClass(s.containerModifierClass+"multirow "+s.containerModifierClass+"multirow-column"):!h&&p&&(a.addClass(s.containerModifierClass+"multirow"),"column"===d.slidesPerColumnFill&&a.addClass(s.containerModifierClass+"multirow-column"));var c=d.direction&&d.direction!==s.direction,u=s.loop&&(d.slidesPerView!==s.slidesPerView||c);c&&t&&this.changeDirection(),n.extend(this.params,d),n.extend(this,{allowTouchMove:this.params.allowTouchMove,allowSlideNext:this.params.allowSlideNext,allowSlidePrev:this.params.allowSlidePrev}),this.currentBreakpoint=o,u&&t&&(this.loopDestroy(),this.loopCreate(),this.updateSlides(),this.slideTo(e-i+this.loopedSlides,0,!1)),this.emit("breakpoint",d)}}},getBreakpoint:function(e){if(e){var i=!1,s=Object.keys(e).map((function(e){if("string"==typeof e&&0===e.indexOf("@")){var i=parseFloat(e.substr(1));return{value:t.innerHeight*i,point:e}}return{value:e,point:e}}));s.sort((function(e,t){return parseInt(e.value,10)-parseInt(t.value,10)}));for(var a=0;a<s.length;a+=1){var r=s[a],n=r.point;r.value<=t.innerWidth&&(i=n)}return i||"max"}}},checkOverflow:{checkOverflow:function(){var e=this.params,t=this.isLocked,i=this.slides.length>0&&e.slidesOffsetBefore+e.spaceBetween*(this.slides.length-1)+this.slides[0].offsetWidth*this.slides.length;e.slidesOffsetBefore&&e.slidesOffsetAfter&&i?this.isLocked=i<=this.size:this.isLocked=1===this.snapGrid.length,this.allowSlideNext=!this.isLocked,this.allowSlidePrev=!this.isLocked,t!==this.isLocked&&this.emit(this.isLocked?"lock":"unlock"),t&&t!==this.isLocked&&(this.isEnd=!1,this.navigation.update())}},classes:{addClasses:function(){var e=this.classNames,t=this.params,i=this.rtl,s=this.$el,a=[];a.push("initialized"),a.push(t.direction),t.freeMode&&a.push("free-mode"),t.autoHeight&&a.push("autoheight"),i&&a.push("rtl"),t.slidesPerColumn>1&&(a.push("multirow"),"column"===t.slidesPerColumnFill&&a.push("multirow-column")),I.android&&a.push("android"),I.ios&&a.push("ios"),t.cssMode&&a.push("css-mode"),a.forEach((function(i){e.push(t.containerModifierClass+i)})),s.addClass(e.join(" "))},removeClasses:function(){var e=this.$el,t=this.classNames;e.removeClass(t.join(" "))}},images:{loadImage:function(e,i,s,a,r,n){var o;function l(){n&&n()}e.complete&&r?l():i?((o=new t.Image).onload=l,o.onerror=l,a&&(o.sizes=a),s&&(o.srcset=s),i&&(o.src=i)):l()},preloadImages:function(){var e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(var i=0;i<e.imagesToLoad.length;i+=1){var s=e.imagesToLoad[i];e.loadImage(s,s.currentSrc||s.getAttribute("src"),s.srcset||s.getAttribute("srcset"),s.sizes||s.getAttribute("sizes"),!0,t)}}}},F={},W=function(e){function t(){for(var i,a,r,l=[],d=arguments.length;d--;)l[d]=arguments[d];1===l.length&&l[0].constructor&&l[0].constructor===Object?r=l[0]:(a=(i=l)[0],r=i[1]),r||(r={}),r=n.extend({},r),a&&!r.el&&(r.el=a),e.call(this,r),Object.keys(Y).forEach((function(e){Object.keys(Y[e]).forEach((function(i){t.prototype[i]||(t.prototype[i]=Y[e][i])}))}));var h=this;void 0===h.modules&&(h.modules={}),Object.keys(h.modules).forEach((function(e){var t=h.modules[e];if(t.params){var i=Object.keys(t.params)[0],s=t.params[i];if("object"!=typeof s||null===s)return;if(!(i in r&&"enabled"in s))return;!0===r[i]&&(r[i]={enabled:!0}),"object"!=typeof r[i]||"enabled"in r[i]||(r[i].enabled=!0),r[i]||(r[i]={enabled:!1})}}));var p=n.extend({},V);h.useModulesParams(p),h.params=n.extend({},p,F,r),h.originalParams=n.extend({},h.params),h.passedParams=n.extend({},r),h.$=s;var c=s(h.params.el);if(a=c[0]){if(c.length>1){var u=[];return c.each((function(e,i){var s=n.extend({},r,{el:i});u.push(new t(s))})),u}var v,f,m;return a.swiper=h,c.data("swiper",h),a&&a.shadowRoot&&a.shadowRoot.querySelector?(v=s(a.shadowRoot.querySelector("."+h.params.wrapperClass))).children=function(e){return c.children(e)}:v=c.children("."+h.params.wrapperClass),n.extend(h,{$el:c,el:a,$wrapperEl:v,wrapperEl:v[0],classNames:[],slides:s(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:function(){return"horizontal"===h.params.direction},isVertical:function(){return"vertical"===h.params.direction},rtl:"rtl"===a.dir.toLowerCase()||"rtl"===c.css("direction"),rtlTranslate:"horizontal"===h.params.direction&&("rtl"===a.dir.toLowerCase()||"rtl"===c.css("direction")),wrongRTL:"-webkit-box"===v.css("display"),activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:h.params.allowSlideNext,allowSlidePrev:h.params.allowSlidePrev,touchEvents:(f=["touchstart","touchmove","touchend","touchcancel"],m=["mousedown","mousemove","mouseup"],o.pointerEvents&&(m=["pointerdown","pointermove","pointerup"]),h.touchEventsTouch={start:f[0],move:f[1],end:f[2],cancel:f[3]},h.touchEventsDesktop={start:m[0],move:m[1],end:m[2]},o.touch||!h.params.simulateTouch?h.touchEventsTouch:h.touchEventsDesktop),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,formElements:"input, select, option, textarea, button, video, label",lastClickTime:n.now(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:h.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),h.useModules(),h.params.init&&h.init(),h}}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var i={extendedDefaults:{configurable:!0},defaults:{configurable:!0},Class:{configurable:!0},$:{configurable:!0}};return t.prototype.slidesPerViewDynamic=function(){var e=this.params,t=this.slides,i=this.slidesGrid,s=this.size,a=this.activeIndex,r=1;if(e.centeredSlides){for(var n,o=t[a].swiperSlideSize,l=a+1;l<t.length;l+=1)t[l]&&!n&&(r+=1,(o+=t[l].swiperSlideSize)>s&&(n=!0));for(var d=a-1;d>=0;d-=1)t[d]&&!n&&(r+=1,(o+=t[d].swiperSlideSize)>s&&(n=!0))}else for(var h=a+1;h<t.length;h+=1)i[h]-i[a]<s&&(r+=1);return r},t.prototype.update=function(){var e=this;if(e&&!e.destroyed){var t=e.snapGrid,i=e.params;i.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode?(s(),e.params.autoHeight&&e.updateAutoHeight()):(("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0))||s(),i.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}function s(){var t=e.rtlTranslate?-1*e.translate:e.translate,i=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(i),e.updateActiveIndex(),e.updateSlidesClasses()}},t.prototype.changeDirection=function(e,t){void 0===t&&(t=!0);var i=this.params.direction;return e||(e="horizontal"===i?"vertical":"horizontal"),e===i||"horizontal"!==e&&"vertical"!==e?this:(this.$el.removeClass(""+this.params.containerModifierClass+i).addClass(""+this.params.containerModifierClass+e),this.params.direction=e,this.slides.each((function(t,i){"vertical"===e?i.style.width="":i.style.height=""})),this.emit("changeDirection"),t&&this.update(),this)},t.prototype.init=function(){this.initialized||(this.emit("beforeInit"),this.params.breakpoints&&this.setBreakpoint(),this.addClasses(),this.params.loop&&this.loopCreate(),this.updateSize(),this.updateSlides(),this.params.watchOverflow&&this.checkOverflow(),this.params.grabCursor&&this.setGrabCursor(),this.params.preloadImages&&this.preloadImages(),this.params.loop?this.slideTo(this.params.initialSlide+this.loopedSlides,0,this.params.runCallbacksOnInit):this.slideTo(this.params.initialSlide,0,this.params.runCallbacksOnInit),this.attachEvents(),this.initialized=!0,this.emit("init"))},t.prototype.destroy=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);var i=this,s=i.params,a=i.$el,r=i.$wrapperEl,o=i.slides;return void 0===i.params||i.destroyed?null:(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),s.loop&&i.loopDestroy(),t&&(i.removeClasses(),a.removeAttr("style"),r.removeAttr("style"),o&&o.length&&o.removeClass([s.slideVisibleClass,s.slideActiveClass,s.slideNextClass,s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),i.emit("destroy"),Object.keys(i.eventsListeners).forEach((function(e){i.off(e)})),!1!==e&&(i.$el[0].swiper=null,i.$el.data("swiper",null),n.deleteProps(i)),i.destroyed=!0,null)},t.extendDefaults=function(e){n.extend(F,e)},i.extendedDefaults.get=function(){return F},i.defaults.get=function(){return V},i.Class.get=function(){return e},i.$.get=function(){return s},Object.defineProperties(t,i),t}(l),R={name:"device",proto:{device:I},static:{device:I}},q={name:"support",proto:{support:o},static:{support:o}},j={isEdge:!!t.navigator.userAgent.match(/Edge/g),isSafari:function(){var e=t.navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)},K={name:"browser",proto:{browser:j},static:{browser:j}},U={name:"resize",create:function(){var e=this;n.extend(e,{resize:{resizeHandler:function(){e&&!e.destroyed&&e.initialized&&(e.emit("beforeResize"),e.emit("resize"))},orientationChangeHandler:function(){e&&!e.destroyed&&e.initialized&&e.emit("orientationchange")}}})},on:{init:function(){t.addEventListener("resize",this.resize.resizeHandler),t.addEventListener("orientationchange",this.resize.orientationChangeHandler)},destroy:function(){t.removeEventListener("resize",this.resize.resizeHandler),t.removeEventListener("orientationchange",this.resize.orientationChangeHandler)}}},_={func:t.MutationObserver||t.WebkitMutationObserver,attach:function(e,i){void 0===i&&(i={});var s=this,a=new(0,_.func)((function(e){if(1!==e.length){var i=function(){s.emit("observerUpdate",e[0])};t.requestAnimationFrame?t.requestAnimationFrame(i):t.setTimeout(i,0)}else s.emit("observerUpdate",e[0])}));a.observe(e,{attributes:void 0===i.attributes||i.attributes,childList:void 0===i.childList||i.childList,characterData:void 0===i.characterData||i.characterData}),s.observer.observers.push(a)},init:function(){if(o.observer&&this.params.observer){if(this.params.observeParents)for(var e=this.$el.parents(),t=0;t<e.length;t+=1)this.observer.attach(e[t]);this.observer.attach(this.$el[0],{childList:this.params.observeSlideChildren}),this.observer.attach(this.$wrapperEl[0],{attributes:!1})}},destroy:function(){this.observer.observers.forEach((function(e){e.disconnect()})),this.observer.observers=[]}},Z={name:"observer",params:{observer:!1,observeParents:!1,observeSlideChildren:!1},create:function(){n.extend(this,{observer:{init:_.init.bind(this),attach:_.attach.bind(this),destroy:_.destroy.bind(this),observers:[]}})},on:{init:function(){this.observer.init()},destroy:function(){this.observer.destroy()}}},Q={update:function(e){var t=this,i=t.params,s=i.slidesPerView,a=i.slidesPerGroup,r=i.centeredSlides,o=t.params.virtual,l=o.addSlidesBefore,d=o.addSlidesAfter,h=t.virtual,p=h.from,c=h.to,u=h.slides,v=h.slidesGrid,f=h.renderSlide,m=h.offset;t.updateActiveIndex();var g,b,w,y=t.activeIndex||0;g=t.rtlTranslate?"right":t.isHorizontal()?"left":"top",r?(b=Math.floor(s/2)+a+l,w=Math.floor(s/2)+a+d):(b=s+(a-1)+l,w=a+d);var x=Math.max((y||0)-w,0),T=Math.min((y||0)+b,u.length-1),E=(t.slidesGrid[x]||0)-(t.slidesGrid[0]||0);function S(){t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.lazy&&t.params.lazy.enabled&&t.lazy.load()}if(n.extend(t.virtual,{from:x,to:T,offset:E,slidesGrid:t.slidesGrid}),p===x&&c===T&&!e)return t.slidesGrid!==v&&E!==m&&t.slides.css(g,E+"px"),void t.updateProgress();if(t.params.virtual.renderExternal)return t.params.virtual.renderExternal.call(t,{offset:E,from:x,to:T,slides:function(){for(var e=[],t=x;t<=T;t+=1)e.push(u[t]);return e}()}),void S();var C=[],M=[];if(e)t.$wrapperEl.find("."+t.params.slideClass).remove();else for(var P=p;P<=c;P+=1)(P<x||P>T)&&t.$wrapperEl.find("."+t.params.slideClass+'[data-swiper-slide-index="'+P+'"]').remove();for(var z=0;z<u.length;z+=1)z>=x&&z<=T&&(void 0===c||e?M.push(z):(z>c&&M.push(z),z<p&&C.push(z)));M.forEach((function(e){t.$wrapperEl.append(f(u[e],e))})),C.sort((function(e,t){return t-e})).forEach((function(e){t.$wrapperEl.prepend(f(u[e],e))})),t.$wrapperEl.children(".swiper-slide").css(g,E+"px"),S()},renderSlide:function(e,t){var i=this.params.virtual;if(i.cache&&this.virtual.cache[t])return this.virtual.cache[t];var a=i.renderSlide?s(i.renderSlide.call(this,e,t)):s('<div class="'+this.params.slideClass+'" data-swiper-slide-index="'+t+'">'+e+"</div>");return a.attr("data-swiper-slide-index")||a.attr("data-swiper-slide-index",t),i.cache&&(this.virtual.cache[t]=a),a},appendSlide:function(e){if("object"==typeof e&&"length"in e)for(var t=0;t<e.length;t+=1)e[t]&&this.virtual.slides.push(e[t]);else this.virtual.slides.push(e);this.virtual.update(!0)},prependSlide:function(e){var t=this.activeIndex,i=t+1,s=1;if(Array.isArray(e)){for(var a=0;a<e.length;a+=1)e[a]&&this.virtual.slides.unshift(e[a]);i=t+e.length,s=e.length}else this.virtual.slides.unshift(e);if(this.params.virtual.cache){var r=this.virtual.cache,n={};Object.keys(r).forEach((function(e){var t=r[e],i=t.attr("data-swiper-slide-index");i&&t.attr("data-swiper-slide-index",parseInt(i,10)+1),n[parseInt(e,10)+s]=t})),this.virtual.cache=n}this.virtual.update(!0),this.slideTo(i,0)},removeSlide:function(e){if(null!=e){var t=this.activeIndex;if(Array.isArray(e))for(var i=e.length-1;i>=0;i-=1)this.virtual.slides.splice(e[i],1),this.params.virtual.cache&&delete this.virtual.cache[e[i]],e[i]<t&&(t-=1),t=Math.max(t,0);else this.virtual.slides.splice(e,1),this.params.virtual.cache&&delete this.virtual.cache[e],e<t&&(t-=1),t=Math.max(t,0);this.virtual.update(!0),this.slideTo(t,0)}},removeAllSlides:function(){this.virtual.slides=[],this.params.virtual.cache&&(this.virtual.cache={}),this.virtual.update(!0),this.slideTo(0,0)}},J={name:"virtual",params:{virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,addSlidesBefore:0,addSlidesAfter:0}},create:function(){n.extend(this,{virtual:{update:Q.update.bind(this),appendSlide:Q.appendSlide.bind(this),prependSlide:Q.prependSlide.bind(this),removeSlide:Q.removeSlide.bind(this),removeAllSlides:Q.removeAllSlides.bind(this),renderSlide:Q.renderSlide.bind(this),slides:this.params.virtual.slides,cache:{}}})},on:{beforeInit:function(){if(this.params.virtual.enabled){this.classNames.push(this.params.containerModifierClass+"virtual");var e={watchSlidesProgress:!0};n.extend(this.params,e),n.extend(this.originalParams,e),this.params.initialSlide||this.virtual.update()}},setTranslate:function(){this.params.virtual.enabled&&this.virtual.update()}}},ee={handle:function(i){var s=this.rtlTranslate,a=i;a.originalEvent&&(a=a.originalEvent);var r=a.keyCode||a.charCode;if(!this.allowSlideNext&&(this.isHorizontal()&&39===r||this.isVertical()&&40===r||34===r))return!1;if(!this.allowSlidePrev&&(this.isHorizontal()&&37===r||this.isVertical()&&38===r||33===r))return!1;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey||e.activeElement&&e.activeElement.nodeName&&("input"===e.activeElement.nodeName.toLowerCase()||"textarea"===e.activeElement.nodeName.toLowerCase()))){if(this.params.keyboard.onlyInViewport&&(33===r||34===r||37===r||39===r||38===r||40===r)){var n=!1;if(this.$el.parents("."+this.params.slideClass).length>0&&0===this.$el.parents("."+this.params.slideActiveClass).length)return;var o=t.innerWidth,l=t.innerHeight,d=this.$el.offset();s&&(d.left-=this.$el[0].scrollLeft);for(var h=[[d.left,d.top],[d.left+this.width,d.top],[d.left,d.top+this.height],[d.left+this.width,d.top+this.height]],p=0;p<h.length;p+=1){var c=h[p];c[0]>=0&&c[0]<=o&&c[1]>=0&&c[1]<=l&&(n=!0)}if(!n)return}this.isHorizontal()?(33!==r&&34!==r&&37!==r&&39!==r||(a.preventDefault?a.preventDefault():a.returnValue=!1),(34!==r&&39!==r||s)&&(33!==r&&37!==r||!s)||this.slideNext(),(33!==r&&37!==r||s)&&(34!==r&&39!==r||!s)||this.slidePrev()):(33!==r&&34!==r&&38!==r&&40!==r||(a.preventDefault?a.preventDefault():a.returnValue=!1),34!==r&&40!==r||this.slideNext(),33!==r&&38!==r||this.slidePrev()),this.emit("keyPress",r)}},enable:function(){this.keyboard.enabled||(s(e).on("keydown",this.keyboard.handle),this.keyboard.enabled=!0)},disable:function(){this.keyboard.enabled&&(s(e).off("keydown",this.keyboard.handle),this.keyboard.enabled=!1)}},te={name:"keyboard",params:{keyboard:{enabled:!1,onlyInViewport:!0}},create:function(){n.extend(this,{keyboard:{enabled:!1,enable:ee.enable.bind(this),disable:ee.disable.bind(this),handle:ee.handle.bind(this)}})},on:{init:function(){this.params.keyboard.enabled&&this.keyboard.enable()},destroy:function(){this.keyboard.enabled&&this.keyboard.disable()}}};var ie={lastScrollTime:n.now(),lastEventBeforeSnap:void 0,recentWheelEvents:[],event:function(){return t.navigator.userAgent.indexOf("firefox")>-1?"DOMMouseScroll":function(){var t="onwheel"in e;if(!t){var i=e.createElement("div");i.setAttribute("onwheel","return;"),t="function"==typeof i.onwheel}return!t&&e.implementation&&e.implementation.hasFeature&&!0!==e.implementation.hasFeature("","")&&(t=e.implementation.hasFeature("Events.wheel","3.0")),t}()?"wheel":"mousewheel"},normalize:function(e){var t=0,i=0,s=0,a=0;return"detail"in e&&(i=e.detail),"wheelDelta"in e&&(i=-e.wheelDelta/120),"wheelDeltaY"in e&&(i=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=i,i=0),s=10*t,a=10*i,"deltaY"in e&&(a=e.deltaY),"deltaX"in e&&(s=e.deltaX),e.shiftKey&&!s&&(s=a,a=0),(s||a)&&e.deltaMode&&(1===e.deltaMode?(s*=40,a*=40):(s*=800,a*=800)),s&&!t&&(t=s<1?-1:1),a&&!i&&(i=a<1?-1:1),{spinX:t,spinY:i,pixelX:s,pixelY:a}},handleMouseEnter:function(){this.mouseEntered=!0},handleMouseLeave:function(){this.mouseEntered=!1},handle:function(e){var t=e,i=this,a=i.params.mousewheel;i.params.cssMode&&t.preventDefault();var r=i.$el;if("container"!==i.params.mousewheel.eventsTarged&&(r=s(i.params.mousewheel.eventsTarged)),!i.mouseEntered&&!r[0].contains(t.target)&&!a.releaseOnEdges)return!0;t.originalEvent&&(t=t.originalEvent);var o=0,l=i.rtlTranslate?-1:1,d=ie.normalize(t);if(a.forceToAxis)if(i.isHorizontal()){if(!(Math.abs(d.pixelX)>Math.abs(d.pixelY)))return!0;o=d.pixelX*l}else{if(!(Math.abs(d.pixelY)>Math.abs(d.pixelX)))return!0;o=d.pixelY}else o=Math.abs(d.pixelX)>Math.abs(d.pixelY)?-d.pixelX*l:-d.pixelY;if(0===o)return!0;if(a.invert&&(o=-o),i.params.freeMode){var h={time:n.now(),delta:Math.abs(o),direction:Math.sign(o)},p=i.mousewheel.lastEventBeforeSnap,c=p&&h.time<p.time+500&&h.delta<=p.delta&&h.direction===p.direction;if(!c){i.mousewheel.lastEventBeforeSnap=void 0,i.params.loop&&i.loopFix();var u=i.getTranslate()+o*a.sensitivity,v=i.isBeginning,f=i.isEnd;if(u>=i.minTranslate()&&(u=i.minTranslate()),u<=i.maxTranslate()&&(u=i.maxTranslate()),i.setTransition(0),i.setTranslate(u),i.updateProgress(),i.updateActiveIndex(),i.updateSlidesClasses(),(!v&&i.isBeginning||!f&&i.isEnd)&&i.updateSlidesClasses(),i.params.freeModeSticky){clearTimeout(i.mousewheel.timeout),i.mousewheel.timeout=void 0;var m=i.mousewheel.recentWheelEvents;m.length>=15&&m.shift();var g=m.length?m[m.length-1]:void 0,b=m[0];if(m.push(h),g&&(h.delta>g.delta||h.direction!==g.direction))m.splice(0);else if(m.length>=15&&h.time-b.time<500&&b.delta-h.delta>=1&&h.delta<=6){var w=o>0?.8:.2;i.mousewheel.lastEventBeforeSnap=h,m.splice(0),i.mousewheel.timeout=n.nextTick((function(){i.slideToClosest(i.params.speed,!0,void 0,w)}),0)}i.mousewheel.timeout||(i.mousewheel.timeout=n.nextTick((function(){i.mousewheel.lastEventBeforeSnap=h,m.splice(0),i.slideToClosest(i.params.speed,!0,void 0,.5)}),500))}if(c||i.emit("scroll",t),i.params.autoplay&&i.params.autoplayDisableOnInteraction&&i.autoplay.stop(),u===i.minTranslate()||u===i.maxTranslate())return!0}}else{var y={time:n.now(),delta:Math.abs(o),direction:Math.sign(o),raw:e},x=i.mousewheel.recentWheelEvents;x.length>=2&&x.shift();var T=x.length?x[x.length-1]:void 0;if(x.push(y),T?(y.direction!==T.direction||y.delta>T.delta)&&i.mousewheel.animateSlider(y):i.mousewheel.animateSlider(y),i.mousewheel.releaseScroll(y))return!0}return t.preventDefault?t.preventDefault():t.returnValue=!1,!1},animateSlider:function(e){return e.delta>=6&&n.now()-this.mousewheel.lastScrollTime<60||(e.direction<0?this.isEnd&&!this.params.loop||this.animating||(this.slideNext(),this.emit("scroll",e.raw)):this.isBeginning&&!this.params.loop||this.animating||(this.slidePrev(),this.emit("scroll",e.raw)),this.mousewheel.lastScrollTime=(new t.Date).getTime(),!1)},releaseScroll:function(e){var t=this.params.mousewheel;if(e.direction<0){if(this.isEnd&&!this.params.loop&&t.releaseOnEdges)return!0}else if(this.isBeginning&&!this.params.loop&&t.releaseOnEdges)return!0;return!1},enable:function(){var e=ie.event();if(this.params.cssMode)return this.wrapperEl.removeEventListener(e,this.mousewheel.handle),!0;if(!e)return!1;if(this.mousewheel.enabled)return!1;var t=this.$el;return"container"!==this.params.mousewheel.eventsTarged&&(t=s(this.params.mousewheel.eventsTarged)),t.on("mouseenter",this.mousewheel.handleMouseEnter),t.on("mouseleave",this.mousewheel.handleMouseLeave),t.on(e,this.mousewheel.handle),this.mousewheel.enabled=!0,!0},disable:function(){var e=ie.event();if(this.params.cssMode)return this.wrapperEl.addEventListener(e,this.mousewheel.handle),!0;if(!e)return!1;if(!this.mousewheel.enabled)return!1;var t=this.$el;return"container"!==this.params.mousewheel.eventsTarged&&(t=s(this.params.mousewheel.eventsTarged)),t.off(e,this.mousewheel.handle),this.mousewheel.enabled=!1,!0}},se={update:function(){var e=this.params.navigation;if(!this.params.loop){var t=this.navigation,i=t.$nextEl,s=t.$prevEl;s&&s.length>0&&(this.isBeginning?s.addClass(e.disabledClass):s.removeClass(e.disabledClass),s[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](e.lockClass)),i&&i.length>0&&(this.isEnd?i.addClass(e.disabledClass):i.removeClass(e.disabledClass),i[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](e.lockClass))}},onPrevClick:function(e){e.preventDefault(),this.isBeginning&&!this.params.loop||this.slidePrev()},onNextClick:function(e){e.preventDefault(),this.isEnd&&!this.params.loop||this.slideNext()},init:function(){var e,t,i=this.params.navigation;(i.nextEl||i.prevEl)&&(i.nextEl&&(e=s(i.nextEl),this.params.uniqueNavElements&&"string"==typeof i.nextEl&&e.length>1&&1===this.$el.find(i.nextEl).length&&(e=this.$el.find(i.nextEl))),i.prevEl&&(t=s(i.prevEl),this.params.uniqueNavElements&&"string"==typeof i.prevEl&&t.length>1&&1===this.$el.find(i.prevEl).length&&(t=this.$el.find(i.prevEl))),e&&e.length>0&&e.on("click",this.navigation.onNextClick),t&&t.length>0&&t.on("click",this.navigation.onPrevClick),n.extend(this.navigation,{$nextEl:e,nextEl:e&&e[0],$prevEl:t,prevEl:t&&t[0]}))},destroy:function(){var e=this.navigation,t=e.$nextEl,i=e.$prevEl;t&&t.length&&(t.off("click",this.navigation.onNextClick),t.removeClass(this.params.navigation.disabledClass)),i&&i.length&&(i.off("click",this.navigation.onPrevClick),i.removeClass(this.params.navigation.disabledClass))}},ae={update:function(){var e=this.rtl,t=this.params.pagination;if(t.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var i,a=this.virtual&&this.params.virtual.enabled?this.virtual.slides.length:this.slides.length,r=this.pagination.$el,n=this.params.loop?Math.ceil((a-2*this.loopedSlides)/this.params.slidesPerGroup):this.snapGrid.length;if(this.params.loop?((i=Math.ceil((this.activeIndex-this.loopedSlides)/this.params.slidesPerGroup))>a-1-2*this.loopedSlides&&(i-=a-2*this.loopedSlides),i>n-1&&(i-=n),i<0&&"bullets"!==this.params.paginationType&&(i=n+i)):i=void 0!==this.snapIndex?this.snapIndex:this.activeIndex||0,"bullets"===t.type&&this.pagination.bullets&&this.pagination.bullets.length>0){var o,l,d,h=this.pagination.bullets;if(t.dynamicBullets&&(this.pagination.bulletSize=h.eq(0)[this.isHorizontal()?"outerWidth":"outerHeight"](!0),r.css(this.isHorizontal()?"width":"height",this.pagination.bulletSize*(t.dynamicMainBullets+4)+"px"),t.dynamicMainBullets>1&&void 0!==this.previousIndex&&(this.pagination.dynamicBulletIndex+=i-this.previousIndex,this.pagination.dynamicBulletIndex>t.dynamicMainBullets-1?this.pagination.dynamicBulletIndex=t.dynamicMainBullets-1:this.pagination.dynamicBulletIndex<0&&(this.pagination.dynamicBulletIndex=0)),o=i-this.pagination.dynamicBulletIndex,d=((l=o+(Math.min(h.length,t.dynamicMainBullets)-1))+o)/2),h.removeClass(t.bulletActiveClass+" "+t.bulletActiveClass+"-next "+t.bulletActiveClass+"-next-next "+t.bulletActiveClass+"-prev "+t.bulletActiveClass+"-prev-prev "+t.bulletActiveClass+"-main"),r.length>1)h.each((function(e,a){var r=s(a),n=r.index();n===i&&r.addClass(t.bulletActiveClass),t.dynamicBullets&&(n>=o&&n<=l&&r.addClass(t.bulletActiveClass+"-main"),n===o&&r.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),n===l&&r.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next"))}));else{var p=h.eq(i),c=p.index();if(p.addClass(t.bulletActiveClass),t.dynamicBullets){for(var u=h.eq(o),v=h.eq(l),f=o;f<=l;f+=1)h.eq(f).addClass(t.bulletActiveClass+"-main");if(this.params.loop)if(c>=h.length-t.dynamicMainBullets){for(var m=t.dynamicMainBullets;m>=0;m-=1)h.eq(h.length-m).addClass(t.bulletActiveClass+"-main");h.eq(h.length-t.dynamicMainBullets-1).addClass(t.bulletActiveClass+"-prev")}else u.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),v.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next");else u.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),v.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next")}}if(t.dynamicBullets){var g=Math.min(h.length,t.dynamicMainBullets+4),b=(this.pagination.bulletSize*g-this.pagination.bulletSize)/2-d*this.pagination.bulletSize,w=e?"right":"left";h.css(this.isHorizontal()?w:"top",b+"px")}}if("fraction"===t.type&&(r.find("."+t.currentClass).text(t.formatFractionCurrent(i+1)),r.find("."+t.totalClass).text(t.formatFractionTotal(n))),"progressbar"===t.type){var y;y=t.progressbarOpposite?this.isHorizontal()?"vertical":"horizontal":this.isHorizontal()?"horizontal":"vertical";var x=(i+1)/n,T=1,E=1;"horizontal"===y?T=x:E=x,r.find("."+t.progressbarFillClass).transform("translate3d(0,0,0) scaleX("+T+") scaleY("+E+")").transition(this.params.speed)}"custom"===t.type&&t.renderCustom?(r.html(t.renderCustom(this,i+1,n)),this.emit("paginationRender",this,r[0])):this.emit("paginationUpdate",this,r[0]),r[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](t.lockClass)}},render:function(){var e=this.params.pagination;if(e.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var t=this.virtual&&this.params.virtual.enabled?this.virtual.slides.length:this.slides.length,i=this.pagination.$el,s="";if("bullets"===e.type){for(var a=this.params.loop?Math.ceil((t-2*this.loopedSlides)/this.params.slidesPerGroup):this.snapGrid.length,r=0;r<a;r+=1)e.renderBullet?s+=e.renderBullet.call(this,r,e.bulletClass):s+="<"+e.bulletElement+' class="'+e.bulletClass+'"></'+e.bulletElement+">";i.html(s),this.pagination.bullets=i.find("."+e.bulletClass)}"fraction"===e.type&&(s=e.renderFraction?e.renderFraction.call(this,e.currentClass,e.totalClass):'<span class="'+e.currentClass+'"></span> / <span class="'+e.totalClass+'"></span>',i.html(s)),"progressbar"===e.type&&(s=e.renderProgressbar?e.renderProgressbar.call(this,e.progressbarFillClass):'<span class="'+e.progressbarFillClass+'"></span>',i.html(s)),"custom"!==e.type&&this.emit("paginationRender",this.pagination.$el[0])}},init:function(){var e=this,t=e.params.pagination;if(t.el){var i=s(t.el);0!==i.length&&(e.params.uniqueNavElements&&"string"==typeof t.el&&i.length>1&&1===e.$el.find(t.el).length&&(i=e.$el.find(t.el)),"bullets"===t.type&&t.clickable&&i.addClass(t.clickableClass),i.addClass(t.modifierClass+t.type),"bullets"===t.type&&t.dynamicBullets&&(i.addClass(""+t.modifierClass+t.type+"-dynamic"),e.pagination.dynamicBulletIndex=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),"progressbar"===t.type&&t.progressbarOpposite&&i.addClass(t.progressbarOppositeClass),t.clickable&&i.on("click","."+t.bulletClass,(function(t){t.preventDefault();var i=s(this).index()*e.params.slidesPerGroup;e.params.loop&&(i+=e.loopedSlides),e.slideTo(i)})),n.extend(e.pagination,{$el:i,el:i[0]}))}},destroy:function(){var e=this.params.pagination;if(e.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var t=this.pagination.$el;t.removeClass(e.hiddenClass),t.removeClass(e.modifierClass+e.type),this.pagination.bullets&&this.pagination.bullets.removeClass(e.bulletActiveClass),e.clickable&&t.off("click","."+e.bulletClass)}}},re={setTranslate:function(){if(this.params.scrollbar.el&&this.scrollbar.el){var e=this.scrollbar,t=this.rtlTranslate,i=this.progress,s=e.dragSize,a=e.trackSize,r=e.$dragEl,n=e.$el,o=this.params.scrollbar,l=s,d=(a-s)*i;t?(d=-d)>0?(l=s-d,d=0):-d+s>a&&(l=a+d):d<0?(l=s+d,d=0):d+s>a&&(l=a-d),this.isHorizontal()?(r.transform("translate3d("+d+"px, 0, 0)"),r[0].style.width=l+"px"):(r.transform("translate3d(0px, "+d+"px, 0)"),r[0].style.height=l+"px"),o.hide&&(clearTimeout(this.scrollbar.timeout),n[0].style.opacity=1,this.scrollbar.timeout=setTimeout((function(){n[0].style.opacity=0,n.transition(400)}),1e3))}},setTransition:function(e){this.params.scrollbar.el&&this.scrollbar.el&&this.scrollbar.$dragEl.transition(e)},updateSize:function(){if(this.params.scrollbar.el&&this.scrollbar.el){var e=this.scrollbar,t=e.$dragEl,i=e.$el;t[0].style.width="",t[0].style.height="";var s,a=this.isHorizontal()?i[0].offsetWidth:i[0].offsetHeight,r=this.size/this.virtualSize,o=r*(a/this.size);s="auto"===this.params.scrollbar.dragSize?a*r:parseInt(this.params.scrollbar.dragSize,10),this.isHorizontal()?t[0].style.width=s+"px":t[0].style.height=s+"px",i[0].style.display=r>=1?"none":"",this.params.scrollbar.hide&&(i[0].style.opacity=0),n.extend(e,{trackSize:a,divider:r,moveDivider:o,dragSize:s}),e.$el[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](this.params.scrollbar.lockClass)}},getPointerPosition:function(e){return this.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientX:e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientY:e.clientY},setDragPosition:function(e){var t,i=this.scrollbar,s=this.rtlTranslate,a=i.$el,r=i.dragSize,n=i.trackSize,o=i.dragStartPos;t=(i.getPointerPosition(e)-a.offset()[this.isHorizontal()?"left":"top"]-(null!==o?o:r/2))/(n-r),t=Math.max(Math.min(t,1),0),s&&(t=1-t);var l=this.minTranslate()+(this.maxTranslate()-this.minTranslate())*t;this.updateProgress(l),this.setTranslate(l),this.updateActiveIndex(),this.updateSlidesClasses()},onDragStart:function(e){var t=this.params.scrollbar,i=this.scrollbar,s=this.$wrapperEl,a=i.$el,r=i.$dragEl;this.scrollbar.isTouched=!0,this.scrollbar.dragStartPos=e.target===r[0]||e.target===r?i.getPointerPosition(e)-e.target.getBoundingClientRect()[this.isHorizontal()?"left":"top"]:null,e.preventDefault(),e.stopPropagation(),s.transition(100),r.transition(100),i.setDragPosition(e),clearTimeout(this.scrollbar.dragTimeout),a.transition(0),t.hide&&a.css("opacity",1),this.params.cssMode&&this.$wrapperEl.css("scroll-snap-type","none"),this.emit("scrollbarDragStart",e)},onDragMove:function(e){var t=this.scrollbar,i=this.$wrapperEl,s=t.$el,a=t.$dragEl;this.scrollbar.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,t.setDragPosition(e),i.transition(0),s.transition(0),a.transition(0),this.emit("scrollbarDragMove",e))},onDragEnd:function(e){var t=this.params.scrollbar,i=this.scrollbar,s=this.$wrapperEl,a=i.$el;this.scrollbar.isTouched&&(this.scrollbar.isTouched=!1,this.params.cssMode&&(this.$wrapperEl.css("scroll-snap-type",""),s.transition("")),t.hide&&(clearTimeout(this.scrollbar.dragTimeout),this.scrollbar.dragTimeout=n.nextTick((function(){a.css("opacity",0),a.transition(400)}),1e3)),this.emit("scrollbarDragEnd",e),t.snapOnRelease&&this.slideToClosest())},enableDraggable:function(){if(this.params.scrollbar.el){var t=this.scrollbar,i=this.touchEventsTouch,s=this.touchEventsDesktop,a=this.params,r=t.$el[0],n=!(!o.passiveListener||!a.passiveListeners)&&{passive:!1,capture:!1},l=!(!o.passiveListener||!a.passiveListeners)&&{passive:!0,capture:!1};o.touch?(r.addEventListener(i.start,this.scrollbar.onDragStart,n),r.addEventListener(i.move,this.scrollbar.onDragMove,n),r.addEventListener(i.end,this.scrollbar.onDragEnd,l)):(r.addEventListener(s.start,this.scrollbar.onDragStart,n),e.addEventListener(s.move,this.scrollbar.onDragMove,n),e.addEventListener(s.end,this.scrollbar.onDragEnd,l))}},disableDraggable:function(){if(this.params.scrollbar.el){var t=this.scrollbar,i=this.touchEventsTouch,s=this.touchEventsDesktop,a=this.params,r=t.$el[0],n=!(!o.passiveListener||!a.passiveListeners)&&{passive:!1,capture:!1},l=!(!o.passiveListener||!a.passiveListeners)&&{passive:!0,capture:!1};o.touch?(r.removeEventListener(i.start,this.scrollbar.onDragStart,n),r.removeEventListener(i.move,this.scrollbar.onDragMove,n),r.removeEventListener(i.end,this.scrollbar.onDragEnd,l)):(r.removeEventListener(s.start,this.scrollbar.onDragStart,n),e.removeEventListener(s.move,this.scrollbar.onDragMove,n),e.removeEventListener(s.end,this.scrollbar.onDragEnd,l))}},init:function(){if(this.params.scrollbar.el){var e=this.scrollbar,t=this.$el,i=this.params.scrollbar,a=s(i.el);this.params.uniqueNavElements&&"string"==typeof i.el&&a.length>1&&1===t.find(i.el).length&&(a=t.find(i.el));var r=a.find("."+this.params.scrollbar.dragClass);0===r.length&&(r=s('<div class="'+this.params.scrollbar.dragClass+'"></div>'),a.append(r)),n.extend(e,{$el:a,el:a[0],$dragEl:r,dragEl:r[0]}),i.draggable&&e.enableDraggable()}},destroy:function(){this.scrollbar.disableDraggable()}},ne={setTransform:function(e,t){var i=this.rtl,a=s(e),r=i?-1:1,n=a.attr("data-swiper-parallax")||"0",o=a.attr("data-swiper-parallax-x"),l=a.attr("data-swiper-parallax-y"),d=a.attr("data-swiper-parallax-scale"),h=a.attr("data-swiper-parallax-opacity");if(o||l?(o=o||"0",l=l||"0"):this.isHorizontal()?(o=n,l="0"):(l=n,o="0"),o=o.indexOf("%")>=0?parseInt(o,10)*t*r+"%":o*t*r+"px",l=l.indexOf("%")>=0?parseInt(l,10)*t+"%":l*t+"px",null!=h){var p=h-(h-1)*(1-Math.abs(t));a[0].style.opacity=p}if(null==d)a.transform("translate3d("+o+", "+l+", 0px)");else{var c=d-(d-1)*(1-Math.abs(t));a.transform("translate3d("+o+", "+l+", 0px) scale("+c+")")}},setTranslate:function(){var e=this,t=e.$el,i=e.slides,a=e.progress,r=e.snapGrid;t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t,i){e.parallax.setTransform(i,a)})),i.each((function(t,i){var n=i.progress;e.params.slidesPerGroup>1&&"auto"!==e.params.slidesPerView&&(n+=Math.ceil(t/2)-a*(r.length-1)),n=Math.min(Math.max(n,-1),1),s(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t,i){e.parallax.setTransform(i,n)}))}))},setTransition:function(e){void 0===e&&(e=this.params.speed);this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t,i){var a=s(i),r=parseInt(a.attr("data-swiper-parallax-duration"),10)||e;0===e&&(r=0),a.transition(r)}))}},oe={getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var t=e.targetTouches[0].pageX,i=e.targetTouches[0].pageY,s=e.targetTouches[1].pageX,a=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(s-t,2)+Math.pow(a-i,2))},onGestureStart:function(e){var t=this.params.zoom,i=this.zoom,a=i.gesture;if(i.fakeGestureTouched=!1,i.fakeGestureMoved=!1,!o.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;i.fakeGestureTouched=!0,a.scaleStart=oe.getDistanceBetweenTouches(e)}a.$slideEl&&a.$slideEl.length||(a.$slideEl=s(e.target).closest("."+this.params.slideClass),0===a.$slideEl.length&&(a.$slideEl=this.slides.eq(this.activeIndex)),a.$imageEl=a.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),a.$imageWrapEl=a.$imageEl.parent("."+t.containerClass),a.maxRatio=a.$imageWrapEl.attr("data-swiper-zoom")||t.maxRatio,0!==a.$imageWrapEl.length)?(a.$imageEl.transition(0),this.zoom.isScaling=!0):a.$imageEl=void 0},onGestureChange:function(e){var t=this.params.zoom,i=this.zoom,s=i.gesture;if(!o.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;i.fakeGestureMoved=!0,s.scaleMove=oe.getDistanceBetweenTouches(e)}s.$imageEl&&0!==s.$imageEl.length&&(o.gestures?i.scale=e.scale*i.currentScale:i.scale=s.scaleMove/s.scaleStart*i.currentScale,i.scale>s.maxRatio&&(i.scale=s.maxRatio-1+Math.pow(i.scale-s.maxRatio+1,.5)),i.scale<t.minRatio&&(i.scale=t.minRatio+1-Math.pow(t.minRatio-i.scale+1,.5)),s.$imageEl.transform("translate3d(0,0,0) scale("+i.scale+")"))},onGestureEnd:function(e){var t=this.params.zoom,i=this.zoom,s=i.gesture;if(!o.gestures){if(!i.fakeGestureTouched||!i.fakeGestureMoved)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!I.android)return;i.fakeGestureTouched=!1,i.fakeGestureMoved=!1}s.$imageEl&&0!==s.$imageEl.length&&(i.scale=Math.max(Math.min(i.scale,s.maxRatio),t.minRatio),s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale("+i.scale+")"),i.currentScale=i.scale,i.isScaling=!1,1===i.scale&&(s.$slideEl=void 0))},onTouchStart:function(e){var t=this.zoom,i=t.gesture,s=t.image;i.$imageEl&&0!==i.$imageEl.length&&(s.isTouched||(I.android&&e.preventDefault(),s.isTouched=!0,s.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))},onTouchMove:function(e){var t=this.zoom,i=t.gesture,s=t.image,a=t.velocity;if(i.$imageEl&&0!==i.$imageEl.length&&(this.allowClick=!1,s.isTouched&&i.$slideEl)){s.isMoved||(s.width=i.$imageEl[0].offsetWidth,s.height=i.$imageEl[0].offsetHeight,s.startX=n.getTranslate(i.$imageWrapEl[0],"x")||0,s.startY=n.getTranslate(i.$imageWrapEl[0],"y")||0,i.slideWidth=i.$slideEl[0].offsetWidth,i.slideHeight=i.$slideEl[0].offsetHeight,i.$imageWrapEl.transition(0),this.rtl&&(s.startX=-s.startX,s.startY=-s.startY));var r=s.width*t.scale,o=s.height*t.scale;if(!(r<i.slideWidth&&o<i.slideHeight)){if(s.minX=Math.min(i.slideWidth/2-r/2,0),s.maxX=-s.minX,s.minY=Math.min(i.slideHeight/2-o/2,0),s.maxY=-s.minY,s.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!s.isMoved&&!t.isScaling){if(this.isHorizontal()&&(Math.floor(s.minX)===Math.floor(s.startX)&&s.touchesCurrent.x<s.touchesStart.x||Math.floor(s.maxX)===Math.floor(s.startX)&&s.touchesCurrent.x>s.touchesStart.x))return void(s.isTouched=!1);if(!this.isHorizontal()&&(Math.floor(s.minY)===Math.floor(s.startY)&&s.touchesCurrent.y<s.touchesStart.y||Math.floor(s.maxY)===Math.floor(s.startY)&&s.touchesCurrent.y>s.touchesStart.y))return void(s.isTouched=!1)}e.preventDefault(),e.stopPropagation(),s.isMoved=!0,s.currentX=s.touchesCurrent.x-s.touchesStart.x+s.startX,s.currentY=s.touchesCurrent.y-s.touchesStart.y+s.startY,s.currentX<s.minX&&(s.currentX=s.minX+1-Math.pow(s.minX-s.currentX+1,.8)),s.currentX>s.maxX&&(s.currentX=s.maxX-1+Math.pow(s.currentX-s.maxX+1,.8)),s.currentY<s.minY&&(s.currentY=s.minY+1-Math.pow(s.minY-s.currentY+1,.8)),s.currentY>s.maxY&&(s.currentY=s.maxY-1+Math.pow(s.currentY-s.maxY+1,.8)),a.prevPositionX||(a.prevPositionX=s.touchesCurrent.x),a.prevPositionY||(a.prevPositionY=s.touchesCurrent.y),a.prevTime||(a.prevTime=Date.now()),a.x=(s.touchesCurrent.x-a.prevPositionX)/(Date.now()-a.prevTime)/2,a.y=(s.touchesCurrent.y-a.prevPositionY)/(Date.now()-a.prevTime)/2,Math.abs(s.touchesCurrent.x-a.prevPositionX)<2&&(a.x=0),Math.abs(s.touchesCurrent.y-a.prevPositionY)<2&&(a.y=0),a.prevPositionX=s.touchesCurrent.x,a.prevPositionY=s.touchesCurrent.y,a.prevTime=Date.now(),i.$imageWrapEl.transform("translate3d("+s.currentX+"px, "+s.currentY+"px,0)")}}},onTouchEnd:function(){var e=this.zoom,t=e.gesture,i=e.image,s=e.velocity;if(t.$imageEl&&0!==t.$imageEl.length){if(!i.isTouched||!i.isMoved)return i.isTouched=!1,void(i.isMoved=!1);i.isTouched=!1,i.isMoved=!1;var a=300,r=300,n=s.x*a,o=i.currentX+n,l=s.y*r,d=i.currentY+l;0!==s.x&&(a=Math.abs((o-i.currentX)/s.x)),0!==s.y&&(r=Math.abs((d-i.currentY)/s.y));var h=Math.max(a,r);i.currentX=o,i.currentY=d;var p=i.width*e.scale,c=i.height*e.scale;i.minX=Math.min(t.slideWidth/2-p/2,0),i.maxX=-i.minX,i.minY=Math.min(t.slideHeight/2-c/2,0),i.maxY=-i.minY,i.currentX=Math.max(Math.min(i.currentX,i.maxX),i.minX),i.currentY=Math.max(Math.min(i.currentY,i.maxY),i.minY),t.$imageWrapEl.transition(h).transform("translate3d("+i.currentX+"px, "+i.currentY+"px,0)")}},onTransitionEnd:function(){var e=this.zoom,t=e.gesture;t.$slideEl&&this.previousIndex!==this.activeIndex&&(t.$imageEl.transform("translate3d(0,0,0) scale(1)"),t.$imageWrapEl.transform("translate3d(0,0,0)"),e.scale=1,e.currentScale=1,t.$slideEl=void 0,t.$imageEl=void 0,t.$imageWrapEl=void 0)},toggle:function(e){var t=this.zoom;t.scale&&1!==t.scale?t.out():t.in(e)},in:function(e){var t,i,s,a,r,n,o,l,d,h,p,c,u,v,f,m,g=this.zoom,b=this.params.zoom,w=g.gesture,y=g.image;(w.$slideEl||(w.$slideEl=this.slides.eq(this.activeIndex),w.$imageEl=w.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),w.$imageWrapEl=w.$imageEl.parent("."+b.containerClass)),w.$imageEl&&0!==w.$imageEl.length)&&(w.$slideEl.addClass(""+b.zoomedSlideClass),void 0===y.touchesStart.x&&e?(t="touchend"===e.type?e.changedTouches[0].pageX:e.pageX,i="touchend"===e.type?e.changedTouches[0].pageY:e.pageY):(t=y.touchesStart.x,i=y.touchesStart.y),g.scale=w.$imageWrapEl.attr("data-swiper-zoom")||b.maxRatio,g.currentScale=w.$imageWrapEl.attr("data-swiper-zoom")||b.maxRatio,e?(f=w.$slideEl[0].offsetWidth,m=w.$slideEl[0].offsetHeight,s=w.$slideEl.offset().left+f/2-t,a=w.$slideEl.offset().top+m/2-i,o=w.$imageEl[0].offsetWidth,l=w.$imageEl[0].offsetHeight,d=o*g.scale,h=l*g.scale,u=-(p=Math.min(f/2-d/2,0)),v=-(c=Math.min(m/2-h/2,0)),(r=s*g.scale)<p&&(r=p),r>u&&(r=u),(n=a*g.scale)<c&&(n=c),n>v&&(n=v)):(r=0,n=0),w.$imageWrapEl.transition(300).transform("translate3d("+r+"px, "+n+"px,0)"),w.$imageEl.transition(300).transform("translate3d(0,0,0) scale("+g.scale+")"))},out:function(){var e=this.zoom,t=this.params.zoom,i=e.gesture;i.$slideEl||(i.$slideEl=this.slides.eq(this.activeIndex),i.$imageEl=i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),i.$imageWrapEl=i.$imageEl.parent("."+t.containerClass)),i.$imageEl&&0!==i.$imageEl.length&&(e.scale=1,e.currentScale=1,i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),i.$slideEl.removeClass(""+t.zoomedSlideClass),i.$slideEl=void 0)},enable:function(){var e=this.zoom;if(!e.enabled){e.enabled=!0;var t=!("touchstart"!==this.touchEvents.start||!o.passiveListener||!this.params.passiveListeners)&&{passive:!0,capture:!1},i=!o.passiveListener||{passive:!1,capture:!0},s="."+this.params.slideClass;o.gestures?(this.$wrapperEl.on("gesturestart",s,e.onGestureStart,t),this.$wrapperEl.on("gesturechange",s,e.onGestureChange,t),this.$wrapperEl.on("gestureend",s,e.onGestureEnd,t)):"touchstart"===this.touchEvents.start&&(this.$wrapperEl.on(this.touchEvents.start,s,e.onGestureStart,t),this.$wrapperEl.on(this.touchEvents.move,s,e.onGestureChange,i),this.$wrapperEl.on(this.touchEvents.end,s,e.onGestureEnd,t),this.touchEvents.cancel&&this.$wrapperEl.on(this.touchEvents.cancel,s,e.onGestureEnd,t)),this.$wrapperEl.on(this.touchEvents.move,"."+this.params.zoom.containerClass,e.onTouchMove,i)}},disable:function(){var e=this.zoom;if(e.enabled){this.zoom.enabled=!1;var t=!("touchstart"!==this.touchEvents.start||!o.passiveListener||!this.params.passiveListeners)&&{passive:!0,capture:!1},i=!o.passiveListener||{passive:!1,capture:!0},s="."+this.params.slideClass;o.gestures?(this.$wrapperEl.off("gesturestart",s,e.onGestureStart,t),this.$wrapperEl.off("gesturechange",s,e.onGestureChange,t),this.$wrapperEl.off("gestureend",s,e.onGestureEnd,t)):"touchstart"===this.touchEvents.start&&(this.$wrapperEl.off(this.touchEvents.start,s,e.onGestureStart,t),this.$wrapperEl.off(this.touchEvents.move,s,e.onGestureChange,i),this.$wrapperEl.off(this.touchEvents.end,s,e.onGestureEnd,t),this.touchEvents.cancel&&this.$wrapperEl.off(this.touchEvents.cancel,s,e.onGestureEnd,t)),this.$wrapperEl.off(this.touchEvents.move,"."+this.params.zoom.containerClass,e.onTouchMove,i)}}},le={loadInSlide:function(e,t){void 0===t&&(t=!0);var i=this,a=i.params.lazy;if(void 0!==e&&0!==i.slides.length){var r=i.virtual&&i.params.virtual.enabled?i.$wrapperEl.children("."+i.params.slideClass+'[data-swiper-slide-index="'+e+'"]'):i.slides.eq(e),n=r.find("."+a.elementClass+":not(."+a.loadedClass+"):not(."+a.loadingClass+")");!r.hasClass(a.elementClass)||r.hasClass(a.loadedClass)||r.hasClass(a.loadingClass)||(n=n.add(r[0])),0!==n.length&&n.each((function(e,n){var o=s(n);o.addClass(a.loadingClass);var l=o.attr("data-background"),d=o.attr("data-src"),h=o.attr("data-srcset"),p=o.attr("data-sizes");i.loadImage(o[0],d||l,h,p,!1,(function(){if(null!=i&&i&&(!i||i.params)&&!i.destroyed){if(l?(o.css("background-image",'url("'+l+'")'),o.removeAttr("data-background")):(h&&(o.attr("srcset",h),o.removeAttr("data-srcset")),p&&(o.attr("sizes",p),o.removeAttr("data-sizes")),d&&(o.attr("src",d),o.removeAttr("data-src"))),o.addClass(a.loadedClass).removeClass(a.loadingClass),r.find("."+a.preloaderClass).remove(),i.params.loop&&t){var e=r.attr("data-swiper-slide-index");if(r.hasClass(i.params.slideDuplicateClass)){var s=i.$wrapperEl.children('[data-swiper-slide-index="'+e+'"]:not(.'+i.params.slideDuplicateClass+")");i.lazy.loadInSlide(s.index(),!1)}else{var n=i.$wrapperEl.children("."+i.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');i.lazy.loadInSlide(n.index(),!1)}}i.emit("lazyImageReady",r[0],o[0]),i.params.autoHeight&&i.updateAutoHeight()}})),i.emit("lazyImageLoad",r[0],o[0])}))}},load:function(){var e=this,t=e.$wrapperEl,i=e.params,a=e.slides,r=e.activeIndex,n=e.virtual&&i.virtual.enabled,o=i.lazy,l=i.slidesPerView;function d(e){if(n){if(t.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]').length)return!0}else if(a[e])return!0;return!1}function h(e){return n?s(e).attr("data-swiper-slide-index"):s(e).index()}if("auto"===l&&(l=0),e.lazy.initialImageLoaded||(e.lazy.initialImageLoaded=!0),e.params.watchSlidesVisibility)t.children("."+i.slideVisibleClass).each((function(t,i){var a=n?s(i).attr("data-swiper-slide-index"):s(i).index();e.lazy.loadInSlide(a)}));else if(l>1)for(var p=r;p<r+l;p+=1)d(p)&&e.lazy.loadInSlide(p);else e.lazy.loadInSlide(r);if(o.loadPrevNext)if(l>1||o.loadPrevNextAmount&&o.loadPrevNextAmount>1){for(var c=o.loadPrevNextAmount,u=l,v=Math.min(r+u+Math.max(c,u),a.length),f=Math.max(r-Math.max(u,c),0),m=r+l;m<v;m+=1)d(m)&&e.lazy.loadInSlide(m);for(var g=f;g<r;g+=1)d(g)&&e.lazy.loadInSlide(g)}else{var b=t.children("."+i.slideNextClass);b.length>0&&e.lazy.loadInSlide(h(b));var w=t.children("."+i.slidePrevClass);w.length>0&&e.lazy.loadInSlide(h(w))}}},de={LinearSpline:function(e,t){var i,s,a,r,n,o=function(e,t){for(s=-1,i=e.length;i-s>1;)e[a=i+s>>1]<=t?s=a:i=a;return i};return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(n=o(this.x,e),r=n-1,(e-this.x[r])*(this.y[n]-this.y[r])/(this.x[n]-this.x[r])+this.y[r]):0},this},getInterpolateFunction:function(e){this.controller.spline||(this.controller.spline=this.params.loop?new de.LinearSpline(this.slidesGrid,e.slidesGrid):new de.LinearSpline(this.snapGrid,e.snapGrid))},setTranslate:function(e,t){var i,s,a=this,r=a.controller.control;function n(e){var t=a.rtlTranslate?-a.translate:a.translate;"slide"===a.params.controller.by&&(a.controller.getInterpolateFunction(e),s=-a.controller.spline.interpolate(-t)),s&&"container"!==a.params.controller.by||(i=(e.maxTranslate()-e.minTranslate())/(a.maxTranslate()-a.minTranslate()),s=(t-a.minTranslate())*i+e.minTranslate()),a.params.controller.inverse&&(s=e.maxTranslate()-s),e.updateProgress(s),e.setTranslate(s,a),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(r))for(var o=0;o<r.length;o+=1)r[o]!==t&&r[o]instanceof W&&n(r[o]);else r instanceof W&&t!==r&&n(r)},setTransition:function(e,t){var i,s=this,a=s.controller.control;function r(t){t.setTransition(e,s),0!==e&&(t.transitionStart(),t.params.autoHeight&&n.nextTick((function(){t.updateAutoHeight()})),t.$wrapperEl.transitionEnd((function(){a&&(t.params.loop&&"slide"===s.params.controller.by&&t.loopFix(),t.transitionEnd())})))}if(Array.isArray(a))for(i=0;i<a.length;i+=1)a[i]!==t&&a[i]instanceof W&&r(a[i]);else a instanceof W&&t!==a&&r(a)}},he={makeElFocusable:function(e){return e.attr("tabIndex","0"),e},addElRole:function(e,t){return e.attr("role",t),e},addElLabel:function(e,t){return e.attr("aria-label",t),e},disableEl:function(e){return e.attr("aria-disabled",!0),e},enableEl:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){var t=this.params.a11y;if(13===e.keyCode){var i=s(e.target);this.navigation&&this.navigation.$nextEl&&i.is(this.navigation.$nextEl)&&(this.isEnd&&!this.params.loop||this.slideNext(),this.isEnd?this.a11y.notify(t.lastSlideMessage):this.a11y.notify(t.nextSlideMessage)),this.navigation&&this.navigation.$prevEl&&i.is(this.navigation.$prevEl)&&(this.isBeginning&&!this.params.loop||this.slidePrev(),this.isBeginning?this.a11y.notify(t.firstSlideMessage):this.a11y.notify(t.prevSlideMessage)),this.pagination&&i.is("."+this.params.pagination.bulletClass)&&i[0].click()}},notify:function(e){var t=this.a11y.liveRegion;0!==t.length&&(t.html(""),t.html(e))},updateNavigation:function(){if(!this.params.loop&&this.navigation){var e=this.navigation,t=e.$nextEl,i=e.$prevEl;i&&i.length>0&&(this.isBeginning?this.a11y.disableEl(i):this.a11y.enableEl(i)),t&&t.length>0&&(this.isEnd?this.a11y.disableEl(t):this.a11y.enableEl(t))}},updatePagination:function(){var e=this,t=e.params.a11y;e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.bullets.each((function(i,a){var r=s(a);e.a11y.makeElFocusable(r),e.a11y.addElRole(r,"button"),e.a11y.addElLabel(r,t.paginationBulletMessage.replace(/{{index}}/,r.index()+1))}))},init:function(){this.$el.append(this.a11y.liveRegion);var e,t,i=this.params.a11y;this.navigation&&this.navigation.$nextEl&&(e=this.navigation.$nextEl),this.navigation&&this.navigation.$prevEl&&(t=this.navigation.$prevEl),e&&(this.a11y.makeElFocusable(e),this.a11y.addElRole(e,"button"),this.a11y.addElLabel(e,i.nextSlideMessage),e.on("keydown",this.a11y.onEnterKey)),t&&(this.a11y.makeElFocusable(t),this.a11y.addElRole(t,"button"),this.a11y.addElLabel(t,i.prevSlideMessage),t.on("keydown",this.a11y.onEnterKey)),this.pagination&&this.params.pagination.clickable&&this.pagination.bullets&&this.pagination.bullets.length&&this.pagination.$el.on("keydown","."+this.params.pagination.bulletClass,this.a11y.onEnterKey)},destroy:function(){var e,t;this.a11y.liveRegion&&this.a11y.liveRegion.length>0&&this.a11y.liveRegion.remove(),this.navigation&&this.navigation.$nextEl&&(e=this.navigation.$nextEl),this.navigation&&this.navigation.$prevEl&&(t=this.navigation.$prevEl),e&&e.off("keydown",this.a11y.onEnterKey),t&&t.off("keydown",this.a11y.onEnterKey),this.pagination&&this.params.pagination.clickable&&this.pagination.bullets&&this.pagination.bullets.length&&this.pagination.$el.off("keydown","."+this.params.pagination.bulletClass,this.a11y.onEnterKey)}},pe={init:function(){if(this.params.history){if(!t.history||!t.history.pushState)return this.params.history.enabled=!1,void(this.params.hashNavigation.enabled=!0);var e=this.history;e.initialized=!0,e.paths=pe.getPathValues(),(e.paths.key||e.paths.value)&&(e.scrollToSlide(0,e.paths.value,this.params.runCallbacksOnInit),this.params.history.replaceState||t.addEventListener("popstate",this.history.setHistoryPopState))}},destroy:function(){this.params.history.replaceState||t.removeEventListener("popstate",this.history.setHistoryPopState)},setHistoryPopState:function(){this.history.paths=pe.getPathValues(),this.history.scrollToSlide(this.params.speed,this.history.paths.value,!1)},getPathValues:function(){var e=t.location.pathname.slice(1).split("/").filter((function(e){return""!==e})),i=e.length;return{key:e[i-2],value:e[i-1]}},setHistory:function(e,i){if(this.history.initialized&&this.params.history.enabled){var s=this.slides.eq(i),a=pe.slugify(s.attr("data-history"));t.location.pathname.includes(e)||(a=e+"/"+a);var r=t.history.state;r&&r.value===a||(this.params.history.replaceState?t.history.replaceState({value:a},null,a):t.history.pushState({value:a},null,a))}},slugify:function(e){return e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,t,i){if(t)for(var s=0,a=this.slides.length;s<a;s+=1){var r=this.slides.eq(s);if(pe.slugify(r.attr("data-history"))===t&&!r.hasClass(this.params.slideDuplicateClass)){var n=r.index();this.slideTo(n,e,i)}}else this.slideTo(0,e,i)}},ce={onHashCange:function(){var t=e.location.hash.replace("#","");if(t!==this.slides.eq(this.activeIndex).attr("data-hash")){var i=this.$wrapperEl.children("."+this.params.slideClass+'[data-hash="'+t+'"]').index();if(void 0===i)return;this.slideTo(i)}},setHash:function(){if(this.hashNavigation.initialized&&this.params.hashNavigation.enabled)if(this.params.hashNavigation.replaceState&&t.history&&t.history.replaceState)t.history.replaceState(null,null,"#"+this.slides.eq(this.activeIndex).attr("data-hash")||"");else{var i=this.slides.eq(this.activeIndex),s=i.attr("data-hash")||i.attr("data-history");e.location.hash=s||""}},init:function(){if(!(!this.params.hashNavigation.enabled||this.params.history&&this.params.history.enabled)){this.hashNavigation.initialized=!0;var i=e.location.hash.replace("#","");if(i)for(var a=0,r=this.slides.length;a<r;a+=1){var n=this.slides.eq(a);if((n.attr("data-hash")||n.attr("data-history"))===i&&!n.hasClass(this.params.slideDuplicateClass)){var o=n.index();this.slideTo(o,0,this.params.runCallbacksOnInit,!0)}}this.params.hashNavigation.watchState&&s(t).on("hashchange",this.hashNavigation.onHashCange)}},destroy:function(){this.params.hashNavigation.watchState&&s(t).off("hashchange",this.hashNavigation.onHashCange)}},ue={run:function(){var e=this,t=e.slides.eq(e.activeIndex),i=e.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(i=t.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(e.autoplay.timeout),e.autoplay.timeout=n.nextTick((function(){e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(e.slides.length-1,e.params.speed,!0,!0),e.emit("autoplay")):(e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.params.loop?(e.loopFix(),e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(0,e.params.speed,!0,!0),e.emit("autoplay")):(e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")),e.params.cssMode&&e.autoplay.running&&e.autoplay.run()}),i)},start:function(){return void 0===this.autoplay.timeout&&(!this.autoplay.running&&(this.autoplay.running=!0,this.emit("autoplayStart"),this.autoplay.run(),!0))},stop:function(){return!!this.autoplay.running&&(void 0!==this.autoplay.timeout&&(this.autoplay.timeout&&(clearTimeout(this.autoplay.timeout),this.autoplay.timeout=void 0),this.autoplay.running=!1,this.emit("autoplayStop"),!0))},pause:function(e){this.autoplay.running&&(this.autoplay.paused||(this.autoplay.timeout&&clearTimeout(this.autoplay.timeout),this.autoplay.paused=!0,0!==e&&this.params.autoplay.waitForTransition?(this.$wrapperEl[0].addEventListener("transitionend",this.autoplay.onTransitionEnd),this.$wrapperEl[0].addEventListener("webkitTransitionEnd",this.autoplay.onTransitionEnd)):(this.autoplay.paused=!1,this.autoplay.run())))}},ve={setTranslate:function(){for(var e=this.slides,t=0;t<e.length;t+=1){var i=this.slides.eq(t),s=-i[0].swiperSlideOffset;this.params.virtualTranslate||(s-=this.translate);var a=0;this.isHorizontal()||(a=s,s=0);var r=this.params.fadeEffect.crossFade?Math.max(1-Math.abs(i[0].progress),0):1+Math.min(Math.max(i[0].progress,-1),0);i.css({opacity:r}).transform("translate3d("+s+"px, "+a+"px, 0px)")}},setTransition:function(e){var t=this,i=t.slides,s=t.$wrapperEl;if(i.transition(e),t.params.virtualTranslate&&0!==e){var a=!1;i.transitionEnd((function(){if(!a&&t&&!t.destroyed){a=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],i=0;i<e.length;i+=1)s.trigger(e[i])}}))}}},fe={setTranslate:function(){var e,t=this.$el,i=this.$wrapperEl,a=this.slides,r=this.width,n=this.height,o=this.rtlTranslate,l=this.size,d=this.params.cubeEffect,h=this.isHorizontal(),p=this.virtual&&this.params.virtual.enabled,c=0;d.shadow&&(h?(0===(e=i.find(".swiper-cube-shadow")).length&&(e=s('<div class="swiper-cube-shadow"></div>'),i.append(e)),e.css({height:r+"px"})):0===(e=t.find(".swiper-cube-shadow")).length&&(e=s('<div class="swiper-cube-shadow"></div>'),t.append(e)));for(var u=0;u<a.length;u+=1){var v=a.eq(u),f=u;p&&(f=parseInt(v.attr("data-swiper-slide-index"),10));var m=90*f,g=Math.floor(m/360);o&&(m=-m,g=Math.floor(-m/360));var b=Math.max(Math.min(v[0].progress,1),-1),w=0,y=0,x=0;f%4==0?(w=4*-g*l,x=0):(f-1)%4==0?(w=0,x=4*-g*l):(f-2)%4==0?(w=l+4*g*l,x=l):(f-3)%4==0&&(w=-l,x=3*l+4*l*g),o&&(w=-w),h||(y=w,w=0);var T="rotateX("+(h?0:-m)+"deg) rotateY("+(h?m:0)+"deg) translate3d("+w+"px, "+y+"px, "+x+"px)";if(b<=1&&b>-1&&(c=90*f+90*b,o&&(c=90*-f-90*b)),v.transform(T),d.slideShadows){var E=h?v.find(".swiper-slide-shadow-left"):v.find(".swiper-slide-shadow-top"),S=h?v.find(".swiper-slide-shadow-right"):v.find(".swiper-slide-shadow-bottom");0===E.length&&(E=s('<div class="swiper-slide-shadow-'+(h?"left":"top")+'"></div>'),v.append(E)),0===S.length&&(S=s('<div class="swiper-slide-shadow-'+(h?"right":"bottom")+'"></div>'),v.append(S)),E.length&&(E[0].style.opacity=Math.max(-b,0)),S.length&&(S[0].style.opacity=Math.max(b,0))}}if(i.css({"-webkit-transform-origin":"50% 50% -"+l/2+"px","-moz-transform-origin":"50% 50% -"+l/2+"px","-ms-transform-origin":"50% 50% -"+l/2+"px","transform-origin":"50% 50% -"+l/2+"px"}),d.shadow)if(h)e.transform("translate3d(0px, "+(r/2+d.shadowOffset)+"px, "+-r/2+"px) rotateX(90deg) rotateZ(0deg) scale("+d.shadowScale+")");else{var C=Math.abs(c)-90*Math.floor(Math.abs(c)/90),M=1.5-(Math.sin(2*C*Math.PI/360)/2+Math.cos(2*C*Math.PI/360)/2),P=d.shadowScale,z=d.shadowScale/M,k=d.shadowOffset;e.transform("scale3d("+P+", 1, "+z+") translate3d(0px, "+(n/2+k)+"px, "+-n/2/z+"px) rotateX(-90deg)")}var $=j.isSafari||j.isUiWebView?-l/2:0;i.transform("translate3d(0px,0,"+$+"px) rotateX("+(this.isHorizontal()?0:c)+"deg) rotateY("+(this.isHorizontal()?-c:0)+"deg)")},setTransition:function(e){var t=this.$el;this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),this.params.cubeEffect.shadow&&!this.isHorizontal()&&t.find(".swiper-cube-shadow").transition(e)}},me={setTranslate:function(){for(var e=this.slides,t=this.rtlTranslate,i=0;i<e.length;i+=1){var a=e.eq(i),r=a[0].progress;this.params.flipEffect.limitRotation&&(r=Math.max(Math.min(a[0].progress,1),-1));var n=-180*r,o=0,l=-a[0].swiperSlideOffset,d=0;if(this.isHorizontal()?t&&(n=-n):(d=l,l=0,o=-n,n=0),a[0].style.zIndex=-Math.abs(Math.round(r))+e.length,this.params.flipEffect.slideShadows){var h=this.isHorizontal()?a.find(".swiper-slide-shadow-left"):a.find(".swiper-slide-shadow-top"),p=this.isHorizontal()?a.find(".swiper-slide-shadow-right"):a.find(".swiper-slide-shadow-bottom");0===h.length&&(h=s('<div class="swiper-slide-shadow-'+(this.isHorizontal()?"left":"top")+'"></div>'),a.append(h)),0===p.length&&(p=s('<div class="swiper-slide-shadow-'+(this.isHorizontal()?"right":"bottom")+'"></div>'),a.append(p)),h.length&&(h[0].style.opacity=Math.max(-r,0)),p.length&&(p[0].style.opacity=Math.max(r,0))}a.transform("translate3d("+l+"px, "+d+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(e){var t=this,i=t.slides,s=t.activeIndex,a=t.$wrapperEl;if(i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),t.params.virtualTranslate&&0!==e){var r=!1;i.eq(s).transitionEnd((function(){if(!r&&t&&!t.destroyed){r=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],i=0;i<e.length;i+=1)a.trigger(e[i])}}))}}},ge={setTranslate:function(){for(var e=this.width,t=this.height,i=this.slides,a=this.$wrapperEl,r=this.slidesSizesGrid,n=this.params.coverflowEffect,l=this.isHorizontal(),d=this.translate,h=l?e/2-d:t/2-d,p=l?n.rotate:-n.rotate,c=n.depth,u=0,v=i.length;u<v;u+=1){var f=i.eq(u),m=r[u],g=(h-f[0].swiperSlideOffset-m/2)/m*n.modifier,b=l?p*g:0,w=l?0:p*g,y=-c*Math.abs(g),x=n.stretch;"string"==typeof x&&-1!==x.indexOf("%")&&(x=parseFloat(n.stretch)/100*m);var T=l?0:x*g,E=l?x*g:0;Math.abs(E)<.001&&(E=0),Math.abs(T)<.001&&(T=0),Math.abs(y)<.001&&(y=0),Math.abs(b)<.001&&(b=0),Math.abs(w)<.001&&(w=0);var S="translate3d("+E+"px,"+T+"px,"+y+"px)  rotateX("+w+"deg) rotateY("+b+"deg)";if(f.transform(S),f[0].style.zIndex=1-Math.abs(Math.round(g)),n.slideShadows){var C=l?f.find(".swiper-slide-shadow-left"):f.find(".swiper-slide-shadow-top"),M=l?f.find(".swiper-slide-shadow-right"):f.find(".swiper-slide-shadow-bottom");0===C.length&&(C=s('<div class="swiper-slide-shadow-'+(l?"left":"top")+'"></div>'),f.append(C)),0===M.length&&(M=s('<div class="swiper-slide-shadow-'+(l?"right":"bottom")+'"></div>'),f.append(M)),C.length&&(C[0].style.opacity=g>0?g:0),M.length&&(M[0].style.opacity=-g>0?-g:0)}}(o.pointerEvents||o.prefixedPointerEvents)&&(a[0].style.perspectiveOrigin=h+"px 50%")},setTransition:function(e){this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}},be={init:function(){var e=this.params.thumbs,t=this.constructor;e.swiper instanceof t?(this.thumbs.swiper=e.swiper,n.extend(this.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),n.extend(this.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1})):n.isObject(e.swiper)&&(this.thumbs.swiper=new t(n.extend({},e.swiper,{watchSlidesVisibility:!0,watchSlidesProgress:!0,slideToClickedSlide:!1})),this.thumbs.swiperCreated=!0),this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass),this.thumbs.swiper.on("tap",this.thumbs.onThumbClick)},onThumbClick:function(){var e=this.thumbs.swiper;if(e){var t=e.clickedIndex,i=e.clickedSlide;if(!(i&&s(i).hasClass(this.params.thumbs.slideThumbActiveClass)||null==t)){var a;if(a=e.params.loop?parseInt(s(e.clickedSlide).attr("data-swiper-slide-index"),10):t,this.params.loop){var r=this.activeIndex;this.slides.eq(r).hasClass(this.params.slideDuplicateClass)&&(this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft,r=this.activeIndex);var n=this.slides.eq(r).prevAll('[data-swiper-slide-index="'+a+'"]').eq(0).index(),o=this.slides.eq(r).nextAll('[data-swiper-slide-index="'+a+'"]').eq(0).index();a=void 0===n?o:void 0===o?n:o-r<r-n?o:n}this.slideTo(a)}}},update:function(e){var t=this.thumbs.swiper;if(t){var i="auto"===t.params.slidesPerView?t.slidesPerViewDynamic():t.params.slidesPerView;if(this.realIndex!==t.realIndex){var s,a=t.activeIndex;if(t.params.loop){t.slides.eq(a).hasClass(t.params.slideDuplicateClass)&&(t.loopFix(),t._clientLeft=t.$wrapperEl[0].clientLeft,a=t.activeIndex);var r=t.slides.eq(a).prevAll('[data-swiper-slide-index="'+this.realIndex+'"]').eq(0).index(),n=t.slides.eq(a).nextAll('[data-swiper-slide-index="'+this.realIndex+'"]').eq(0).index();s=void 0===r?n:void 0===n?r:n-a==a-r?a:n-a<a-r?n:r}else s=this.realIndex;t.visibleSlidesIndexes&&t.visibleSlidesIndexes.indexOf(s)<0&&(t.params.centeredSlides?s=s>a?s-Math.floor(i/2)+1:s+Math.floor(i/2)-1:s>a&&(s=s-i+1),t.slideTo(s,e?0:void 0))}var o=1,l=this.params.thumbs.slideThumbActiveClass;if(this.params.slidesPerView>1&&!this.params.centeredSlides&&(o=this.params.slidesPerView),this.params.thumbs.multipleActiveThumbs||(o=1),o=Math.floor(o),t.slides.removeClass(l),t.params.loop||t.params.virtual&&t.params.virtual.enabled)for(var d=0;d<o;d+=1)t.$wrapperEl.children('[data-swiper-slide-index="'+(this.realIndex+d)+'"]').addClass(l);else for(var h=0;h<o;h+=1)t.slides.eq(this.realIndex+h).addClass(l)}}},we=[R,q,K,U,Z,J,te,{name:"mousewheel",params:{mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarged:"container"}},create:function(){n.extend(this,{mousewheel:{enabled:!1,enable:ie.enable.bind(this),disable:ie.disable.bind(this),handle:ie.handle.bind(this),handleMouseEnter:ie.handleMouseEnter.bind(this),handleMouseLeave:ie.handleMouseLeave.bind(this),animateSlider:ie.animateSlider.bind(this),releaseScroll:ie.releaseScroll.bind(this),lastScrollTime:n.now(),lastEventBeforeSnap:void 0,recentWheelEvents:[]}})},on:{init:function(){!this.params.mousewheel.enabled&&this.params.cssMode&&this.mousewheel.disable(),this.params.mousewheel.enabled&&this.mousewheel.enable()},destroy:function(){this.params.cssMode&&this.mousewheel.enable(),this.mousewheel.enabled&&this.mousewheel.disable()}}},{name:"navigation",params:{navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}},create:function(){n.extend(this,{navigation:{init:se.init.bind(this),update:se.update.bind(this),destroy:se.destroy.bind(this),onNextClick:se.onNextClick.bind(this),onPrevClick:se.onPrevClick.bind(this)}})},on:{init:function(){this.navigation.init(),this.navigation.update()},toEdge:function(){this.navigation.update()},fromEdge:function(){this.navigation.update()},destroy:function(){this.navigation.destroy()},click:function(e){var t,i=this.navigation,a=i.$nextEl,r=i.$prevEl;!this.params.navigation.hideOnClick||s(e.target).is(r)||s(e.target).is(a)||(a?t=a.hasClass(this.params.navigation.hiddenClass):r&&(t=r.hasClass(this.params.navigation.hiddenClass)),!0===t?this.emit("navigationShow",this):this.emit("navigationHide",this),a&&a.toggleClass(this.params.navigation.hiddenClass),r&&r.toggleClass(this.params.navigation.hiddenClass))}}},{name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:function(e){return e},formatFractionTotal:function(e){return e},bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",progressbarOppositeClass:"swiper-pagination-progressbar-opposite",clickableClass:"swiper-pagination-clickable",lockClass:"swiper-pagination-lock"}},create:function(){n.extend(this,{pagination:{init:ae.init.bind(this),render:ae.render.bind(this),update:ae.update.bind(this),destroy:ae.destroy.bind(this),dynamicBulletIndex:0}})},on:{init:function(){this.pagination.init(),this.pagination.render(),this.pagination.update()},activeIndexChange:function(){this.params.loop?this.pagination.update():void 0===this.snapIndex&&this.pagination.update()},snapIndexChange:function(){this.params.loop||this.pagination.update()},slidesLengthChange:function(){this.params.loop&&(this.pagination.render(),this.pagination.update())},snapGridLengthChange:function(){this.params.loop||(this.pagination.render(),this.pagination.update())},destroy:function(){this.pagination.destroy()},click:function(e){this.params.pagination.el&&this.params.pagination.hideOnClick&&this.pagination.$el.length>0&&!s(e.target).hasClass(this.params.pagination.bulletClass)&&(!0===this.pagination.$el.hasClass(this.params.pagination.hiddenClass)?this.emit("paginationShow",this):this.emit("paginationHide",this),this.pagination.$el.toggleClass(this.params.pagination.hiddenClass))}}},{name:"scrollbar",params:{scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag"}},create:function(){n.extend(this,{scrollbar:{init:re.init.bind(this),destroy:re.destroy.bind(this),updateSize:re.updateSize.bind(this),setTranslate:re.setTranslate.bind(this),setTransition:re.setTransition.bind(this),enableDraggable:re.enableDraggable.bind(this),disableDraggable:re.disableDraggable.bind(this),setDragPosition:re.setDragPosition.bind(this),getPointerPosition:re.getPointerPosition.bind(this),onDragStart:re.onDragStart.bind(this),onDragMove:re.onDragMove.bind(this),onDragEnd:re.onDragEnd.bind(this),isTouched:!1,timeout:null,dragTimeout:null}})},on:{init:function(){this.scrollbar.init(),this.scrollbar.updateSize(),this.scrollbar.setTranslate()},update:function(){this.scrollbar.updateSize()},resize:function(){this.scrollbar.updateSize()},observerUpdate:function(){this.scrollbar.updateSize()},setTranslate:function(){this.scrollbar.setTranslate()},setTransition:function(e){this.scrollbar.setTransition(e)},destroy:function(){this.scrollbar.destroy()}}},{name:"parallax",params:{parallax:{enabled:!1}},create:function(){n.extend(this,{parallax:{setTransform:ne.setTransform.bind(this),setTranslate:ne.setTranslate.bind(this),setTransition:ne.setTransition.bind(this)}})},on:{beforeInit:function(){this.params.parallax.enabled&&(this.params.watchSlidesProgress=!0,this.originalParams.watchSlidesProgress=!0)},init:function(){this.params.parallax.enabled&&this.parallax.setTranslate()},setTranslate:function(){this.params.parallax.enabled&&this.parallax.setTranslate()},setTransition:function(e){this.params.parallax.enabled&&this.parallax.setTransition(e)}}},{name:"zoom",params:{zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}},create:function(){var e=this,t={enabled:!1,scale:1,currentScale:1,isScaling:!1,gesture:{$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0}};"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach((function(i){t[i]=oe[i].bind(e)})),n.extend(e,{zoom:t});var i=1;Object.defineProperty(e.zoom,"scale",{get:function(){return i},set:function(t){if(i!==t){var s=e.zoom.gesture.$imageEl?e.zoom.gesture.$imageEl[0]:void 0,a=e.zoom.gesture.$slideEl?e.zoom.gesture.$slideEl[0]:void 0;e.emit("zoomChange",t,s,a)}i=t}})},on:{init:function(){this.params.zoom.enabled&&this.zoom.enable()},destroy:function(){this.zoom.disable()},touchStart:function(e){this.zoom.enabled&&this.zoom.onTouchStart(e)},touchEnd:function(e){this.zoom.enabled&&this.zoom.onTouchEnd(e)},doubleTap:function(e){this.params.zoom.enabled&&this.zoom.enabled&&this.params.zoom.toggle&&this.zoom.toggle(e)},transitionEnd:function(){this.zoom.enabled&&this.params.zoom.enabled&&this.zoom.onTransitionEnd()},slideChange:function(){this.zoom.enabled&&this.params.zoom.enabled&&this.params.cssMode&&this.zoom.onTransitionEnd()}}},{name:"lazy",params:{lazy:{enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}},create:function(){n.extend(this,{lazy:{initialImageLoaded:!1,load:le.load.bind(this),loadInSlide:le.loadInSlide.bind(this)}})},on:{beforeInit:function(){this.params.lazy.enabled&&this.params.preloadImages&&(this.params.preloadImages=!1)},init:function(){this.params.lazy.enabled&&!this.params.loop&&0===this.params.initialSlide&&this.lazy.load()},scroll:function(){this.params.freeMode&&!this.params.freeModeSticky&&this.lazy.load()},resize:function(){this.params.lazy.enabled&&this.lazy.load()},scrollbarDragMove:function(){this.params.lazy.enabled&&this.lazy.load()},transitionStart:function(){this.params.lazy.enabled&&(this.params.lazy.loadOnTransitionStart||!this.params.lazy.loadOnTransitionStart&&!this.lazy.initialImageLoaded)&&this.lazy.load()},transitionEnd:function(){this.params.lazy.enabled&&!this.params.lazy.loadOnTransitionStart&&this.lazy.load()},slideChange:function(){this.params.lazy.enabled&&this.params.cssMode&&this.lazy.load()}}},{name:"controller",params:{controller:{control:void 0,inverse:!1,by:"slide"}},create:function(){n.extend(this,{controller:{control:this.params.controller.control,getInterpolateFunction:de.getInterpolateFunction.bind(this),setTranslate:de.setTranslate.bind(this),setTransition:de.setTransition.bind(this)}})},on:{update:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},resize:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},observerUpdate:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},setTranslate:function(e,t){this.controller.control&&this.controller.setTranslate(e,t)},setTransition:function(e,t){this.controller.control&&this.controller.setTransition(e,t)}}},{name:"a11y",params:{a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}"}},create:function(){var e=this;n.extend(e,{a11y:{liveRegion:s('<span class="'+e.params.a11y.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>')}}),Object.keys(he).forEach((function(t){e.a11y[t]=he[t].bind(e)}))},on:{init:function(){this.params.a11y.enabled&&(this.a11y.init(),this.a11y.updateNavigation())},toEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},fromEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},paginationUpdate:function(){this.params.a11y.enabled&&this.a11y.updatePagination()},destroy:function(){this.params.a11y.enabled&&this.a11y.destroy()}}},{name:"history",params:{history:{enabled:!1,replaceState:!1,key:"slides"}},create:function(){n.extend(this,{history:{init:pe.init.bind(this),setHistory:pe.setHistory.bind(this),setHistoryPopState:pe.setHistoryPopState.bind(this),scrollToSlide:pe.scrollToSlide.bind(this),destroy:pe.destroy.bind(this)}})},on:{init:function(){this.params.history.enabled&&this.history.init()},destroy:function(){this.params.history.enabled&&this.history.destroy()},transitionEnd:function(){this.history.initialized&&this.history.setHistory(this.params.history.key,this.activeIndex)},slideChange:function(){this.history.initialized&&this.params.cssMode&&this.history.setHistory(this.params.history.key,this.activeIndex)}}},{name:"hash-navigation",params:{hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}},create:function(){n.extend(this,{hashNavigation:{initialized:!1,init:ce.init.bind(this),destroy:ce.destroy.bind(this),setHash:ce.setHash.bind(this),onHashCange:ce.onHashCange.bind(this)}})},on:{init:function(){this.params.hashNavigation.enabled&&this.hashNavigation.init()},destroy:function(){this.params.hashNavigation.enabled&&this.hashNavigation.destroy()},transitionEnd:function(){this.hashNavigation.initialized&&this.hashNavigation.setHash()},slideChange:function(){this.hashNavigation.initialized&&this.params.cssMode&&this.hashNavigation.setHash()}}},{name:"autoplay",params:{autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1}},create:function(){var e=this;n.extend(e,{autoplay:{running:!1,paused:!1,run:ue.run.bind(e),start:ue.start.bind(e),stop:ue.stop.bind(e),pause:ue.pause.bind(e),onVisibilityChange:function(){"hidden"===document.visibilityState&&e.autoplay.running&&e.autoplay.pause(),"visible"===document.visibilityState&&e.autoplay.paused&&(e.autoplay.run(),e.autoplay.paused=!1)},onTransitionEnd:function(t){e&&!e.destroyed&&e.$wrapperEl&&t.target===this&&(e.$wrapperEl[0].removeEventListener("transitionend",e.autoplay.onTransitionEnd),e.$wrapperEl[0].removeEventListener("webkitTransitionEnd",e.autoplay.onTransitionEnd),e.autoplay.paused=!1,e.autoplay.running?e.autoplay.run():e.autoplay.stop())}}})},on:{init:function(){this.params.autoplay.enabled&&(this.autoplay.start(),document.addEventListener("visibilitychange",this.autoplay.onVisibilityChange))},beforeTransitionStart:function(e,t){this.autoplay.running&&(t||!this.params.autoplay.disableOnInteraction?this.autoplay.pause(e):this.autoplay.stop())},sliderFirstMove:function(){this.autoplay.running&&(this.params.autoplay.disableOnInteraction?this.autoplay.stop():this.autoplay.pause())},touchEnd:function(){this.params.cssMode&&this.autoplay.paused&&!this.params.autoplay.disableOnInteraction&&this.autoplay.run()},destroy:function(){this.autoplay.running&&this.autoplay.stop(),document.removeEventListener("visibilitychange",this.autoplay.onVisibilityChange)}}},{name:"effect-fade",params:{fadeEffect:{crossFade:!1}},create:function(){n.extend(this,{fadeEffect:{setTranslate:ve.setTranslate.bind(this),setTransition:ve.setTransition.bind(this)}})},on:{beforeInit:function(){if("fade"===this.params.effect){this.classNames.push(this.params.containerModifierClass+"fade");var e={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};n.extend(this.params,e),n.extend(this.originalParams,e)}},setTranslate:function(){"fade"===this.params.effect&&this.fadeEffect.setTranslate()},setTransition:function(e){"fade"===this.params.effect&&this.fadeEffect.setTransition(e)}}},{name:"effect-cube",params:{cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}},create:function(){n.extend(this,{cubeEffect:{setTranslate:fe.setTranslate.bind(this),setTransition:fe.setTransition.bind(this)}})},on:{beforeInit:function(){if("cube"===this.params.effect){this.classNames.push(this.params.containerModifierClass+"cube"),this.classNames.push(this.params.containerModifierClass+"3d");var e={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0};n.extend(this.params,e),n.extend(this.originalParams,e)}},setTranslate:function(){"cube"===this.params.effect&&this.cubeEffect.setTranslate()},setTransition:function(e){"cube"===this.params.effect&&this.cubeEffect.setTransition(e)}}},{name:"effect-flip",params:{flipEffect:{slideShadows:!0,limitRotation:!0}},create:function(){n.extend(this,{flipEffect:{setTranslate:me.setTranslate.bind(this),setTransition:me.setTransition.bind(this)}})},on:{beforeInit:function(){if("flip"===this.params.effect){this.classNames.push(this.params.containerModifierClass+"flip"),this.classNames.push(this.params.containerModifierClass+"3d");var e={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};n.extend(this.params,e),n.extend(this.originalParams,e)}},setTranslate:function(){"flip"===this.params.effect&&this.flipEffect.setTranslate()},setTransition:function(e){"flip"===this.params.effect&&this.flipEffect.setTransition(e)}}},{name:"effect-coverflow",params:{coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}},create:function(){n.extend(this,{coverflowEffect:{setTranslate:ge.setTranslate.bind(this),setTransition:ge.setTransition.bind(this)}})},on:{beforeInit:function(){"coverflow"===this.params.effect&&(this.classNames.push(this.params.containerModifierClass+"coverflow"),this.classNames.push(this.params.containerModifierClass+"3d"),this.params.watchSlidesProgress=!0,this.originalParams.watchSlidesProgress=!0)},setTranslate:function(){"coverflow"===this.params.effect&&this.coverflowEffect.setTranslate()},setTransition:function(e){"coverflow"===this.params.effect&&this.coverflowEffect.setTransition(e)}}},{name:"thumbs",params:{thumbs:{multipleActiveThumbs:!0,swiper:null,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-container-thumbs"}},create:function(){n.extend(this,{thumbs:{swiper:null,init:be.init.bind(this),update:be.update.bind(this),onThumbClick:be.onThumbClick.bind(this)}})},on:{beforeInit:function(){var e=this.params.thumbs;e&&e.swiper&&(this.thumbs.init(),this.thumbs.update(!0))},slideChange:function(){this.thumbs.swiper&&this.thumbs.update()},update:function(){this.thumbs.swiper&&this.thumbs.update()},resize:function(){this.thumbs.swiper&&this.thumbs.update()},observerUpdate:function(){this.thumbs.swiper&&this.thumbs.update()},setTransition:function(e){var t=this.thumbs.swiper;t&&t.setTransition(e)},beforeDestroy:function(){var e=this.thumbs.swiper;e&&this.thumbs.swiperCreated&&e&&e.destroy()}}}];return void 0===W.use&&(W.use=W.Class.use,W.installModule=W.Class.installModule),W.use(we),W}));
//# sourceMappingURL=swiper.min.js.map
(function(window, factory) {
	var lazySizes = factory(window, window.document);
	window.lazySizes = lazySizes;
	if(typeof module == 'object' && module.exports){
		module.exports = lazySizes;
	}
}(window, function l(window, document) {
	'use strict';
	/*jshint eqnull:true */
	if(!document.getElementsByClassName){return;}

	var lazysizes, lazySizesConfig;

	var docElem = document.documentElement;

	var Date = window.Date;

	var supportPicture = window.HTMLPictureElement;

	var _addEventListener = 'addEventListener';

	var _getAttribute = 'getAttribute';

	var addEventListener = window[_addEventListener];

	var setTimeout = window.setTimeout;

	var requestAnimationFrame = window.requestAnimationFrame || setTimeout;

	var requestIdleCallback = window.requestIdleCallback;

	var regPicture = /^picture$/i;

	var loadEvents = ['load', 'error', 'lazyincluded', '_lazyloaded'];

	var regClassCache = {};

	var forEach = Array.prototype.forEach;

	var hasClass = function(ele, cls) {
		if(!regClassCache[cls]){
			regClassCache[cls] = new RegExp('(\\s|^)'+cls+'(\\s|$)');
		}
		return regClassCache[cls].test(ele[_getAttribute]('class') || '') && regClassCache[cls];
	};

	var addClass = function(ele, cls) {
		if (!hasClass(ele, cls)){
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').trim() + ' ' + cls);
		}
	};

	var removeClass = function(ele, cls) {
		var reg;
		if ((reg = hasClass(ele,cls))) {
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').replace(reg, ' '));
		}
	};

	var addRemoveLoadEvents = function(dom, fn, add){
		var action = add ? _addEventListener : 'removeEventListener';
		if(add){
			addRemoveLoadEvents(dom, fn);
		}
		loadEvents.forEach(function(evt){
			dom[action](evt, fn);
		});
	};

	var triggerEvent = function(elem, name, detail, noBubbles, noCancelable){
		var event = document.createEvent('CustomEvent');

		if(!detail){
			detail = {};
		}

		detail.instance = lazysizes;

		event.initCustomEvent(name, !noBubbles, !noCancelable, detail);

		elem.dispatchEvent(event);
		return event;
	};

	var updatePolyfill = function (el, full){
		var polyfill;
		if( !supportPicture && ( polyfill = (window.picturefill || lazySizesConfig.pf) ) ){
			polyfill({reevaluate: true, elements: [el]});
		} else if(full && full.src){
			el.src = full.src;
		}
	};

	var getCSS = function (elem, style){
		return (getComputedStyle(elem, null) || {})[style];
	};

	var getWidth = function(elem, parent, width){
		width = width || elem.offsetWidth;

		while(width < lazySizesConfig.minSize && parent && !elem._lazysizesWidth){
			width =  parent.offsetWidth;
			parent = parent.parentNode;
		}

		return width;
	};

	var rAF = (function(){
		var running, waiting;
		var firstFns = [];
		var secondFns = [];
		var fns = firstFns;

		var run = function(){
			var runFns = fns;

			fns = firstFns.length ? secondFns : firstFns;

			running = true;
			waiting = false;

			while(runFns.length){
				runFns.shift()();
			}

			running = false;
		};

		var rafBatch = function(fn, queue){
			if(running && !queue){
				fn.apply(this, arguments);
			} else {
				fns.push(fn);

				if(!waiting){
					waiting = true;
					(document.hidden ? setTimeout : requestAnimationFrame)(run);
				}
			}
		};

		rafBatch._lsFlush = run;

		return rafBatch;
	})();

	var rAFIt = function(fn, simple){
		return simple ?
			function() {
				rAF(fn);
			} :
			function(){
				var that = this;
				var args = arguments;
				rAF(function(){
					fn.apply(that, args);
				});
			}
		;
	};

	var throttle = function(fn){
		var running;
		var lastTime = 0;
		var gDelay = 125;
		var rICTimeout = lazySizesConfig.ricTimeout;
		var run = function(){
			running = false;
			lastTime = Date.now();
			fn();
		};
		var idleCallback = requestIdleCallback && lazySizesConfig.ricTimeout ?
			function(){
				requestIdleCallback(run, {timeout: rICTimeout});

				if(rICTimeout !== lazySizesConfig.ricTimeout){
					rICTimeout = lazySizesConfig.ricTimeout;
				}
			} :
			rAFIt(function(){
				setTimeout(run);
			}, true)
		;

		return function(isPriority){
			var delay;

			if((isPriority = isPriority === true)){
				rICTimeout = 33;
			}

			if(running){
				return;
			}

			running =  true;

			delay = gDelay - (Date.now() - lastTime);

			if(delay < 0){
				delay = 0;
			}

			if(isPriority || (delay < 9 && requestIdleCallback)){
				idleCallback();
			} else {
				setTimeout(idleCallback, delay);
			}
		};
	};

	//based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html
	var debounce = function(func) {
		var timeout, timestamp;
		var wait = 99;
		var run = function(){
			timeout = null;
			func();
		};
		var later = function() {
			var last = Date.now() - timestamp;

			if (last < wait) {
				setTimeout(later, wait - last);
			} else {
				(requestIdleCallback || run)(run);
			}
		};

		return function() {
			timestamp = Date.now();

			if (!timeout) {
				timeout = setTimeout(later, wait);
			}
		};
	};

	(function(){
		var prop;

		var lazySizesDefaults = {
			lazyClass: 'lazyload',
			loadedClass: 'lazyloaded',
			loadingClass: 'lazyloading',
			preloadClass: 'lazypreload',
			errorClass: 'lazyerror',
			//strictClass: 'lazystrict',
			autosizesClass: 'lazyautosizes',
			srcAttr: 'data-src',
			srcsetAttr: 'data-srcset',
			sizesAttr: 'data-sizes',
			//preloadAfterLoad: false,
			minSize: 40,
			customMedia: {},
			init: true,
			expFactor: 1.5,
			hFac: 0.8,
			loadMode: 2,
			loadHidden: true,
			ricTimeout: 300,
		};

		lazySizesConfig = window.lazySizesConfig || window.lazysizesConfig || {};

		for(prop in lazySizesDefaults){
			if(!(prop in lazySizesConfig)){
				lazySizesConfig[prop] = lazySizesDefaults[prop];
			}
		}

		window.lazySizesConfig = lazySizesConfig;

		setTimeout(function(){
			if(lazySizesConfig.init){
				init();
			}
		});
	})();

	var loader = (function(){
		var preloadElems, isCompleted, resetPreloadingTimer, loadMode, started;

		var eLvW, elvH, eLtop, eLleft, eLright, eLbottom;

		var defaultExpand, preloadExpand, hFac;

		var regImg = /^img$/i;
		var regIframe = /^iframe$/i;

		var supportScroll = ('onscroll' in window) && !(/glebot/.test(navigator.userAgent));

		var shrinkExpand = 0;
		var currentExpand = 0;

		var isLoading = 0;
		var lowRuns = -1;

		var resetPreloading = function(e){
			isLoading--;
			if(e && e.target){
				addRemoveLoadEvents(e.target, resetPreloading);
			}

			if(!e || isLoading < 0 || !e.target){
				isLoading = 0;
			}
		};

		var isNestedVisible = function(elem, elemExpand){
			var outerRect;
			var parent = elem;
			var visible = getCSS(document.body, 'visibility') == 'hidden' || getCSS(elem, 'visibility') != 'hidden';

			eLtop -= elemExpand;
			eLbottom += elemExpand;
			eLleft -= elemExpand;
			eLright += elemExpand;

			while(visible && (parent = parent.offsetParent) && parent != document.body && parent != docElem){
				visible = ((getCSS(parent, 'opacity') || 1) > 0);

				if(visible && getCSS(parent, 'overflow') != 'visible'){
					outerRect = parent.getBoundingClientRect();
					visible = eLright > outerRect.left &&
						eLleft < outerRect.right &&
						eLbottom > outerRect.top - 1 &&
						eLtop < outerRect.bottom + 1
					;
				}
			}

			return visible;
		};

		var checkElements = function() {
			var eLlen, i, rect, autoLoadElem, loadedSomething, elemExpand, elemNegativeExpand, elemExpandVal, beforeExpandVal;

			var lazyloadElems = lazysizes.elements;

			if((loadMode = lazySizesConfig.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)){

				i = 0;

				lowRuns++;

				if(preloadExpand == null){
					if(!('expand' in lazySizesConfig)){
						lazySizesConfig.expand = docElem.clientHeight > 500 && docElem.clientWidth > 500 ? 500 : 370;
					}

					defaultExpand = lazySizesConfig.expand;
					preloadExpand = defaultExpand * lazySizesConfig.expFactor;
				}

				if(currentExpand < preloadExpand && isLoading < 1 && lowRuns > 2 && loadMode > 2 && !document.hidden){
					currentExpand = preloadExpand;
					lowRuns = 0;
				} else if(loadMode > 1 && lowRuns > 1 && isLoading < 6){
					currentExpand = defaultExpand;
				} else {
					currentExpand = shrinkExpand;
				}

				for(; i < eLlen; i++){

					if(!lazyloadElems[i] || lazyloadElems[i]._lazyRace){continue;}

					if(!supportScroll){unveilElement(lazyloadElems[i]);continue;}

					if(!(elemExpandVal = lazyloadElems[i][_getAttribute]('data-expand')) || !(elemExpand = elemExpandVal * 1)){
						elemExpand = currentExpand;
					}

					if(beforeExpandVal !== elemExpand){
						eLvW = innerWidth + (elemExpand * hFac);
						elvH = innerHeight + elemExpand;
						elemNegativeExpand = elemExpand * -1;
						beforeExpandVal = elemExpand;
					}

					rect = lazyloadElems[i].getBoundingClientRect();

					if ((eLbottom = rect.bottom) >= elemNegativeExpand &&
						(eLtop = rect.top) <= elvH &&
						(eLright = rect.right) >= elemNegativeExpand * hFac &&
						(eLleft = rect.left) <= eLvW &&
						(eLbottom || eLright || eLleft || eLtop) &&
						(lazySizesConfig.loadHidden || getCSS(lazyloadElems[i], 'visibility') != 'hidden') &&
						((isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4)) || isNestedVisible(lazyloadElems[i], elemExpand))){
						unveilElement(lazyloadElems[i]);
						loadedSomething = true;
						if(isLoading > 9){break;}
					} else if(!loadedSomething && isCompleted && !autoLoadElem &&
						isLoading < 4 && lowRuns < 4 && loadMode > 2 &&
						(preloadElems[0] || lazySizesConfig.preloadAfterLoad) &&
						(preloadElems[0] || (!elemExpandVal && ((eLbottom || eLright || eLleft || eLtop) || lazyloadElems[i][_getAttribute](lazySizesConfig.sizesAttr) != 'auto')))){
						autoLoadElem = preloadElems[0] || lazyloadElems[i];
					}
				}

				if(autoLoadElem && !loadedSomething){
					unveilElement(autoLoadElem);
				}
			}
		};

		var throttledCheckElements = throttle(checkElements);

		var switchLoadingClass = function(e){
			addClass(e.target, lazySizesConfig.loadedClass);
			removeClass(e.target, lazySizesConfig.loadingClass);
			addRemoveLoadEvents(e.target, rafSwitchLoadingClass);
			triggerEvent(e.target, 'lazyloaded');
		};
		var rafedSwitchLoadingClass = rAFIt(switchLoadingClass);
		var rafSwitchLoadingClass = function(e){
			rafedSwitchLoadingClass({target: e.target});
		};

		var changeIframeSrc = function(elem, src){
			try {
				elem.contentWindow.location.replace(src);
			} catch(e){
				elem.src = src;
			}
		};

		var handleSources = function(source){
			var customMedia;

			var sourceSrcset = source[_getAttribute](lazySizesConfig.srcsetAttr);

			if( (customMedia = lazySizesConfig.customMedia[source[_getAttribute]('data-media') || source[_getAttribute]('media')]) ){
				source.setAttribute('media', customMedia);
			}

			if(sourceSrcset){
				source.setAttribute('srcset', sourceSrcset);
			}
		};

		var lazyUnveil = rAFIt(function (elem, detail, isAuto, sizes, isImg){
			var src, srcset, parent, isPicture, event, firesLoad;

			if(!(event = triggerEvent(elem, 'lazybeforeunveil', detail)).defaultPrevented){

				if(sizes){
					if(isAuto){
						addClass(elem, lazySizesConfig.autosizesClass);
					} else {
						elem.setAttribute('sizes', sizes);
					}
				}

				srcset = elem[_getAttribute](lazySizesConfig.srcsetAttr);
				src = elem[_getAttribute](lazySizesConfig.srcAttr);

				if(isImg) {
					parent = elem.parentNode;
					isPicture = parent && regPicture.test(parent.nodeName || '');
				}

				firesLoad = detail.firesLoad || (('src' in elem) && (srcset || src || isPicture));

				event = {target: elem};

				if(firesLoad){
					addRemoveLoadEvents(elem, resetPreloading, true);
					clearTimeout(resetPreloadingTimer);
					resetPreloadingTimer = setTimeout(resetPreloading, 2500);

					addClass(elem, lazySizesConfig.loadingClass);
					addRemoveLoadEvents(elem, rafSwitchLoadingClass, true);
				}

				if(isPicture){
					forEach.call(parent.getElementsByTagName('source'), handleSources);
				}

				if(srcset){
					elem.setAttribute('srcset', srcset);
				} else if(src && !isPicture){
					if(regIframe.test(elem.nodeName)){
						changeIframeSrc(elem, src);
					} else {
						elem.src = src;
					}
				}

				if(isImg && (srcset || isPicture)){
					updatePolyfill(elem, {src: src});
				}
			}

			if(elem._lazyRace){
				delete elem._lazyRace;
			}
			removeClass(elem, lazySizesConfig.lazyClass);

			rAF(function(){
				if( !firesLoad || (elem.complete && elem.naturalWidth > 1)){
					if(firesLoad){
						resetPreloading(event);
					} else {
						isLoading--;
					}
					switchLoadingClass(event);
				}
			}, true);
		});

		var unveilElement = function (elem){
			var detail;

			var isImg = regImg.test(elem.nodeName);

			//allow using sizes="auto", but don't use. it's invalid. Use data-sizes="auto" or a valid value for sizes instead (i.e.: sizes="80vw")
			var sizes = isImg && (elem[_getAttribute](lazySizesConfig.sizesAttr) || elem[_getAttribute]('sizes'));
			var isAuto = sizes == 'auto';

			if( (isAuto || !isCompleted) && isImg && (elem[_getAttribute]('src') || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesConfig.errorClass) && hasClass(elem, lazySizesConfig.lazyClass)){return;}

			detail = triggerEvent(elem, 'lazyunveilread').detail;

			if(isAuto){
				 autoSizer.updateElem(elem, true, elem.offsetWidth);
			}

			elem._lazyRace = true;
			isLoading++;

			lazyUnveil(elem, detail, isAuto, sizes, isImg);
		};

		var onload = function(){
			if(isCompleted){return;}
			if(Date.now() - started < 999){
				setTimeout(onload, 999);
				return;
			}
			var afterScroll = debounce(function(){
				lazySizesConfig.loadMode = 3;
				throttledCheckElements();
			});

			isCompleted = true;

			lazySizesConfig.loadMode = 3;

			throttledCheckElements();

			addEventListener('scroll', function(){
				if(lazySizesConfig.loadMode == 3){
					lazySizesConfig.loadMode = 2;
				}
				afterScroll();
			}, true);
		};

		return {
			_: function(){
				started = Date.now();

				lazysizes.elements = document.getElementsByClassName(lazySizesConfig.lazyClass);
				preloadElems = document.getElementsByClassName(lazySizesConfig.lazyClass + ' ' + lazySizesConfig.preloadClass);
				hFac = lazySizesConfig.hFac;

				addEventListener('scroll', throttledCheckElements, true);

				addEventListener('resize', throttledCheckElements, true);

				if(window.MutationObserver){
					new MutationObserver( throttledCheckElements ).observe( docElem, {childList: true, subtree: true, attributes: true} );
				} else {
					docElem[_addEventListener]('DOMNodeInserted', throttledCheckElements, true);
					docElem[_addEventListener]('DOMAttrModified', throttledCheckElements, true);
					setInterval(throttledCheckElements, 999);
				}

				addEventListener('hashchange', throttledCheckElements, true);

				//, 'fullscreenchange'
				['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend', 'webkitAnimationEnd'].forEach(function(name){
					document[_addEventListener](name, throttledCheckElements, true);
				});

				if((/d$|^c/.test(document.readyState))){
					onload();
				} else {
					addEventListener('load', onload);
					document[_addEventListener]('DOMContentLoaded', throttledCheckElements);
					setTimeout(onload, 20000);
				}

				if(lazysizes.elements.length){
					checkElements();
					rAF._lsFlush();
				} else {
					throttledCheckElements();
				}
			},
			checkElems: throttledCheckElements,
			unveil: unveilElement
		};
	})();


	var autoSizer = (function(){
		var autosizesElems;

		var sizeElement = rAFIt(function(elem, parent, event, width){
			var sources, i, len;
			elem._lazysizesWidth = width;
			width += 'px';

			elem.setAttribute('sizes', width);

			if(regPicture.test(parent.nodeName || '')){
				sources = parent.getElementsByTagName('source');
				for(i = 0, len = sources.length; i < len; i++){
					sources[i].setAttribute('sizes', width);
				}
			}

			if(!event.detail.dataAttr){
				updatePolyfill(elem, event.detail);
			}
		});
		var getSizeElement = function (elem, dataAttr, width){
			var event;
			var parent = elem.parentNode;

			if(parent){
				width = getWidth(elem, parent, width);
				event = triggerEvent(elem, 'lazybeforesizes', {width: width, dataAttr: !!dataAttr});

				if(!event.defaultPrevented){
					width = event.detail.width;

					if(width && width !== elem._lazysizesWidth){
						sizeElement(elem, parent, event, width);
					}
				}
			}
		};

		var updateElementsSizes = function(){
			var i;
			var len = autosizesElems.length;
			if(len){
				i = 0;

				for(; i < len; i++){
					getSizeElement(autosizesElems[i]);
				}
			}
		};

		var debouncedUpdateElementsSizes = debounce(updateElementsSizes);

		return {
			_: function(){
				autosizesElems = document.getElementsByClassName(lazySizesConfig.autosizesClass);
				addEventListener('resize', debouncedUpdateElementsSizes);
			},
			checkElems: debouncedUpdateElementsSizes,
			updateElem: getSizeElement
		};
	})();

	var init = function(){
		if(!init.i){
			init.i = true;
			autoSizer._();
			loader._();
		}
	};

	lazysizes = {
		cfg: lazySizesConfig,
		autoSizer: autoSizer,
		loader: loader,
		init: init,
		uP: updatePolyfill,
		aC: addClass,
		rC: removeClass,
		hC: hasClass,
		fire: triggerEvent,
		gW: getWidth,
		rAF: rAF,
	};

	return lazysizes;
}
));
/*
This plugin extends lazySizes to lazyLoad:
background images, videos/posters and scripts

Background-Image:
For background images, use data-bg attribute:
<div class="lazyload" data-bg="bg-img.jpg"></div>

 Video:
 For video/audio use data-poster and preload="none":
 <video class="lazyload" data-poster="poster.jpg" preload="none">
 <!-- sources -->
 </video>

 Scripts:
 For scripts use data-script:
 <div class="lazyload" data-script="module-name.js"></div>


 Script modules using require:
 For modules using require use data-require:
 <div class="lazyload" data-require="module-name"></div>
*/

(function(window, factory) {
	var globalInstall = function(){
		factory(window.lazySizes);
		window.removeEventListener('lazyunveilread', globalInstall, true);
	};

	factory = factory.bind(null, window, window.document);

	if(typeof module == 'object' && module.exports){
		factory(require('lazysizes'));
	} else if(window.lazySizes) {
		globalInstall();
	} else {
		window.addEventListener('lazyunveilread', globalInstall, true);
	}
}(window, function(window, document, lazySizes) {
	/*jshint eqnull:true */
	'use strict';
	var bgLoad, regBgUrlEscape;
	var uniqueUrls = {};

	if(document.addEventListener){
		regBgUrlEscape = /\(|\)|\s|'/;

		bgLoad = function (url, cb){
			var img = document.createElement('img');
			img.onload = function(){
				img.onload = null;
				img.onerror = null;
				img = null;
				cb();
			};
			img.onerror = img.onload;

			img.src = url;

			if(img && img.complete && img.onload){
				img.onload();
			}
		};

		addEventListener('lazybeforeunveil', function(e){
			if(e.detail.instance != lazySizes){return;}

			var tmp, load, bg, poster;
			if(!e.defaultPrevented) {

				if(e.target.preload == 'none'){
					e.target.preload = 'auto';
				}

				tmp = e.target.getAttribute('data-link');
				if(tmp){
					addStyleScript(tmp, true);
				}

				// handle data-script
				tmp = e.target.getAttribute('data-script');
				if(tmp){
					addStyleScript(tmp);
				}

				// handle data-require
				tmp = e.target.getAttribute('data-require');
				if(tmp){
					if(lazySizes.cfg.requireJs){
						lazySizes.cfg.requireJs([tmp]);
					} else {
						addStyleScript(tmp);
					}
				}

				// handle data-bg
				bg = e.target.getAttribute('data-bg');
				if (bg) {
					e.detail.firesLoad = true;
					load = function(){
						e.target.style.backgroundImage = 'url(' + (regBgUrlEscape.test(bg) ? JSON.stringify(bg) : bg ) + ')';
						e.detail.firesLoad = false;
						lazySizes.fire(e.target, '_lazyloaded', {}, true, true);
					};

					bgLoad(bg, load);
				}

				// handle data-poster
				poster = e.target.getAttribute('data-poster');
				if(poster){
					e.detail.firesLoad = true;
					load = function(){
						e.target.poster = poster;
						e.detail.firesLoad = false;
						lazySizes.fire(e.target, '_lazyloaded', {}, true, true);
					};

					bgLoad(poster, load);

				}
			}
		}, false);

	}

	function addStyleScript(src, style){
		if(uniqueUrls[src]){
			return;
		}
		var elem = document.createElement(style ? 'link' : 'script');
		var insertElem = document.getElementsByTagName('script')[0];

		if(style){
			elem.rel = 'stylesheet';
			elem.href = src;
		} else {
			elem.src = src;
		}
		uniqueUrls[src] = true;
		uniqueUrls[elem.src || elem.href] = true;
		insertElem.parentNode.insertBefore(elem, insertElem);
	}
}));
this.BodyFontSize = (function() {
  function BodyFontSize($el) {
    this.$el = $el;
    this.init();
  }

  BodyFontSize.prototype.init = function() {
    return this.calculate();
  };

  BodyFontSize.prototype.calculate = function() {
    var fontSize, idealHeight, idealWidth, maxFontSize, minFontSize, ratio, sX, sY, size;
    maxFontSize = 9999;
    minFontSize = 12;
    idealWidth = 1920;
    idealHeight = 1080;
    sX = this.viewport().width / idealWidth;
    sY = this.viewport().height / idealHeight;
    if (sY > sX) {
      ratio = sX;
    } else {
      ratio = sY;
    }
    fontSize = Math.round(ratio * 10);
    if (fontSize > minFontSize && fontSize < maxFontSize) {
      size = fontSize;
    } else if (fontSize < minFontSize) {
      size = minFontSize;
    } else if (fontSize > maxFontSize) {
      size = maxFontSize;
    }
    return this.$el.css('font-size', size + "px");
  };

  BodyFontSize.prototype.viewport = function() {
    var a, e;
    e = window;
    a = 'inner';
    if (!('innerWidth' in window)) {
      a = 'client';
      e = document.documentElement || document.body;
    }
    return {
      width: e[a + 'Width'],
      height: e[a + 'Height']
    };
  };

  return BodyFontSize;

})();

this.CustomCursor = (function() {
  function CustomCursor() {
    this.init();
  }

  CustomCursor.prototype.init = function() {
    var clientX, clientY, render, that;
    that = this;
    clientX = -200;
    clientY = -200;
    $('body').append('<div class="customCursor-con"><div class="customCursor"><div class="cursor"></div><div class="filledCursor"></div><div class="arrow">></div></div><div class="clickAndDrag">Click & Drag</div></div>');
    document.addEventListener('mousemove', function(e) {
      $('.customCursor-con').css('display', 'block');
      clientX = e.clientX;
      clientY = e.clientY;
      if ($(e.target).closest('.lg-item').length && !$(e.target).is('.portfolio-video') && !$(e.target).closest('.lg-video-cont').length) {
        $('.customCursor-con .clickAndDrag').css('display', 'block');
        TweenMax.to($('.customCursor-con .clickAndDrag'), 0.9, {
          x: e.clientX,
          y: e.clientY,
          ease: Power3.easeOut
        });
      } else {
        $('.customCursor-con .clickAndDrag').css('display', 'none');
      }
      if ($(e.target).is('a') || $(e.target).closest('.arrowDown').length || $(e.target).closest('.close').length || $(e.target).closest('.menu-trigger').length || $(e.target).closest('.swiper-pagination-bullet').length || $(e.target).closest('.cursor-link').length || $(e.target).closest('.lg-toolbar').length || $(e.target).closest('.lg-actions').length || $(e.target).is('.wpcf7-submit')) {
        $('.customCursor .cursor').addClass('hoverLink');
      } else {
        $('.customCursor .cursor').removeClass('hoverLink');
      }
      if ($(e.target).closest('.nav-con').length) {
        $('.customCursor .cursor').addClass('darker');
      } else {
        $('.customCursor .cursor').removeClass('darker');
      }
      return that.cursorArrows(e);
    });
    render = function() {
      document.querySelector('.customCursor').style.transform = 'translate(' + clientX + 'px, ' + clientY + 'px)';
      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
    this.detectTouch();
    $(window).resize((function(_this) {
      return function() {
        return _this.onResize();
      };
    })(this));
    return $('body').on('click', function(e) {
      return setTimeout((function() {
        var open;
        if ($('.gallery-swiper-fullscreen').hasClass('active')) {
          open = true;
        } else {
          open = false;
        }
        return that.cursorArrows(e, open);
      }), 200);
    });
  };

  CustomCursor.prototype.cursorArrows = function(e, fullscreenOpen) {
    var condition;
    if (fullscreenOpen) {
      condition = fullscreenOpen;
    } else {
      condition = $(e.target).closest('.gallery-swiper-fullscreen').length && !$(e.target).closest('.gallery-swiper-fullscreen .close').length;
    }
    if (condition) {
      console.log(e.pageX < $('.gallery-swiper-fullscreen').width() - $('.dimmerBorder').offset().left && e.pageX > $('.dimmerBorder').offset().left);
      if ($(e.target).hasClass('arrowLeft') || $(e.target).hasClass('arrowRight')) {
        $('.customCursor .cursor').addClass('hasArrow');
        $('.customCursor .arrow').addClass('active');
        if ($(e.target).hasClass('arrowLeft')) {
          $('.customCursor .arrow').addClass('left');
        } else {
          $('.customCursor .arrow').removeClass('left');
        }
        if ($(e.target).hasClass('swiper-button-disabled')) {
          return $('.customCursor').addClass('disabled');
        } else {
          return $('.customCursor').removeClass('disabled');
        }
      } else {
        $('.customCursor .cursor').removeClass('hasArrow');
        return $('.customCursor .arrow').removeClass('active');
      }
    } else {
      $('.customCursor').removeClass('disabled');
      $('.customCursor .cursor').removeClass('hasArrow');
      return $('.customCursor .arrow').removeClass('active');
    }
  };

  CustomCursor.prototype.detectTouch = function() {
    if (window.touch) {
      return $('.customCursor-con').removeClass('non-touch');
    } else {
      return $('.customCursor-con').addClass('non-touch');
    }
  };

  CustomCursor.prototype.onResize = function() {
    return this.detectTouch();
  };

  return CustomCursor;

})();

this.FullPageScroll = (function() {
  function FullPageScroll() {
    this.smokeCanvas = null;
    window.scrollDir = 1;
    this.init();
  }

  FullPageScroll.prototype.init = function() {
    var delay, last, parallaxTransitionDown, parallaxTransitionUp, that;
    that = this;
    $('body').append('<div class="parallaxDimmer"><div class="accent"></div><div class="dark"></div></div>');
    this.parallaxTransitionTLDown = new TimelineLite({
      paused: true,
      onStart: function() {
        that.animationOut(false, true);
        return $('body').addClass('scrolling');
      },
      onComplete: function() {
        return $('body').removeClass('scrolling');
      },
      onReverseStart: function() {}
    });
    this.parallaxTransitionTLUp = new TimelineLite({
      paused: true,
      onStart: function() {
        that.animationOut();
        return $('body').addClass('scrolling');
      },
      onComplete: function() {
        if (that.fullpage.slidesGrid.length === that.fullpage.activeIndex + 1) {
          $('body').addClass('last-slide');
        } else {
          $('body').removeClass('last-slide');
        }
        return $('body').removeClass('scrolling');
      },
      onReverseStart: function() {}
    });
    parallaxTransitionDown = function() {
      that.parallaxTransitionTLDown.fromTo($('.parallaxDimmer'), 0.6, {
        yPercent: 100
      }, {
        yPercent: 0,
        ease: Power4.easeIn,
        onStart: function() {
          return console.log('should sstart now ----------');
        },
        onComplete: function() {
          console.log('slide out');
          that.animationIn();
          if (that.fullpage.slidesGrid.length === that.fullpage.activeIndex + 1) {
            return $('body').addClass('last-slide');
          } else {
            return $('body').removeClass('last-slide');
          }
        }
      });
      that.parallaxTransitionTLDown.to($('.parallaxDimmer'), 0.5, {
        yPercent: -100,
        ease: Power4.easeOut
      });
      that.parallaxTransitionTLDown.fromTo($('.parallaxDimmer .dark'), 0.5, {
        opacity: 1
      }, {
        opacity: 0,
        ease: Power4.easeOut,
        onComplete: function() {
          $('.swiper-slide .background').css('transform', 'none');
          $(that.fullpage.slides[that.fullpage.activeIndex]).removeClass('not-ready');
          that.initSmoke();
          return that.initParallax();
        }
      }, '-=0.55');
    };
    parallaxTransitionUp = function() {
      that.parallaxTransitionTLUp.fromTo($('.parallaxDimmer'), 0.6, {
        yPercent: -100
      }, {
        yPercent: 0,
        ease: Power4.easeIn,
        onComplete: function() {
          console.log('done');
          that.animationIn(that.parallaxTransitionTLDown);
          if (that.fullpage.slidesGrid.length === that.fullpage.activeIndex + 1) {
            return $('body').addClass('last-slide');
          } else {
            return $('body').removeClass('last-slide');
          }
        }
      });
      that.parallaxTransitionTLUp.to($('.parallaxDimmer'), 0.5, {
        yPercent: 100,
        ease: Power4.easeOut
      });
      that.parallaxTransitionTLUp.fromTo($('.parallaxDimmer .dark'), 0.5, {
        opacity: 1
      }, {
        opacity: 0,
        ease: Power4.easeOut,
        onComplete: function() {
          $(that.fullpage.slides[that.fullpage.activeIndex]).removeClass('not-ready');
          that.initSmoke();
          return that.initParallax();
        }
      }, '-=0.55');
    };
    parallaxTransitionUp();
    parallaxTransitionDown();
    that = this;
    this.fullpage = new Swiper('.fullscreen-slider', {
      simulateTouch: false,
      speed: 1000,
      threshold: 60,
      passiveListeners: false,
      touchStartPreventDefault: false,
      preventClicks: false,
      preventClicksPropagation: false,
      direction: 'vertical',
      effect: "fade",
      pagination: {
        el: '.slider-pagination',
        type: 'bullets',
        clickable: true,
        renderBullet: function(index, className) {
          return '<div class="' + className + '"><span class="count">0' + parseInt(index + 1) + '</span><span class="circle"></span></div>';
        }
      },
      on: {
        init: function() {
          $('.fullscreen-slider .swiper-slide-active').addClass('active-transition');
          return setTimeout((function() {
            return that.animationIn(that.parallaxTransitionTLDown, this);
          }), 100);
        },
        slideChangeTransitionStart: function() {},
        slidePrevTransitionStart: function() {
          $('.parallaxDimmer').addClass("slideUp");
          return that.parallaxTransitionTLUp.pause(0).play();
        },
        slideNextTransitionStart: function() {
          $('.parallaxDimmer').removeClass("slideUp");
          return that.parallaxTransitionTLDown.pause(0).play();
        }
      }
    });
    setTimeout((function() {
      that.initSmoke();
      return that.initParallax();
    }), 1000);
    if (this.fullpage.slidesGrid.length === this.fullpage.activeIndex + 1) {
      $('body').addClass('last-slide');
    }
    $("body").off('click', '.go-to-top');
    $("body").on('click', '.go-to-top', (function(_this) {
      return function() {
        return _this.fullpage.slideTo(0);
      };
    })(this));
    delay = 1500;
    last = 0;
    window.allowScrollUp = false;
    $('body').on('mousewheel', function(e) {
      var now;
      now = (new Date).getTime() + 1.0;
      if ($(e.target).closest('.text-corner-con').length || $(e.target).closest('.gallery-swiper').find('.swiper-wrapper').scrollTop() > 0) {
        return console.log('prevent');
      } else if (!that.fullpage['destroyed']) {
        if (!$('.page-view').hasClass('gallery-fullscreen-open') && !$('nav').hasClass('active') && !$('.page-view').hasClass('video-playing')) {
          if (last + delay < now) {
            last = now;
            if (!$('body').hasClass('scrolling')) {
              if (e.originalEvent.wheelDelta / 120 > 0) {
                console.log(e.originalEvent.wheelDelta);
                window.scrollDir = 0;
                that.fullpage.slideTo(that.fullpage.activeIndex - 1);
                return console.log('up');
              } else {
                window.scrollDir = 1;
                that.fullpage.slideTo(that.fullpage.activeIndex + 1);
                return console.log('down');
              }
            }
          }
        }
      }
    });
    $('.arrowDown').click(function() {
      if (!that.fullpage['destroyed']) {
        return that.fullpage.slideTo(that.fullpage.activeIndex + 1);
      }
    });
    return that.fullpage.on;
  };

  FullPageScroll.prototype.animationIn = function(transitionType) {
    var that;
    $(this.fullpage.slides[this.fullpage.activeIndex]).addClass('not-ready');
    that = this;
    $('.fullscreen-slider .swiper-slide').removeClass('active-transition');
    $('.fullscreen-slider .swiper-slide-active').addClass('active-transition');
    TweenMax.fromTo($('.active-transition .title-text .text-line:eq(0) .span'), 0.5, {
      yPercent: 105
    }, {
      yPercent: 0,
      ease: Power3.easeOut
    });
    TweenMax.fromTo($('.active-transition .title-text .text-line:eq(1) .span'), 0.5, {
      yPercent: -105
    }, {
      yPercent: 0,
      ease: Power3.easeOut
    });
    TweenMax.fromTo($('.active-transition .logo-title').children().children(), 1, {
      rotationY: -90,
      scale: 0.8
    }, {
      rotationY: 0,
      scale: 1,
      ease: Power4.easeOut
    });
    TweenMax.fromTo($('.active-transition .playButton .play'), 0.8, {
      rotationY: -90,
      scale: 0.8
    }, {
      rotationY: 0,
      scale: 1,
      ease: Power3.easeOut
    });
    TweenMax.fromTo($('.active-transition .view'), 0.6, {
      y: -300
    }, {
      y: 0,
      ease: Power3.easeOut
    });
    TweenMax.fromTo($('.active-transition .text-center-con'), 0.7, {
      yPercent: -105
    }, {
      yPercent: 0,
      ease: Power3.easeOut
    });
    TweenMax.fromTo($('.active-transition .text-corner .border'), 0.5, {
      scale: 0
    }, {
      scale: 1,
      ease: Power3.easeOut
    });
    return TweenMax.fromTo($('.active-transition .text-corner-con'), 0.7, {
      xPercent: -100
    }, {
      xPercent: 0,
      ease: Power3.easeOut
    });
  };

  FullPageScroll.prototype.animationOut = function(reversed, down) {
    var that;
    if (reversed == null) {
      reversed = false;
    }
    if (down == null) {
      down = false;
    }
    that = this;
    $(this.fullpage.slides[this.fullpage.activeIndex]).addClass('not-ready');
    TweenMax.fromTo($('.active-transition .title-text .text-line:eq(0) .span'), 0.4, {
      yPercent: 0
    }, {
      yPercent: 100,
      ease: Power3.easeIn
    });
    TweenMax.fromTo($('.active-transition .title-text .text-line:eq(1) .span'), 0.4, {
      yPercent: 0
    }, {
      yPercent: -100,
      ease: Power3.easeIn
    });
    TweenMax.fromTo($('.active-transition .logo-title').children().children(), 0.8, {
      rotationY: 0,
      scale: 1
    }, {
      rotationY: 90,
      scale: 0.8,
      ease: Power3.easeIn
    });
    TweenMax.fromTo($('.active-transition .playButton .play'), 0.6, {
      rotationY: 0,
      scale: 1
    }, {
      rotationY: 90,
      scale: 0.8,
      ease: Power3.easeIn
    });
    TweenMax.fromTo($('.active-transition .view'), 0.5, {
      y: 0
    }, {
      y: -300,
      ease: Power3.easeIn
    });
    TweenMax.fromTo($('.active-transition .text-center-con'), 0.8, {
      yPercent: 0
    }, {
      yPercent: -105,
      ease: Power3.easeIn
    });
    TweenMax.fromTo($('.active-transition .text-corner-con'), 0.8, {
      xPercent: 0
    }, {
      xPercent: -100,
      ease: Power3.easeOut
    });
    return TweenMax.fromTo($('.active-transition .text-corner .border'), 0.5, {
      scale: 1
    }, {
      scale: 0,
      ease: Power3.easeOut
    });
  };

  FullPageScroll.prototype.initParallax = function() {
    var ref, slide;
    if ((ref = this.parallaxInstance) != null) {
      ref.destroy();
    }
    this.parallaxInstance = null;
    slide = $(this.fullpage.slides[this.fullpage.activeIndex]).find(".scene");
    if (slide.length) {
      return setTimeout(((function(_this) {
        return function() {
          return _this.parallaxInstance = new Parallax(slide[0], {
            selector: '.parallax-layer',
            clipRelativeInput: true
          });
        };
      })(this)), 500);
    }
  };

  FullPageScroll.prototype.initSmoke = function() {
    var ref, slide;
    slide = $(this.fullpage.slides[this.fullpage.activeIndex]);
    if ((ref = this.smokeCanvas) != null) {
      ref.destroy();
    }
    this.smokeCanvas = null;
    if (slide.hasClass("mask-reveal")) {
      if (!this.smokeCanvas) {
        slide.addClass('not-ready');
        return setTimeout(((function(_this) {
          return function() {
            var item;
            item = slide.find(".back");
            _this.smokeCanvas = new maskReveal(item);
            return slide.removeClass('not-ready');
          };
        })(this)), 500);
      }
    }
  };

  FullPageScroll.prototype.destroy = function() {
    var ref, ref1;
    if ((ref = this.smokeCanvas) != null) {
      ref.destroy();
    }
    if ((ref1 = this.parallaxInstance) != null) {
      ref1.destroy();
    }
    this.parallaxInstance = null;
    this.fullpage.destroy();
    this.parallaxTransitionTLDown.remove();
    this.parallaxTransitionTLUp.remove();
    $('.parallaxDimmer').remove();
    return $('body').removeClass('last-slide');
  };

  return FullPageScroll;

})();

this.FullPage = (function() {
  function FullPage() {
    this.smokeCanvas = null;
    window.scrollDir = 1;
    this.init();
  }

  FullPage.prototype.init = function() {
    var delay, last, parallaxTransitionDown, parallaxTransitionUp, that;
    that = this;
    this.parallaxTransitionTLDown = new TimelineLite({
      paused: true,
      onStart: function() {
        that.animationOut(false, true);
        return $('body').addClass('scrolling');
      },
      onComplete: function() {
        return $('body').removeClass('scrolling');
      },
      onReverseStart: function() {}
    });
    this.parallaxTransitionTLUp = new TimelineLite({
      paused: true,
      onStart: function() {
        that.animationOut();
        return $('body').addClass('scrolling');
      },
      onComplete: function() {
        if (that.fullpage.slidesGrid.length === that.fullpage.activeIndex + 1) {
          $('body').addClass('last-slide');
        } else {
          $('body').removeClass('last-slide');
        }
        return $('body').removeClass('scrolling');
      },
      onReverseStart: function() {}
    });
    parallaxTransitionDown = function() {
      that.parallaxTransitionTLDown.fromTo($('.parallaxDimmer'), 0.8, {
        yPercent: 100
      }, {
        yPercent: 0,
        ease: Power4.easeIn,
        onComplete: function() {
          console.log('slide out');
          that.animationIn(that.parallaxTransitionTLDown);
          that.initSmoke();
          if (that.fullpage.slidesGrid.length === that.fullpage.activeIndex + 1) {
            return $('body').addClass('last-slide');
          } else {
            return $('body').removeClass('last-slide');
          }
        }
      });
      that.parallaxTransitionTLDown.to($('.parallaxDimmer'), 0.7, {
        yPercent: -100,
        ease: Power4.easeOut
      });
      that.parallaxTransitionTLDown.fromTo($('.parallaxDimmer .dark'), 0.6, {
        opacity: 1
      }, {
        opacity: 0,
        ease: Power4.easeOut,
        onComplete: function() {
          return $('.swiper-slide .background').css('transform', 'none');
        }
      }, '-=0.75');
    };
    parallaxTransitionUp = function() {
      $('body').append('<div class="parallaxDimmer"><div class="accent"></div><div class="dark"></div></div>');
      that.parallaxTransitionTLUp.fromTo($('.parallaxDimmer'), 0.8, {
        yPercent: -100
      }, {
        yPercent: 0,
        ease: Power4.easeIn,
        onComplete: function() {
          console.log('slide out');
          that.animationIn(that.parallaxTransitionTLDown);
          that.initSmoke();
          if (that.fullpage.slidesGrid.length === that.fullpage.activeIndex + 1) {
            return $('body').addClass('last-slide');
          } else {
            return $('body').removeClass('last-slide');
          }
        }
      });
      that.parallaxTransitionTLUp.to($('.parallaxDimmer'), 0.7, {
        yPercent: 100,
        ease: Power4.easeOut
      });
      that.parallaxTransitionTLUp.fromTo($('.parallaxDimmer .dark'), 0.6, {
        opacity: 1
      }, {
        opacity: 0,
        ease: Power4.easeOut,
        onComplete: function() {
          return $('.swiper-slide .background').css('transform', 'none');
        }
      }, '-=0.75');
    };
    parallaxTransitionUp();
    parallaxTransitionDown();
    that = this;
    this.fullpage = new Swiper('.fullscreen-slider', {
      simulateTouch: false,
      speed: 1000,
      threshold: 60,
      passiveListeners: false,
      touchStartPreventDefault: false,
      preventClicks: false,
      preventClicksPropagation: false,
      direction: 'vertical',
      effect: "fade",
      pagination: {
        el: '.slider-pagination',
        type: 'bullets',
        clickable: true,
        renderBullet: function(index, className) {
          return '<div class="' + className + '"><span class="count">0' + parseInt(index + 1) + '</span><span class="circle"></span></div>';
        }
      },
      on: {
        init: function() {
          $('.fullscreen-slider .swiper-slide-active').addClass('active-transition');
          return that.animationIn(that.parallaxTransitionTLDown);
        },
        slideChangeTransitionStart: function() {},
        slidePrevTransitionStart: function() {
          $('.parallaxDimmer').addClass("slideUp");
          return that.parallaxTransitionTLUp.pause(0).play();
        },
        slideNextTransitionStart: function() {
          $('.parallaxDimmer').removeClass("slideUp");
          return that.parallaxTransitionTLDown.pause(0).play();
        }
      }
    });
    that.initSmoke();
    if (this.fullpage.slidesGrid.length === this.fullpage.activeIndex + 1) {
      $('body').addClass('last-slide');
    }
    $("body").off('click', '.go-to-top');
    $("body").on('click', '.go-to-top', (function(_this) {
      return function() {
        return _this.fullpage.slideTo(0);
      };
    })(this));
    delay = 1000;
    last = 0;
    $('body').bind('touchstart', function(e) {
      e.preventDefault();
    });
    $('body').on('mousewheel', function(e) {
      var now;
      now = (new Date).getTime() + 1.0;
      if (!that.fullpage['destroyed']) {
        if (!$('.page-view').hasClass('gallery-fullscreen-open') && !$('nav').hasClass('active') && !$('.page-view').hasClass('video-playing')) {
          if ($(that.fullpage.slides[that.fullpage.activeIndex]).hasClass("gallery") && !window.gallery.isBeginning) {
            return;
          }
          if (last + delay < now) {
            last = now;
            if (!$('body').hasClass('scrolling')) {
              if (e.originalEvent.wheelDelta / 120 > 0) {
                window.scrollDir = 0;
                $('.parallaxDimmer .dark').css('top', '-100%');
                that.fullpage.slideTo(that.fullpage.activeIndex - 1);
                console.log('scrolling up !');
                return console.log(that.fullpage.activeIndex);
              } else {
                window.scrollDir = 1;
                $('.parallaxDimmer .dark').css('top', '100%');
                that.fullpage.slideTo(that.fullpage.activeIndex + 1);
                return console.log('scrolling down !');
              }
            }
          }
        }
      }
    });
    $('.arrowDown').click(function() {
      if (!that.fullpage['destroyed']) {
        return that.fullpage.slideTo(that.fullpage.activeIndex + 1);
      }
    });
    return that.fullpage.on;
  };

  FullPage.prototype.animationIn = function(transitionType, reversed) {
    var that;
    if (reversed == null) {
      reversed = false;
    }
    that = this;
    $('.fullscreen-slider .swiper-slide').removeClass('active-transition');
    $('.fullscreen-slider .swiper-slide-active').addClass('active-transition');
    if (reversed) {
      transitionType.reverse();
    }
    if (reversed) {
      TweenMax.fromTo($('.active-transition .animBG'), 2, {
        scale: 1.75,
        rotationZ: -20
      }, {
        scale: 1,
        rotationZ: 0,
        ease: Power3.easeOut
      });
    }
    TweenMax.fromTo($('.active-transition .masked-text'), 1, {
      opacity: 0
    }, {
      opacity: 1,
      delay: 0.5,
      ease: Power3.easeOut
    });
    TweenMax.fromTo($('.active-transition .masked-text'), 0.8, {
      x: 2
    }, {
      x: 0,
      delay: 1,
      ease: Power3.easeOut
    });
    TweenMax.fromTo($('.active-transition .bevel-text'), 0.5, {
      opacity: 0
    }, {
      opacity: 1,
      delay: 1,
      ease: Power3.easeOut
    });
    TweenMax.fromTo($('.active-transition .title-text .text-line:eq(0) .span'), 0.8, {
      yPercent: 105
    }, {
      yPercent: 0,
      delay: 0.6,
      ease: Power3.easeOut
    });
    TweenMax.fromTo($('.active-transition .title-text .text-line:eq(1) .span'), 0.8, {
      yPercent: -105
    }, {
      yPercent: 0,
      delay: 0.6,
      ease: Power3.easeOut
    });
    TweenMax.fromTo($('.active-transition .logo-title').children().children(), 1.6, {
      rotationY: -90,
      scale: 0.8
    }, {
      rotationY: 0,
      scale: 1,
      delay: 1,
      ease: Power4.easeOut
    });
    TweenMax.fromTo($('.active-transition .playButton .play'), 1.2, {
      rotationY: -90,
      scale: 0.8
    }, {
      rotationY: 0,
      scale: 1,
      delay: 1,
      ease: Power3.easeOut
    });
    TweenMax.fromTo($('.active-transition .view'), 0.6, {
      y: -300
    }, {
      y: 0,
      delay: 0.6,
      ease: Power3.easeOut
    });
    TweenMax.fromTo($('.active-transition .text-center-con'), 1.2, {
      yPercent: -105
    }, {
      yPercent: 0,
      delay: 0.8,
      ease: Power3.easeOut
    });
    TweenMax.fromTo($('.active-transition .text-corner .border'), 1, {
      scale: 0
    }, {
      scale: 1,
      delay: 0.6,
      ease: Power3.easeOut
    });
    return TweenMax.fromTo($('.active-transition .text-corner-con'), 1, {
      xPercent: -100
    }, {
      xPercent: 0,
      delay: 1.2,
      ease: Power3.easeOut
    });
  };

  FullPage.prototype.animationOut = function(reversed, down) {
    var that;
    if (reversed == null) {
      reversed = false;
    }
    if (down == null) {
      down = false;
    }
    that = this;
    if (reversed) {
      TweenMax.fromTo($('.active-transition .animBG'), 2, {
        scale: 1,
        rotationZ: 0
      }, {
        scale: 1.75,
        rotationZ: 20,
        ease: Power3.easeOut
      });
    } else if (down) {
      TweenMax.fromTo($('.active-transition .background'), 1, {
        yPercent: 0
      }, {
        yPercent: -20,
        ease: Power4.easeIn
      });
    } else {
      TweenMax.fromTo($('.active-transition .background'), 1, {
        yPercent: 0
      }, {
        yPercent: 20,
        ease: Power4.easeIn
      });
    }
    TweenMax.fromTo($('.active-transition .masked-text'), 0.5, {
      x: 0
    }, {
      x: 2,
      delay: 0,
      ease: Power3.easeIn
    });
    TweenMax.fromTo($('.active-transition .bevel-text'), 0.5, {
      opacity: 1
    }, {
      opacity: 0,
      delay: 0,
      ease: Power3.easeIn
    });
    TweenMax.fromTo($('.active-transition .masked-text'), 0.5, {
      opacity: 1
    }, {
      opacity: 0,
      delay: 0.2,
      ease: Power3.easeIn
    });
    TweenMax.fromTo($('.active-transition .title-text .text-line:eq(0) .span'), 0.6, {
      yPercent: 0
    }, {
      yPercent: 100,
      delay: 0.15,
      ease: Power3.easeIn
    });
    TweenMax.fromTo($('.active-transition .title-text .text-line:eq(1) .span'), 0.6, {
      yPercent: 0
    }, {
      yPercent: -100,
      delay: 0.15,
      ease: Power3.easeIn
    });
    TweenMax.fromTo($('.active-transition .logo-title').children().children(), 1, {
      rotationY: 0,
      scale: 1
    }, {
      rotationY: 90,
      scale: 0.8,
      ease: Power3.easeIn
    });
    TweenMax.fromTo($('.active-transition .playButton .play'), 1, {
      rotationY: 0,
      scale: 1
    }, {
      rotationY: 90,
      scale: 0.8,
      ease: Power3.easeIn
    });
    TweenMax.fromTo($('.active-transition .view'), 0.6, {
      y: 0
    }, {
      y: -300,
      delay: 0.15,
      ease: Power3.easeIn
    });
    TweenMax.fromTo($('.active-transition .text-center-con'), 0.8, {
      yPercent: 0
    }, {
      yPercent: -105,
      delay: 0.15,
      ease: Power3.easeIn
    });
    TweenMax.fromTo($('.active-transition .text-corner-con'), 1, {
      xPercent: 0
    }, {
      xPercent: -100,
      delay: 0.15,
      ease: Power3.easeOut
    });
    return TweenMax.fromTo($('.active-transition .text-corner .border'), 1, {
      scale: 1
    }, {
      scale: 0,
      delay: 0.15,
      ease: Power3.easeOut
    });
  };

  FullPage.prototype.initSmoke = function() {
    var item, ref;
    if ((ref = this.smokeCanvas) != null) {
      ref.destroy();
    }
    this.smokeCanvas = null;
    if ($(this.fullpage.slides[this.fullpage.activeIndex]).hasClass("mask-reveal")) {
      item = $(this.fullpage.slides[this.fullpage.activeIndex]).find(".back");
      return this.smokeCanvas = new maskReveal(item);
    }
  };

  FullPage.prototype.destroy = function() {
    var ref;
    if ((ref = this.smokeCanvas) != null) {
      ref.destroy();
    }
    this.fullpage.destroy();
    this.parallaxTransitionTLDown.remove();
    $('.parallaxDimmer').remove();
    return $('body').removeClass('last-slide');
  };

  return FullPage;

})();

this.FullPage = (function() {
  function FullPage() {
    this.smokeCanvas = null;
    window.scrollDir = 1;
    this.init();
  }

  FullPage.prototype.init = function() {
    var delay, last, parallaxTransitionDown, parallaxTransitionUp, that;
    that = this;
    this.parallaxTransitionTLDown = new TimelineLite({
      paused: true,
      onStart: function() {
        that.animationOut(false, true);
        return $('body').addClass('scrolling');
      },
      onComplete: function() {
        return $('body').removeClass('scrolling');
      },
      onReverseStart: function() {}
    });
    this.parallaxTransitionTLUp = new TimelineLite({
      paused: true,
      onStart: function() {
        that.animationOut();
        return $('body').addClass('scrolling');
      },
      onComplete: function() {
        if (that.fullpage.slidesGrid.length === that.fullpage.activeIndex + 1) {
          $('body').addClass('last-slide');
        } else {
          $('body').removeClass('last-slide');
        }
        return $('body').removeClass('scrolling');
      },
      onReverseStart: function() {}
    });
    parallaxTransitionDown = function() {
      that.parallaxTransitionTLDown.fromTo($('.parallaxDimmer'), 0.8, {
        yPercent: 100
      }, {
        yPercent: 0,
        ease: Power4.easeIn,
        onComplete: function() {
          console.log('slide out');
          that.animationIn(that.parallaxTransitionTLDown);
          that.initSmoke();
          if (that.fullpage.slidesGrid.length === that.fullpage.activeIndex + 1) {
            return $('body').addClass('last-slide');
          } else {
            return $('body').removeClass('last-slide');
          }
        }
      });
      that.parallaxTransitionTLDown.to($('.parallaxDimmer'), 0.7, {
        yPercent: -100,
        ease: Power4.easeOut
      });
      that.parallaxTransitionTLDown.fromTo($('.parallaxDimmer .dark'), 0.6, {
        opacity: 1
      }, {
        opacity: 0,
        ease: Power4.easeOut,
        onComplete: function() {
          return $('.swiper-slide .background').css('transform', 'none');
        }
      }, '-=0.75');
    };
    parallaxTransitionUp = function() {
      $('body').append('<div class="parallaxDimmer"><div class="accent"></div><div class="dark"></div></div>');
      that.parallaxTransitionTLUp.fromTo($('.parallaxDimmer'), 0.8, {
        yPercent: -100
      }, {
        yPercent: 0,
        ease: Power4.easeIn,
        onComplete: function() {
          console.log('slide out');
          that.animationIn(that.parallaxTransitionTLDown);
          that.initSmoke();
          if (that.fullpage.slidesGrid.length === that.fullpage.activeIndex + 1) {
            return $('body').addClass('last-slide');
          } else {
            return $('body').removeClass('last-slide');
          }
        }
      });
      that.parallaxTransitionTLUp.to($('.parallaxDimmer'), 0.7, {
        yPercent: 100,
        ease: Power4.easeOut
      });
      that.parallaxTransitionTLUp.fromTo($('.parallaxDimmer .dark'), 0.6, {
        opacity: 1
      }, {
        opacity: 0,
        ease: Power4.easeOut,
        onComplete: function() {
          return $('.swiper-slide .background').css('transform', 'none');
        }
      }, '-=0.75');
    };
    parallaxTransitionUp();
    parallaxTransitionDown();
    that = this;
    this.fullpage = new Swiper('.fullscreen-slider', {
      speed: 1000,
      mousewheel: {
        releaseOnEdges: true
      },
      passiveListeners: false,
      touchStartPreventDefault: false,
      preventClicks: false,
      preventClicksPropagation: false,
      direction: 'vertical',
      effect: "fade",
      pagination: {
        el: '.slider-pagination',
        type: 'bullets',
        clickable: true,
        renderBullet: function(index, className) {
          return '<div class="' + className + '"><span class="count">0' + parseInt(index + 1) + '</span><span class="circle"></span></div>';
        }
      },
      on: {
        init: function() {
          $('.fullscreen-slider .swiper-slide-active').addClass('active-transition');
          return that.animationIn(that.parallaxTransitionTLDown);
        },
        slideChangeTransitionStart: function() {},
        slidePrevTransitionStart: function() {
          console.log('up');
          $('.parallaxDimmer').addClass("slideUp");
          $('.parallaxDimmer .dark').css('top', '-100%');
          return that.parallaxTransitionTLUp.pause(0).play();
        },
        slideNextTransitionStart: function() {
          console.log('down');
          $('.parallaxDimmer').removeClass("slideUp");
          $('.parallaxDimmer .dark').css('top', '100%');
          return that.parallaxTransitionTLDown.pause(0).play();
        },
        slideChangeTransitionStart: function() {
          return console.log('start');
        }
      }
    });
    that.initSmoke();
    if (this.fullpage.slidesGrid.length === this.fullpage.activeIndex + 1) {
      $('body').addClass('last-slide');
    }
    $("body").off('click', '.go-to-top');
    $("body").on('click', '.go-to-top', (function(_this) {
      return function() {
        return _this.fullpage.slideTo(0);
      };
    })(this));
    delay = 1000;
    last = 0;
    $('.arrowDown').click(function() {
      if (!that.fullpage['destroyed']) {
        return that.fullpage.slideTo(that.fullpage.activeIndex + 1);
      }
    });
    return that.fullpage.on;
  };

  FullPage.prototype.animationIn = function(transitionType, reversed) {
    var that;
    if (reversed == null) {
      reversed = false;
    }
    that = this;
    $('.fullscreen-slider .swiper-slide').removeClass('active-transition');
    $('.fullscreen-slider .swiper-slide-active').addClass('active-transition');
    if (reversed) {
      transitionType.reverse();
    }
    if (reversed) {
      TweenMax.fromTo($('.active-transition .animBG'), 2, {
        scale: 1.75,
        rotationZ: -20
      }, {
        scale: 1,
        rotationZ: 0,
        ease: Power3.easeOut
      });
    }
    TweenMax.fromTo($('.active-transition .masked-text'), 1, {
      opacity: 0
    }, {
      opacity: 1,
      delay: 0.5,
      ease: Power3.easeOut
    });
    TweenMax.fromTo($('.active-transition .masked-text'), 0.8, {
      x: 2
    }, {
      x: 0,
      delay: 1,
      ease: Power3.easeOut
    });
    TweenMax.fromTo($('.active-transition .bevel-text'), 0.5, {
      opacity: 0
    }, {
      opacity: 1,
      delay: 1,
      ease: Power3.easeOut
    });
    TweenMax.fromTo($('.active-transition .title-text .text-line:eq(0) .span'), 0.8, {
      yPercent: 105
    }, {
      yPercent: 0,
      delay: 0.6,
      ease: Power3.easeOut
    });
    TweenMax.fromTo($('.active-transition .title-text .text-line:eq(1) .span'), 0.8, {
      yPercent: -105
    }, {
      yPercent: 0,
      delay: 0.6,
      ease: Power3.easeOut
    });
    TweenMax.fromTo($('.active-transition .logo-title').children().children(), 1.6, {
      rotationY: -90,
      scale: 0.8
    }, {
      rotationY: 0,
      scale: 1,
      delay: 1,
      ease: Power4.easeOut
    });
    TweenMax.fromTo($('.active-transition .playButton .play'), 1.2, {
      rotationY: -90,
      scale: 0.8
    }, {
      rotationY: 0,
      scale: 1,
      delay: 1,
      ease: Power3.easeOut
    });
    TweenMax.fromTo($('.active-transition .view'), 0.6, {
      y: -300
    }, {
      y: 0,
      delay: 0.6,
      ease: Power3.easeOut
    });
    TweenMax.fromTo($('.active-transition .text-center-con'), 1.2, {
      yPercent: -105
    }, {
      yPercent: 0,
      delay: 0.8,
      ease: Power3.easeOut
    });
    TweenMax.fromTo($('.active-transition .text-corner .border'), 1, {
      scale: 0
    }, {
      scale: 1,
      delay: 0.6,
      ease: Power3.easeOut
    });
    return TweenMax.fromTo($('.active-transition .text-corner-con'), 1, {
      xPercent: -100
    }, {
      xPercent: 0,
      delay: 1.2,
      ease: Power3.easeOut
    });
  };

  FullPage.prototype.animationOut = function(reversed, down) {
    var that;
    if (reversed == null) {
      reversed = false;
    }
    if (down == null) {
      down = false;
    }
    that = this;
    if (reversed) {
      TweenMax.fromTo($('.active-transition .animBG'), 2, {
        scale: 1,
        rotationZ: 0
      }, {
        scale: 1.75,
        rotationZ: 20,
        ease: Power3.easeOut
      });
    } else if (down) {
      TweenMax.fromTo($('.active-transition .background'), 1, {
        yPercent: 0
      }, {
        yPercent: -20,
        ease: Power4.easeIn
      });
    } else {
      TweenMax.fromTo($('.active-transition .background'), 1, {
        yPercent: 0
      }, {
        yPercent: 20,
        ease: Power4.easeIn
      });
    }
    TweenMax.fromTo($('.active-transition .masked-text'), 0.5, {
      x: 0
    }, {
      x: 2,
      delay: 0,
      ease: Power3.easeIn
    });
    TweenMax.fromTo($('.active-transition .bevel-text'), 0.5, {
      opacity: 1
    }, {
      opacity: 0,
      delay: 0,
      ease: Power3.easeIn
    });
    TweenMax.fromTo($('.active-transition .masked-text'), 0.5, {
      opacity: 1
    }, {
      opacity: 0,
      delay: 0.2,
      ease: Power3.easeIn
    });
    TweenMax.fromTo($('.active-transition .title-text .text-line:eq(0) .span'), 0.6, {
      yPercent: 0
    }, {
      yPercent: 100,
      delay: 0.15,
      ease: Power3.easeIn
    });
    TweenMax.fromTo($('.active-transition .title-text .text-line:eq(1) .span'), 0.6, {
      yPercent: 0
    }, {
      yPercent: -100,
      delay: 0.15,
      ease: Power3.easeIn
    });
    TweenMax.fromTo($('.active-transition .logo-title').children().children(), 1, {
      rotationY: 0,
      scale: 1
    }, {
      rotationY: 90,
      scale: 0.8,
      ease: Power3.easeIn
    });
    TweenMax.fromTo($('.active-transition .playButton .play'), 1, {
      rotationY: 0,
      scale: 1
    }, {
      rotationY: 90,
      scale: 0.8,
      ease: Power3.easeIn
    });
    TweenMax.fromTo($('.active-transition .view'), 0.6, {
      y: 0
    }, {
      y: -300,
      delay: 0.15,
      ease: Power3.easeIn
    });
    TweenMax.fromTo($('.active-transition .text-center-con'), 0.8, {
      yPercent: 0
    }, {
      yPercent: -105,
      delay: 0.15,
      ease: Power3.easeIn
    });
    TweenMax.fromTo($('.active-transition .text-corner-con'), 1, {
      xPercent: 0
    }, {
      xPercent: -100,
      delay: 0.15,
      ease: Power3.easeOut
    });
    return TweenMax.fromTo($('.active-transition .text-corner .border'), 1, {
      scale: 1
    }, {
      scale: 0,
      delay: 0.15,
      ease: Power3.easeOut
    });
  };

  FullPage.prototype.initSmoke = function() {
    var item, ref;
    if ((ref = this.smokeCanvas) != null) {
      ref.destroy();
    }
    this.smokeCanvas = null;
    if ($(this.fullpage.slides[this.fullpage.activeIndex]).hasClass("mask-reveal")) {
      item = $(this.fullpage.slides[this.fullpage.activeIndex]).find(".back");
      return this.smokeCanvas = new maskReveal(item);
    }
  };

  FullPage.prototype.destroy = function() {
    var ref;
    if ((ref = this.smokeCanvas) != null) {
      ref.destroy();
    }
    this.fullpage.destroy();
    this.parallaxTransitionTLDown.remove();
    $('.parallaxDimmer').remove();
    return $('body').removeClass('last-slide');
  };

  return FullPage;

})();

this.FullPage = (function() {
  function FullPage() {
    this.smokeCanvas = null;
    window.scrollDir = 1;
    this.init();
  }

  FullPage.prototype.init = function() {
    var delay, last, parallaxTransitionDown, parallaxTransitionUp, that;
    that = this;
    this.parallaxTransitionTLDown = new TimelineLite({
      paused: true,
      onStart: function() {
        that.animationOut(false, true);
        return $('body').addClass('scrolling');
      },
      onComplete: function() {
        return $('body').removeClass('scrolling');
      },
      onReverseStart: function() {}
    });
    this.parallaxTransitionTLUp = new TimelineLite({
      paused: true,
      onStart: function() {
        that.animationOut();
        return $('body').addClass('scrolling');
      },
      onComplete: function() {
        if (that.fullpage.slidesGrid.length === that.fullpage.activeIndex + 1) {
          $('body').addClass('last-slide');
        } else {
          $('body').removeClass('last-slide');
        }
        return $('body').removeClass('scrolling');
      },
      onReverseStart: function() {}
    });
    parallaxTransitionDown = function() {
      that.parallaxTransitionTLDown.fromTo($('.parallaxDimmer'), 0.8, {
        yPercent: 100
      }, {
        yPercent: 0,
        ease: Power4.easeIn,
        onComplete: function() {
          console.log('slide out');
          that.animationIn(that.parallaxTransitionTLDown);
          that.initSmoke();
          if (that.fullpage.slidesGrid.length === that.fullpage.activeIndex + 1) {
            return $('body').addClass('last-slide');
          } else {
            return $('body').removeClass('last-slide');
          }
        }
      });
      that.parallaxTransitionTLDown.to($('.parallaxDimmer'), 0.7, {
        yPercent: -100,
        ease: Power4.easeOut
      });
      that.parallaxTransitionTLDown.fromTo($('.parallaxDimmer .dark'), 0.6, {
        opacity: 1
      }, {
        opacity: 0,
        ease: Power4.easeOut,
        onComplete: function() {
          return $('.swiper-slide .background').css('transform', 'none');
        }
      }, '-=0.75');
    };
    parallaxTransitionUp = function() {
      $('body').append('<div class="parallaxDimmer"><div class="accent"></div><div class="dark"></div></div>');
      that.parallaxTransitionTLUp.fromTo($('.parallaxDimmer'), 0.8, {
        yPercent: -100
      }, {
        yPercent: 0,
        ease: Power4.easeIn,
        onComplete: function() {
          console.log('slide out');
          that.animationIn(that.parallaxTransitionTLDown);
          that.initSmoke();
          if (that.fullpage.slidesGrid.length === that.fullpage.activeIndex + 1) {
            return $('body').addClass('last-slide');
          } else {
            return $('body').removeClass('last-slide');
          }
        }
      });
      that.parallaxTransitionTLUp.to($('.parallaxDimmer'), 0.7, {
        yPercent: 100,
        ease: Power4.easeOut
      });
      that.parallaxTransitionTLUp.fromTo($('.parallaxDimmer .dark'), 0.6, {
        opacity: 1
      }, {
        opacity: 0,
        ease: Power4.easeOut,
        onComplete: function() {
          return $('.swiper-slide .background').css('transform', 'none');
        }
      }, '-=0.75');
    };
    parallaxTransitionUp();
    parallaxTransitionDown();
    that = this;
    this.fullpage = new Swiper('.fullscreen-slider', {
      speed: 1000,
      mousewheel: {
        sensitivity: 10
      },
      passiveListeners: false,
      touchStartPreventDefault: false,
      preventClicks: false,
      preventClicksPropagation: false,
      direction: 'vertical',
      effect: "fade",
      pagination: {
        el: '.slider-pagination',
        type: 'bullets',
        clickable: true,
        renderBullet: function(index, className) {
          return '<div class="' + className + '"><span class="count">0' + parseInt(index + 1) + '</span><span class="circle"></span></div>';
        }
      },
      on: {
        init: function() {
          $('.fullscreen-slider .swiper-slide-active').addClass('active-transition');
          return that.animationIn(that.parallaxTransitionTLDown);
        },
        slideChangeTransitionStart: function() {},
        slidePrevTransitionStart: function() {
          console.log('up');
          $('.parallaxDimmer').addClass("slideUp");
          $('.parallaxDimmer .dark').css('top', '-100%');
          return that.parallaxTransitionTLUp.pause(0).play();
        },
        slideNextTransitionStart: function() {
          console.log('down');
          $('.parallaxDimmer').removeClass("slideUp");
          $('.parallaxDimmer .dark').css('top', '100%');
          return that.parallaxTransitionTLDown.pause(0).play();
        },
        slideChangeTransitionStart: function() {
          return console.log('start');
        }
      }
    });
    that.initSmoke();
    if (this.fullpage.slidesGrid.length === this.fullpage.activeIndex + 1) {
      $('body').addClass('last-slide');
    }
    $("body").off('click', '.go-to-top');
    $("body").on('click', '.go-to-top', (function(_this) {
      return function() {
        return _this.fullpage.slideTo(0);
      };
    })(this));
    delay = 1000;
    last = 0;
    $('.arrowDown').click(function() {
      if (!that.fullpage['destroyed']) {
        return that.fullpage.slideTo(that.fullpage.activeIndex + 1);
      }
    });
    return that.fullpage.on;
  };

  FullPage.prototype.animationIn = function(transitionType, reversed) {
    var that;
    if (reversed == null) {
      reversed = false;
    }
    that = this;
    $('.fullscreen-slider .swiper-slide').removeClass('active-transition');
    $('.fullscreen-slider .swiper-slide-active').addClass('active-transition');
    if (reversed) {
      transitionType.reverse();
    }
    if (reversed) {
      TweenMax.fromTo($('.active-transition .animBG'), 2, {
        scale: 1.75,
        rotationZ: -20
      }, {
        scale: 1,
        rotationZ: 0,
        ease: Power3.easeOut
      });
    }
    TweenMax.fromTo($('.active-transition .masked-text'), 1, {
      opacity: 0
    }, {
      opacity: 1,
      delay: 0.5,
      ease: Power3.easeOut
    });
    TweenMax.fromTo($('.active-transition .masked-text'), 0.8, {
      x: 2
    }, {
      x: 0,
      delay: 1,
      ease: Power3.easeOut
    });
    TweenMax.fromTo($('.active-transition .bevel-text'), 0.5, {
      opacity: 0
    }, {
      opacity: 1,
      delay: 1,
      ease: Power3.easeOut
    });
    TweenMax.fromTo($('.active-transition .title-text .text-line:eq(0) .span'), 0.8, {
      yPercent: 105
    }, {
      yPercent: 0,
      delay: 0.6,
      ease: Power3.easeOut
    });
    TweenMax.fromTo($('.active-transition .title-text .text-line:eq(1) .span'), 0.8, {
      yPercent: -105
    }, {
      yPercent: 0,
      delay: 0.6,
      ease: Power3.easeOut
    });
    TweenMax.fromTo($('.active-transition .logo-title').children().children(), 1.6, {
      rotationY: -90,
      scale: 0.8
    }, {
      rotationY: 0,
      scale: 1,
      delay: 1,
      ease: Power4.easeOut
    });
    TweenMax.fromTo($('.active-transition .playButton .play'), 1.2, {
      rotationY: -90,
      scale: 0.8
    }, {
      rotationY: 0,
      scale: 1,
      delay: 1,
      ease: Power3.easeOut
    });
    TweenMax.fromTo($('.active-transition .view'), 0.6, {
      y: -300
    }, {
      y: 0,
      delay: 0.6,
      ease: Power3.easeOut
    });
    TweenMax.fromTo($('.active-transition .text-center-con'), 1.2, {
      yPercent: -105
    }, {
      yPercent: 0,
      delay: 0.8,
      ease: Power3.easeOut
    });
    TweenMax.fromTo($('.active-transition .text-corner .border'), 1, {
      scale: 0
    }, {
      scale: 1,
      delay: 0.6,
      ease: Power3.easeOut
    });
    return TweenMax.fromTo($('.active-transition .text-corner-con'), 1, {
      xPercent: -100
    }, {
      xPercent: 0,
      delay: 1.2,
      ease: Power3.easeOut
    });
  };

  FullPage.prototype.animationOut = function(reversed, down) {
    var that;
    if (reversed == null) {
      reversed = false;
    }
    if (down == null) {
      down = false;
    }
    that = this;
    if (reversed) {
      TweenMax.fromTo($('.active-transition .animBG'), 2, {
        scale: 1,
        rotationZ: 0
      }, {
        scale: 1.75,
        rotationZ: 20,
        ease: Power3.easeOut
      });
    } else if (down) {
      TweenMax.fromTo($('.active-transition .background'), 1, {
        yPercent: 0
      }, {
        yPercent: -20,
        ease: Power4.easeIn
      });
    } else {
      TweenMax.fromTo($('.active-transition .background'), 1, {
        yPercent: 0
      }, {
        yPercent: 20,
        ease: Power4.easeIn
      });
    }
    TweenMax.fromTo($('.active-transition .masked-text'), 0.5, {
      x: 0
    }, {
      x: 2,
      delay: 0,
      ease: Power3.easeIn
    });
    TweenMax.fromTo($('.active-transition .bevel-text'), 0.5, {
      opacity: 1
    }, {
      opacity: 0,
      delay: 0,
      ease: Power3.easeIn
    });
    TweenMax.fromTo($('.active-transition .masked-text'), 0.5, {
      opacity: 1
    }, {
      opacity: 0,
      delay: 0.2,
      ease: Power3.easeIn
    });
    TweenMax.fromTo($('.active-transition .title-text .text-line:eq(0) .span'), 0.6, {
      yPercent: 0
    }, {
      yPercent: 100,
      delay: 0.15,
      ease: Power3.easeIn
    });
    TweenMax.fromTo($('.active-transition .title-text .text-line:eq(1) .span'), 0.6, {
      yPercent: 0
    }, {
      yPercent: -100,
      delay: 0.15,
      ease: Power3.easeIn
    });
    TweenMax.fromTo($('.active-transition .logo-title').children().children(), 1, {
      rotationY: 0,
      scale: 1
    }, {
      rotationY: 90,
      scale: 0.8,
      ease: Power3.easeIn
    });
    TweenMax.fromTo($('.active-transition .playButton .play'), 1, {
      rotationY: 0,
      scale: 1
    }, {
      rotationY: 90,
      scale: 0.8,
      ease: Power3.easeIn
    });
    TweenMax.fromTo($('.active-transition .view'), 0.6, {
      y: 0
    }, {
      y: -300,
      delay: 0.15,
      ease: Power3.easeIn
    });
    TweenMax.fromTo($('.active-transition .text-center-con'), 0.8, {
      yPercent: 0
    }, {
      yPercent: -105,
      delay: 0.15,
      ease: Power3.easeIn
    });
    TweenMax.fromTo($('.active-transition .text-corner-con'), 1, {
      xPercent: 0
    }, {
      xPercent: -100,
      delay: 0.15,
      ease: Power3.easeOut
    });
    return TweenMax.fromTo($('.active-transition .text-corner .border'), 1, {
      scale: 1
    }, {
      scale: 0,
      delay: 0.15,
      ease: Power3.easeOut
    });
  };

  FullPage.prototype.initSmoke = function() {
    var item, ref;
    if ((ref = this.smokeCanvas) != null) {
      ref.destroy();
    }
    this.smokeCanvas = null;
    if ($(this.fullpage.slides[this.fullpage.activeIndex]).hasClass("mask-reveal")) {
      item = $(this.fullpage.slides[this.fullpage.activeIndex]).find(".back");
      return this.smokeCanvas = new maskReveal(item);
    }
  };

  FullPage.prototype.destroy = function() {
    var ref;
    if ((ref = this.smokeCanvas) != null) {
      ref.destroy();
    }
    this.fullpage.destroy();
    this.parallaxTransitionTLDown.remove();
    $('.parallaxDimmer').remove();
    return $('body').removeClass('last-slide');
  };

  return FullPage;

})();

this.FullPage = (function() {
  function FullPage() {
    this.smokeCanvas = null;
    window.scrollDir = 1;
    this.init();
  }

  FullPage.prototype.init = function() {
    var delay, last, parallaxTransitionDown, parallaxTransitionUp, that;
    that = this;
    this.parallaxTransitionTLDown = new TimelineLite({
      paused: true,
      onStart: function() {
        that.animationOut(false, true);
        return $('body').addClass('scrolling');
      },
      onComplete: function() {
        return $('body').removeClass('scrolling');
      },
      onReverseStart: function() {}
    });
    this.parallaxTransitionTLUp = new TimelineLite({
      paused: true,
      onStart: function() {
        that.animationOut();
        return $('body').addClass('scrolling');
      },
      onComplete: function() {
        if (that.fullpage.slidesGrid.length === that.fullpage.activeIndex + 1) {
          $('body').addClass('last-slide');
        } else {
          $('body').removeClass('last-slide');
        }
        return $('body').removeClass('scrolling');
      },
      onReverseStart: function() {}
    });
    parallaxTransitionDown = function() {
      that.parallaxTransitionTLDown.fromTo($('.parallaxDimmer'), 0.8, {
        yPercent: 100
      }, {
        yPercent: 0,
        ease: Power4.easeIn,
        onComplete: function() {
          console.log('slide out');
          that.animationIn(that.parallaxTransitionTLDown);
          that.initSmoke();
          if (that.fullpage.slidesGrid.length === that.fullpage.activeIndex + 1) {
            return $('body').addClass('last-slide');
          } else {
            return $('body').removeClass('last-slide');
          }
        }
      });
      that.parallaxTransitionTLDown.to($('.parallaxDimmer'), 0.7, {
        yPercent: -100,
        ease: Power4.easeOut
      });
      that.parallaxTransitionTLDown.fromTo($('.parallaxDimmer .dark'), 0.6, {
        opacity: 1
      }, {
        opacity: 0,
        ease: Power4.easeOut,
        onComplete: function() {
          return $('.swiper-slide .background').css('transform', 'none');
        }
      }, '-=0.75');
    };
    parallaxTransitionUp = function() {
      $('body').append('<div class="parallaxDimmer"><div class="accent"></div><div class="dark"></div></div>');
      that.parallaxTransitionTLUp.fromTo($('.parallaxDimmer'), 0.8, {
        yPercent: -100
      }, {
        yPercent: 0,
        ease: Power4.easeIn,
        onComplete: function() {
          console.log('slide out');
          that.animationIn(that.parallaxTransitionTLDown);
          that.initSmoke();
          if (that.fullpage.slidesGrid.length === that.fullpage.activeIndex + 1) {
            return $('body').addClass('last-slide');
          } else {
            return $('body').removeClass('last-slide');
          }
        }
      });
      that.parallaxTransitionTLUp.to($('.parallaxDimmer'), 0.7, {
        yPercent: 100,
        ease: Power4.easeOut
      });
      that.parallaxTransitionTLUp.fromTo($('.parallaxDimmer .dark'), 0.6, {
        opacity: 1
      }, {
        opacity: 0,
        ease: Power4.easeOut,
        onComplete: function() {
          return $('.swiper-slide .background').css('transform', 'none');
        }
      }, '-=0.75');
    };
    parallaxTransitionUp();
    parallaxTransitionDown();
    that = this;
    this.fullpage = new Swiper('.fullscreen-slider', {
      simulateTouch: false,
      speed: 1000,
      threshold: 60,
      passiveListeners: false,
      touchStartPreventDefault: false,
      preventClicks: false,
      preventClicksPropagation: false,
      direction: 'vertical',
      effect: "fade",
      pagination: {
        el: '.slider-pagination',
        type: 'bullets',
        clickable: true,
        renderBullet: function(index, className) {
          return '<div class="' + className + '"><span class="count">0' + parseInt(index + 1) + '</span><span class="circle"></span></div>';
        }
      },
      on: {
        init: function() {
          $('.fullscreen-slider .swiper-slide-active').addClass('active-transition');
          return that.animationIn(that.parallaxTransitionTLDown);
        },
        slideChangeTransitionStart: function() {},
        slidePrevTransitionStart: function() {
          $('.parallaxDimmer').addClass("slideUp");
          return that.parallaxTransitionTLUp.pause(0).play();
        },
        slideNextTransitionStart: function() {
          $('.parallaxDimmer').removeClass("slideUp");
          return that.parallaxTransitionTLDown.pause(0).play();
        }
      }
    });
    that.initSmoke();
    if (this.fullpage.slidesGrid.length === this.fullpage.activeIndex + 1) {
      $('body').addClass('last-slide');
    }
    $("body").off('click', '.go-to-top');
    $("body").on('click', '.go-to-top', (function(_this) {
      return function() {
        return _this.fullpage.slideTo(0);
      };
    })(this));
    delay = 1000;
    last = 0;
    $('body').bind('touchstart', function(e) {
      e.preventDefault();
    });
    $('body').on('mousewheel', function(e) {
      var now;
      now = (new Date).getTime() + 1.0;
      if (!that.fullpage['destroyed']) {
        if (!$('.page-view').hasClass('gallery-fullscreen-open') && !$('nav').hasClass('active') && !$('.page-view').hasClass('video-playing')) {
          if ($(that.fullpage.slides[that.fullpage.activeIndex]).hasClass("gallery") && !window.gallery.isBeginning) {
            return;
          }
          if (last + delay < now) {
            last = now;
            if (!$('body').hasClass('scrolling')) {
              if (e.originalEvent.wheelDelta / 120 > 0) {
                window.scrollDir = 0;
                $('.parallaxDimmer .dark').css('top', '-100%');
                that.fullpage.slideTo(that.fullpage.activeIndex - 1);
                console.log('scrolling up !');
                return console.log(that.fullpage.activeIndex);
              } else {
                window.scrollDir = 1;
                $('.parallaxDimmer .dark').css('top', '100%');
                that.fullpage.slideTo(that.fullpage.activeIndex + 1);
                return console.log('scrolling down !');
              }
            }
          }
        }
      }
    });
    $('.arrowDown').click(function() {
      if (!that.fullpage['destroyed']) {
        return that.fullpage.slideTo(that.fullpage.activeIndex + 1);
      }
    });
    return that.fullpage.on;
  };

  FullPage.prototype.animationIn = function(transitionType, reversed) {
    var that;
    if (reversed == null) {
      reversed = false;
    }
    that = this;
    $('.fullscreen-slider .swiper-slide').removeClass('active-transition');
    $('.fullscreen-slider .swiper-slide-active').addClass('active-transition');
    if (reversed) {
      transitionType.reverse();
    }
    if (reversed) {
      TweenMax.fromTo($('.active-transition .animBG'), 2, {
        scale: 1.75,
        rotationZ: -20
      }, {
        scale: 1,
        rotationZ: 0,
        ease: Power3.easeOut
      });
    }
    TweenMax.fromTo($('.active-transition .masked-text'), 1, {
      opacity: 0
    }, {
      opacity: 1,
      delay: 0.5,
      ease: Power3.easeOut
    });
    TweenMax.fromTo($('.active-transition .masked-text'), 0.8, {
      x: 2
    }, {
      x: 0,
      delay: 1,
      ease: Power3.easeOut
    });
    TweenMax.fromTo($('.active-transition .bevel-text'), 0.5, {
      opacity: 0
    }, {
      opacity: 1,
      delay: 1,
      ease: Power3.easeOut
    });
    TweenMax.fromTo($('.active-transition .title-text .text-line:eq(0) .span'), 0.8, {
      yPercent: 105
    }, {
      yPercent: 0,
      delay: 0.6,
      ease: Power3.easeOut
    });
    TweenMax.fromTo($('.active-transition .title-text .text-line:eq(1) .span'), 0.8, {
      yPercent: -105
    }, {
      yPercent: 0,
      delay: 0.6,
      ease: Power3.easeOut
    });
    TweenMax.fromTo($('.active-transition .logo-title').children().children(), 1.6, {
      rotationY: -90,
      scale: 0.8
    }, {
      rotationY: 0,
      scale: 1,
      delay: 1,
      ease: Power4.easeOut
    });
    TweenMax.fromTo($('.active-transition .playButton .play'), 1.2, {
      rotationY: -90,
      scale: 0.8
    }, {
      rotationY: 0,
      scale: 1,
      delay: 1,
      ease: Power3.easeOut
    });
    TweenMax.fromTo($('.active-transition .view'), 0.6, {
      y: -300
    }, {
      y: 0,
      delay: 0.6,
      ease: Power3.easeOut
    });
    TweenMax.fromTo($('.active-transition .text-center-con'), 1.2, {
      yPercent: -105
    }, {
      yPercent: 0,
      delay: 0.8,
      ease: Power3.easeOut
    });
    TweenMax.fromTo($('.active-transition .text-corner .border'), 1, {
      scale: 0
    }, {
      scale: 1,
      delay: 0.6,
      ease: Power3.easeOut
    });
    return TweenMax.fromTo($('.active-transition .text-corner-con'), 1, {
      xPercent: -100
    }, {
      xPercent: 0,
      delay: 1.2,
      ease: Power3.easeOut
    });
  };

  FullPage.prototype.animationOut = function(reversed, down) {
    var that;
    if (reversed == null) {
      reversed = false;
    }
    if (down == null) {
      down = false;
    }
    that = this;
    if (reversed) {
      TweenMax.fromTo($('.active-transition .animBG'), 2, {
        scale: 1,
        rotationZ: 0
      }, {
        scale: 1.75,
        rotationZ: 20,
        ease: Power3.easeOut
      });
    } else if (down) {
      TweenMax.fromTo($('.active-transition .background'), 1, {
        yPercent: 0
      }, {
        yPercent: -20,
        ease: Power4.easeIn
      });
    } else {
      TweenMax.fromTo($('.active-transition .background'), 1, {
        yPercent: 0
      }, {
        yPercent: 20,
        ease: Power4.easeIn
      });
    }
    TweenMax.fromTo($('.active-transition .masked-text'), 0.5, {
      x: 0
    }, {
      x: 2,
      delay: 0,
      ease: Power3.easeIn
    });
    TweenMax.fromTo($('.active-transition .bevel-text'), 0.5, {
      opacity: 1
    }, {
      opacity: 0,
      delay: 0,
      ease: Power3.easeIn
    });
    TweenMax.fromTo($('.active-transition .masked-text'), 0.5, {
      opacity: 1
    }, {
      opacity: 0,
      delay: 0.2,
      ease: Power3.easeIn
    });
    TweenMax.fromTo($('.active-transition .title-text .text-line:eq(0) .span'), 0.6, {
      yPercent: 0
    }, {
      yPercent: 100,
      delay: 0.15,
      ease: Power3.easeIn
    });
    TweenMax.fromTo($('.active-transition .title-text .text-line:eq(1) .span'), 0.6, {
      yPercent: 0
    }, {
      yPercent: -100,
      delay: 0.15,
      ease: Power3.easeIn
    });
    TweenMax.fromTo($('.active-transition .logo-title').children().children(), 1, {
      rotationY: 0,
      scale: 1
    }, {
      rotationY: 90,
      scale: 0.8,
      ease: Power3.easeIn
    });
    TweenMax.fromTo($('.active-transition .playButton .play'), 1, {
      rotationY: 0,
      scale: 1
    }, {
      rotationY: 90,
      scale: 0.8,
      ease: Power3.easeIn
    });
    TweenMax.fromTo($('.active-transition .view'), 0.6, {
      y: 0
    }, {
      y: -300,
      delay: 0.15,
      ease: Power3.easeIn
    });
    TweenMax.fromTo($('.active-transition .text-center-con'), 0.8, {
      yPercent: 0
    }, {
      yPercent: -105,
      delay: 0.15,
      ease: Power3.easeIn
    });
    TweenMax.fromTo($('.active-transition .text-corner-con'), 1, {
      xPercent: 0
    }, {
      xPercent: -100,
      delay: 0.15,
      ease: Power3.easeOut
    });
    return TweenMax.fromTo($('.active-transition .text-corner .border'), 1, {
      scale: 1
    }, {
      scale: 0,
      delay: 0.15,
      ease: Power3.easeOut
    });
  };

  FullPage.prototype.initSmoke = function() {
    var item, ref;
    if ((ref = this.smokeCanvas) != null) {
      ref.destroy();
    }
    this.smokeCanvas = null;
    if ($(this.fullpage.slides[this.fullpage.activeIndex]).hasClass("mask-reveal")) {
      item = $(this.fullpage.slides[this.fullpage.activeIndex]).find(".back");
      return this.smokeCanvas = new maskReveal(item);
    }
  };

  FullPage.prototype.destroy = function() {
    var ref;
    if ((ref = this.smokeCanvas) != null) {
      ref.destroy();
    }
    this.fullpage.destroy();
    this.parallaxTransitionTLDown.remove();
    $('.parallaxDimmer').remove();
    return $('body').removeClass('last-slide');
  };

  return FullPage;

})();

this.GalleryFluid = (function() {
  function GalleryFluid(items) {
    this.init(items);
  }

  GalleryFluid.prototype.init = function(items) {
    return $.each($.makeArray(items), function(i, el) {
      var img2, imgs;
      console.log(el);
      imgs = $.makeArray(items.find('.swiper-slide img'));
      console.log(imgs);
      if ($(el).next().length) {
        img2 = $(el).next().find('img')[0].getAttribute('src');
      } else {
        img2 = imgs[0].getAttribute('src');
      }
      console.log($(el));
      console.log(img2);
      return new fluidGalleryAnim({
        parent: $('.page-view')[0],
        intensity: -0.65,
        speedIn: 1.2,
        speedOut: 1.2,
        easing: el.dataset.easing || void 0,
        hover: el.dataset.hover || void 0,
        images: imgs,
        image1: imgs[0].getAttribute('src'),
        image2: imgs[1].getAttribute('src'),
        displacementImage: 'https://i.ibb.co/xSd26s3/8.jpg'
      });
    });
  };

  return GalleryFluid;

})();

this.Header = (function() {
  function Header() {
    this.$el = $('header');
    this.$menuSelector = $('nav');
    this.$logo = this.$el.find('.logo');
    this.$trigger = $('.menu-trigger');
    this.$hamburger = this.$trigger.find('.hamburger');
    this.init();
  }

  Header.prototype.init = function() {
    var menuBarTL;
    menuBarTL = new TimelineLite({
      paused: true,
      onComplete: function() {
        return this.restart();
      }
    });
    menuBarTL.to(this.$trigger.find('.menu-bar'), 1, {
      scaleX: 0,
      'transform-origin': 'left',
      ease: Power3.easeOut
    });
    menuBarTL.to(this.$trigger.find('.menu-bar'), 1, {
      scaleX: 1,
      'transform-origin': 'left',
      ease: Power3.easeIn
    });
    menuBarTL.to(this.$trigger.find('.menu-bar'), 1, {
      scaleX: 0,
      'transform-origin': 'right',
      ease: Power3.easeOut
    });
    menuBarTL.to(this.$trigger.find('.menu-bar'), 1, {
      scaleX: 1,
      'transform-origin': 'right',
      ease: Power3.easeIn
    });
    $('.menu li').each(function(i) {
      $(this).find('a').wrap('<div class="li"></div>');
      $(this).append('<div class="count"></div>');
      $(this).find('.count').append('<div class="slash"></div>');
      return $(this).find('.count').append('<div class="number">0' + parseInt(i + 1) + '</div>');
    });
    this.$trigger.click((function(_this) {
      return function(e) {
        return _this.$hamburger.toggleClass('is-active');
      };
    })(this));
    this.menuAnim();
    return this.menuClickEvents();
  };

  Header.prototype.menuClickEvents = function() {
    var that;
    that = this;
    this.$trigger.click((function(_this) {
      return function() {
        console.log('--------------------------');
        if (!_this.$menuSelector.hasClass('active')) {
          _this.$menuTransition.play();
          _this.$menuSelector.addClass('active');
          return console.log('openMenu');
        } else {
          _this.$menuTransition.timeScale(1.5).reverse();
          return console.log('closeMenu');
        }
      };
    })(this));
    return $('a').click(function() {
      return that.$menuTransition.timeScale(2).reverse();
    });
  };

  Header.prototype.menuAnim = function() {
    var that;
    that = this;
    this.$menuTransition = new TimelineLite({
      paused: true,
      onReverseComplete: function() {
        return that.$menuSelector.removeClass('active');
      }
    });
    this.$menuTransition.fromTo($('nav .dimmerRect'), 0.6, {
      scaleX: 0
    }, {
      scaleX: 1,
      ease: Power3.easeOut
    });
    this.$menuTransition.staggerFrom($('nav .menu .count'), 0.4, {
      scaleY: 0,
      ease: Power3.easeOut
    }, 0.1, '-=0.3');
    this.$menuTransition.staggerFrom($('nav .menu .li a'), 0.8, {
      xPercent: 100,
      ease: Power3.easeOut
    }, 0.1, '-=0.8');
    this.$menuTransition.staggerFrom($('nav .menu .social a'), 0.4, {
      scale: 0,
      rotationZ: 90,
      ease: Power3.easeOut
    }, 0.1, '-=0.8');
    this.$menuTransition.staggerFrom($('nav .menu .count .number'), 0.8, {
      xPercent: -100,
      ease: Power3.easeOut
    }, 0.1, '0.8');
    this.$menuTransition.staggerTo($('nav .menu .count .slash'), 0.4, {
      rotationZ: 15,
      ease: Power3.easeOut
    }, 0.1, '-=1.2');
    return this.$menuTransition.staggerFromTo($('nav .contact-info .contact-row'), 0.6, {
      xPercent: -100
    }, {
      xPercent: 0,
      ease: Power3.easeOut
    }, 0.1, '0.8');
  };

  return Header;

})();



this.PageToPageTransition = (function() {
  function PageToPageTransition($el) {
    this.$el = $el;
    this.smokeCanvas = null;
    window.scrollDir = 1;
    this.init();
  }

  PageToPageTransition.prototype.init = function() {
    var dimmerColorTransition, that;
    that = this;
    this.fullpageTransitionOverlay = new TimelineLite({
      paused: true,
      onStart: function() {
        that.animationOut(true);
        return console.log('anim in');
      },
      onComplete: function() {
        console.log('out out out out ');
        return that.animationIn(that.fullpageTransitionOverlay, true);
      },
      onReverseStart: function() {}
    });
    dimmerColorTransition = function() {
      var barsAnim;
      barsAnim = new TimelineLite({
        paused: true
      });
      barsAnim.to($('.dimmerBorder .dimmerBorder-top-left'), 1, {
        ease: Power4.easeIn,
        scaleX: 1
      });
      barsAnim.to($('.dimmerBorder .dimmerBorder-left'), 1, {
        ease: Power4.easeIn,
        scaleY: 1
      }, '-=1');
      barsAnim.to($('.dimmerBorder .dimmerBorder-right'), 1, {
        ease: Power4.easeIn,
        scaleY: 1
      }, '-=1');
      barsAnim.to($('.dimmerBorder .dimmerBorder-bottom-right'), 1, {
        ease: Power4.easeIn,
        scaleX: 1
      }, '-=1');
      barsAnim.to($('.dimmerBorder .dimmerBorder-top-right'), 1.5, {
        ease: Power4.easeOut,
        scaleX: 1
      });
      barsAnim.to($('.dimmerBorder .dimmerBorder-bottom-left'), 1.5, {
        ease: Power4.easeOut,
        scaleX: 1
      }, '-=1.5');
      barsAnim.play();
      that.fullpageTransitionOverlay.fromTo($('.dimmerAnimation .dimmerBar.left'), 1, {
        scaleY: 0
      }, {
        scaleY: 1,
        ease: Power4.easeOut
      });
      that.fullpageTransitionOverlay.fromTo($('.dimmerAnimation .dimmerBar.top'), 1, {
        ease: Power4.easeOut,
        scaleX: 0
      }, {
        scaleX: 1
      }, '-=1');
      that.fullpageTransitionOverlay.fromTo($('.dimmerAnimation .dimmerBar.right'), 1, {
        ease: Power4.easeOut,
        scaleY: 0
      }, {
        scaleY: 1
      }, '-=1');
      that.fullpageTransitionOverlay.fromTo($('.dimmerAnimation .dimmerBar.bottom'), 1, {
        ease: Power4.easeOut,
        scaleX: 0
      }, {
        scaleX: 1
      }, '-=1');
      that.fullpageTransitionOverlay.fromTo($('.dimmerAnimation .dimmerRect'), 0.8, {
        ease: Power4.easeOut,
        scaleX: 0
      }, {
        scaleX: 1
      }, '-=0.6');
    };
    return dimmerColorTransition();
  };

  PageToPageTransition.prototype.animIn = function(fullpageCon) {
    return this.fullpageTransitionOverlay.timeScale(1.5).play();
  };

  PageToPageTransition.prototype.animOut = function(fullpageCon) {
    return this.fullpageTransitionOverlay.timeScale(1.5).play();
  };

  PageToPageTransition.prototype.animationIn = function(transitionType, reversed) {
    var that;
    if (reversed == null) {
      reversed = false;
    }
    that = this;
    $('.fullscreen-slider .swiper-slide').removeClass('active-transition');
    $('.fullscreen-slider .swiper-slide-active').addClass('active-transition');
    if (reversed) {
      return transitionType.reverse();
    }
  };

  PageToPageTransition.prototype.animationOut = function(reversed, down) {
    var that;
    if (reversed == null) {
      reversed = false;
    }
    if (down == null) {
      down = false;
    }
    return that = this;
  };

  PageToPageTransition.prototype.initSmoke = function() {
    var item, ref;
    if ((ref = this.smokeCanvas) != null) {
      ref.destroy();
    }
    this.smokeCanvas = null;
    if ($(this.fullpage.slides[this.fullpage.activeIndex]).hasClass("mask-reveal")) {
      item = $(this.fullpage.slides[this.fullpage.activeIndex]).find(".back");
      return this.smokeCanvas = new maskReveal(item);
    }
  };

  PageToPageTransition.prototype.destroy = function() {
    var ref;
    return (ref = this.smokeCanvas) != null ? ref.destroy() : void 0;
  };

  return PageToPageTransition;

})();

this.Pixelcarve = (function() {
  function Pixelcarve() {
    this.$el = $('.pixelcarve');
    this.init();
  }

  Pixelcarve.prototype.init = function() {
    return this.$el.each(function(index, child) {
      var $caption, $child, $link, mouseleaveTime;
      $child = $(child);
      if (!$child.hasClass('disabled')) {
        $link = $child.find('a');
        $caption = $child.find('.pcarve_caption');
        mouseleaveTime = null;
        return $link.mouseenter(function() {
          $caption.addClass('shown');
          if (mouseleaveTime) {
            clearTimeout(mouseleaveTime);
          }
          return mouseleaveTime = setTimeout(function() {
            return $child.one('mouseleave', function() {
              return $caption.removeClass('shown');
            });
          }, 300);
        });
      }
    });
  };

  return Pixelcarve;

})();

var VideoResponsive;

VideoResponsive = (function() {
  function VideoResponsive(videoElement) {
    this.videoElement = videoElement;
    this.el = this.videoElement.find('.video');
    console.log(this.el);
    this.elsrc = this.el.find('source');
    $('body').append(this.videoElement.find('.video-container.fullscreen').addClass('outside'));
    this.fullscreenVideo = $('.video-container.fullscreen .video-fullscreen');
    this.videoClickEvents();
    this.loadSrc();
  }

  VideoResponsive.prototype.loadSrc = function() {
    this.sizes();
    return $(window).resize((function(_this) {
      return function() {
        return _this.sizes();
      };
    })(this));
  };

  VideoResponsive.prototype.sizes = function() {
    var src;
    src = this.elsrc.attr('data-url-hd');
    if ($(window).width() < 640) {
      src = this.elsrc.attr('data-url-mobile');
    } else if ($(window).width() < 1000) {
      src = this.elsrc.attr('data-url-medium');
    } else {
      src = this.elsrc.attr('data-url-hd');
    }
    this.elsrc.attr('src', src);
    return this.el[0].load();
  };

  VideoResponsive.prototype.videoShowAnimation = function() {
    this.videoShowAnimationTimeline = new TimelineMax({
      paused: true
    });
    this.videoShowAnimationTimeline.fromTo($('.dimmerAnimation .dimmerBar.left'), 1, {
      scaleY: 0
    }, {
      scaleY: 1,
      ease: Power4.easeOut
    });
    this.videoShowAnimationTimeline.fromTo($('.dimmerAnimation .dimmerBar.top'), 1, {
      ease: Power4.easeOut,
      scaleX: 0
    }, {
      scaleX: 1
    }, '-=1');
    this.videoShowAnimationTimeline.fromTo($('.dimmerAnimation .dimmerBar.right'), 1, {
      ease: Power4.easeOut,
      scaleY: 0
    }, {
      scaleY: 1
    }, '-=1');
    this.videoShowAnimationTimeline.fromTo($('.dimmerAnimation .dimmerBar.bottom'), 1, {
      ease: Power4.easeOut,
      scaleX: 0
    }, {
      scaleX: 1
    }, '-=1');
    return this.videoShowAnimationTimeline.fromTo($('.dimmerAnimation .dimmerRect'), 0.8, {
      ease: Power3.easeOut,
      scaleX: 0
    }, {
      scaleX: 1
    }, '-=0.6');
  };

  VideoResponsive.prototype.openVideo = function() {
    console.log('open');
    console.log(this.fullscreenVideo);
    TweenMax.to(this.fullscreenVideo.parent(), 0.01, {
      autoAlpha: 1,
      delay: 0.72,
      onComplete: (function(_this) {
        return function() {
          _this.el[0].pause();
          $('.page-view').addClass('video-playing');
          return $('.video-fullscreen')[0].play();
        };
      })(this)
    });
    return window.pageTransition.animIn();
  };

  VideoResponsive.prototype.closeVideo = function() {
    console.log('close');
    TweenMax.to(this.fullscreenVideo.parent(), 0.01, {
      autoAlpha: 0,
      delay: 0.72,
      onComplete: (function(_this) {
        return function() {
          _this.el[0].play();
          $('.page-view').removeClass('video-playing');
          return $('.video-fullscreen')[0].pause();
        };
      })(this)
    });
    return window.pageTransition.animOut();
  };

  VideoResponsive.prototype.videoClickEvents = function() {
    console.log(this.videoElement.find('.play'));
    $('body').on('click', '.playButton', (function(_this) {
      return function(e) {
        console.log('xclick');
        return _this.openVideo();
      };
    })(this));
    return $('body').on('click', '.video-close', (function(_this) {
      return function(e) {
        console.log('closebut');
        return _this.closeVideo();
      };
    })(this));
  };

  VideoResponsive.prototype.destroy = function() {
    return $('.video-container.fullscreen.outside').remove();
  };

  return VideoResponsive;

})();

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.Base = (function(superClass) {
  extend(Base, superClass);

  function Base() {
    return Base.__super__.constructor.apply(this, arguments);
  }

  Base.prototype.pageReady = function() {
    ga('send', 'pageview', location.pathname);
    this.$main = $('main');
    this.$galleryBorder = [];
    this.initElements();
    this.mobileViewport();
    return Base.__super__.pageReady.apply(this, arguments);
  };

  Base.prototype.initElements = function() {
    var that;
    this.resetHeight();
    that = this;
    $(window).resize((function(_this) {
      return function() {
        return _this.onResize();
      };
    })(this));
    if ($('.fullscreen-slider').length) {
      that.fullpage = new FullPageScroll();
    }
    if (($('.custom-background-video').length)) {
      that.video = new VideoResponsive($('.custom-background-video'));
    }
    this.allBordersArray();
    return this.galleries();
  };

  Base.prototype.galleries = function() {
    var that, zoomInSrc, zoomOutSrc;
    that = this;
    if (($('.gallery-swiper').length)) {
      console.log('=====================================');
      zoomInSrc = '/content/themes/ferris-rafauli/images/plus.png';
      zoomOutSrc = '/content/themes/ferris-rafauli/images/minus.png';
      this.galleryFullscreen = $(".swiper-wrapper.gallery");
      this.galleryFullscreen.lightGallery({
        download: false,
        hash: false,
        share: false,
        pager: false,
        autoplay: false,
        autoplayControls: false,
        thumbnail: false,
        counter: false,
        scale: 0.5
      });
      this.galleryFullscreen.on('onAfterOpen.lg', function() {
        return $('.lg-outer .lg-item').each(function() {
          if ($(this).find('img').attr('src')) {
            if ($(this).find('img').attr('src').includes('player.vimeo.com')) {
              return $(this).find('img').addClass('hidden');
            }
          }
        });
      });
      this.galleryFullscreen.on('onAfterSlide.lg', function() {
        if ($('.lg-current img').attr('src')) {
          if ($('.lg-current img').attr('src').includes('player.vimeo.com') && !$('.lg-current video').length) {
            $('.lg-current img').parent().append('<video class="portfolio-video" playsinline controls><source type="video/mp4" src="' + $('.lg-current img').attr('src') + '"></video>');
            return $('.lg-current video')[0].play();
          }
        }
      });
      this.galleryFullscreen.on('onBeforeSlide.lg', function() {
        if (($('.lg-current video').length)) {
          $('.lg-current video')[0].pause();
        }
        return $('.lg-outer .lg-item').each(function() {
          if ($(this).find('img').attr('src')) {
            if ($(this).find('img').attr('src').includes('player.vimeo.com')) {
              return $(this).find('img').addClass('hidden');
            }
          }
        });
      });
      $('.gallery-swiper .gallery-slide').mouseenter(function() {
        var galleryItem;
        $(this).addClass('hover');
        galleryItem = $(this);
        that.galleryBorderAnim($(this), true, $(this).index());
        return TweenMax.to($(this).find('.background img'), 80, {
          scale: 1.3,
          ease: Power4.easeOut
        });
      });
      return $('.gallery-swiper .gallery-slide').mouseleave(function() {
        $(this).removeClass('hover');
        that.galleryBorderAnim($(this), false, $(this).index());
        return TweenMax.to($(this).find('.background img'), 1.2, {
          scale: 1,
          ease: Power3.easeOut
        });
      });
    }
  };

  Base.prototype.galleryBorderAnim = function(slide, play, i) {
    var that;
    that = this;
    if (play) {
      return that.$galleryBorder[i].play();
    } else {
      return that.$galleryBorder[i].reverse();
    }
  };

  Base.prototype.allBordersArray = function() {
    var that;
    that = this;
    $('.gallery-swiper .gallery-slide').each(function(i) {
      that.$galleryBorder[i] = new TimelineLite({
        paused: true
      });
      that.$galleryBorder[i].fromTo($(this).find('.galleryDimmerAnimation .galleryDimmerBar.left'), 0.8, {
        scaleY: 0
      }, {
        scaleY: 1,
        ease: Power3.easeInOut
      });
      that.$galleryBorder[i].fromTo($(this).find('.galleryDimmerAnimation .galleryDimmerBar.top'), 0.8, {
        scaleX: 0
      }, {
        ease: Power3.easeInOut,
        scaleX: 1
      }, '-=0.8');
      that.$galleryBorder[i].fromTo($(this).find('.galleryDimmerAnimation .galleryDimmerBar.right'), 0.8, {
        scaleY: 0
      }, {
        ease: Power3.easeInOut,
        scaleY: 1
      }, '-=0.8');
      return that.$galleryBorder[i].fromTo($(this).find('.galleryDimmerAnimation .galleryDimmerBar.bottom'), 0.8, {
        scaleX: 0
      }, {
        ease: Power3.easeInOut,
        scaleX: 1
      }, '-=0.8');
    });
    return console.log(this.fullpage);
  };

  Base.prototype.pageTransitionFrame = function() {
    this.pageTransitionFrame = new TimelineLite({
      paused: true
    });
    this.pageTransitionFrame.fromTo($('.dimmerAnimation .dimmerBar.left'), 1, {
      scaleY: 0
    }, {
      scaleY: 1,
      ease: Power4.easeOut
    });
    this.pageTransitionFrame.fromTo($('.dimmerAnimation .dimmerBar.top'), 1, {
      ease: Power4.easeOut,
      scaleX: 0
    }, {
      scaleX: 1
    }, '-=1');
    this.pageTransitionFrame.fromTo($('.dimmerAnimation .dimmerBar.right'), 1, {
      ease: Power4.easeOut,
      scaleY: 0
    }, {
      scaleY: 1
    }, '-=1');
    return this.pageTransitionFrame.fromTo($('.dimmerAnimation .dimmerBar.bottom'), 1, {
      ease: Power4.easeOut,
      scaleX: 0
    }, {
      scaleX: 1
    }, '-=1');
  };

  Base.prototype.pageTransitionFrame = function() {
    return this.pageTransitionFrame = new TimelineLite({
      paused: true
    });
  };

  Base.prototype.mobileViewport = function() {
    var vh;
    vh = window.innerHeight * 0.01;
    return document.documentElement.style.setProperty('--vh', '${vh}px');
  };

  Base.prototype.resetHeight = function() {
    return document.body.style.height = window.innerHeight + "px";
  };

  Base.prototype.onResize = function() {
    var ref, that;
    that = this;
    this.resetHeight();
    if ((ref = this.gallery) != null) {
      ref.update(true);
    }
    return setTimeout((function() {
      var ref1;
      return (ref1 = that.gallery) != null ? ref1.update(true) : void 0;
    }), 2000);
  };

  Base.prototype.destroy = function(playAnimation) {
    var gallery;
    if (playAnimation == null) {
      playAnimation = true;
    }
    window.pageTransition.animOut();
    if ($(".swiper-wrapper.gallery").length === 1) {
      gallery = $(".swiper-wrapper.gallery");
      gallery.data('lightGallery').destroy();
    }
    return Base.__super__.destroy.apply(this, arguments);
  };

  Base.prototype.destroyed = function() {
    var df, ref, ref1;
    Base.__super__.destroyed.apply(this, arguments);
    console.log('destroyed');
    if ((ref = this.fullpage) != null) {
      ref.destroy();
    }
    if ((ref1 = this.video) != null) {
      ref1.destroy();
    }
    this.fullpage = null;
    $('body').off('click', '.gallery-swiper .swiper-slide');
    $('.gallery-swiper-fullscreen').remove();
    df = null;
    return $(window).off("resize");
  };

  return Base;

})(Template);

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.Collections = (function(superClass) {
  extend(Collections, superClass);

  function Collections() {
    return Collections.__super__.constructor.apply(this, arguments);
  }

  Collections.prototype.pageReady = function() {
    Collections.__super__.pageReady.apply(this, arguments);
    return console.log('sdsdsd');
  };

  return Collections;

})(Base);

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.Contact = (function(superClass) {
  extend(Contact, superClass);

  function Contact() {
    return Contact.__super__.constructor.apply(this, arguments);
  }

  Contact.prototype.pageReady = function() {
    Contact.__super__.pageReady.apply(this, arguments);
    if (this.pageChange) {
      return wpcf7.initForm(this.el.find('form'));
    }
  };

  return Contact;

})(Base);

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.Plain = (function(superClass) {
  extend(Plain, superClass);

  function Plain() {
    return Plain.__super__.constructor.apply(this, arguments);
  }

  Plain.prototype.pageReady = function() {
    Plain.__super__.pageReady.apply(this, arguments);
    return console.log('sdsdsd');
  };

  return Plain;

})(Base);

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.Home = (function(superClass) {
  extend(Home, superClass);

  function Home() {
    return Home.__super__.constructor.apply(this, arguments);
  }

  Home.prototype.pageReady = function() {
    return Home.__super__.pageReady.apply(this, arguments);
  };

  return Home;

})(Base);

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.NotFound = (function(superClass) {
  extend(NotFound, superClass);

  function NotFound() {
    return NotFound.__super__.constructor.apply(this, arguments);
  }

  NotFound.prototype.pageReady = function() {
    NotFound.__super__.pageReady.apply(this, arguments);
    return window.document.location.href = "/";
  };

  return NotFound;

})(Base);

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.Plain = (function(superClass) {
  extend(Plain, superClass);

  function Plain() {
    return Plain.__super__.constructor.apply(this, arguments);
  }

  Plain.prototype.pageReady = function() {
    return Plain.__super__.pageReady.apply(this, arguments);
  };

  return Plain;

})(Base);

this.Main = (function() {
  function Main() {
    window.touch = 'ontouchstart' in document.documentElement;
    this.init();
  }

  Main.prototype.init = function() {
    this.bodyFont = new BodyFontSize($('body'));
    return this.preloadScreen();
  };

  Main.prototype.preloadScreen = function() {
    var deferreds, imgDefer, preloadTransitionDone, that;
    that = this;
    deferreds = [];
    TweenMax.to($(".preload-screen .logo"), 1, {
      opacity: 1,
      scale: 1,
      ease: Power3.easeOut,
      onComplete: function() {
        return preloadTransitionDone();
      }
    });
    preloadTransitionDone = function() {
      TweenMax.to($(".preload-screen .logo"), 0.7, {
        height: $('header .logo').innerHeight(),
        y: $('header .logo').offset().top,
        ease: Power3.easeIn,
        onComplete: function() {
          return $(".preload-screen").fadeOut("slow");
        }
      });
      that.navigation = new Navigation();
      that.customCursor = new CustomCursor();
      window.pageTransition = new PageToPageTransition();

      /* things to do when all images loaded */
    };
    this.pixelcarve = new Pixelcarve();
    this.header = new Header();
    imgDefer = function() {
      var i;
      imgDefer = document.getElementsByTagName('img');
      i = 0;
      while (i < imgDefer.length) {
        if (imgDefer[i].getAttribute('data-src')) {
          imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'));
        }
        i++;
      }
    };
    this.resize();
    return this.show();
  };

  Main.prototype.resize = function() {
    this.windowWidth = this.bodyFont.viewport().width;
    this.windowHeight = this.bodyFont.viewport().height;
    this.isMobileWidth = this.windowWidth <= this.MOBILE_WIDTH ? true : false;
    return this.bodyFontSize = this.bodyFont.calculate();
  };

  Main.prototype.show = function() {
    return TweenLite.to($('body'), 0.5, {
      autoAlpha: 1,
      delay: 0.5
    });
  };

  return Main;

})();

document.addEventListener('gesturestart', function(e) {
  return e.preventDefault();
});

window.jQuery = window.$ = jQuery;

$(document).ready(function($) {
  var resizeTimeout;
  document.oncontextmenu = new Function("return false;");
  window.app = new Main();
  window.app.resize();
  resizeTimeout = null;
  return $(window).resize(function() {
    clearTimeout(resizeTimeout);
    return resizeTimeout = setTimeout(function() {
      return window.app.resize();
    }, 500);
  });
});
