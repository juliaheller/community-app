import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const columns = [
    { id: "surname", label: "Vorname", minWidth: 170 },
    { id: "name", label: "Name", minWidth: 170 },
    { id: "address", label: "Adresse", minWidth: 100 },
    {
        id: "phone",
        label: "Telefon",
        minWidth: 170,
        align: "right",
    },
    {
        id: "email",
        label: "Email",
        minWidth: 170,
        align: "right",
    },
];

function createData(surname, name, address, phone, email) {
    return { surname, name, address, phone, email };
}

const useStyles = makeStyles({
    root: {
        width: "100%",
    },
    container: {
        maxHeight: 440,
    },
});

export default function UserTable({ user, users }) {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    console.log(users);
    const rows = users.map((user) => {
        return createData(
            user.surname,
            user.name,
            user.address,
            user.phone,
            user.email
        );
    });

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}>
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((row) => {
                                return (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        tabIndex={-1}
                                        key={row.name}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            console.log(column.id);
                                            console.log(row);
                                            return (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}>
                                                    {column.format &&
                                                    typeof value === "number"
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
