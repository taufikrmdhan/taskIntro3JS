const getmonth = (callback) => {
  setTimeout(() => {
    let error =false;
    let month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let data = month.map((item) => {
      return `Bulan : ${item} \n`;
    });
    if (!error) {
      callback(null, data);
    } else {
      callback(new Error("Sorry Data Not Found", []));
    }
  }, 4000);
};
const print = (error, data) => {
    if(error) {
        console.log(error.message);
    } else {
        console.log(data.toString().split(',').join(''));
    }   
}
getmonth(print)