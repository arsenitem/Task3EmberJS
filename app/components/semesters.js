import Component from '@ember/component';

export default Component.extend({
    classNames: ['semesters'],
    click: function(e){
        var current_id=e.target.id;
        alert(current_id);
        map.get(1).length;
    
} 
});
let map=new Map();
var arr1=["Линейнеая алгебра","Дискретная математика","Немецкий","Маркетинг","Менеджмент"];
var arr2=["Философия","История","Английский","Аналих данных","Информатика","Право","Управление данными"];
map.set(1,arr1);
map.set(2,arr2);