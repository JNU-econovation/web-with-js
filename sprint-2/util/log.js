class Log {
  constructor(command,value) {
    this.command=command;
    this.value=value;
  }
  print(){
    let message=this.command+": "+this.value;
    console.log(message);
  }
}

module.exports = Log;
