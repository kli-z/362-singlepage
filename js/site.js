//JavaScript file for SecurITy Newsletter

$.noConflict();
(
  function($) {
    $(document).ready(function() {
      alert("ready");
      
      $("#signup").on("submit", function(e) {
        e.preventDefault(); //don't reload the page
        alert($("#useradd").val());
      })

    })
  }
)(jQuery);
