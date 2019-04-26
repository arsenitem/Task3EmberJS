import Component from '@ember/component';

export default Component.extend({
    classNames: ['drop-class'],
    classNameBindings : [ 'dragClass' ],
    dragClass         : 'deactivated',

     dragOver: function(event){
        
    },
      drop:function(event){
    	
    },
       dragEnter:function(event){
        console.log(event.dataTransfer.getData('text'));
    },
     dragLeave: function(event){
     
    }
});
