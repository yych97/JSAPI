// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/urlUtils","../../geometry/Extent","../../geometry/SpatialReference"],function(K,n,I,y,t){function u(a){return J.some(function(c){var b=c[1];return a>=c[0]&&a<=b})}function D(a){var c=[];a.forEach(function(a){c.push(a);a.sublayers&&a.sublayers.length&&(c=c.concat(D(a.sublayers)),delete a.sublayers)});return c}function C(a,c,b,d){return(a=h(a,b))?a.getAttribute(c):d}function h(a,c){return(a=c&&c.getElementsByTagName(a))&&0<a.length?a[0]:null}function m(a,c,b){return(a=
h(a,c))?a.textContent:b}function r(a,c,b){if(!a)return null;var d=parseFloat(a.getAttribute("minx")),g=parseFloat(a.getAttribute("miny")),e=parseFloat(a.getAttribute("maxx"));a=parseFloat(a.getAttribute("maxy"));b?(b=isNaN(g)?-Number.MAX_VALUE:g,d=isNaN(d)?-Number.MAX_VALUE:d,g=isNaN(a)?Number.MAX_VALUE:a,e=isNaN(e)?Number.MAX_VALUE:e):(b=isNaN(d)?-Number.MAX_VALUE:d,d=isNaN(g)?-Number.MAX_VALUE:g,g=isNaN(e)?Number.MAX_VALUE:e,e=isNaN(a)?Number.MAX_VALUE:a);c=new t({wkid:c});return new y({xmin:b,
ymin:d,xmax:g,ymax:e,spatialReference:c})}function E(a,c){a=h(c,a);if(a=h("DCPType",a))if(a=h("HTTP",a))if(a=h("Get",a)){var b=C("OnlineResource","xlink:href",a,null);if(b){b.indexOf("\x26")===b.length-1&&(b=b.substring(0,b.length-1));a=["service","request"];c=[];var b=I.urlToObject(b),d;for(d in b.query)b.query.hasOwnProperty(d)&&-1===a.indexOf(d.toLowerCase())&&c.push(d+"\x3d"+b.query[d]);return b.path+(c.length?"?"+c.join("\x26"):"")}}return null}function F(a,c){var b=a.getElementsByTagName("Operation");
if(b&&b.length){var d=[];Array.prototype.slice.call(b).forEach(function(a){a.getAttribute("name")===c&&(a=a.getElementsByTagName("Format"),Array.prototype.slice.call(a).forEach(function(a){d.push(a.textContent)}))});return d}a=h(c,a).getElementsByTagName("Format");return Array.prototype.slice.call(a).map(function(a){return a.textContent})}function z(a,c,b){if(!a)return null;var d={id:G++,fullExtents:[],parentLayerId:null,queryable:"1"===a.getAttribute("queryable"),spatialReferences:[],sublayers:null},
g=h("LatLonBoundingBox",a),e=h("EX_GeographicBoundingBox",a),k=null;g&&(k=r(g,4326));e&&(k=new y(0,0,0,0,new t({wkid:4326})),k.xmin=parseFloat(m("westBoundLongitude",e,0)),k.ymin=parseFloat(m("southBoundLatitude",e,0)),k.xmax=parseFloat(m("eastBoundLongitude",e,0)),k.ymax=parseFloat(m("northBoundLatitude",e,0)));g||e||(k=new y(-180,-90,180,90,new t({wkid:4326})));var n=-1<["1.0.0","1.1.0","1.1.1"].indexOf(c)?"SRS":"CRS";Array.prototype.slice.call(a.childNodes).forEach(function(a){if("Name"===a.nodeName)d.name=
a.textContent||"";else if("Title"===a.nodeName)d.title=a.textContent||"";else if("Abstract"===a.nodeName)d.description=a.textContent||"";else if("BoundingBox"===a.nodeName){var e=a.getAttribute(n);if(e&&0===e.indexOf("EPSG:")){var f=parseInt(e.substring(5),10);0===f||isNaN(f)||k||(k="1.3.0"===c?r(a,f,u(f)):r(a,f))}(f=e&&e.indexOf(":"))&&-1<f&&(f=parseInt(e.substring(f+1,e.length),10),0===f||isNaN(f)||(f=q[f]?q[f]:f),a="1.3.0"===c?r(a,f,u(f)):r(a,f),d.fullExtents.push(a))}else if(a.nodeName===n)a.textContent.split(" ").forEach(function(a){a=
-1<a.indexOf(":")?parseInt(a.split(":")[1],10):parseInt(a,10);0===a||isNaN(a)||(q[a]&&(a=q[a]),-1===d.spatialReferences.indexOf(a)&&d.spatialReferences.push(a))});else if("Style"!==a.nodeName||d.legendURL)"Layer"===a.nodeName&&(a=z(a,c,b))&&(a.parentLayerId=d.id,d.sublayers||(d.sublayers=[]),d.sublayers.push(a));else if(a=h("LegendURL",a))if(a=h("OnlineResource",a))d.legendURL=a.getAttribute("xlink:href"),b&&(d.legendURL=d.legendURL.replace(/^http:/i,"https:"))});d.extent=k&&k.toJSON();return d}Object.defineProperty(n,
"__esModule",{value:!0});var J=[[4001,4999],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3416,3416],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],
[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]],q={84:4326,83:4269,27:4267},G;n.parseCapabilities=function(a,c){if(a){G=-1;"string"===typeof a&&(a=(new DOMParser).parseFromString(a,"text/xml"));var b=a.documentElement,d=h("Layer",b);if(d){var g=C("WMS_Capabilities","version",b,null)||C("WMT_MS_Capabilities","version",b,"1.3.0"),e=h("Service",b);a=m("Title",e,"")||
m("Name",e,"");var k=m("AccessConstraints",e,""),n=m("Abstract",e,""),r=parseInt(m("MaxWidth",e,5E3),10),e=parseInt(m("MaxHeight",e,5E3),10),p=h("Capability",b),f=F(b,"GetMap"),w=c&&-1<c.toLowerCase().indexOf("https");c=E(b,"GetMap");w&&(c=c.replace(/^http:/i,"https:"));var l=z(d,g,w),q=0,t;Array.prototype.slice.call(p.childNodes).forEach(function(a){"Layer"===a.nodeName&&(0===q?t=a:(1===q&&l.name&&(l.name="",l.sublayers.push(z(t,g,w))),l.sublayers.push(z(a,g,w))),q++)});if(!l)return null;var p=[],
v,x,d=l.fullExtents;(p=l.sublayers)&&0!==p.length||p.push(l);v=l.extent;v||(v=new y(p[0].extent),l.extent=v.toJSON(),v=l.extent);x=l.spatialReferences;if(!x.length&&0<p.length){var u=function(a){var c=[];a.sublayers.forEach(function(a){!c.length&&a.spatialReferences.length&&(c=a.spatialReferences||u(a))});return c};p.forEach(function(a){x.length||(x=a.spatialReferences||u(a))})}var A=E(b,"GetFeatureInfo"),B;A&&(b=F(b,"GetFeatureInfo"),-1<b.indexOf("text/html")?B="text/html":-1<b.indexOf("text/plain")&&
(B="text/plain"),w&&(A=A.replace(/^http:/i,"https:")));if(!B){var H=function(a){a&&(a.queryable=!1,a.sublayers&&a.sublayers.forEach(function(a){H(a)}))};H(l)}b=D(p);return{copyright:k,description:n,extent:v,fullExtents:d,featureInfoFormat:B,featureInfoUrl:A,mapUrl:c,maxImageWidth:r,maxImageHeight:e,layers:b,spatialReferences:x,supportedImageFormatTypes:f,title:a,version:g}}}};n.coordsReversed=u;n.getPopupLayers=function(a){return a.length?a.filter(function(a){return a.popupEnabled&&a.name&&a.queryable}).map(function(a){return a.name}).join(","):
""}});