import {
  HomeIcon,
  CubeIcon,
  ArrowsRightLeftIcon,
  BuildingOffice2Icon,
  ChartBarIcon,
  UserGroupIcon,
  CogIcon,
  // ListBulletIcon,
  RectangleGroupIcon,
  // CheckBadgeIcon,
} from '@heroicons/vue/24/outline'
import { type FunctionalComponent } from 'vue'
// Interface for menu items
interface MenuItem {
  name: string
  icon: string | FunctionalComponent
  submenu?: SubMenuItem[]
  path?: string
  isActive?: boolean
}

interface SubMenuItem {
  name: string
  subSubMenu?: SubSubMenuItem[]
  path?: string
  isActive?: boolean
}
interface SubSubMenuItem {
  name: string
  path?: string
  isActive?: boolean
  subSubSubMenu?: SubSubSubMenuItem[]
}
interface SubSubSubMenuItem {
  name: string
  path?: string
  isActive?: boolean
}

function isActiveRoute(route: string): boolean {
  return window.location.pathname === route
}

export const menuItems: MenuItem[] = [
  { name: 'Dashboard', icon: HomeIcon, path: '/dashboard' },
  {
    name: 'Aset Lancar',
    icon: CogIcon,
    isActive: isActiveRoute('/aset-lancar'),
    submenu: [
      {
        name: 'Daftar Barang',
        path: '/aset-lancar/daftar-barang',
        isActive: isActiveRoute('/aset-lancar/daftar-barang'),
      },
      {
        name: 'Kategori Barang',
        subSubMenu: [
          {
            name: 'Kategori Barang',
            path: '/aset-lancar/kategori-barang',
            isActive: isActiveRoute('/aset-lancar/kategori-barang'),
          },
        ],
      },
      {
        name: 'Kondisi Barang',
        path: '/aset-lancar/kondisi-barang',
        isActive: isActiveRoute('/aset-lancar/kondisi-barang'),
      },
    ],
  },
  {
    name: 'Aset Tetap',
    icon: CubeIcon,
    isActive: isActiveRoute('/aset-tetap'),
    submenu: [
      {
        name: 'Saldo Awal Barang',
        subSubMenu: [
          {
            name: 'Data Awal',
            subSubSubMenu: [
                        {
                          name: 'Tanah',
                          path: '/aset-tetap/tanah',
                          isActive: isActiveRoute('/aset-tetap/tanah'),
                        },
                        {
                          name: 'Peralatan Mesin',
                          path: '/aset-tetap/peralatan-mesin',
                          isActive: isActiveRoute('/aset-tetap/peralatan-mesin'),
                        },
                        {
                          name: 'Gedung dan Bangunan',
                          path: '/aset-tetap/gedung-dan-bangunan',
                          isActive: isActiveRoute('/aset-tetap/gedung-dan-bangunan'),
                        },
                        {
                          name: 'Jalan, Irigasi dan jaringan',
                          path: '/manajmen/jalan-irigasi-jaringan',
                          isActive: isActiveRoute('/manajmen/jalan-irigasi-jaringan'),
                        },
                        {
                          name: 'Aset Tetap Lainnya',
                          path: '/aset-tetap/aset-tetap-lainnya',
                          isActive: isActiveRoute('/aset-tetap/aset-tetap-lainnya'),
                        },
                        {
                          name: 'Aset Lain-lain',
                          path: '/aset-tetap/aset-lain-lain',
                          isActive: isActiveRoute('/aset-tetap/aset-lain-lain'),
                        },
                        {
                          name: 'Konstruksi Dalam Pengerjaan',
                          path: '/aset-tetap/konstruksi-dalam-pengerjaan',
                          isActive: isActiveRoute('/aset-tetap/konstruksi-dalam-pengerjaan'),
                        },
            ]
          },
          {
            name: 'Penggunaan Awal',
            path: '/pengunaan-awal',
            isActive: isActiveRoute('/pengunaan-awal'),
          },
          {
            name: 'Pemanfaatan Awal',
            path: '/pemanfaatan-awal',
            isActive: isActiveRoute('/pemanfaatan-awal'),
          },
          {
            name: 'Pengamanan Awal',
            path: '/pengamanan-awal',
            isActive: isActiveRoute('/pengamanan-awal'),
          },
        ],
      },
      {
        name:'Inventarisasi',
        subSubMenu: [
          {
            name:'Lembar Kerja Inventarisasi',
            subSubSubMenu: [
              {name: 'Tanah', path: '/aset-tetap/inventarisasi/lembar-kerja-inventarisasi/tanah', isActive: isActiveRoute('/lembar-kerja-inventarisasi/tanah')},
              {name: 'Peralatan dan Mesin', path: '/aset-tetap/inventarisasi/lembar-kerja-inventarisasi/peralatan-dan-mesin', isActive: isActiveRoute('/aset-tetap/inventarisasi/lembar-kerja-inventarisasi/peralatan-dan-mesin')},
              {name: 'Gedung dan Bangunan', path: '/aset-tetap/inventarisasi/lembar-kerja-inventarisasi/gedung-dan-bangunan', isActive: isActiveRoute('/aset-tetap/inventarisasi/lembar-kerja-inventarisasi/gedung-dan-bangunan')},
              {name: 'Jalan, Irigasi dan Jaringan', path: '/aset-tetap/inventarisasi/lembar-kerja-inventarisasi/jalan-irigasi-dan-jaringan', isActive: isActiveRoute('/aset-tetap/inventarisasi/lembar-kerja-inventarisasi/jalan-irigasi-dan-jaringan')},
              {name: 'Aset Tetap Lainnya', path: '/aset-tetap/inventarisasi/lembar-kerja-inventarisasi/aset-tetap-lainnya', isActive: isActiveRoute('/aset-tetap/inventarisasi/lembar-kerja-inventarisasi/aset-tetap-lainnya')},
            ]
          },
          {
            name:'Daftar Barang',
            subSubSubMenu: [
              {'name': 'Tanah', path: '/aset-tetap/inventarisasi/daftar-barang/tanah', isActive: isActiveRoute('/aset-tetap/inventarisasi/daftar-barang/tanah')},
              {'name': 'Peralatan dan Mesin', path: '/aset-tetap/inventarisasi/daftar-barang/peralatan-dan-mesin', isActive: isActiveRoute('/aset-tetap/inventarisasi/daftar-barang/peralatan-dan-mesin')},
              {'name': 'Gedung dan Bangunan', path: '/aset-tetap/inventarisasi/daftar-barang/gedung-dan-bangunan', isActive: isActiveRoute('/aset-tetap/inventarisasi/daftar-barang/gedung-dan-bangunan')},
              {'name': 'Jalan, Irigasi dan Jaringan', path: '/aset-tetap/inventarisasi/daftar-barang/jalan-irigasi-dan-jaringan', isActive: isActiveRoute('/aset-tetap/inventarisasi/daftar-barang/jalan-irigasi-dan-jaringan')},
              {'name': 'Aset Tetap Lainnya', path: '/aset-tetap/inventarisasi/daftar-barang/aset-tetap-lainnya', isActive: isActiveRoute('/aset-tetap/inventarisasi/daftar-barang/aset-tetap-lainnya')},
              {'name': 'Aset Lain-Lain', path: '/aset-tetap/inventarisasi/daftar-barang/aset-lain-lain', isActive: isActiveRoute('/aset-tetap/inventarisasi/daftar-barang/aset-lain-lain')},
              {'name': 'K D P', path: '/aset-tetap/inventarisasi/daftar-barang/k-d-p', isActive: isActiveRoute('/aset-tetap/inventarisasi/daftar-barang/k-d-p')},
            ]
          },
          {
            name:'Laporan Inventarisasi',
            path: '/aset-tetap/inventarisasi/laporan-inventarisasi',
            isActive: isActiveRoute('/aset-tetap/inventarisasi/laporan-inventarisasi'),
          }
        ]
      }
    ],
  },
  {
    name: 'Admin',
    icon: ArrowsRightLeftIcon,
    submenu: [
      {
        name: 'Daftar Ruangan',
        path: '/admin/daftar-ruangan',
      },
      {
        name: 'Daftar Unit',
        path: '/admin/daftar-unit',
      },
      {
        name: 'Daftar Satuan',
        path: '/admin/daftar-satuan',
      },
      {
        name: 'Daftar Penyedia',
        path: '/admin/daftar-penyedia',
      },
    ],
  },
  { name: 'pembukuan', icon: BuildingOffice2Icon
    , submenu: [
      {
        name: 'Cara Perolehan',
        subSubMenu: [
          {name: 'Pengadaan BMD', subSubSubMenu: [
            {name: 'Pengadaan', path: '/pembukuan/cara-perolehan-pengadaan-bmd/pengadaan', isActive: isActiveRoute('/pembukuan/cara-perolehan-pengadaan-bmd/pengadaan')},
            {name: 'Atribusi', path: '/pembukuan/cara-perolehan-pengadaan-bmd/atribusi', isActive: isActiveRoute('/pembukuan/cara-perolehan-pengadaan-bmd/atribusi')},
          ]},
        ]
      }
    ]
  },
  { name: 'Laporan', icon: RectangleGroupIcon, path: '/laporan' },
  { name: 'Pengguna', icon: ChartBarIcon, path: '/pengguna' },
  { name: 'Pengaturan', icon: UserGroupIcon, path: '/pengaturan' },
]

export function getActiveMenuItems(currentPath: string): MenuItem[] {
  const isActive = (path?: string): boolean => {
    if (!path) return false
    return currentPath.startsWith(path)
  }

  // Level 4
  const updateSubSubSubMenu = (subSubSubMenu: SubSubSubMenuItem[]): SubSubSubMenuItem[] => {
    return subSubSubMenu.map((item) => {
      const newItem = { ...item }
      let itemActive = isActive(newItem.path)

      // Tidak ada level lebih dalam dari 4, cukup periksa path langsung
      newItem.isActive = itemActive
      return newItem
    })
  }

  // Level 3
  const updateSubSubMenu = (subSubMenu: SubSubMenuItem[]): SubSubMenuItem[] => {
    return subSubMenu.map((item) => {
      const newItem = { ...item }
      let itemActive = isActive(newItem.path)

      if (newItem.subSubSubMenu) {
        newItem.subSubSubMenu = updateSubSubSubMenu(newItem.subSubSubMenu)
        if (newItem.subSubSubMenu.some(subSubSub => subSubSub.isActive))
          itemActive = true
      }

      newItem.isActive = itemActive
      return newItem
    })
  }

  // Level 2
  const updateSubMenu = (submenu: SubMenuItem[]): SubMenuItem[] => {
    return submenu.map((sub) => {
      const newSub = { ...sub }
      let subActive = isActive(newSub.path)

      if (newSub.subSubMenu) {
        newSub.subSubMenu = updateSubSubMenu(newSub.subSubMenu)
        if (newSub.subSubMenu.some(subSub => subSub.isActive))
          subActive = true
      }

      newSub.isActive = subActive
      return newSub
    })
  }

  // Level 1
  const updateMenu = (items: MenuItem[]): MenuItem[] => {
    return items.map((item) => {
      const newItem = { ...item }
      let itemActive = isActive(newItem.path)

      if (newItem.submenu) {
        newItem.submenu = updateSubMenu(newItem.submenu)
        if (newItem.submenu.some(sub => sub.isActive))
          itemActive = true
      }

      newItem.isActive = itemActive
      return newItem
    })
  }

  return updateMenu(menuItems)
}
