import React from 'react'

export const ResultModal = ({result , targetTime }) => {
  return (
    <dialog className='result-modal'>
        <h2>Your {result}</h2>
        <p>The Target time was
            <strong>
                {targetTime} seconds.
            </strong>
        </p>
        <p>You stopped the timer with
            <strong> X seconds left.</strong>
        </p>
        <form method='dialog'>
            <button>Close </button>
        </form>
    </dialog>
  )
}
