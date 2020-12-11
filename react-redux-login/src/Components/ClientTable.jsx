import React, { Component } from 'react';
// import { DataGrid } from '@material-ui/data-grid';

class ClientTable extends Component {
    render() {
        const columns = [
            { field: 'id', headerName: 'ID', width: 70 },
            { field: 'Nome', headerName: 'Nome', width: 130 },
            { field: 'Age', headerName: 'Idade', width: 130 },
            { field: 'Email', headerName: 'Email', width: 130 },
        ];

        const rows = [
            { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
            { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
            { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        ];

        return (
            <div>
                Renderizando o ClientTable
                {/* Ver como instalar e como funciona esse Table */}
               {/* <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />  */}
            </div>
        );
    }
}

export default ClientTable;
