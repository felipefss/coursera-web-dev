(function () {
  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['UserService', 'MenuService'];
  function SignUpController(UserService, MenuService) {
    var signUpCtrl = this;

    signUpCtrl.submitForm = function () {
      MenuService.getSingleItem(signUpCtrl.favorite).then(function (response) {
        signUpCtrl.gotRes = true;
      }).catch(function (err) {
        signUpCtrl.gotRes = false;
      });
    };
  }
})();
