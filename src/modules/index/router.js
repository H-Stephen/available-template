import moduleLayout from "@/layouts/module-layout/index.vue";

// 路由文件
export default [
  {
    path: "/",
    redirect: "/index"
  },
  {
    path: "/index",
    component: moduleLayout,
    children: [
      {
        path: "/",
        name: "Index",
        component: () => import("./views/index/index.vue")
      }
    ]
  },
  {
    path: "/index2",
    component: moduleLayout,
    children: [
      {
        path: "/",
        name: "Index2",
        component: () => import("./views/index/index2.vue")
      }
    ]
  }
];
