import home from "@/components/vueRouter/home";
import about from "@/components/vueRouter/about";
import contact from "@/components/vueRouter/contact";
import customer from "@/components/vueRouter/customer";
import customerStart from "@/components/vueRouter/customerStart";
import customerDetail from "@/components/vueRouter/customerDetail";
import customerEdit from "@/components/vueRouter/customerEdit";
import notFound from "@/components/vueRouter/notFound";

export const routes = [
    {
        path: '/',
        component: home,
        name: 'home'
    },
    {
        path: '/about',
        component: about
    },
    {
        path: '/contact/:id',
        component: contact
    },
    {
        path: '/customer',
        component: customer,
        children: [
            {
                path: '',
                component: customerStart
            },
            {
                path: ':id',
                component: customerDetail
            },
            {
                path: ':id/edit',
                component: customerEdit,
                name: 'customerEdit'
            }
        ]
    },
    {
        path: '/:pathMatch(.*)',
        component: notFound
    }
]