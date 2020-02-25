class Log {
  constructor(input) {
    this.n_data = input;
    this.error = true;
  }
  printData(){
    let type = ["d","h","m","s"]
    let message = "";

    for(let i=0;i<this.n_data.length;i++){
      if(this.n_data[i]!=0){
        message += this.n_data[i]
        message += type[i];
      }
    }
    console.log(message);
  }
}

module.exports = Log;
