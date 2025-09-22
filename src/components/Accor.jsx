import React, { useState } from 'react'
import data from './data'

function Accor() {
    // State variables
    const [selected, setSelected] = useState(null)
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    const [multiple, setMultiple] = useState([])

    // Handle multi-selection
    const handleMultiSelection = (id) => {
        /* Your logic here */
        let cpy = [...multiple]
        const findIndex = cpy.indexOf(id)
        if (findIndex === -1) {
            cpy.push(id)
        } else {
            cpy.splice(findIndex, 1)
        }
        setMultiple(cpy)
    }

    // Handle single selection
    const handleSingleSelection = (id) => {
        /* Your logic here */
        setSelected(id === selected ? null : id)
    }


    return (
        <div>
            <button
                onClick={() => setEnableMultiSelection(!enableMultiSelection)}
                className={`px-5 py-2.5 rounded-md font-bold text-white transition-colors ${enableMultiSelection ? 'bg-green-700' : 'bg-[#614101]'
                    }`}
            >
                {/* Change button text based on enableMultiSelection */}
                {enableMultiSelection ? 'disable' : 'enable'}
            </button>

            <div>
                {data && data.length > 0 ? (
                    data.map((item) => (
                        < div key={item.id} className='mb-2.5 bg-[#614101] px-5 py-2.5' >
                            <div

                                onClick={
                                    enableMultiSelection ?
                                        () => handleMultiSelection(item.id) :
                                        () => handleSingleSelection(item.id)
                                }
                            >
                                <h3>{item.question}</h3>
                                <span>
                                    {enableMultiSelection ?
                                        multiple.includes(item.id)
                                            ? '-' : '+'
                                        : selected === item.id
                                            ? '-' : '+'
                                    }
                                </span>
                            </div>

                            {/* Conditionally render the answer */}
                            
                                {(
                                    enableMultiSelection
                                        ? multiple.includes(item.id)
                                        : selected === item.id)
                                    && (<div className="h-auto text-white pt-2">{item.answer}</div>

                                    )}
                            </div>

                            ))
                            ) : (
                            <div>No data found</div>
            )}
                        </div >
        </div >
            )
}

            export default Accor
