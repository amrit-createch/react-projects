import React from 'react'

function Filterbar() {
    return (
        <div className='  min-h-screen  flex-row w-full max-w-[20rem] border-r border-r-white/10 p-6'>
            <div>
                <div className='form-control'>
                    <label className="label cursor-pointer">
                        <span className='label-text'>
                            Ascending
                        </span>
                        <input type="radio" name="radio-10" className="radio p-1 w-4 h-4 checked:bg-blue-500" />
                    </label>
                </div>
                <div className='form-control '>
                    <label className="label cursor-pointer">
                        <span className='label-text '>
                            Descending
                        </span>
                        <input type="radio" name="radio-10" className="radio  p-1 w-4 h-4 checked:bg-blue-500" />
                    </label>
                </div>
            </div>
            <div>
                 <div className='form-control'>
                    <label className="label cursor-pointer">
                        <span className='label-text'>
                            Ascending
                        </span>
                        <input type="checkbox"  className="checkbox checkbox-sm border-2 checkbox-primary" />
                    </label>
                </div>
             
            </div>
        </div>
    )
}

export default Filterbar
