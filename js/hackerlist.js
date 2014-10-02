angular.module('hackerListApp', [])
  .controller('HackerListController', ['$scope', function($scope) {
    $scope.hackers = [
      {name:'Avi Romanoff', thumbnail:true, link:'blah.com'},
      {name:'Zach Latta', thumbnail:true, link:'blah.com'},
      {name:'Lucy Guo', thumbnail:false, link:'blah.com'}];
 
    $scope.addTodo = function() {
      $scope.todos.push({text:$scope.todoText, done:false});
      $scope.todoText = '';
    };
 
    $scope.remaining = function() {
      var count = 0;
      angular.forEach($scope.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
 
    $scope.archive = function() {
      var oldTodos = $scope.todos;
      $scope.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) $scope.todos.push(todo);
      });
    };
  }]);