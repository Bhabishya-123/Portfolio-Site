
export const givePageName = (e)=>{
    //it will give height of a document
    const totalDocHeight = document.documentElement.scrollHeight;

    //this will pass each clicked page name value attributes data to us when calling this function
    const pageName = e.target.attributes.getNamedItem("value").value;

    if(totalDocHeight>=5000){
  //this switch will compare one pageName value with many condition from which one scroll is done
  switch(pageName) {
    case "Home" :
      window.scrollTo({top:0,behavior:"smooth"});
      break;
    case "Services":
      window.scrollTo({top:800,behavior:"smooth"});
      break;
    case "Experience":
      window.scrollTo({top:2500,behavior:"smooth"});
      break;
    case "Portfolio":
      window.scrollTo({top:3500,behavior:"smooth"});
      break;
    case "Testomonial":
      window.scrollTo({top:4150,behavior:"smooth"});
      break;
    case "Contact":
      window.scrollTo({top:5000,behavior:"smooth"});
      break;
    case "Hireme":
      window.scrollTo({top:5000,behavior:"smooth"});
      break;
    default:
      break;
  }
  
   }//if
else{
      
       //this switch will compare one pageName value with many condition from which one scroll is done
       switch(pageName) {
        case "Home":
          window.scrollTo({top:0,behavior:"smooth"});
          break;
        case "Services":
          window.scrollTo({top:800,behavior:"smooth"});
          break;
        case "Experience":
          window.scrollTo({top:1800,behavior:"smooth"});
          break;
        case "Portfolio":
          window.scrollTo({top:2500,behavior:"smooth"});
          break;
        case "Testomonial":
          window.scrollTo({top:3150,behavior:"smooth"});
          break;
        case "Contact":
          window.scrollTo({top:4000,behavior:"smooth"});
          break;
        case "Hireme":
          window.scrollTo({top:4000,behavior:"smooth"});
          break;
        default:
          break;
      }
}
}