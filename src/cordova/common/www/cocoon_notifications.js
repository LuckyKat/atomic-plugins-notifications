!function(){!window.Cocoon&&window.cordova&&"undefined"!=typeof require&&cordova.require("cocoon-plugin-common.Cocoon");var e=window.Cocoon;e.define("Cocoon.Notification",function(i){"use strict";function n(i){this.serviceName=i,this.signal=new e.Signal,this.idIndex=Date.now(),this.on=this.signal.expose()}function t(e){return function(){e&&e()}}i.NotificationService=n;var c=n.prototype;return c.initialize=function(i,n){var c=this;e.exec(this.serviceName,"setListener",[],function(e){c.signal.emit("notification",null,[e])}),e.exec(this.serviceName,"initialize",[i],t(n),function(e){n&&n(!1,e)})},c.isRegistered=function(i){e.exec(this.serviceName,"isRegistered",[],i,i)},c.register=function(i,n){e.exec(this.serviceName,"register",[i],t(n),n)},c.unregister=function(i){e.exec(this.serviceName,"unregister",[],t(i),i)},c.send=function(i,n){var c=this.idIndex++ +"";return i.id=c,e.exec(this.serviceName,"send",[i],t(n),n),c},c.subscribe=function(i,n){e.exec(this.serviceName,"subscribe",[i],t(n),n)},c.unsubscribe=function(i,n){e.exec(this.serviceName,"unsubscribe",[i],t(n),n)},c.fetchSubscribedChannels=function(i){e.exec(this.serviceName,"fetchSubscribedChannels",[],i,function(e){i&&i([],e)})},c.cancel=function(i){e.exec(this.serviceName,"cancel",[i])},c.cancelAllNotifications=function(){e.exec(this.serviceName,"cancelAllNotifications",[])},c.setBadgeNumber=function(i){e.exec(this.serviceName,"setBadgeNumber",[i])},c.getBadgeNumber=function(i){e.exec(this.serviceName,"getBadgeNumber",[],i)},i.NotificationInfo={id:0,title:"",message:"",soundEnabled:!0,badgeNumber:0,userData:{},contentBody:"",contentTitle:"",date:0},i})}();