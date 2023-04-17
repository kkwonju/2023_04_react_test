import React, { useState } from "react";

export default function ProductListItem(props) {
    const imgNo = props.imgNo;
    const productName = props.name;
    const productPriceFormatted = props.productPriceFormatted;

    return (
        <>
            <div style={{
                display: "inline-flex",
                flexDirection: "column",
                gap: "10px"
            }}>
                <img src={`https://picsum.photos/id/${imgNo}/400/400`} alt="" />
                <div style={{ textAlign: 'center', color: 'gray' }}>{productName}</div>
                <div style={{ textAlign: 'center', color: 'gray' }}>{productPriceFormatted}</div>
            </div>
        </>
    )
}