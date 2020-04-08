import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",   // 首页
      name: "home", 
      component: () => import(/* webpackChunkName: "home" */ "./views/index.vue")
    },
    // {
    //   path: "/home2",
    //   name: "home2",
    //   component: () => import(/* webpackChunkName: "home2" */ "./views/home2.vue")
    // },
    {
      path: "/articles",  // 文章
      name: "articles",
      // route level code-splitting
      // this generates a separate chunk (articles.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "articles" */ "./views/articles.vue")
    },
    {
      path: "/archive",  // 归档
      name: "archive",
      component: () =>
        import(/* webpackChunkName: "archive" */ "./views/archive.vue")
    },
    {
      path: "/timeline",
      name: "timeline",
      component: () =>
        import(/* webpackChunkName: "timeline" */ "./views/timeline.vue")
    },
    {
      path: "/project",  // 项目
      name: "project",
      component: () =>
        import(/* webpackChunkName: "project" */ "./views/project.vue")
    },
    {
      path: "/message",
      name: "message",
      component: () =>
        import(/* webpackChunkName: "message" */ "./views/message.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/articleDetail.vue")
    },
    {
      path: "/articleDetail",
      name: "articleDetail",
      component: () =>
        import(/* webpackChunkName: "articleDetail" */ "./views/articleDetail.vue")
    }
    // {
    //   path: "*",
    //   redirect: {
    //     name: "home"
    //   }
    // }
  ]
});
