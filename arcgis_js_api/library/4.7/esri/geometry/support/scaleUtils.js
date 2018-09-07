// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define(["require","exports","../../config","../../core/kebabDictionary","./WKIDUnitConversion"],function(u,b,h,r,t){function k(a){return l.fromJSON(a.toLowerCase())||null}function e(a){return g(a)||m}function g(a){var c,d,b;a&&("object"===typeof a?(c=a.wkid,d=a.wkt):"number"===typeof a?c=a:"string"===typeof a&&(d=a));c?b=f.values[f[c]]:d&&-1!==d.search(/^PROJCS/i)&&(a=n.exec(d))&&a[1]&&(b=parseFloat(a[1].split(",")[1]));return b}function p(a){var c,d,b;a&&("object"===typeof a?(c=a.wkid,d=a.wkt):"number"===
typeof a?c=a:"string"===typeof a&&(d=a));c?b=f.units[f[c]]:d&&-1!==d.search(/^PROJCS/i)&&(a=n.exec(d))&&a[1]&&(b=(a=/[\\"\\']{1}([^\\"\\']+)/.exec(a[1]))&&a[1]);return b?k(b):null}function q(a,c){c=e(c);return a/(39.37*c*h.screenDPI)}Object.defineProperty(b,"__esModule",{value:!0});var m=20015077/180,n=/UNIT\[([^\]]+)\]\]$/i,f=t,l=r({meter:"meters",foot:"feet",foot_us:"us-feet",foot_clarke:"clarke-feet",yard_clarke:"clarke-yards",link_clarke:"clarke-links",yard_sears:"sears-yards",foot_sears:"sears-feet",
chain_sears:"sears-chains",chain_benoit_1895_b:"benoit-1895-b-chains",yard_indian:"indian-yards",yard_indian_1937:"indian-1937-yards",foot_gold_coast:"gold-coast-feet",chain_sears_1922_truncated:"sears-1922-truncated-chains","50_kilometers":"50-kilometers","150_kilometers":"150-kilometers"},{ignoreUnknown:!0});b.unitFromRESTJSON=k;b.unitToRESTJSON=function(a){return l.toJSON(a)||null};b.getMetersPerVerticalUnitForSR=function(a){a=e(a);return 1E5<a?1:a};b.getVerticalUnitStringForSR=function(a){return 1E5<
e(a)?"meters":p(a)};b.getMetersPerUnitForSR=e;b.getMetersPerUnit=g;b.getUnitString=p;b.getScale=function(a,c){c=c||a.extent;a=a.width;var b=g(c&&c.spatialReference);return c&&a?c.width/a*(b||m)*39.37*h.screenDPI:0};b.getResolutionForScale=q;b.getExtentForScale=function(a,c){var b=a.extent;a=a.width;c=q(c,b.spatialReference);return b.clone().expand(c*a/b.width)}});