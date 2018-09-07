// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports dojo/_base/lang ../../../../Color ../../../../core/screenUtils ../../../../geometry/Polygon ../../../../symbols/SimpleMarkerSymbol ../../../../symbols/support/gfxUtils ../../libs/gl-matrix/mat2d ../../libs/gl-matrix/mat2dExtras".split(" "),function(Q,m,C,L,v,M,t,w,x,y){function z(c,a){if(!a)return null;a.toRgba?(c[0]=a.r,c[1]=a.g,c[2]=a.b,c[3]=a.a):(c[0]=a[0],c[1]=a[1],c[2]=a[2],c[3]=a[3]);return c}function A(c,a,b){null!=b&&(c[0]=a[0],c[1]=a[1],c[2]=a[2],c[3]=b);return c}
function D(c,a,b){var d=a[0]/a[1];c[0]=c[1]=1;isNaN(b)||(1<d?(c[0]=b/a[0],c[1]=b/d/a[1]):(c[1]=b/a[1],c[0]=b*d/a[0]));return c}function E(c,a,b,d,f,h,g){var e=f.symbol;b=c.toScreenPoint(N,b,g[0]);g=[b.x,b.y];c=b.x;b=b.y;var n=f.heading,q=f.size&&f.size[0],l,k;x.identity(p);"number"===typeof q&&(k=isFinite(q)&&q);k=(q=k&&isFinite(k)&&!isNaN(k))?v.pt2px(k):NaN;h&&y.rotategAt(p,p,h,g);n&&y.rotategAt(p,p,n,g);h=v.pt2px(e.xoffset);var n=v.pt2px(e.yoffset),u;if(0!==h||0!==n)u=[h,-n];h=null;0!==e.angle&&
(h=x.create(),y.rotategAt(h,h,e.angle,g));var r;if("simple-marker"===e.type)switch(l=e.style,f=Math.round,k=q?k:v.pt2px(e.size),q=void 0,l){case t.STYLE_SQUARE:case t.STYLE_CROSS:case t.STYLE_X:case t.STYLE_DIAMOND:q=isNaN(k)?16:.5*k;l=B(a,d,F(l,c,b,f(c-q),f(c+q),f(b-q),f(b+q)));break;case t.STYLE_PATH:l=r=B(a,d,e.path);r=r.getBoundingBox();e=D(x.create(),[r.width,r.height],k);1===e[0]&&1===e[3]||y.scaleAt(p,p,e,g);r=[-(r.x+.5*r.width)+c,-(r.y+.5*r.height)+b];break;default:q=isNaN(k)?16:.5*k,l=G(a,
d,{cx:c,cy:b,r:q})}else if("picture-marker"===e.type){g=l=null;var n=v.pt2px(e.width),m=v.pt2px(e.height);q?(g=k,l=n/m*g):(l=n,g=m);u&&(null!=u[0]&&(u[0]=u[0]/n*l),null!=u[1]&&(u[1]=u[1]/m*g));l=H(a,d,{x:c-.5*l,y:b-.5*g,width:l,height:g,src:e.url});(k=l.getNode())&&(null!=f.opacity?k.setAttribute("opacity",f.opacity.toString()):k.setAttribute("opacity","1"))}else if("text"===e.type){if(f=e.font&&e.font.clone())f.size=q?k:v.pt2px(f.size);l=I(a,d,{type:"text",text:e.text,x:c,y:b,align:w.getSVGAlign(e),
decoration:e.decoration||f&&f.decoration,rotated:e.rotated,kerning:e.kerning});f&&l.setFont(f);k=l.getNode();a=w.getSVGBaseline(e);e=w.getSVGBaselineShift(e);k&&(k.setAttribute("dominant-baseline",a),e&&k.setAttribute("baseline-shift",e))}u&&x.translate(p,p,u);h&&x.multiply(p,p,h);r&&x.translate(p,p,r);l.setTransform(p);return l}function H(c,a,b){return a?a.setShape(b):c.createImage(b)}function G(c,a,b){return a?a.setShape(b):c.createCircle(b)}function B(c,a,b){b=Array.isArray(b)?b.join(" "):b;return a?
a.setShape(b):c.createPath(b)}function I(c,a,b){return a?a.setShape(b):c.createText(b)}function J(c,a){a=a&&a.shape&&a.shape.type;var b=c&&c.type;c=c&&c.style;b&&(c=O[b]||c);P[c]&&(c="path");return!(!a||!c||a===c)}function F(c,a,b,d,f,h,g,e){switch(c){case t.STYLE_SQUARE:return["M",d+","+h,f+","+h,f+","+g,d+","+g,"Z"];case t.STYLE_CROSS:return["M",a+","+h,a+","+g,"M",d+","+b,f+","+b];case t.STYLE_X:return["M",d+","+h,f+","+g,"M",d+","+g,f+","+h];case t.STYLE_DIAMOND:return["M",a+","+h,f+","+b,a+","+
g,d+","+b,"Z"];case t.STYLE_TARGET:return["M",d+","+h,f+","+h,f+","+g,d+","+g,d+","+h,"M",d-e+","+b,d+","+b,"M",a+","+(h-e),a+","+h,"M",f+e+","+b,f+","+b,"M",a+","+(g+e),a+","+g]}}function K(c,a){var b=a.symbol;if("picture-marker"!==b.type){var d=w.getFill(b);if("simple-marker"===b.type){var f=b.style,h=(b=w.getStroke(b))&&b.color,f=f===t.STYLE_X||f===t.STYLE_CROSS,g=a.opacity;(a=a.color||z([0,0,0,0],f?h:d))&&null!=g&&(a=A([0,0,0,0],a,g));a&&(f?a!==h&&(b=b?C.mixin({},b):{},b.color=a):a!==d&&(d=a));
c.setFill(d).setStroke(b)}else"text"===b.type&&(g=a.opacity,(a=a.color||z([0,0,0,0],d))&&null!=g&&(a=A([0,0,0,0],a,g)),a&&a!==d&&(d=a),c.setFill(d))}}Object.defineProperty(m,"__esModule",{value:!0});m.getScalingVector=D;var N={x:0,y:0},p=x.create();m.drawPoint=E;m.drawMarkers=function(c,a,b,d,f,h,g,e){var n=f.symbol;b=b.points;a=d||a.createGroup();d=[0];a.children[0]&&J(n,a.children[0])&&a.clear();for(var q=0,l=b.length,n=0;n<l;n++)for(var k=b[n],m=g.length,r=0;r<m;r++){d[0]=g[r];var p=E(c,a,{x:k[0],
y:k[1]},a.children[q++],f,h,d);p.getNode().gfxObject=e;a.add(p)}c=a.children.length;if(b.length*g.length<c)for(g=b.length*g.length,n=c-1;n>=g;n--)a.children[n].removeShape();return a};m.drawShape=function(c,a,b,d,f){var h=[];"extent"===b.type&&(b=M.fromExtent(b));if("polyline"===b.type||"polygon"===b.type){for(var g=f.length,e=0;e<g;e++)h=h.concat(c.toScreenPath(b,f[e]));d=B(a,d,h)}return d};m.drawRect=function(c,a,b){return a?a.setShape(b):c.createRect(b)};m.drawImage=H;m.drawCircle=G;m.drawPath=
B;m.drawText=I;var O={"picture-marker":"image","picture-fill":"path","simple-fill":"path","simple-line":"path",text:"text"},P={square:1,cross:1,x:1,diamond:1,target:1};m.isShapeInvalid=J;m.smsToPath=F;m.stylePoint=K;m.styleMarkers=function(c,a){for(var b=c.children.length,d=0;d<b;d++)K(c.children[d],a)};m.styleShape=function(c,a){var b=a.symbol,d=a.size,f=a.color,h=a.opacity,g=a.outlineSize;a=w.getStroke(b);var e=w.getFill(b),n=!1,m;"simple-line"===b.type?(n=!0,m="none"!==b.style):m=b.outline&&"none"!==
b.outline.style;var l,k,p;if(null!=d||null!=g)if(d=d&&isFinite(d[0])&&d[0],g=n?null:g,null!=d||null!=g)p=v.pt2px(g||d);d="picture-fill"===b.type;!f&&null==h||d||(n?(l=f||a&&a.color&&z([0,0,0,0],a.color))&&null!=h&&(l=A(l,l,h)):e&&(k=f||z([0,0,0,0],e))&&null!=h&&(k=A(k,k,h)));!m||null==p&&!l?c.setStroke(a):c.setStroke(C.mixin({},a,null!=p?{width:p}:null,l&&{color:l}));b=f&&new L(f)||b.color;e&&"pattern"===e.type&&b&&!d?w.getPatternUrlWithColor(e.src,b.toCss(!0)).then(function(a){e.src=a;c.setFill(e)}):
c.setFill(k||e);c.rawNode.setAttribute("vector-effect","non-scaling-stroke")}});