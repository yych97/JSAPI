// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports dojo/i18n!../../nls/smartMapping dojo/_base/lang ../../../core/promiseUtils ../../../core/screenUtils ../../ClassBreaksRenderer ./support/utils ../statistics/summaryStatistics ../support/utils ../symbology/size ../../support/AuthoringInfo ../../support/AuthoringInfoVisualVariable ../../support/utils".split(" "),function(P,q,x,p,d,y,z,e,F,h,u,A,G,v){function H(a){if(!(a&&a.layer&&(a.field||a.valueExpression||a.sqlExpression)))return d.reject(e.createError("size-visual-variable:missing-parameters",
"'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required"));if(a.valueExpression&&!a.sqlExpression&&!a.view)return d.reject(e.createError("size-visual-variable:missing-parameters","View is required when 'valueExpression' is specified"));var b=p.mixin({},a);a=[0,1,2];var c=h.createLayerAdapter(b.layer,a);return(b.layer=c)?c.load().then(function(){var a=c.geometryType;if("mesh"===a)return d.reject(e.createError("size-visual-variable:invalid-parameters","Size visualization is not applicable to layers with 'mesh' geometry type"));
if(b.worldScale){if("polyline"===a||"polygon"===a)return d.reject(e.createError("size-visual-variable:not-supported","'worldScale' sizing is not supported for polyline and polygon layers"));if(!b.view||"3d"!==b.view.type)return d.reject(e.createError("size-visual-variable:invalid-parameters","'view' parameter should be an instance of SceneView when 'worldScale' parameter is true"))}a=h.getFieldsList({field:b.field,normalizationField:b.normalizationField,valueExpression:b.valueExpression});return(a=
e.verifyBasicFieldValidity(c,a,"size-visual-variable:invalid-parameters"))?d.reject(a):b}):d.reject(e.createError("size-visual-variable:invalid-parameters","'layer' must be one of these types: "+h.getLayerTypeLabels(a).join(", ")))}function I(a){if(!(a&&a.layer&&(a.field||a.valueExpression||a.sqlExpression)))return d.reject(e.createError("size-continuous-renderer:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required"));if(a.valueExpression&&!a.sqlExpression&&
!a.view)return d.reject(e.createError("size-continuous-renderer:missing-parameters","View is required when 'valueExpression' is specified"));var b=p.mixin({},a);b.symbolType=b.symbolType||"2d";b.defaultSymbolEnabled=null==b.defaultSymbolEnabled?!0:b.defaultSymbolEnabled;a=[0,1,2];var c=h.createLayerAdapter(b.layer,a);return(b.layer=c)?c.load().then(function(){var a=c.geometryType,n=-1<b.symbolType.indexOf("3d");if("mesh"===a)return d.reject(e.createError("size-continuous-renderer:invalid-parameters",
"Size visualization is not applicable to layers with 'mesh' geometry type"));if(n&&("polyline"===a||"polygon"===a))return d.reject(e.createError("size-continuous-renderer:not-supported","3d symbols are not supported for polyline and polygon layers"));if(-1<b.symbolType.indexOf("3d-volumetric")&&(!b.view||"3d"!==b.view.type))return d.reject(e.createError("size-continuous-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or 3d-volumetric-uniform"));
a=h.getFieldsList({field:b.field,normalizationField:b.normalizationField,valueExpression:b.valueExpression});return(a=e.verifyBasicFieldValidity(c,a,"size-continuous-renderer:invalid-parameters"))?d.reject(a):b}):d.reject(e.createError("size-continuous-renderer:invalid-parameters","'layer' must be one of these types: "+h.getLayerTypeLabels(a).join(", ")))}function J(a){if(!a||!a.layer||!a.field&&!a.valueExpression)return d.reject(e.createError("size-class-breaks-renderer:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required"));
if(a.valueExpression&&!a.view)return d.reject(e.createError("size-class-breaks-renderer:missing-parameters","View is required when 'valueExpression' is specified"));var b=p.mixin({},a);b.symbolType=b.symbolType||"2d";b.defaultSymbolEnabled=null==b.defaultSymbolEnabled?!0:b.defaultSymbolEnabled;b.classificationMethod=b.classificationMethod||"equal-interval";b.normalizationType=h.getNormalizationType(b);a=[0,1,2];var c=h.createLayerAdapter(b.layer,a);return(b.layer=c)?null!=b.minValue&&null!=b.maxValue||
null==b.minValue&&null==b.maxValue?c.load().then(function(){var a=c.geometryType,n=-1<b.symbolType.indexOf("3d");if("mesh"===a)return d.reject(e.createError("size-class-breaks-renderer:invalid-parameters","Size visualization is not applicable to layers with 'mesh' geometry type"));if(n&&("polyline"===a||"polygon"===a))return d.reject(e.createError("size-class-breaks-renderer:not-supported","3d symbols are not supported for polyline and polygon layers"));if(-1<b.symbolType.indexOf("3d-volumetric")&&
(!b.view||"3d"!==b.view.type))return d.reject(e.createError("size-class-breaks-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or 3d-volumetric-uniform"));a=h.getFieldsList({field:b.field,normalizationField:b.normalizationField});return(a=e.verifyBasicFieldValidity(c,a,"size-class-breaks-renderer:invalid-parameters"))?d.reject(a):b}):d.reject(e.createError("size-class-breaks-renderer:missing-parameters","Both 'minValue' and 'maxValue' are required when specifying custom data range")):
d.reject(e.createError("size-class-breaks-renderer:invalid-parameters","'layer' must be one of these types: "+h.getLayerTypeLabels(a).join(", ")))}function K(a){a=p.mixin({},a);delete a.basemap;delete a.sizeScheme;delete a.legendOptions;delete a.symbolType;delete a.defaultSymbolEnabled;a.analyzeData=!(null!=a.minValue&&null!=a.maxValue);return a}function L(a){a=p.mixin({},a);var b=-1<a.symbolType.indexOf("3d-volumetric");if(a.worldScale=b)a.axis="3d-volumetric-uniform"===a.symbolType?"all":"height";
delete a.symbolType;delete a.defaultSymbolEnabled;return a}function B(a){var b=a.sizeScheme,c=a.basemap;b?b=u.cloneScheme(b):(b=(a=u.getSchemes({basemap:a.basemap,geometryType:a.geometryType,worldScale:a.worldScale,view:a.view}))&&a.primaryScheme,c=a&&a.basemapId);return{scheme:b,basemapId:c}}function C(a,b){var c;switch(b){case "point":case "multipoint":c=[a.minSize,a.maxSize];break;case "polyline":c=[a.minWidth,a.maxWidth];break;case "polygon":c=[a.marker.minSize,a.marker.maxSize]}return c}function M(a,
b,c,d){var n=d.field,f=d.layer.geometryType,k=d.defaultSymbolEnabled,m=u.cloneScheme(a.sizeScheme),t="polygon"===f,l=t?m.marker:m,g=t?m.background:null,m="polyline"===f?l.noDataWidth:l.noDataSize,g=g?e.createSymbol(g,g.color,f,d.symbolType):null;return{renderer:new z({backgroundFillSymbol:g,classBreakInfos:[{minValue:-D,maxValue:D,symbol:e.createSymbol(l,l.color,t?"point":f,d.symbolType)}],defaultLabel:k?x.other:null,defaultSymbol:k?e.createSymbol(l,l.noDataColor,t?"point":f,d.symbolType,null,null,
m):null,field:n,normalizationField:c,normalizationType:b,valueExpression:d.valueExpression,valueExpressionTitle:d.valueExpressionTitle,visualVariables:a.visualVariables.map(function(a){return v.cloneSizeVariable(a)}),authoringInfo:a.authoringInfo&&a.authoringInfo.clone()}),visualVariables:a.visualVariables.map(function(a){return v.cloneSizeVariable(a)}),statistics:a.statistics,defaultValuesUsed:a.defaultValuesUsed,sizeScheme:u.cloneScheme(a.sizeScheme),basemapId:a.basemapId}}function N(a,b,c){b=C(a,
b);a=y.toPt(b[0]);b=(y.toPt(b[1])-a)/(4<=c?c-1:c);for(var d=[],e=0;e<c;e++)d.push(a+b*e);return d}function O(a,b){var c=a.defaultSymbolEnabled,f=a.layer.geometryType,n="polygon"===f,h=B({basemap:a.basemap,geometryType:f,sizeScheme:a.sizeScheme,worldScale:-1<a.symbolType.indexOf("3d-volumetric"),view:a.view}),k=h.scheme,m=b.result,t=m.classBreakInfos,l=a.classificationMethod,g=a.normalizationType,p=N(k,f,t.length),r=n?k.marker:k,w=n?k.background:null,q="polyline"===f?r.noDataWidth:r.noDataSize,c=new z({backgroundFillSymbol:w?
e.createSymbol(w,w.color,f,a.symbolType):null,classBreakInfos:t.map(function(b,c){return{minValue:b.minValue,maxValue:b.maxValue,symbol:e.createSymbol(r,r.color,n?"point":f,a.symbolType,null,null,p[c]),label:b.label}}),defaultLabel:c?x.other:null,defaultSymbol:c?e.createSymbol(r,r.noDataColor,n?"point":f,a.symbolType,null,null,q):null,field:a.field,valueExpression:a.valueExpression,valueExpressionTitle:a.valueExpressionTitle,normalizationType:g,normalizationField:a.normalizationField,normalizationTotal:"percent-of-total"===
g?m.normalizationTotal:void 0,legendOptions:a.legendOptions,authoringInfo:new A({type:"class-breaks-size",classificationMethod:l,standardDeviationInterval:a.standardDeviationInterval})});"standard-deviation"!==l&&v.setLabelsForClassBreaks({classBreakInfos:c.classBreakInfos,classificationMethod:l,normalizationType:g,round:!0});return d.resolve({renderer:c,sizeScheme:u.cloneScheme(k),classBreaksResult:m,defaultValuesUsed:b.defaultValuesUsed,basemapId:h.basemapId})}function E(a){return H(a).then(function(a){var b=
a.normalizationField,f=b?"field":void 0;return(a.statistics?d.resolve(a.statistics):F({layer:a.layer,field:a.field,valueExpression:a.valueExpression,sqlExpression:a.sqlExpression,sqlWhere:a.sqlWhere,normalizationType:f,normalizationField:b,minValue:a.minValue,maxValue:a.maxValue,view:a.view})).then(function(c){var f=a.layer,k=a.field,m=k&&"function"!==typeof k?f.getField(k):null,h=m&&"date"===m.type,l=f.geometryType,f=B({basemap:a.basemap,geometryType:l,sizeScheme:a.sizeScheme,worldScale:a.worldScale,
view:a.view});if(m=f.scheme){var g=C(m,l),n=(h=e.getDefaultDataRange(c,h,!1))||[c.min,c.max],l=[],r="height"===a.axis,p=r?a.axis:void 0,q=g[0],g=g[1];r&&(g=e.getSizeRangeForAxis({minSize:q,maxSize:g},p),l.push({type:"size",axis:"width-and-depth",minSize:g.minSize}),g=g.maxSize);l.unshift({type:"size",field:k,valueExpression:a.valueExpression,valueExpressionTitle:a.valueExpressionTitle,valueUnit:"unknown",normalizationField:b,axis:p,minSize:q,maxSize:g,minDataValue:n[0],maxDataValue:n[1],legendOptions:a.legendOptions});
k=new G({type:"size",minSliderValue:c.min,maxSliderValue:c.max});k=new A({visualVariables:[k]});c=d.resolve({basemapId:f.basemapId,visualVariables:l,statistics:c,defaultValuesUsed:!!h,sizeScheme:u.cloneScheme(m),authoringInfo:k})}else c=d.reject(e.createError("size-visual-variable:insufficient-info","Unable to find size scheme"));return c})})}Object.defineProperty(q,"__esModule",{value:!0});var D=Math.pow(2,53)-1;q.createVisualVariables=E;q.createContinuousRenderer=function(a){return I(a).then(function(a){return E(L(a)).then(function(b){var c=
a.normalizationField;return M(b,c?"field":void 0,c,a)})})};q.createClassBreaksRenderer=function(a){return J(a).then(function(a){return e.getClassBreaks(K(a)).then(function(b){return O(a,b)})})}});