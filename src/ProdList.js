import ProductListItem from "./ProductListItem";
import React, { useState } from "react";

export default function ProdList() {
    return (
        <>
            <ul className="flex gap-[10px]">
                <li className="flex-grow">
                    <ProductListItem
                        imgNo={1}
                        name="Mac Book"
                        price={'3,000,000'}
                    />
                </li>
                <li className="flex-grow">
                    <ProductListItem
                        imgNo={2}
                        name="MacBook Pro"
                        price={'3,500,000'}
                    />
                </li>
                <li className="flex-grow">
                    <ProductListItem
                        imgNo={201}
                        name="Mac Book air"
                        price={'4,000,000'}
                    />
                </li>
            </ul>
        </>
    )
}