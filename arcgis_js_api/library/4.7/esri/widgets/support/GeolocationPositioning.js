// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../Graphic ../../core/Accessor ../../core/Error ../../core/Evented ../../core/geolocationUtils ../../core/promiseUtils ../../core/accessorSupport/decorators ../../symbols/PictureMarkerSymbol".split(" "),function(k,t,l,e,m,n,p,q,g,h,d,r){return function(f){function c(){var a=null!==f&&f.apply(this,arguments)||this;a._geolocationUsable=!0;a._iconPath=k.toUrl("../../images/support/sdk_gps_location.png");
a.geolocationOptions=null;a.goToLocationEnabled=!0;a.graphic=new m({symbol:new r({url:a._iconPath,width:21,height:21})});a.scale=null;a.useHeadingEnabled=!0;a.view=null;return a}l(c,f);c.prototype.initialize=function(){g.supported()||(this._geolocationUsable=!1)};c.prototype.destroy=function(){this._clear();this.view=null};c.prototype._clear=function(){this.view&&this.view.graphics.remove(this.graphic)};c.prototype._getScaleWithinConstraints=function(a,b){return b?"2d"===b.type?(b=b.constraints,Math.min(b.effectiveMinScale,
Math.max(b.effectiveMaxScale,a))):a:a};c.prototype._getScale=function(a,b){a=this.scale;return this._getScaleWithinConstraints("number"===typeof a?a:2500,b)};c.prototype._getHeading=function(a,b){b=b.spatialReference;a=a.coords&&a.coords.heading;if(!(!b||!b.isWebMercator&&!b.isWGS84||"number"!==typeof a||0>a||360<a))return a};c.prototype._animatePoint=function(a,b,c){if(!this.goToLocationEnabled)return h.resolve(b);var d=this.view,e=this.useHeadingEnabled?this._getHeading(b,d):void 0;a={target:a,
scale:c};void 0!==e&&"3d"===d.type&&(a.heading=e);void 0!==e&&"2d"===d.type&&(d.rotation=e);return d.goTo(a).then(function(){return b})};c.prototype._setPosition=function(a){var b=this;return g.positionToPoint(a,this.view).then(function(c){b.graphic&&(b.graphic.geometry=c);var d=b._getScale(a,b.view);b._animatePoint(c,a,d);return a}).catch(function(){return h.reject(new p("positioning:invalid-point","Cannot position invalid point"))})};e([d.property()],c.prototype,"geolocationOptions",void 0);e([d.property()],
c.prototype,"goToLocationEnabled",void 0);e([d.property()],c.prototype,"graphic",void 0);e([d.property()],c.prototype,"scale",void 0);e([d.property()],c.prototype,"useHeadingEnabled",void 0);e([d.property()],c.prototype,"view",void 0);return c=e([d.subclass("esri.widgets.support.GeolocationPositioning")],c)}(d.declared(n,q))});