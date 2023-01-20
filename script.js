const form = document.querySelector('form');
const nlwSetup = new NLWSetup(form);

const data = {
    gym: ['01-19', '01-20', '01-21', '01-22', '01-23', '01-24', '01-25', '01-26', '01-27', '01-28']
}

nlwSetup.setData(data);
nlwSetup.load();