// src/pages/detail/Unit-detail.js
import React from 'react';
import {useLocation} from 'react-router-dom';
import {Button} from "react-bootstrap";
import {getTableCellBodyStyle, getTableCellHeadStyle} from "../../components/utils";
import '../../App.css';

const UnitDetail = () => {
    const location = useLocation();
    const {row} = location.state || {};

    console.log('location.state:', location.state); // Debugging statement
    console.log('row:', row); // Debugging statement

    return (
        <div className="standard">
            <div className="title">
                유니트 상세정보
            </div>
            {row ? (
                <table className="table compact-table">
                    <tbody>
                    <tr>
                        <td style={getTableCellHeadStyle()}>바코드</td>
                        <td style={getTableCellBodyStyle()} colSpan={3}>{row?.barcode}</td>
                    </tr>
                    <tr>
                        <td style={getTableCellHeadStyle()}>제조사S/N</td>
                        <td style={getTableCellBodyStyle()} colSpan={3}>{row?.serial_number}</td>
                    </tr>

                    <tr>
                        <td style={getTableCellHeadStyle()}>현재위치</td>
                        <td style={getTableCellBodyStyle()} colSpan={3}>{row?.location}</td>
                    </tr>
                    <tr>
                        <td style={getTableCellHeadStyle()}>통합시설코드</td>
                        <td style={getTableCellBodyStyle()}>{row?.zpCode}</td>
                        <td style={getTableCellHeadStyle()}>부서</td>
                        <td style={getTableCellBodyStyle()}>{row?.region_name}</td>
                    </tr>
                    <tr>
                        <td style={getTableCellHeadStyle()}>유니트명</td>
                        <td style={getTableCellBodyStyle()}>{row?.unit_name}</td>

                        <td style={getTableCellHeadStyle()}>제조사</td>
                        <td style={getTableCellBodyStyle()}>{row?.manufacturer}</td>
                    </tr>
                    <tr>
                        <td style={getTableCellHeadStyle()}>장비구분</td>
                        <td style={getTableCellBodyStyle()}>{row?.main_type}</td>
                        <td style={getTableCellHeadStyle()}>장비타입</td>
                        <td style={getTableCellBodyStyle()}>{row?.sub_type}</td>
                    </tr>
                    <tr>
                        <td style={getTableCellHeadStyle()}>상태</td>
                        <td style={getTableCellBodyStyle()}>{row?.status}</td>
                        <td style={getTableCellHeadStyle()}>이동사유</td>
                        <td style={getTableCellBodyStyle()}>{row?.reason}</td>
                    </tr>
                    <tr>
                        <td style={getTableCellHeadStyle()}>변경일자</td>
                        <td style={getTableCellBodyStyle()}>{row?.changed_At}</td>
                        <td style={getTableCellHeadStyle()}>변경이력</td>
                        <td style={getTableCellBodyStyle()}>{row?.chagend_reason}</td>
                    </tr>
                    </tbody>
                </table>

            ) : (
                <p>No data available</p>
            )}
            <div style={{display: 'flex', justifyContent: 'end'}}>
                <Button className='btn btn-primary' style={{marginRight: '5px'}}>입고</Button>
                <Button className='btn btn-danger'>출고</Button>
            </div>
        </div>
    );
};

export default UnitDetail;