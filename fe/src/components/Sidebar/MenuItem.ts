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

export interface MenuItem {
  id: number
  title: string
  icon?: string | FunctionalComponent
  route?: string | null
  isActive: boolean
  children: MenuItem[]
}
function isActiveRoute(route: string): boolean {
  return window.location.pathname === route
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    title: 'Dashboard',
    icon: HomeIcon,
    route: '/dashboard',
    isActive: isActiveRoute('/dashboard'),
    children: []
  },
  {
    id: 2,
    title: 'Aset Lancar',
    icon: CogIcon,
    isActive: isActiveRoute('/aset-lancar'),
    children: [
      {
        id: 1,
        title: 'Saldo Awal',
        route: '/aset-lancar/saldo-awal',
        isActive: isActiveRoute('/aset-lancar/saldo-awal'),
        children: [],
      },
      {
        id: 2,
        title: 'Saldo Masuk',
        route: '/aset-lancar/saldo-masuk',
        isActive: isActiveRoute('/aset-lancar/saldo-masuk'),
        children: [],
      },
      {
        id: 3,
        title: 'Perintaan Barang',
        isActive: isActiveRoute('/aset-lancar/permintaan-barang'),
        children: [
          {
            id:1,
            title: 'Entri Permintaan Barang',
            route: '/aset-lancar/Entri-Permintaan-Barang',
            isActive: isActiveRoute('/aset-lancar/Entri-Permintaan-Barang'),
            children: [],
          },
          {
            id: 1,
            title: 'Usulan Permintaan Barang',
            route: '/aset-lancar/Usulan-Permintaan-Barang',
            isActive: isActiveRoute('/aset-lancar/Usulan-Permintaan-Barang'),
            children: [],
          },
          {
            id: 3,
            title: 'Persetujuan Barang',
            route: '/aset-lancar/Persetujuan-Barang',
            isActive: isActiveRoute('/aset-lancar/Persetujuan-Barang'),
            children: [],
          },
          {
            id: 4,
            title: 'BAST Penyaluran Barang',
            route: '/aset-lancar/BAST-Penyaluran-Barang',
            isActive: isActiveRoute('/aset-lancar/BAST-Penyaluran-Barang'),
            children: [],
          },
        ],
      },
      {
        id: 4,
        title: 'Kartu Barang Persediaan',
        route: '/aset-lancar/Kartu-Barang-Persediaan',
        isActive: isActiveRoute('/aset-lancar/Kartu-Barang-Persediaan'),
        children: [],
      },
      {
        id: 5,
        title:'Laporan',
        isActive: isActiveRoute('/aset-lancar/Kartu-Barang-Persediaan'),
        children: [
          {
            id: 1,
            title: 'Laporan Pengadaan' ,
            route: '/aset-lancar/Laporan-Pengadaan',
            isActive: isActiveRoute('/aset-lancar/Laporan-Pengadaan'),
            children: [],
          },

          {
            id: 2,
            title:'Laporan Penyaluran' ,
            route: '/aset-lancar/Laporan-Penyaluran',
            isActive: isActiveRoute('/aset-lancar/Laporan-penyaluran'),
            children: [],
          },
          {
            id: 3,
            title:'Laporan Persediaan (IV.1)' ,
            route: '/aset-lancar/Laporan-persediaan.iv.1',
            isActive: isActiveRoute('/aset-lancar/Laporan-persediaan.iv.1'),
            children: [],
          },
          {
            id: 4,
            title:'Laporan Persediaan Rusak (IV.I)' ,
            route: '/aset-lancar/Laporan-Persediaan-Rusak.iv.i',
            isActive: isActiveRoute('/aset-lancar/Laporan-Persediaan-Rusak.iv.i'),
            children: [],
          },
          {
            id: 5,
            title:'Laporan Barang Milik Daerah (IV.L1)' ,
            route: '/aset-lancar/Laporan-Barang-Milik-Daerah.IV.L1',
            isActive: isActiveRoute('/aset-lancar/Laporan-Barang-Milik-Daerah.IV.L1'),
            children: [],
          },
        ]
      },
    ],
  },
  {
    id: 3,
    title: 'Aset Tetap',
    icon: CubeIcon,
    isActive: isActiveRoute('/aset-tetap'),
    children: [
      {
        id: 1,
        title: 'Saldo Awal Barang',
        isActive: isActiveRoute('/aset-tetap'),
        children: [
          {
            id: 1,
            title: 'Data Awal',
            isActive: isActiveRoute('/aset-tetap'),
            children: [
              {
                id: 1,
                title: 'Tanah',
                route: '/aset-tetap/tanah',
                isActive: isActiveRoute('/aset-tetap/tanah'),
                children: [],
              },
              {
                id: 2,
                title: 'Peralatan Mesin',
                route: '/aset-tetap/peralatan-mesin',
                isActive: isActiveRoute('/aset-tetap/peralatan-mesin'),
                children: [],
              },
              {
                id: 3,
                title: 'Gedung dan Bangunan',
                route: '/aset-tetap/gedung-dan-bangunan',
                isActive: isActiveRoute('/aset-tetap/gedung-dan-bangunan'),
                children: [],
              },
              {
                id: 4,
                title: 'Jalan, Irigasi dan jaringan',
                route: '/manajmen/jalan-irigasi-jaringan',
                isActive: isActiveRoute('/manajmen/jalan-irigasi-jaringan'),
                children: [],
              },
              {
                id: 5,
                title: 'Aset Tetap Lainnya',
                route: '/aset-tetap/aset-tetap-lainnya',
                isActive: isActiveRoute('/aset-tetap/aset-tetap-lainnya'),
                children: [],
              },
              {
                id: 6,
                title: 'Aset Lain-lain',
                route: '/aset-tetap/aset-lain-lain',
                isActive: isActiveRoute('/aset-tetap/aset-lain-lain'),
                children: [],
              },
              {
                id: 7,
                title: 'Konstruksi Dalam Pengerjaan',
                route: '/aset-tetap/konstruksi-dalam-pengerjaan',
                isActive: isActiveRoute('/aset-tetap/konstruksi-dalam-pengerjaan'),
                children: [],
              },
            ]
          },
          {
            id: 2,
            title: 'Penggunaan Awal',
            route: '/pengunaan-awal',
            isActive: isActiveRoute('/pengunaan-awal'),
            children: [],
          },
          {
            id: 3,
            title: 'Pemanfaatan Awal',
            route: '/pemanfaatan-awal',
            isActive: isActiveRoute('/pemanfaatan-awal'),
            children: [],
          },
          {
            id: 4,
            title: 'Pengamanan Awal',
            route: '/pengamanan-awal',
            isActive: isActiveRoute('/pengamanan-awal'),
            children: [],
          },
        ],
      },
      {
        id: 2,
        isActive: isActiveRoute('/aset-tetap/inventarisasi'),
        title:'Inventarisasi',
        children: [
          {
            id: 1,
            title:'Lembar Kerja Inventarisasi',
            isActive: isActiveRoute('/aset-tetap/inventarisasi/lembar-kerja-inventarisasi'),
            children: [
              {
                id: 1,
                title : 'Tanah',
                route: '/aset-tetap/inventarisasi/lembar-kerja-inventarisasi/tanah',
                isActive: isActiveRoute('/lembar-kerja-inventarisasi/tanah'),
                children: [],
              },
              {
                id: 2,
                title: 'Peralatan dan Mesin',
                route: '/aset-tetap/inventarisasi/lembar-kerja-inventarisasi/peralatan-dan-mesin',
                isActive: isActiveRoute('/aset-tetap/inventarisasi/lembar-kerja-inventarisasi/peralatan-dan-mesin'),
                children: [],
              },
              {
                id: 3,
                title: 'Gedung dan Bangunan',
                route: '/aset-tetap/inventarisasi/lembar-kerja-inventarisasi/gedung-dan-bangunan',
                isActive: isActiveRoute('/aset-tetap/inventarisasi/lembar-kerja-inventarisasi/gedung-dan-bangunan'),
                children: []},
              {
                id: 4,
                title: 'Jalan, Irigasi dan Jaringan',
                route: '/aset-tetap/inventarisasi/lembar-kerja-inventarisasi/jalan-irigasi-dan-jaringan',
                isActive: isActiveRoute('/aset-tetap/inventarisasi/lembar-kerja-inventarisasi/jalan-irigasi-dan-jaringan'),
                children: []},
              {
                id: 5,
                title: 'Aset Tetap Lainnya', route: '/aset-tetap/inventarisasi/lembar-kerja-inventarisasi/aset-tetap-lainnya',
                isActive: isActiveRoute('/aset-tetap/inventarisasi/lembar-kerja-inventarisasi/aset-tetap-lainnya'),
                children: []},
            ]
          },
          {
            id: 2,
            title:'Daftar Barang',
            isActive: isActiveRoute('/aset-tetap/inventarisasi/daftar-barang'),
            children: [
              {
                id: 1,
                title : 'Tanah',
                route: '/aset-tetap/inventarisasi/daftar-barang/tanah',
                isActive: isActiveRoute('/aset-tetap/inventarisasi/daftar-barang/tanah'),
                children: [],
              },
              {
                id: 2,
                title: 'Peralatan dan Mesin',
                route: '/aset-tetap/inventarisasi/daftar-barang/peralatan-dan-mesin',
                isActive: isActiveRoute('/aset-tetap/inventarisasi/daftar-barang/peralatan-dan-mesin'),
                children: [],
              },
              {
                id: 3,
                title: 'Gedung dan Bangunan',
                route: '/aset-tetap/inventarisasi/daftar-barang/gedung-dan-bangunan',
                isActive: isActiveRoute('/aset-tetap/inventarisasi/daftar-barang/gedung-dan-bangunan'),
                children: [],
              },
              {
                id: 4,
                title: 'Jalan, Irigasi dan Jaringan',
                route: '/aset-tetap/inventarisasi/daftar-barang/jalan-irigasi-dan-jaringan',
                isActive: isActiveRoute('/aset-tetap/inventarisasi/daftar-barang/jalan-irigasi-dan-jaringan'),
                children: [],
              },
              {
                id: 5,
                title: 'Aset Tetap Lainnya',
                route: '/aset-tetap/inventarisasi/daftar-barang/aset-tetap-lainnya',
                isActive: isActiveRoute('/aset-tetap/inventarisasi/daftar-barang/aset-tetap-lainnya'),
                children: [],
              },
              {
                id: 6,
                title: 'Aset Lain-Lain',
                route: '/aset-tetap/inventarisasi/daftar-barang/aset-lain-lain',
                isActive: isActiveRoute('/aset-tetap/inventarisasi/daftar-barang/aset-lain-lain'),
                children: [],
              },
              {
                id: 7,
                title: 'K D P',
                route: '/aset-tetap/inventarisasi/daftar-barang/k-d-p',
                isActive: isActiveRoute('/aset-tetap/inventarisasi/daftar-barang/k-d-p'),
                children: [],
              },
            ]
          },
          {
            id: 3,
            title:'Laporan Inventarisasi',
            route: '/aset-tetap/inventarisasi/laporan-inventarisasi',
            isActive: isActiveRoute('/aset-tetap/inventarisasi/laporan-inventarisasi'),
            children: []
          }
        ]
      }
    ],
  },
  {
    id: 4,
    title: 'Admin',
    icon: ArrowsRightLeftIcon,
    isActive: isActiveRoute('/admin'),
    children: [
      {
        id: 1,
        isActive: isActiveRoute('/admin/daftar-ruangan'),
        title: 'Daftar Ruangan',
        route: '/admin/daftar-ruangan',
        children: []
      },
      {
        id: 2,
        isActive: isActiveRoute('/admin/daftar-unit'),
        title: 'Daftar Unit',
        route: '/admin/daftar-unit',
        children: []
      },
      {
        id: 3,
        isActive: isActiveRoute('/admin/daftar-satuan'),
        title: 'Daftar Satuan',
        route: '/admin/daftar-satuan',
        children: []
      },
      {
        id: 4,
        isActive: isActiveRoute('/admin/daftar-penyedia'),
        title: 'Daftar Penyedia',
        route: '/admin/daftar-penyedia',
        children: []
      },
    ],
  },
  {
    id: 5,
    title: 'Pembukuan',
    icon: BuildingOffice2Icon,
    isActive: isActiveRoute('/pembukuan'),
    children: [
      {
        id: 1,
        isActive: isActiveRoute('/pembukuan/cara-perolehan-pengadaan-bmd'),
        title: 'Cara Perolehan',
        children :
          [
            {
              id: 1,
              title: 'Pengadaan BMD',
              isActive: isActiveRoute('/pembukuan/cara-perolehan-pengadaan-bmd'),
              children: [
                          {
                            id: 1,
                            title: 'Pengadaan',
                            route: '/pembukuan/cara-perolehan-pengadaan-bmd/pengadaan',
                            isActive: isActiveRoute('/pembukuan/cara-perolehan-pengadaan-bmd/pengadaan') ,             children: []
                          },
                          {
                            id: 2,
                            title: 'Atribusi',
                            route: '/pembukuan/cara-perolehan-pengadaan-bmd/atribusi',
                            isActive: isActiveRoute('/pembukuan/cara-perolehan-pengadaan-bmd/atribusi') ,             children: []
                          },
                        ]},
            ]
      },
      {
        /**
         * Didalamnya Pengeluaran,Penerimaan Internal PB,Penerimaan Eksternal PB
         * Pemanfaatan, Reklasifikasi, Koreksi, Penambahan Masa Manfaat / Penggabungan, Penyusutan/Amotisasi
         * Pemeliharaan {Non Kapitasi {Pengadaan dan Pemeliharaan}},
         * Pengamanan, Penghapusan
         */
        id: 2,
        title: 'Pengelolaan BMD',
        route: '/pembukuan/pengelolaan-bmd',
        isActive: isActiveRoute('/pembukuan/pengelolaan-bmd'),
        children: []
      },
      {
        id: 3,
        title: 'K I R',
        route: '/pembukuan/k-i-r',
        isActive: isActiveRoute('/pembukuan/kir'),
        children: []
      }
    ]
  },
  {
    id: 6,
    title: 'Laporan',
    isActive: isActiveRoute('/laporan'),
    icon: RectangleGroupIcon,
    children: [
    /** Didalamnya Pengadaan, Hibah, Perjanjian/Kontrak, Ketentuan Peraturan Per-UU, Putusan Pengadilan,
     * DIvestasi, Hasil Inventarisasi, Hasil Tukar Menukar, Pembatalan Penghapusan
     * Perolehan Lainnya, Gabungan Perolehan
     */
          {
            id: 1,
            title: 'Laporan Perolehan (IV.A)',
            route: '/laporan/perolehan-iva',
            isActive: isActiveRoute('/laporan/perolehan-iva'),
            children: []
          },

    /** Didalamnya Laporan Penggunaan(IV.B) {Pengalihan / Penyerahan Status Penggunaan, penggunaan Sementara dan Dioperasikan Pihak Lain ,
     *  Pengakhiran Sementara dan Dioperasonalkan Pihak Lain } ,Laporan Penerimaan Internal (IV.C), Laporan Pengeluaran Internal (IV.D),
     *  Laporan Pemanfaatan (IV.E) {Pemanfaatan, Pengakhiran Pemanfaatan}, Laporan Reklasifikasi (IV.F), Laporan Koreksi (IV.G),
     *  Laporan Penyusutan (IV.H), Laporan Pengamanan (IV.J) {Penggunaan/Pemakaian Peralatan Mesin, Penggunaan/Pemakaian Gedung dan Bangunan (Rumah Negara) },
     *  Laporan Penghapusan (IV.K) {Penghapusan Pemidah Tanganan, Penghapusan Penyerahan/ pengalihan status penggunaan,
     *  Penghapusan Ketentuan UUD, Penghapusan Putusan Pengadilan, Penghapusan Pemusnahan, Penghapusan Sebab Lain, Gabungan penghapusan) }
     */
            {
              id: 2,
              title: 'Laporan Perolehan (IV.B-K)',
              route: '/laporan/perolehan-ivbk',
              isActive: isActiveRoute('/laporan/perolehan-ivbk'),
              children: []
            },
    /**
     * Aset tetap (IV.L.2), Aset Lain (IV.L.3), Aset Lainnya (IV.L.4)
     */
              {
                id: 3,
                title: 'Laporan Barang Milik Daerah (IV.L)',
                route: '/laporan/perolehan-ivk',
                isActive: isActiveRoute('/laporan/perolehan-ivk'),
                children: []
              },
              {
                id: 4,
                title: 'Daftar Barang',
                isActive: isActiveRoute('/laporan/kir'),
                children: [
                      {
                        id: 1,
                        title : 'Daftar Penggunaan Sementara',
                        route: '/laporan/daftar-barang/Daftar-Penggunaan-Sementara',
                        isActive: isActiveRoute('/laporan/daftar-barang/Daftar-Penggunaan-Sementara'),
                        children: []
                      },
                      {
                        id: 2,
                        title: 'Daftar Penggunaan Barang dioperasionalkan pihak lain',
                        route: '/laporan/daftar-barang/Daftar-Penggunaan-Barang-dioperasionalkan-pihak-lain',
                        isActive: isActiveRoute('/laporan/daftar-barang/Daftar-Penggunaan-Barang-dioperasionalkan-pihak-lain'),
                        children: []
                      },
                      {
                        id: 3,
                        title: 'Daftar Pemanfaatan BMD',
                        route: '/laporan/daftar-barang/Daftar-Pemanfaatan-BMD',
                        isActive: isActiveRoute('/laporan/daftar-barang/Daftar-Pemanfaatan-BMD'),
                        children: []
                      },
                      {
                        id: 4,
                        title: 'Daftar Barang Kuasa Pengguna Barang',
                        route: '/laporan/daftar-barang/Daftar-Barang-Kuasa-Pengguna-Barang',
                        isActive: isActiveRoute('/laporan/daftar-barang/Daftar-Barang-Kuasa-Pengguna-Barang'),
                        children: []
                      },
                      {
                        id: 5,
                        title: 'Daftar Barang Pengguna Barang',
                        route: '/laporan/daftar-barang/Daftar-Barang-Pengguna-Barang',
                        isActive: isActiveRoute('/laporan/daftar-barang/Daftar-Barang-Pengguna-Barang'),
                        children: []
                      },
                      {
                        id: 6,
                        title: 'Daftar Pengamanan BMD',
                        route: '/laporan/daftar-barang/Daftar-Pengamanan-BMD',
                        isActive: isActiveRoute('/laporan/daftar-barang/Daftar-Pengamanan-BMD'),
                        children: []
                      },
                    ]
            },
            /**
             * Tanah, Peralatan dan Mesin, Gedung dan Bangunan, Jalan, Irigasi dan Jaringan, Aset Tetap Lainnya, KDP
             */
            {
              id: 5,
              title: 'KIB Aset Tetap',
              route: '/laporan/kib-aset-tetap',
              isActive: isActiveRoute('/laporan/kib-aset-tetap'),
              children: []},
            /**
             * kemitraan Pihak Ketiga , Lain Lain
             * */
            {
              id: 6,
              title: 'KIB Aset Lainnya',
              route: '/laporan/kib-aset-lainnya',
              isActive: isActiveRoute('/laporan/kib-aset-lainnya'),
              children: []},
            {
              id: 7,
              title: 'Cetak QR',
              route: '/laporan/cetak-qr',
              isActive: isActiveRoute('/laporan/cetak-qr'),
              children: []},
            {
              id: 8,
              title: 'Kartu Inventaris Ruangan',
              route: '/laporan/Kartu-Inventaris-Ruangan',
              isActive: isActiveRoute('/laporan/Kartu-Inventaris-Ruangan'),
              children: []},
            {
              id: 9,
              title: 'Berita Acara Rekonsilasi (V.1)',
              route: '/laporan/Berita-Acara-Rekonsilasi.V.1)',
              isActive: isActiveRoute('/laporan/Berita-Acara-Rekonsilasi.V.1'),
              children: []},
          ]},
  {
    id: 7,
    isActive: isActiveRoute('/pengguna'),
    title: 'Pengguna',
    icon: ChartBarIcon,
    route: '/pengguna',
    children: []
  },
  {
    id: 8,
    title: 'Pengaturan',
    icon: UserGroupIcon,
    route: '/pengaturan',
    isActive: isActiveRoute('/pengaturan'),
    children: [],
  },
]
