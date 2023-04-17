import React, { useState } from "react";

export default function ProductListItem() {
    return (
        <>
            <div style={{display: "flex", gap: '10px'}}>
                <div style={{ display: "inline-flex", flexDirection: "column", gap: "10px" }}>
                    <img src="https://picsum.photos/id/250/200/300" alt="" />
                    <div style={{ textAlign: 'center' }}>Nikon Camera</div>
                    <div style={{ textAlign: 'center' }}>3,000,000</div>
                </div>
                <div style={{ display: "inline-flex", flexDirection: "column", gap: "10px" }}>
                    <img src="https://picsum.photos/id/1/200/300" alt="" />
                    <div style={{ textAlign: 'center' }}>Mac Book PRO</div>
                    <div style={{ textAlign: 'center' }}>4,500,000</div>
                </div>
                <div style={{ display: "inline-flex", flexDirection: "column", gap: "10px" }}>
                    <img src="https://picsum.photos/id/2/200/300" alt="" />
                    <div style={{ textAlign: 'center' }}>Mac Book Pro Plus</div>
                    <div style={{ textAlign: 'center' }}>5,000,000</div>
                </div>
            </div>
        </>
    )
}