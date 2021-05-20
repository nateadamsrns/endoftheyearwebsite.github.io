
$(document).ready(function(){ //always start with this, it gets the document when ready
  
 
    
    //hide pages
    //function hideRest(){
   
    //hide homepage
    function hideHomepage(){
      $("#homepage").hide()
      console.log('hey!')
    }
  
    //show pages
    function showHomepage(){ 
      console.log("show.Home")
      $("#Homepage").show()
      $("#CPU").hide()
      $("#Motherboard").hide()
      $("#Graphics").hide()
      $("#PINS").hide()
      $("#Whatsinside").hide()
      $("#WITCPU").hide()
      $("#InFact").hide()
      $("#AllCon").hide()
      $("#WhMoBo").hide()
      $("#IntGraph").hide()
      $("#AioGraph").hide()
      $("#GraphCar").hide()

  }
  
    function showCPU(){
      hideHomepage()
      $("#Motherboard").hide()
      $("#Graphics").hide()
      $("#PINS").hide()
      $("#Whatsinside").hide()
      $("#WITCPU").hide()
      $("#InFact").hide()
      $("#AllCon").hide()
      $("#WhMoBo").hide()
      $("#IntGraph").hide()
      $("#AioGraph").hide()
      $("#GraphCar").hide()
      $("#CPU").show()
    }
  
    function showMotherboard(){
      hideHomepage()
      $("#CPU").hide()
      $("#Graphics").hide()
      $("#PINS").hide()
      $("#Whatsinside").hide()
      $("#WITCPU").hide()
      $("#InFact").hide()
      $("#AllCon").hide()
      $("#WhMoBo").hide()
      $("#IntGraph").hide()
      $("#AioGraph").hide()
      $("#GraphCar").hide()
      $("#Motherboard").show()
    }
  
    function showGraphics(){
      hideHomepage()
      $("#CPU").hide()
      $("#Motherboard").hide()
      $("#PINS").hide()
      $("#Whatsinside").hide()
      $("#WITCPU").hide()
      $("#InFact").hide()
      $("#AllCon").hide()
      $("#WhMoBo").hide()
      $("#IntGraph").hide()
      $("#AioGraph").hide()
      $("#GraphCar").hide()
      $("#Graphics").show()
    }
  
    function showPINS(){
      hideHomepage()
      $("#CPU").hide()
      $("#Motherboard").hide()
      $("#Graphics").hide()
      $("#Whatsinside").hide()
      $("#WITCPU").hide()
      $("#InFact").hide()
      $("#AllCon").hide()
      $("#WhMoBo").hide()
      $("#IntGraph").hide()
      $("#AioGraph").hide()
      $("#GraphCar").hide()
      $("#PINS").show()
    }
  
    function showWhatsinside(){
      hideHomepage()
      $("#CPU").hide()
      $("#Motherboard").hide()
      $("#Graphics").hide()
      $("#PINS").hide()
      $("#WITCPU").hide()
      $("#InFact").hide()
      $("#AllCon").hide()
      $("#WhMoBo").hide()
      $("#IntGraph").hide()
      $("#AioGraph").hide()
      $("#GraphCar").hide()
      $("#Whatsinside").show()
    }
  
    function showWITCPU(){
      hideHomepage()
      $("#CPU").hide()
      $("#Motherboard").hide()
      $("#Graphics").hide()
      $("#PINS").hide()
      $("#Whatsinside").hide()
      $("#InFact").hide()
      $("#AllCon").hide()
      $("#WhMoBo").hide()
      $("#IntGraph").hide()
      $("#AioGraph").hide()
      $("#GraphCar").hide()
      $("#WITCPU").show()
    }
  
    function showInFact(){
      hideHomepage()
      $("#CPU").hide()
      $("#Motherboard").hide()
      $("#Graphics").hide()
      $("#PINS").hide()
      $("#Whatsinside").hide()
      $("#WITCPU").hide()
      $("#AllCon").hide()
      $("#WhMoBo").hide()
      $("#IntGraph").hide()
      $("#AioGraph").hide()
      $("#GraphCar").hide()
      $("#InFact").show()
    }
  
     function showAllCon(){
      hideHomepage()
      $("#CPU").hide()
      $("#Motherboard").hide()
      $("#Graphics").hide()
      $("#PINS").hide()
      $("#Whats-inside").hide()
      $("#WITCPU").hide()
      $("#InFact").hide()
      $("#WhMoBo").hide()
      $("#IntGraph").hide()
      $("#AioGraph").hide()
      $("#GraphCar").hide()
      $("#AllCon").show()
    }
  
    function showWhMoBo(){
      hideHomepage()
      $("#CPU").hide()
      $("#Motherboard").hide()
      $("#Graphics").hide()
      $("#PINS").hide()
      $("#Whatsinside").hide()
      $("#WITCPU").hide()
      $("#InFact").hide()
      $("#AllCon").hide()
      $("#IntGraph").hide()
      $("#AioGraph").hide()
      $("#GraphCar").hide()
      $("#WhMoBo").show()
    }
  
    function showIntGraph(){
      hideHomepage()
      $("#CPU").hide()
      $("#Motherboard").hide()
      $("#Graphics").hide()
      $("#PINS").hide()
      $("#Whatsinside").hide()
      $("#WITCPU").hide()
      $("#InFact").hide()
      $("#AllCon").hide()
      $("#WhMoBo").hide()
      $("#AioGraph").hide()
      $("#GraphCar").hide()
      $("#IntGraph").show()
    }
  
    function showAioGraph(){
      hideHomepage()
      $("#CPU").hide()
      $("#Motherboard").hide()
      $("#Graphics").hide()
      $("#PINS").hide()
      $("#Whatsinside").hide()
      $("#WITCPU").hide()
      $("#InFact").hide()
      $("#AllCon").hide()
      $("#WhMoBo").hide()
      $("#IntGraph").hide()
      $("#GraphCar").hide()
      $("#AioGraph").show()
    }
  
    function showGraphCar(){
      hideHomepage()
      $("#CPU").hide()
      $("#Motherboard").hide()
      $("#Graphics").hide()
      $("#PINS").hide()
      $("#Whatsinside").hide()
      $("#WITCPU").hide()
      $("#InFact").hide()
      $("#AllCon").hide()
      $("#WhMoBo").hide()
      $("#IntGraph").hide()
      $("#AioGraph").hide()
      $("#GraphCar").show()
    }
  
   
    
  
    
  
 
  
    //call function
    showHomepage() //this hides every other pages at the beginning, only shows the homepage
  
    //go to category pages
    $("#do-but").on("click",showCPU) //CPU Page
    $("#wi-but").on("click",showMotherboard) //Motherboard Page
    $("#big-but").on("click",showGraphics) //Graphics Page
  
    //go to information pages
    $("#PINS-but").on("click",showPINS) //PINS Page
    $("#Where-It-Is-but").on("click",showWITCPU) //WIT CPU Page
    $("#Whats-Inside-but").on("click",showWhatsinside) //Whats inside Page
    $("#More-Facts-but").on("click",showInFact) //Interesting Facts Page
    $("#All-Con-but").on("click",showAllCon) //All Connections Page
    $("#What-MoBo-but").on("click",showWhMoBo) //Why MoBo Page
    $("#Int-Graph-but").on("click",showIntGraph) //Integrated Graphics Page
    $("#Aio-Graph-but").on("click",showAioGraph) //All In One Graphics Page
    $("#Graph-Car-but").on("click",showGraphCar)//Graphic Card Page
    $("#All-Connections-but").on("click",showAllCon)//All Connections Page
    
    //back to homepage buttons
    $(".back").on("click",showHomepage)
    $("#back1").on("click",showHomepage)
    $("#back2").on("click",showHomepage)
    $("#back3").on("click",showHomepage)
    $("#back4").on("click",showHomepage)
    $("#back5").on("click",showHomepage)
    $("#back6").on("click",showHomepage)
    $("#back7").on("click",showHomepage)
    $("#back8").on("click",showHomepage)
    $("#back9").on("click",showHomepage)
    $("#back10").on("click",showHomepage)
    $("#back11").on("click",showHomepage)
    $("#back12").on("click",showHomepage)
    $("#back13").on("click",showHomepage)
    $("#back14").on("click",showHomepage)
    $("#back15").on("click",showHomepage)
    $("#back16").on("click",showHomepage)
    $("#back17").on("click",showHomepage)
    $("#back18").on("click",showHomepage)
    $("#back19").on("click",showHomepage)
    $("#back20").on("click",showHomepage)
    $("#back21").on("click",showHomepage)
    $("#back22").on("click",showHomepage)
    $("#back23").on("click",showHomepage)
    $("#back24").on("click",showHomepage)
    $("#back25").on("click",showHomepage)
    $("#back26").on("click",showHomepage)
    $("#back27").on("click",showHomepage)
    $("#back28").on("click",showHomepage)
    $("#back29").on("click",showHomepage)
    $("#back30").on("click",showHomepage)
    $("#back31").on("click",showHomepage)
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  })
  
  
  