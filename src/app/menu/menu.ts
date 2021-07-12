import { CoreMenu } from '@core/types';
let user = JSON.parse(localStorage.getItem('currentUser'))
console.log('user', user);

export const menu: CoreMenu[] = [

  // if this Admin
  {
    id: 'Conrole',
    type: 'section',
    title: 'Conrole',
    translate: 'Controle.title',
    icon: 'box',
    hidden: user?.usercode ? true : false,
    children: [
      {
        id: 'Controle',
        hidden: user?.usercode ? true : false,
        title: 'Controle',
        translate: 'Controle.Controle',
        icon: 'users',
        type: 'collapsible',
        children: [
          {
            id: 'admin',
            title: 'admins',
            translate: 'Controle.admins',
            type: 'item',
            icon: 'circle',
            url: 'admin/all-admin'
          },
          {
            id: 'addEmployee',
            title: 'Add Employee',
            translate: 'Controle.users',
            type: 'item',
            icon: 'circle',
            url: 'admin/all-user'
          }
        ]
      },
    ],
  },
  {
    id: 'ControleOnFarms',
    type: 'section',
    title: 'ControleOnFarms',
    translate: 'Controle.ControleOnFarms',
    icon: 'box',
    hidden: user?.usercode ? true : false,
    children: [
      {
        id: 'Farms',
        hidden: user?.usercode ? true : false,
        title: 'Farms',
        translate: 'Controle.Farms',
        icon: 'map-pin',
        type: 'collapsible',
        children: [
          // {
          //   id: 'admin',
          //   title: 'admins',
          //   translate: 'Controle.AddFarms',
          //   type: 'item',
          //   icon: 'circle',
          //   url: 'admin/new-farm'
          // },
          {
            id: 'addEmployee',
            title: 'Add Employee',
            translate: 'Controle.AddFarmsBool',
            type: 'item',
            icon: 'circle',
            url: 'admin/new-bool'
          }
        ]
      },
    ],
  },
  // Is This Client
  {
    id: 'Live',
    type: 'section',
    title: 'Live',
    translate: 'User.Live',
    icon: 'box',
    hidden: user?.admin_code ? true : false,
    children: [
      {
        hidden: user?.admin_code ? true : false,
        id: 'Live',
        title: 'Live',
        translate: 'User.Live',
        icon: 'camera',
        type: 'collapsible',
        children: [

        ]
      },
    ],
  },
  // Is This Client
  {
    id: 'Reports',
    type: 'section',
    title: 'Reports',
    translate: 'User.Reports',
    icon: 'box',
    hidden: user?.admin_code ? true : false,
    children: [
      {
        hidden: user?.admin_code ? true : false,
        id: 'Reports',
        title: 'Reports',
        translate: 'User.Reports',
        icon: 'clipboard',
        type: 'collapsible',
        children: [

        ]
      },
    ],
  },
];
