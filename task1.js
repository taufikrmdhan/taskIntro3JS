// format awal
// const cekHariKerja = (day) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
//       let cek = dataDay.find((item) => {
//         return item === day;
//       });
//       if (cek) {
//         resolve(cek);
//       } else {
//         reject(new Error('Hari ini bukan hari kerja'));
//       }
//     }, 3000);
//   });
// }
// cekHariKerja('senin')

// then catch
// then catch adalah metode handling dari objek promise, Menggunakan then, catch dan finally, 
// kita dapat melakukan serangkaian tindakan berdasarkan apakah Janji diselesaikan ( then) atau ditolak ( catch) 
// sementara finally memungkinkan kita untuk mengeksekusi kode setelah Janji diselesaikan, 
// terlepas dari apakah itu diselesaikan atau ditolak:
// const cekHariKerja = (day) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
//       let cek = dataDay.find((item) => {
//         return item === day;
//       });
//       if (cek) {
//         resolve(cek);
//       } else {
//         reject(new Error('Hari ini bukan hari kerja'));
//       }
//     }, 3000);
//   });
// }
// cekHariKerja("sabtu")
// .then((result) => console.log(result))
// .catch((error) => console.log(error.message));

// try catch
// try catch adalah salah satu cara untuk menangani error pada async await javascript,
// try catch tidak akan menangkap pengecualian yang terjadi dari dalam operasi asinkron jika operasi itu tidak awaited(ditunggu).
const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error('Hari ini bukan hari kerja'));
      }
    }, 3000);
  });
}
getData = async () => {
  try{
    let result = await cekHariKerja("sabtu");
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
}
getData();
