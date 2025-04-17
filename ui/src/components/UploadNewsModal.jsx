import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState';
import axios from 'axios';

export default function UploadNewsModal(props) {

    const { username, userid } = useContext(GlobalContext);

    let [data, setData] = useState({
        title: "",
        description: "",
        imagelink: "",
        username: username,
        userid: userid,
        adminapproved: false
    })

    const handleChange = (e) => {
        setData((prevalue) => {
            return {
                ...prevalue,
                [e.target.name]: e.target.value
            }
        })
    }

    // function to upload news
    function uploadNews() {
        if (data.title === "" || data.description === "" || data.imagelink === "") {
            alert('Fill all the details 🙄!')
        }
        else {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            axios.post('/api/v1/news', data, config)
                .then((res) => {
                    alert("News Saved 👍");
                    handleClose();
                    window.location.reload();
                })
                .catch((err) => {
                    console.error(err);
                    // alert(err.response.data.error)
                    alert("Unable to Upload News at this time 😢");
                })
        }
    }

    const showHideClassName = props.state.isOpen ? "modal display-block" : "modal display-none";

    function handleClose() {
        props.state.setIsOpen(false);
    }
    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <div className='modalHeader'>Upload News</div>
                <div className='modal-main-div'>
                    <div className='modal-headings'>Title: </div>
                    <input name='title' type="text" value={data.title} placeholder='Enter News Title' onChange={handleChange} />
                </div>
                <div className='modal-main-div'>
                    <div className='modal-headings'>Description:</div>
                    <textarea name="description" id="" rows="5" cols="15" value={data.description} placeholder='Enter News Description' onChange={handleChange}></textarea>
                </div>
                {/* <div className='modal-main-div'>
                    <div>Tags:</div>
                    <input type="text" />
                </div> */}
                <div className='modal-main-div'>
                    <div className='modal-headings'>Image Link:</div>
                    <input name="imagelink" type="text" value={data.imagelink} placeholder='Enter Image Link' onChange={handleChange} />
                </div>
                <div className='modal-button-section'>
                    <button className='modal-button' type="button" onClick={uploadNews}>
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
