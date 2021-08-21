import React from 'react';

function Table() {
    return (
        // HTML
        <div>
            <table
                border="1"
                width="20%"
                height="100"
                cellSpacing="3">
                <thead></thead>
                <tbody>
                    <tr>
                        <th>가톨릭</th>
                        <td>미사</td>
                        <td>신부</td>
                        <td>성모</td>
                    </tr>
                    <tr>
                        <th>개신교</th>
                        <td>예배</td>
                        <td>목사</td>
                        <td>솔라 스크립투라</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table;