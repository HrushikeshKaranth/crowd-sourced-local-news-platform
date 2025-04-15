import React from 'react'

export default function UploadNewsModal(props) {
    console.log(props.state);

    const showHideClassName = props.state.isOpen ? "modal display-block" : "modal display-none";

    function handleClose() {
        props.state.setIsOpen(false);
    }
    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <div className='modalHeader'>Upload News</div>
                <div>
                    <div>Title: </div>
                    <input type="text" />
                </div>
                <div>
                    <div>Description:</div>
                    <textarea name="" id="" rows="5" cols="15"></textarea>
                </div>
                <div>
                    <div>Tags:</div> 
                    <input type="text" />
                </div>
                <div>
                    <div>Image Link:</div> 
                    <input type="text" />
                </div>
                <div className='modal-button-section'>
                    <button className='modal-button' type="button" >
                        Submit
                    </button>
                    <button className='modal-button' type="button" onClick={handleClose}>
                        Close
                    </button>

                </div>
            </section>
        </div>
    )
}
