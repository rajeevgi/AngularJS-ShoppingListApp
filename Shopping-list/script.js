var app = angular.module('shopApp', []);

app.controller('shopCtrl', function($scope){
    // creating products array
    $scope.products = ['Milk','Bread','Cheese'];

    // adding functionality to insert an item into products
    $scope.addItem = function(){
        $scope.errorText = '';
        
        // Error Handling
        if(!$scope.addMe){
            return ;
        }
        // It will check index of an item and then add into products.
        if($scope.products.indexOf($scope.addMe) == -1){
            $scope.products.push($scope.addMe);
        }else{
            $scope.errorText = "The Item is Already in your shopping list.";
        }
    }

    // adding functionality to remove items from products
    $scope.removeItem = function(x){
        $scope.errorText = '';
        $scope.products.splice(x,1);
    }
})