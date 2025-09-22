import React, { useState } from 'react'
import data from './data'

function Accordion() {
    // 'selected' stores the ID of the item that is currently open when multi-selection is OFF.
    // 'setselected' is the function that updates the 'selected' variable.
    const [selected, setselected] = useState(null)

    // A boolean that checks if multi-selection mode is ON or OFF.
    // 'setenablemultiselection' is the function that updates this variable.
    const [enablemultiselection, setenablemultiselection] = useState(false)

    // Used to store the IDs of multiple open accordion items.
    const [multiple, setmultiple] = useState([])

    /* This function handles multi-selection. First, it creates a copy of the 'multiple' array.
      Then, it checks if the clicked item's ID ('getCurrentId') is already in the copied array.
      If it's present, it removes the ID. If it's not present, it adds the ID to the array.
      Finally, it updates the state with the modified copy.
    */
    const handleMultiselection = (getCurrentId) => {
        let copymultiple = [...multiple]
        const findindexofcurrentid = copymultiple.indexOf(getCurrentId)
        if (findindexofcurrentid === -1) {
            copymultiple.push(getCurrentId)
        } else {
            copymultiple.splice(findindexofcurrentid, 1)
        }
        setmultiple(copymultiple)
    }


    /*
      This function handles single selection. When an item is clicked, it gives us its ID.
      If that ID is already the 'selected' one, it closes the item by setting 'selected' to null.
      Otherwise, it opens the new item by setting 'selected' to that ID.
    */
    const handleSingleSelection = (getCurrentId) => {
        setselected(getCurrentId === selected ? null : getCurrentId)
    }
   


    return (
       <div className='flex h-screen w-screen flex-col items-center justify-center gap-5 '>
    <button
        onClick={() => setenablemultiselection(!enablemultiselection)}
        // This is a toggle. If the value is true, this sets it to false, and vice-versa.
        className={`px-5 py-2.5 rounded-md font-bold text-white transition-colors ${enablemultiselection ? 'bg-green-700' : 'bg-[#614101]'
            }`}
    >
        {/* If multi-selection is on, the button text is "Disable Multi Selection"; otherwise, it's "Enable Multi Selection". */}
        {enablemultiselection ? 'Disable Multi Selection' : 'Enable Multi Selection'}
    </button>

    <div className='w-[500px]'>
        {
            // If the 'data' array exists and is not empty, map over it to render each item.
            data && data.length > 0 ?
                data.map(DataItem => <div key={DataItem.id} className='mb-2.5 bg-[#614101] px-5 py-2.5'>

                    <div onClick={
                        // If multi-selection is on, call 'handleMultiselection'; otherwise, call 'handleSingleSelection'.
                        enablemultiselection ?
                        () => handleMultiselection(DataItem.id) :
                        () => handleSingleSelection(DataItem.id)
                        }
                        className="text-white flex justify-between item-center cursor-pointer">
                        <h3>{DataItem.question}</h3>
                        <span>+</span>
                    </div>

                    {
                        // This logic decides whether to show an item's answer.
                        enablemultiselection ?
                            // In multi-select mode, show the answer if this item's ID is in the 'multiple' array.
                            multiple.indexOf(DataItem.id) !== -1 &&
                            <div className='h-auto text-white pt-2'> {DataItem.answer}</div> :
                            // In single-select mode, show the answer only if this item's ID matches the 'selected' ID.
                            selected === DataItem.id && <div className='h-auto text-white pt-2'> {DataItem.answer}</div>
                    }

                </div>)
                // If the 'data' array doesn't exist or is empty, display "No data found".
                : <div>No data found</div>
        }
    </div>
</div>
    )
}

export default Accordion
