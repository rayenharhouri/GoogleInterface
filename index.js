$( document ).ready(function() {
    $( "#dialog" ).dialog({
            autoOpen: false,
            buttons: {
                "suiiii": submit_form,
                Cancel: () =>  $( "#dialog" ).dialog( "close" )
            },
            show: {
                 effect: "blind",
                    duration: 500
            },
            hide: {
                effect: "explode",
                    duration: 300
            },
            position: {
                my: "center",
                at: "center"
            },
            clickOutside: true, // clicking outside the dialog will close it
            clickOutsideTrigger: "#opener"  // id that triggers the dialog opening ,

    });
    $( "#opener" ).click(function() {
        $( "#dialog" ).dialog( "open" );
    });
});


$.widget( "ui.dialog", $.ui.dialog, {
  options: {
    clickOutside: false, // Determine if clicking outside the dialog shall close it
    clickOutsideTrigger: "" // Element (id or class) that triggers the dialog opening 
  },

  open: function() {
    var clickOutsideTriggerEl = $( this.options.clickOutsideTrigger );
    var that = this;
    
    if (this.options.clickOutside){
      // Add document wide click handler for the current dialog namespace
      $(document).on( "click.ui.dialogClickOutside" + that.eventNamespace, function(event){
        if ( $(event.target).closest($(clickOutsideTriggerEl)).length == 0 && $(event.target).closest($(that.uiDialog)).length == 0){
          that.close();
        }
      });
    }
    
    this._super(); // Invoke parent open method
  },
  
  close: function() {
    var that = this;
    
    // Remove document wide click handler for the current dialog
    $(document).off( "click.ui.dialogClickOutside" + that.eventNamespace );
    
    this._super(); // Invoke parent close method 
  },  

});

let counter = 0;

const submit_failed = () => {
    const counter_string = {
        0 :  "yehdik !",
        1 :  "trah zid !",
        2 :  "matfedech !",
        3 :  "sayeb alik mouch mte3ek !",
        4 :  "nfadlk zid barbech !",
        5 :  " 🤔🤔🤔🤔 !"
    }
    counter <= 5 ? alert(counter_string[counter]) : alert("may2ouss mennek ya wkhay")
    counter++;
}

const submit_success = () => {
    alert('khrit fih ?')
    $( "#dialog" ).dialog( "close" );
}


const submit_form = () => {
    const username_element = document.getElementById('username')
    const password_element = document.getElementById('password')

    username_element.value == btoa(username_element.name)
    && submit_success()
    || submit_failed()
}



   
