import Component from '@ember/component';

export default Component.extend({
    actions:{
        GetInfo(){
            var obj=map.get(this.contract);
            $('#results1').append(obj.name);
            $('#results2').append(obj.date);
            $('#results3').append(obj.fio);
            $('#results4').append(obj.rekv);
        }
    }
});
var map=new Map();
var contract1={
    name: "Договор оказания образовательных услуг",
    date: "21.03.2018",
    fio: "Харламов Александр Дмитриевич",
    rekv: "1234545678912"
};
var contract2={
    name: "Договор оказания образовательных услуг",
    date: "23.04.2019",
    fio: "Юшков Кирилл Вадимович",
    rekv: "1234545678912"
};
var contract3={
    name: "Договор оказания образовательных услуг",
    date: "13.01.2019",
    fio: "Кочетов Денис Валерьевич",
    rekv: "1234545678912"
};
var contract4={
    name: "Договор оказания образовательных услуг",
    date: "23.02.2019",
    fio: "Гоголев Роман Генадьевич",
    rekv: "1234545678912"
};
var contract5={
    name: "Договор оказания образовательных услуг",
    date: "23.04.2019",
    fio: "Юшков Кирилл Вадимович",
    rekv: "1234545678912"
};
map.set("123456ABCDEF",contract1);
map.set("654321FEDCBA",contract2);
map.set("123321ABCDEF",contract3);
map.set("321123FEDCBA",contract4);
map.set("111111FEDCBA",contract5);