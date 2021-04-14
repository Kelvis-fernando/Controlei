const Modal = {
    open() {
        document.querySelector('.modal-overlay').classList.add('active');
    },
    cancel() {
        document.querySelector('.modal-overlay').classList.remove('active');
    }
};

const transactions = [
    {
        id: 1,
        description: 'Luz',
        value: -50000,
        date: '23/01/2021'
    },
    {
        id: 2,
        description: 'Criação',
        value: 500000,
        date: '23/01/2021'
    },
    {
        id: 3,
        description: 'Internet',
        value: -20000,
        date: '23/01/2021'
    },
    {
        id: 4,
        description: 'App',
        value: 200000,
        date: '23/01/2021'
    },
];

const Transaction = {
    incomes() {
        
    },
    expenses() {

    },
    total() {

    }
};

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transactions, index) {
        const tr = document.createElement('tr');
        tr.innerHTML = DOM.innerHTMLTransaction(transactions);

        DOM.transactionsContainer.appendChild(tr);
    },

    innerHTMLTransaction(transactions) {
        const CSSclass = transactions.value > 0 ? "income" : "expense"

        const html = `
                <td class="descripition">${transactions.description}</td>
                <td class="${CSSclass}">${transactions.value}</td>
                <td class="date">${transactions.date}</td>
                <td><img src="../assets/minus.svg" alt=""></td>
        `
        return html
    }
};

transactions.forEach(function(transactions) {
    DOM.addTransaction(transactions)
});