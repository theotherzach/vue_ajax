;(function () {
  "use strict"

  function usersUrl() {
    return "/api/users"
  }

  function userUrl(id) {
    if (id === undefined) { throw "ID not found" }

    return usersUrl() + "/" + id
  }

  Vue.component("vue-users", {

    template: "#users-template",

    data: function () {
      return {
        users: []
      }
    },

    init: function () {
      var self = this
      console.log("Init runs when the component boots. This is a good spot to get data.")
    }

  })

})();
