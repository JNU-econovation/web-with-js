class Shop {
  constructor() {
    this.time=0;
    this.count=0;
    this.employee_one;
    this.employee_two;
  }
  stop(){
    if(this.count==0){
      clearInterval(this.employee_one);
      clearInterval(this.employee_two);
    }else if(this.count==1) clearInterval(this.employee_two);
  }
  employee(){
    console.log("햄버거를 완성했습니다.");
    this.count -=1;
    this.stop();
  }
  order(count) {
    this.count = count;
    this.employee_one = setInterval(()=>this.employee(),2000);
    this.employee_two = setInterval(()=>this.employee(),2000);
  }

}

module.exports = Shop;