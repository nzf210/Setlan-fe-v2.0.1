import {
  HomeIcon,
  CubeIcon,
  ArrowsRightLeftIcon,
  BuildingOffice2Icon,
  ChartBarIcon,
  UserGroupIcon,
  CogIcon,
  // ListBulletIcon,
  // RectangleGroupIcon,
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
}

function isActiveRoute(route: string): boolean {
  return window.location.pathname === route
}

export const menuItems: MenuItem[] = [
  { name: 'Dashboard', icon: HomeIcon, path: '/dashboard' },
  {
    name: 'Aset Lancar',
    icon: CogIcon,
    isActive: isActiveRoute('/manajmen'),
    submenu: [
      {
        name: 'Daftar Barang',
        path: '/manajmen/items',
        isActive: isActiveRoute('/manajmen/items'),
      },
      {
        name: 'Kategori Barang',
        subSubMenu: [
          {
            name: 'Kategori Barang',
            path: '/manajmen/kategori-barang',
            isActive: isActiveRoute('/manajmen/items/kategori-barang'),
          },
        ],
      },
      {
        name: 'Kondisi Barang',
        path: '/manajmen/kondisi-barang',
        isActive: isActiveRoute('/manajmen/kondisi-barang'),
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
            path: '/manajmen/kategori-barang',
            isActive: isActiveRoute('/manajmen/items/kategori-barang'),
          },
          {
            name: 'Aset Tetap Lainnya',
            path: '/manajmen/kategori-barang',
            isActive: isActiveRoute('/manajmen/items/kategori-barang'),
          },
          {
            name: 'Aset Lain-lain',
            path: '/manajmen/kategori-barang',
            isActive: isActiveRoute('/manajmen/items/kategori-barang'),
          },
          {
            name: 'Konstruksi Dalam Pengerjaan',
            path: '/manajmen/kategori-barang',
            isActive: isActiveRoute('/manajmen/items/kategori-barang'),
          },
        ],
      },
      {
        name: 'Penggunaan Awal',
        path: '/manajmen/items',
        isActive: isActiveRoute('/manajmen/items'),
      },
      {
        name: 'Pemanfaatan Awal',
        path: '/manajmen/items',
        isActive: isActiveRoute('/manajmen/items'),
      },
      {
        name: 'Pengamanan Awal',
        path: '/manajmen/items',
        isActive: isActiveRoute('/manajmen/items'),
      },
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
  { name: 'Laporan', icon: BuildingOffice2Icon, path: '/laporan' },
  { name: 'Pengguna', icon: ChartBarIcon, path: '/pengguna' },
  { name: 'Pengaturan', icon: UserGroupIcon, path: '/pengaturan' },
]

export function getActiveMenuItems(currentPath: string): MenuItem[] {
  const isActive = (path?: string): boolean => {
    if (!path) return false
    return currentPath.startsWith(path)
  }

  const updateSubMenu = (submenu: SubMenuItem[]): SubMenuItem[] => {
    return submenu.map((sub) => {
      const newSub = { ...sub }
      let subActive = isActive(newSub.path)

      if (newSub.subSubMenu) {
        newSub.subSubMenu = updateSubSubMenu(newSub.subSubMenu)
        if (newSub.subSubMenu.some((subSub) => subSub.isActive)) subActive = true
      }

      newSub.isActive = subActive
      return newSub
    })
  }

  const updateSubSubMenu = (subSubMenu: SubSubMenuItem[]): SubSubMenuItem[] => {
    return subSubMenu.map((subSub) => {
      const newSubSub = { ...subSub }
      newSubSub.isActive = isActive(newSubSub.path)
      return newSubSub
    })
  }

  const updateMenu = (items: MenuItem[]): MenuItem[] => {
    return items.map((item) => {
      const newItem = { ...item }
      let itemActive = isActive(newItem.path)

      if (newItem.submenu) {
        newItem.submenu = updateSubMenu(newItem.submenu)
        if (newItem.submenu.some((sub) => sub.isActive)) itemActive = true
      }

      newItem.isActive = itemActive
      return newItem
    })
  }

  return updateMenu(menuItems)
}
