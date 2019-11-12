import Vue from 'vue' 
import Router from 'vue-router' 
 
const DashboardLayout = () => import(/* webpackChunkName: "dashboard" */ '../components/dashboardLayout.vue') 
 
function loadView(view) {
    return () => import(/* webpackChunkName: "view[request]" */ `../components/dashboardContents/${view}.vue`) } 
 
    const routes = [     
        {       
            path: '/',       
            component: DashboardLayout,       
            children: [         
                {           
                    name: 'sparepartController',           
                    path: '',           
                    component: loadView('sparepartController')         
                },
                {           
                    name: 'sparepartController',           
                    path: '../components/dashboardContents/sparepartController',           
                    component: loadView('sparepartController')         
                }         
            ]     
        },   
    ]   
    Vue.use(Router) 
     
    const router = new Router({mode: 'history', routes: routes}) 
    
    export default router 