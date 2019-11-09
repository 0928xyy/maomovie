import Vue from 'vue'
import Router from 'vue-router'
import bookshelf from './bookshelf'
import bookcity from './bookcity'
import ifications from './ifications'


Vue.use(Router)

export default new Router({
  routes: [
    bookshelf,
    bookcity,
    ifications
  ]
})
