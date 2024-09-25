import React, { useState } from 'react'

const Demo = () => {
    var [count, setCount] = useState(0)
    var increase = () => {
        setCount(count + 1)
    }
    var Descrese = () => {
        if(count > 0 )
        setCount(count - 1)
    }
    return (
        <>
            <div className='container text-center justify-content-center pt-5'>
                <p>
                    Count a no {count}
                </p>
                <div className='d-flex gap-3 text-center justify-content-center'>
                    <button className='btn btn-success' onClick={increase}>increase</button>
                    <button className='btn btn-success' onClick={Descrese}>Descrese</button>
                </div> 
            </div>
        </>
    )
}

export default Demo
