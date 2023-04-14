import React, { useState } from "react";

export default function Counter() {
    const [no, setNo] = useState(0);

    const noIsEvenDiv = (
        <>
            <hr/>
            {no % 2 == 0 ? <div>짝수입니다</div> : <div>홀수입니다</div>}
        </>
    )
        // no % 2 == 0 ? (
        //     <>
        //         <hr />
        //         <span>짝수입니다</span>
        //     </>
        // ) : (
        //     <>
        //         <hr />
        //         <span>홀수입니다</span>
        //     </>
        // );

    const noIs8MultipleDiv = no % 8 == 0 && no != 0 && (
        <>
            <hr/>
            <div>8의 배수입니다1</div>
        </>
    );

    // const noIsNot8MultipleDiv = no % 8 == 0 || (
    //     <>
    //         <hr/>
    //         <div>8의 배수가 아닙니다</div>
    //     </>
    // );

    return (
        <>
            숫자 : {no}
            <hr />
            <button onClick={() => setNo(no + 1)}>증가</button>
            {noIsEvenDiv}
            {noIs8MultipleDiv}
            {noIsNot8MultipleDiv}

            {no != 0 && no % 8 == 0 ? (
                <>
                    <hr />
                    <div>8의 배수입니다2</div>
                </>
            ) : (
                <></>
            )}
        </>
    );
}