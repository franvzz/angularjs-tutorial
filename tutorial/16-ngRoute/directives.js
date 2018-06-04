angular.module("CustomDirective")
.directive("myAutocomplete", function() {
  // funcion convención "link"
  function postLink(scope, element, attrs) {
    $(element).autocomplete({
      // eval = ejecutar como variable de javascript, no como string
      source: scope.$eval(attrs.myAutocomplete),
      select: function(ev, ui) {
        ev.preventDefault();
        if (ui.item) {
          scope.optionSelected(ui.item.value);
        }
      },
      focus: function(ev,ui) {
        ev.preventDefault();
        $(this).val(ui.item.label);
      }
    });
  };

  // return values
  return {
    link: postLink
  };
})
// backImg = back-img
.directive("imgCircle", function() {
  return function(scope, element, attrs) {
    //background:url({{ repo.owner.avatar_url }}); background-position:center; background-size:cover;
    attrs.$observe('imgCircle', function(value) {
      element.css({
        'background': 'url('+ value + ')',
        'background-position': 'center',
        'background-size': 'cover',
      });
    })
  }
})
