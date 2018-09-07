// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../state/controllers/RotateController ../../state/helpers/PickingHelper ../../../input/InputHandler".split(" "),function(a,e,g,h,k,l){Object.defineProperty(e,"__esModule",{value:!0});a=function(a){function d(f,b){void 0===b&&(b=!1);var c=a.call(this,!0)||this;c.view=f;c.invert=b;c.pickingHelper=new k.PickingHelper(f);c.registerIncoming("vertical-two-finger-drag",function(b){return c.handleTwoFinger(b)});return c}g(d,a);d.prototype.handleTwoFinger=
function(a){var b=[0,-a.data.delta*(this.invert?-1:1)];switch(a.data.action){case "begin":this.cameraController=new h.RotateController(this.view,this.pickingHelper,"center");this.view.state.switchCameraController(this.cameraController);this.cameraController.begin(b);break;case "update":this.cameraController.update(b);break;case "end":this.cameraController.end(),this.cameraController=null}};return d}(l.InputHandler);e.TwoFingerTilt=a});