if (self.CavalryLogger) { CavalryLogger.start_js(["LGg1Z"]); }

__d("MNAdsLogMessageUtils",["MercuryConfig","MessagingTag","MessengerAdsWebTypedLogger","MNAdsLoggerEventEnum","AdPageMessageTypeEnum","gkx"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=c("MercuryConfig").LOG_INTERVAL_MS||6e4;function i(){this.$MNAdsLogMessageUtils1={}}i.prototype.isLoggedWithinInterval=function(j){if(this.$MNAdsLogMessageUtils1[j]&&this.$MNAdsLogMessageUtils1[j]-Date.now()<h)return true;return false};i.prototype.setLoggingTime=function(j){this.$MNAdsLogMessageUtils1[j]=Date.now()};i.prototype.logAdsThreadListImpression=function(j){switch(j.folder){case c("MessagingTag").INBOX:this.logWithThreadMetaData(j,c("MNAdsLoggerEventEnum").MESSAGE_SEEN_INBOX);break;case c("MessagingTag").PENDING:this.logWithThreadMetaData(j,c("MNAdsLoggerEventEnum").MESSAGE_SEEN_REQUEST);break;default:return}};i.prototype.logWithThreadMetaData=function(j,event){if(j.last_message_type!==c("AdPageMessageTypeEnum").NON_AD){var k=j.last_message_timestamp+String(event);if(!c("gkx")("AT7sD1fF_8x-4xxzoAaekZya5eGXuWSo92U8w8HKbhIVLROxV_1CMyGef1ykTzXLVcx0oP_derMD1dJXZ3xN3GMMFtqM6UPFfCa4s0vXN1q3cw")||this.isLoggedWithinInterval(k))return;new(c("MessengerAdsWebTypedLogger"))().setEvent(event).setMessageTimestamp(j.last_message_timestamp).setPageID(j.other_user_fbid).log();this.setLoggingTime(k)}};f.exports=new i()}),null);