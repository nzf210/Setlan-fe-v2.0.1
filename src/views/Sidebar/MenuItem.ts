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
    name: 'Manajemen Barang',
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
    name: 'Transaksi',
    icon: CubeIcon,
    submenu: [
      {
        name: 'Penerimaan Barang',
        path: '/transaksi/penerimaan-barang',
        isActive:
          isActiveRoute('/transaksi/penerimaan-barang') ||
          isActiveRoute('/transaksi/penerimaan-barang/penerimaan-barang-baru') ||
          isActiveRoute('/transaksi/penerimaan-barang/penerimaan-barang'),
      },
      {
        name: 'Pengeluaran Barang',
        subSubMenu: [
          {
            name: 'Pengeluaran Barang',
            path: '/transaksi/Pengeluaran-Barang/pengeluaran-barang',
            isActive: isActiveRoute('/transaksi/Pengeluaran-Barang/pengeluaran-barang'),
          },
          {
            name: 'Pengeluaran Barang baru',
            path: '/transaksi/Pengeluaran-Barang/pengeluaran-barang-baru',
            isActive: isActiveRoute('/transaksi/Pengeluaran-Barang/pengeluaran-barang-baru'),
          },
        ],
      },
    ],
  },
  { name: 'Organisasi', icon: ArrowsRightLeftIcon, path: '/organisasi' },
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
