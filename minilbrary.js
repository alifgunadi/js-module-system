


class Table {
    constructor (init){
        this.init = init;
    }
    createHeader(data) {
        let open = "<thead><tr>";
        let close = "</tr></thead>";
        data.forEach((d) => {
            open += `<th>${d}</th>`;
        });
    
        return open + close;
    }
    
    createBody(data) {
        let open = "<tbody>";
        let close = "</tbody>";
    
        data.forEach((d) => {
            open += 
            `<tr>
                <td>${d[0]}</td>
                <td>${d[1]}</td>
                <td>${d[2]}</td>
            </tr>`;
        });
    
        return open + close;
    }
    
    render(element) {
        let table =
            "<table class ='table table-hover'>" + this.createHeader(this.init.columns) + this.createBody(this.init.data) + "</table>";
        element.innerHTML = table;
    }
}



const table = new Table({
    columns: [`Name`, `Email`, `Phone`],
    data: [
        [`Muhammad Alif Gunadi`, `alifgunadi1303@gmail.com`, `082387621140`],
        [`Joko Susanto`, `jokosusanto@gmail.com`, `082389516550`],
        [`M. Raffi Boston`, `rafibost@gmail.com`, `082389123550`],
        [`Supriyanto`, `supriyanto@gmail.com`, `081245516954`],
        [`Darius Suprotno`, `dariusaja@gmail.com`, `0853389416659`],
        [`Bambang Ngosan`, `bambanggos@gmail.com`, `082449577537`],
        [`Afif Bahlul`, `afifbahh@gmail.com`, `0878846516998`]
    ]
})

const app = document.getElementById("app");
table.render(app);