var btn_clock = document.getElementById("btn-clock");
var phone_white = document.getElementById("phone-white");
var btn_number = document.querySelectorAll(".btn_number");
var numbers = Array.from(btn_number);
var circle= Array.from(document.querySelectorAll(".fa-circle"));
var arrow = document.getElementById("arrow");
var activeElement = document.activeElement.id;

btn_clock.addEventListener("click", ()=>
{
    
     phone_white.style.transform ="translateY(-40rem)";
    // phone_white.style.transition="transform 600ms";
    // btn_clock.style.display="none";
}
)
secret="";
key_secret="1234";
var i=0;
numbers.forEach( item => 
    {
       
        item.addEventListener("click", ()=>
        {
            if((secret.length)  < 4)
            {
                
                secret += item.textContent;
                circle[i].style.transform = "scale(1.5)";
                circle[i].style.color = "#05477f";
                if (i<4) { i++}   
                if (i == 4)
                {
                    if(secret == key_secret)
                    {
                        circle.forEach(element => {
                            element.style.color = "green";
                            phone_white.style.transform ="translateY(-60rem)";
                            phone_white.style.transition="transform 600ms";
                            
                        })
                    }
                    else
                    {
                        circle.forEach(element => 
                            {element.style.color = "red";
                             secret ="";
                             i = 0
                             setTimeout ( function()
                             {
                                circle.forEach(element => (element.style.color = "#f8f9fa;"))
                             }, 500
                             )})
                    }
                }
            }
            else
            {
                console.log("4 numéros uniquement")
            }
            
        })
              
})



