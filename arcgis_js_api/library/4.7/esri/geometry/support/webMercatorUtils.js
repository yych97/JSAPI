// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define(["require","exports","../SpatialReference","./spatialReferenceUtils"],function(v,l,n,c){function p(a,b,f,m,d){if("point"===a.type&&"point"===d.type)b=b(a.x,a.y,q,0,m),d.x=b[0],d.y=b[1];else if("extent"===a.type&&"extent"===d.type)e=b(a.xmin,a.ymin,q,0,m),d.xmin=e[0],d.ymin=e[1],b=b(a.xmax,a.ymax,q,0,m),d.xmax=b[0],d.ymax=b[1];else if("polyline"===a.type&&"polyline"===d.type||"polygon"===a.type&&"polygon"===d.type){var e="polyline"===a.type?a.paths:a.rings,g=[],k=void 0;for(a=0;a<e.length;a++){var c=
e[a],k=[];g.push(k);for(var h=0;h<c.length;h++)k.push(b(c[h][0],c[h][1],[0,0],0,m)),2<c[h].length&&k[h].push(c[h][2]),3<c[h].length&&k[h].push(c[h][3])}"polyline"===d.type?d.paths=g:d.rings=g}else if("multipoint"===a.type&&"multipoint"===d.type){e=a.points;g=[];for(a=0;a<e.length;a++)g[a]=b(e[a][0],e[a][1],[0,0],0,m),2<e[a].length&&g[a].push(e[a][2]),3<e[a].length&&g[a].push(e[a][3]);d.points=g}else if("mesh"===a.type&&"mesh"===d.type&&(e=a.vertexAttributes&&a.vertexAttributes.position,g=d.vertexAttributes&&
d.vertexAttributes.position,e))for(k=[0,0],a=0;a<e.length;a+=3)b(e[a],e[a+1],k,0,m),g[a]=k[0],g[a+1]=k[1];d.spatialReference=f;return d;var e}function u(a,b){a=a&&(null!=a.wkid||null!=a.wkt?a:a.spatialReference);b=b&&(null!=b.wkid||null!=b.wkt?b:b.spatialReference);return a&&b?c.equals(b,a)?!0:c.isWebMercator(b)&&c.isWGS84(a)||c.isWebMercator(a)&&c.isWGS84(b):!1}function r(a,b,f,c){void 0===f&&(f=[0,0]);void 0===c&&(c=0);89.99999<b?b=89.99999:-89.99999>b&&(b=-89.99999);b*=.017453292519943;f[c]=111319.49079327169*
a;f[c+1]=3189068.5*Math.log((1+Math.sin(b))/(1-Math.sin(b)));return f}function t(a,b,f,c,d){void 0===f&&(f=[0,0]);void 0===c&&(c=0);void 0===d&&(d=!1);a=a/6378137*57.29577951308232;f[c]=d?a:a-360*Math.floor((a+180)/360);f[c+1]=57.29577951308232*(1.5707963267948966-2*Math.atan(Math.exp(-1*b/6378137)));return f}Object.defineProperty(l,"__esModule",{value:!0});var q=[0,0];l.canProject=u;l.project=function(a,b){var f=a&&a.spatialReference;b=b&&(null!=b.wkid||null!=b.wkt?b:b.spatialReference);return u(f,
b)?c.equals(f,b)?a.clone():c.isWebMercator(b)?p(a,r,n.WebMercator,!1,a.clone()):c.isWGS84(b)?p(a,t,n.WGS84,!1,a.clone()):null:null};l.lngLatToXY=r;l.xyToLngLat=t;l.geographicToWebMercator=function(a,b,c){void 0===b&&(b=!1);void 0===c&&(c=a.clone());return p(a,r,n.WebMercator,b,c)};l.webMercatorToGeographic=function(a,b,c){void 0===b&&(b=!1);void 0===c&&(c=a.clone());return p(a,t,n.WGS84,b,c)}});