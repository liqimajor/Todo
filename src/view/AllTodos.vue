<template>
  <div id="current-todos" class="container">
    <!-- <h3>Total todos length: ({{ todos.length }})</h3> -->
    <span class="checkbox" :class="{on: allCheck}" @click="completeAll"></span><span v-if="allCheck">反选</span><span v-else>全选</span>
    <ul class="list-group">
      <li is="todo-item" v-for="(todo, index) in todos" :todo="todo" :key="index">
      </li>
    </ul>
  </div>
</template>
<script>
  // import TodoItem from './TodoItem.vue';
  export default {
    props: ['type'],
    // data: function() {
    //   return {
    //     isEdit: false,
    //     editedTodo: null
    //   }
    // },
    // directives: {
    //   'focus': function(el, binding) {
    //     // if (binding.value) {
    //     el.focus()
    //     // }
    //   }
    // },
    // methods: {
    //   edit(todo) {
    //     this.$store.dispatch('editTodo', todo);
    //   },
    //   complete(todo) {
    //     this.$store.dispatch('completeTodo', todo);
    //   },
    //   remove(todo) {
    //     this.$store.dispatch('removeTodo', todo);
    //   },
    //   completeAll() {
    //     this.$store.dispatch('completeAll');
    //   },
    //   editTodo(todo) {
    //     this.editedTodo = todo
    //   },
    //   cancelEdit() {
    //     this.editedTodo = null;
    //   },
    //   doneEdit(e, todo) {
    //     this.editedTodo = null;
    //     if (todo.text == e.target.value.trim()) {
    //       return;
    //     }
    //     todo.text = e.target.value.trim();
    //     // this.editedTodo.isCompleted = todo.isCompleted;
    //     this.$store.dispatch('editTodoItem', todo);
    //   }
    // },
    methods: {
      completeAll() {
        this.$store.dispatch('completeAll');
      },
    },
    computed: {
      todos() {
        if (this.type == 0) {
          return this.$store.state.todos;
        }
        if (this.type == 1) {
          return this.$store.getters.activeTodos;
        }
        if (this.type == 2) {
          return this.$store.getters.doneTodos;
        }
        return this.$store.state.todos;

      },
      allCheck() {
        return this.$store.getters.allCheck;
      }
    },
    components: {
      TodoItem : () => import(/* webpackChunkName: "todoItem" */ './TodoItem.vue')
    }
  }
</script>
<style>
</style>
