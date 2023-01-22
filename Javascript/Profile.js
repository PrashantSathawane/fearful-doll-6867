
let Name=document.querySelector('.name')
let NumberData=document.querySelector('.number')
let NumberData2=document.querySelector('.mobn')
let Email=document.querySelector('.email-id')
let Name2=document.querySelector('.name2')
let Email2=document.querySelector('.Email')
let UserInfOnaccountP = JSON.parse(localStorage.getItem("UserInfOnaccountP")) || []
let showUserName = document.getElementById("showUserName")
showUserName.innerText = UserInfOnaccountP[0].userName




let Namelist=JSON.parse(localStorage.getItem('User-Name'))||[]
let NumberData1=JSON.parse(localStorage.getItem('cantact-number'))||[]
let EmailList=JSON.parse(localStorage.getItem('Email-data'))||[]
console.log(Namelist,NumberData1,EmailList);


sowName(Namelist)
function sowName(data1) {
for(let i=0;i<data1.length;i++){
    
Name.innerHTML=`${data1[i]}`
Name2.innerHTML=`${data1[i]}`
delete Namelist[i]
}
}


sowContact(NumberData1)
function sowContact(data2) {
for(let i=0;i<data2.length;i++){
    

NumberData.innerHTML=`${data2[i]}`
NumberData2.innerHTML=`${data2[i]}`

delete NumberData1[i]
}
}

sowEmail(EmailList)
function sowEmail(emdata) {
for(let i=0;i<emdata.length;i++){
Email.innerHTML=`${emdata[i]}`
Email2.innerHTML=`${emdata[i]}`
delete EmailList[i]
}
}

