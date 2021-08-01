/* eslint-disable import/no-anonymous-default-export */
import KhachHang from './components/KhachHang'
import DefaultLayout from './layouts/DefaultLayout'

export default [
    {
        path: "/",
        exact: true,
        layout: DefaultLayout,
        component: () => { return(<h2> Main Page 123</h2>)}
    },
    {
        path: "/danh-muc",
        exact: true,
        layout: DefaultLayout,
        component: () => { return(<h2> Danh Muc Page</h2>)}
    },
    {
        path: "/khac-hang",
        exact: true,
        layout: DefaultLayout,
        component: KhachHang,
    },
]