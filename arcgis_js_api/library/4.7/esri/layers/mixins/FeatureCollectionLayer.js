// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("../../core/declare dojo/_base/lang dojo/_base/array dojo/dom-construct dojo/dom-style ../../geometry/SpatialReference ../../geometry/Extent ../../geometry/support/webMercatorUtils ../../renderers/SimpleRenderer ../../PopupTemplate ../FeatureLayer ../Layer".split(" "),function(k,d,e,g,l,m,n,h,f,p,q,r){return k([r],{declaredClass:"esri.layers.mixins.FeatureCollectionLayer",constructor:function(a,b){this.pointSymbol=b&&b.pointSymbol;this.polylineSymbol=b&&b.polylineSymbol;this.polygonSymbol=
b&&b.polygonSymbol;this._outSR=b&&(b.outSpatialReference||b.outSR)||new m({wkid:4326});this._options=d.mixin({},b)},parse:function(){console.error("parse function has not been implemented")},getFeatureLayers:function(){var a=[];this._fLayers&&(a=a.concat(this._fLayers));return a},onRefresh:function(){},onOpacityChange:function(){},refresh:function(){this.loaded&&this._map&&!this._io&&this.visible&&this._createLayer()},_createLayer:function(a){var b=this;this._fireUpdateStart();a=this.parse(a);a.then(function(a){b._io=
null;b._initLayer(a)});a.then(null,function(a){b._io=null;a=d.mixin(Error(),a);a.message="Unable to load resource: "+b.url+" "+(a.message||"");b._fireUpdateEnd(a);b.onError(a)})},_initLayer:function(a){this.loaded&&this._removeInternalLayers();this.name=a.name;this.description=a.description;this.snippet=a.snippet;this.defaultVisibility=void 0!==a.visibility?this.visible=!!a.visibility:this.visible=!0;this.featureInfos=a.featureInfos;this.fullExtent=n.fromJSON(a.lookAtExtent);this.copyright=a.author||
a.copyright;var b;(a=d.getObject("featureCollection.layers",!1,a))&&0<a.length&&(this._fLayers=[],e.forEach(a,function(a,e){var c=d.getObject("featureSet.features",!1,a);c&&0<c.length&&(b=d.mixin({outFields:["*"],popupTemplate:a.popupInfo?new p(a.popupInfo):null,editable:!1},this._options),b.id&&(b.id=b.id+"_"+e),a.layerDefinition.capabilities="Query,Data",a=new q(a,b),a.geometryType&&(this["_"+a.geometryType]=a),this._fLayers.push(a))},this),0===this._fLayers.length&&delete this._fLayers);this.items=
[];this._point&&(this.items=this.items.concat(this._point.graphics),this.pointSymbol&&(a=new f({symbol:this.pointSymbol}),this._point.setRenderer(a)));this._polyline&&(this.items=this.items.concat(this._polyline.graphics),this.polylineSymbol&&(a=new f({symbol:this.polylineSymbol}),this._polyline.setRenderer(a)));this._polygon&&(this.items=this.items.concat(this._polygon.graphics),this.polygonSymbol&&(a=new f({symbol:this.polygonSymbol}),this._polygon.setRenderer(a)));this._fireUpdateEnd();this.loaded&&
(this._addInternalLayers(),this.onRefresh())},_addInternalLayers:function(){var a=this._map;this._fireUpdateStart();var b=a.spatialReference,c=this._outSR,d;if(b.wkid)d=b.isWebMercator&&c.isWebMercator||b.wkid===c.wkid;else if(b.wkt)d=b.wkt===c.wkt;else{console.log("_setMap - map has invalid spatial reference");return}if(!d)if(b.isWebMercator&&c.isWGS84)this._converter=h.geographicToWebMercator;else if(c.isWebMercator&&b.isWGS84)this._converter=h.webMercatorToGeographic;else{console.log("_setMap - unsupported workflow. Spatial reference of the map and layer do not match, and the conversion cannot be done on the client.");
return}(b=this._fLayers)&&0<b.length&&e.forEach(b,function(b){if(this._converter){var c=b.graphics,d,e,f=c?c.length:0;for(d=0;d<f;d++)(e=c[d].geometry)&&c[d].setGeometry(this._converter(e))}a.addLayer(b)},this);this.setVisibility(this.visible);this._fireUpdateEnd()},_removeInternalLayers:function(){var a=this._map;a&&e.forEach(this.getFeatureLayers(),a.removeLayer,a)},setScaleRange:function(a,b){this.inherited(arguments);e.forEach(this.getFeatureLayers(),function(c){c.setScaleRange(a,b)});this._options.minScale=
this.minScale;this._options.maxScale=this.maxScale},setOpacity:function(a){this.opacity!=a&&(e.forEach(this.getFeatureLayers(),function(b){b.setOpacity(a)}),this.opacity=this._options.opacity=a,this.onOpacityChange(a))},onVisibilityChange:function(a){this._fireUpdateStart();e.forEach(this.getFeatureLayers(),function(b){b.setVisibility(a)});this._fireUpdateEnd()},_setMap:function(a,b){this.inherited(arguments);this._map=a;var c=this._div=g.create("div",null,b);l.set(c,"position","absolute");this._addInternalLayers();
this.evaluateSuspension();return c},_unsetMap:function(a,b){this._io&&this._io.cancel();this._extChgHandle.remove();delete this._extChgHandle;this._removeInternalLayers();var c=this._div;c&&(b.removeChild(c),g.destroy(c));this._div=null;this.inherited(arguments)}})});