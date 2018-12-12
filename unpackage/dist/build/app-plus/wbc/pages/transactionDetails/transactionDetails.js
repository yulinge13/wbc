
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,1],"body{height:100%}\n.",[1],"transactionDetails{padding:",[0,20]," ",[0,30],";background:#f7f7f7}\n.",[1],"link_list{margin-bottom:",[0,30],"}\n",],undefined,{path:"./pages/transactionDetails/transactionDetails.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/transactionDetails/transactionDetails.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      