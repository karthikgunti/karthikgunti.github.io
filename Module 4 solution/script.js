var names=new Array();
names[0]="Raju";
names[1]="Ravi";
names[2]="john";
names[3]="Ram";
names[4]="Jenny";
names[5]="Adhi";
names[6]="jim";
names[7]="Shiva";
names[8]="Jerry";

for(var i=0;i<names.length;i++){
    if(names[i].charAt(0)=='J'||names[i].charAt(0)=='j'){
        console.log("Goodbye "+names[i]);
    }
    else{
        console.log("Hello "+names[i]);
    }
}