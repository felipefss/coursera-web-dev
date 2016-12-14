describe('Menu Service', function () {
  var MenuService;
  var $httpBackend;
  var ApiPath;

  beforeEach(function () {
    module('restaurant');

    inject(function ($injector) {
      MenuService = $injector.get('MenuService');
      $httpBackend = $injector.get('$httpBackend');
      ApiPath = $injector.get('ApiPath');
    });
  });

  it('should return some data', function () {
    var expectedItem = { name: 'Some Item', description: 'It is some item.' };

    $httpBackend.whenGET(ApiPath + '/menu_items/item.json').respond(expectedItem);

    MenuService.getSingleItem('item').then(function (response) {
      expect(response).toEqual(expectedItem);
    });

    $httpBackend.flush();
  });
});
