
$(document).ready(function() {

  $(".custom").iqDropdown({
    
    selectionText: "гость",
    textPlural: "гостей",
    onChange: function(id, count, totalItems) {
      console.log(id, count, totalItems);
    },
    beforeDecrement: function(id, itemCount) {
      if (id === "adult") {
        return itemCount.adult > itemCount.infant;
      }
      return true;
    },
    beforeIncrement: function(id, itemCount) {
      if (id === "infant") {
        return itemCount.adult > itemCount.infant;
      }
      return true;
    }
  });

  $(".custom-message").iqDropdown({
    
      selectionText: "удобств",
      textPlural: "удобств",
      onChange: function(id, count, totalItems) {
        console.log(id, count, totalItems);
      },
    });
});
