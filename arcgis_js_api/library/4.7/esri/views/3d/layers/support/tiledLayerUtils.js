// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports dojo/request/xhr ../../../../core/Error ../../../../core/promiseUtils ../../../../layers/support/arcgisLayerUrl".split(" "),function(l,c,h,d,e,f){function k(a){var b=null,g=a.search(/\/rest\/services\//i);0<g&&(b=a.substring(0,g+6));return b}Object.defineProperty(c,"__esModule",{value:!0});c.checkArcGISServiceVersionCompatibility=function(a){if(!f.isHostedAgolService(a.url)){if(10.22>a.version)return a=new d("layerview:service-version-too-old","Tiled Map Layers on servers prior to 10.2.2 are not supported. Detected version: "+
a.version,{minVersion:10.22,detectedVersion:a.version}),e.reject(a);if(10.22!==a.version||f.isHostedSecuredProxyService(a.url,a.get("portalItem.id")))return e.resolve();a=k(a.url);var b=new d("tiledlayerview3d:service-missing-cors-patch","Tiled Map Layers from 10.2.2 servers are only supported if all server updates have been applied.");return h(a+"self?f\x3djson",{headers:{"X-Requested-With":null},timeout:1E4,handleAs:"json"}).then(function(a){if(!a||a.error)throw b;}).catch(function(){throw b;})}};
c.throwIfError=function(a){if(a)throw a;}});