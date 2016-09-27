(function () {
'use strict';

angular.module('ShoppingListCheckoff', ['ngAnimate'])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckoffService', ShoppingListCheckoffService);

ToBuyController.$inject = ['ShoppingListCheckoffService'];
function ToBuyController(ShoppingListCheckoffService) {
  var list = this;
  list.items = ShoppingListCheckoffService.getToBuy();

  list.buyItem = function (itemIndex) {
    ShoppingListCheckoffService.buyItem(itemIndex);
  }

}

AlreadyBoughtController.$inject = ['ShoppingListCheckoffService'];
function AlreadyBoughtController(ShoppingListCheckoffService) {
  var bought = this;
  bought.items = ShoppingListCheckoffService.boughtItems();
}


function ShoppingListCheckoffService() {
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
  };

  service.boughtItems = function () {
    return alreadyBought;
  };

}

})();
