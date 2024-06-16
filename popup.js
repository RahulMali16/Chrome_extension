const btn = document.querySelector('.changeColorBtn');

btn.addEventListener('click',async()=>{
    let [tab]  =  await chrome.tabs.query({active:true , currentWindow:true});

    chrome.scripting.executeScript({
        target:{tabId : tab.id},
        function:pickColor,

    })

    //method for the chrome scripting work

});

async function pickColor(){
    // console.log('script Working')
    try {
        //picker
        const eyeDropper = new EyeDropper();
        const selectColor =  await eyeDropper.open();
        console.log(selectColor);


    } catch (error) {
        console.log(error)

    }

}