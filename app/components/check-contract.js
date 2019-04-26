import Component from '@ember/component';

export default Component.extend({
    actions:{
        CheckContract(){
            if(Check(this.contract)==true){
                $('#alert').empty();
                $('<div/>', {
                    class:"alert alert-success",
                    text: "Номер договора указан корректно",
                    role: "alert"
                }).appendTo($('#alert'))
            }
            else{
                $('#alert').empty();
                $('<div/>', {
                    class:"alert alert-danger",
                    text: "Номер договора указан некорректно",
                    role: "alert"
                }).appendTo($('#alert'))
            }
        }
    }
});

function Check(contract_num){
    if(contract_num.length!=12){
        return false;
    }
    else{
        contract_num.substring(0,6);
        var re1=/\d{6}/;
        var re2=/[A-Z]{6}/;
        var res1=re1.test( contract_num.substring(0,6));
        var res2=re2.test( contract_num.substring(6,12));
            if(res1==true &&res2==true){
                return true;
            }
    }
}