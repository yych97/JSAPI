// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/Collection ../core/Error ../core/lang ../core/accessorSupport/decorators ./IconSymbol3DLayer ./ObjectSymbol3DLayer ./Symbol3D ./TextSymbol3DLayer ./callouts/calloutUtils ./support/Symbol3DVerticalOffset".split(" "),function(u,v,k,d,l,m,b,c,n,p,q,r,e,t){var g=l.ofType({base:null,key:"type",typeMap:{icon:n,object:p,text:r}});return function(h){function a(a){a=h.call(this)||this;a.verticalOffset=null;
a.callout=null;a.symbolLayers=new g;a.type="point-3d";return a}k(a,h);f=a;a.prototype.writeSymbolLayers=function(a,c,d,b){var e=a.filter(function(a){return"text"!==a.type});b&&b.messages&&e.length<a.length&&(a=a.find(function(a){return"text"===a.type}),b.messages.push(new m("symbol-layer:unsupported","Symbol layers of type 'text' cannot be persisted in PointSymbol3D",{symbolLayer:a})));c[d]=e.map(function(a){return a.write({},b)}).toArray()};a.prototype.supportsCallout=function(){if(1!==(this.symbolLayers?
this.symbolLayers.length:0))return!1;switch(this.symbolLayers.getItemAt(0).type){case "icon":case "text":case "object":return!0}return!1};a.prototype.hasVisibleCallout=function(){return e.hasVisibleCallout(this)};a.prototype.hasVisibleVerticalOffset=function(){return e.hasVisibleVerticalOffset(this)};a.prototype.clone=function(){return new f({verticalOffset:b.clone(this.verticalOffset),callout:b.clone(this.callout),styleOrigin:b.clone(this.styleOrigin),symbolLayers:b.clone(this.symbolLayers),thumbnail:b.clone(this.thumbnail)})};
d([c.property({type:t.default,json:{write:!0}})],a.prototype,"verticalOffset",void 0);d([c.property(e.calloutProperty)],a.prototype,"callout",void 0);d([c.property({type:g})],a.prototype,"symbolLayers",void 0);d([c.writer("web-scene","symbolLayers")],a.prototype,"writeSymbolLayers",null);d([c.property()],a.prototype,"type",void 0);return a=f=d([c.subclass("esri.symbols.PointSymbol3D")],a);var f}(c.declared(q))});