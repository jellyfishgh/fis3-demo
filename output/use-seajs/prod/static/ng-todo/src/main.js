define("static/ng-todo/src/main",["sea-modules/angular/angularjs/1.1.5/angular","static/ng-todo/src/common","static/ng-todo/src/service"],function(t){var o=t("sea-modules/angular/angularjs/1.1.5/angular"),e=t("static/ng-todo/src/common"),n=t("static/ng-todo/src/service"),i=o.module("TodoApp",[]);return i.service("todoService",n),i.directive("ngBlur",function(){return function(t,o,e){o.bind("blur",function(){t.$apply(e.ngBlur)})}}),i.controller("MainCtrl",["$scope","todoService",function(t,n){t.todoService=n,t.title="todo",t.todos=n.getTodos(),t.newTodo="",t.activeFilter={completed:""},t.remaining=0,t.hidden=!1,t.toggleAll=function(){this.hidden=!this.hidden},t.createOnEnter=function(t){t.which===e.ENTER_KEY&&this.newTodo.trim()&&(this.todoService.addTodo(this.newTodo),this.newTodo="")},t.$watch("todos",function(){var o=0;t.todos.forEach(function(t){t.completed||o++}),t.remaining=o,t.completed=t.todos.length-o,t.todoService.store()},!0),t.filter=function(t){this.activeFilter.completed=t},t.selected=function(o){return o===t.activeFilter.completed},t.getTodos=function(){return n.getTodos(this.activeFilter)},t.edit=function(t,e){t.edit=!0,setTimeout(function(){o.element(e.target).parent().next()[0].focus()},0)},t.close=function(t){t.edit=!1}}]),{init:function(){o.bootstrap(document.body,["TodoApp"])}}});