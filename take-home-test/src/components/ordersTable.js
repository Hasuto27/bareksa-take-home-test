import React from 'react';
import axios from 'axios';
import '../css/Table.css';

export default class DataList extends React.Component {
    state = {
        datas: []
    }

    componentDidMount() {
        axios.get('https://ae1cdb19-2532-46fa-9b8f-cce01702bb1e.mock.pstmn.io/takehometest/web/dashboard')
            .then(res => {
                const datas = res.data.data.orders;
                this.setState({ datas });
            })
    }

    render() {
        return (
            <table className="ordersTable">
                <thead>
                    <tr>
                        <th className="odd" scope="col">Order Number</th>
                        <th className="even" scope="col">Status</th>
                        <th className="odd" scope="col">Operator</th>
                        <th className="even" scope="col">Location</th>
                        <th className="odd" scope="col">Start Date</th>
                        <th className="even" scope="col">Due Date</th>
                    </tr>
                </thead>
                <tbody>
                { this.state.datas.slice(0, 5).map(data =>
                    <tr>
                        <td>#{data.order_id.replace(/[^\d.-]/g, '')}</td>
                        <td><p className="highlight">{data.status}</p></td>
                        <td>{data.full_name}</td>
                        <td>{data.location}</td>
                        <td>{data.start_date.replaceAll('-', '/')}</td>
                        <td>{data.due_date.replaceAll('-', '/')}</td>
                    </tr>)
                }
                </tbody>
            </table>
        )
    }
}