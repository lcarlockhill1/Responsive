$('button').click(function() {
  $(this).toggleClass('expanded').siblings('#burger').slideToggle();
});