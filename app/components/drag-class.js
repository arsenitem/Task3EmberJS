import Component from '@ember/component';

export default Component.extend({
    classNames: ['drag-class'],
     attributeBindings: ['draggable'],
    draggable: "true",
    dragStart: function(event) {
        console.log('taken');
        event.dataTransfer.setData('text', event.target.id);
    },
    dragEnd: function(){
      
    },
    click: function(e){
        var tomove='#'+e.target.id;
        if($('#blocks_to_append').children().length<6){
            $(tomove).appendTo ($('#blocks_to_append'));
        }
        else{
            alert("Не больше 6");
        }
       
    }
});
