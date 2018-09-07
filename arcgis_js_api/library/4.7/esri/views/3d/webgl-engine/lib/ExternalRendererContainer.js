// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define(["require","exports","./RenderSlot"],function(f,g,e){return function(){function d(){this.renderersChanged=!1;this.renderers=[];this.slots=[];for(var a=0;a<e.MAX_SLOTS;++a)this.slots[a]=[]}d.prototype.addRenderer=function(a,b){this.renderers.push(b);for(var c=0;c<a.length;++c)this.slots[a[c]].push(b);this.renderersChanged=!0};d.prototype.removeRenderer=function(a){this.renderers=this.renderers.filter(function(b){return b!==a});for(var b=0;b<this.slots.length;++b)this.slots[b]=this.slots[b].filter(function(b){return b!==
a});this.renderersChanged=!0};d.prototype.render=function(a,b){b.slot=a;var c=0;for(a=this.slots[a];c<a.length;c++){var d=a[c];d.render(b)&&(d.didRender=!0)}};d.prototype.needsRender=function(){if(this.renderersChanged)return!0;for(var a=0,b=this.renderers;a<b.length;a++)if(b[a].needsRender)return!0;return!1};d.prototype.needsHighlight=function(){for(var a=0,b=this.renderers;a<b.length;a++)if(b[a].needsHighlight)return!0;return!1};d.prototype.needsLinearDepth=function(){for(var a=0,b=this.renderers;a<
b.length;a++)if(b[a].needsLinearDepth)return!0;return!1};d.prototype.resetNeedsRender=function(){this.renderersChanged=!1;for(var a=0,b=this.renderers;a<b.length;a++){var c=b[a];c.resetNeedsRender?c.resetNeedsRender():c.didRender&&(c.needsRender=!1,c.didRender=!1)}};return d}()});