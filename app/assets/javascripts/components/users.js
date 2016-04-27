;(function () {
  "use strict"

  Vue.component("vue-users", {

    template: "#users-template",

    data: function () {
      return {
      }
    },

    init: function () {
      var self = this
      console.log("Init runs when the component boots")
    }

  })

})();
