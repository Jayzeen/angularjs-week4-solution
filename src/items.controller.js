(function () {
    'use strict';
    angular.module('MenuApp')
        .controller('ItemsController', ItemsController);

    // Inject resolved 'items' from the UI state
    ItemsController.$inject = ['items'];
    function ItemsController(items) {
        var itemsCtrl = this;
        itemsCtrl.items = items;
    }
})();