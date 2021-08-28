import React, { useEffect, useState } from 'react';
import { Table, Tag, Typography } from 'antd';
import Axios from "axios";


const ProductTable = () => {
    const [state, setstate] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        await Axios.get(process.env.REACT_APP_API_URL).then(
            res => {
                setloading(false);
                setstate(
                    res.data.map(row => ({
                        Name: row.Name,
                        ProductNumber: row.ProductNumber,
                        Color: row.Color,
                        StandardCost: row.StandardCost,
                        ListPrice: row.ListPrice,
                    }))
                );
            }
        ).catch(error => {
            setloading(false);
            setstate([]);
        });
    };

    const columns = [
        {
            title: 'Product Name',
            dataIndex: 'Name',
            key: 'Name',
            render: text => <Typography.Text strong>{text}</Typography.Text>,
        },
        {
            title: 'Product Number',
            dataIndex: 'ProductNumber',
            key: 'ProductNumber',
        },
        {
            title: 'Color',
            dataIndex: 'Color',
            key: 'Color',
            render: color => {
                let tagColor = '';
                let arrTags = [];

                if (color) {
                    arrTags = color.split("/").map(item => {
                        switch (item) {
                            case "Red":
                                tagColor = "red";
                                break;
                            case "Multi":
                                tagColor = "magenta";
                                break;
                            case "Silver":
                            case "Grey":
                                tagColor = "geekblue";
                                break;
                            case "Yellow":
                                tagColor = "gold";
                                break;
                            case "Blue":
                                tagColor = "blue";
                                break;
                            default:
                                tagColor = "default";
                        }

                        return <Tag color={tagColor}>{item}</Tag>;
                    });
                }

                return arrTags;
            }
        },
        {
            title: 'Standard Cost',
            dataIndex: 'StandardCost',
            key: 'StandardCost',
        },
        {
            title: 'List Price',
            dataIndex: 'ListPrice',
            key: 'ListPrice',
        },
    ];

    return <Table columns={columns} dataSource={state} loading={loading} />;
}

export default ProductTable;