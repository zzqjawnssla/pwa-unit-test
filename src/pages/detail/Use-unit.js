import React, {Fragment, useEffect, useState} from 'react';
import {Button, Form, Table} from 'react-bootstrap';
import {collection, getDocs} from 'firebase/firestore';
import {db} from '../../firebase/firebase';
import {getTableCellBodyStyle, getTableCellHeadStyle} from '../../components/utils';
import {useNavigate} from "react-router-dom";

const UseUnit = () => {
    const navigate = useNavigate();

    const [data, setData] = useState();
    // const [detailModal, setDetailModal] = useState(false);

    const fetchUnitData = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'unitData'));
            setData(querySnapshot.docs.map(doc => doc.data()));
        } catch (error) {
            console.error('Error fetching documents:', error);
        }
    };

    useEffect(() => {
        fetchUnitData();
    }, []);

    const handleRowClick = (row) => {
        navigate('/unit-detail', {state: {row}});
    };

    return (
        <div className="standard">
            <div className="title">
                유니트 입고/출고
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div style={{marginRight: '10px', width: 'auto'}}>
                    <Form.Control/>
                </div>
                <div>
                    <Button>조회</Button>
                </div>
            </div>
            <div style={{marginTop: '10px'}}>
                <Table>
                    <thead>
                    <tr>
                        <th rowSpan={2} style={{...getTableCellHeadStyle(), verticalAlign: 'middle'}}>순번</th>
                        <th style={getTableCellHeadStyle()}>바코드</th>
                        <th style={getTableCellHeadStyle()}>국소명</th>
                        <th style={getTableCellHeadStyle()}>상태</th>
                    </tr>
                    <tr>
                        <th style={getTableCellHeadStyle()}>제조사S/N</th>
                        <th style={getTableCellHeadStyle()}>통합시설코드</th>
                        <th style={getTableCellHeadStyle()}>변경일자</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data?.map((item, index) => (
                        <Fragment key={index}>
                            <tr onClick={() => handleRowClick(item)}>
                                <td rowSpan={2}
                                    style={{...getTableCellBodyStyle(), verticalAlign: 'middle'}}>{index + 1}</td>
                                <td style={getTableCellBodyStyle()}>{item.barcode}</td>
                                <td style={getTableCellBodyStyle()}>{item.location}</td>
                                <td style={getTableCellBodyStyle()}>{item.status}</td>
                            </tr>
                            <tr onClick={() => handleRowClick(item)}>
                                <td style={getTableCellBodyStyle()}>{item.serial_number}</td>
                                <td style={getTableCellBodyStyle()}>{item.zpCode}</td>
                                <td style={getTableCellBodyStyle()}>{item.changed_At}</td>
                            </tr>
                        </Fragment>
                    ))}
                    </tbody>
                    {/*<UnitDetailModal open={detailModal} onHide={() => setDetailModal(false)} row={detailRow}/>*/}
                </Table>
            </div>
        </div>
    );
};

export default UseUnit;