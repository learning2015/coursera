(function () {
'use strict';

angular.module('ShoppingListCheckoff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListService', ShoppingListService);

ToBuyController.$inject = ['ShoppingListService'];
function ToBuyController(ShoppingListService) {
  var list = this;
  list.items = ShoppingListService.getToBuy();

  list.buyItem = function (itemIndex) {
    ShoppingListService.buyItem(itemIndex);
  }

}

AlreadyBoughtController.$inject = ['ShoppingListService'];
function AlreadyBoughtController(ShoppingListService) {
  var bought = this;
  bought.items = ShoppingListService.boughtItems();
}


function ShoppingListService() {
  var service = this;

  var toBuy = [
    { name: "Moisture Vaporators", quantity: 10 },
    { name: "Hydrospanners", quantity: 5 },
    { name: "Alluvial Dampers", quantity: 1 },
    { name: "Nerf Herders", quantity: 2 },
    { name: "Moof milkers", quantity: 99 }
  ];
  var alreadyBought =[];

  service.getToBuy = function () {
    return toBuy;
  };

  service.buyItem = function (itemIndex) {
    alreadyBought.push(toBuy[itemIndex]);
    toBuy.splice(itemIndex, 1);
    //alreadyBought.push(itemIndex);
  };

  service.boughtItems = function () {
    return alreadyBought;
  };

}

})();
