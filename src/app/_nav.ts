export const navItems = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  // {
  //   title: true,
  //   name: 'CUSTOMER'
  // },
  // {
  //   name: 'Colors',
  //   url: '/theme/colors',
  //   icon: 'icon-drop'
  // },
  // {
  //   name: 'Typography',
  //   url: '/theme/typography',
  //   icon: 'icon-pencil'
  // },
  // {
  //   title: true,
  //   name: 'CUSTOMER'
  // },
  {
    name: 'CUSTOMER',
    url: '/customer',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'CUSTOMER LIST',
        url: '/customer/customerList',
        icon: 'icon-puzzle'
      },
      {
        name: 'CUSTOMER PROFILE',
        url: '/customer/customerProfile',
        icon: 'icon-puzzle'
      },
      // {
      //   name: 'Collapses',
      //   url: '/base/collapses',
      //   icon: 'icon-puzzle'
      // },
      // {
      //   name: 'Forms',
      //   url: '/base/forms',
      //   icon: 'icon-puzzle'
      // },
      // {
      //   name: 'Pagination',
      //   url: '/base/paginations',
      //   icon: 'icon-puzzle'
      // },
      // {
      //   name: 'Popovers',
      //   url: '/base/popovers',
      //   icon: 'icon-puzzle'
      // },
      // {
      //   name: 'Progress',
      //   url: '/base/progress',
      //   icon: 'icon-puzzle'
      // },
      // {
      //   name: 'Switches',
      //   url: '/base/switches',
      //   icon: 'icon-puzzle'
      // },
      // {
      //   name: 'Tables',
      //   url: '/base/tables',
      //   icon: 'icon-puzzle'
      // },
      // {
      //   name: 'Tabs',
      //   url: '/base/tabs',
      //   icon: 'icon-puzzle'
      // },
      // {
      //   name: 'Tooltips',
      //   url: '/base/tooltips',
      //   icon: 'icon-puzzle'
      // }
    ]
  },
  {
    name: 'SERVICE PARTNER',
    url: '/servicePartner',
    icon: 'icon-cursor',
    children: [
      {
        name: 'SALON',
        url: '/servicePartner/salon',
        icon: 'icon-cursor'
      },
      {
        name: 'SALON LIST',
        url: '/servicePartner/salonList',
        icon: 'icon-cursor'
      },
     
    ]
  },
  {
    name: 'JOBS',
    url: '/jobs',
    icon: 'icon-pie-chart',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'REPORTS',
    url: '/reports',
    icon: 'icon-pie-chart'
  },
  {
    name: 'SETTLEMENTS',
    url: '/settlement',
    icon: 'icon-pie-chart'
  },
  // {
  //   name: 'Icons',
  //   url: '/icons',
  //   icon: 'icon-star',
  //   children: [
  //     {
  //       name: 'CoreUI Icons',
  //       url: '/icons/coreui-icons',
  //       icon: 'icon-star',
  //       badge: {
  //         variant: 'success',
  //         text: 'NEW'
  //       }
  //     },
  //     {
  //       name: 'Flags',
  //       url: '/icons/flags',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Font Awesome',
  //       url: '/icons/font-awesome',
  //       icon: 'icon-star',
  //       badge: {
  //         variant: 'secondary',
  //         text: '4.7'
  //       }
  //     },
  //     {
  //       name: 'Simple Line Icons',
  //       url: '/icons/simple-line-icons',
  //       icon: 'icon-star'
  //     }
  //   ]
  // },
  {
    name: 'CMS',
    url: '/cms',
    icon: 'icon-bell',
    children: [
      {
        name: 'Advertisement',
        url: '/cms/advertisement',
        icon: 'icon-bell'
      },
      {
        name: 'Stories',
        url: '/cms/stories',
        icon: 'icon-bell'
      },
      {
        name: 'Offer & Discount',
        url: '/cms/offer$discount',
        icon: 'icon-bell'
      },
      {
        name: 'Blogs',
        url: '/cms/blogs',
        icon: 'icon-bell'
      },
      {
        name: 'FeedBack',
        url: '/cms/feedback',
        icon: 'icon-bell'
      }
    ]
  },
  {
    name: 'BOOKINGS',
    url: '/bookings',
    icon: 'icon-calculator'
   
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'LOGIN',
        url: '/login',
        icon: 'icon-star'
      },
      {
        name: 'REGISTER',
        url: '/register',
        icon: 'icon-star'
      },
      // {
      //   name: 'Error 404',
      //   url: '/404',
      //   icon: 'icon-star'
      // },
      // {
      //   name: 'Error 500',
      //   url: '/500',
      //   icon: 'icon-star'
      // }
    ]
  },
  // {
  //   name: 'Download CoreUI',
  //   url: 'http://coreui.io/angular/',
  //   icon: 'icon-cloud-download',
  //   class: 'mt-auto',
  //   variant: 'success'
  // },
  // {
  //   name: 'Try CoreUI PRO',
  //   url: 'http://coreui.io/pro/angular/',
  //   icon: 'icon-layers',
  //   variant: 'danger'
  // }
];
