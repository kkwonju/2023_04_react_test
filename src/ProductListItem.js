import React, { useState } from "react";

// 방법 0
export default function ProductListItem({
    imgNo,
    name: productName,
    price: productPriceFormatted,
}) {

    /*
    방법 1
    export default function ProductListItem(props) {
    const {imgNo, name:productName, productPriceFormatted} = props;
    */

    /*
    방법 2
    export default function ProductListItem(props) {
    const {imgNo, name, productPriceFormatted} = props;
    const productName = name;
    */

    /*
    방법 3
    export default function ProductListItem(props) {
    const imgNo = props.imgNo;
    const productName = props.name;
    const productPriceFormatted = props.productPriceFormatted;
    */

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