export const menuItems = [
    {id: 1, name: "Home", order: 1, linkToUrl: "/index"},
    {id: 2, name: "About", order: 2, linkToUrl: "/about.html"},
    {id: 3, name: "Services", order: 3, linkToUrl: "/services"},
    {
        id: 4, name: "Department", order: 4, linkToUrl: "/department.html", children: [
            {id: 5, name: "Departments", order: 1, linkToUrl: "/department.html", parentId: 4},
            {id: 6, name: "Department single", order: 2, linkToUrl: "/department-single.html", parentId: 4}
        ]
    },
    {
        id: 7, name: "Doctors", order: 5, linkToUrl: "/doctor", children: [
            {id: 8, name: "Doctors", order: 1, linkToUrl: "/doctor", parentId: 7},
            {id: 9, name: "Doctor single", order: 2, linkToUrl: "/doctor-single.html", parentId: 7},
            {id: 10, name: "Appointment", order: 3, linkToUrl: "/appointment.html", parentId: 7},
        ]
    },
    {
        id: 11, name: "Blog", order: 6, linkToUrl: "/blog-sidebar.html", children: [
            {id: 12, name: "Blog with Sidebar", order: 1, linkToUrl: "/blog-sidebar.html", parentId: 11},
            {id: 13, name: "Blog single", order: 2, linkToUrl: "/blog-single.html", parentId: 11},
        ]
    },
    {id: 14, name: "Contact", order: 7, linkToUrl: "/contact"},

]