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
        isEditing: false,
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
    },

    methods: {

      editUser: function () {
        var self = this

        self.isEditing = true
      },

      handleEdit: function () {
        var self = this

        $.ajax({
          method: "PATCH",
          url: "/api/users/1",
          data: { user: self.user }
        }).then(function (data) {
          self.user = data
          self.isEditing = false
        })
      },

    }

  })

})();
