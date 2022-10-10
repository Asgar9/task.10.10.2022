const personAli = {
    firstName:"Ali",
    lastname:"Aliyev",
    salary:310,    
}
const personEmil = {
    firstName:"Emil",
    lastName:"Emrahov",
    salary:320,
};
const personMehman ={
    firstName:"Mehman",
    lastName:"Zeynalov",
    salary:340,
};
const personElvin = {
    firstName: "Elvin",
    lastName: "Shukurov",
    salary:400,
};
const personNicat ={
    firstName: "Nicat",
    lastName: "Ceferov",
    salary:500,
};
const personOrkhan ={
    firstName:"Orkhan",
    lastName:"Garayev",
    salary:600,
};
const personUmid ={
    firstName:"Umid",
    lastName:"Merdanov",
    salary:700,
};
 
const employees = [personAli,personElvin,personEmil,personMehman,personNicat,personNicat,personOrkhan,personUmid]
 
// console.log(employees.sort(
//     function alphebetical(a,b){
//             return a.firstName.localeCompare(b.firstName)
//     }
// ));
console.log(employees.sort((a, b) => a.firstName.localeCompare(b.firstName)));



//------FIND_FUNCTION-------------------------------------------------
 const items=["earth","mercur","mars","jupiter","neptun","uran"];
let findFunction = (item)=> {
    for (let i = 0; i < items.length; i++) {
        const element = items[i];
        if (item===element) {
            console.log(item+ " was founded")
            break            
        }
    
        else{
            console.log(item +" wasn`t founded");
        }
    }
   
}


findFunction("earth")

//-------------------------------------------------------------------------


//------FILTER_FUNCTION-----------------------------------------------------



