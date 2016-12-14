(function () {
  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['userInfo', 'ApiPath'];
  function MyInfoController(userInfo, ApiPath) {
    var myInfo = this;

    myInfo.user = userInfo;
    myInfo.basePath = ApiPath;
  }
})();
