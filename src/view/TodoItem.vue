<template>
  <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
    <li class="list-group-item" :class="{finish: todo.isCompleted, edit: todo == editedTodo}" @dblclick="editTodo(todo)">
      <div class="view">
        <span class="checkbox" :class="{on: todo.isCompleted}" @click="complete(todo)"></span>
        <div class="list-inner">
          {{ todo.text }}
        </div>
        <div class="btn-group">
          <button type="button" @click="edit(todo)" class="btn btn-default btn-sm">
            <span class="iconfont icon-edit"></span> Edit </button>
          <button type="button" @click="complete(todo)" class="btn btn-default btn-sm">
            <span class="iconfont icon-wancheng"></span> Complete
          </button>
          <button type="button" @click="remove(todo)" class="btn btn-default btn-sm">
            <span class="iconfont icon-del"></span> Remove
          </button>
        </div>
      </div>
      <input type="text" class="editInput" @blur="doneEdit($event, todo)" @keyup.enter="doneEdit($event, todo)" @keyup.esc="cancelEdit(todo)" v-focus :value="todo.text">
    </li>
  </transition>
</template>
<script>
  export default {
    props: {
      todo: {
        type: Object,
        require: true
      }
    },
    data: function() {
      return {
        isEdit: false,
        editedTodo: null
      }
    },
    directives: {
      'focus': function(el, binding) {
        el.focus()
      }
    },
    methods: {
      edit(todo) {
        this.$store.dispatch('editTodo', todo);
      },
      complete(todo) {
        this.$store.dispatch('completeTodo', todo);
      },
      remove(todo) {
        this.$store.dispatch('removeTodo', todo);
      },
      completeAll() {
        this.$store.dispatch('completeAll');
      },
      editTodo(todo) {
        this.editedTodo = todo
      },
      cancelEdit() {
        this.editedTodo = null;
      },
      doneEdit(e, todo) {
        this.editedTodo = null;
        if (todo.text == e.target.value.trim()) {
          return;
        }
        todo.text = e.target.value.trim();
        // this.editedTodo.isCompleted = todo.isCompleted;
        this.$store.dispatch('editTodoItem', todo);
      }
    }
  }
</script>
<style>
</style>
