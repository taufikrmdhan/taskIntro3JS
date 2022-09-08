// program 1
// const pilihMenu = (menu) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const dataMenu = ["nasi goreng", "soto", "bakso", "mie ayam", "sate"];
//       let cek = dataMenu.find((item) => {
//         return item === menu;
//       });
//       if (cek) {
//         resolve(cek);
//       } else {
//         reject("Menu tidak tersedia");
//       }
//     }, 3000);
//   });
// };

// const masakMenu = (menu) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (menu == menu) {
//         resolve("Menu akan disiapkan");
//       } else {
//         reject("Menu gagal disiapkan");
//       }
//     }, 3000);
//   });
// };

// function reserveMenu(menu) {
//   pilihMenu(menu)
//     .then(masakMenu)
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error));
// }
// reserveMenu("bakwan");

// program 2
const rebusAir = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        let error = false;
        if (!error) {
            resolve("Air mendidih");
        } else {
            reject("Air tidak mendidih");
        }
        }, 3000);
    });
    };
const masukkanMie = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        let error = false;
        if (!error) {
            resolve("Mie dimasukkan");
        } else {
            reject("Mie tidak dimasukkan");
        }
        }, 3000);
    });
    }
const masukkanBumbu = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        let error = false;
        if (!error) {
            resolve("Bumbu dimasukkan");
        } else {
            reject("Bumbu tidak dimasukkan");
        }
        }, 3000);
    });
    }
const buatMie = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        let error = false;
        if (!error) {
            resolve("Mie siap");
        } else {
            reject("Mie tidak siap");
        }
        }, 3000);
    });
}
function reserveMie() {
    rebusAir()
    .then(masukkanMie)
    .then(masukkanBumbu)
    .then(buatMie)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
}
reserveMie();
