import React, { useState } from 'react'
import data from './data'

function Accordion() {
    const [selected, setselected] = useState(null)
    const [enablemultiselection, setenablemultiselection] = useState(false)
    const [multiple, setmultiple] = useState([])

    const handleMultiselection = (getCurrentId) => {
        let copymultiple = [...multiple]
        const findindexofcurrentid = copymultiple.indexOf(getCurrentId)
        if (findindexofcurrentid === -1) {
            copymultiple.push(getCurrentId)
        } else copymultiple.splice(findindexofcurrentid, 1)
        setmultiple(copymultiple)
    }
    console.log(selected, multiple);

    const handleSingleSelection = (getCurrentId) => {
        setselected(getCurrentId === selected ? null : getCurrentId)
    }
    console.log(selected);
    return (
        <div className='flex h-screen w-screen flex-col items-center justify-center gap-5 '>
            <button onClick={() => setenablemultiselection(!enablemultiselection)} className='bg-[#614101] '>Enable Multi Selection</button>
            <div className='w-[500px]'>
                {
                    data && data.length > 0 ?
                        data.map(DataItem => <div className='mb-2.5 bg-[#614101] px-5 py-2.5'>
                            <div onClick={enablemultiselection ? () => handleMultiselection(DataItem.id) : () => handleSingleSelection(DataItem.id)} className="text-white flex justify-between item-center cursor-pointer">
                                <h3>{DataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                enablemultiselection ?
                                    multiple.indexOf(DataItem.id) !== -1 &&
                                    <div className='h-auto text-white pt-2'> {DataItem.answer}</div> :
                                    selected === DataItem.id && <div className='h-auto text-white pt-2'> {DataItem.answer}</div>
                            }

                        </div>)
                        : <div>No data found</div>
                }
            </div>
        </div>
    )
}

export default Accordion
