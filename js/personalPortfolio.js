$(function() {
  $("#fol-about").load("htmlFolio/portfolioAbout.html");
  $("#fol-projects").load("htmlFolio/portfolioProjects.html");
  $("#fol-contact").load("htmlFolio/portfolioContact.html");

  $(".landingPage").addClass("showMe");

  $(".navButton").click(function() {
    let target = $(this).attr("id").slice(4),
        folTarget = "#fol-" + target,
        navTarget = "#btn-" + target;

    $(".landingPage").removeClass("showMe");
    $(".folio, .folioText, .folioSection").removeClass("showMe");
    $(".folioTitleMain").removeClass("showMe-folioTitleMain");
    $(".margItem.navButton").removeClass("active");

    $(navTarget).addClass("active");
    $(".pageWrap").addClass("showMe");

    setTimeout(function() {
      $(folTarget).addClass("showMe");
      $(folTarget + "TitleMain").addClass("showMe-folioTitleMain");
    }, 250);

    setTimeout(function() {
      $(folTarget + " > .folioText").addClass("showMe");
      $(folTarget + " > .folioSection").addClass("showMe");
    }, 750);

  });
});
