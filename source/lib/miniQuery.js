var SweetSelector = {

  select: function( domSelector ) {
    var selector = domSelector.substring(0, 1);

    if ( selector == "#" ) {
      var inputId = domSelector.slice(1)
      return document.getElementById( inputId );
    } else if ( selector == "." ) {
      var inputClass = domSelector.slice(1)
      return document.getElementsByClassName( inputClass );
    } else {
      return document.getElementsByTagName ( domSelector )
    }
  }
};

SweetSelector.select("#eyed")
SweetSelector.select(".klass")


var DOM = (function() {

  return {
    hide: function( element ) {
      var el = element.replace('.', "")
      var div = document.getElementsByClassName( el )
      div[0].style.visibility = "hidden";
    },
    show: function( element ) {
      var el = element.replace('.', "")
      var div = document.getElementsByClassName( el )
      div[0].style.visibility = "visible";
    },
    addClass: function( identifyingClass, addingClass ) {},
    removeClass: function( identifyingClass, removingClass ) {},
  }
})();

DOM.hide(".klass");
DOM.show(".klass")

var EventDispatcher = ( function() {

  return {
    on: function(elem, eventName, action) {
      var el = SweetSelector.select(elem);
      el[0].addEventListener(eventName, action, false);
      // Test to see that naming process works
      // el[0].addEventListener("something", function() {console.log("something")}, false);
    },
    trigger: function(elem, eventName) {
      var el = SweetSelector.select(elem);
      var e = new Event(eventName);
      el[0].dispatchEvent(e);
    }
  }
})();

EventDispatcher.on('.klass', 'shadi', function() { console.log("awesome") });
EventDispatcher.trigger('.klass', 'shadi');