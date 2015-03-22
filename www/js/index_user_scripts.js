(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  அனுப்பு */
    $(document).on("click", ".uib_w_4", function(evt)
    {
        /* your code goes here */ 
        
        
/*        
var smstext =  "COOPTN CB " + $('#shop').val() + " RR " + $('#pacharisi').val() + " BR " + $('#puzhungalarisi').val()  + " S " + $('#sugar').val() + " W " + $('#wheat').val() + " P " + $('#palmoil').val() + " TD " + $('#thurdhal').val() +  " UD " + $('#ulundu').val() + " K " + $('#manoil').val() + " AAY " + $('#aay').val() + " OT " + $('#tea').val() + " AS " + $('#salt').val();
        
        $("#message").val(smstext);
  
  */
           
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
 
    
    
    document.addEventListener("intel.xdk.device.ready",function(){
     intel.xdk.device.sendSMS("hello", "+917401743353");  

},false);


    
})();
