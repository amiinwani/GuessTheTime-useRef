import React from 'react'
import { forwardRef , useImperativeHandle , useRef} from 'react'

export const ResultModal = forwardRef (function  ResultModal({ result , targetTime } , ref ) {
    const dialog =  useRef()

    useImperativeHandle(
        ref , () =>{
            return{
                open(){
                    dialog.current.showmodal();
                }
            }
        }
    )
 
    return (
    <dialog ref={ref} className='result-modal' open >
        <h2>Your {result}</h2>
        <p>The Target time was
            <strong>
                {targetTime} seconds.
            </strong>
        </p>
        <p>You stopped the timer with
            <strong> X seconds left.</strong> 
            {/* will add it later dynamically */}
        </p>
        <form method='dialog'>
            <button>Close </button>
        </form>
    </dialog>
  )
})


//pop up for the - results
//take the main things and finish the course as fast as possible
//forwarding a ref -- using the pros simply
//dialog element has built in modal method which you can call reffering to the element then an whih
//can be used to render peridiocally





 