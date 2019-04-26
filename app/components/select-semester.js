import Component from '@ember/component';
import selectProgramms from './select-programms';

export default Component.extend({
   actions:{
         ChangeSemester(){
            
         }
         
   },
   click:function(e){
             var current_id=e.target.id;
             var arr=map.get(current_id);
             $('#avaliable .drag-class').empty();
             $('#blocks_to_append').empty();
            for(var i=0;i<arr.length;i++){
                $('<div/>', {
                    id: i,
                    class:"programm_block",
                    text: arr[i]
                }).appendTo($('#avaliable .drag-class'));
                
            }
            
   }
});
let map=new Map();
var arr1=["Линейнеая алгебра","Дискретная математика","Немецкий","Маркетинг","Менеджмент"];
var arr2=["Философия","История","Английский","Аналих данных","Информатика","Право","Управление данными"];
map.set("1",arr1);
map.set("2",arr2);

