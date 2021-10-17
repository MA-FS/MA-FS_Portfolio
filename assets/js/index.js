$(".password-generator").on('click', function() {
    $( "#dialog-confirm" ).dialog({
      resizable: false,
      height: "auto",
      width: 400,
      modal: true,
      buttons: {
        "Deployed": function() {
            window.location.href = ("https://ma-fs.github.io/Strong_Password_Generator/");
        },
        "Repo": function() {
            window.location.href = ("https://github.com/MA-FS/Strong_Password_Generator");
        }
      }
    });
  }) ;

  $(".weather-dashboard").on('click', function() {
    $( "#dialog-confirm" ).dialog({
      resizable: false,
      height: "auto",
      width: 400,
      modal: true,
      buttons: {
        "Deployed": function() {
            window.location.href = ("https://ma-fs.github.io/Weather_Dashboard/");
        },
        "Repo": function() {
            window.location.href = ("https://github.com/MA-FS/Weather_Dashboard");
        }
      }
    });
  }) ;

  $(".coding-quiz").on('click', function() {
    $( "#dialog-confirm" ).dialog({
      resizable: false,
      height: "auto",
      width: 400,
      modal: true,
      buttons: {
        "Deployed": function() {
            window.location.href = ("https://ma-fs.github.io/Coding_Quiz/");
        },
        "Repo": function() {
            window.location.href = ("https://github.com/MA-FS/Coding_Quiz");
        }
      }
    });
  }) ;

  $(".crypto-tracker").on('click', function() {
    $( "#dialog-confirm" ).dialog({
      resizable: false,
      height: "auto",
      width: 400,
      modal: true,
      buttons: {
        "Deployed": function() {
            window.location.href = ("https://nicoletr.github.io/project1-finance-tracker/");
        },
        "Repo": function() {
            window.location.href = ("https://github.com/nicoletr/project1-finance-tracker");
        }
      }
    });
  }) ;