/* eslint-disable import/no-anonymous-default-export */
import DefaultLayout from './layouts/DefaultLayout'
import DefaultCategory from './components/goods/category/DefaultCategory'

export default [
    {
        path: "/",
        exact: true,
        layout: DefaultLayout,
        component: () => { return(<h2> Main Page</h2>)}
    },
    {
        path: "/danh-muc",
        exact: true,
        layout: DefaultLayout,
        component: DefaultCategory
    },
]