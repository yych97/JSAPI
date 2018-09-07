// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../Graphic","../../../core/promiseUtils","./geometryUtils"],function(z,k,v,p,m){function w(a){var b=a.source,d=a.spatialReference,c=a.location,f=a.distance,n=a.sourceIndex,h=a.view;a=b.locator;var l=b.zoomScale,e=h&&h.scale;d&&(a.outSpatialReference=d);return a.locationToAddress(c,f).then(function(a){return q([a],{sourceIndex:n,scale:e,view:h,zoomScale:l})})}function r(a,b){var d=a.filter,c=a.searchExtent;a=a.withinViewEnabled;var f=b&&b.extent;return(b=m.createExtentFromGeometry(d&&
d.geometry,b,b&&b.scale))||c||(a&&f?f:void 0)}function x(a){var b=a.source,d=a.suggestResult,c=a.spatialReference,f=a.view,n=a.maxResults,h=a.sourceIndex,l=b&&b.zoomScale;a=d.text.trim();if(!a)return p.resolve();a=""+(!d.key&&b.prefix?b.prefix:"")+a+(!d.key&&b.suffix?b.suffix:"");var e={},g=b.locator,t=f&&f.scale,k=r(b,f);if(!g)return p.resolve();b.categories&&(e.categories=b.categories);c&&(g.outSpatialReference=c);if(c=u(f,b,t))e.location=c.location,e.distance=c.distance;e.maxLocations=n;k&&(e.searchExtent=
k);b.countryCode&&(e.countryCode=b.countryCode);var m=d.key;m&&(e.magicKey=m);e.address={};e.address[b.singleLineFieldName||"Single Line Input"]=a;b.outFields&&(e.outFields=b.outFields);return g.addressToLocations(e).then(function(a){return q(a,{key:m,scale:t,sourceIndex:h,view:f,zoomScale:l})})}function y(a,b){return a.map(function(a){return{text:a.text,key:a.magicKey,sourceIndex:b}})}function q(a,b){return a.map(function(a){var c=b.key,d=b.scale,n=b.sourceIndex,h=b.view,l=b.zoomScale,e=a.extent,
g=a.location,k=a.address;a=new v({geometry:g,attributes:a.attributes});d=m.createExtentFromGeometry(e||g,h,d);h=l?m.scaleExtent(d,h,l):d;g=g?g.x+","+g.y:"";return{extent:h,feature:a,key:c,name:k||g,sourceIndex:n}})}function u(a,b,d){var c=b.localSearchOptions;if(a&&c&&c.hasOwnProperty("distance")&&c.hasOwnProperty("minScale")&&(b=c.minScale,c=c.distance,!b||d&&d<=b))return{location:a.get("extent.center"),distance:c}}Object.defineProperty(k,"__esModule",{value:!0});k.getResults=function(a){return a.location?
w(a):x(a)};k.getSuggestions=function(a){var b=a.source,d=a.spatialReference,c=a.view,f=a.suggestTerm,k=a.maxSuggestions,h=a.sourceIndex;a={};var l=b.locator,e=c&&c.scale,g=r(b,c);if(!l)return p.resolve();b.categories&&(a.categories=b.categories);l.outSpatialReference=d;if(d=u(c,b,e))a.location=d.location,a.distance=d.distance;f=f.trim();if(!f)return p.resolve();d=b.prefix;c=b.suffix;a.text=""+(void 0===d?"":d)+f+(void 0===c?"":c);g&&(a.searchExtent=g);a.maxSuggestions=k;b.countryCode&&(a.countryCode=
b.countryCode);return l.suggestLocations(a).then(function(a){return y(a,h)})}});