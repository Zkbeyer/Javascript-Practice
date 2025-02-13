window.addEventListener('load',() => {
        const form = document.querySelector('#expense_input');
        const reason_el = document.querySelector("#reason-input");
        const date_el = document.querySelector('#date_input');
        const cost_el = document.querySelector('#cost_input');
        const list = document.querySelector('#expenses');


        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const reason = reason_el.value;
            const date = date_el.value;
            const cost = cost_el.value;

            if (!reason) {
                alert("please give reason");
                return;
            };
            if (!date) {
                alert("please select date");
                return;
            };
            if (!cost) {
                alert("please input cost");
                return;
            };
            if (+cost != cost) {
                alert("make sure cost is a number (no $)");
                return;
            };

            const cost_actual = +cost;

            const expense = document.createElement("div");
            expense.classList.add('expense');

            const content = document.createElement('div');
            content.classList.add('content');

            expense.appendChild(content);

            const reason_li = document.createElement('input');
            reason_li.classList.add('text');
            reason_li.type = ('text');
            reason_li.value = (reason);
            reason_li.setAttribute('readonly', 'readonly');

            const date_li = document.createElement('input');
            date_li.classList.add('date');
            date_li.type = ('date');
            date_li.value = (date);
            date_li.setAttribute('readonly', 'readonly');

            const cost_li = document.createElement('input');
            cost_li.classList.add('cost');
            cost_li.type = ('text');
            cost_li.value = ("$" + cost_actual.toFixed(2));
            cost_li.setAttribute('readonly', 'readonly');

            content.appendChild(reason_li);
            content.appendChild(date_li);
            content.appendChild(cost_li);

            list.appendChild(expense);

            const actions = document.createElement('div');
            actions.classList.add('actions');

            const edit_button = document.createElement('button');
            edit_button.classList.add('edit');
            edit_button.innerHTML = ('Edit');

            const delete_el = document.createElement('button');
            delete_el.classList.add("delete");
            delete_el.innerHTML = ("Delete");

            actions.appendChild(edit_button);
            actions.appendChild(delete_el);

            expense.appendChild(actions);

            reason_el.value = "";
            cost_el.value = "";
            date_el.value = "";

            edit_button.addEventListener('click', () => {
                if (edit_button.innerText.toLowerCase() == "edit") {
                    reason_li.removeAttribute('readonly');
                    reason_li.focus();
                    date_li.removeAttribute('readonly');
                    edit_button.innerHTML = ("Save");
                } else if (edit_button.innerText.toLowerCase() == "save"){
                    reason_li.setAttribute('readonly', 'readonly');
                    date_li.setAttribute('readonly', 'readonly');
                    edit_button.innerHTML = ("Edit");
                };  
            });

            delete_el.addEventListener('click', () => {
                list.removeChild(expense);
            })
            
        });
        
    });