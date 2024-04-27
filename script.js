const start_log=document.getElementById("start-log");
const stop_log=document.getElementById("stop-log");
const display_key=document.getElementById("display-key");
const display_state=document.getElementById("display-state");
start_log.addEventListener("click",()=>{
    document.addEventListener("keydown",handledown);
    document.addEventListener("keyup",handleup);
    stop_log.style.background='white';
    start_log.style.background='gray';
});
stop_log.addEventListener("click",()=>{
    document.removeEventListener("keydown",handledown);
    document.removeEventListener("keyup",handleup);
    display_key.textContent="";
    // console.log(e.key);
    display_state.textContent="";
    stop_log.style.background='gray';
    start_log.style.background='white';
    // stop_log.style.display=true;
});
    function handledown(e){
        display_key.textContent=`Key ${e.key} is presses down`;
    // console.log(e.key);
    display_state.textContent=`Key is down`;
}
function handleup(e){
    // console.log(e.key);
    display_key.textContent=`Key ${e.key} is presses up`;
    display_state.textContent=`Key is up`;
}