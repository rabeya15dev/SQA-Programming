import{Parent} from"./parentClass";

const parentObj=new parent();
    export class child {
        calculation(type,numberOne,numberTwo){
            if(type==="sum"){
                 parentObj.sum(numberOne,numberTwo)
            }else {

                parentObj.subs(numberOne,numberTwo)
        
            }
    }
}
const childobj =new child();
childobj.calculation("sum",10,5);
childobj.calculation("sum",10,5);