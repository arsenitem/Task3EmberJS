import Component from '@ember/component';
export default Component.extend({
    actions:{ 
       
        Refresh(){

            for(var i=0; i<$('#blocks_to_append').children('.programm_block').length;i++){
              $('#blocks_to_append .programm_block').appendTo ($('#avaliable .drag-class'));
            }    
        },
        CheckSelected(){
            if($('#blocks_to_append').children().length<3){
                alert('Минимум 3');
            }
            else{
                alert("Сохранено");
            }
         
        },
    }
});
const empties=document.querySelectorAll('.empty_block');
var num_selected=0;