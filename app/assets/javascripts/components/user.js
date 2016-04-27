;(function () {
  "use strict"

  function usersUrl() {
    return "/api/users"
  }

  function userUrl(id) {
    if (id === undefined) { throw "ID not found" }

    return usersUrl() + "/" + id
  }

  Vue.component("vue-user", {

    template: "#user-template",

    data: function () {
      return {
        user: {}
      }
    },

    init: function () {
      var self = this
      $.ajax({
        method: "GET",
        url: "/api/users/1"
      }).then(function (data) {
        self.user = data
      })
    }

  })

})();
