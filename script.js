
document.querySelector('#sp2').style.display = 'none'
document.querySelector('#sp1').addEventListener('click',function(){
    
    document.querySelector('.navbar').classList.toggle('gonavbar');
     
    if(document.querySelector('.navbar').classList.contains('gonavbar')){
        document.querySelector('#sp1').style.display = 'inline'
        document.querySelector('#sp2').style.display = 'none'
    }
      else{
        document.querySelector('#sp1').style.display = 'none'
       
         setTimeout(()=>{
            document.querySelector('#sp2').style.display = 'inline'
         },1000); 
    } 
      
})
document.querySelector('#sp2').addEventListener('click',function(){
    document.querySelector('.navbar').classList.toggle('gonavbar');
    document.querySelector('#sp2').style.display = 'none'
    document.querySelector('#sp1').style.display = 'inline'
})

